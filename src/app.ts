import express, { Application } from 'express';
import Routes from "./routes/index";

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes() {
        new Routes(this.app);
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`[server]: Server is running at https://localhost:${port}`);
        });
    }
}