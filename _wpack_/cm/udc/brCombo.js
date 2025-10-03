/*amd /cm/udc/brCombo.xml 27924 c34a984e739d14e1d7a17121a5a9f62d7e8e3b8728d94888fedc81c7fd86c539 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'',id:'adm_dataMap'}},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_selectBox01',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'value',name:'value',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_samusoDsc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'C_VAL',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CNM',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CNM_1',name:'실제_코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lPROV_C',name:'지역조회조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lBRC',name:'사무소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lBRNM',name:'사무소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_samuso',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BRC',name:'사무소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BRNM',name:'사무소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROV_C',name:'시도코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROVNM',name:'시도명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COFF_BRC',name:'시군지부사무소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COFFNM',name:'시군지부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MBR_BRC',name:'본소사무소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MBRNM',name:'본소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'RG_DTM',name:'검색일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.initBrMainCmb,scwin.ctrlBrcCmb,scwin.setbrSrcDs,scwin.getbrSrcDs,scwin.setBrcd,scwin.getBrcd,scwin.setBrNm,scwin.getBrNm,scwin.getValueChul,scwin.setValueChul,scwin.fnBrVisible,scwin.popupSamuso,scwin.validation,scwin.fnBrFocus,scwin.iniBrc,scwin.chgcmbBrSrcDsc,scwin.getProvC,scwin.setInit,scwin.setCsamusp,scwin.setBrcReadOnly'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_fromToCalendar
 * @pluginName 
 * @company Inswave
 * @developer Max
 * @category /cm/udc
 * @notSupportBrowser 
 * @version
 * @htmlRender
 * @icon
 * @disableIcon
 * @description
 * @width
 * @height
 * @license
 * @imagePath
 * @homepage
 */

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description udc의 id값을 설정한다.
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description udc의 CSS Class를 지정한다.
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description style을 지정한다.
 */

/**
 * @property
 * @name readOnly
 * @category 01.Basic & ETC
 * @type combobox
 * @option [true,false]
 * @default
 * @necessary N
 * @bindparent
 * @description HTML의 readOnly
 */

/**
 * @property
 * @name autoSet
 * @category 01.Basic & ETC
 * @type combobox
 * @option [true,false]
 * @default true
 * @necessary N
 * @bindparent
 * @description 사무소구분강제세팅. true 인 경우 세션에서 사무소구분 정보를 가져와서 세팅
 */

/**
 * @property
 * @name samusoGbn
 * @category 03.Data
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사무소구분코드
 */

/**
 * @property
 * @name mode
 * @category 01.Basic & ETC
 * @type combobox
 * @option [NO_ALL,NO_DSC]
 * @default
 * @necessary N
 * @bindparent
 * @description 콤보 구분
 * NO_ALL : 전체 제외 / NO_DSC : 사무소구분 콤보 제외
 */

/**
 * @property
 * @name csamusp
 * @category 01.Basic & ETC
 * @type combobox
 * @option [1,2]
 * @default 
 * @necessary N
 * @bindparent
 * @description 사무소 은행/농축협 구분코드
 */

/**
 * @property
 * @name refBrSrcDs
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사무소구분코드를 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @property
 * @name refBrcCode
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사무소코드를 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @property
 * @name refBrcName
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사무소명을 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @property
 * @name refChul
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 출장소여부 체크박스를 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @property
 * @name refSamusoDsc
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 사무소지역 콤보박스를 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @event
 * @name schGbn_onchange
 * @description 사무소구분 변경시 onchage 이벤트
 */

/**
 * @event
 * @name brcCode_onchange
 * @description 코드변경시 명칭 초기화
 */

// 전역변수
scwin.samusoGbn = $c.data.getUserInfo($p, "br_auth"); //사무소구분코드
scwin._refDataObj; //adm_dataMap 에 바인딩될 dataMap 

scwin.onpageload = function () {
  const codeOptions = [{
    bsnCd: "SS",
    code: "0004"
  }, {
    bsnCd: "SS",
    code: "0002"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.data.executeCommonCode($p);
  scwin.option = $p.getOptions();

  // ref 정의 (사무소구분코드)
  if (!$c.util.isEmpty($p, scwin.option.refBrSrcDs)) {
    scwin._setRefComp(scwin.option.refBrSrcDs, sbx_brSrcDs); //사무소구분코드
  }

  // ref 정의 (사무소코드)
  if (!$c.util.isEmpty($p, scwin.option.refBrcCode)) {
    scwin._setRefComp(scwin.option.refBrcCode, ibx_brcCode); //사무소코드
  }

  // ref 정의 (사무소명)
  if (!$c.util.isEmpty($p, scwin.option.refBrcName)) {
    scwin._setRefComp(scwin.option.refBrcName, ibx_brcName); //사무소명
  }

  // ref 정의 (출장소여부)
  if (!$c.util.isEmpty($p, scwin.option.refChul)) {
    scwin._setRefComp(scwin.option.refChul, cbx_chul); //출장소여부
  }

  // ref 정의 (사무소지역)
  if (!$c.util.isEmpty($p, scwin.option.refSamusoDsc)) {
    scwin._setRefComp(scwin.option.refSamusoDsc, sbx_samusoDsc); //사무소지역
  }

  // 속성 readOnly 확인
  if (!$c.util.isEmpty($p, scwin.option.readOnly)) {
    scwin.setBrcReadOnly(scwin.option.readOnly);
  }

  // 속성 samusoGbn 확인
  if (!$c.util.isEmpty($p, scwin.option.samusoGbn)) {
    scwin.samusoGbn = scwin.option.samusoGbn;
  }
  // 속성 mode 확인
  if (!$c.util.isEmpty($p, scwin.option.mode)) {
    scwin.mode = scwin.option.mode.toUpperCase();
  }
  // 속성 csamusp
  if (!$c.util.isEmpty($p, scwin.option.csamusp)) {
    scwin.csamusp = scwin.option.csamusp;
  }
  const cdList = $c.data.getUserInfo($p, "grp_cds");
  scwin.sendCds = false;
  for (let i = 0; i < cdList.length; i++) {
    if (cdList[i] == "K5" || cdList[i] == "K6") {
      scwin.sendCds = true;
    }
  }
  scwin.udcLoadSet();
};

/**
 * @method
 * @name udcLoadSet
 * @description 처음 로딩 시, 콤보박스 및 초기화
 * @param
 * @returns
 * @hidden Y
 * @exception
 * @example
 */
scwin.udcLoadSet = function () {
  scwin.initBrMainCmb();
  if (scwin.mode == "NO_ALL" || scwin.mode == "NO_DSC") {
    sbx_brSrcDs.setValue("4");
  }
  if (scwin.mode == "NO_DSC") {
    sbx_brSrcDs.hide("");
    grp_chul.hide("");
    grp_searchBr.show("");
    if (scwin.samusoGbn == "1") {
      //사무소구분코드가 전체(1)
      const brcd = $c.data.getUserInfo($p, "brc");
      const brnm = $c.data.getUserInfo($p, "brnm");
      scwin.setBrcd(brcd, false); //사무소코드set
      scwin.setBrNm(brnm); //사무소코드set
    }
  }
};

/**
 * @method
 * @name _setRefComp
 * @description 컴포넌트에 ref 세팅
 * @param
 * @returns
 * @hidden Y
 * @exception
 * @example
 */
scwin._setRefComp = function (refStr, comp) {
  const dataObj = refStr.replaceAll("data:", "").split(".");

  // ref는 모두 같은 dataMap을 사용한다는 가정.
  // 전역변수에 adm_dataMap 을 설정함.
  if ($c.util.isEmpty($p, scwin._refDataObj)) {
    scwin._refDataObj = dataObj[0];
    adm_dataMap.setScope(`../${scwin._refDataObj}`);
  }
  comp.setRef(`data:adm_dataMap.${dataObj[1]}`);
};

/**
 * @method
 * @name initBrMainCmb
 * @description 메인콤보 세팅
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.initBrMainCmb = function () {
  const selectBoxo1 = [{
    value: "1",
    label: "[1] 전체"
  }, {
    value: "2",
    label: "[2] 본부"
  }, {
    value: "3",
    label: "[3] 시군지부"
  }, {
    value: "4",
    label: "[4] 영업점"
  }, {
    value: "5",
    label: "[5] 농축협"
  }];
  let rtnSelect = [];
  if (scwin.samusoGbn == "1") {
    if (scwin.mode == "NO_ALL") {
      rtnSelect = ["2", "4"]; //본부, 영업점
    } else {
      rtnSelect = ["1", "2", "4"]; //전체, 본부, 영업점
    }
  } else if (scwin.samusoGbn == "2") {
    rtnSelect = ["2", "4"]; //본부, 영업점
  } else {
    rtnSelect = ["4"]; //영업점
  }
  if (scwin.csamusp == "2") {
    rtnSelect.push("5");
  } else if (scwin.csamusp == "1") {
    //4를 5으로 변경
    rtnSelect = rtnSelect.map(val => val === "4" ? "5" : val);
  }
  const dataObj = selectBoxo1.filter(index => rtnSelect.includes(index.value));
  dlt_selectBox01.setJSON(dataObj);
  scwin.sbx_brSrcDs_onchange();
};

//사무소구분 변경시 onchage 이벤트
scwin.sbx_brSrcDs_onchange = function (info) {
  scwin.iniBrc();
  scwin.ctrlBrcCmb();
  scwin.chgcmbBrSrcDsc();
  $p.emit("schGbn_onchange");
  // scwin.callBrcChangeEventHandler();
};

/**
 * @method
 * @name ctrlBrcCmb
 * @description 사무소 메인콤보에 따른 사무소 객체 컨트롤
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.ctrlBrcCmb = function () {
  switch (sbx_brSrcDs.getValue()) {
    case "1":
      //전체(1)
      sbx_samusoDsc.hide("");
      grp_searchBr.hide("");
      grp_chul.hide("");
      break;
    case "2":
      //본부(2)
      sbx_samusoDsc.show("");
      grp_searchBr.hide("");
      grp_chul.hide("");
      dlt_commonCodeSS0004.clearFilter();
      dlt_commonCodeSS0002.clearFilter();
      if ($c.data.getUserInfo($p, "br_auth") == "2") {
        const provc = $c.data.getUserInfo($p, "prov_c"); //시도구분

        if (scwin.csamusp == "1") {
          sbx_samusoDsc.setNodeSet("data:dlt_commonCodeSS0004", "VAL_CNM", "C_VAL");
          dlt_commonCodeSS0004.setColumnFilter({
            type: "row",
            colIndex: "C_VAL",
            key: provc,
            exactMatch: true,
            condition: "and"
          });
        } else {
          sbx_samusoDsc.setNodeSet("data:dlt_commonCodeSS0002", "VAL_CNM", "C_VAL");
          dlt_commonCodeSS0002.setColumnFilter({
            type: "row",
            colIndex: "C_VAL",
            key: provc,
            exactMatch: true,
            condition: "and"
          });
        }
      } else {
        if (scwin.csamusp == "1") {
          sbx_samusoDsc.setNodeSet("data:dlt_commonCodeSS0004", "VAL_CNM", "C_VAL");
        } else {
          sbx_samusoDsc.setNodeSet("data:dlt_commonCodeSS0002", "VAL_CNM", "C_VAL");
        }
      }
      break;
    case "3":
      sbx_samusoDsc.hide("");
      grp_searchBr.show("");
      grp_chul.show("");
      break;
    case "4":
    case "5":
      if (["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
        sbx_samusoDsc.show("");
        grp_searchBr.hide("");
        grp_chul.hide("");
        if (scwin.samusoGbn == "4") grp_chul.show("");
        //데이터 양이 많은데 selectBox 으로 사용 하는지 확인 필요.
        //sbx_samusoDsc.setNodeSet("data:dlt_samusoDsc", "VAL_CNM", "C_VAL");
      } else {
        sbx_samusoDsc.hide("");
        grp_searchBr.show("");
        grp_chul.show("");
      }
      break;
    default:
      break;
  }
};

/**
 * @method
 * @name setbrSrcDs
 * @description 사무소구분코드 변경
 * @param {String} value 변경할 사무소구분코드
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setbrSrcDs = function (value) {
  sbx_brSrcDs.setValue(value);
};

/**
 * @method
 * @name getbrSrcDs
 * @description 사무소구분코드 조회
 * @param
 * @returns {String} 사무소구분코드 return
 * @hidden N
 * @exception
 * @example
 */
scwin.getbrSrcDs = function () {
  return sbx_brSrcDs.getValue();
};

/**
 * @method
 * @name setBrcd
 * @description 사무소코드 변경
 * @param {String} brcd 변경할 사무소코드
 * @param {Boolen} flag 사무소팝업open여부
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setBrcd = function (brcd, flag = true) {
  if (brcd > 100000) {
    sbx_brSrcDs.setValue("5"); //[5] 농축협
  } else {
    sbx_brSrcDs.setValue("4"); //[4] 영업점
  }
  if (scwin.samusoGbn > "2") {
    // 영업점은
    sbx_samusoDsc.setValue(brcd); // 콤보에 세팅
  } else {
    ibx_brcCode.setValue(brcd);
    if (flag) {
      scwin.ibx_brcCode_oneditenter(); //true 이면 사무소팝업 open
    }
  }
};

/**
 * @method
 * @name getBrcd
 * @description 사무소코드 조회
 * @param
 * @returns {String} 사무소코드 return
 * @hidden N
 * @exception
 * @example
 */
scwin.getBrcd = function () {
  if (sbx_brSrcDs.getValue() == "1") {
    return '';
  } else if (sbx_brSrcDs.getValue() == "2" || sbx_brSrcDs.getValue() == "4" && ["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
    return sbx_samusoDsc.getValue();
  } else {
    return ibx_brcCode.getValue();
  }
};

/**
 * @method
 * @name setBrNm
 * @description 사무소명 변경
 * @param {String} value 변경할 사무소명
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setBrNm = function (value) {
  //20250916 > asis는 setBrNm 하면 ibx_brcName 에만 넣는데, getBrNm 이랑은 동작이 달라서 본부(2) 일때는 콤보박스에 setValue 추가함. 불필요시 삭제
  if (sbx_brSrcDs.getValue() == "2") {
    let dltCode = dlt_commonCodeSS0002;
    if (scwin.csamusp == "1") {
      dltCode = dlt_commonCodeSS0004;
    }
    let cJson = dltCode.getMatchedJSON("C_VAL", value, true);
    if (cJson.length > 0) {
      //코드가 존재시, 코드값으로 setValue
      sbx_samusoDsc.setValue(value);
    } else {
      //일치하는 코드가 없는 경우, 코드명일 수도 있으므로 한번더 matchedJSON
      let nJSON = dltCode.getMatchedJSON("CNM", value, true);
      if (nJSON.length > 0) {
        //코드명이 존재시 해당 코드값으로 setValue
        sbx_samusoDsc.setValue(nJSON[0].C_VAL);
      } else {
        //없으면 빈값
        sbx_samusoDsc.setValue("");
      }
    }
  } else {
    //<----- 까지 불필요시 삭제
    ibx_brcName.setValue(value);
  }
};

/**
 * @method
 * @name getBrNm
 * @description 사무소명 조회
 * @param
 * @returns {String} 사무소명 return
 * @hidden N
 * @exception
 * @example
 */
scwin.getBrNm = function () {
  if (sbx_brSrcDs.getValue() == "1") {
    return '';
  } else if (sbx_brSrcDs.getValue() == "2" || sbx_brSrcDs.getValue() == "4" && ["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
    let dltCode = dlt_commonCodeSS0002;
    if (scwin.csamusp == "1") {
      dltCode = dlt_commonCodeSS0004;
    }
    let cJson = dltCode.getMatchedJSON("C_VAL", sbx_samusoDsc.getValue(), true);
    if (cJson.length > 0) {
      return cJson[0].CNM;
    }
    return "";
  } else {
    return ibx_brcName.getValue();
  }
};

/**
 * @method
 * @name getValueChul
 * @description 출장소포함여부 체크값
 * @param 
 * @returns {String} 출장소포함여부 체크값
 * @hidden N
 * @exception
 * @example
 */
scwin.getValueChul = function () {
  return cbx_chul.getValue();
};

/**
 * @method
 * @name setValueChul
 * @description 출장소포함여부 값 변경 (0 / 1)
 * @param {string} value 출장소포함여부 값 변경
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setValueChul = function (value) {
  if (sbx_brSrcDs.getValue() == "4") {
    cbx_chul.setValue(value);
  } else {
    console.error("사무소구분이 '4' 영업점인 경우에만 setValueChul() 매소드 사용이 가능합니다.");
  }
};

// /**
//  * @method
//  * @name setSamusoDsc
//  * @description 사무소지역구분 변경
//  * @param {Stri트g} value 변경할 사무소지역구분
//  * @returns
//  * @hidden N
//  * @exception
//  * @example
//  */
// scwin.setSamusoDsc = function(value) {
//     if (sbx_brSrcDs.getValue() == "2") {   //본부가 아닌 경우 변경x
//         sbx_samusoDsc.setValue(value);
//     } else {
//         console.error("[UDC] setSamusoDsc 매소드 error (본부(2)인 경우만 사용 가능.)");
//     }
// };

// /**
//  * @method
//  * @name getSamusoDsc
//  * @description 사무소지역구분 조회
//  * @param
//  * @returns {String} 사무소지역구분 return
//  * @hidden N
//  * @exception
//  * @example
//  */
// scwin.getSamusoDsc = function() {
//     return sbx_samusoDsc.getValue();
// };

/**
 * @method
 * @name fnBrVisible
 * @description 사무소 숨김
 * @param {Boolean} visible 숨김/표시 여부
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.fnBrVisible = function (visible) {
  if (sbx_brSrcDs.getValue() == "1") {
    //전체(1)이면
    setVisible(sbx_brSrcDs, visible);
  } else if (sbx_brSrcDs.getValue() == "2" || sbx_brSrcDs.getValue() == "4" && ["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
    setVisible(sbx_brSrcDs, visible);
    setVisible(sbx_samusoDsc, visible);
    grp_chul.hide("");
    if (scwin.samusoGbn == "4") setVisible(cbx_chul, visible);
  } else {
    setVisible(sbx_brSrcDs, visible);
    setVisible(grp_searchBr, visible);
    setVisible(cbx_chul, visible);
  }
  if (scwin.mode == "NO_DSC") {
    sbx_brSrcDs.hide("");
    grp_chul.hide("");
  }
  function setVisible(obj, visible) {
    if (visible) {
      //true 이면 show
      obj.show("");
    } else {
      //false 이면 hide
      obj.hide("");
    }
  }
};

/**
 * @name ibx_brcCode_oneditenter(구btnPbSrchBrc)
 * @description 사무소코드 엔터 이벤트
 */
scwin.ibx_brcCode_oneditenter = function () {
  if ($c.util.isEmpty($p, ibx_brcCode.getValue())) return;
  const searchBrc = $c.str.trim($p, ibx_brcCode.getValue());
  //사무소코드 조회 -> 조회결과가 1건이면 name에 setValue / 다건이면 사무소조회 팝업 open
  if ($c.num.isNumber($p, searchBrc)) {
    //숫자면
    dma_search.set("lBRC", $c.str.lpad($p, searchBrc, 6, "0"));
  } else {
    dma_search.set("lBRNM", searchBrc);
  }

  //action 다름! ** 아래 url 수정 필요! 
  let actionUrl = "/CM01001/searchBranch.ml";
  if (sbx_brSrcDs.getValue() == "5") {
    actionUrl = "/CM01001D/getSearchSanghoBranch.ml";
  } else if (scwin.samusoGbn == "1" && scwin.sendCds) {
    //K6나 K5에 사무소조회시 본부조회 권한줄때 타사무소조회팝업 사용
    actionUrl = "/CM01001C/getSearchOtherBranch.ml";
  }
  const searchOption = {
    id: "sbm_brcSearchBox",
    //서브미션ID
    action: actionUrl,
    ref: "dma_search",
    //서버로보낼 dataCollection ID
    target: "dlt_samuso",
    //서버로 응답받을 dataCollection ID
    submitDoneHandler: scwin.searchSubmitDone //Response Status 코드 값이 정상 일 경우 동작할 callbackFunction
  };
  $c.sbm.executeSubmit($p, searchOption);
};

/**
 * @method
 * @name searchSubmitDone
 * @description 사무소조회 submission callback
 * @param
 * @returns
 * @hidden Y
 * @exception
 * @example
 */
scwin.searchSubmitDone = function (resObj) {
  //사무소코드 조회 -> 조회결과가 1건이면 name에 setValue / 다건이면 사무소조회 팝업 open
  if (dlt_samuso.getRowCount() == 1) {
    ibx_brcCode.setValue(dlt_samuso.getCellData(0, "BRC"));
    ibx_brcName.setValue(dlt_samuso.getCellData(0, "BRNM"));
  } else {
    scwin.popupSamuso();
  }
};

/**
 * @method
 * @name popupSamuso
 * @description 사무소 팝업 open
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.popupSamuso = function () {
  //userInfo 정보에 groupCds가 여러개면 for문 처리 ?
  let popupId = "CM1001";
  if (sbx_brSrcDs.getValue() == "5") {
    popupId = "CM1001D";
  } else if (scwin.samusoGbn == "1" && scwin.sendCds) {
    //K6나 K5에 사무소조회시 본부조회 권한줄때 타사무소조회팝업 사용
    popupId = "CM1001C";
  }

  //팝업 옵션 설정
  const options = {
    id: popupId,
    popupName: "사무소찾기",
    width: 1082,
    height: 610
  };

  //팝업에 전달할 dataObject
  const data = {
    brc: ibx_brcCode.getValue()
  };
  const url = `/ui/CM/${popupId}.xml`;
  $c.win.openPopup($p, url, options, data).then(res => {
    ibx_brcCode.setValue(res.BRC);
    ibx_brcName.setValue(res.BRNM);
  });
};

// function fnClearForm()
// {
// 	if(IsEmpty(frmSrcConHidden.ClearForm) == False){
// 		var lClearForm = split(frmSrcConHidden.ClearForm,',');
// 		var i = 0;
// 		for(i = 0; i < ArraySize(lClearForm); i++){
// 			var lForm = lClearForm[i];
// 			&lForm.Initialize;
// 			&lForm.Clear;
// 			&lForm.@Enable = True;
// 		}
// 	}
// }

/**
 * @method
 * @name validation
 * @description validation 체크
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.validation = function () {
  if (sbx_brSrcDs.getValue() == "1") {} else if (sbx_brSrcDs.getValue() == "2" || sbx_brSrcDs.getValue() == "4" && ["3", "4", "5", "6"].includes(scwin.samusoGbn) || sbx_brSrcDs.getValue() == "5" && ["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
    if (sbx_samusoDsc.getValue() == "") return false;
  } else {
    if (ibx_brcName.getValue() == "") return false;
  }
  return true;
};

/**
 * @method
 * @name fnBrFocus
 * @description 포커스
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.fnBrFocus = function () {
  if (scwin.mode == "NO_DSC") {
    if (["3", "4", "5", "6"].includes(scwin.samusoGbn)) {
      sbx_samusoDsc.focus();
    } else {
      ibx_brcCode.focus();
    }
  } else {
    sbx_samusoDsc.focus();
  }
};

/**
 * @method
 * @name iniBrc
 * @description 사무소 값 초기화
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.iniBrc = function () {
  ibx_brcCode.setValue("");
  ibx_brcName.setValue("");
  sbx_samusoDsc.setValue("");
  cbx_chul.setValue("");
};

/**
 * @method
 * @name chgcmbBrSrcDsc
 * @description 체크박스 label 변경
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.chgcmbBrSrcDsc = function () {
  if (sbx_brSrcDs.getValue() == "4") {
    tbx_chul.setValue("출장소 포함");
  } else if (sbx_brSrcDs.getValue() == "5") {
    tbx_chul.setValue("지점 포함");
  }
};

/**
 * @method
 * @name getProvC
 * @description getProvC
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getProvC = function () {
  return sbx_samusoDsc.getValue();
};

/**
 * @method
 * @name setInit
 * @description udc 초기화 함수 (공용)
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setInit = function () {
  sbx_brSrcDs.setValue("1");
};

/**
 * @name grp_img_onclick
 * @description 버튼클릭 시, 사무소팝업 open
 */
scwin.grp_img_onclick = function (e) {
  scwin.popupSamuso();
};

//코드변경시 이벤트
scwin.ibx_brcCode_onchange = function (info) {
  ibx_brcName.setValue("");
  $p.emit("brcCode_onchange");
};

/**
 * @method
 * @name setCsamusp
 * @description 사무소 지역구분코드 변경
 * @param {String} samusp 변경할 구분코드 (은행(1)/농축협(2))
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setCsamusp = function (samusp) {
  scwin.csamusp = samusp;
  scwin.udcLoadSet();
};

/**
 * @method
 * @name setBrcReadOnly
 * @description 사무소 코드/명 readOnly 처리여부
 * @param {Boolean} readOnly 활성화 비활성화 여부
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setBrcReadOnly = function (readOnly) {
  sbx_brSrcDs.setDisabled(readOnly);
  ibx_brcCode.setReadOnly(readOnly);
  btn_srchBrc.setDisabled(readOnly);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap_period',id:'grp_wrap',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'',class:'fl',delimiter:'-',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_brSrcDs',ref:'',style:'width: 150px;margin-right: 5px;',submenuSize:'auto','ev:onchange':'scwin.sbx_brSrcDs_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_selectBox01'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'value'}}]}]}]},{T:1,N:'xf:group',A:{id:'grp_searchBr',class:'fl'},E:[{T:1,N:'xf:input',A:{displayFormatter:'scwin.displayFormat',ref:'data:dma_popupParam01.param01','ev:oneditenter':'scwin.ibx_brcCode_oneditenter',adjustMaxLength:'false',style:'width: 66px;',id:'ibx_brcCode',class:'','ev:onchange':'scwin.ibx_brcCode_onchange'}},{T:1,N:'xf:input',A:{displayFormatter:'scwin.displayFormat',ref:'data:dma_popupParam01.param01','ev:onchange':'scwin.ipt_schNo_onchange',adjustMaxLength:'false',style:'width:200px;height:30px;margin-left : 4px;',allowChar:'0-9-',id:'ibx_brcName',class:'search-input',readOnly:'true'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.grp_img_onclick',style:'',id:'btn_srchBrc',type:'button',class:'btn_cm search'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'fl',delimiter:'-',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'',id:'sbx_samusoDsc',ref:'',style:'width: 150px;margin: 0 4px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:group',A:{id:'grp_chul',class:'fl checkbox-row',style:'margin-left: 4px;'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_chul',selectedindex:'-1',rows:'',cols:'',class:'fl'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_chul',label:'포함',class:'fl'}}]}]}]}]}]})