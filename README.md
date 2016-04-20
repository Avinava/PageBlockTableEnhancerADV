PageBlockTableEnhancerADV
===

<a href="https://githubsfdeploy.herokuapp.com?owner=avinava&repo=PageBlockTableEnhancerADV">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>


>Built upon the backbone of PageBlockTableEnhancer but uses a custom theme and lot more 
>This component converts your regular PageblockTable into a Advanced Datatable and that too 
>without any changes in the existing code.


Features : 
---
* Pagination Support.
* Support for specifying available page sizes.
* Support for choosing default page size on page load.
* Dynamic Search/filter
* Support for Export(CSV,EXCEL,PDF)
* No Coding and Changes Required in existing code.

 
List of Parameters
----
* targetPbTableIds : comma-separated Ids of the target Pageblock tables
* paginate : Assign true if you want to use the pagination feature,default value is true.
* pageSizeOptions : A comma seperated list of integer values that will displayed as dropdown for page size
* defaultPageSize : Default page size that needs to be selected (at page load).
* enableExport : Set true to enable export toolbar
* exportFileName : File name to used for the files exported from table

Ajax/Rerender support
--
This version explains how to properly rerender the enhanced pageblock table. The previous version implemented a method that caused an empty enhanced pageblock table to be added to the page every time the main enhanced pageblock table was rerendered. This method was not necessary, as rerendering the appropriate elements in your visualforce page will cause it to work seamlessly.

To rerender your enhanced pageblock table, rerender the \<apex:form\> tag that contains both the Visualforce component and the original pageblock table.

Example:
```
<apex:form id="findProductsForm">  
  <apex:pageBlock title="Find Products" id="findProductsBlock">
    <c:PageBlockTableEnhancerADV targetPbTableIds="pbeTable" paginate="true" defaultPageSize="25" pageSizeOptions="10,25,50,100,200"/> 
    <apex:pageBlockButtons location="bottom">
      <apex:commandButton action="{!setPriceBookEntries}" value="Search" id="searchBtn" reRender="findProductsForm"/>
    </apex:pageBlockButtons>
    ...
    <apex:pageBlockTable id="pbeTable" var="pbeRow" value="{!priceBookEntries}">
    ...
    </apex:pageBlockTable>
  </apex:pageBlock>
</apex:form>
```
Basic Syntax
The syntax remains exactly the same. The most recent change only deals with how to rerender the component.

[8-Dec-2013] v 1.21 : Minor update and bug fixes

[11-Dec-2013]
Please Note : There is bug associated with sorting of numbers/currency and dates. I am working on the fix and should be updated soon

[12-Dec-2013 ] : New version 1.22 with autodetection for different type of fields including numbers,currency,date and datetime


Demo / Installation / Documentation
--------------

* .http://blogforce9dev-developer-edition.ap1.force.com/ProjectDetail?id=a0290000009M3zR
