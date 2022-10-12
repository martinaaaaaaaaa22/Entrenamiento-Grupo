DROP DATABASE IF EXISTS db_personas;
CREATE DATABASE db_personas;
USE db_personas;

-- Creación de la Tabla:

CREATE TABLE personas (
	dni INT NOT NULL PRIMARY KEY,
	nombre VARCHAR(64) NOT NULL,
	apellido VARCHAR(64) NOT NULL,
    equipo VARCHAR(64) NOT NULL,
    usuario VARCHAR(64) NOT NULL,
    contraseña VARCHAR(64) NOT NULL
);