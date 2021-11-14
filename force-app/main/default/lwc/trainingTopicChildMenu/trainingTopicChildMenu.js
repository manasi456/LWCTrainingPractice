import { LightningElement,wire } from 'lwc';

export default class TrainingTopicChildMenu extends LightningElement {
    _IsAllTopic = false;
    _topicCategoryInput;
  
    showAllTrainingTopics(){
        this._IsAllTopic = true;
        const showAllTopicevent =  new CustomEvent("searchalltopics",
        {
            detail :{ alltopiclist : this._IsAllTopic }
        });
         //Dispatch the event to parent
         this.dispatchEvent(showAllTopicevent);
    }
   
    showAllTrainingTopicsByCat()
    {
        // Get the input as entered by the user
        this._topicCategoryInput =  this.template.querySelector('lightning-input').value;
        const topicbycat = new CustomEvent("searchtopicbycat",{
            detail : {selectedcat : this._topicCategoryInput}
        });
         this.dispatchEvent(topicbycat);
        
    }
}