import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketTypes, getTickets, createTicket } from "@/controllers";
import { ticketsSchema } from "@/schemas";


const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketTypes)
  .get("", getTickets)
  .post("", validateBody(ticketsSchema),createTicket);

export { ticketsRouter };
