import { prisma } from "@/config";
import { Activity } from "@prisma/client";
import {ActivityDate } from "@prisma/client";
import {UserActivity } from "@prisma/client";


type ActivityParams = Omit< Activity, "eventId" |"createdAt" | "updatedAt">;
type ActivityDateParams = Omit<ActivityDate, "createdAt" | "updatedAt">;

 async function findActivityDate (): Promise<ActivityDateParams[]> {
   return prisma.activityDate.findMany({
      distinct: ['date'],
      orderBy: {
          date: 'asc',
      }
   });
 }
async function findActivitybyDateId(activityDateId: number ): Promise<ActivityParams[]> {
    return prisma.activity.findMany({
        where: {
            activityDateId: activityDateId, 
        },
      });
}

async function updateActivitySlotsByUser(activityId: number):Promise<ActivityParams> {
  return prisma.activity.update({
    where: {
      id: activityId,   
    },
    data: {
      availableSlots: {
        decrement: 1,
      },
    },
  });
}

//relacionamento do usuario com as atividades
async function AddUserActivity (activityId: number,userId:number){
    return prisma.userActivity.create({
            data: {
                userId: userId,
                activityId: activityId
            }
        })
  
}
const activitiesRepository = {
  findActivityDate,
  findActivitybyDateId,
  updateActivitySlotsByUser,
  AddUserActivity
}

export default activitiesRepository