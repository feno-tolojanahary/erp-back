const Router = require('router');
import ContactController from '@controllers/contact.controller';
import BaseRoutes from './base.route';
import { uploadImage } from '@middlewares/multer';
import { bodyNotEmpty } from '@/middlewares/checkReqUtil.middleware';
class ContactRoutes extends BaseRoutes {
    public static path = "contacts";

    constructor() {
        super(ContactController);
    }

    initializeRoutes(): void {
        this.router.get('/getById/:id', this.controller.findById);
        this.router.post('/create', uploadImage.single('file'), bodyNotEmpty, this.controller.create);
    }
    
}

export default ContactRoutes;