//api/new-detail
import {MongoClient} from 'mongodb'

async  function handler(req, res) {
  
    if(req.method === 'POST'){        
        const data = req.body
        const client =await MongoClient.connect(
            'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
        );
        
        const db = client.db()
        const meetupsCollection =  db.collection('orders')
        const result = await meetupsCollection.insertOne(data)
    
        // console.log( "result", result );

        client.close()

        res.status(201).json({
            message: 'Meetup Inserted'
        })
    }
}

export default handler;
