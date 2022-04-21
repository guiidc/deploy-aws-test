const eventsService = require('../services/eventsService');

const index = async (req, res) => {
    const eventsList =  await eventsService.index();
    res.status(200).json(eventsList);
}

module.exports = {
    index,
}