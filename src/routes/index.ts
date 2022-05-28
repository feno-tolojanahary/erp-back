import { Application } from 'express';
import userRoutes from './UserRoutes';

export default class Route {
    
    constructor(app: Application) {
        app.use('/users', userRoutes);
    }
}