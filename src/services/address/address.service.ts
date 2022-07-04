import BaseService from "@services/base.service";
import Address, { AddressAttributes } from "@models/address/address.model";


class AddressService extends BaseService<Address, AddressAttributes> {
    constructor() {
        super(Address)
    }
}

export default AddressService;