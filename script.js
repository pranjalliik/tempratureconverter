
let from = document.getElementById("from");
let to = document.getElementById("to");
let choosefrom = document.getElementById("choosefrom")
let chooseto = document.getElementById("chooseto")
let convert = document.getElementById("convert")
let reset = document.getElementById("reset")
let ipa = document.getElementById('ipa');
let ipb = document.getElementById('ipb');

convert.addEventListener("click",(e)=>{
if(choosefrom.value === chooseto.value)return;

if(isNaN(ipa.value.trim()) === true)return

let a = parseInt(ipa.value.trim())

 let ans = convertTemperature(a,choosefrom.value,chooseto.value)
 ipb.value = ans 

})

function convertTemperature(inputTemp, inputUnit, outputUnit) {
    let result;
  
    if (inputUnit === 'Celsius') {
      if (outputUnit === 'Fahrenheit') {
        result = (inputTemp * 9/5) + 32;
      } else if (outputUnit === 'Kelvin') {
        result = inputTemp + 273.15;
      } 
    } else if (inputUnit === 'Fahrenheit') {
      if (outputUnit === 'Celsius') {
        result = (inputTemp - 32) * 5/9;
      } else if (outputUnit === 'Kelvin') {
        result = (inputTemp - 32) * 5/9 + 273.15;
      } 
    } else if (inputUnit === 'Kelvin') {
      if (outputUnit === 'Celsius') {
        result = inputTemp - 273.15;
      } else if (outputUnit === 'Fahrenheit') {
        result = (inputTemp - 273.15) * 9/5 + 32;
      }
    } 
      return result;
    
}

reset.addEventListener("click",()=>{
    ipa.value = ''
    ipb.value = ''
})

choosefrom.addEventListener("change",()=>{
    from.innerText = choosefrom.value
})

chooseto.addEventListener("change",()=>{
    to.innerText= chooseto.value

})