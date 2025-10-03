/*amd /cm/main/right.xml 6002 c22ec2df6f17713020e57b3f3adcb235ecde38488a780b83dee8bdaed5c96313 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  /* 마이페이지 탭 안 알림숫자 추가 */
  // var tabControl = document.getElementById("mf_mypage-tab");
  // if(tabControl){
  //     var tabALink = tabControl.querySelector("#mf_mypage-tab_tab_tabs2 .w2tabcontrol_tab_center a");
  //     if(tabALink){
  //         var textSpan = document.createElement("span");
  //         textSpan.textContent = "3";
  //         textSpan.className = "tab-a-span"
  //         tabALink.parentNode.insertBefore(textSpan, tabALink.nextSibling);
  //     }
  // }
  var tabALink = $("#" + tac_mypage.tabArr[1].tabID + " .w2tabcontrol_tab_center a");
  if (tabALink.length > 0) {
    var textSpan = document.createElement("span");
    textSpan.textContent = "3";
    textSpan.className = "tab-a-span";
    tabALink[0].parentNode.insertBefore(textSpan, tabALink[0].nextSibling);
  }
};

/**
 * @event
 * @name grp_boardBtn_onclick
 * @description 버튼 클릭 시, 마이보드 숨김/펼침
 * @hidden N
 * @exception 
 */
scwin.grp_boardBtn_onclick = function (e) {
  pfm_myboard.getWindow().scwin.grp_boardBtn_onclick();
  if (grp_boardBtn.hasClass("open-active")) {
    grp_boardBtn.removeClass("open-active");
  } else {
    grp_boardBtn.addClass("open-active");
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'xf:group',A:{id:'grp_boardBtn',class:'mypage','ev:onclick':'scwin.grp_boardBtn_onclick'},E:[{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'',class:'btn-myboard'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'마'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'이'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'보'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'드'}},{T:1,N:'w2:span',A:{dataType:'number',style:'',id:'',label:'5',class:'num'}}]},{T:1,N:'w2:pageFrame',A:{style:'',id:'pfm_myboard',class:'',src:'/cm/main/myboard.xml'}}]},{T:1,N:'xf:group',A:{class:'',id:'grp_myboardMain2',style:'display:none;'},E:[{T:1,N:'xf:group',A:{class:'notice-wrap',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'new-icon',id:'',label:'New',style:''}},{T:1,N:'w2:textbox',A:{class:'title',id:'',label:'긴급공지가 등록되었습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'role-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'role-icon',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'display: flex;flex-wrap: wrap;color: #065690;font-size: 28px;font-weight: 700'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'나는 매일 발전하는',style:'width: 100%;height: 40px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'AML 요원!',style:'width: 100%;height: 40px;'}}]},{T:1,N:'w2:span',A:{id:'',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'list-item',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'list-item-half',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'list-title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'교육 이수',style:''}}]},{T:1,N:'xf:group',A:{class:'list-num',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'1',style:'font-size: 20px;'}},{T:1,N:'w2:span',A:{id:'',label:'/2',style:'font-size: 12px;'}}]}]},{T:1,N:'xf:group',A:{class:'list-item-half right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'list-title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'취득자격증',style:''}}]},{T:1,N:'xf:group',A:{class:'list-num',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'2',style:'font-size: 20px;'}},{T:1,N:'w2:span',A:{id:'',label:'개',style:'font-size: 12px;'}}]}]}]}]},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'mypage-tab',id:'tac_mypage',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'나의 업무',style:''}},{T:1,N:'w2:tabs',A:{class:'noti-num',disabled:'false',id:'tabs2',label:'알림',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'자료실',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'list-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'list-item active',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'Alert 모니터링',style:''}},{T:1,N:'w2:span',A:{id:'',label:'06',style:''}}]},{T:1,N:'xf:group',A:{class:'list-item',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'Case 모니터링',style:''}},{T:1,N:'w2:span',A:{id:'',label:'25',style:''}}]},{T:1,N:'xf:group',A:{class:'list-item',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'본부집중 기보고/제외 재점검',style:''}},{T:1,N:'w2:span',A:{id:'',label:'06',style:''}}]},{T:1,N:'xf:group',A:{class:'list-item',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'보고 점검 현황',style:''}},{T:1,N:'w2:span',A:{id:'',label:'06',style:''}}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'tab2',style:''}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:''},E:[{T:1,N:'w2:span',A:{id:'',label:'tab3',style:''}}]}]},{T:1,N:'xf:group',A:{class:'mypage-foot',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'quick',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'QUICK'}]}]},{T:1,N:'w2:span',A:{id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'txt-item',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운영평가'}]}]},{T:1,N:'w2:span',A:{id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'txt-item',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'담당자 관리'}]}]}]}]}]}]}]}]})