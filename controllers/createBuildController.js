const Build = require('../models/builds');

exports.getBuild = (req, res, next) => {
    Build.fetchBuilds()
    .then(([rows, fieldData]) => {
        console.log(rows)
        res.render('createBuild', {
            build: rows,
            pageTitle: 'Create Your Build',
            path: 'create-build'
        });
    })
    .catch(err => console.log(err));
}

exports.getFullBuild = (req, res, next) => {
    Build.fetchBuilds()
    .then(([rows, fieldData]) => {
        console.log(rows)
        res.render('viewBuilds', {
            build: rows,
            pageTitle: 'PC Builds',
            path: '/'
        });
    })
    .catch(err => console.log(err));
}



exports.addBuilds = (req, res, next) => {
    console.log(req.body);
    
    const builds = new Builds(null,req.body.txtTask);
    builds.save().then(() => {res.redirect('/');}).catch(err => console.log(err));
}