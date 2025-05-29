import pgdbDatabase from "../database/pgdbDatabase.ts";
class presidenteController{
    async obtenerPresi({request,response}){
        const resu= await pgdbDatabase.query('select * from presidentes')
        console.log(resu.rows)
        return response.json({mensaje:resu.rows})
    }
    async mostrarPresiDni({params,request,response}){
        const dni= params.dni
        const resu= await pgdbDatabase.query('select * from presidentes where dni=$1',[dni])
        console.log(resu)
        return response.json({mensaje: resu.rows})
    }
    async crearPresi({request,response}){
        const {nombre}= request.body()
        const resu= await pgdbDatabase.query('insert into presidentes(nombre) VALUES ($1)',[nombre])
        console.log(resu)
        return response.json({mensaje:'el presidente fue creado',nombre})
    }
    async actualizarPresi({params,request,response}){
        const {nombre}= request.body()
        const dni= params.dni
        const resu= await pgdbDatabase.query('UPDATE presidentes set nombre=$2 where dni=$1',[dni,nombre])
        console.log(resu)
        return response.json({mensaje:`el presidente del dni ${dni} a sido actualizado`})
    }
    async eliminarPresi({params,request,response}){
        const dni= params.dni
        const resu= await pgdbDatabase.query('delete from presidentes where dni=$1',[dni])
        console.log(resu)
        return response.json({mensaje: `el  presidente del dni ${dni} a sido eliminado`})
    }
}
export default presidenteController;