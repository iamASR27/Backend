/* eslint-disable react/prop-types */
import useFetchData from "./useFetchData";
import "./ExpenseList.css";
// import { useEffect } from "react";
import { useExpense } from "../store/expense-context";
import moment from "moment";

function ExpenseList({ setEditState, setFormData }) {
  const { expenses, setExpenses } = useExpense();
  const { deleteExpense } = useFetchData();

  const handleDelete = (id) => {
    deleteExpense(id);
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const handleEdit = (expense) => {
    setEditState({ status: true, editData: expense });
    console.log("edit clicked", expense);
    // setExpenses((prevExpenses) =>
    //   prevExpenses.filter((item) => item.id !== expense.id)
    // );
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: expense.date,
      category: expense.category,
      description: expense.description,
      amount: expense.amount,
    }));
  };

  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th className="expense-date center">Date</th>
            <th className="expense-category center">Category</th>
            <th className="expense-description center">Description</th>
            <th className="expense-amount center">Amount Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 && (
            <tr>
              <td colSpan="5">
                <div>No expenses found.</div>
              </td>
            </tr>
          )}

          {expenses &&
            expenses.slice().reverse().map((expense) => {
              return (
                <tr key={expense.id}>
                  {/* <td>{expense.date}</td> */}
                  <td>{moment(expense.date).format("DD/MM/YYYY")}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>
                    <div className="actionButtons">
                      <button type="button" onClick={() => handleEdit(expense)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(expense.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                //   <li key={expense.id} className="expense-item">
                //   <div className="expense-info">
                //     <span className="expense-date center">{expense.date}</span>
                //     <span className="expense-category center">{expense.category}</span>
                //     <span className="expense-description center">{expense.description}</span>
                //     <span className="expense-amount center">{expense.amount}</span>
                //   </div>
                //   <div className="actionButtons">
                //     <button type="button">Edit</button>
                //     <button type="button">Delete</button>
                //   </div>
                // </li>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
