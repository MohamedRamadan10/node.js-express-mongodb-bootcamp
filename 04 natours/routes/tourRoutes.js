const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour,
  getTourStats,
} = require("../controller/tourController");

const router = express.Router();

router.route("/tour-stats").get(getTourStats);
router.route("/top-5-cheap").get(aliasTopTour, getAllTours);
router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
