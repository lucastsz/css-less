const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('../views/less')
})

app.get('/historia', function (req, res) {
  res.render('../views/historia')
})
app.get('/less', function (req, res) {
  res.render('../views/less')
})

app.listen(3001, function () {
  console.log('executando na porta 3001')
})
