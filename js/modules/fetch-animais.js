import initAnimaNumero from './animanumeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      jsonResponse.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./fetchAnimais.json');
}
