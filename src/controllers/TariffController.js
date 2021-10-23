const tariffService = require('../services/TariffService');

module.exports = {
    comparison(req, res) {
        const { consumption } = req.params;
        if(!consumption || isNaN(consumption)) res.status(400).send("Invalid consumption");
        if (consumption <= 0) res.status(400).send("Consumption needs to be bigger than 0");
        res.send(tariffService.calulator(consumption));
    }
}