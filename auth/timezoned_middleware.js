const { time_zone } = require("./timezone");

module.exports = (req, res, next) => {
  if (!req.body.country_time_zone) {
    res.status(422).json({ message: "time zone is missing" });
  } else if (!(req.body.country_time_zone in time_zone)) {
    res.status(422).json({ message: "time zone is invalid" });
  } else {
    next();
  }
};
