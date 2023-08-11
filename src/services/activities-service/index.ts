import activitiesRepository from "../../repositories/activities-repositoy";
import { notFoundError } from "../../errors";
import paymentRepository from "../../repositories/payment-repository";

async function verifyPaymentTicket(ticketId:number){
  //verifica se ja foi pago
    const payment = await paymentRepository.findPaymentByTicketId(ticketId);
    if (!payment) {
        throw notFoundError();
    }
}

async function listActivitiesDate(ticketId: number){
   verifyPaymentTicket(ticketId)
    const activitiesDate = await activitiesRepository.findActivityDate();
    if (!activitiesDate) {
        throw notFoundError();
    }
    return activitiesDate;
}
async function listActivitiesByDate( activityDateId: number){
    const activitiesByDate = await activitiesRepository.findActivitybyDateId(activityDateId);
    if (!activitiesByDate) {
        throw notFoundError();
    }
    return activitiesByDate;

}

const activitiesServices = {
    listActivitiesDate,
    listActivitiesByDate
}

export default  activitiesServices