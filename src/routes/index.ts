import { Application } from 'express';
import AddressRoutes from './address/address.route';
import AddressStateRoutes from './address/addressState.route';
import CompanyRoutes from './company.route';
import StaticRoutes from './static.route';
import ContactRoutes from './contact.route';

const ROUTES_CLASS = [
    AddressRoutes,
    AddressStateRoutes,
    CompanyRoutes,
    ContactRoutes
]


export default class Route {   
    app: Application;

    constructor(app: Application) {
        this.app = app;
        this.routesApp();
        this.staticRoutes();
    }

   routesApp() {
        ROUTES_CLASS.forEach(Routes => {
            this.app.use(`/${Routes.path}`, new Routes().router);
        });
    }

    staticRoutes() {
        new StaticRoutes(this.app);
    }
}