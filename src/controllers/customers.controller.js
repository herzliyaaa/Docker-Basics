const pool = require("../config/db.config");

const getCustomers = (req, res) => {
  pool.query(
    "SELECT * FROM customers ORDER BY customer_id DESC",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM customers WHERE customer_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addCustomer = (req, res) => {
  const { name, address, contact } = req.body;
  pool.query(
    "INSERT INTO customers (name, address, contact) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, address, contact],
    (error, results) => {
      if (error) throw error;
      res
        .status(200)
        .json({
          message: "Customer Created Successfully!",
          data: results.rows[0],
        });
    }
  );
};

const editCustomer = (req, res) => {
  const id = req.params.id;
  const { name, address, contact} = req.body;
  pool.query(
    "UPDATE customers SET name = $1,address = $2, contact = $3 WHERE customer_id = $4 RETURNING *",
    [name, address, contact, id],
    (error, results) => {
      if (error) throw new Error("error", error);
      res
        .status(200)
        .json({
          message: "Customer Updated Successfully!",
          data: results.rows,
        });
    }
  );
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM customers WHERE customer_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Deleted Successfully!");
    }
  );
};

const deleteAllCustomers = (req, res) => {
  pool.query("TRUNCATE TABLE customers CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json({ message: "All customers were deleted!!" });
  });
};

const getTotalCustomers = (req, res) => {
  pool.query("SELECT COUNT(customer_id) FROM customers", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  editCustomer,
  deleteCustomer,
  deleteAllCustomers,
  getTotalCustomers,
};
