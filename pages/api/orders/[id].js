import {MongoClient, ObjectId} from 'mongodb'

async  function handler(req, res) {
    
    if(req.method === 'DELETE'){  
        let ids = req.body

        const client =await MongoClient.connect(
            'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
        );
        
        const db = client.db()
        const meetupsCollection =  db.collection('orders')
       
        const orderData = await meetupsCollection.findOne({
            _id: ObjectId(ids) 
        });

        await meetupsCollection.deleteOne({
            _id: ObjectId(ids) 
        });
     
        client.close();

        res.status(201).json({
            data : orderData,
            message: 'Order Completed',
            id: ids
        })
    }
    
    else if(req.method === 'PATCH'){
        // let ids = req.params.id;
        let {id} = req.body

        const client =await MongoClient.connect(
            'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
        );
        
        const db = client.db()
        const meetupsCollection =  db.collection('orders')
        
        const orderData = await meetupsCollection.updateOne(
           { "_id": ObjectId(id)}, // Filter
           { 
            $set: 
            {
                "cartItems": req.body.cartItems,
                "totalPrice": req.body.totalPrice,
                "updatedAt": req.body.updatedAt
            },
           }, // Update
           {upsert: true} // add document with req.body._id if not exists 
        )
        
        // console.log("result" , orderData );
        client.close();

        res.status(201).json({
            data : orderData,
            message: 'Order Completed',
            id: id
        })

    } 
    
    else if(req.method === 'CANCEL'){  
        let ids = req.body

        const client =await MongoClient.connect(
            'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/thetaste?retryWrites=true&w=majority'
        );
        
        const db = client.db()
        const meetupsCollection =  db.collection('orders')
       
        // const orderData = await meetupsCollection.findOne({
        //     _id: ObjectId(ids) 
        // });

        const orderData = await meetupsCollection.deleteOne({
            _id: ObjectId(ids) 
        });
     
        client.close();

        res.status(201).json({
            data : orderData,
            message: 'Order Deleted',
            id: ids
        })
    }
}

export default handler