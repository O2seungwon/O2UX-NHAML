/*amd /cm/main/menu_component.xml 3610 06f8105f43f677c1d29a724fab498b43bf1f6a73d4c4b44bbe03865cf2eade62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataListMenu',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'SORT_SQ',name:'SORT_SQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FAVORITE_YN',name:'FAVORITE_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MNNM',name:'MNNM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_C',name:'MENU_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPPER_ID',name:'UPPER_ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_AUTH',name:'MENU_AUTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'HELP_POPUP_YN',name:'HELP_POPUP_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DEP',name:'DEP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LVL_C',name:'MENU_LVL_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGID',name:'PGID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGM_PATHNM',name:'PGM_PATHNM',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMapSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'GRP',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'submission1',action:'http://localhost:8790/menu/all.ml',method:'post',mediatype:'application/json',ref:'data:json,dataMapSearch',target:'data:json,dataListMenu',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submission1_submit','ev:submitdone':'scwin.submission1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo',E:[{T:1,N:'w2:layout',A:{name:'main'}}]},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  $p.executeSubmission("submission1");
};
scwin.submission1_submitdone = function (e) {
  dataListMenu.setJSON(e.responseJSON);
};
scwin.leftMenu_onlabelclick = function (value, node, index) {
  $p.parent().scwin.onMenuClick(node);
};
scwin.excel_onclick = function (e) {
  //예제 파일의 스크립트 "scwin.btn_ex2_onclick"를 참고하세요.
  var jsnOptions = {
    fileName: "메뉴.xlsx"
  };

  //GridView의 엑셀다운로드 API를 호출합니다. 
  grdListCodeSub.advancedExcelDownload(jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grpButtons'},E:[{T:1,N:'w2:button',A:{style:'width:50px; height:20px; margin-left: 3px;',id:'excel',label:'엑셀','ev:onclick':'scwin.excel_onclick'}}]},{T:1,N:'w2:treeview',A:{id:'leftMenu',dataType:'listed',tooltipGroupClass:'false',style:'width:350px;height:940px;','ev:onlabelclick':'scwin.leftMenu_onlabelclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dataListMenu'},E:[{T:1,N:'w2:label',A:{ref:'MNNM'}},{T:1,N:'w2:value',A:{ref:'PGM_PATHNM'}},{T:1,N:'w2:depth',A:{ref:'MENU_LVL_C'}},{T:1,N:'w2:folder',A:{ref:'DEP'}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]}]})