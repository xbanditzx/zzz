const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (request, result) =>{
    result.render('pages/courses');
})

app.post('/courses', (req, res) => {
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})