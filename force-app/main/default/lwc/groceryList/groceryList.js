import { LightningElement,wire,track } from 'lwc';
import ListGrocery from '@salesforce/apex/SFTopicHelper.getGrocery';
import { refreshApex } from '@salesforce/apex';


export default class GroceryList extends LightningElement {
    

    @track GetAllGrocery;
    @track categories;
    @track items;

    @track allData=[];

    @wire(ListGrocery) GetAllGrocery({ error, data }) {
        if (data) 
        {
            
            this.items = data;
            this.error = undefined;
            this.categories = [...new Set(data.map(item => item.Grocery_Category__c))];
            this.categories.forEach(element => 
                    {
                        var item=
                        {
                            category:element,
                            items:data.filter(person => person.Grocery_Category__c==element)
                        };
                        this.allData.push(item);
                    }
            );
            
        }else if (error) 
        {
            this.error = error;
            this.items = undefined;
            this.categories= undefined;
            console.error(JSON.stringify(error));
        }
    }
}