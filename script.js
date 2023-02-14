// Select all elements you need
const form = document.querySelector("#form")
const passwordInput = document.querySelector("#password")
const passwordConfirmationInput = document.querySelector(
  "#password-confirmation"
)
const parent = document.querySelector("#confirmation-pass-error")

form.addEventListener("submit", (e) => {
  // Create an array for errors message
  let errorsMessage = []
  // Clear the last errors
  clearErrors(errorsMessage)

  // if those 2 password dont match, return a error
  if (passwordConfirmationInput.value !== passwordInput.value) {
    errorsMessage.push(
      "Confirmation password doesn't match the initial password"
    )
  }

  // daca exista erori, previn-o sa se dea submit la form
  if (errorsMessage.length > 0) {
    e.preventDefault()
    // Daca exista erori, arata-le
    showErrors(errorsMessage)
  }
})

function showErrors(errorsMessage) {
  errorsMessage.forEach((errorMessage) => {
    const errorElement = document.createElement("li")
    errorElement.innerText = errorMessage
    errorElement.classList.add("input-hint")
    errorElement.classList.add("error")
    parent.appendChild(errorElement)
    parent.classList.add("show")
    parent.classList.remove("hide")
  })
}

function clearErrors() {
  parent.innerHTML = ""
  parent.classList.add("hide")
  parent.classList.remove("show")
}
