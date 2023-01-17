const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: "failed",
    message: "Error Server",
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "failed",
    message: "Error Server",
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "failed",
    message: "Error Server",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "failed",
    message: "Error Server",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "failed",
    message: "Error Server",
  });
};
