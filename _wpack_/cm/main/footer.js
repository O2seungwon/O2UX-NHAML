/*amd /cm/main/footer.xml 4502 b1da22170d89a47f0c3d5828e6538da91d1245cdfcf06ed4ec8d288f2a0ff9fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_loginCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'login_cd',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'login_pwd',name:'비밀번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lENO',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

/**
 * @event
 * @name btn_pbLogin_onclick
 * @description 실행 버튼 클릭시 실행 - 로그인 처리 트랜잭션 발생
 */
scwin.btn_pbLogin_onclick = function (e) {
  if ($c.util.isEmpty($p, ibx_eno.getValue())) {
    $c.win.alert($p, "개인번호를 입력하세요");
    return;
  }
  dma_loginCheck.set("login_cd", ibx_eno.getValue());
  dma_loginCheck.set("login_pwd", "password");
  const searchCodeGrpOption = {
    id: "sbm_loginCheck",
    action: "/login.ml",
    ref: "dma_loginCheck",
    submitDoneHandler: scwin.sbm_Login_submitdone,
    submitErrorHandler: scwin.sbm_Login_errorHandler
  };
  $c.sbm.executeSubmit($p, searchCodeGrpOption);
};

/**
 * @method
 * @name sbm_Login_submitdone
 * @description 로그인 submitdone 스크립트 - 로그인 성공여부 판단, 성공시 메인페이지 이동, 실패시 메세지 처리
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_Login_submitdone = function (res) {
  const resultData = res.responseJSON;
  const result = resultData?.rsMsg;
  // const menuCd = $c.util.getParameter('menuCd');

  if (res.responseStatusCode === 200) {
    $c.win.goHome($p);
    return;
  }
};

/**
 * @method
 * @name sbm_Login_errorHandler
 * @description 로그인 submitdone 스크립트 - 로그인 성공여부 판단, 성공시 메인페이지 이동, 실패시 메세지 처리
 * @param {string} e submission 결과를 담은 객체
 * @hidden N
 * @exception 
 */
scwin.sbm_Login_errorHandler = function (res) {
  $c.win.alert($p, "로그인 실패");
};

/**
 * @event
 * @name ibx_eno_oneditenter
 * @description 개인번호 enter Event
 */
scwin.ibx_eno_oneditenter = function () {
  ibx_userNm.setValue("");
  if ($c.util.isEmpty($p, ibx_eno.getValue())) return;
  dma_dataMap1.set("lENO", ibx_eno.getValue());
  const searchenoSearch = {
    id: "sbm_enoSearch",
    action: "/CM01002/searchEno.ml",
    ref: "dma_dataMap1",
    submitDoneHandler: scwin.sbm_enoSearch_submitDonHandler,
    submitErrorHandler: scwin.sbm_Login_errorHandler
  };

  // const refJson = {
  //     lENO : ibx_eno.getValue(),

  // };
  $c.sbm.executeSubmit($p, searchenoSearch);
};
scwin.sbm_enoSearch_submitDonHandler = function (res) {
  debugger;
  if (res.responseJSON.length == 1) {
    ibx_userNm.setValue(res.responseJSON[0].USRNM);
  } else {
    //팝업 옵션 설정
    const options = {
      id: "CM1002",
      popupName: "직원 찾기",
      popSize: "M"
    };

    //팝업에 전달할 dataObject
    const data = {
      usernm: ibx_eno.getValue()
    };
    const popupUrl = "/ui/CM/CM1002.xml";
    $c.win.openPopup($p, popupUrl, options, data).then(rtn => {
      debugger;
      if (rtn.length > 0) {
        ibx_userNm.setValue(rtn.USRNM);
      }
    });
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_noticeArea',class:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'다른 사용자',style:'width:80px;',class:'fl'}},{T:1,N:'xf:input',A:{id:'ibx_eno',style:'width:100px;',class:'fl',ref:'data:dma_dataMap1.lENO','ev:oneditenter':'scwin.ibx_eno_oneditenter'}},{T:1,N:'xf:input',A:{id:'ibx_userNm',style:'width:120px;',class:'fl',readOnly:'true'}},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_pbLogin',style:'width:60px;height:29px;',class:'fl btn-inq','ev:onclick':'scwin.btn_pbLogin_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]},{T:1,N:'w2:textbox',A:{class:'fl',id:'',label:'Copyrightⓒ 2015 NHBank All Rights Reserved',style:''}}]}]}]}]})