import { LightningElement } from 'lwc';


export default class TrainingTopicDetailChild extends LightningElement {
    sftraining_Method = false;
    receiveinput;
    searchAllTopics(){
      
        this.sftraining_Method = true;
        const sendTopicsName = new CustomEvent("sendalltopics",{
             detail : {alltopicsname : this.sftraining_Method}
         });
         this.dispatchEvent(sendTopicsName);
        }

    searchAllTopicsByCat(){
       

        this.receiveinput = this.template.querySelector('lightning-input').value;
        const sendTopicsNamebyCat = new CustomEvent("sendalltopicsnamesbycat",{
            detail : {alltopicsnamebycat : this.receiveinput}
        });
        this.dispatchEvent(sendTopicsNamebyCat);

    }


}