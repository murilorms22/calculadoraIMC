function calcularIMC() {
    let inputPeso = document.getElementById('peso').value;
    let inputAltura = document.getElementById('altura').value / 100;
    let resultadoIMC;
    let status = document.getElementById('status');
    let medidas = document.getElementById('medidas');
    let progresso = document.getElementById('barraProgresso');

    resultadoIMC = Number(inputPeso) / Number(inputAltura * inputAltura);
    
    document.getElementById('numIMC').innerHTML = resultadoIMC.toFixed(1);
    progresso.value = resultadoIMC;
    
    let cor;
    if(resultadoIMC < 18.59) {
        cor = "rgb(59, 242, 255)";
    } else if(resultadoIMC >= 18.6 && resultadoIMC < 24.99) {
        cor = "rgb(9, 255, 0)";
    }else if (resultadoIMC >= 25.0) {
        cor = "rgb(187, 0, 0)";
    }

    progresso.style.setProperty("--cor-imc", cor);
    progresso.style.display = "flex";

    if(resultadoIMC < 18.59) {
        status.innerHTML = "Abaixo do normal";

    } else if (resultadoIMC >= 18.6 && resultadoIMC <= 24.99) {
        status.innerHTML = "Ideal"
    } else if (resultadoIMC >= 25.0 && resultadoIMC <= 29.99) {
        status.innerHTML = "Sobrepeso"
    } else if (resultadoIMC >= 30.0 && resultadoIMC <= 34.99) {
        status.innerHTML = "Obesidade grau I"
    } else if (resultadoIMC >= 35.0 && resultadoIMC <= 39.99) {
        status.innerHTML = "Obesidade grau II"
    } else if (resultadoIMC >= 40.0) {
        status.innerHTML = "Obesidade grau III"
    }

    medidas.innerHTML = "Peso: " + inputPeso + "kg | Altura: " + inputAltura.toFixed(2) + "m";
}