import Router from "@adonisjs/core/services/router";
import AdicionalesController from "../../app/Controller/adicionalesController.js";
const adicionales= new AdicionalesController()

Router.get('/adicionales/:dni_del_presidente',adicionales.listarPorPresi);
Router.get('/adicionales/:nombre',adicionales.listarNombre);
Router.get('/adicionales/:anio_de_fundacion',adicionales.listarAnio);