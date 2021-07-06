const { Router } = require('express')

const router = Router();

const apiRoutes = require('./api.js')
const viewRoutes = require('./view.js')

router.use('/' ,viewRoutes);
router.use('/api', apiRoutes);


module.exports = router