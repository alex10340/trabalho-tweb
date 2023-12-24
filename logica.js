const overlay = document.querySelector('#overlay')
const donateButton = document.querySelector('#donateButton')
const paymentDisplay = document.querySelector('#paymentDisplay')
const paymentDisplayClose = document.querySelector('#paymentDisplayClose')
const button20 = document.querySelector('#button20')
const button40 = document.querySelector('#button40')
const button80 = document.querySelector('#button80')
const customAmountInput = document.querySelector('#customAmountInput')


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

  if(button40.classList.contains('buttonSelected')){
    button40.classList.remove('buttonSelected')
  }

  if(button80.classList.contains('buttonSelected')){
    button80.classList.remove('buttonSelected')
  }
})

button40.addEventListener('click',function(){
  button40.classList.toggle('buttonSelected')

  if(button20.classList.contains('buttonSelected')){
    button20.classList.remove('buttonSelected')
  }

  if(button80.classList.contains('buttonSelected')){
    button80.classList.remove('buttonSelected')
  }
})

button80.addEventListener('click',function(){
  button80.classList.toggle('buttonSelected')

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

