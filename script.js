const USD = 4.87
const EUR = 5.32
const AR = 205

// Obtendo elementos do formulario
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const span = document.querySelector("footer span")
const result = document.querySelector("footer h1")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") 
})

// Captando o evento de enviar do formulario
form.addEventListener("submit", (e) => {
  e.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "AR":
      convertCurrency(amount.value, AR, "$")
      break
  }
})

// Function para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    footer.classList.add("show-result")
    span.innerText = `${symbol} 1 = R$ ${price}`
    result = amount * price


  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Tente novamente!")
  }
}
