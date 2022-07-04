import CompanyController from "@controllers/company.controller";
import BaseRoutes from "./base.route";


class CompanyRoutes extends BaseRoutes {
    public static path = "companies";

    constructor() {
        super(CompanyController);
    }

    initializeRoutes(): void {}
}

export default CompanyRoutes;