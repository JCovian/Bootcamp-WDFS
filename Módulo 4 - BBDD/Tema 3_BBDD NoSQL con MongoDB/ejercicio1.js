// Insertar varios productos a la vex
db.products.insertMany(
    [
        {
            name: "T-shirt",
            brand: "Adidas",
            category: "clothes",
            price: 15
        },{
            name: "Smartphone",
            brand: "iphone",
            category: "electronics",
            price: 900
        },{
            name: "Macarrones",
            brand: "Carrefour",
            category: "food",
            price: 2
        }
    ]
);

//Para que sea más comodo desde el Shell, guardamos los clientes como un array.
const customers = db.customers.find().toArray();

// Actualizar el shoppingCart del cliente John
db.customers.update(
    {name: "John"},
    {
        $set: {shoppingCart: [
            {
                product_id: products[0]._id,
                quantity: 3
            },{
                product_id: products[1]._id,
                quantity: 1
            }
        ]}
    }
);


// Creamos colección de las facturas creando varias con los respectivos identificadores
db.invoices.insertMany(
    [
        {
            productsId: products[1]._id,
            clientId: customers[0]._id,
            date: new Date()
        },{
            productsId: products[2]._id,
            clientId: customers[1]._id,
            date: new Date()
        },{
            productsId: products[0]._id,
            clientId: customers[2]._id,
            date: new Date()
        }
    ]
);