/*amd /cm/main/side2.xml 12213 24031a49d7f305a9c9ee2cc937f1780d3f56aee2f9c8c25d7d97525661939450 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_menu',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_menu_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'SORT_SQ',name:'SORT_SQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FAVORITE_YN',name:'FAVORITE_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MNNM',name:'MNNM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_C',name:'MENU_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPPER_ID',name:'UPPER_ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_AUTH',name:'MENU_AUTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'HELP_POPUP_YN',name:'HELP_POPUP_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DEP',name:'DEP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LVL_C',name:'MENU_LVL_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGID',name:'PGID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGM_PATHNM',name:'PGM_PATHNM',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_menuSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'GRP',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_menu',id:'ldt_menu_Lv1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'MENU_LVL_C==\'2\''}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_simpleNm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_C',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MNNM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIMNM',name:'약어메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ICON',name:'이미지',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 최대 HISTORY 저장 개수	
scwin.HISTORY_MAX_SIZE = 10;

// 메뉴 Flag
scwin.flagObj = [false, false, false];

//활성 Window 정보
scwin.activeWindow = {};
scwin.onpageload = function () {};

/**
 * @method
 * @name getInitData
 * @description 메뉴, 즐겨찾기 등의 초기 데이터를 가져온다.
 * @hidden N
 * @exception 
 */
scwin.getInitData = function () {
  dma_menuSearch.setJSON({
    "GRP": "1",
    "EMP": "2"
  });
  const searchCodeGrpOption = {
    id: "sbm_InitCont",
    action: "/menu/all.ml",
    // action : "/data/sampleData/menu_sample.json",
    ref: "dma_menuSearch",
    target: "dlt_menu",
    isProcessMsg: false,
    submitDoneHandler: scwin.initDataCallback
  };
  $c.sbm.executeSubmit($p, searchCodeGrpOption);
};

/**
 * @method
 * @name initDataCallback
 * @description 초기 데이터를 가져온 직후 동작하는 callback 함수
 * @hidden N
 * @exception 
 */
scwin.initDataCallback = async function () {
  // $p.parent().pfm_header.getWindow().txt_empNm.setValue(dma_defInfo.get("EMP_NM"));
  // $p.parent().pfm_header.getWindow().txt_empCd.setValue(dma_defInfo.get("EMP_CD"));

  console.log("@@@@@@@@@@@@@@@@@@@ side.xml > 메뉴경로에 /ui/ 와 .xml 붙여주기");
  for (let i = 0; i < dlt_menu.getRowCount(); i++) {
    const path = dlt_menu.getCellData(i, "PGM_PATHNM");
    if (path.length > 0) {
      dlt_menu.setCellData(i, "PGM_PATHNM", "/ui/" + dlt_menu.getCellData(i, "PGM_PATHNM") + ".xml");
    }
  }

  //1레벨 메뉴 그리기
  scwin.init_gen();
  $c.data.menuComp = dlt_menu; //전체 공통 영역에 메뉴리스트 데이터 변수 설정

  let option = {
    isHistory: true,
    closable: false
  };
  const layout = $p.main().main.getLayoutId();
  if (layout == "S") {
    const menuCd = $w.getParameter("menuCd");
    if ($c.util.isEmpty($p, menuCd)) {
      $c.win.openMenu($p, "메인", "/cm/main/main.xml", "MAIN", null, option);
    } else {
      const menuInfo = dlt_menu.getMatchedJSON("MENU_C", menuCd);
      if (menuInfo.length > 0 && !$c.util.isEmpty($p, menuInfo[0].PGM_PATHNM)) {
        const option = {
          isHistory: true
        };
        return $c.win.openMenu($p, menuInfo[0].MNNM, menuInfo[0].PGM_PATHNM, menuInfo[0].MENU_C, null, option);
      }
    }
  } else {
    await $c.win.openMenu($p, "메인", "/cm/main/main.xml", "MAIN", null, option);
    (async function openSideMenu(tabIndex) {
      const menuCd = $w.getParameter("menuCd");
      if ($c.util.isEmpty($p, menuCd) === false) {
        const menuInfo = dlt_menu.getMatchedJSON("MENU_C", menuCd);
        if (menuInfo.length > 0 && !$c.util.isEmpty($p, menuInfo[0].PGM_PATHNM)) {
          const option = {
            isHistory: true
          };
          await $c.win.openMenu($p, menuInfo[0].MNNM, menuInfo[0].PGM_PATHNM, menuInfo[0].MENU_C, null, option);
        }
      }
    })();
  }
};

/**
 * @method
 * @name init_gen
 * @description 최초화면 로딩 시 셋팅될 1depth Menu를 만든다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.init_gen = function () {
  //임시
  const simpleNm = [{
    MENU_C: "010000000",
    MNNM: "고액현금거래보고",
    SIMNM: "CTR",
    ICON: "lnb-icon-ctr"
  }, {
    MENU_C: "020000000",
    MNNM: "혐의거래보고",
    SIMNM: "STR",
    ICON: "lnb-icon-str"
  }, {
    MENU_C: "030000000",
    MNNM: "고객확인의무",
    SIMNM: "KYC",
    ICON: "lnb-icon-kyc"
  }, {
    MENU_C: "040000000",
    MNNM: "업무공통",
    SIMNM: "업무공통",
    ICON: "lnb-icon-common"
  }, {
    MENU_C: "050000000",
    MNNM: "RBA 평가관리",
    SIMNM: "RBA",
    ICON: "lnb-icon-rba"
  }, {
    MENU_C: "070000000",
    MNNM: "KoFIU 위험평가",
    SIMNM: "KoFIU",
    ICON: "lnb-icon-kofiu"
  }, {
    MENU_C: "080000000",
    MNNM: "요주의인물",
    SIMNM: "WLF",
    ICON: "lnb-icon-wlf"
  }, {
    MENU_C: "090000000",
    MNNM: "제3자 고객확인",
    SIMNM: "제3자",
    ICON: "lnb-icon-third"
  }, {
    MENU_C: "990000000",
    MNNM: "시스템관리",
    SIMNM: "시스템관리",
    ICON: "lnb-icon-system"
  }];
  dlt_simpleNm.setJSON(simpleNm);
  // const first = ldt_menu_Lv1.getAllJSON();//dlt_menu.getMatchedJSON("MENU_LVL_C", 2);

  for (let i = 0; i < ldt_menu_Lv1.getRowCount(); i++) {
    const dataObj = ldt_menu_Lv1.getRowJSON(i);
    const menuCode = dataObj.MENU_C;
    let menuName = dataObj.MNNM;
    const simpJSON = dlt_simpleNm.getMatchedJSON("MENU_C", menuCode, true);
    if (simpJSON.length > 0) {
      menuName = simpJSON[0].SIMNM; //임시로 약어명세팅
    }
    const idx = gen_sideMenu.insertChild();

    //메뉴명 setting
    const menu1 = gen_sideMenu.getChild(idx, "spa_menuLv1");
    menu1.setValue(menuName);
    menu1.setUserData('menuCode', menuCode);
    const img1 = gen_sideMenu.getChild(idx, "spa_menuImg");
    img1.addClass(simpJSON[0].ICON);

    //lv2 메뉴 setting
    const genMenu2 = gen_sideMenu.getChild(idx, "gen_2depth");
    const menu2JSON = dlt_menu.getMatchedJSON("UPPER_ID", menuCode, true);
    if (menu2JSON.length > 0) {
      for (let i2 = 0; i2 < menu2JSON.length; i2++) {
        const idxlv2 = genMenu2.insertChild();
        const menu2 = genMenu2.getChild(idxlv2, "spa_2depth");
        menu2.setValue(menu2JSON[i2].MNNM);
        menu2.setUserData('menuCode', menu2JSON[i2].MENU_C);

        //lv3 메뉴 setting
        const genMenu3 = genMenu2.getChild(idxlv2, "gen_3depth");
        const menu3JSON = dlt_menu.getMatchedJSON("UPPER_ID", menu2JSON[i2].MENU_C, true);
        if (menu3JSON.length > 0) {
          for (let i3 = 0; i3 < menu3JSON.length; i3++) {
            const idxlv3 = genMenu3.insertChild();
            const menu3Cd = genMenu3.getChild(idxlv3, "spa_menu3Cd");
            menu3Cd.setValue(`[${menu3JSON[i3].MENU_C}]`);
            const menu3Nm = genMenu3.getChild(idxlv3, "spa_menu3Nm");
            menu3Nm.setValue(menu3JSON[i3].MNNM);
            genMenu3.getChild(idxlv3, "grp_3depthMenu").setUserData('menuCode', menu2JSON[i2].MENU_C);
          }
        }
      }
    } else {
      //하위 메뉴가 없는 경우는????
    }

    // no_depth Class
    // const length = dlt_menu.getMatchedJSON("UPPER_ID", dataObj.MENU_C).length
    // if (length <= 0) gen_sideMenu.getChild(idx, 'grp_1depth').addClass('no_depth');
  }
};
scwin.spa_2depth_onclick = function (e) {
  const idx = this.getGeneratedIndex();
  const menu3 = this.getGenerator().getChild(idx, "gen_3depth");
  ;
  if (menu3.hasClass("active")) {
    menu3.removeClass("active");
  } else {
    menu3.addClass("active");
  }

  // this.getGenerator().getChildren()[1];
  this.getGenerator().getChild(idx, "");

  //      $('.list-item')[$('.list-item').hasClass('active') ? 'removeClass' : 'addClass']('active');
};
scwin.grp_3depthMenu_onclick = function (e) {
  debugger;
};
scwin.grp_thumbnail_onclick = function (e) {
  if ($p.main().grp_thum.getStyle("display") == "none") {
    $p.main().grp_thum.show("");
    $p.main().pfm_thumbnail.getWindow().scwin.openMenuInit();
  } else {
    $p.main().grp_thum.hide("");
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'display: flex;height: 100vh;position: relative;padding: 0;',id:'',class:'nhbank'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left-lnb'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area-wrap fix-menu'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-list'},E:[{T:1,N:'xf:group',A:{tagname:'a',id:'',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-dash'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'대시보드',class:'lnb-title'}}]},{T:1,N:'xf:group',A:{tagname:'a',id:'',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-bookmark'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'즐겨찾기',class:'lnb-title'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-list'},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_sideMenu',class:''},E:[{T:1,N:'xf:group',A:{id:'grp_lv1Btn',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'spa_menuImg',label:'',class:'lnb-icon lnb-icon-ctr'}},{T:1,N:'w2:span',A:{style:'',id:'spa_menuLv1',label:'CTR',class:'lnb-title'}},{T:1,N:'xf:group',A:{class:'lnb-side',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'side-up',id:'grp_search',style:''},E:[{T:1,N:'xf:input',A:{id:'ibx_searchMenu',placeholder:'비밀번호, 화면 명',style:''}},{T:1,N:'w2:span',A:{id:'spa_lv1Title',label:'고액현금거래보고',style:''}}]},{T:1,N:'xf:group',A:{class:'side-down',id:'grp_2depthList',style:''},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_2depth',class:'side-list'},E:[{T:1,N:'w2:span',A:{class:'title-txt',id:'spa_2depth',label:'보고서 관리',style:'','ev:onclick':'scwin.spa_2depth_onclick'}},{T:1,N:'w2:generator',A:{style:'',id:'gen_3depth',class:'list-item'},E:[{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'grp_3depthMenu',class:'a-box','ev:onclick':'scwin.grp_3depthMenu_onclick'},E:[{T:1,N:'w2:span',A:{style:'',id:'spa_menu3Cd',label:'[CT01020]'}},{T:1,N:'w2:span',A:{style:'',id:'spa_menu3Nm',label:'고액현금거래 점검/결재현황'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-list'},E:[{T:1,N:'xf:group',A:{tagname:'a',id:'',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-system'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'시스템관리',class:'lnb-title'}}]},{T:1,N:'xf:group',A:{tagname:'a',id:'grp_thumbnail',class:'lnb-item','ev:onclick':'scwin.grp_thumbnail_onclick'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-thumbnail'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'썸네일',class:'lnb-title'}}]}]}]}]}]}]}]}]}]})