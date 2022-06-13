import {MongoClient} from 'mongodb'
const client =await MongoClient.connect( 'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority');
    
const db = client.db()
const deliveredCollection =  db.collection('delivered')

export default deliveredCollection