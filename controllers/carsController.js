const pool = require('../db');

exports.getAllCars = async (req, res) => {
  const result = await pool.query('SELECT * FROM cars ORDER BY created_at DESC');
  res.json(result.rows);
}

exports.addCar = async (req, res) => {
  const { make, model, year } = req.body;
  const result = await pool.query(
    'INSERT INTO cars (make, model, year) VALUES ($1, $2, $3) RETURNING *',
    [make, model, year]
  );
  res.status(201).json(result.rows[0]);
}

exports.deleteCar = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM cars WHERE id = $1', [id]);
  res.status(204).send();
}