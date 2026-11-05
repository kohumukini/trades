import express from 'express'

const app = express(); 
const PORT = 3010;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/add-job', (req, res) => {
    res.render('publish_jobs')
}); 

app.get('/home', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})