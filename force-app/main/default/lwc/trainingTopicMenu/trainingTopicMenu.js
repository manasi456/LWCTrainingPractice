import { LightningElement } from 'lwc';
import showAllTrainingTopics  from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import fetchSFTrainingTopicsByCategory from '@salesforce/apex/SFTopicHelper.getSFTrainingTopicsByCategory';

export default class TrainingTopicMenu extends LightningElement {
    _SFTopics;
    topicsByCat;
    handleevent(event){
        const allTopiclst = event.detail.alltopiclist;
        showAllTrainingTopics()
        .then((result) => {
              
                this._SFTopics = result;
        })
        .catch((error) => {
            alert("Error occured");
        });
    }

    handletopicbycat(event) {
       
        const catInput=event.detail.selectedcat;
        fetchSFTrainingTopicsByCategory({strCat:catInput})
        .then((result) => {this.topicsByCat = result})
        .catch((error) => {alert("Error occured")});
        
        }

}