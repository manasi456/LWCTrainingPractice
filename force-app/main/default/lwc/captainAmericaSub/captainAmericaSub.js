import { LightningElement,wire } from 'lwc';

import {CurrentPageReference} from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';


export default class CaptainAmericaSub extends LightningElement {

    @wire(CurrentPageReference) 
    pageRef;
    _MsgFromAvengersTeam;// = "waiting to receive msg from Avengers Team" ;
    connectedCallback(){
        //registerListener = (eventName, callback, thisArg)
        registerListener('triggermsgtosubscribers', this.processMsg, this);
     }
    processMsg(payload){
        this._MsgFromAvengersTeam = payload;
    }

}