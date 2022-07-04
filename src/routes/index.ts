import { Application } from 'express';
import AddressRoutes from './address/address.route';
import AddressStateRoutes from './address/addressState.route';
import CompanyRoutes from './company.route';
import UserRoutes from './user.route';

const ROUTES_CLASS = [
    UserRoutes,
    AddressRoutes,
    AddressStateRoutes,
    CompanyRoutes
]


export default class Route {    
    constructor(app: Application) {
        ROUTES_CLASS.forEach(Routes => {
            app.use(`/${Routes.path}`, new Routes().router);
        });
    }
}