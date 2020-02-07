const express = require('express');
const contactRouter = express.Router();

function routes(navs, social) {
    contactRouter.route('/').get((req, res) => {
        res.render('contact', {
            f_name: 'Emmanuel',
            l_name: 'Eagles',
            title: 'Okponobi Emmanuel',
            jobTitle: 'Back-End Web Developer',
            home: { link: '/', title: 'Home' },
            navs,
            social
        });
    });
    return contactRouter 
}


module.exports = routes;