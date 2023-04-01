//IMPORTS
const { Router } = require('express');
const router = Router();
//ROUTES
const user = require('./users.js');
const services = require('./services.js');
const adposts = require('./adposts.js');

// router.get('/', (req, res) => {
//     res.status(200).send('<html><body style="font-family: sans-serif" ><h1>ProManitas REST API</h1><div>LINKS</div></br><div><a href="https://promanitasapi.onrender.com/api/v1/users">Users</a></div><div><a href="https://promanitasapi.onrender.com/api/v1/services">Services</a></div><div><a href="https://promanitasapi.onrender.com/api/v1/adposts">Adposts</a></div></body></html>')
// });

//USERS ROUTE
router.use('/api/v1/users', (req, res)  => {
    user(req, res);
});

//SERVICES ROUTE
router.use('/api/v1/services', (req, res) => {
    services(req, res);
});

//ADPOSTS ROUTE
router.use('/api/v1/adposts', (req, res) => {
    adposts(req, res);
});

module.exports = router;