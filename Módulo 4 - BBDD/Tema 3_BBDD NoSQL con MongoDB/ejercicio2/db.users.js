const { FALSE } = require("node-sass");

db.users.insertMany(
    [
        {
            username: "Pepe",
            email: "pepe@gmail.com",
            password: "Pe1Pe2",
            birthdate: new Date(1965, 5, 21),
            lastLogin: new Date(2022, 6, 15),
            status: {
                online: false,
                available: false
            },
            contacts: []
        },{
            username: "Eloisa",
            email: "elo75@gmail.com",
            password: "12345",
            birthdate: new Date(1975, 6, 19),
            lastLogin: new Date(2022, 6, 21),
            status: {
                online: true,
                available: false
            },
            contacts: []
        },{
            username: "Romina",
            email: "romi@gmail.com",
            password: "romilaguapa",
            birthdate: new Date(2001, 12, 1),
            lastLogin: new Date(2022, 6, 20),
            status: {
                online: false,
                available: true
            },
            contacts: []
        },{
            username: "Juanin",
            email: "juaninrinrin@gmail.com",
            password: "juancholoko77",
            birthdate: new Date(1999, 2, 14),
            lastLogin: new Date(2022, 6,21),
            status: {
                online: true,
                available: true
            },
            contacts: []
        }
    ]
);

// Constante con array de los usuarios:
const users = db.users.find().toArray()

// Vamos a actualizar los contactos de los usuarios
// Usuario 0:
db.users.update({_id: users[0]._id}, {$set: {contacts: [users[1]._id, users[2]._id, users[3]._id]}})
// Usuario 1:
db.users.update({_id: users[1]._id}, {$set: {contacts: [users[0]._id, users[2]._id]}})
// Usuario 2:
db.users.update({_id: users[2]._id}, {$set: {contacts: [users[0]._id, users[1]._id]}})
// Usuario 3:
db.users.update({_id: users[3]._id}, {$set: {contacts: [users[0]._id]}})

// Añadimos mensajes al chat
db.chats.insertMany([
    {
        members: [users[0]._id, users[1]._id, users[2]._id],
        messages: [
            {from: users[0]._id, body: "Hola, vamos a la playa?", createAt: new Date(2021, 4, 8, 17, 30, 15)},
            {from: users[1]._id, body: "vale", createAt: new Date(2021, 4, 8, 17, 31, 15)},
            {from: users[2]._id, body: "Me uno!", createAt: new Date(2021, 4, 8, 17, 31, 40)}
        ]
    },{
        members: [users[0]._id, users[3]._id],
        messages: [
            {from: users[3]._id, body: "Tienes el 7 de react hecho?", createAt: new Date(2021, 4, 8 ,17, 30, 15)},
            {from: users[0]._id, body: "Si!, voy por el 12", createAt: new Date(2021, 4, 8 ,17, 30, 55)}
        ]
    }
])

// Actualizar todos los usuarios a conectado y cambiar la fecha de ultima conexión
db.users.update(
    {},
    {$set: {"status.online": true, "lastLogin": new Date()}},
    {multi: true}
    )