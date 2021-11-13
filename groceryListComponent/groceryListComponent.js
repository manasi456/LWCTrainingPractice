import { LightningElement, wire,api, track } from 'lwc';
import { updateRecord ,getRecordNotifyChange} from 'lightning/uiRecordApi';
import showSummaryList from '@salesforce/apex/GroceryList.showSummaryList';
//import {refreshApex} from '@salesforce/apex';
export default class GroceryListComponent extends LightningElement {
    grocerylist;
    @api recordId;
    @track cat;
    @track names;
    @track list=[];
    @track wireCategory;
 

    @wire(showSummaryList) wireCategory({error,data}){
      if(data){
        this.names =data;
        this.error = undefined;
        this.cat = [...new this.setAttribute(data.map(item => item.Grocery_Category__c))];
        this.cat.forEach(element => {
          var item = {
            category:element,
            names : data.filter(person => person.Grocery_Category__c==element)
          };
          this.list.push(item);
        })
      }
      else if(error){
        this.error = error;
        this.names = undefined;
        this.cat= undefined;
      }
    }
  



       
  //   async  handlegrosarysummary(event){
       
  //      const allgrocerylistname = event.detail.allitemname;
  //       showSummaryList()
  //      .then(result=> {
       
  //          this.grocerylist =result;
  //        //  updateRecord({fields: this.recordId})
  //          alert("List displayed.....");
  //         // location.reload();
  //         getRecordNotifyChange([{recordId: this.recordId}]);
          
  //      })
  //      .catch(error => {alert("Error at RefreshApex "+error);})
  //  }


}