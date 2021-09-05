const express = require("express");
const router = express.Router();
require("dotenv").config();
const Player = require("../models/player");
const {
  ROUTE_registerPlayerURL,
  ROUTE_getAllPlayers,
  ROUTE_updatePlayer,
  ROUTE_deletePlayer,
} = require("../constants/routePaths");

/**
 * @swagger
 * /player/getAllPlayers:
 *  get:
 *    description: Retrieve all team players
 *    responses:
 *        200:
 *           description: 'All team players retrieved successfully'
 */
router.get(ROUTE_getAllPlayers, async (req, res) => {
  try {
    const getAllPlayers = await Player.find();
    res.json(getAllPlayers);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /player/registerPlayer:
 *  post:
 *    description: Register new players into the system
 *    produces:
 *          application/json
 *    parameters:
 *         - in: body
 *           name: Add new Player into the system
 *           schema:
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
 *                  - licenseNotes
 *                  - educationStatus
 *                  - mothersName
 *                  - salary
 *                  - height
 *                  - weight
 *                  - position
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
 *                   licenseNotes:
 *                      type: string
 *                   educationStatus:
 *                      type: string
 *                   mothersName:
 *                      type: string
 *                   salary:
 *                      type: number
 *                   height:
 *                      type: number
 *                   weight:
 *                      type: number
 *                   position:
 *                      type: string
 *                   date:
 *                      type: string
 *    responses:
 *        200:
 *           description: 'Player Registered successfully'
 */
router.post(ROUTE_registerPlayerURL, async (req, res) => {
  const playerObj = new Player({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    street: req.body.street,
    nationality: req.body.nationality,
    sex: req.body.sex,
    birthdate: req.body.birthdate,
    city: req.body.city,
    licenseNotes: req.body.licenseNotes,
    educationStatus: req.body.educationStatus,
    mothersName: req.body.mothersName,
    salary: req.body.salary,
    height: req.body.height,
    weight: req.body.weight,
    position: req.body.position,
    date: req.body.date,
  });

  try {
    const sentData = await playerObj.save();
    res.json(sentData);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /player/updatePlayer/{id}:
 *  patch:
 *    description: Register new players into the system
 *    produces:
 *          application/json
 *    parameters:
 *         - in: path
 *           name: id
 *           schema:
 *                 type: integer
 *                 required: true
 *         - in: body
 *           name: Add new Player into the system
 *           schema:
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
 *                  - licenseNotes
 *                  - educationStatus
 *                  - mothersName
 *                  - salary
 *                  - height
 *                  - weight
 *                  - position
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
 *                   licenseNotes:
 *                      type: string
 *                   educationStatus:
 *                      type: string
 *                   mothersName:
 *                      type: string
 *                   salary:
 *                      type: number
 *                   height:
 *                      type: number
 *                   weight:
 *                      type: number
 *                   position:
 *                      type: string
 *                   date:
 *                      type: string
 *    responses:
 *        200:
 *           description: 'Player Registered successfully'
 */
router.patch(ROUTE_updatePlayer + "/:id", async (req, res) => {
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
      city,
      licenseNotes,
      educationStatus,
      mothersName,
      salary,
      height,
      weight,
      position,
      date,
    } = req.body;

    const updatedData = await Player.findByIdAndUpdate(
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
        city,
        licenseNotes,
        educationStatus,
        mothersName,
        salary,
        height,
        weight,
        position,
        date,
      }
    );
    res.json(updatedData);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /player/deletePlayer/{id}:
 *  delete:
 *    description: delete existing player in the system by Id
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
 *           description: 'Player deleted from system successfully'
 */
router.delete(ROUTE_deletePlayer + "/:id", async (req, res) => {
  try {
    const deletePlayer = await Player.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send("Player deleted successfully");
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
