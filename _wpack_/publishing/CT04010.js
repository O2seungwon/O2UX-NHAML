/*amd /publishing/CT04010.xml 5275 f89daeede4d92875ab1f130dc1bf26a7eda699ae21a91cb64b65e8653efd0e37 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/commoon.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  /* active 클래스 추가 */
  $('.example-btn').click(function () {
    $('.table-border-none.bottom')[$('.table-border-none.bottom').hasClass('active') ? 'removeClass' : 'addClass']('active');
    $('.border-down-box')[$('.border-down-box').hasClass('active') ? 'removeClass' : 'addClass']('active');
  });
  const toggleBtn = document.querySelector(".toggle-btn");
  const layerWrap = document.querySelector(".layer-wrap");
  const dim = document.querySelector(".dim");
  const tableRow = document.querySelectorAll(".table-row");
  toggleBtn.addEventListener("click", () => {
    if (layerWrap.classList.contains("open")) {
      layerWrap.style.height = "0px";
      layerWrap.classList.remove("open");
      dim.classList.remove("open");
    } else {
      layerWrap.classList.add("open");
      const height = layerWrap.scrollHeight;
      layerWrap.style.height = height + "px";
      dim.classList.add("open");
    }
  });
  tableRow.forEach(row => {
    row.addEventListener("click", () => {
      if (layerWrap.classList.contains("open")) {
        layerWrap.style.height = "0px";
        layerWrap.classList.remove("open");
        dim.classList.remove("open");
      }
    });
  });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'position: relative;',id:'',class:'nhbank'},E:[{T:1,N:'xf:group',A:{id:'',style:'height: 100%;padding-bottom: 84px;',class:'content'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'page-wrapper'},E:[{T:1,N:'xf:group',A:{class:'dim-box',id:'',style:''}},{T:1,N:'xf:group',A:{class:'content-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'table-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btn-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'txt',id:'',style:''}},{T:1,N:'xf:trigger',A:{type:'button',id:'',style:'',class:'toggle-btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토글버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'table',id:'',style:''}},{T:1,N:'xf:group',A:{class:'layer-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btn-wrap',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{id:'',style:'width: 80px;height: 23px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토글버튼'}]}]}]},{T:1,N:'xf:group',A:{class:'content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'table-row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'행',style:'width: 150px;height: 23px;'}}]},{T:1,N:'xf:group',A:{class:'table-row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'행',style:'width: 150px;height: 23px;'}}]},{T:1,N:'xf:group',A:{class:'table-row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'행',style:'width: 150px;height: 23px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'other-content',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'footer',id:'',style:''}}]}]}]}]}]}]}]})