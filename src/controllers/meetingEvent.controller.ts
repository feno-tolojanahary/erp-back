import MeetingService from "@services/meetingEvent.service";
import BaseController from "./base.controller";


class MeetingEventController extends BaseController {
    constructor() {
        super(MeetingService)
    }
}

export default MeetingEventController;