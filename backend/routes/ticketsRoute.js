const express = require("express");
const router = express.Router();
require("dotenv").config();
const Tickets = require("../models/ticket");
const {
  ROUTE_getAllTickets,
  ROUTE_addTicket,
  ROUTE_buyTicket,
} = require("../constants/routePaths");

/**
 * @swagger
 * /tickets/getAllTickets:
 *  get:
 *    description: Retrieve all tickets in the system
 *    responses:
 *        200:
 *           description: 'All tickets retrieved successfully'
 */
router.get(ROUTE_getAllTickets, async (req, res) => {
  try {
    const getAllTickets = await Tickets.find();
    res.json(getAllTickets);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /tickets/addTicket:
 *  post:
 *    description: Add new Ticket into the system
 *    produces:
 *          application/json
 *    parameters:
 *        - in: body
 *          name: Add new Ticket into the system
 *          schema:
 *              type: object
 *              required:
 *                  - ticketNo
 *                  - ticketType
 *                  - ticketCost
 *                  - ticketStatus
 *                  - ticketExpiryDate
 *                  - dateAdded
 *              properties:
 *                   ticketNo:
 *                      type: number
 *                   ticketType:
 *                      type: string
 *                      enum:
 *                           - Regular
 *                           - VIP
 *                           - VVIP
 *                   ticketCost:
 *                      type: number
 *                   ticketStatus:
 *                      type: string
 *                      enum:
 *                          - Sold
 *                          - Available
 *                   ticketExpiryDate:
 *                      type: string
 *                   dateAdded:
 *                      type: string
 *    responses:
 *        200:
 *           description: 'Ticket created Successfully'
 */
router.post(ROUTE_addTicket, async (req, res) => {
  try {
    const {
      ticketNo,
      ticketType,
      ticketCost,
      ticketStatus,
      ticketExpiryDate,
      dateAdded,
    } = req.body;

    //create ticket
    const ticketDetails = await Tickets.create({
      ticketNo,
      ticketType,
      ticketCost,
      ticketStatus,
      ticketExpiryDate,
      dateAdded,
    });
    //return ticket object
    res.status(201).json(ticketDetails);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

/**
 * @swagger
 * /tickets/buyTicket/{id}:
 *  patch:
 *    description: Buy Ticket if Available and update ticket Status
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
 *           description: 'Ticket bought and its status updated successfully'
 */
router.patch(ROUTE_buyTicket + "/:id", async (req, res) => {
  try {
    //update ticket ticketStatus
    const ticket = await Tickets.findById({
      _id: req.params.id,
    });

    if (!(ticket.ticketStatus == "Sold")) {
      try {
        const updatedTicket = await Tickets.findByIdAndUpdate(
          {
            _id: req.params.id,
          },
          {
            ticketStatus: "Sold",
          }
        );
        //return updated ticketStatus
        res
          .status(200)
          .send("Ticket bought and its status updated successfully");
      } catch (err) {
        res.json({
          message: err,
        });
      }
    }
    res.status(400).send("Ticket is already sold out, not available anymore");
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
