const Router = require('router');
import ContactController from '@controllers/contact.controller';
import BaseRoutes from './base.route';

class ContactRoutes extends BaseRoutes {
    public static path = "contacts";

    constructor() {
        super(ContactController);
    }

    initializeRoutes(): void {
        
        this.router.get('/getById/:id', this.controller.findById);
    }
    
}

export default ContactRoutes;