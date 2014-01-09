/*Quick test class for PageBlockTableEnhancerADVDemo_Con*/
@isTest
private class PageBlockTableEnhancerADVDemo_Con_Test{
    static testMethod void testPageBlockTableEnhancerADVDemo_Con(){
        PageBlockTableEnhancerADVDemo_Con con = new PageBlockTableEnhancerADVDemo_Con();
        System.assertNotEquals(null,con.getContacts());
    }
}