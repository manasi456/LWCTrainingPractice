import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
   @api messagefromfathertojohn="I'm John, Waiting ffor msg from father!!!";
   @api messagefromfathertolara="I'm LarA, Waiting ffor msg from father!!!";
   @api messagefromfathertoben="I'm Ben, Waiting ffor msg from father!!!";

_johnmsg;
_laramsg;

handleClick(){
    alert("onclick method is working");
    this._johnmsg = this.template.querySelector('lightning-input[data-name="john"').value;
    this._laramsg = this.template.querySelector('lightning-input[data-name="lara"').value;
    alert(this._johnmsg + " " + this._laramsg);
   
   
   
    const sendmsg = new CustomEvent("sendmsgtofather",{
        detail : {johnmsg : this._johnmsg,
                    laramsg : this._laramsg}
    });
    alert(sendmsg);
    this.dispatchEvent(sendmsg);
    alert("DAta dispatched");
   }
}