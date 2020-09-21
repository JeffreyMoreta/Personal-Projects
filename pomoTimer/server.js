const express = require('express')
const app = express()

app.listen(8000, () => {});

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})
