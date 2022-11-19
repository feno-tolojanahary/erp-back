import Meeting, { MeetingEventAttributes } from "@/models/meetingEvent.model";
import BaseService from "./base.service";


class MeetingService extends BaseService<Meeting, MeetingEventAttributes> {
    constructor() {
        super(Meeting);
    }

    
}

export default MeetingService;