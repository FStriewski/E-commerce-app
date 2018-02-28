const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})


const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
}, {
  tableName: 'products',
  timestamps: false
})

//Product.findById(3).then(product => console.log(JSON.stringify(product)))


app.get('/products', (req, res) => {
  const products = Product
  .findAll({attributes: ['id', 'name', 'price']})
  .then(products => {
    if(products){
      res.json(products)
    } else {
        res.status(404)
        res.json({ message: "Stuff not found"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500)
    res.json({message: "There was an error"})
  })


  app.get('/products/:id', (req, res) => {
    const products = Product
    .findById({attributes: ['id', 'name', 'price']})
    .then(products => {
      if(products){
        res.json(products)
      } else {
          res.status(404)
          res.json({ message: "Stuff not found"})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500)
      res.json({message: "There was an error"})
    })
