/*amd /cm/pcc/commonSt.xml 4381 fda9a1a99f108e777d0b06ff334a46715d5bdcd8f4f08f82a7da54b1dc8098aa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.DATA_PREFIX = "dlt_commonCodeST";
scwin.commonCodeList = [];

/**
 * [
 *  {
 *      compId: 'sbx_aaa',
 *      list: [
 *          { cd: '1', val: '사용' },
 *          { cd: '2', val: '미사용' }
 *      ]
 *  },
 *  {
 *      compId: 'sbx_bbb1,sbx_bbb2'
 *      list: [ {...}, {...} ]
 *  }
 * ]
 */
scwin.setCommonCombo = function (codeOpts) {
  const codeOptsLen = codeOpts ? codeOpts.length : 0;
  if (codeOptsLen < 1) {
    return;
  }
  const fieldArr = ["cd", "val"];
  let codeObj,
    dltId,
    dltIdArr = [],
    compArr,
    tmpId;
  let paramCode = [];
  const dataListOption = scwin._getCodeDataListOpts(fieldArr);
  if (!$c.util.getComponent($p, scwin.DATA_PREFIX)) {
    dataListOption.id = scwin.DATA_PREFIX;
    //$p.data.create(dataListOption);
  }
  $p.data.create(dataListOption);
  for (codeObj of codeOpts) {
    dltId = scwin.DATA_PREFIX + codeObj.compId;
    if (typeof scwin.commonCodeList[dltId] === "undefined") {
      dltIdArr.push(dltId);
      paramCode.push(codeObj.compId);
      dataListOption.id = dltId;
      $p.data.create(dataListOption);
      const dlt = $c.util.getComponent($p, dltId);
      dlt.setJSON(codeObj.list);
    } else {
      dataListOption.id = dltId;
      $p.data.create(dataListOption);
      let dataListObj = $p.getComponentById(dltId);
      dataListObj.setJSON(scwin.commonCodeList[dltId]);
    }
    compArr = codeObj.compId.replaceAll(" ", "").split(",");
    for (tmpId of compArr) {
      const comp = $c.util.getComponent($p, tmpId);
      if (!$c.util.isEmpty($p, comp)) {
        // component 있을 경우
        if (comp.getPluginName() === "selectbox") {
          comp.setNodeSet("data:" + dltId, "val", "cd");
        } else {
          comp.setNodeSet("data:" + dltId, "val", "cd");
        }
      }
    }
  }
};
scwin._getCodeDataListOpts = function (infoArr) {
  const option = {
    "type": "dataList",
    "option": {
      "baseNode": "list",
      "repeatNode": "map"
    },
    "columnInfo": []
  };
  for (let ky of infoArr) {
    option.columnInfo.push({
      "id": ky
    });
  }
  return option;
};

/**
 * @description GRID MULIT 포커스 설정(컬럼데이터와 매칭되는 로우에 포커스)
 * @param {Object} girdObj 그리드 객체
 * @param {Object} dltObj DataList 객체
 * @param {String} matchedCol
 * @param {string} matchedData
 */
scwin.setMultiFocusRow = function (gridObj, dltObj, matchedCol, matchedData) {
  const rsRowArr = dltObj.getMatchedIndex(matchedCol, matchedData);
  if (rsRowArr.length > 0) {
    let cellsPosition = [];
    for (let i = 0; i < rsRowArr.length; i++) {
      let obj = {
        row: rsRowArr[i],
        col: 0
      };
      cellsPosition.push(obj);
    }
    gridObj.setMultiFocus(cellsPosition);
  }
};

/**
 * @description 날짜기간 유효성 체크
 * @param {String} 시작일자 id
 * @param {String} 종료일자 id
 * @param {String} strStMsg
 * @param {String} strEdMsg
 */
scwin.chkPrdDate = function (stId, edId, strStMsg, strEdMsg) {
  var stObj = $p.getComponentById(stId);
  var edObj = $p.getComponentById(edId);
  let stMsg = "시작일자";
  if (!$c.util.isEmpty($p, strStMsg)) {
    stMsg = strStMsg;
  }
  let edMsg = "종료일자";
  if (!$c.util.isEmpty($p, strEdMsg)) {
    edMsg = strEdMsg;
  }

  // 날짜기간 유효성 체크
  if (!$c.util.isEmpty($p, stObj.getValue()) && !$c.util.isEmpty($p, edObj.getValue())) {
    if (stObj.getValue() > edObj.getValue()) {
      $c.win.alert($p, stMsg + "가 " + edMsg + "보다 클 수 없습니다.");
      stObj.setValueCancel(); // 변경되기 전 값으로
      edObj.setValueCancel(); // 변경되기 전 값으로
    }
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})