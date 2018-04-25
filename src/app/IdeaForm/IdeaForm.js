import angular from 'angular';

import './IdeaForm.css';

const IdeaFormCtrlModule = angular.module('ideaForm', [

]);

class IdeaFormCtrl {
    constructor() {
    }

    addIdea(e) {
        e.preventDefault();
        console.log(this.ideaTitle);
        console.log(this.ideaDescription);
    }
}


IdeaFormCtrlModule.directive('ideaForm', () => (
     {
        template: require('./IdeaForm.html'),
        controller: IdeaFormCtrl,
        controllerAs: 'ctrl'
    }));

export {IdeaFormCtrl, IdeaFormCtrlModule};