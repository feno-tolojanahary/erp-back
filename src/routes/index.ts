import { Application } from 'express';
import AddressRoutes from './address/address.route';
import AddressStateRoutes from './address/addressState.route';
import CompanyRoutes from './company.route';
import StaticRoutes from './static.route';
import UserRoutes from './user.route';

const ROUTES_CLASS = [
    UserRoutes,
    AddressRoutes,
    AddressStateRoutes,
    CompanyRoutes
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