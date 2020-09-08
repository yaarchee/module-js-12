import crateFetchCountry from "./createFetchCountry";
import notyMessages from "./notyMessage";

import createViewModel from "./createViewModel";

export default class FetchCountry {
  constructor() {
    this.getFetchCountry = this.getFetchCountry.bind(this);
  }

  getFetchCountry(event) {
    this._dataForSearch = event.target.value
    crateFetchCountry(this._dataForSearch)
      .then(this.checkValidationRes)
      .catch(console.log)
      .finally(() => {
        console.log('finally');
      });
  }

  checkValidationRes(country) {
   if(country.length>1 && country.length<10){
      notyMessages.infoMsg();
    }else if(country.length>10){
     notyMessages.errorMsg();
     return;
   }

    createViewModel.updateFindResult(country, true);
  }



}
