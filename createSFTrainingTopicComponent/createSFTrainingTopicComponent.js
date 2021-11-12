import { LightningElement,wire ,api} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import CATEGORY_FIELD from '@salesforce/schema/SF_Training_Topic__c.Topic_Category__c';
import NAME_FIELD from '@salesforce/schema/SF_Training_Topic__c.Topic_Name__c';
import INSTR_FIELD from '@salesforce/schema/SF_Training_Topic__c.Instructor__c';
import SFTT_OBJ from '@salesforce/schema/SF_Training_Topic__c';
import { createRecord } from 'lightning/uiRecordApi';
//Show Toast event
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateSFTrainingTopicComponent extends LightningElement {
    
 _topicName = "";
 _topicCat = "";
 _topicInst = "";
 _accId ="";
 @api strTitle= "Create SF Training Record";
    

    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
         fieldApiName: CATEGORY_FIELD })
    catValues;
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
         fieldApiName: INSTR_FIELD })
    instrValues;


    handleChangeCategory(e){
        this._topicCat = e.target.value;
    }
    handleChangeInstructor(e){
        this._topicInst = e.target.value;
    }
    createSFRecord(){
        const fields={};
        this._topicName = this.template.querySelector('lightning-input[data-name="topic_name"]').value; 
        
        fields[NAME_FIELD.fieldApiName] = this._topicName;
        fields[CATEGORY_FIELD.fieldApiName] = this._topicCat;
        fields[INSTR_FIELD.fieldApiName] = this._topicInst;
        
       
        const recordInput = {
            apiName : SFTT_OBJ.objectApiName,
            fields : fields
        };
       
        createRecord(recordInput)
        .then(result => {
            this._accId = result.id;
            this.fields = {};
             //on success
             this.dispatchEvent( new ShowToastEvent({
                title : "Success",
                message : "Record has been successfully created "+ this._accId,
                variant : "success"
                 }));
          
        }).catch(error => {
            console.log(error);
            //on failture
            this.dispatchEvent( new ShowToastEvent({
                title : "Process Failed",
                message : "Error occured during creation of account..please contact Admin",
                variant : "error"
                 }));
        }) 





    }


}