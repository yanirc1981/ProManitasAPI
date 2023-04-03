const { sequelize, Op } = require('sequelize');
const { User } = require('../db');

updateUser = async(req,res)=> {
    const {id} = req.params;
    const {username, firstname, lastname, email, password, cellnumber, address, image, deleted} = req.body;
    try {
        const userFilter = await User.findByPk(id);
    
        if (!userFilter) {
          res.status(404).json({ error: `Usuario no encontrado` });
          return;
        };
        
        const updatedUser = await userFilter.update({username, firstname, lastname, email, password, cellnumber, address, image, deleted});
    
        res.status(200).send({
          message: `El usuario ${username} ha sido actualizado correctamente`,
          data: updatedUser});
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error al actualizar el usuario' });
      };
};
    
module.exports={ updateUser}



