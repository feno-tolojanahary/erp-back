import BaseController from "@controllers/base.controller";
import AddressService from "@services/address/address.service";


class AddressController extends BaseController {
    constructor() {
        super(AddressService);
    }
}

export default AddressController;