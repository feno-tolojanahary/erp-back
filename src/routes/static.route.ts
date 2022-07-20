import StaticBaseController from "@controllers/staticBase.controller";
import AddressType from "@models/static/addressType.model";
import Country from "@models/static/country.model";
import Tag from "@models/static/tag.model";
import UserTitle from "@models/users/userTitle";
import { Application } from "express";



class StaticRoutes {
    app: Application;

    constructor(app: Application) {
        this.app = app;
        this.staticRoutes();
    }

    staticRoutes() {
        this.app.get('/countries', new StaticBaseController(Country).getAll);
        this.app.get('/userTitles', new StaticBaseController(UserTitle).getAll);
        this.app.get('/tags', new StaticBaseController(Tag).getAll);
        this.app.get('/addressTypes', new StaticBaseController(AddressType).getAll);
    }
}

export default StaticRoutes;