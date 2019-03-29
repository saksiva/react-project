const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');


const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});
const Car = mongoose.model('Car',carSchema);

// const addCar = new Car({
//     brand: 'Chevy',
//     model: 'Impala',
//     year: '2015',
//     avail: true
// })

// addCar.save((err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.findById("5a4e66173a4805166b097666",(err,doc)=>{
//     if(err) return console.log(err);
//     console.log(doc)
// })

// Car.remove({},(err,doc)=>{
//      if(err) return console.log(err);
//      console.log(doc)
// })

// 5a4e6b1ec28e1e169a269cb1

Car.findById("5a4e6b1ec28e1e169a269cb1",(err,car)=>{
    if(err) return console.log(err);

    car.set({
        brand:'ferrari'
    });
    car.save((err,doc)=>{
        if(err) return console.log(err);
        console.log(doc)
    })
})