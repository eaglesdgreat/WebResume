const express = require('express');
const aboutRouter = express.Router();

function routes(navs, social) {
    aboutRouter.route('/').get((req, res) => {
        res.render('about', {
            f_name: 'Emmanuel',
            l_name: 'Eagles',
            title: 'Okponobi Emmanuel',
            jobTitle: 'Back-End Web Developer',
            home: { link: '/', title: 'Home' },
            navs,
            social
        });
    });
    return aboutRouter 
}


module.exports = routes;