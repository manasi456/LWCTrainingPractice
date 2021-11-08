import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    sendmsgtojohn="Hey John,Father is here";
    sendmsgtolara="Hey Lara,Father is here";
    sendmsgtoben="Hey Ben,Father is here";

    johnsendmsg= "Waiting to see msg from john";
    larasendmsg= "Waiting to see msg from lara";
    // johnsendmsg;
    // larasendmsg;
    handlereceivedmsg(event){
        alert("event handler is working");
         this.johnsendmsg = event.detail.johnmsg;
         this.larasendmsg = event.detail.laramsg;

         alert(this.johnsendmsg + " , " +  this.larasendmsg );

    }




}