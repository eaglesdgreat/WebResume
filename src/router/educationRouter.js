const express = require('express');
const educationRouter = express.Router();

function routes(navs, social) {
    educationRouter.route('/').get((req, res) => {
        res.render('education', {
            f_name: 'Emmanuel',
            l_name: 'Eagles',
            title: 'Okponobi Emmanuel',
            jobTitle: 'Back-End Web Developer',
            home: { link: '/', title: 'Home' },
            navs,
            social
        });
    });
    return educationRouter 
}


module.exports = routes;