const router = require("express").Router();

const {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
  deleteAllCustomers,
  getCustomerById,
} = require("../controllers/customers.controller");

router.get("/customers", getCustomers);
router.get("/customers/view/:id", getCustomerById);
router.post("/customers/add", addCustomer);
router.patch("/customers/edit/:id", editCustomer);
router.delete("/customers/delete/:id", deleteCustomer);
router.delete("/customers/delete-all", deleteAllCustomers);

module.exports = router;
