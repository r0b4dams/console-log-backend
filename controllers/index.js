const router = require('express').Router();

const apiRoutes = require('./api');
const authRoutes = require('./auth')

router.use('/auth', authRoutes); // user auth routes
router.use('/api', apiRoutes);   // api routes

module.exports = router;


