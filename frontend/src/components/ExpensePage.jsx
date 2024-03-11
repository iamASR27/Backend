import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./ExpensePage.css";
import { useState } from "react";

function ExpensePage() {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    description: "",
    amount: 0,
  });
  const [editState, setEditState] = useState({ status: false, editData: null });
  return (
    <div className="expense-page">
      <ExpenseForm
        editState={editState}
        setEditState={setEditState}
        formData={formData}
        setFormData={setFormData}
      />
      <ExpenseList setEditState={setEditState} setFormData={setFormData} editState={editState} />
    </div>
  );
}

export default ExpensePage;
