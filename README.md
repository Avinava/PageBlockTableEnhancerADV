PageBlockTableEnhancer
===



>Built upon the backbone of PageBlockTableEnhancer but uses a custom theme and lot more 
>This component converts your regular PageblockTable into a Advanced Datatable and that too 
>without any changes in the existing code.


Features : 
---
* Pagination Support.
* Support for specifying available page sizes.
* Support for choosing default page size on page load.
* Dynamic Search/filter
* No Coding and Changes Required in existing code.

 
List of Parameters
----
* targetPbTableIds : comma-separated Ids of the target Pageblock tables
* paginate : Assign true if you want to use the pagination feature,default value is true.
* pageSizeOptions : A comma seperated list of integer values that will displayed as dropdown for page size
* defaultPageSize : Default page size that needs to be selected (at page load).

Ajax/Rerender support
--
This version brings in support for rendering, the earlier version wasn't able to handle this. So incase you are rerendering your table or the parent components, you can call the "initPageBlockTableEnhancerADV()" method from "oncomplete" even of your commandButtons/actionFunctions/actionSupport/commandLink .

```
<apex:commandButton value="Rerender" reRender="mid" oncomplete="initPageBlockTableEnhancerADV()"/>
```
Basic Syntax
The basic syntax remains same, just few added params.
 
```
<c:PageBlockTableEnhancerADV targetPbTableIds="mid,mid2" paginate="true" defaultPageSize="5" pageSizeOptions="5,10,20,30,40,50,100"/>    
   <apex:pageBlock >   
     <apex:pageBlockTable value="{!contacts}" var="con" id="mid">   
      <apex:column value="{!con.Name}"/>   
     </apex:pageBlockTable>    
     <apex:pageBlockTable value="{!contacts}" var="con" id="mid2">   
      <apex:column value="{!con.Name}"/>   
     </apex:pageBlockTable>     
   </apex:pageBlock>  
   ```
[8-Dec-2013] v 1.21 : Minor update and bug fixes

[11-Dec-2013]
Please Note : There is bug associated with sorting of numbers/currency and dates. I am working on the fix and should be updated soon

[12-Dec-2013 ] : New version 1.22 with autodetection for different type of fields including numbers,currency,date and datetime


Demo / Installation / Documentation
--------------

* .http://blogforce9dev-developer-edition.ap1.force.com/ProjectDetail?id=a0290000009M3zR
