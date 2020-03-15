const router = require("express").Router();
const { productDetails } = require("../connection/connection");

router.post("/add", async (req, res) => {
  try {
    const newItem = await productDetails.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const findItem = await productDetails.findByPk(req.params.id);
    res.json(findItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
