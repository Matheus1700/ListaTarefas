const {render} = require('ejs')
const express = require('express')
const app = express()

app.listen(5500)
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
    if (req) {
        console.log("Chamou a requisição")
    }
    res.render('index', {title: 'Index'})
})
