const express = require('express');

//express app

const app = express();

//register view engine 
app.set('view engine', 'ejs');

//listen for requeests

app.listen(3001);

app.get('/', (req, res) => {

    const blogs = [
        {title: 'Florida Man wearing a chicken mask takes down entire Russian mafia', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'What is going on in Miami?', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Violence at Phone Home', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];

    // res.send('<p>home page</p>');
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {

    // res.send('<p>about page</p>');
    res.render('about', { title: 'About' });

});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})