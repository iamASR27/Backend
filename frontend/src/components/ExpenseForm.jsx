/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./ExpenseForm.css";
import useFetchData from "./useFetchData";
import { useExpense } from "../store/expense-context";

function ExpenseForm({ editState, setEditState, formData, setFormData }) {
  // const [formData, setFormData] = useState({
  //   date: "",
  //   category: "",
  //   description: "",
  //   amount: 0,
  // });

  const { postExpense, editExpense } = useFetchData();
  const { addExpense, setExpenses } = useExpense();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: "",
      category: "",
      description: "",
      amount: 0,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { date, category, description, amount } = formData;

    const expenseData = {
      date,
      category,
      description,
      amount: parseFloat(amount),
    };

    try {
      if (!editState.status) {
        const response = await postExpense(expenseData);
        // console.log(response);
        addExpense(response.expense, true);
      } else {
        const response = await editExpense(expenseData, editState.editData.id);
        console.log(response);
        // addExpense(response.expense, false);
        setExpenses((prevExpenses) => {
          const updatedExpenses = [...prevExpenses];
          const updateIndex = prevExpenses.findIndex(
            (item) => item.id === response.expense.id
          );

          if (updateIndex !== -1) {
            updatedExpenses[updateIndex] = response.expense;
          }
          return updatedExpenses;
        });

        setEditState({ status: false, editData: null });
      }
    } catch (error) {
      console.error(error);
    }

    // console.log("before reset", formData);
    resetForm();
    // setEditState({ status: false, editData: null });
    // console.log("after reset", formData);
  };

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            id="category"
            onChange={handleInputChange}
            value={formData.category}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            //   cols="30"
            //   rows="10"
            onChange={handleInputChange}
            value={formData.description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0"
            step="0.01"
            onChange={handleInputChange}
            value={formData.amount}
          />
        </div>
        <button type="submit">
          {editState.status ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
