public with sharing class getContractsClass {
   
        @AuraEnabled(cacheable=true)
        public static List<Grocery__c> getGrocery() {
    
            return [SELECT ID,Grocery_Item__c, 	Grocery_Category__c FROM Grocery__c 
            WITH SECURITY_ENFORCED ];
            
        

    }
}
