import { LightningElement,wire } from 'lwc';
import fetchSFTrainingTopics from '@salesforce/apex/SFTopicHelper.getSFTrainingTopics';
import fetchSFTrainingTopicsByCategory from '@salesforce/apex/SFTopicHelper.getSFTrainingTopicsByCategory';


export default class TopicTrainingList extends LightningElement {

    number = [1,2,3,4];
    
    SFTopicsArr = [

        { topicName : "Java script fundamentals",topicCategory : "Javascript"}, // object 1 or record 1
        { topicName : "JS Module",topicCategory : "Javascript"},
        { topicName : "Triggers",topicCategory : "APEX"},
    ];
    recordExists = this.SFTopicsArr.length > 0 ? true: false; 


    SFAllTrainingTopics;
    SFAllTrainingTopics_method3;
    //  //Method 1:Use @wire service and make a call to APEX Method and store output in a property
    //  @wire(fetchSFTrainingTopics)
    //  SFTopicslist; // Store OP in a prpoery and bind to HTML
 
 
    //  //Method 2: Use @wire service and make a call to APEX Method and store output in a function
    //  @wire(fetchSFTrainingTopics)
    //  loadTrainingTopics({data,error})
    //  {
    //      this.SFAllTrainingTopics = data; //Assing APEX output to a local property then bind to HTML
    //  }
     
 
    //  //Trying to access a method which is not annotated as auraenabled
    //  @wire(fetchSFTrainingTopicsByCategory, {strCat: 'LWC'})
    //  SFTopicsByCat;

     showAllTrainingTopics()
     {
 
         fetchSFTrainingTopics()
         .then((result) => {this.SFAllTrainingTopics_method3 = result})
         .catch((error) => {this._error = error})      
         
     }
     
     showAllTrainingTopicsByCat()
     {
         // Get the input as entered by the user
         this._topicCategoryInput =  this.template.querySelector('lightning-input').value;
 
         // Make a call to APEX method imperatively by passing category input 
         fetchSFTrainingTopicsByCategory({strCat : this._topicCategoryInput})
         .then((result) => {this.SFAllTrainingTopics_method3 = result})
         .catch((error) => this._error = error);
     }


}