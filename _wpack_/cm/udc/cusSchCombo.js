/*amd /cm/udc/cusSchCombo.xml 9531 dc953d50bf043fcdf91f90a512ea9abd7825325bca23f842191595d5017a9ad9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'',id:'adm_dataMap'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.focus,scwin.setCmbDscBySchNo,scwin.isValidRlno,scwin.getReadOnly,scwin.setReadOnly,scwin.hide,scwin.show,scwin.getCmbDsc,scwin.ㅎㄷㅅ쳐누ㅐ'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
 * @name refGbn
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 고객번호 종류 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
 */

/**
 * @property
 * @name ref
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 고객번호 dataMap과 컴포넌트를 바인딩할 때 사용. 
 *  "data:" prefix를 추가하여 data:[DataMap ID].[Key id] 형태로 지정해야 함. 
 * 예) data:dataMap1.dept
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

// 전역변수

scwin.onpageload = function () {
  scwin.option = $p.getOptions();
  let dataMap = "";

  // 속성 refGbn 확인
  if (!$c.util.isEmpty($p, scwin.option.refGbn)) {
    const dataObj = scwin.option.refGbn.replaceAll("data:", "").split(".");
    if ($c.util.isEmpty($p, dataMap)) {
      dataMap = dataObj[0];
      adm_dataMap.setScope(`../${dataMap}`);
    }
    cmb_schGbn.setRef(`data:adm_dataMap.${dataObj[1]}`);
  }

  // 속성 ref 확인
  if (!$c.util.isEmpty($p, scwin.option.ref)) {
    const dataObj = scwin.option.ref.replaceAll("data:", "").split(".");
    if ($c.util.isEmpty($p, dataMap)) {
      dataMap = dataObj[0];
      adm_dataMap.setScope(`../${dataMap}`);
    }
    ipt_schNo.setRef(`data:adm_dataMap.${dataObj[1]}`);
  }

  // 속성 readOnly 확인
  if (!$c.util.isEmpty($p, scwin.option.readOnly)) {
    ipt_schNo.setReadOnly(scwin.option.readOnly);
    cmb_schGbn.setDisabled(scwin.option.readOnly);
  }

  // oninput으로 상시 입력 값 체크를 하는 경우 아래의 주석 해제하여 함수 구현
  // ipt_start.bind('oninput', scwin.oninput_ipt_calendar);
  // ipt_exit.bind('oninput', scwin.oninput_ipt_calendar);
};

/**
 * @method
 * @name focus
 * @description 웹스퀘어 컴포넌트에 포커스를 줌
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.focus = function () {
  ipt_schNo.focus();
};

/**
 * @method
 * @name setCmbDscBySchNo
 * @description 입력값을 확인하여 조회구분 콤보 세트
 * @param {string} value desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setCmbDscBySchNo = function (value) {
  let schno = $c.str.replaceAll($p, $c.str.trim($p, value), "-", "");
  if ($c.util.isEmpty($p, schno)) return;
  if (schno.length == 10) {
    //10자리 : 고객번호 or 사업자번호
    //맨 앞자리가 1이고, 가운데가 81~88인 경우 법인사업자로 인식하여 사업자번호 세트.(나머지는 고객번호 세트)
    if (schno.substring(0, 1) == "1" && schno.substring(3, 5) >= "81" && schno.substring(3, 5) <= "88") {
      //사업번호
      cmb_schGbn.setValue("2"); //사업자번호
    } else {
      cmb_schGbn.setValue("3"); //고객번호
    }
  } else if (schno.length == 13) {
    //13자리 : 실명번호 or 계좌번호

    if (scwin.isValidRlno(schno)) {
      cmb_schGbn.setValue("1"); //실명번호
    } else {
      cmb_schGbn.setValue("4"); //계좌번호
    }
  } else if (schno.length > 10) {
    // 그외는 계좌번호
    cmb_schGbn.setValue("4"); //계좌번호
  }
  ipt_schNo.setDisplayFormatter("scwin.displayFormat");
};

/**
 * @method
 * @name isValidRlno
 * @description 실명번호 여부
 * @param {string} value desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.isValidRlno = function (value) {
  const rlnostr = /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|[3][0-1])-[1-6][0-9]{6}$/;
  const lRlnoMask = $c.str.formatRlnoMasked($p, value);
  if (rlnostr.test(lRlnoMask)) return true;
  return false;
};

/**
 * @method
 * @name getReadOnly
 * @description 현재 웹스퀘어 컴포넌트에 설정된 readOnly 속성 값을 반환.
 * @param
 * @returns {Boolean} 현재 설정되어 있는 readOnly 속성
 * @hidden N
 * @exception
 * @example
 */
scwin.getReadOnly = function () {
  return ipt_schNo.getReadOnly();
};

/**
 * @method
 * @name setReadOnly
 * @description 웹스퀘어 컴포넌트의 readOnly 속성을 설정. 
 * @param {Boolean} readOnly readOnly 속성 활성화 여부(true:활성화 , false:비활성화)
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setReadOnly = function (readOnly) {
  cmb_schGbn.setReadOnly(readOnly);
  ipt_schNo.setReadOnly(readOnly);
};

/**
 * @method
 * @name hide
 * @description 컴포넌트를 화면에서 보이지 않도록 숨김.
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.hide = function () {
  grp_wrap.hide("");
};

/**
 * @method
 * @name show
 * @description 웹스퀘어 컴포넌트를 화면에 표시
 * @param 
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.show = function () {
  grp_wrap.show("");
};

/**
 * @method
 * @name getCmbDsc
 * @description selectBox의 value
 * @param 
 * @returns {String} selectBox의 value
 * @hidden N
 * @exception
 * @example
 */
scwin.getValueCmb = function () {
  return cmb_schGbn.getValue();
  ;
};

/**
 * @method
 * @name getValue
 * @description inputBox value
 * @param 
 * @returns {String} inputBox의 value
 * @hidden N
 * @exception
 * @example
 */
scwin.getValue = function () {
  return ipt_schNo.getValue();
};

/**
 * @event
 * @name ipt_schNo_onchange
 * @description input영역의 포커스를 잃었을 때 발생
 */
scwin.ipt_schNo_onchange = function (info) {
  //구분값이 있으면 변경x 
  // if ( !$c.util.isEmpty(cmb_schGbn.getValue()) && length(gBfStr_cusSchCombo) == length(schno) ) {
  if (!$c.util.isEmpty($p, cmb_schGbn.getValue()) && info.oldValue.replaceAll("-", "").length == info.newValue.replaceAll("-", "").length) return;
  scwin.setCmbDscBySchNo(info.newValue);
};

/**
 * @method
 * @name displayFormat
 * @description displayformat
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.displayFormat = function (value) {
  value = value.replaceAll("-", "");
  const gbn = cmb_schGbn.getValue();
  let rtnVal = value;
  if (gbn == "1" || gbn == "2") {
    //실명번호 or 사업자번호
    rtnVal = $c.str.formatRlnoMasked($p, value);
  } else if (gbn == "4") {
    //계좌번호
    rtnVal = $c.str.formatAcno($p, value);
  }
  return rtnVal;
};

/**
 * @event
 * @name cmb_schGbn_onchange
 * @description select가 변경되었을 때
 */
scwin.cmb_schGbn_onchange = function (info) {
  ipt_schNo.setDisplayFormatter("scwin.displayFormat");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap_period',id:'grp_wrap',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'fl',delimiter:'-',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cmb_schGbn',ref:'',style:'width: 150px;margin-right: 5px;',submenuSize:'auto','ev:onchange':'scwin.cmb_schGbn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[1] 실명번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[2] 사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[3] 고객번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[4] 계좌번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'',id:'ipt_schNo',ref:'data:dma_popupParam01.param01',style:'width: 200px;height:30px;',allowChar:'0-9-',displayFormatter:'scwin.displayFormat','ev:onchange':'scwin.ipt_schNo_onchange'}}]}]}]}]})