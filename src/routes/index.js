const { Router } = require('express');
// router making a new route
const router = Router();

router.get('/', (req, res) => {
    
    let response = {
        "author": "Daniel Zanabria",
        "webService": "WSUpdateQnAScores"
    };

    res.json(response);
});

module.exports = router;
