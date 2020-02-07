const express = require('express');
const experiencesRounter = express.Router();

function routes(navs, social) {
    experiencesRounter.route('/').get((req, res) => {
        res.render('experiences', {
            f_name: 'Emmanuel',
            l_name: 'Eagles',
            title: 'Okponobi Emmanuel',
            jobTitle: 'Back-End Web Developer',
            home: { link: '/', title: 'Home' },
            navs,
            social
        });
    });
    return experiencesRounter 
}


module.exports = routes;