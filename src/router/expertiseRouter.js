const express = require('express');
const expertiseRouter = express.Router();

function routes(navs, social) {
    expertiseRouter.route('/').get((req, res) => {
        res.render('expertise', {
            f_name: 'Emmanuel',
            l_name: 'Eagles',
            title: 'Okponobi Emmanuel',
            jobTitle: 'Back-End Web Developer',
            home: { link: '/', title: 'Home' },
            navs,
            social
        });
    });
    return expertiseRouter 
}


module.exports = routes;