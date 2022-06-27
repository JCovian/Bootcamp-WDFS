const ramda = require("ramda");
const bcrypt = require("bcrypt");

const express = require("express");
//const { restart } = require("nodemon"); //???
const router = express.Router();

const User = require("../models/user");

router.get("/", (req, res) => {
    // Similar al find de Mongo. Si el filtro está vacío, me devuelve todos los documentos
    const PAG_SIZE = 2;
    const page = req.query.page || 1;
    
    User.find({active:true})
    .skip((page - 1) * PAG_SIZE) // Número de documentos que saltará
    .limit(PAG_SIZE) // Número de documentos que devolverá
    .exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else { 
            res.status(200).json({ok: true, results: users});
        }
    })
});

router.get("//:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else { 
            res.status(201).json({ok: true, savedUser});
        }
    })

    /*if(body.username) {
        console.log("Recibido username");
    } else {
        console.log("No recibido username");
    }

    res.json({
        message: "Petición POST recibida correctamente.", 
        username: body.username,
        body
    });*/

    /*if(body.username) {
        res.status(200).json({message: `Recibido username: ${body.username}`});
    } else{
        res.status(400).json({ok: false, message: "El username es obligatorio"});
    }*/
});

router.put("/:id", (req, res) => {
    const id= req.params.id;
    // const body = req.body;  // Esta es la forma si no utilizamos el plugin ramda
    const body = ramda.pick(["username", "email"], req.body);
    
    User.findByIdAndUpdate(id, body, {new: true, runValidators: true}, // options
        // Si falla el update probar {new: true, runValidators: true, context: 'query' }
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else { 
                res.status(200).json({ok: true, updatedUser});
            }    
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // Borra el id indicado
    // User.findByIdAndRemove(id, (error, removedUser) => {
    //     if(error) {
    //         res.status(400).json({ok: false, error});
    //     } else { 
    //         res.status(200).json({ok: true, removedUser});
    //     }  
    // });
    
    // Para no borrar el id cambiamos el campo active a false y asi no aparecerá en las busquedas
    User.findByIdAndUpdate(id, {active: false},
        {new: true, runValidators: true},
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else if (!updatedUser) { 
                res.status(400).json({ok: false, error: "User not found"});
            } else {
                res.status(200).json({ok: true, updatedUser});
            }  
        }
    );
});

module.exports = router;