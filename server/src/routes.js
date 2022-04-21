const router = require('express').Router();
const eventsController = require('./controllers/eventsController');

router.get('/events', eventsController.index);

module.exports = router;