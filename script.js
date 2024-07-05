function calcImc() {
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    //variavel que faz o calculo imc
    let calculo = peso / (altura * altura)
    let res = document.getElementById('resultado')

    res.innerHTML = `O seu imc é ${calculo.toFixed(2)}`

    if (calculo < 16) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>magreza grave</strong>.`
    } else if (calculo >= 16 && calculo <= 18.5) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>magreza leve</strong>.`
    } else if (calculo >= 18.6 && calculo <= 24.9) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>peso ideal</strong>.`
    } else if (calculo >= 25 && calculo <= 29.9) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>sobrepeso</strong>.`
    } else if (calculo >= 30 && calculo <= 35) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>obesidade grau 1</strong>.`
    }
    else if (calculo >= 36 && calculo <= 40) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>obesidade grau 2 ou severa</strong>.`
    }
    else if (calculo > 41) {
        res.innerHTML = `O seu imc é ${calculo.toFixed(2)} e você tem <strong>obesidade grau 3 ou mórbida</strong>.`
    }
}