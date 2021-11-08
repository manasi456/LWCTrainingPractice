import { LightningElement,wire } from 'lwc';

import {CurrentPageReference} from 'lightning/navigation';
import { registerListener,unregisterAllListeners } from 'c/pubsub';

export default class BlackWidowSub extends LightningElement {
    @wire(CurrentPageReference) 
    pageRef;
    _MsgFromAvengersTeam;// = "waiting to receive msg from Avengers" ;
    connectedCallback(){
        //registerListener = (eventName, callback, thisArg)
        registerListener('triggermsgtosubscribers', this.processMsg, this);
     }
    processMsg(payload){
        this._MsgFromAvengersTeam = payload;
    }


} 