"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const base_service_1 = __importDefault(require("./base.service"));
class CompanyService extends base_service_1.default {
    constructor() {
        super(index_1.Company);
    }
    create(data) {
        return new Promise((resolve, reject) => {
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const createdCompany = yield this.Model.create(data, {
                        include: [index_1.Company.Address]
                    });
                    // if (createdCompany.id) {
                    //     try {
                    //         const address = { ...data.address, targetId: createdCompany.id, targetType: "companies" }
                    //         await Address.create(address);
                    //     } catch(err) {
                    //         console.log("Error when creating company address: ", err);
                    //     }
                    // }
                    // await Address.create({
                    //     typeId: 3,
                    //     street: "street1",
                    //     street2: "street2",
                    //     city: "the city",
                    //     stateId: 1,
                    //     zip: "The zip code",
                    //     country: "The country",
                    //     targetId: 6,
                    //     targetType: "companies"
                    // });
                    // await AddressState.create({
                    //     companyId: 1,
                    //     country: "France",
                    //     createdBy: 1,
                    //     stateCode: "110",
                    //     stateName: "Antsirabe",
                    // })
                    // resolve({} as Company);
                    resolve(createdCompany);
                }
                catch (err) {
                    console.log("Error when creating company: ", err);
                    reject(err);
                }
            }))();
        });
    }
}
exports.default = CompanyService;
