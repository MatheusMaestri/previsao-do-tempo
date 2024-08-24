document.addEventListener('DOMContentLoaded', () =>{
    const key = "cc1ef4f5d514cf71bf55745a8d1b9eb4"
    const buscar = document.querySelector('.botao-buscar')

    function colocarDadosNaTela(dados){
        document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
        document.querySelector('.tempo').innerHTML = Math.floor(dados.main.temp) + "°C"
        document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
        document.querySelector('.umidade').innerHTML = "Umidade " + dados.main.humidity + "%"
        document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    }

    async function buscarCidade(cidade){
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
            .then( resposta => resposta.json() )
        colocarDadosNaTela(dados)
    }

    buscar.addEventListener('click', () => {
        const cidade = document.getElementById('input-cidade').value
        buscarCidade(cidade)
    })
})

