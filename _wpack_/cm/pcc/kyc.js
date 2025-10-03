/*amd /cm/pcc/kyc.xml 2660 c0d61bc310a37615849d1385fb51a9b8ead0a29a6fad86518d2d79f75f9dcb4d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

/**
 * 평가산출내역팝업
 * 전달 파라메터 
        PTTN_KEY_YM,
        CUSNO,
        KYC_SQNO,
        PSCRP_DSC,
        EVL_DT,

        RLNO,
        CUSNM,
        WK_DSC,
        MODL_DSC,
        BTWK_BAS_YM ,
        MSF_AGNT_DSC
 */
scwin.popupEvlClcnBrk = function (params) {
  getCount(params).then(function (cnt) {
    console.log(cnt);
    if (cnt) {
      // 팝업 옵션
      const options = {
        id: "popup01",
        type: "wframePopup",
        popupName: "KY02101",
        width: 1200,
        height: 700
      };
      // 셋팅될 파라메터  

      if (cnt.I_MODL_CNT > 0 && cnt.BS_MODL_CNT > 0) {
        params.DSC_VAL = '1';
        $c.win.openPopup($p, "/ui/KY/KY02101.xml", options, params);
      } else if (cnt.I_MODL_CNT > 0 && !(cnt.BS_MODL_CNT > 0)) {
        params.DSC_VAL = '2';
        $c.win.openPopup($p, "/ui/KY/KY02101.xml", options, params);
      } else if (!(cnt.I_MODL_CNT > 0) && cnt.BS_MODL_CNT > 0) {
        params.DSC_VAL = '3';
        $c.win.openPopup($p, "/ui/KY/KY02101.xml", options, params);
      } else {
        alert('위험평가 산출내역이 없습니다.');
      }
    }
  });
  function getCount(params) {
    return new Promise((resolve, reject) => {
      $c.data.createDataMap($p, "dma_ra_count_search", ["PTTN_KEY_YM", "CUSNO", "KYC_SQNO", "PSCRP_DSC", "EVL_DT"], ["파티션키년월", "고객번호", "KYC일련번호", "개인법인구분코드", "평가일자"]);
      var dma_ra_count_search = $p.getComponentById("dma_ra_count_search");
      dma_ra_count_search.setJSON(params);
      $c.sbm.executeSubmit($p, {
        id: "sbm_KY02101",
        action: "/KY02101/count.ml",
        ref: "dma_ra_count_search",
        // target      : "dma_count" ,
        submitDoneHandler: function (e) {
          resolve(e.responseJSON);
        },
        submitErrorHandler: function (e) {
          reject(e);
        }
      });
    });
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})