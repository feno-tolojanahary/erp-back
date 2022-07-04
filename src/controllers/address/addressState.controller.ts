import BaseController from "../base.controller";
import AddressStateService from "@services/address/addressState.service";

class AddressStateController extends BaseController {
    constructor() {
        super(AddressStateService);
    }
}

export default AddressStateController;