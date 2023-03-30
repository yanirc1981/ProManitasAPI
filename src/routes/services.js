//IMPORTS
const { Router } = require('express');
const router = Router();
//CONTROLLERS
const { getServices, getServiceId } = require('../controllers/controlerGet');
const { postServices } = require('../controllers/controlerPost');


//SERVICES DB
router.get('/', async (req, res) => {
    res.status(200).send({
        message: 'All Services',
        data: await getServices()
    });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        message: `Service id: ${id}`,
        data: await getServiceId()
    });
});

router.post('/', async (req, res) =>{
    const { name } = req.body
    res.status(201).send({
        message: 'El servicio ' + name + ' se ha creado exitosamente',
        data: await postServices()
    })
})