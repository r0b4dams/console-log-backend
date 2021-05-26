const router = require('express').Router();

//api routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

module.exports = router;


