import pgdbDatabase from "../database/pgdbDatabase.js";
class equiposController{
    async obtenerEquipo({request,response}){
        const resu= await pgdbDatabase.query('select * from equipos')
        console.log(resu.rows)
        return response.json({mensaje:resu.rows})
    }
    async mostrarEquipoCodigo({params,request,response}){
        const codigo= params.codigo
        const resu= await pgdbDatabase.query('select * from equipos where codigo=$1',[codigo])
        console.log(resu)
        return response.json({mensaje: resu.rows})
    }
   async crearEquipo({request,response }) {
  try {
    const {nombre,anio_de_fundacion,dni_del_presidente } = await request.body()
    const equipoExistente = await pgdbDatabase.query('SELECT * FROM equipos WHERE dni_del_presidente=$1',[dni_del_presidente])
    if (equipoExistente.rows.length > 0) {
      return response.json({ mensaje: 'El presidente ya está asociado a un equipo' })
    }
    const resu = await pgdbDatabase.query('INSERT INTO equipos (nombre,anio_de_fundacion,dni_del_presidente) VALUES ($1,$2,$3)',[nombre, anio_de_fundacion, dni_del_presidente])
    return response.json({ mensaje: 'El equipo fue creado', equipo: resu.rows[0]})
  } catch (error) {
    console.error(error)
    return response.status(500).json({mensaje: 'Error al crear el equipo' })
  }
}
    async actualizarEquipo({params,request,response}){
        const {nombre,anio_de_fundacion,dni_del_presidente}= request.body()
        const codigo= params.codigo
        const resu= await pgdbDatabase.query('UPDATE equipos set nombre=$2, anio_de_fundacion=$3, dni_del_presidente=$4 where codigo=$1',[codigo,nombre,anio_de_fundacion,dni_del_presidente])
        console.log(resu)
        return response.json({mensaje:`el equipo de codigo ${codigo} a sido actualizado`})
    }
    async eliminarEquipo({params,request,response}){
        const codigo= params.codigo
        const resu= await pgdbDatabase.query('delete from equipos where codigo=$1',[codigo])
        console.log(resu)
        return response.json({mensaje: `el  equipo del codigo ${codigo} a sido eliminado`})
    }
}
export default equiposController;