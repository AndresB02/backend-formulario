const express = require("express");

/* instanciar la libreria express */
const router = express.Router();

/* crear las rutas llamando al controller, ya que alli se estan haciendo 1 a 1 las funciones a instanciar */
const ProveedoresController = require("../controllers/proveedoresController");

/* post sirve para agregar */
/*  rutas del crud -> post sirve para crear el elemento en la base de datos*/
router.post("/", ProveedoresController.agregarProveedores);
/* get sirve para mostrar los elementos creados de la base de datos */
router.get("/", ProveedoresController.mostrarProveedores);
/* como estamos buscando por id, a la ruta se le agrega id */
router.get("/:id", ProveedoresController.mostrarUnProveedor);
/* delete -> es la forma de eliminar un elemento de la  base de datos */
router.delete("/:id", ProveedoresController.eliminarProveedores);
/* patch -> sirve para actualizar/modificar elementos de la base de datos */
router.patch("/:id", ProveedoresController.modificarProveedores);
/* put -> sirve para actualizar/modificar elementos de la base de datos */
router.put("/:id", ProveedoresController.actualizarProveedores);

module.exports = router;
