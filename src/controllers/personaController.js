const controller = {};
const myConnection = require("../database/db");


// Consultar Persona
controller.listPersonas = (req, res) => {
    myConnection.query("SELECT * FROM personas", (err, results) => {
        if (err) {
            res.json(err);
        } else {
            res.render("showPersonas", {data: results});
        }
    });
}


// Guardar Persona
controller.savePersona = (req, res) => {
    const dni = req.body.dni;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const equipo = req.body.equipo;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    
    myConnection.query("INSERT INTO personas SET ?", 
        {
            dni:dni, 
            nombre:nombre, 
            apellido:apellido, 
            equipo:equipo,  
            usuario:usuario,
            contraseña:contraseña
        }, (err, results) => {
            if (err) {
                res.json(err);
            } else {
                res.redirect("/");         
            }
        }
    );
}


// Editar Persona
controller.editPersona = (req, res) => {
    const dni = req.params.dni;
    myConnection.query("SELECT * FROM personas WHERE dni=?", [dni], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.render("editAlumnos", {data:results[0]});
        }
    });
}


// Actualizar Persona
controller.updatePersona = (req, res) => {
    const dni = req.body.dni;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const equipo = req.body.equipo;
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;


    myConnection.query("UPDATE personas SET ? WHERE dni = ?", 
        [{
            dni:dni, 
            nombre:nombre, 
            apellido:apellido, 
            equipo:equipo,  
            usuario:usuario,
            contraseña:contraseña
        }, dni], (error, results)=>{
            if (error) {
                console.log(error);
            } else {           
                res.redirect("/");         
            }
        }
    );
}


// Borrar Persona
controller.deletePersona = (req, res) => {
    const dni = req.params.dni;
    myConnection.query("DELETE FROM personas WHERE dni = ?", [dni], (err, results)=>{
        if (err) {
            res.json(err);
        } else {
            res.redirect("/");         
        }
    });
}


// Export
module.exports = controller;