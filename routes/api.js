const  router  = require("express").Router();
const { Workout } = require("../models");

router.get("/workouts", (req, res) => {
    res.send("this is working")
});

router.put("/workouts/", (req, res) => {
    res.send("this is working")
});

router.post("/workouts", (req, res) => {
    res.send("this is working")
    // Transaction.create(body)
    //     .then(dbTransaction => {
    //         res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
});


module.exports = router;
