const appointmentForm = document.getElementById("appointment-form");
const appointmentList = document.getElementById("appointment-list");

appointmentForm.addEventListener("submit", addAppointment);

document.addEventListener("DOMContentLoaded", function () {
  fetchAllAppointments();
});

appointmentList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    deleteAppointment(e);
  } else if (e.target.classList.contains("edit")) {
    populateInputFields(e);
  }
});

var userId = null;
function addAppointment(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("emailId").value;
  const phone = document.getElementById("phone").value;

  const data = {
    username,
    email,
    phone,
  };

  if (userId !== null) {
    editAppointment(userId, data);
    screenDisplay(data);
    userId = null;
  } else {
    addNewAppointment(data);
  }
}

async function addNewAppointment(data) {
  try {
    const response = await fetch(
      "http://localhost:3000/appointment/add-appointment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Error adding appointment");
    }

    const appointment = await response.json();
    console.log("Appointment created:", appointment);
    screenDisplay(appointment);
    resetForm();
  } catch (error) {
    console.error("Error adding appointment", error);
  }
}

async function populateInputFields(e) {
  const li = e.target.parentElement.parentElement;
  const editButton = e.target;

  const appointmentId = editButton.getAttribute("editdata-id");
  userId = appointmentId;

  try {
    const response = await fetch(
      `http://localhost:3000/appointment/get-appointment/${appointmentId}`
    );

    const user = await response.json();
    // console.log(user)
    const data = user.appointment;
    if (data) {
      document.getElementById("username").value = data.username;
      document.getElementById("emailId").value = data.email;
      document.getElementById("phone").value = data.phone;
    }
  } catch (error) {
    console.error("Error editing appointment", error);
  }

  // li.firstChild.textContent = `${user.Name} - ${user.Email}`;
  li.remove();
}

async function editAppointment(userId, data) {
  try {
    const update = await fetch(
      `http://localhost:3000/appointment/edit-appointment/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!update.ok) {
      throw new Error("Error updating appointment");
    }

    console.log("Appointment updated successfully");
  } catch (error) {
    console.error(error);
  }
}

function screenDisplay(appointment) {
  const li = document.createElement("li");
  //   li.className = "link-offset-1-hover";
  li.textContent = `${appointment.username} - ${appointment.email} - ${appointment.phone}`;

  const actionButtons = document.createElement("div");
  actionButtons.className = "action-buttons";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-id", appointment.id);
  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.textContent = "Edit";
  editButton.setAttribute("editdata-id", appointment.id);

  actionButtons.appendChild(deleteButton);
  actionButtons.appendChild(editButton);

  li.appendChild(actionButtons);
  appointmentList.appendChild(li);
}

async function deleteAppointment(e) {
  const deleteButton = e.target;
  const li = e.target.parentElement.parentElement;
  //const entry = li.firstChild.textContent;

  li.remove();
  const appointmentId = deleteButton.getAttribute("data-id");
  try {
    const response = await fetch(
      `http://localhost:3000/appointment/delete-appointment/${appointmentId}`,
      {
        method: "DELETE",
      }
    );
    console.log("Appointment deleted with ID:", appointmentId);
  } catch (error) {
    console.error("Error deleting appointment", error);
  }
}

async function fetchAllAppointments() {
  try {
    const response = await fetch(
      "http://localhost:3000/appointment/get-appointment"
    );
    if (!response.ok) {
      throw new Error("Error fetching appointments");
    }
    const data = await response.json();
    data.appointments.forEach((appointment) => {
      screenDisplay(appointment);
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
  }
}

function resetForm() {
  //   document.getElementById("name").value = "";
  //   document.getElementById("email").value = "";
  appointmentForm.reset();
}
