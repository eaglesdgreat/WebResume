const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4244;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const navs = [{ link: '/about', title: 'About' },
{ link: '/expertise', title: 'Expertise' },
{ link: '/education', title: 'Education' },
{ link: '/experiences', title: 'Experiences' },
{ link: '/contact', title: 'Contact' }];
const social = [{ link: 'facebook.com/Okponobi Eagles Emmanuel', icon: 'fab fa-facebook-f' },
{ link: 'twitter.com/@OkponobiE', icon: 'fab fa-twitter' },
{ link: 'instagram.com/eaglesdgreat', icon: 'fab fa-linkedin' },
{ link: 'linkedin.com/Okponobi-Emmanuel', icon: 'fab fa-instagram' }];

const aboutRouter = require('./src/router/aboutRouter')(navs, social);
const expertiseRouter = require('./src/router/expertiseRouter')(navs, social);
const educationRouter = require('./src/router/educationRouter')(navs, social);
const experiencesRouter = require('./src/router/experiencesRouter')(navs, social);
const contactRouter = require('./src/router/contactRouter')(navs, social);

app.use('/contact', contactRouter);
app.use('/experiences', experiencesRouter);
app.use('/education', educationRouter);
app.use('/expertise', expertiseRouter);
app.use('/about', aboutRouter);

app.get('/', (req, res) => {
  res.render('index', {
    f_name: 'Emmanuel',
    l_name: 'Eagles',
    title: 'Okponobi Emmanuel',
    jobTitle: 'Back-End Web Developer',
    home: { link: '/', title: 'Home' },
    navs,
    social
  });
});

app.listen(port, () => {
  debug(`Server ${chalk.yellow('running on port')} ${chalk.red(port)}`);
});
