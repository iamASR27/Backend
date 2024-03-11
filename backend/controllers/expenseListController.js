const Expenses = require("../models/expenseList");

exports.postExpense = async (req, res) => {
  const { date, category, description, amount } = req.body;

  try {
    const expense = await Expenses.create({
      date,
      category,
      description,
      amount,
    });
    res.json({ expense });
  } catch (error) {
    console.error(error);
  }
};

exports.getAllExpense = async (req, res) => {
  try {
    const expenses = await Expenses.findAll();
    res.json({ expenses });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    await Expenses.destroy({where: {id: expenseId}});
  } catch (error) {
    console.error(error);
  }
}

exports.editExpense = async (req, res) => {
  const { date, category, description, amount } = req.body;
  try {
    const expenseId = req.params.id;
    // await Expenses.update({date, category, description, amount}, {
    //   where: {
    //     id: expenseId
    //   }
    // })
    const [updatedCount] = await Expenses.update({ date, category, description, amount }, {
      where: {
        id: expenseId
      }
    });

    if (updatedCount === 1) {
      const updatedExpense = await Expenses.findByPk(expenseId);
      res.status(200).json({ message: "Expense updated successfully", expense: updatedExpense });
    } else {
      res.status(404).json({ message: "Expense not found" });
    }
  } catch (error) {
    console.error(error);
  }
}