const Tour = require("../models/tourModel");

/* eslint-disable prefer-object-spread */
exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: "success",
  //   requestedAt: req.requestTime,
  //   result: tours.length,
  //   data: { tours },
  // });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: "success",
  //   data: { tour },
  // });
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour();
  // newTour.save();

  try {
    const newTour = await Tour.create(req.body);

    res.status(200).json({
      message: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Tour updated here...>",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
