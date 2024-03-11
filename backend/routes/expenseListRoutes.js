const express = require('express');

const router = express.Router();

const expenseListController = require('../controllers/expenseListController');

router.post('/add-expense', expenseListController.postExpense);
router.get('/get-all-expense', expenseListController.getAllExpense);
router.delete('/delete-expense/:id', expenseListController.deleteExpense);
router.put('/edit-expense/:id', expenseListController.editExpense);

module.exports = router;