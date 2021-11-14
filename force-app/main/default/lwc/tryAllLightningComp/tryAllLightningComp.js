import { LightningElement,track } from 'lwc';

export default class TryAllLightningComp extends LightningElement {
    activeSectionsMessage = '';
    activeSections = [];

    // handleSectionToggle(event) {
    //     const openSections = event.detail.openSections;

    //     if (openSections.length === 0) {
    //         this.activeSectionsMessage = 'All sections are closed';
    //     } else {
    //         this.activeSectionsMessage =
    //             'Open sections: ' + openSections.join(', ');
    //     }
    // }


    handleNavigateToAccount(event) {
        // prevent default navigation by href
        event.preventDefault();

        const caseDiv = this.template.querySelector('.container .case');
        this.hide(caseDiv);

        const accountDiv = this.template.querySelector('.container .account');
        this.show(accountDiv);
    }
    handleNavigateToCase(event) {
        // prevent default navigation by href
        event.preventDefault();

        const accountDiv = this.template.querySelector('.container .account');
        this.hide(accountDiv);

        const caseDiv = this.template.querySelector('.container .case');
        this.show(caseDiv);
    }


}