import {MongoClient, ObjectId} from 'mongodb'

async  function handler(req, res) {
    
    if(req.method === 'GET'){  
        let ids = req.body

        const client =await MongoClient.connect(
            'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
        );
        
        const db = client.db()
        const meetupsCollection =  db.collection('orders')
       
        const orderData = await meetupsCollection.findOne({
            _id: ObjectId(ids) 
        });

        // await meetupsCollection.deleteOne({
        //     _id: ObjectId(ids) 
        // });
     
        client.close();

        res.status(201).json({
            data : orderData,
            message: 'Data Processing',
            id: ids
        })
    }
}

export default handler