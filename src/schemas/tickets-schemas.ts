import joi from "joi";
import {TicketType} from "@/protocols";

export const ticketsSchema = joi.object<TicketType>({
    ticketTypeId: joi.number().integer()
});