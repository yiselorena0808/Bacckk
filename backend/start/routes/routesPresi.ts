import presidenteController from "../../app/Controller/presidenteController.js";
import Router from "@adonisjs/core/services/router";

const presidente= new presidenteController()
Router.get('/presidentes',presidente.obtenerPresi);
Router.get('/presidentes/:dni',presidente.mostrarPresiDni);
Router.post('/presidentes',presidente.crearPresi);
Router.put('/presidentes/:dni',presidente.actualizarPresi);
Router.delete('/presidentes/:dni',presidente.eliminarPresi);