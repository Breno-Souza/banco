const saldoiniciau = ('2500')
alert(`seu saldo e de R$${saldoiniciau}`)

const valor = prompt(`digite o valor da sua compra`)


if(saldoiniciau >valor){
   alert(`sua compra foi realizada seu saldo atua e de R$${saldoiniciau - valor}`)
}

else if(saldoiniciau === valor){
    alert(`sua compra foi realizada seu saldo atua e de R$${saldoiniciau - valor}`)
}

else if(saldoiniciau < valor){
    alert(`Saldo insuficiente`)
}
  


