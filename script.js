const USD = 4.87
const EUR = 5.32
const GBP = 4.20

// Obtendo elementos do formulario
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const span = document.querySelector("footer span")
const result = document.querySelector("footer h1")

// Manipulando o input amount para receber somente numeros | daria no mesmo se eu deixasse o input do tipo number
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
    case "GBP":
      convertCurrency(amount.value, GBP, "$")
      break
  }
})

// Function para converter a moeda
function convertCurrency(amount, price, symbol){
  try {
    //Exibindo a cotação da moeda
    span.innerText = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Exibe total formatado
    result.innerText = formatCurrencyBRL(amount * price).replace("R$", "") + " Reais"

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
    
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Tente novamente!")
  }
}

// Formatação da moeda padrão
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}