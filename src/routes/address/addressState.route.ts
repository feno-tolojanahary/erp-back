import AddressStateController from "@controllers/address/addressState.controller";
import BaseRoutes from "../base.route";


class AddressStateRoutes extends BaseRoutes {
    public static path = "address-states";

    constructor() {
        super(AddressStateController);
    }

    initializeRoutes(): void {}
    
}

export default AddressStateRoutes;