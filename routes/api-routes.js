const router = require("express").Router();
const WorkoutTracker = require("../models/tracker.js");

router.get("/api/workouts", (req, res) => {
  WorkoutTracker.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  WorkoutTracker.find({})
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  WorkoutTracker.findByIdAndUpdate(req.params.id, {
    $push: { exercise: req.body }
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  WorkoutTracker.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json;
    });
});

module.exports = router;