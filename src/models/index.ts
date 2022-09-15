import Company from "./company.model";
import Contact from "./contact.model";
import Address from "./address/address.model";
import AddressEntity from './address/addressEntity.model';
import AddressState from './address/addressState.model';
import User from './users/user';
import UserTitle from './users/userTitle';

Company.hasMany(Contact, { foreignKey: 'companyId' });
Contact.Company = Contact.belongsTo(Company, { foreignKey: 'companyId' });

Contact.Address = Contact.hasOne(Address, { as: "address", foreignKey: "targetId" });
Address.belongsTo(Contact, { foreignKey: "targetId" });

Company.Address = Company.hasOne(Address, { as: "address", foreignKey: "targetId" });
Address.belongsTo(Company, { as: "address", foreignKey: "targetId" });

export {
    Company,
    Contact,
    Address,
    AddressEntity,
    AddressState,
    User,
    UserTitle
}