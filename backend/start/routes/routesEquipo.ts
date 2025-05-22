import equiposController from "../../app/Controller/equiposController.js";
import Router from "@adonisjs/core/services/router";

const equipos= new equiposController()
Router.get('/equipos',equipos.obtenerEquipo);
Router.get('/equipos/:codigo',equipos.mostrarEquipoCodigo);
Router.post('/equipos',equipos.crearEquipo);
Router.put('/equipos/:codigo',equipos.actualizarEquipo);
Router.delete('/equipos/:codigo',equipos.eliminarEquipo);