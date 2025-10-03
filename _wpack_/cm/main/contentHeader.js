/*amd /cm/main/contentHeader.xml 8768 aa2c8605aef93f231d111fa87257209c111c06a164666fb34cce7a781f185e10 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/commoon.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.wfTitleFavInit,scwin.setMenuNavi,scwin.generator_insertMenu,scwin.setFavStatus,scwin.showScreenInfo,scwin.reload'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.ondataload = function () {
  scwin.wfTitleFavInit();
};

/**
 * @method
 * @name wfTitleFavInit
 * @description contentHeader의 초기화 로직, 메뉴 정보를 셋팅한다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.wfTitleFavInit = function () {
  const param = $c.data.getParameter($p, "menuInfo", $p.parent().$p);
  let menuCode = param.menuCode;

  //팝업인 경우 숨김처리
  if ($c.win.isPopup($p)) {
    grp_main.hide();
    return;
  }
  const menuInfoArr = [];
  try {
    let favStatus = "F";

    // 샘플 화면의 메뉴인 경우 즐겨찾기 버튼 비활성화
    if (param.menuType == "SP") {
      btn_fav.hide();
      //메뉴 경로가 없는 화면에서 열리는 경우
    } else if (param.menuType == "NONE") {
      menuCode = $c.data.getParameter($p, "parentMenuCd", $p.parent().$p);
    }
    if ($p.main().pfm_side.getWindow().scwin.hasFavCode(param.menuCode) > 0) {
      favStatus = "T";
    }
    scwin.setFavStatus(param.menuCode, favStatus);
    scwin.setMenuNavi(menuCode, param.menuNm, param.menuType);
  } catch (ex) {
    console.error(ex);
    grp_main.hide();
  }
};

/**
 * @method
 * @name setMenuNavi
 * @description 상단 메뉴 Navi를 구성한다.
 * @param {string} menuCode 메뉴코드
 * @param {string} menuName 메뉴이름
 * @param {string} menuType 메뉴타입
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setMenuNavi = function (menuCode, menuName, menuType) {
  let naviArr, naviArrLen, naviStr, menuNm;
  try {
    if (typeof menuType !== "undefined" && menuType === "SP") {
      menuNm = menuName;
      naviArr = ["샘플화면", menuName];
    } else {
      naviArr = scwin.getMenuNavigation(menuCode).split("%|%");
      naviArrLen = parseInt(naviArr.length / 2);
      naviStr = "";
      menuNm = naviArr[0];
      for (let i = naviArrLen; i >= 0; i--) {
        naviStr += naviArr[i * 2];
        if (i < naviArrLen && i > 0) {
          naviStr += " > ";
        }
      }
    }
  } catch (ex) {
    naviStr = "";
    menuNm = menuName;
  } finally {
    scwin.generator_insertMenu(naviArr, menuType);
    //txt_h1.setValue(menuNm);
  }
};

/**
 * @method
 * @name generator_insertMenu
 * @description 메뉴가 가진 depth별 정보를 나열한다.
 * @param {string} naviArr 메뉴 정보가 담긴 배열
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.generator_insertMenu = function (naviArr, menuType) {
  let genChildren;
  let arr = [];

  // 배열 거꾸로 풀기
  if (naviArr.length > 2) {
    for (let i = naviArr.length - 1; i >= 0; i--) {
      if (i % 2 === 0 && naviArr[i] != "") {
        arr.push(naviArr[i]);
      }
    }
    ;
  } else {
    arr = naviArr;
  }
  ;
  /* 
      // home
      const homeIdx = gen_navi.insertChild();
      const home = gen_navi.getChild(homeIdx, 'grp_li');
      home.addClass('home');
      home.getChildren()[0].bind('onclick', function (e) {
          $c.win.goHome();
      });
  
      // draw
      for (let num = 0; num < (arr.length); num++) {
          gen_navi.insertChild(num + 1);
          genChildren = gen_navi.getChild(num + 1, "spn_menu");
          genChildren.setValue(arr[num]);
      }; 
  */
  //메뉴code가 dlt_menu에 등록된 화면이 아닌 경우, 호출한 페이지의 dept + 호출한menuNm 으로 임시 세팅  
  if (menuType == "NONE") {
    arr.push($c.data.getParameter($p, "menuInfo", $p.parent().$p).menuNm);
  }

  // draw
  for (let num = 0; num < arr.length; num++) {
    gen_navi.insertChild(num);
    genChildren = gen_navi.getChild(num, "spn_menu");
    genChildren.setValue(arr[num]);
    if (num == arr.length - 1 && $c.data.hasAnyGroupCds($p, "00,09")) {
      genChildren.setValue(arr[num] + "[" + $c.data.getParameter($p, "menuInfo", $p.parent().$p).pgmID + "]");
    }
  }
  ;
};

/**
 * @method
 * @name setFavStatus
 * @description 즐겨찾기 상태를 설정한다
 * @param {string} menuCode 즐겨찾기 설정의 메뉴 코드
 * @param {string} favStatus 즐겨찾기 상태코드
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setFavStatus = function (menuCode, favStatus) {
  btn_fav.setUserData("t_menuCode", menuCode);
  btn_fav.setUserData("t_favStatus", favStatus);
  if (favStatus == "T") {
    btn_fav.addClass("on");
  } else {
    btn_fav.removeClass("on");
  }
};

/**
 * @event
 * @name btn_fav_onclick
 * @description 즐겨찾기 버튼 클릭 시 이벤트
 */
scwin.btn_fav_onclick = function () {
  $c.win.alert($p, "개발예정");
  return;
  const menuCode = btn_fav.getUserData("t_menuCode");
  let favStatus = btn_fav.getUserData("t_favStatus");
  $p.main().pfm_side.getWindow().scwin.updateFav(menuCode, favStatus);
  if (favStatus == "T") {
    favStatus = "F";
  } else {
    favStatus = "T";
  }
  scwin.setFavStatus(menuCode, favStatus);
};

/**
 * @method
 * @name showScreenInfo
 * @description 화면정보 버튼을 누른 경우 현재 페이지의 경로를 알려준다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.showScreenInfo = function () {
  const pageUrl = $p.parent().$p.getFrame().getSrc();
  $c.win.alert($p, "[" + txt_h1.getValue() + "] 페이지의 파일 경로는 다음과 같습니다.\n" + pageUrl);
};

/**
 * @method
 * @name reload
 * @description 화면을 갱신한다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.reload = function () {
  $p.parent().$p.reinitialize();
};

/**
 * @method
 * @name closeMenu
 * @description 화면을 닫는다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.closeMenu = function (e) {
  const menuCode = $c.data.getParameter($p, "menuInfo", $p.parent().$p).menuCode;
  $p.main().wdc_main.closeWindow(menuCode);
};

/**
 * @method
 * @name getMenuNavigation
 * @description 메뉴 Navigation 정보를 가져온다
 * @param {string} menuCode 메뉴 코드
 * @param {string} rsStr 문자열
 * @hidden N
 * @exception 
 */
scwin.getMenuNavigation = function (menuCode, rsStr) {
  let naviStr;
  if (rsStr) {
    naviStr = rsStr;
  } else {
    naviStr = "";
  }
  const menuJSON = $p.main().pfm_side.getWindow().dlt_menu.getMatchedJSON("MENU_C", menuCode, true)[0];
  naviStr += menuJSON.MNNM + "%|%" + menuCode + "%|%";
  if (menuJSON) {
    if (menuJSON.UPPER_ID != "000000000") {
      return this.getMenuNavigation(menuJSON.UPPER_ID, naviStr);
    }
  }
  return naviStr;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_main',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'header-top'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'nh-logo'},E:[{T:1,N:'w2:span',A:{label:'자금세탁방지 시스템',style:'',id:'',class:'nh-logo-txt'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right-list'},E:[{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_navi',class:'menu-item'},E:[{T:1,N:'xf:group',A:{tagname:'li',style:'',id:'grp_li'},E:[{T:1,N:'w2:span',A:{style:'',label:'',id:'spn_menu'}}]}]},{T:1,N:'xf:group',A:{style:'margin-left: 4px;',id:'',class:'rt'},E:[{T:1,N:'xf:trigger',A:{class:'btn-help','ev:onclick':'scwin.btn_fav_onclick',id:'',style:'',toolTip:'도움말',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도움말'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_fav_onclick',toolTip:'즐겨찾기 추가/해제',style:'',id:'btn_fav',type:'button',class:'btn_fav btn-bookmark'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'즐겨찾기'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.closeMenu',toolTip:'현재 화면 닫기',style:'',id:'btn_close',type:'button',title:'화면 닫기',class:'btn-close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.reload',style:'',id:'',type:'button',title:'화면 갱신',class:'btn_cm refresh icon',toolTip:'현재 화면을 새로고침 합니다.'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화면 갱신'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'hide',id:'',style:''}}]}]}]})