import { createContext, useContext, useState, useEffect } from "react";
import useFetchData from "../components/useFetchData";

const ExpenseContext = createContext({
  expenses: [],
  // eslint-disable-next-line no-unused-vars
  addExpense: (data) => {},
});

// eslint-disable-next-line react/prop-types
export default function ExpenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const {getAllExpense} = useFetchData();

  const addExpense = (expense) => {
    // if(edit) {
    //   setExpenses((prevExpenses) => {
    //     const updatedExpenses = [...prevExpenses];
    //     const updateIndex = prevExpenses.findIndex((item) => item.id === expense.id)

    //     if(updateIndex !== -1){
    //       updatedExpenses[updateIndex] = expense;
    //     }
    //     return updatedExpenses;
    //   })
    // } else {
    //   setExpenses((prevExpenses) => [...prevExpenses, expense])
    // }
    setExpenses((prevExpenses) => [...prevExpenses, expense])
  };

  // const addExpenses = (expenses) => {
  //   setExpenses([expenses]);
  // }

  useEffect(() => {
    const fetchExpenses = async () => {
      const getExpenses = await getAllExpense();
      setExpenses(getExpenses);
      // console.log(getExpenses);
    };
    // console.log("useeffect run");
    fetchExpenses();

    // console.log(expenses);
  }, []);

  // console.log(expenses)

  const contextValue = {
    expenses: expenses,
    addExpense: addExpense,
    setExpenses: setExpenses,
    // addAllExpenses: addExpenses,
  };

  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useExpense() {
  return useContext(ExpenseContext);
}
