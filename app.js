const {render} = require('ejs')
const express = require('express')
const app = express()

const dbURL = 'mongodb+srv://admin:adminMatt10@cluster0.asn6l4b.mongodb.net/Todo-List?retryWrites=true&w=majority'
const mongoose = require('mongoose')

// Models
const userModel = require('./model/user')


mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log('conexão bem sucedida'), app.listen(5500) })
    .catch((error) => { console.log(erro) })
//app.listen(5500)
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
    if (req) {
        console.log("Chamou a requisição")
    }
    res.render('index', {title: 'ToDo List'})
})

app.get('/sign-up.html', (req, res) => {
    res.render('sign-up', {title: 'Cadastro'})
    const user = new userModel({
        userName: 'Carlito',
        email: 'ajksdhasdkhdshd@gmail.com',
        password: '1872632as'
    })
    user.save()
        .then((result) => { console.log("Salvou os dados no banco!") })
})

app.get('/main.html', (req, res) => {
    res.render('main', {title: 'Bem Vindo'})
})
