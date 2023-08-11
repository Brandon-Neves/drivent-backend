import httpStatus from "http-status";
import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares";
import activitiesServices from "../services/activities-service";


export async function getActivitiesDate(req: AuthenticatedRequest, res: Response) {
    const ticketId = Number(req.query.ticketId);
   try {
       if(!ticketId) return res.sendStatus(httpStatus.BAD_REQUEST);
       const activitiesDate = await activitiesServices.listActivitiesDate(ticketId);

       return res.status(httpStatus.OK).send(activitiesDate);
   } catch (error) {
    if( error.name === "NotFoundError") return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(httpStatus.BAD_REQUEST);
   }
}

export async function getActivitiesByDate(req: AuthenticatedRequest, res: Response) {
   const activityDateId = Number(req.params.activityDateId);
   try{
    if (!activityDateId) return res.sendStatus(httpStatus.BAD_REQUEST);
    const activitiesByDate = await activitiesServices.listActivitiesByDate(activityDateId);

    return res.status(httpStatus.OK).send(activitiesByDate);

   }catch(error){
    if(error.name === "NotFoundError") return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(httpStatus.BAD_REQUEST);
   }
}