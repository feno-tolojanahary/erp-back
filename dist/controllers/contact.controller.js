"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _contactService = _interopRequireDefault(require("../services/contact.service"));
const _contactDto = require("../dtos/contact.dto");
const _classValidator = require("class-validator");
const _httpException = require("../exceptions/HttpException");
const _baseController = _interopRequireDefault(require("./base.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ContactController = class ContactController extends _baseController.default {
    async create(req, res, next) {
        try {
            const data = req.body;
            const validationErros = await (0, _classValidator.validate)(new _contactDto.CreateContactDto(data), {
                validationError: {
                    target: false
                }
            });
            if (validationErros.length > 0) {
                throw new _httpException.HttpException(500, JSON.stringify(validationErros));
            }
            super.create(req, res, next);
        } catch (err) {
            next(err);
        }
    }
    async findById(req, res, next) {
        try {
            const { id  } = req.params;
            if (!id) {
                throw new Error("No param 'id' given");
            }
            const contact = await this.service.findById(+id);
            next({
                data: contact,
                message: "Get conctact by id"
            });
        } catch (err) {
            next(err);
        }
    }
    constructor(){
        super(_contactService.default);
        this.service = new _contactService.default();
        this.findById = this.findById.bind(this);
    }
};
const _default = ContactController;

//# sourceMappingURL=contact.controller.js.map