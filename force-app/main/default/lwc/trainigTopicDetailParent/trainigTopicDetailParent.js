import { LightningElement } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SfApexClass1.getAllTopics';
import fetchSFTrainingTopicsByCategory from '@salesforce/apex/SfApexClass1.getAllTopicsByCat';


export default class TrainigTopicDetailParent extends LightningElement {
    _error;
    _SFTopics;

    handleShowAllTopics(event){
        const allTopiclst = event.detail.alltopicsname;
      
        fetchSFTrainingTopics()
        .then((result) => {this._SFTopics = result;})
        .catch((error) => {alert("Error occured");});
    }

    handleShowAllTopicsByCat(event){
       
        const allTopiclstbyCat = event.detail.alltopicsnamebycat;
        fetchSFTrainingTopicsByCategory({strcat : allTopiclstbyCat})
        .then((result) => {this._SFTopics = result;})
        .catch((error) => {alert("Error occured");});

    }




}