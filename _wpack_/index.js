/*amd /index.xml 6706 d82064e30ec6833439a16dc26da456ae4844dd2a87327257bdd9beea56ae2037 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.settingBox_handlerEvent'}},{T:1,N:'w2:common',A:{src:'/cm/pcc/main.xml',id:'main'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // pfm_header.getWindow().btn_toggle_menu.bind(
  //     'onclick', function (e) {
  //         pfm_header.getWindow().btn_toggle_menu.toggleClass("on");
  //         grp_wrap.toggleClass("show_menu");
  // });

  // main.initMainLoad(); 
  scwin.searchLoginInfo(); //로그인정보 가져오기
  scwin.serverProfile(); //서버정보 가져오기
};

/**
 * @method
 * @name searchLoginInfo
 * @description 로그인 정보 가져오기!
 * @param {string} e 이벤트 객체
 * @hidden N
 * @exception 
 */
scwin.searchLoginInfo = function () {
  const searchCodeGrpOption = {
    id: "sbm_loginInfo",
    action: "/session-user.ml",
    method: "get",
    submitDoneHandler: function (res) {
      // 권한정보 저장
      $c.data.setUserInfo($p, res.responseJSON);
      main.initMainLoad();
    },
    submitErrorHandler: function (res) {
      $c.win.alert($p, "로그인 정보가 없습니다.<br> 로그인 화면으로 이동합니다 ! ").then(() => {
        top.window.location.href = "/websquare/websquare.html?w2xPath=/cm/main/login.xml";
      });
    }
  };
  $c.sbm.executeDynamic($p, searchCodeGrpOption);
};

/**
 * @method
 * @name serverProfile
 * @description 서버 정보 가져오기!
 * @param {string} e 이벤트 객체
 * @hidden N
 * @exception 
 */
scwin.serverProfile = function () {
  const submission = {
    id: "sbm_serverProfile",
    action: "/information/server-profile.ml",
    method: "get",
    submitDoneHandler: function (res) {
      $c.data.setServerInfo($p, res.responseJSON.server);
    }
  };
  $c.sbm.executeDynamic($p, submission);
};

/**
 * @method
 * @name settingBox_handlerEvent
 * @description layout을 선택하는 창에서 이벤트를 제어한다.
 * @param {string} e 이벤트 객체
 * @hidden N
 * @exception 
 */
scwin.settingBox_handlerEvent = function (e) {
  if (e.keyCode == 27 || e.type == "click") {
    // pfm_header.getWindow().grp_setting.removeClass("on");
  }
};

/**
 * @event
 * @name wdc_main_onbeforecloseall
 * @description 모든 windowContainer 종료 시 발생하는 이벤트 정의
 */
scwin.wdc_main_onbeforecloseall = function () {
  main.pushStateMain();
  wdc_main.setUserData("isOnbeforeCloseAll", true);
  scwin.winCount = wdc_main.windows.length;
  scwin.winIdx = scwin.winCount;
  (async function closeAllWindows() {
    for (let i = 1; i < scwin.winCount; i++) {
      scwin.winIdx--;
      if (scwin.winIdx === 1) {
        wdc_main.setUserData("isOnbeforeCloseAll", false);
      }
      const windowId = wdc_main.windows[scwin.winIdx].windowId;
      const window = wdc_main.getWindow(windowId);
      const frame = window.$p.getFrame();

      //bbok
      // if (main.closeBeforePage(frame)) {
      if (!wdc_main.windows[scwin.winIdx].isFix && main.closeBeforePage(frame)) {
        //핀고정은 닫기x
        await wdc_main.closeWindow(windowId);
        pfm_side.getWindow().pfm_thumbnail.getWindow().gen_thumb.removeChild(scwin.winIdx); //generator 닫기
      }
    }
  })();
  return false;
};
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.container{z-index:0}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onkeydown':'scwin.settingBox_handlerEvent','ev:onclick':'scwin.settingBox_handlerEvent',class:'wrm'},E:[{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'grp_wrap',style:''},E:[{T:1,N:'w2:pageFrame',A:{style:'',id:'pfm_right',class:'',src:'/cm/main/right.xml'}},{T:1,N:'xf:group',A:{class:'container content-wrap',id:'grp_container',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:windowContainer',A:{class:'wdc_layout',controlIconPosition:'allright',frameMode:'pageFrame',hideTitleOnMaximize:'false',id:'wdc_main',spaInitCount:'0',stopMinimizeOnNameLayer:'true',stopToggleOnLast:'false',style:'',toolbarPosition:'top',tooltipDisplay:'false',tooltipGroupClass:'false',useCloseButton:'true',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'true',useStatusMsg:'false',windowAutoResize:'false',changeActiveWindow:'true',windowMaximizeAll:'false',windowTooltipDisplay:'true','ev:onbeforecloseall':'scwin.wdc_main_onbeforecloseall',fixArrangeFullScreen:'true',closeType:'noneFixedWindow',windowMaxNum:'15'}},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;bottom:40px;left:10px;min-width:calc( 98% - 20px );z-index: 9980;'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_success',class:'msg_box success'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'min-height:20px',id:'txt_success',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_info',class:'msg_box info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_info',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_warning',class:'msg_box warning'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_warning',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeWarnMsg',disabled:'',style:'',id:'btn_warnig',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_warning',placeholder:''}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_error',class:'msg_box error'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_error',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeErrorMsg',disabled:'',style:'',id:'btn_error',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_error',placeholder:''}}]}]}]}]},{T:1,N:'w2:pageFrame',A:{style:'',id:'pfm_side',src:'/cm/main/side.xml',class:'side'}},{T:1,N:'w2:pageFrame',A:{style:'display: none;',id:'pfm_footer'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})