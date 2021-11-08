var PouchDB = require('PouchDB')

var db = new PouchDB('mydb')

// db.info().then((info) => console.log(info))

doc = {
    _id:'001',
    name:'Abdullah',
    salary: 5000
}

db.put(doc, function(err, res){
    if(err){
        console.log(err)
    }else{
        console.log('Document created')
    }
})