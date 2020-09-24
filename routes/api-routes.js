const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.WorkoutTracker.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.WorkoutTracker.find({})
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  db.WorkoutTracker.findByIdAndUpdate(req.params.id, {
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
  db.WorkoutTracker.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json;
    });
});

module.exports = router;