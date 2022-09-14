const { Router } = require('express');
// router making a new rout
const router = Router();

router.get('/', async (req, res) => {
    console.log(`Consumo de API updateQnAScores de tipo POST`);
    // Consumo de API updateQnAScores de tipo POST
    // const {  } = req.body;
    res.json({
        "Author": "Daniel Zanabria",
        "WebService": "updateQnAScores"
    });

});

router.post('/', async (req, res) => {
    console.log(`Consumo de API updateQnAScores de tipo POST`);
    // Consumo de API updateQnAScores de tipo POST
    // const {  } = req.body;

});

module.exports = router;