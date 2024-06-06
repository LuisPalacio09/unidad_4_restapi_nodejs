const { Router } = require("express");
const router = Router();

router.get("/prueba", (req, res) => {
  const data = {
    name: "Luis David",
    apellido: "Palacio Diaz",
  };
  res.json(data);
});

module.exports = router;
