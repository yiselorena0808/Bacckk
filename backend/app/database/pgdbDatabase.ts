import {Client} from 'pg'

const pgdbDatabase= new Client({
    host:'localhost',
    port:'5433',
    user:'postgres',
    password:'root',
    database:'tta'
})
pgdbDatabase.connect()
export default pgdbDatabase;