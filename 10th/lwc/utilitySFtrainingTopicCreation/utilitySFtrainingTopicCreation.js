import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

import tObj from '@salesforce/schema/SF_Training_Topics__c';
import tName from '@salesforce/schema/SF_Training_Topics__c.Topic_Name__c';
import tCategory from '@salesforce/schema/SF_Training_Topics__c.Topic_Category__c';
import tInstructor from '@salesforce/schema/SF_Training_Topics__c.Instructor__c';

export default class UtilitySFtrainingTopicCreation extends LightningElement {

    _name;
    _category;
    _instructor;

    createSFtopic(){
        this._name = this.template.querySelector('lightning-input[data-name="topicName"]').value;
        this._category = this.template.querySelector('lightning-input[data-name="topicCategory"]').value;
        this._instructor = this.template.querySelector('lightning-input[data-name="topicInstructor"]').value; 

        const fields={};

        fields[tName.fieldApiName] = this._name;
        fields[tCategory.fieldApiName] = this._category;
        fields[tInstructor.fieldApiName] = this._instructor;

        const recordInput = {
            apiName :tObj.objectApiName,
            fields : fields
        };
        
        createRecord(recordInput)
        .then(
            topic => {
                const successMsg = new ShowToastEvent(
                    {
                        title : 'Success',
                        message : 'SF-Topic Created Successfully '+ topic.id,
                        variant : 'success'
                    }
                );

                this.dispatchEvent(successMsg);
            }
        )
        .catch(
            error => {
                const failureMsg = new ShowToastEvent(
                    {
                        title: 'Failed',
                        message: 'Error' +  error.body.message,
                        variant: 'error'
                    }
                );
    
                this.dispatchEvent(failureMsg);
            }
        )
    }

}