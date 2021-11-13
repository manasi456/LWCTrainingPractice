import { LightningElement, wire,api, track } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import showSummaryList from '@salesforce/apex/GroceryList.showSummaryList';
import {refreshApex} from '@salesforce/apex';
export default class GroceryListComponent extends LightningElement {
    grocerylist;
    @api recordId;
      
    async  handlegrosarysummary(event){
       
       const allgrocerylistname = event.detail.allitemname;
        showSummaryList()
       .then(result=> {
       
           this.grocerylist =result;
            updateRecord({fields: this.recordId})
           alert("List displayed.....");
         
        
          
       })
       .catch(error => {alert("Error at RefreshApex "+error);})
   }


}