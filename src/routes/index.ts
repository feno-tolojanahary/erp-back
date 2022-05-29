import { Application } from 'express';
import UserRoutes from './user.route';

const ROUTES_CLASS = [
    UserRoutes
]

export default class Route {    
    constructor(app: Application) {
        ROUTES_CLASS.forEach(Routes => {
            app.use(`/${Routes.path}`, new Routes().router);
        });
    }
}