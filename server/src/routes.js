const router = require('express').Router();
const eventsController = require('./controllers/eventsController');

router.get('/api/events', eventsController.index);

module.exports = router;