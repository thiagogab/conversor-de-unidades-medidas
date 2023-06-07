function ConverterC(){
    document.getElementById("Entrada").innerHTML=""
    document.getElementById("conversao").innerHTML=`<label class="page-subtitle">Digite o valor em Celsius:</label> 
                                                    <input type="text" id="valor">
                                                    <input type="button" onclick="CalculoC()" class="button" value="Calcular"> `
    
}
function ConverterK(){
    document.getElementById("Entrada").innerHTML = ""
    document.getElementById("conversao").innerHTML=`<label class="page-subtitle">Digite o valor em Kelvin:</label> 
                                                    <input type="text" id="valor">
                                                    <input type="button" onclick="CalculoK()" class="button" value="Calcular"> `
}
function ConverterF(){
    document.getElementById("Entrada").innerHTML = ""
    document.getElementById("conversao").innerHTML=`<label class="page-subtitle">Digite o valor em Fahrenheit:</label> 
                                                    <input type="text" id="valor">
                                                    <input type="button" onclick="CalculoF()" class="button" value="Calcular"> `
}
function CalculoC(){
    var valor = parseFloat(document.getElementById("valor").value)
    document.getElementById("conversao").innerHTML=""
    document.getElementById("conversao").innerHTML=`<p class="page-subtitle">Valor em Celsius: `+valor+"ºC<br><br>Valor em Fahrenheit: "+
                                                    (((valor*1.8) + 32).toFixed(1)) + "ºC<br><br>Valor em Kelvin: "+((valor+273.15).toFixed(1))+
                                                    `ºK<br><br></p><input type="button" onclick="Reset()" value="Fazer outra conversão" class="button">`

}
function CalculoF(){
    var valor = parseFloat(document.getElementById("valor").value)
    document.getElementById("conversao").innerHTML=""
    document.getElementById("conversao").innerHTML=`<p class="page-subtitle">Valor em Fahrenheit: `+valor+"ºF<br><br>Valor em Celsius: "+
                                                    (((valor-32)/1.8).toFixed(1)) + "ºF<br><br>Valor em Kelvin: "+((((valor-32)/1.8)+273.15).toFixed(1))+
                                                    `ºK<br><br></p><input type="button" onclick="Reset()" value="Fazer outra conversão" class="button">`

}
function CalculoK(){
    var valor = parseFloat(document.getElementById("valor").value)
    document.getElementById("conversao").innerHTML=""
    document.getElementById("conversao").innerHTML=`<p class="page-subtitle">Valor em Kelvin: `+valor+"ºK<br><br>Valor em Fahrenheit: "+
                                                    ((((valor-273.15)*1.8)+32).toFixed(1)) + "ºF<br><br>Valor em Celsius: "+((valor-273.15).toFixed(1))+
                                                    `ºC<br><br></p><input type="button" onclick="Reset()" value="Fazer outra conversão" class="button">`

}
function Reset(){
    document.getElementById("conversao").innerHTML=""
    document.getElementById("Entrada").innerHTML=`<p class="page-subtitle">
                                                    Escolha a unidade de entrada: 
                                                    </p>
                                                    <input type="button" onclick="ConverterC()" value="Celsius" class="button">
                                                    <input type="button" onclick="ConverterF()" value="Fahrenheit" class="button">
                                                    <input type="button" onclick="ConverterK()" value="Kelvin" class="button">
                                                    `
    
}
