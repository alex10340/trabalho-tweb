const overlay = document.querySelector('#overlay')
const donateButton = document.querySelector('#donateButton')
const paymentDisplay = document.querySelector('#paymentDisplay')
const paymentDisplayClose = document.querySelector('#paymentDisplayClose')

donateButton.addEventListener('click', function(){
  overlay.style.display='block'
  paymentDisplay.style.display='block'
})

paymentDisplayClose.addEventListener('click', function(){
  overlay.style.display='none'
  paymentDisplay.style.display='none'
})