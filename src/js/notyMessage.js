import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';


const notyMessages = {
  errorMsg(){
    error({
      title: 'Шота нитак!',
      text: 'Я тибя нипанимать!',
      delay: 1500,
    });
  },

  successMsg(){
    success({
      title: 'Даты Шерлок!',
      text: 'Отличный поиск! в МВД на работу гоу?',
      delay: 1500,
    });
  },
  infoMsg(){
    info({
      title: 'Ну такое,',
      text: 'Ты почти у цели!',
      delay: 1500,
    });
  }



}


export default notyMessages;
