const overlay = document.querySelector('#overlay')
const donateButton = document.querySelector('#donateButton')
const paymentDisplay = document.querySelector('#paymentDisplay')
const paymentDisplayTitle = document.querySelector('#paymentDisplayTitle')
const paymentDisplayClose = document.querySelector('#paymentDisplayClose')
const button20 = document.querySelector('#button20')
const button40 = document.querySelector('#button40')
const button80 = document.querySelector('#button80')
const customAmountInput = document.querySelector('#customAmountInput')
const seguinte = document.querySelector('#seguinte')
const quantiaInválida = document.querySelector('#quantiaInválida')
const tipoDoacao = document.querySelector('#tipoDoacao')
const tipoInvalido = document.querySelector('#tipoInvalido')
var doacaoUnica = document.querySelector('#doacaoUnica')
var doacaoMensal = document.querySelector('#doacaoMensal')


donateButton.addEventListener('click', function(){
  overlay.style.display='block'
  paymentDisplay.style.display='block'
})

paymentDisplayClose.addEventListener('click', function(){
  overlay.style.display='none'
  paymentDisplay.style.display='none'
})


button20.addEventListener('click',function(){
  button20.classList.toggle('buttonSelected')
  customAmountInput.value = ''

  if(button40.classList.contains('buttonSelected')){
    button40.classList.remove('buttonSelected')
  }

  if(button80.classList.contains('buttonSelected')){
    button80.classList.remove('buttonSelected')
  }
})

button40.addEventListener('click',function(){
  button40.classList.toggle('buttonSelected')
  customAmountInput.value = ''

  if(button20.classList.contains('buttonSelected')){
    button20.classList.remove('buttonSelected')
  }

  if(button80.classList.contains('buttonSelected')){
    button80.classList.remove('buttonSelected')
  }
})

button80.addEventListener('click',function(){
  button80.classList.toggle('buttonSelected')
  customAmountInput.value = ''

  if(button20.classList.contains('buttonSelected')){
    button20.classList.remove('buttonSelected')
  }

  if(button40.classList.contains('buttonSelected')){
    button40.classList.remove('buttonSelected')
  }
})

customAmountInput.addEventListener('click',function(){
  if(button20.classList.contains('buttonSelected')){
    button20.classList.remove('buttonSelected')
  }

  if(button40.classList.contains('buttonSelected')){
    button40.classList.remove('buttonSelected')
  }
  
  if(button80.classList.contains('buttonSelected')){
    button80.classList.remove('buttonSelected')
  }
})

var tipoDoacaoSelect

doacaoUnica.addEventListener('change',function(){
  if(doacaoUnica.checked){
    doacaoMensal.checked = false
    tipoDoacaoSelect = 'unica'
  }
})

doacaoMensal.addEventListener('change',function(){
  if(doacaoMensal.checked){
    doacaoUnica.checked = false
    tipoDoacaoSelect = 'mensal'
  }
})

seguinte.addEventListener('click',function(){
  var quantia

  if(button20.classList.contains('buttonSelected')){
    quantia = 20
  }
  else if(button40.classList.contains('buttonSelected')){
    quantia = 40
  }
  else if(button80.classList.contains('buttonSelected')){
    quantia = 80
  }
  else{
    quantia = customAmountInput.value
  }
  
  console.log(quantia)
  


  if(quantia <= 0 || quantia==''){
    quantiaInválida.style.display='block'
  }
  
  else if(doacaoUnica.checked == false && doacaoMensal.checked == false){
    tipoInvalido.style.display='block'
  }

  else{
    quantiaInválida.style.display='none'
    tipoInvalido.style.display='none'
    tipoDoacao.style.display='none'
    button20.style.display='none'
    button40.style.display='none'
    button80.style.display='none'
    customAmountInput.style.display='none'
    paymentDisplayTitle.innerHTML='Informação'
    

  }

})
