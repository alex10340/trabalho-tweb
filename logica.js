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
const doacaoUnica = document.querySelector('#doacaoUnica')
const doacaoMensal = document.querySelector('#doacaoMensal')
const particularEmpresa = document.querySelector('#particularEmpresa')
const particularEmpresaText = document.querySelector('#particularEmpresaText')
const particular = document.querySelector('#particular')
const empresa = document.querySelector('#empresa')
const particularInvalido = document.querySelector('#particularInvalido')
const informacoes = document.querySelector('#informacoes')
const email = document.querySelector('#email')
const nome = document.querySelector('#nome')
const apelido = document.querySelector('#apelido')
const nif = document.querySelector('#nif')
const morada = document.querySelector('#morada')
const rua = document.querySelector('#rua')
const cidade = document.querySelector('#cidade')
const codigoPostal = document.querySelector('#codigoPostal')
const pais = document.querySelector('#pais')


const errorBox = document.querySelector('#errorBox')



doacaoUnica.checked=false
doacaoMensal.checked=false
particular.checked=false
empresa.checked=false
customAmountInput.value=''


donateButton.addEventListener('click', function(){
  overlay.style.display='block'
  paymentDisplay.style.display='block'
})

paymentDisplayClose.addEventListener('click', function(){
  overlay.style.display='none'
  paymentDisplay.style.display='none'
  doacaoUnica.checked=false
  doacaoMensal.checked=false
  particular.checked=false
  empresa.checked=false
  customAmountInput.value=''
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


particular.addEventListener('change',function(){
  errorBox.style.display='none'
  if(particular.checked){
    empresa.checked = false
    informacoes.style.display='flex'
    apelido.style.display='block'
  }
  else{
    informacoes.style.display='none'
  }
})

empresa.addEventListener('change',function(){
  errorBox.style.display='none'
  if(empresa.checked){
    particular.checked = false
    informacoes.style.display='flex'
    apelido.style.display='none'
  }
  else{
    informacoes.style.display='none'
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
    tipoInvalido.style.display='none'
  }
  
  else if(doacaoUnica.checked == false && doacaoMensal.checked == false){
    tipoInvalido.style.display='block'
    quantiaInválida.style.display='none'
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
    particularEmpresa.style.display='flex'
    particularEmpresaText.style.display='flex'

    if(tipoDoacaoSelect=='mensal'){
      morada.style.display='flex'
    }

    seguinte.addEventListener('click', function(){
      errorBox.style.display='block'

      if(particular.checked == false && empresa.checked == false){
        particularInvalido.style.display='block'
      }
      else if(email.value==''){
        errorBox.innerHTML='Email inválido!'
      }
      else if(nome.value==''){
        errorBox.innerHTML='Nome inválido!'
      }
      else if(apelido.value=='' && apelido.style.display!='none'){
        errorBox.innerHTML='Apelido inválido!'
      }
      else if(nif.value==''){
        errorBox.innerHTML='NIF inválido!'
      }
      else if(morada.style.display=='flex'){
        if(rua.value==''){
          errorBox.innerHTML='Rua inválida!'
        }
        if(cidade.value==''){
          errorBox.innerHTML='Cidade inválida!'
        }
        if(codigoPostal.value==''){
          errorBox.innerHTML='Código postal inválido!'
        }
        if(pais.value==''){
          errorBox.innerHTML='País inválido!'
        }
      }    
      else{
        errorBox.style.display='none'
        particularInvalido.style.display='none'

        particularEmpresa.style.display='none'
        particularEmpresaText.style.display='none'
        informacoes.style.display='none'
        
        
        
      }
    })

  }

})
