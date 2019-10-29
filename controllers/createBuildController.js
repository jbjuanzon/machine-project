const Builds = require('../models/builds');

exports.getBuild = (req, res, next) => {
    Builds.fetchParts()
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
    Builds.fetchBuilds()
    .then(([rows, fieldData]) => {
        //console.log(rows)
        res.render('viewBuilds', {
            build: rows,
            pageTitle: 'PC Builds',
            path: '/'
        });
    })
    .catch(err => console.log(err));
}



exports.postAddBuilds = (req, res) => {
    
    const {
        name,
        cpu,
        mobo,
        gpu,
        memory
      } = req.body;
    
    const builds = new Builds(null,name,cpu,mobo,gpu,memory);
    console.log(builds);

    builds.save().then(() => {res.redirect('/');}).catch(err => console.log(err));
}

exports.delete = (req, res) => {
    const {
      id
    } = req.params;
  
    Builds.deleteById(id).then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };

  exports.getEditList = (req, res) => {
    const {
      id
    } = req.params;
  
    Builds.findBuildsById(id).
    then(([rows, fieldData]) => {
        res.render('createBuild', {
          build: rows[0],
          pageTitle: 'Edit Build',
          path: ''
        });
      })
      .catch(err => console.log(err));
  };

  exports.postUpdateList = (req, res) => {
    const {
      id,
      name,
      cpu,
      mobo,
      gpu,
      memory
    } = req.body;
  
    const builds = new Builds(id, name, cpu, mobo, gpu, memory);
    console.log(builds);
  
    builds
      .update()
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  };