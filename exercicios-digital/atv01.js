
const inputCep = document.getElementById('cep');
const inputBairro = document.getElementById('bairro')
const inputEstado = document.getElementById('estado')
const inputCidade = document.getElementById('cidade')
const inputLogradouro = document.getElementById('logradouro');
inputCep.addEventListener('keyup', (event) => {

    const cep = event.target.value;

    if (cep.length ===8) {

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((responseJson) =>{
                inputBairro.value=responseJson.bairro;
                inputEstado.value=responseJson.estado;
                inputCidade.value=responseJson.localidade;
                inputLogradouro.value=responseJson.logradouro;

            })

    }
})