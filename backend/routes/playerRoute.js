const express = require("express");
const router = express.Router();
require("dotenv").config();
const Player = require("../models/player");
const { ROUTE_registerPlayerURL } = require("../constants/routePaths");

//image uploads
var fs = require("fs");
var path = require("path");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({
  storage: storage,
});

router.get(ROUTE_registerPlayerURL, async (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occured", err);
    } else {
      res.render("imagesPage", {
        players: players,
      });
    }
  });
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
 *                  - image
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
 *                   image:
 *                      type: string
 *                      format: binary
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
router.post(
  ROUTE_registerPlayerURL,
  upload.single("image"),
  async (req, res, next) => {
    var obj = {
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
      image: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
      educationStatus: req.body.educationStatus,
      mothersName: req.body.mothersName,
      salary: req.body.salary,
      height: req.body.height,
      weight: req.body.weight,
      position: req.body.position,
      date: req.body.date,
    };

    Player.create(obj, (err, items) => {
      if (err) {
        res.status(400).send("Error saving image");
      } else {
        res.status(200).send("Image saved successfully");
      }
    });
  }
);

module.exports = router;
