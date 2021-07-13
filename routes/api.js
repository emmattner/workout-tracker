const  router  = require("express").Router();
const { Workout } = require("../models");

// router.get("/workouts", (req, res) => {
//     res.send("this is working")
// });

// router.put("/workouts/", (req, res) => {
//     res.send("this is working")
// });

router.post("/workouts", (req, res) => {
    Workout.create({}).then((dbWorkout) => {
        res.send.json(dbWorkout)
    }).catch((err) =>{
        res.json(err)
    })
});


module.exports = router;
