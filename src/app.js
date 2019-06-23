const path = require('path')
const express = require('express')
const hbs = require('hbs')


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome Webserver app',
        name: 'Pramod Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Welcome about Webserver app',
        name: 'Pramod About'
    })
})

app.get('/help', (req, res) => {
    res.send('Help page!')
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('*',(req, res) => {
    res.render('404', {
        title: '404',
        name: 'Pramod Error',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})