import AddressState, { AddressStateAttributes } from "@models/address/addressState.model";
import BaseService from "./base.service";

class AddressStateService extends BaseService<AddressState, AddressStateAttributes> {
    constructor() {
        super(AddressState)
    }
}

export default AddressStateService;