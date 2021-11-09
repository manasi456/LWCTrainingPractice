import { LightningElement, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

import ACCOUNT_OBJ from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

//Show Toast event
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SimplifiedAccountAddComponent extends LightningElement {

    
    _accName = "";

    _accId ="";

 @api strTitle= "Create Account - Simplified";
    
    createAccountHandler()
    {
        // Logic to insert a new account
        // 1. Get account name input from the user
        // 2. Make a call to UiREcordAPI
        // 3. Pass the parameters (account name)
        // 4. Get the response

        this._accName = this.template.querySelector('lightning-input[data-name="inpAccName"]').value; 

        // Use objet array to hold all the fields
        const fields={};

        //  Add user entered value to fields object array and pass it on to uiRecordAPI
        fields[ACCOUNT_NAME.fieldApiName] = this._accName;

        // Form a record input for uiRecordAPI
        const recordInput = {

            apiName :ACCOUNT_OBJ.objectApiName,
            fields : fields
        };

       
        
         // Make a call to uiRecordAPI
        createRecord(recordInput)
        .then(account => {
            // Handle success where u can read just inserted new account record 
            console.log("Account insert on success::" + JSON.stringify(account));
            this._accId = account.id;


            //on success
            this.dispatchEvent( new ShowToastEvent({
                title : "Success",
                message : "Account has been successfully created "+ this._accId,
                variant : "success"
                 }));

        })
        .catch(error => {
            console.log("erorr::" + error.body.message);
            //on failure
            this.dispatchEvent( new ShowToastEvent({
                title : "Process Failed",
                message : "Error occured during creation of account..please contact Admin",
                variant : "error"
                 }));
        })





    }
}