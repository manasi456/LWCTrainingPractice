public with sharing class SfApexClass {
    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getAllTopics(){
        return [select ID,	Topic_Name__c,Topic_Category__c,Instructor__c from SF_Training_Topic__c WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=true)
    public static List<SF_Training_Topic__c> getAllTopicsByCat(String strcat) {
        return [select ID,	Topic_Name__c,Topic_Category__c,Instructor__c from SF_Training_Topic__c where Topic_Category__c like : strcat WITH SECURITY_ENFORCED];
    }



}