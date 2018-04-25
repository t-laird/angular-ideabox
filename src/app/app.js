import angular from 'angular';
import {ideaFormCtrl, IdeaFormCtrlModule} from "./IdeaForm/IdeaForm";


import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'dog'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    'ideaForm'
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;