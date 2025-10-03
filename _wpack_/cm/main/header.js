/*amd /cm/main/header.xml 20209 888d656772403823e5bdd5f6ccdc03c1e041c3fcf4118caa2a18e4655c4791d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_setting'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'MAIN_LAYOUT_PAGE_CODE',name:'메인 레이아웃',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MODE_TYPE',name:'화면스타일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectMainSetting',action:'/main/selectBmMainSetting',method:'post',mediatype:'application/json',ref:'',target:'data:json,dma_setting',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectMainSetting_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateMainSetting',action:'/main/updateBmMainSetting',method:'post',mediatype:'application/json',ref:'data:json,dma_setting',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.setUpdateMainSetCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:publicInfo',A:{method:'scwin.setGenerator,scwin.setMenuCss,scwin.callbackSetting,scwin.execUpdateMainSettingConfirmCallback,scwin.toggleMenu,scwin.setUpdateMainSetCallback,scwin.sbm_selectMainSetting_submitdone'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// Chat, ViewType Flag
scwin.displayChk = [false, false, false];
scwin.onpageload = function () {
  // ViewType값 조회
  // $c.sbm.execute(sbm_selectMainSetting);
};

/**
 * @method
 * @name setGenerator
 * @description 좌측 메뉴를 생성한다.
 * @hidden N
 * @exception 
 */
scwin.setGenerator = function () {
  gen_firstGenerator.removeAll();
  let tmpDataArr = $p.parent().pfm_side.getWindow().dlt_menu.getAllJSON();
  let tmpParentIdx = 0,
    tmpIdx = 0,
    tmpIdx2 = 0,
    thirdIndex = 0;

  //첫번째 메뉴 세팅
  for (let i = 0; i < tmpDataArr.length; i++) {
    let headerData_obj = tmpDataArr[i];
    let menuDepth = headerData_obj.MENU_LEVEL;
    let secondGene = gen_firstGenerator.getChild(tmpParentIdx, "gen_SecondGenerator");
    if (menuDepth == "1") {
      tmpParentIdx = gen_firstGenerator.insertChild();
      let firstMenuLabel = gen_firstGenerator.getChild(tmpParentIdx, "btn_menu1_Label");
      firstMenuLabel.setValue(headerData_obj.MENU_NM);
      firstMenuLabel.setUserData("ins_webPath", headerData_obj.SRC_PATH);
      firstMenuLabel.setUserData("ins_key", headerData_obj.PARENT_MENU_CD);
      firstMenuLabel.setUserData("ins_label", headerData_obj.MENU_NM);
      firstMenuLabel.setUserData("ins_code", headerData_obj.MENU_CD);
    } else if (menuDepth == "2") {
      tmpIdx = secondGene.insertChild();
      let secondMenuLabel = secondGene.getChild(tmpIdx, "btn_menu2_Label");
      secondMenuLabel.setValue(headerData_obj.MENU_NM);
      thirdIndex = tmpIdx;
    } else if (menuDepth == "3") {
      let thirdGene = secondGene.getChild(thirdIndex, 'gen_thirdGenerator');
      tmpIdx2 = thirdGene.insertChild();
      const thirdMenuLabel = thirdGene.getChild(tmpIdx2, "btn_menu3_Label");
      thirdMenuLabel.setValue(headerData_obj.MENU_NM);
      thirdMenuLabel.setUserData("ins_webPath", headerData_obj.SRC_PATH);
      thirdMenuLabel.setUserData("ins_key", headerData_obj.PARENT_MENU_CD);
      thirdMenuLabel.setUserData("ins_label", headerData_obj.MENU_NM);
      thirdMenuLabel.setUserData("ins_code", headerData_obj.MENU_CD);
    }
  }
  let firstMenuCount = gen_firstGenerator.getChildrenCount();
  for (let i = 0; i < firstMenuCount; i++) {
    let secondGene = gen_firstGenerator.getChild(i, "gen_SecondGenerator");
    let secondMenuCount = gen_firstGenerator.getChildren()[i].getChildren()[1].getChildrenCount();
    if (secondGene.getChildrenCount() === 0) {
      secondGene.remove();
    }
    for (let j = 0; j < secondMenuCount; j++) {
      let thirdGene = secondGene.getChild(j, 'gen_thirdGenerator');
      if (thirdGene.getChildrenCount() === 0) {
        thirdGene.remove();
      }
    }
  }
};

/**
 * @method
 * @name setMenuCss
 * @description 생성된 메뉴의 css 적용한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.setMenuCss = function () {
  // GNB MENU
  $(function () {
    $p.$(".gnb_menu a").click(function () {
      if (!$(this).parent().parent().hasClass("on")) {
        $(this).parent().parent().addClass("on").siblings().removeClass("on");
      }
    });
    $p.$(".dep2 li a").click(function () {
      const pTop = $(this).parent().position().top;
      $(this).siblings().css("top", pTop + "px");
      $(this).parent().parent().children().removeClass("on");
      $(this).parent().addClass("on");
      $(this).children().addClass("on");
    });
    $p.$(".dep2").mouseleave(function () {
      $(this).parent().removeClass("on");
      $(this).children().removeClass("on");
    });
    $p.$(".items").mouseleave(function () {
      $(this).removeClass("on");
    });
  });
};

/**
 * @event
 * @name btn_menu1_Label_onclick
 * @description header에 속한 메뉴 클릭 시 발생하는 이벤트 1depth
 */
scwin.btn_menu1_Label_onclick = function () {
  const urlPath = this.getUserData("ins_webPath");
  if (urlPath != "") {
    const label = this.getUserData("ins_label");
    const pageCode = this.getUserData("ins_code");
    $p.main().pfm_side.getWindow().scwin.setMenuRelation(label, urlPath, pageCode);
    const menuObj = $p.main().pfm_side.getWindow().dlt_menu.getMatchedJSON('MENU_CD', pageCode);
    $p.main().pfm_side.getWindow().scwin.toggle_3depthMenu(menuObj);
  }
};

/**
 * @event
 * @name btn_menu2_Label_onclick
 * @description header에 속한 메뉴 클릭 시 발생하는 이벤트, 2depth
 */
scwin.btn_menu2_Label_onclick = function () {
  const urlPath = this.getUserData("ins_webPath");
  if (urlPath && urlPath != "") {
    const label = this.getUserData("ins_label");
    const pageCode = this.getUserData("ins_code");
    $p.main().pfm_side.getWindow().scwin.setMenuRelation(label, urlPath, pageCode);
    $p.$(".dep2").removeClass('on');
    $p.$(".gnb_menu").removeClass('show');
    $p.$(".gnb_menu li").removeClass('on');
  }
};

/**
 * @event
 * @name btn_menu3_Label_onclick
 * @description header에 속한 메뉴 클릭 시 발생하는 이벤트, 3depth
 */
scwin.btn_menu3_Label_onclick = async function () {
  const urlPath = this.getUserData("ins_webPath");
  if (urlPath && urlPath != "") {
    const label = this.getUserData("ins_label");
    const pageCode = this.getUserData("ins_code");
    if (pageCode === "001002003" && $c.util.getUserAgent($p) === "msie") {
      await $c.win.alert($p, "IE에서는 FullCalendar를 지원하지 않습니다. FullCalendar를 사용하기 위해서는 현재 버전보다 하위 버전을 사용해야 합니다.");
      return;
    }

    // menuObj 정보
    const menuObj = $p.main().pfm_side.getWindow().dlt_menu.getMatchedJSON('MENU_CD', pageCode);
    const side = $p.main().pfm_side.getWindow();
    side.scwin.setMenuRelation(label, urlPath, pageCode);
    side.scwin.collapseAll();
    side.scwin.second_genAll();
    side.scwin.third_genAll();
    side.scwin.toggle_3depthMenu(menuObj);
    $p.$(".dep2 li").removeClass('on');
    $p.$(".gnb_menu li").removeClass('on');
  }
};

/**
 * @event
 * @name btn_setting_onclick
 * @description 환경설정 관리창을 오픈한다.
 */
scwin.btn_setting_onclick = function () {
  if (!scwin.displayChk[1]) {
    grp_setting.toggleClass("on");
    $p.main().pfm_wtalk.getWindow().grp_wrap.removeClass("on");
    grp_mymenu.removeClass("on");
    scwin.displayChk[1] = true;
    scwin.displayChk[0] = false;
    scwin.displayChk[2] = false;
  } else {
    grp_setting.toggleClass("on");
    scwin.displayChk[1] = false;
  }
};

/**
 * @method
 * @name callbackSetting
 * @description layout 모드를 선택 후 callback 함수
 * @param {string} res 화면 처리 결과
 * @hidden N
 * @exception 
 */
scwin.callbackSetting = async function (res) {
  if (await $c.win.confirm($p, "정상 처리되었습니다. 화면을 갱신하시겠습니까?")) {
    scwin.execUpdateMainSettingConfirmCallback();
  }
  ;
};

/**
 * @method
 * @name execUpdateMainSettingConfirmCallback
 * @description Layout Setting의 confirm 이후 callback 함수
 * @param {string} res 
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.execUpdateMainSettingConfirmCallback = function (res) {
  $c.win.removeEventOnBeforeUnload($p);
  $c.win.goHome($p);
};

/**
 * @method
 * @name toggleMenu
 * @description 메뉴창을 숨긴다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.toggleMenu = function () {
  $p.$(".dim").toggleClass("hide");
};

/**
 * @event
 * @name btn_logout_onclick
 * @description 로그아웃 버튼 클릭 시 발생하는 이벤트 정의
 */
scwin.btn_logout_onclick = function (e) {
  $c.win.logout($p);
};

/**
 * @event
 * @name btn_changePassword_onclick
 * @description 로그인된 사용자의 비밀번호를 변경한다.
 */
scwin.btn_changePassword_onclick = async function (e) {
  const data = {
    "empCd": $p.parent().pfm_side.getWindow().dma_defInfo.get("EMP_CD")
  };
  const options = {
    "id": "settingPassword",
    "width": "500px",
    "height": "280px",
    "popupName": "비밀번호변경",
    frameModal: "top",
    "modal": true
  };
  await $c.win.openPopup($p, "/cm/xml/settingPassword.xml", options, data);
};

/**
 * @event
 * @name btn_logo_onclick
 * @description Wheader logo 버튼 클릭 시 발생하는 이벤트
 */
scwin.btn_logo_onclick = function () {
  $c.win.goHome($p);
};

/**
 * @event
 * @name aiChat_onclick
 * @description W-talk 메시지를 보내는 버튼 클릭 시 발생하는 이벤트
 */
scwin.aiChat_onclick = function (e) {
  const week = $c.date.getDay($p, $c.date.getServerDateTime($p, "yyyyMMdd")).slice(0, 1);
  const month = $c.date.getServerDateTime($p, "MM");
  const day = $c.date.getServerDateTime($p, "dd");
  $p.main().pfm_wtalk.getWindow().chat_date.setValue(month + "." + day + " <span>(" + week + ")</span>");
  if (!scwin.displayChk[2]) {
    $p.main().pfm_wtalk.getWindow().grp_wrap.addClass("on");
    grp_setting.removeClass("on");
    grp_mymenu.removeClass("on");
    scwin.displayChk[2] = true;
    scwin.displayChk[0] = false;
    scwin.displayChk[1] = false;
  } else {
    $p.main().pfm_wtalk.getWindow().grp_wrap.removeClass("on");
    scwin.displayChk[2] = false;
  }
};

/**
 * @event
 * @name mainSetting_onclick
 * @description Layout 설정 항목을 클릭 시 발생하는 이벤트
 */
scwin.mainSetting_onclick = function () {
  const viewType = this.getUserData("userData1");
  dma_setting.set("MAIN_LAYOUT_PAGE_CODE", viewType);

  // ViewType 설정 값 변환 Submission
  $c.sbm.execute($p, sbm_updateMainSetting);
};

/**
 * @method
 * @name setUpdateMainSetCallback
 * @description Layout의 설정을 한 직후 화면 갱신 여부 동작을 위한 함수
 * @param {string} e submission 통신 결과 객체
 * @hidden N
 * @exception 
 */
scwin.setUpdateMainSetCallback = async function (e) {
  if ($c.sbm.getResultCode($p, e) == $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
    if (await $c.win.confirm($p, "정상 처리되었습니다. 화면을 갱신하시겠습니까?")) {
      scwin.execUpdateMainSettingConfirmCallback();
    }
    ;
  }
};

/**
 * @method
 * @name execUpdateMainSettingConfirmCallback
 * @description layout 설정 직후 화면 갱신 callback함수
 * @hidden N
 * @exception 
 */
scwin.execUpdateMainSettingConfirmCallback = function () {
  $c.win.removeEventOnBeforeUnload($p);
  $c.win.goHome($p);
};

/**
 * @event
 * @name styleSetting_onclick
 * @description light, Dark 모드를 설정 클릭 시 발생하는 이벤트 정의
 */
scwin.styleSetting_onclick = function () {
  const styleType = this.getUserData("userData2");
  dma_setting.set("MODE_TYPE", styleType);

  // styleType 설정 값 변환 Submission
  $c.sbm.execute($p, sbm_updateMainSetting);
};

/**
 * @method
 * @name sbm_selectMainSetting_submitdone
 * @description Layout Setting을 위한 통신 직후 동작하는 함수
 * @param {string} e submission 결과를 가진 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_selectMainSetting_submitdone = function (e) {
  const styleType = dma_setting.get("MODE_TYPE");
  const viewType = dma_setting.get("MAIN_LAYOUT_PAGE_CODE");
  // ViewType local Storage Save
  WebSquare.localStorage.setItem("MODE_TYPE", styleType);
  if (styleType == "L") {
    grp_light.addClass("on");
    grp_dark.removeClass("on");
    $("html").removeClass("dark");
  } else if (styleType == "D") {
    grp_dark.addClass("on");
    grp_light.removeClass("on");
    $("html").addClass("dark");
  }
  if (viewType === "T") {
    grp_tap.addClass("on");
    grp_multi.removeClass("on");
    grp_single.removeClass("on");
  } else if (viewType === "W") {
    grp_multi.addClass("on");
    grp_tap.removeClass("on");
    grp_single.removeClass("on");
  } else if (viewType === "S") {
    grp_single.addClass("on");
    grp_tap.removeClass("on");
    grp_multi.removeClass("on");
  } else {
    return;
  }
};

/**
 * @event
 * @name grp_mymenu_onclick
 * @description 상단 회원메뉴 클릭 시 발생하는 이벤트 정의
 */
scwin.grp_mymenu_onclick = function (e) {
  if (!scwin.displayChk[0]) {
    grp_mymenu.toggleClass("on");
    $p.main().pfm_wtalk.getWindow().grp_wrap.removeClass('on');
    grp_setting.removeClass("on");
    scwin.displayChk[0] = true;
    scwin.displayChk[1] = false;
    scwin.displayChk[2] = false;
  } else {
    grp_mymenu.toggleClass("on");
    scwin.displayChk[0] = false;
  }
};

/**
 * @event
 * @name btnMobSetting_onclick
 * @description 모바일 화면에서의 setting 버튼 클릭 이벤트
 */
scwin.btnMobSetting_onclick = function () {
  $p.main().grp_wrap.addClass('show_set');
};

/**
 * @event
 * @name btnMobClose_onclick
 * @description 모바일 화면에서의 setting Close 버튼 클릭 이벤트.
 */
scwin.btnMobClose_onclick = function (e) {
  $p.main().grp_wrap.removeClass('show_set');
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:'header'},E:[{T:1,N:'xf:group',A:{class:'header_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'header_lt',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'logobox',id:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_toggle_menu',id:'btn_toggle_menu',name:'',outerDiv:'false',style:'','ev:onclick':'scwin.btn_toggle_menu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'slide'}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'h1'},E:[{T:1,N:'w2:anchor',A:{class:'logo',id:'btn_logo',outerDiv:'false','ev:onclick':'scwin.btn_logo_onclick',title:'inswave systems'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_icon setting','ev:onclick':'scwin.btnMobSetting_onclick',id:'btnMobSetting',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정'}]}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_firstGenerator',class:'gnb_menu',tagname:'ul'},E:[{T:1,N:'xf:group',A:{style:'',id:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.btn_menu1_Label_onclick',style:'',id:'btn_menu1_Label'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1depth 메뉴'}]}]}]},{T:1,N:'w2:generator',A:{class:'dep2',id:'gen_SecondGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu2_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu2_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2depth 메뉴'}]}]},{T:1,N:'w2:generator',A:{class:'dep3',id:'gen_thirdGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu3_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu3_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3depth 메뉴'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'header_rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_mob_close','ev:onclick':'scwin.btnMobClose_onclick',id:'btnMobClose',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:group',A:{class:'btn_mymenu',id:'grp_mymenu','ev:onclick':'scwin.grp_mymenu_onclick'},E:[{T:1,N:'xf:group',A:{class:'profile','ev:onclick':'scwin.btnMyMenu_onclick',id:'',style:'',tagname:'a'},E:[{T:1,N:'xf:group',A:{class:'profile_img',id:'',style:''},E:[{T:1,N:'xf:image',A:{id:'',src:'/cm/images/product/img_profile.svg',style:'',alt:'프로필 이미지'}}]},{T:1,N:'xf:group',A:{class:'profile_txt',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'name',id:'txt_empNm',label:'홍길동',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'number',id:'txt_empCd',label:'100001',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'mymenu_popup',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'pwd',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_changePassword_onclick',id:'btn_changePassword',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호 변경'}]}]}]},{T:1,N:'xf:group',A:{class:'logout',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'','ev:onclick':'scwin.btn_logout_onclick',id:'btn_logout',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Logout'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'alarmbox',id:'',style:'display:none;'},E:[{T:1,N:'w2:anchor',A:{class:'btn_icon alarm','ev:onclick':'scwin.btnAlarm_onclick',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'알림'}]}]},{T:1,N:'w2:textbox',A:{class:'alarm_count',id:'',label:'12',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'settingbox',id:'grp_setting',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_icon setting','ev:onclick':'scwin.btn_setting_onclick',id:'btn_Setting',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정'}]}]},{T:1,N:'xf:group',A:{class:'setting_popup',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grp_setting',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'메인 뷰 타입',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_tap',style:'',tagname:'li'},E:[{T:1,N:'xf:trigger',A:{id:'btn_tap',style:'',type:'button','ev:onclick':'scwin.mainSetting_onclick',userData1:'T'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Tab'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_multi',style:'',tagname:'li',userData1:'W'},E:[{T:1,N:'xf:trigger',A:{id:'btn_multi',style:'',type:'button','ev:onclick':'scwin.mainSetting_onclick',userData1:'W'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Multi'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_single',style:'',tagname:'li',userData1:'S'},E:[{T:1,N:'xf:trigger',A:{id:'btn_single',style:'',type:'button','ev:onclick':'scwin.mainSetting_onclick',userData1:'S'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Single'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grp_setting',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'화면스타일',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'on',id:'grp_light',style:'',tagname:'li',userData2:'L'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.styleSetting_onclick',id:'btn_theme_light',style:'',type:'button',userData2:'L'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Light'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_dark',style:'',tagname:'li',userData2:'D'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.styleSetting_onclick',id:'btn_theme_dark',style:'',type:'button',userData2:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Dark'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'aichatbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_aichat','ev:onclick':'scwin.aiChat_onclick',id:'aiChat',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'aichat'}]}]}]}]}]}]}]}]})