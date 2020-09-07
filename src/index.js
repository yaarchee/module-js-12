import './styles.css';
import createViewModel from "./js/createViewModel";
import FetchCountry from './js/FetchCountry'
import refs from "./js/refs";
const debounce = require('lodash.debounce');


const newFetch = new FetchCountry();

refs.inputRef.addEventListener('input', debounce(newFetch.getFetchCountry, 500));
refs.resultSearchNewbie.addEventListener('click', setCountryToSearch)




function setCountryToSearch(event) {
  console.log(event.target);
  console.log(event);
  refs.inputRef.value ='';
  console.log(event.target.dataset);
  createViewModel.showInfoCountry(event.target.dataset.index);

}
