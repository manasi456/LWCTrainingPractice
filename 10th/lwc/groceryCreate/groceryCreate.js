import { LightningElement } from 'lwc';

import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';
 
import gObj from '@salesforce/schema/Grocery__c';
import gItem from '@salesforce/schema/Grocery__c.Grocery_Item__c';
import gCategory from '@salesforce/schema/Grocery__c.Grocery_Category__c';

export default class GroceryCreate extends LightningElement {
    _item;
    _category;

    addGlocery(){

        this._item = this.template.querySelector('lightning-input[data-name="groceryItem"]').value;
        this._category = this.template.querySelector('lightning-input[data-name="groceryCategory"]').value

        const fields={};
        fields[gItem.fieldApiName]=this._item;
        fields[gCategory.fieldApiName]=this._category;

        const input = {
            apiName : gObj.objectApiName,
            fields : fields
        };

        createRecord(input)
        .then(
            grocery => {
                const successMesg =  new ShowToastEvent(
                    {
                        title : 'Success',
                        message : 'New Grocery added - '+grocery.id,
                        variant : 'success'
                    }
                );

                this.dispatchEvent(successMesg);
                location.reload();
            }
        )
        .catch(
            error => {
                const failMesg =  new ShowToastEvent(
                    {
                        title : 'Faild',
                        message : 'Failed to add',
                        variant : 'error',
                    }
                );

                this.dispatchEvent(failMesg);
            }
        )

        
    }
}