import { api, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import fetchSFTrainingTopics from '@salesforce/apex/SfApexClass1.getAllTopics';

export default class LwcBaseComponentCommunication extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectApiName;
    SFAllTrainingTopics_method3;

    showAllTrainingTopics()
   {

       fetchSFTrainingTopics()
       .then((result) => {this.SFAllTrainingTopics_method3 = result})
       .catch((error) => {this._error = error}); 
       
   }


   connectedCallback(){
       console.log("The record Id : "+this.recordId);
       console.log("The record Id : "+this.objectApiName);
   }


   createAllTopicsRecord(){
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'SF_Training_Topic__c',
            actionName: 'new',
        },
    });
   }
   navigateToAmazon(){
    this[NavigationMixin.Navigate]({
        type: "standard__webPage",
        attributes: {
            url: "https://www.amazon.in/Salesforce-CRM-Definitive-Admin-Handbook/dp/1782170529"
        }
    });
   }
   
   
}