import itemsGoldResult from '../templates/itemsGoldResult.hbs'

const resultSearch = document.querySelector('.result-search');


function updateFindResult(data){
  resultSearch.innerHTML = itemsGoldResult(data);
}

export default updateFindResult;




