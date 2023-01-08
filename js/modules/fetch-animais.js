import AnimaNumeros from './animanumeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atraves do fetch
  // cria cada animal usando create animal
  async function criarAnimais() {
    try {
      // fetch espera resposta e transforma em json
      const response = await fetch(url);
      const jsonResponse = await response.json();

      // apos a transformação de json ativa as
      // funções para preencher e animar o numeros
      jsonResponse.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
