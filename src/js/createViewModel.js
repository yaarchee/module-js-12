import itemsGoldResult from '../templates/itemsGoldResult.hbs'
import itemsSilverResult from '../templates/itemsSilverResult.hbs'
import refs from './refs'
import notyMessages from "./notyMessage";

const createViewModel= {

  data: [],

  updateFindResult(data) {
    this.data = data
    this.clear();

    if (data.length === 1) {
      notyMessages.successMsg();
      refs.resultSearchHero.innerHTML = itemsGoldResult(data[0]);
    } else {
      refs.resultSearchNewbie.innerHTML = itemsSilverResult(data);
    }

  },

  showInfoCountry(index){
    //this.clear();
    refs.resultSearchHero.innerHTML = itemsGoldResult(this.data[index]);
  },

  clear(){
    refs.resultSearchHero.innerHTML = '';
    refs.resultSearchNewbie.innerHTML = '';
  }
}



export default createViewModel;




