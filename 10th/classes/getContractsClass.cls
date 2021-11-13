public with sharing class getContractsClass {

    @AuraEnabled(cacheable=true)
    public static list<contract> getContractsMethod(String accountName) {
        accountName = accountName + '%';
        return [SELECT ID,Account.Name,Description,Status,StartDate,EndDate,ContractTerm FROM contract WHERE Account.NAme  like :accountName WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topics__c> getSFTrainingTopics() {

        return [SELECT ID,Topic_Name__c, Topic_Category__c FROM SF_Training_Topics__c WITH SECURITY_ENFORCED];
        
    }
    
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topics__c> getSFTrainingTopicsByCategory(string strCat) {

        strCat = strCat + '%';
        return [SELECT ID,Topic_Name__c, Topic_Category__c FROM SF_Training_Topics__c WHERE
                Topic_Category__c  like :strCat WITH SECURITY_ENFORCED];
        
    }

    @AuraEnabled(cacheable=true)
    public static List<Grocery__c> getGrocery() {

        return [SELECT ID,Grocery_Item__c, Grocery_Category__c FROM Grocery__c 
        WITH SECURITY_ENFORCED ];
        
    }

}
