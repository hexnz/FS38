const select = document.querySelector('[name=regioes]');
const selectEstado = document.querySelector('[name=estados]')
const selectMunicipio = document.querySelector('[name=municipios]')

select.onchange = (event) => buscarEstado(event.target.value)
selectEstado.onchange = (event) => buscarMunicipio(event.target.value)


let buscarRegioes = function () {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                const regiao = response[i];
                select.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
            }
        })
        .catch(error => console.error('Erro ao buscar regiões:', error));
};
let buscarEstado = function (idRegiao) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`)
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                const estado = response[i];
                selectEstado.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
            }
        })
        .catch(error => console.error('Erro ao buscar regiões:', error));
};
let buscarMunicipio = function (idMunicipio) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idMunicipio}/municipios`)
        .then(response => response.json())
        .then(response => {
            for (let i = 0; i < response.length; i++) {
                const municipio = response[i];
                selectMunicipio.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`;
            }
        })
        .catch(error => console.error('Erro ao buscar regiões:', error));
};




buscarRegioes();
