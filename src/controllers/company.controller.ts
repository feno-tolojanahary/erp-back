import CompanyService from "@services/company.service";
import BaseController from "./base.controller";


class CompanyController extends BaseController {
    constructor() {
        super(CompanyService);
    }
}

export default CompanyController;