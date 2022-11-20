import MeetingEventController from "@controllers/meetingEvent.controller";
import BaseRoutes from "./base.route";


class MeetingEventRoutes extends BaseRoutes {
    public static path = "meeting-events";

    constructor() {
        super(MeetingEventController);
    }

    initializeRoutes(): void {
        this.router.get('/getByContactId/:contactId', this.controller.getByContactId)
    }
}

export default MeetingEventRoutes; 