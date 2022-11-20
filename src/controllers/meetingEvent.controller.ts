import { DataResponse } from "@/interfaces/index.interface";
import MeetingService from "@services/meetingEvent.service";
import { NextFunction, Request, Response } from "express";
import BaseController from "./base.controller";


class MeetingEventController extends BaseController {
    constructor() {
        super(MeetingService)
    }

    public async getByContactId(req: Request, res: Response, next: NextFunction) {
        try {
            const contactId: number = (req.params.contactId as unknown) as number;
            const allMeetings = await this.service.getByContactId(contactId);
            next({ data: allMeetings, message: "List of meetings by contactId" } as DataResponse);
        } catch(err) {
            next(err);
        }
    }
}

export default MeetingEventController;