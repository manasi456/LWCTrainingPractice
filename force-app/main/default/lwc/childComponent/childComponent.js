import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

    title = "The child Component";
    @api nidhi  =" Hey father I'm Here to pick you..";
    @api khushal ="Hey father Give me call once u r done with work";
    @api madhuri="Hey father Give me call once u reach  ";
}