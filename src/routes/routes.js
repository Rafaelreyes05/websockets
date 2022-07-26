const express = require("express");
const router = express.Router();

// <------------------------- Contenedor de Productos ------------------------->

const Contenedor = require("../contenedor");
const contenedor1 = new Contenedor("productos.json");

// <------------------------- Configuracion Rutas ------------------------->

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// <------------------------- Rutas ------------------------->

router.get("/", (req, res) => {
  // const { id } = req.query;
  // if (id != undefined) {
  //   const response = contenedor1.get(Number(id));
  //   res.render("idProduct", { response });
  // } else {
  //   const response = contenedor1.getAll();
  //   res.render("allProducts", { response });
  // }
});

router.post("/", (req, res) => {
  const { nombre, precio, imagen } = req.body;
  if (nombre === "" || precio === "" || imagen === "") {
    res.render("addProduct", {response: false});
  } else {
    const response = contenedor1.save({
      nombre: nombre,
      precio: Number(precio),
      imagen: imagen,
    });
    res.redirect('/')
  }
});



module.exports = router;