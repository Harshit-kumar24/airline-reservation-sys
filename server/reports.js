import db from "./dbconfig.js";
import express from "express";
var router = express.Router();

// Given a date range, number of passengers travelling to a given destination
router.post("/passengerCount", (req, res) => {
  const { destination, startDate, endDate } = req.body;
  const sqlGet = "call passenger_count_report(?,?,?)";
  db.query(sqlGet, [destination, startDate, endDate], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Given a date range, number of bookings by each passenger type
router.post("/bookingCount", (req, res) => {
  const { startDate, endDate } = req.body;
  const sqlGet = "call booking_count_report(?,?)";
  db.query(sqlGet, [startDate, endDate], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//Total revenue generated by each Aircraft type
router.get("/totalRevenue", (req, res) => {
  const sqlGet = "call total_revenue_report()";
  db.query(sqlGet, (err, result) => {
    if (err) res.send({ err: err });
    else res.send(result);
  });
});

//Given origin and destination, all past flights, states, passenger counts data
router.post("/pastFlights", (req, res) => {
  const { origin, destination } = req.body;
  const sqlGet = "call past_flights_report(?,?)";
  db.query(sqlGet, [origin, destination], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//Given a flight no, all passengers travelling in it (next immediate flight) below age 18, above age 18
router.post("/passengerByAge", (req, res) => {
  const { flight_no } = req.body;
  const sqlGet = "call passenger_agewise_report(?)";
  db.query(sqlGet, [flight_no], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

export default router;
