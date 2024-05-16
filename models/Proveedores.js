const mongoose = require("mongoose");

// modelo debe ser igual a lo que tenga la base de datos
const proveedoresSchema = mongoose.Schema(
  {
    proveedor: {
      type: String,
      required: true,
    },
    tipoProveedor: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    entidadDestino: {
      type: String,
      required: true,
    },
  },
  { versionkey: false }
);

module.exports = mongoose.model("Proveedores", proveedoresSchema);
