import {Client} from 'pg'

const pgdbDatabase= new Client({
    host:'localhost',
    port:'5432',
    user:'postgres',
    password:'root',
    database:'Gestion'
})
pgdbDatabase.connect()
export default pgdbDatabase;