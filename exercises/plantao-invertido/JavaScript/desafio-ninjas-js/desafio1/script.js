// Seu código aqui
const showApi = () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  return fetch(url)
  .then(response => response.json())
  .then(({ results }) => {
    return results.filter( item => item.title.toLowerCase().includes('intel'));
  })
  .then(result => result.map(item => item.title));
}

// Seu código aqui
const renderItems = async () => {
  const recebeApi = await showApi();
  const ul = document.querySelector('.titlesList');
  ul.innerHTML = '';
  recebeApi.forEach(item => {
    ul.innerHTML += `<li>${item}</li>`;
  });
}
renderItems();
