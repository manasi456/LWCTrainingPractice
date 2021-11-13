import { LightningElement,wire,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import GROCERY_OBJ from '@salesforce/schema/Grocery__c';
import GROCERY_NAME from '@salesforce/schema/Grocery__c.Name';
import GROCERY_CAT from '@salesforce/schema/Grocery__c.Grocery_Category__c';
import showSummaryList from '@salesforce/apex/GroceryList.showSummaryList';
import {refreshApex} from '@salesforce/apex';
//Show Toast event
import { ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ChildGroceryComponent extends LightningElement {
    grocery_method = false;
    _groceryName = "";
    _groceryCat = "";

    // wiredGroceryList = [];

    // @wire(showSummaryList) grolist(result){
    //     this.wiredGroceryList = result;
    // }
  
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
         fieldApiName: GROCERY_CAT })
    catValues;
    handleChangeCategory(e){
        this._groceryCat = e.target.value;
    }

    createGroceryRecord(){
        
        this._groceryName = this.template.querySelector('lightning-input').value; 
       
          const fields={};
        fields[GROCERY_NAME.fieldApiName] = this._groceryName;
        fields[GROCERY_CAT.fieldApiName] = this._groceryCat;
       
        const recordInput = {
            apiName : GROCERY_OBJ.objectApiName,
            fields : fields
        };
       
        createRecord(recordInput)
        .then(result => {
            this._accId = result.id;
            this.fields = {};
             //on success
             this.dispatchEvent( new ShowToastEvent({
                title : "Success",
                message : "Record "+ this._groceryName +" has been successfully created ",
                variant : "success"
                 }));

                //  this.grocery_method = true;
                // this.dispatchEvent(new CustomEvent("sendrecorddetails",{
                // detail : {
                //     allitemname : this.grocery_method 
                               
                // }
                // }));
            //    refreshApex(this.wiredGroceryList);
            location.reload();
          
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