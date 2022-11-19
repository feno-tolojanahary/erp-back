import MeetingEventController from "@controllers/meetingEvent.controller";
import BaseRoutes from "./base.route";


class MeetingEventRoutes extends BaseRoutes {
    public static path = "meeting-events";

    constructor() {
        super(MeetingEventController);
    }

    initializeRoutes(): void {
        
    }
}

export default MeetingEventRoutes; 