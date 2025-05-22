import pgdbDatabase from "../database/pgdbDatabase.js";

class AdicionalesController {
  async listarPorPresi({params,request,response }) {
    const dni_del_presidente=params.dni_del_presidente
    const resu = await pgdbDatabase.query(`SELECT E.codigo,E.nombre,E.anio_de_fundacion,P.nombre AS presidentes FROM equipos E JOIN presidentes P ON E.dni_del_presidente=P.dni WHERE P.dni=$1`, [dni_del_presidente])
    console.log(resu)
    return response.json({ mensaje:resu.rows })
  }
  async listarAnio({params,request,response}){
    const anio_de_fundacion= params.anio_de_fundacion
    const resu= await pgdbDatabase.query('SELECT * from equipos where anio_de_fundacion=$1',[anio_de_fundacion])
    console.log(resu)
    return response.json({mensaje:resu.rows})
  }
  async listarNombre({params, request, response}){
    const nombre = params.nombre
    const resu = await pgdbDatabase.query('SELECT * from equipos where nombre ilike $1', [`%${nombre}%`])
    console.log(resu)
    return response.json({mensaje: resu.rows})
 }
}
export default AdicionalesController;