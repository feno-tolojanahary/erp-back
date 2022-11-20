import Meeting, { MeetingEventAttributes } from "@/models/meetingEvent.model";
import BaseService from "./base.service";


class MeetingService extends BaseService<Meeting, MeetingEventAttributes> {
    constructor() {
        super(Meeting);
    }

    public async getByContactId(contactId: number): Promise<Meeting[]> {
        const meetingEvents = await this.Model.findAll({ 
            where:  {
                contactId
            }
         })

         return meetingEvents;
    }
}

export default MeetingService;