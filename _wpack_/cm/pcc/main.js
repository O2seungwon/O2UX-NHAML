/*amd /cm/pcc/main.xml 4123 33ee71f7cdbfca2cf9f789c7ddb0dd2b2741ae44f5cf3d37f66e3c5d40bc848f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.initMainLoad,scwin.closeBeforePage,scwin.pushStateMain,scwin.setHeaderMenu,scwin.getLayoutId,scwin.isMobileSize'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

/**
 * @method
 * @name initMainLoad
 * @description 화면 초기 로딩
 * @param
 * @hidden N
 * @exception 
 */
scwin.initMainLoad = function () {
  pfm_side.getWindow().scwin.getInitData();

  //권한 중 00 , 09 이 있으면 아래 다른사용자 변경 가능한 footer 보여주기
  if ($c.data.hasAnyGroupCds($p, "00,09")) {
    pfm_footer.setSrc("/cm/main/footer.xml");
    pfm_footer.show("");
  }

  // const deviceWidth = $c.num.parseFloat($("body").css("width"));
  // if (deviceWidth < 1280) {
  //     grp_wrap.removeClass("show_menu");
  //     pfm_header.getWindow().btn_toggle_menu.removeClass("on");
  // };

  $c.win.addEventOnBeforeUnload($p);
};

/**
 * @method
 * @name setHeaderMenu
 * @description header menu 생성
 * @param
 * @hidden N
 * @exception 
 */
scwin.setHeaderMenu = function () {
  pfm_header.getWindow().scwin.setGenerator(); // 메뉴 생성
  pfm_header.getWindow().scwin.setMenuCss(); // 메뉴 css 적용
};

/**
 * @method
 * @name getLayoutId
 * @description 메인 레이아웃 아이디 정보를 반환한다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.getLayoutId = function () {
  return "M";
};

/**
 * @method
 * @name isMobileSize
 * @description 화면 해상도가 모바일 사이즈인지 반환한다.
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.isMobileSize = function () {
  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  };
  if (size.width <= 1024) {
    return true;
  } else {
    return false;
  }
};

/**
 * @method
 * @name closeBeforePage
 * @description 화면이 닫히 전에 변경된 데이터가 있는지 검사한다.
 * @param {string} frameObj 닫으려는 화면의 pageFrame obj
 * @hidden N
 * @exception 
 * @example main.closeBeforePage(frameObj)
 */
scwin.closeBeforePage = function (frameObj) {
  if (checkBeforeCloseModified(frameObj)) {
    if (confirm($c.data.getMessage($p, "MSG_CM_00006"))) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
  function checkBeforeCloseModified(frameObj) {
    const changeCheckMainFrame = $c.data.getChangeCheckedMainFrame($p, frameObj.scope.$p);
    if (!$c.util.isEmpty($p, changeCheckMainFrame)) {
      const changeCheckDcList = $c.data.getChangeCheckedMainFrame($p, frameObj.scope.$p)._changeCheckDcList;
      if (!$c.util.isEmpty($p, changeCheckDcList) && $c.util.isArray($p, changeCheckDcList) && changeCheckDcList.length > 0) {
        for (let i = 0; i < changeCheckDcList.length; i++) {
          const dlObj = $c.util.getComponent($p, changeCheckDcList[i]);
          if (!$c.util.isEmpty($p, dlObj) && (dlObj.getObjectType() == "dataList" || dlObj.getObjectType() == "dataMap")) {
            if (dlObj.getModifiedIndex().length > 0) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  ;
};

/**
 * @method
 * @name pushStateMain
 * @description 메인 화면으로 History를 저장한다.
 * @param
 * @hidden N
 * @exception 
 * @example main.pushStateMain();
 */
scwin.pushStateMain = function () {
  const data = {
    menuInfo: {
      menuNm: "메인",
      menuCode: "MAIN"
    }
  };
  $c.win.pushState($p, data);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})