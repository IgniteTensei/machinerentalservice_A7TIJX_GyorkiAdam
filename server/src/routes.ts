import express = require("express");
import { MachineController } from './controller/machine.controller';
import { PartnerController } from './controller/partner.controller';
import { RentalController } from './controller/rental.controller';

export function getRoutes() {
    const router = express.Router();

    const machineController = new MachineController();

    router.get('/machines', machineController.getAll);
    router.get('/machines/:id', machineController.getOne);
    router.post('/machines', machineController.create);
    router.put('/machines', machineController.update);
    router.delete('/machines/:id', machineController.delete);

    const partnerController = new PartnerController();

    router.get('/partners', partnerController.getAll);
    router.get('/partners/:id', partnerController.getOne);
    router.post('/partners', partnerController.create);
    router.put('/partners', partnerController.update);
    router.delete('/partners/:id', partnerController.delete);

    const rentalController = new RentalController();

    router.get('/rentals', rentalController.getAll);
    router.get('/rentals/:id', rentalController.getOne);
    router.post('/rentals', rentalController.create);
    router.put('/rentals', rentalController.update);
    router.delete('/rentals/:id', rentalController.delete);

    return router;
}
