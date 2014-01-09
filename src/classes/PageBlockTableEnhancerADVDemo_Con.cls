public class PageBlockTableEnhancerADVDemo_Con {
    public List<Contact> getContacts(){
        return [SELECT Id,FirstName,LastName,Account.Name,Email,BirthDate,LastModifiedDate FROM Contact ORDER BY FirstName];
    }
}