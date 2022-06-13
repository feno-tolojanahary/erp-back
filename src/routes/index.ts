import { Application } from 'express';
import AddressStateRoutes from './addressState.route';
import UserRoutes from './user.route';

const ROUTES_CLASS = [
    UserRoutes,
    AddressStateRoutes
]


export default class Route {    
    constructor(app: Application) {
        ROUTES_CLASS.forEach(Routes => {
            app.use(`/${Routes.path}`, new Routes().router);
        });
    }
}