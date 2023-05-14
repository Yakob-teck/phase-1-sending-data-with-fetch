function submitData(name, email) {
    const submitData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(submitData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit data");
        }
      })
      .then(function (data) {
        const newId = data.id;
        appendIdToDOM(newId);
      })
      .catch(function (error) {
        appendErrorMessageToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement("p");
    idElement.textContent = "New ID: " + id;
    document.body.appendChild(idElement);
  }
  
  function appendErrorMessageToDOM(message) {
    const errorElement = document.createElement("p");
    errorElement.textContent = message;
    document.body.appendChild(errorElement);
  }
  
  