import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class AvengerConsole extends LightningElement {

    _msgtosubscribers = "New mission..! Gather all at once.";
    @wire(CurrentPageReference) 
    pageRef;
    newmission(){
      
        //  fireEvent = (pageRef, eventName, payload) 
         fireEvent(this.pageRef,'triggermsgtosubscribers',this._msgtosubscribers);
    }
  
}