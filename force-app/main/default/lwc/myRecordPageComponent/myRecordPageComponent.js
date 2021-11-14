import {  LightningElement,api } from 'lwc';

export default class MyRecordPageComponent extends LightningElement {
    @api recordId;
    @api objectApiName;

    }