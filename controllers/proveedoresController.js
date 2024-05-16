/* exportar el modelo */
const Proveedores = require("../models/Proveedores.js");

/* metodo/funcion para agregar los lenguajes de programacion */
exports.agregarProveedores = async (req, res) => {
  try {
    /* agregar clientes */
    let proveedores = new Proveedores(req.body);
    /* save() metodo para agregar */
    await proveedores.save();
    res.send(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al agregar el proveedor");
  }
};

/* metodo/funcion para mostrar lenguajes de programacion */
exports.mostrarProveedores = async (req, res) => {
  try {
    /* find() sirve para mostrar/recuperar datos de la base de datos */
    let proveedores = await Proveedores.find();
    res.json(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al mostrar el proveedor");
  }
};

/* metodo/funcion para mostrar un lenguaje de programacion  */
exports.mostrarUnProveedor = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let proveedores = await Proveedores.findById(req.params.id);
    if (!proveedores) {
      res.status(404).json({
        msg: "No se encuentra el proveedor con ese ID",
      });
    }
    res.send(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al buscar el proveedor");
  }
};

/* metodo/funcion para eliminar un lenguaje de programación*/
exports.eliminarProveedores = async (req, res) => {
  try {
    /* findById() sirve para mostrar/recuperar datos de la base de datos */
    let proveedores = await Proveedores.findById(req.params.id);

    if (!proveedores) {
      res.status(404).json({ msg: "El cliente no existe" });
      return;
    }
    /* si el sliente esta se hace lo siguiente -> findOneAndDelete() sirve para eliminar elementos de la base de datos */
    await Proveedores.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "El proveedor fue eliminado" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al eliminar el proveedor de la base de datos");
  }
};

/* metodo/funcion para modificar lenguajes de programación */
exports.modificarProveedores = async (req, res) => {
  try {
    /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
    let proveedores = await Proveedores.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!proveedores) {
      return res.status(404).json({ msg: "El proveedor no existe" });
    }
    /* si el sliente esta se hace lo siguiente */
    res.json(proveedores);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al modificar el proveedor de la base de datos");
  }
};

/* metodo/funcion para actualizar datos de un lenguaje de programacion */
exports.actualizarProveedores = async (req, res) => {
  try {
    /* findByIdAndUpdate() sirve para actualizar datos de un elemento de la base de datos */
    let proveedores = await Proveedores.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!proveedores) {
      return res.status(404).json({ msg: "El proveedor no existe" });
    }
    /* si el sliente esta se hace lo siguiente */
    res.json(proveedores);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("Hubo un error al actualizar un proveedor de la base de datos");
  }
};
