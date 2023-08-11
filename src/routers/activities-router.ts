import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getActivitiesByDate, getActivitiesDate, } from "../controllers/activities-controller";

const activityRouter = 
Router()
.all("/*", authenticateToken);
activityRouter.get("/date",getActivitiesDate);
activityRouter.get("/:activityDateId",getActivitiesByDate);


export { activityRouter };