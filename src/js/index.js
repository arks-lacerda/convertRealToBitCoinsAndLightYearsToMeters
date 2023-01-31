const changeTitle = document.querySelector('.page-title')
const changeContainer = document.querySelector('.container')
const changeContainerImg = document.querySelector('.container-img')	
const changeContainerTwo = document.querySelector('.containerTwo')
const changeContainerImgTwo = document.querySelector('.container-imgTwo')	

let name
name = prompt("Digite seu nome Astronauta")
alert('Bem vindo abordo Astronauta ' + name)

let type
type = Number(prompt(`Digite o número \n 1 - Para converter bitCoins \n 2 - Para converter Ano-Luz em Metros \n 3 - Para para finalizar`))

switch (type) {
  case 1:
    convertRealToBitcoins()
    break;
  case 2:
    lightYears()
    break;
  case 3:
    alert('Volte sempre')
    break;
  default:
    alert('Por favor digitar 1 ao 2 e para finalizar 3')
    break;
}

function lightYears () {
  changeBackground()
  changeTitles()
  let anosLuzPerMetro = 9461000000000000
  let valorEmAnosLuz
  valorEmAnosLuz = prompt("Digite quantos anos luz deseja converter em metros: ")
    
  let valorEmMetros = valorEmAnosLuz * anosLuzPerMetro
  valorEmMetros = valorEmMetros.toExponential(3)
  alert('Distancia em Metros ' + valorEmMetros)
}

function convertRealToBitcoins () {
  let valueBitcoins = 0.0000085
  let valueReal = Number(prompt('Digite o valor em Real'))

  let convertRealToBitcoin = (valueReal * valueBitcoins)
  alert('BTC ' + convertRealToBitcoin)
}

function changeTitles () {
  changeTitle.textContent = 'Conversor de Anos-Luz para Metros'
}

function changeBackground () {
  changeClassHide();
  document.body.style.backgroundColor = "#111A4D";
  document.body.style.backgroundImage = "url('./src/images/hand-drawn-cartoon-space-astronaut.png')";
}

function changeClassHide() {
  changeContainer.classList.add('hide')
  changeContainerImg.classList.add('hide')
  changeContainerTwo.classList.remove('hide')
  changeContainerImgTwo.classList.remove('hide')
}