import express from 'express';
import Routes from "@routes/index";
import { responseHandler } from '@middlewares/response.middleware';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

export default class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeResponseHandler();
    }

    private initializeMiddlewares() {
        // this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());

    }

    private initializeRoutes() {
        new Routes(this.app);
        this.app.use('/static', express.static(path.join(__dirname, '../src/static')))
    }

    private initializeResponseHandler() {
        this.app.use(responseHandler);
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log(`[server]: Server is running at https://localhost:${port}`);
        });
    }
}