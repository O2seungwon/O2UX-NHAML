/*amd /cm/main/login.xml 12652 4e339f9b9b05c107e60ae053ea7254b99b980b93f054f77f524f4c5e6e62d5f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'meta',A:{name:'viewport',content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'}},{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_loginCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'login_cd',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'login_pwd',name:'비밀번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_loginCheck',ref:'data:json,dma_loginCheck',target:'',action:'/main/login',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Login_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.after_login_fail,scwin.sbm_Login_submitdone'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginChk = 'login.xml';
scwin.onpageload = function () {
  $p.$("html").addClass('wrm');
  const initUrl = location.href;
  if (initUrl.indexOf("#") > -1) {
    $c.win.goHome($p);
  }
  ibx_empCd.focus();

  // Remember me check
  const remember = WebSquare.cookie.getCookie('rememberId');
  if (typeof remember == 'string') {
    ibx_empCd.setValue(remember);
    cbx_remember.setValue('check');
  } else {
    return;
  }
};

/**
 * @event
 * @name ibx_empCd_onkeyup
 * @description 아이디 입력 후 Keyup 이벤트 발생 시 실행
 */
scwin.ibx_empCd_onkeyup = function (e) {
  if (e.keyCode == 13) {
    sct_password.focus();
  }
};

/**
 * @event
 * @name sct_password_onkeyup
 * @description 패스워드 입력 후 Keyup 이벤트 발생 시 실행 - 로그인 트랜잭션 발생
 */
scwin.sct_password_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.btn_login_onclick();
  }
};

/**
 * @event
 * @name btn_login_onclick
 * @description 로그인 버튼 클릭시 실행 - 로그인 처리 트랜잭션 발생
 */
scwin.btn_login_onclick = function () {
  if ($c.data.validateGroup($p, grp_loginInfo)) {
    const searchCodeGrpOption = {
      id: "sbm_loginCheck",
      action: "/login.ml",
      ref: "dma_loginCheck",
      submitDoneHandler: scwin.sbm_Login_submitdone
    };
    $c.sbm.executeSubmit($p, searchCodeGrpOption);
    // $c.sbm.execute(sbm_loginCheck);
  }
};

/**
 * @method
 * @name sbm_Login_submitdone
 * @description 로그인 submitdone 스크립트 - 로그인 성공여부 판단, 성공시 메인페이지 이동, 실패시 메세지 처리
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_Login_submitdone = async function (e) {
  const resultData = e.responseJSON;
  const result = resultData?.rsMsg;
  const menuCd = $c.util.getParameter($p, 'menuCd');
  if (e.responseStatusCode === 200) {
    $c.win.goHome($p, menuCd);
    return;
  }
  const msgObj = {
    statusCode: "E",
    errorCode: resultData.code,
    message: resultData.error,
    messageDetail: resultData.message
  };
  scwin.resultMsg(msgObj);

  // try {
  //     if ($c.sbm.getResultCode(e) == $c.sbm.getMessageCode('STATUS_SUCCESS')) {
  //         if (cbx_remember.getValue() == 'check') {
  //             WebSquare.cookie.setCookie('rememberId', ibx_empCd.getValue(), 'Strict');
  //         }
  //         $c.win.goHome(menuCd);
  //     } else {
  //         if ($c.util.isEmpty(resultData.errorItem) === false) {
  //             await $c.win.alert(result.message);
  //             scwin.after_login_fail(resultData);
  //         }
  //     }
  // } catch (ex) {
  //     console.log(ex);
  //     $c.win.alert("서버 통신 도중 오류가 발생하였습니다. 잠시후 다시 시도해주시기 바랍니다.");
  // }
};

/**
 * @method
 * @name after_login_fail
 * @description 로그인 실패 처리 시 동작
 * @param {string} resultData login 처리 결과가 담긴 객체
 * @hidden N
 * @exception 
 */
scwin.after_login_fail = function (resultData) {
  if (resultData.errorItem == "ID") {
    ibx_empCd.focus();
  } else if (resultData.errorItem == "PASSWORD") {
    dma_loginCheck.set("login_pwd", "");
    sct_password.focus();
  }
  ;
};

/**
 * @event
 * @name btn_logo_onclick
 * @description 로고 클릭 시 home으로 보낸다.
 */
scwin.btn_logo_onclick = function () {
  $c.win.goHome($p);
};

/**
 * @event
 * @name cbx_remember_onclick
 * @description rememberMe 버튼 클릭 시 동작하는 이벤트.
 */
scwin.cbx_remember_onclick = function (index, checked, value) {
  const id = ibx_empCd.getValue();
  if (checked && id != '' && id != undefined) {
    WebSquare.cookie.setCookie('rememberId', id, 'Strict');
  } else {
    WebSquare.cookie.delCookie('rememberId');
  }
};
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.login_wrm .container:before{display:none}.login_wrm .login_header{position:relative;width:100%;height:70px}.login_wrm .login_header h1{z-index:100;position:absolute;top:30px;left:60px;display:inline-block;vertical-align:top}.login_wrm .login_header h1 .logo{display:inline-block;width:220px;height:28px;font-size:0;line-height:0;background:url(../../cm/images/logo_white.png) no-repeat;background-size:100% 100%}.login_wrm .container{top:0;width:100%;height:100%;background:url(../../cm/images/bg_login01.png),url(../../cm/images/bg01.png);background-color:#292260;background-repeat:no-repeat,no-repeat;background-position:right bottom,right -800px bottom -100px;background-size:450px,1850px;overflow:hidden;z-index:20}.login_wrm .container .login_container{z-index:30;position:absolute;top:100px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.login_wrm .container .login_container .login_tit{margin-left:40px;font-size:70px;color:#fff;font-weight:700}.login_wrm .container .login_container .login_tit div:first-child{-webkit-animation:logintit01 1.3s forwards ease-in-out;animation:logintit01 1.3s forwards ease-in-out;opacity:0}@-webkit-keyframes logintit01{0%{-webkit-transform:scale(1) translateX(90px);transform:scale(1) translateX(90px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes logintit01{0%{-webkit-transform:scale(1) translateX(90px);transform:scale(1) translateX(90px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .container .login_container .login_tit div:last-child{-webkit-animation:logintit02 1.3s .5s forwards ease-in-out;animation:logintit02 1.3s .5s forwards ease-in-out;opacity:0}@-webkit-keyframes logintit02{0%{-webkit-transform:scale(1) translateX(100px);transform:scale(1) translateX(100px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes logintit02{0%{-webkit-transform:scale(1) translateX(100px);transform:scale(1) translateX(100px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .login_form{height:340px;padding:40px 40px 56px;margin-top:32px;background:rgba(255,255,255,.1);border-radius:50px;box-sizing:border-box}.login_wrm .login_form{-webkit-animation:loginform 1.3s 1.4s forwards ease-in-out;animation:loginform 1.3s 1.4s forwards ease-in-out;opacity:0}@-webkit-keyframes loginform{0%{-webkit-transform:scale(1) translateX(140px);transform:scale(1) translateX(140px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}@keyframes loginform{0%{-webkit-transform:scale(1) translateX(140px);transform:scale(1) translateX(140px);opacity:0}100%{-webkit-transform:scale(1) translateX(0);transform:scale(1) translateX(0);opacity:1}}.login_wrm .login_form .form_tit{font-size:34px;color:#fff}.login_wrm .login_form .form_group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:42px}.login_wrm .login_form .form_group .btn_forget{display:none}.login_wrm .login_form .form_item{position:relative;display:block;width:360px}.login_wrm .login_form .form_item span{display:block;font-size:24px;color:#fff;font-weight:700}.login_wrm .login_form .form_item input{display:block;width:100%;height:100%;padding-top:26px;padding-right:40px;padding-bottom:10px;border:0;border-bottom:1px solid #fff;font-size:22px;color:#05feef;background:0 0;border-radius:0;outline:0}.login_wrm .login_form .form_item input:focus{-webkit-box-shadow:none;box-shadow:none}.login_wrm .login_form .form_item .btn_forget{display:block;margin-top:17px;color:#b6ff06;font-size:20px}.login_wrm .login_form .form_item.user{margin-right:50px}.login_wrm .login_form .form_item.pwd input{padding-top:23px}.login_wrm .login_form .btn_login{display:block;position:relative;width:170px;height:170px;margin-left:100px;background-color:#292260;font-size:36px;color:#fff;border-radius:100%;text-align:center;border:0;color:#fff;background:#292260;line-height:170px;z-index:10}.login_wrm .login_form .form_item .btn_login_close.hidden{display:none}.login_wrm .login_form .form_item .btn_login_close{display:inline-block;position:absolute;top:48px;right:0;width:35px;height:35px;background:url(../../cm/images/btn_login_close.png) no-repeat right 4px center;background-size:18px 18px;pointer-events:auto;cursor:pointer;outline:0}.login_wrm .login_bg{position:absolute;right:-330px;bottom:146px}.login_wrm .login_bg .bg_bubble01{position:absolute;right:0;left:0;width:42px;height:42px;background:url(../../cm/images/bg_bubble01.png) no-repeat center}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'login_wrap'},E:[{T:1,N:'xf:group',A:{class:'login_logo',id:'',tagname:'h1',style:''},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:'',title:'Inswave'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{class:'login_container',id:''},E:[{T:1,N:'xf:group',A:{class:'login_header',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'WELCOME',style:''}},{T:1,N:'w2:textbox',A:{class:'login_info',id:'',label:'SIGN IN TO INSWAVE',style:''}}]},{T:1,N:'xf:group',A:{class:'login_contents',id:'grp_loginInfo',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'ID',style:'',tagname:'label',class:'tit'}},{T:1,N:'xf:input',A:{useVerticalAlign:'',displayFormatter:'',customModelUnformatter:'',autocomplete:'',dataType:'number',useMonthYearFormat:'',applyFormat:'',autoFocus:'',type:'',adjustMaxLength:'false',disabled:'',style:'',id:'ibx_empCd',customModelFormatter:'',class:'',ref:'data:dma_loginCheck.login_cd',refSync:'true','ev:onkeyup':'scwin.ibx_empCd_onkeyup',displayFormat:'',allowChar:'0-9',nextTabID:'sct_password',enterBlur:'',ignoreChar:'',validator:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Password',style:'',tagname:'label',class:'tit'}},{T:1,N:'xf:secret',A:{ref:'data:dma_loginCheck.login_pwd',nextTabID:'btn_login',style:'',id:'sct_password',class:'',refSync:'true','ev:onkeyup':'scwin.sct_password_onkeyup',mandatory:'true'}},{T:1,N:'xf:group',A:{class:'grp_password',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'cbx_remember',ref:'',rows:'',selectedindex:'-1',style:'','ev:oncheckboxclick':'scwin.cbx_remember_onclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Remember me'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'check'}]}]}]}]},{T:1,N:'w2:anchor',A:{class:'link_password',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Forgot password?'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'login_btn',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_login','ev:onclick':'scwin.btn_login_onclick',id:'btn_login',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LOGIN'}]}]}]},{T:1,N:'xf:group',A:{class:'login_account',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'New user?',style:''}},{T:1,N:'w2:anchor',A:{class:'link_account',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create an account'}]}]}]}]}]}]}]}]}]})