/*amd /cm/main/thumbnail.xml 7874 1b0c5837d2994d688efbb3d636023b65ad2cab6689edd9f8fb1874141e874db6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.wfTitleFavInit,scwin.setMenuNavi,scwin.generator_insertMenu,scwin.setFavStatus,scwin.showScreenInfo,scwin.reload'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // $(".side").css("overflow", "visible"); 
};

/**
 * @method
 * @name openMenuInit
 * @description contentHeader의 초기화 로직, 메뉴 정보를 셋팅한다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.openMenuInit = function () {
  gen_thumb.removeAll();
  const winObj = $p.main().wdc_main;
  for (let i = 0; i < winObj.windows.length; i++) {
    let idx = gen_thumb.insertChild();
    const src = winObj.windows[i].src; //화면경로
    const fileName = src.match(/([^/]+)(?=\.xml$)/); //화면id
    const winId = winObj.windows[i].id; //ex) mf_wdc_main_subWindow1
    const windowId = winObj.windows[i].windowId; //ex) MAIN, CT01010

    const grpObj = gen_thumb.getChild(idx, "grp_windowTool");
    grpObj.setUserData("winId", winId);
    grpObj.setUserData("windowId", windowId);

    //메뉴이미지 설정
    const menuImg = gen_thumb.getChild(idx, "img_menuImg");
    menuImg.setSrc(`/img/thumbnail/${fileName[1]}.png`);
    menuImg.setUserData("winId", winId);
    menuImg.setUserData("windowId", windowId);

    //메뉴명 설정
    const winMenu = gen_thumb.getChild(idx, "tbx_winMenu");
    winMenu.setValue(winObj.windows[i].title);

    //핀고정 설정
    const btnFix = gen_thumb.getChild(idx, "btn_fix");
    btnFix.setUserData("winId", winId);
    if (winObj.windows[i].isFix) btnFix.addClass("on");

    //창닫기 설정
    const btnClose = gen_thumb.getChild(idx, "btn_close");
    btnClose.setUserData("winId", winId);
    btnClose.setUserData("windowId", windowId);

    //현재창 설정
    const selectMenu = gen_thumb.getChild(idx, "tbx_selectMenu"); //현재선택된 메뉴
    if (winObj.getSelectedWindowId() == windowId) {
      selectMenu.addClass("selectMenu");
    }
    if (windowId == "MAIN") {
      // 메인은 핀고정x, 닫기x
      btnFix.hide(""); //핀고정숨김
      btnClose.hide(""); //닫기버튼 숨김
    }
  }
};

/**
 * @event
 * @name btn_fix_onclick
 * @description 핀고정처리
 */
scwin.btn_fix_onclick = function (e) {
  this.addClass("on");
  const winId = this.getUserData("winId");
  const winObj = $p.main().wdc_main;
  const fixArr = winObj.fixedWindowArr;
  let fixFlag = false;
  for (let i = 0; i < fixArr.length; i++) {
    if (winId == fixArr[i].id) {
      fixFlag = true;
      break;
    }
  }
  if (fixFlag) {
    //고정여부에 따라 해제/설정
    $p.main().wdc_main.unfixWindow(winId);
    this.removeClass("on");
  } else {
    $p.main().wdc_main.fixWindow(winId);
    this.addClass("on");
  }
};

/**
 * @event
 * @name img_menuImg_onclick
 * @description 이미지 클릭 시, 메뉴 이동
 */
scwin.img_menuImg_onclick = function (e) {
  const winObj = $p.main().wdc_main;
  const winId = this.getUserData("winId");
  const windowId = this.getUserData("windowId");
  winObj.selectNameLayer(winId); //windowContainer 변경

  //현재창 
  $p.$(".selectMenu").removeClass("selectMenu");
  gen_thumb.getChild(this.getGeneratedIndex(), "tbx_selectMenu").addClass("selectMenu");
};

/**
 * @event
 * @name btn_close_onclick
 * @description 창닫기 onclick
 */
scwin.btn_close_onclick = function (e) {
  const windowId = this.getUserData("windowId");

  //현재창 표기.
  //닫은 창이 현재창인 경우, 마지막 창이 현재창
  if (gen_thumb.getChild(this.getGeneratedIndex(), "tbx_selectMenu").hasClass("selectMenu")) {
    gen_thumb.getChild(this.getGeneratedIndex() - 1, "tbx_selectMenu").addClass("selectMenu");
  }
  debugger;
  // $p.main().wdc_main.closeWindow(windowId);
  gen_thumb.removeChild(this.getGeneratedIndex()); //generator 삭제
  // scwin.grp_dim_onclick();
};

/**
 * @event
 * @name btn_closeAll_onclick
 * @description 전체닫기 onclick
 */
scwin.btn_closeAll_onclick = function (e) {
  $p.main().wdc_main.doCloseAll();
};

/**
 * @event
 * @name img_menuImg_onerror
 * @description 이미지 로딩 실패시, 임시 이미지로 대체
 */
scwin.img_menuImg_onerror = function (e) {
  this.setSrc("/img/thumbnail/default.png");
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n			.fix {\n			background: url(/cm/images/product/ico_fixpin.svg) no-repeat center;\n			overflow: hidden;\n			display: inline-block;\n			width: 20px;\n			height: 20px;\n			border: 1px solid var(--ws-gray-300);\n			border-radius: 4px;\n			text-indent: -9999px;\n			}\n			.fix.on {margin-left:2px; background: url(/cm/images/product/ico_fixpin_on.svg) no-repeat center;}\n			.winGrop {position:relative;\n			margin-right:5px;}\n			.closeAll {margin-left: auto;}\n			.selectMenu {\n            display: flex!important;\n            justify-content: center;\n            align-items: center;\n            width: 47px;\n            height: 23px;\n			margin: 0 4px;\n			border-radius: 8px;\n			background-color: #1bab97;\n			color: #fff;\n			font-size: 12px;\n			font-weight: 700;\n			visibility: visible;\n			}\n			.thumClose {\n			position:absolute;\n			border-radius: 3px;\n			background: url(/cm/images/product/ico_wdc_close.svg) no-repeat center;\n			background-color:#fff;\n			text-indent:-9999px;\n			width:20px;\n			height:20px;\n			top:-2px;\n			right:-2px;\n			}\n            .thummain {\n            flex-wrap: wrap;\n            align-items: center;\n            position: fixed;\n            width: 100%;\n            gap: 12px;\n            left: 80px;\n            bottom: 0px;\n            }\n		'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'position: fixed;top:0px;bottom: 0px;left:80px;',id:''},E:[{T:1,N:'xf:group',A:{class:'thummain',id:'grp_main',style:'padding:21px 40px 24px 40px;z-index: 99999;background-color: #fff;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_thumb',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'grp_windowTool',style:'padding: 12px;background: rgba(255, 255, 255, 0.32);border-radius: 8px;box-shadow: 0 4px 12px 5px rgba(99, 103, 104, 0.10);backdrop-filter:blur(2px);',tagname:'li',class:'fl'},E:[{T:1,N:'xf:image',A:{src:'',style:'width:237px;height:120px;display: block;cursor:pointer;margin-bottom: 9px;',id:'img_menuImg','ev:onclick':'scwin.img_menuImg_onclick','ev:onerror':'scwin.img_menuImg_onerror'}},{T:1,N:'xf:trigger',A:{class:'fix fl',id:'btn_fix',style:'',toolTip:'핀고정 추가/해제',type:'button','ev:onclick':'scwin.btn_fix_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'핀'}]}]},{T:1,N:'w2:textbox',A:{class:'fl',id:'tbx_selectMenu',label:'현재창',ref:'',style:'display: none;'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_winMenu',label:'메뉴명',ref:'',style:'display: flex; align-items: center;height: 23px;font-size: 14px;color: #333;font-weight: 500;'}},{T:1,N:'xf:trigger',A:{class:'thumClose',id:'btn_close',style:'',toolTip:'창닫기',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:''},E:[{T:1,N:'xf:trigger',A:{class:'fl',disabled:'',escape:'false',id:'btn_closeAll',style:'width: 80px;height:24px;padding: 0',type:'button','ev:onclick':'scwin.btn_closeAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체닫기'}]}]}]}]}]}]}]}]})