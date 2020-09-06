import './styles.css';
import crateFetchCountry from "./js/createFetchCountry";
import updateFindResult from "./js/createViewModel";
import notyMessages from "./js/notyMessage";

const debounce = require('lodash.debounce');
const inputRef = document.querySelector('.name-country');



inputRef.addEventListener('input', debounce(getFetchCountry, 500));



function getFetchCountry(event) {
  const nameCountry = event.target.value;
  crateFetchCountry(nameCountry)
    .then(checkValidationRes)
    .catch(console.log)
    .finally(()=>{
        console.log('finally');
    });
}


function checkValidationRes(country) {
  console.log(country)
  if (country.status === 404){
    notyMessages.errorMsg();
  } else if(country.length===1){
    notyMessages.successMsg();
    updateFindResult(country[0], true)
  }else if(country.length>10){
    notyMessages.infoMsg();
  }else{
    updateFindResult(country[0], false)
    notyMessages.infoMsg();
  }

}
