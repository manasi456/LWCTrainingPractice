public with sharing class GroceryList {

    @AuraEnabled(cacheable=false)
    public static List<Grocery__c> showSummaryList() {
        return [Select ID,Name,Grocery_Category__c from Grocery__c WITH SECURITY_ENFORCED];
    }
}
