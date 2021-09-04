const express = require("express");
const router = express.Router();
require("dotenv").config();
const Coach = require("../models/coach");
const {
  ROUTE_createAccountURL,
  ROUTE_getAllCoachesURL,
  ROUTE_deleteCoachByIdURL,
  ROUTE_updateCoachAccountURL,
} = require("../constants/routePaths");

/**
 * @swagger
 * /coach/getAllCoaches:
 *  get:
 *    description: Retrieve all coaches
 *    responses:
 *        200:
 *           description: 'Response OK'
 */
router.get(ROUTE_getAllCoachesURL, async (req, res) => {
  try {
    const getAllCoaches = await Coach.find();
    res.json(getAllCoaches);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /coach/createAccount:
 *  post:
 *    description: Register new coach into the system
 *    produces:
 *          application/json
 *    parameters:
 *        - in: body
 *          name: Register new coach into the system
 *          schema:
 *              type: object
 *              required:
 *                  - firstName
 *                  - lastName
 *                  - email
 *                  - phone
 *                  - street
 *                  - nationality
 *                  - sex
 *                  - birthdate
 *                  - city
 *                  - educationStatus
 *                  - salary
 *                  - date
 *              properties:
 *                   firstName:
 *                      type: string
 *                   lastName:
 *                      type: string
 *                   email:
 *                      type: string
 *                   phone:
 *                      type: string
 *                   street:
 *                      type: string
 *                   nationality:
 *                      type: string
 *                   sex:
 *                      type: string
 *                      enum:
 *                           - male
 *                           - female
 *                           - bi-sexual
 *                           - transgender
 *                   birthdate:
 *                      type: string
 *                   city:
 *                      type: string
 *                   educationStatus:
 *                      type: string
 *                   salary:
 *                      type: string
 *                   date:
 *                      type: string
 *    responses:
 *        200:
 *           description: 'Coach created and registered successfully'
 */
router.post(ROUTE_createAccountURL, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      nationality,
      sex,
      birthdate,
      educationStatus,
      salary,
      date,
    } = req.body;

    //create coach
    const coachDetails = await Coach.create({
      firstName,
      lastName,
      email,
      phone,
      street,
      nationality,
      sex,
      birthdate,
      educationStatus,
      salary,
      date,
    });

    //return coach object
    res.status(201).json(coachDetails);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /coach/updateCoachAccount/{id}:
 *  patch:
 *    description: Update existing coach details in the system
 *    produces:
 *          application/json
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *                type: integer
 *                required: true
 *        - in: body
 *          name: Update  coach details in the system
 *          schema:
 *              type: object
 *              required:
 *                  - firstName
 *                  - lastName
 *                  - email
 *                  - phone
 *                  - street
 *                  - nationality
 *                  - sex
 *                  - birthdate
 *                  - city
 *                  - educationStatus
 *                  - salary
 *                  - date
 *              properties:
 *                   firstName:
 *                      type: string
 *                   lastName:
 *                      type: string
 *                   email:
 *                      type: string
 *                   phone:
 *                      type: string
 *                   street:
 *                      type: string
 *                   nationality:
 *                      type: string
 *                   sex:
 *                      type: string
 *                      enum:
 *                           - male
 *                           - female
 *                           - bi-sexual
 *                           - transgender
 *                   birthdate:
 *                      type: string
 *                   city:
 *                      type: string
 *                   educationStatus:
 *                      type: string
 *                   salary:
 *                      type: string
 *                   date:
 *                      type: string
 *    responses:
 *        200:
 *           description: 'Coach details updated successfully'
 */
router.patch(ROUTE_updateCoachAccountURL + "/:id", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      nationality,
      sex,
      birthdate,
      educationStatus,
      salary,
      date,
    } = req.body;

    //update coach details
    const coachDetailsUpdated = await Coach.findByIdAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        email,
        phone,
        street,
        nationality,
        sex,
        birthdate,
        educationStatus,
        salary,
        date,
      }
    );

    //return updated coach string message
    res.status(200).json("Coach details updated successfully");
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /coach/deleteCoachById/{id}:
 *  delete:
 *    description: delete existing coach in the system by Id
 *    produces:
 *          application/json
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *                type: integer
 *                required: true
 *    responses:
 *        200:
 *           description: 'Coach deleted from system successfully'
 */
router.delete(ROUTE_deleteCoachByIdURL + "/:id", async function (req, res) {
  try {
    const deleteCoach = await Coach.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send("Coach deleted successfully");
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
