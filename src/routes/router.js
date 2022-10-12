const express = require("express");
const router = express.Router();

const personaController = require("../controllers/personaController");

router.get("/", personaController.listPersonas);

// Alumnos
router.post("/add", personaController.savePersona);
router.get("/delete/:dni", personaController.deletePersona);
router.get("/edit/:dni", personaController.editPersona);
router.post("/update/:dni", personaController.updatePersona);

module.exports = router;