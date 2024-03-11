function useFetchData() {
  const postExpense = async (data) => {
    // console.log(data)
    try {
      const response = await fetch("http://localhost:3000/api/add-expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error adding expense");
      }
      const postData = await response.json();
      console.log(postData)
      return postData;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllExpense = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/get-all-expense');
      if (!response.ok) {
        throw new Error("Error getting expenses");
      }
      const getAllData = await response.json();
      // console.log(getAllData.expenses);
      return getAllData.expenses;
    } catch (error) {
      console.error(error);
    }
  }

  const deleteExpense = async(id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/delete-expense/${id}`,{
        method: 'DELETE'
      })

      if(!response.ok) {
        throw new Error("Error deleting expense");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const editExpense = async(data, id) => {
     try {
      const response = await fetch(`http://localhost:3000/api/edit-expense/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error adding expense");
      }
      const updateData = await response.json();
      console.log(updateData)
      return updateData;
    } catch (error) {
      console.error(error);
    }
  }

  return { postExpense, getAllExpense, deleteExpense, editExpense };
}

export default useFetchData;
