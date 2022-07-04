import AddressController from "@controllers/address/address.controller";
import BaseRoutes from "@routes/base.route";


class AddressRoutes extends BaseRoutes {
    public static path = "address";

    constructor() {
        super(AddressController);
    }

    initializeRoutes(): void {}
}

export default AddressRoutes;