const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const customers = require("../sample.json");

router.get("/", async (req, res) => {
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { nombre, dni, direccion, telefono } = req.body;
  if (nombre && dni && direccion && telefono) {
    const id = customers.length + 1;
    const newCustomer = { ...req.body, id };
    customers.push(newCustomer);
    res.json(customers);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, dni, direccion, telefono } = req.body;
  if (nombre && dni && direccion && telefono) {
    _.each(customers, (customer, i) => {
      if (customer.id == id) {
        customer.nombre = nombre;
        customer.dni = dni;
        customer.direccion = direccion;
        customer.telefono = telefono;
      }
    });
    res.json(customers);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(customers, (customer, i) => {
    if (customer.id == id) {
      customers.splice(i, 1);
    }
  });
  res.send(customers);
});

module.exports = router;
