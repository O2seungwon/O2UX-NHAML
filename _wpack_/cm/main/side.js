/*amd /cm/main/side.xml 32749 31814f22b9c3b2b78b084e5ec75c2f5ca22f0fe204e62ad154c9d75ec7d9aa62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_menu',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_menu_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'SORT_SQ',name:'SORT_SQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FAVORITE_YN',name:'FAVORITE_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MNNM',name:'MNNM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_C',name:'MENU_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPPER_ID',name:'UPPER_ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_AUTH',name:'MENU_AUTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'HELP_POPUP_YN',name:'HELP_POPUP_YN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DEP',name:'DEP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LVL_C',name:'MENU_LVL_C',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGID',name:'PGID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PGM_PATHNM',name:'PGM_PATHNM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_CDNM',name:'메뉴코드_명칭',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_menu',id:'ldt_menu_Lv1'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'MENU_LVL_C==\'2\' && MENU_C!=\'990000000\''}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_simpleNm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_C',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MNNM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SIMNM',name:'약어메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ICON',name:'이미지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_fav',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_programAuthority',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SELECT',name:'조회권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SAVE',name:'저장권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_EXCEL',name:'엑셀권한여부',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_menu',id:'ldt_menuSearch'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'PGM_PATHNM != \'\''}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'dlt_menu',id:'ldt_fav'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'FAVORITE_YN==\'Y\''}]},{T:1,N:'w2:condition',A:{type:'sort'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 최대 HISTORY 저장 개수	
scwin.HISTORY_MAX_SIZE = 10;

// 메뉴 Flag
scwin.flagObj = [false, false, false];

// 제외할 시스템관리 메뉴코드
scwin.executeMenu = "990000000";

//활성 Window 정보
scwin.activeWindow = {};

// 임시 샘플메뉴
scwin.sampleMenu = [{
  "SORT_SQ": 9,
  "MNNM": "샘플메뉴",
  "MENU_C": "999900000",
  "UPPER_ID": "000000000",
  "PGM_PATHNM": "",
  "MENU_AUTH": "W",
  "DEP": "샘플메뉴",
  "MENU_LVL_C": "2"
}, {
  "SORT_SQ": 1,
  "MNNM": "샘플메뉴",
  "MENU_C": "999900010",
  "UPPER_ID": "999900000",
  "PGM_PATHNM": "",
  "MENU_AUTH": "W",
  "DEP": "기본샘플",
  "MENU_LVL_C": "3"
}, {
  "SORT_SQ": 1,
  "MNNM": "기본가이드",
  "MENU_C": "999900011",
  "UPPER_ID": "999900010",
  "PGM_PATHNM": "/ui/sample/sample01.xml",
  "MENU_AUTH": "W",
  "DEP": "기본가이드",
  "MENU_LVL_C": "4"
}, {
  "SORT_SQ": 1,
  "MNNM": "그리드",
  "MENU_C": "999900012",
  "UPPER_ID": "999900010",
  "PGM_PATHNM": "/ui/sample/sample_grid.xml",
  "MENU_AUTH": "W",
  "DEP": "그리드",
  "MENU_LVL_C": "4"
}, {
  "SORT_SQ": 1,
  "MNNM": "그리드(병합)",
  "MENU_C": "999900015",
  "UPPER_ID": "999900010",
  "PGM_PATHNM": "/ui/sample/sample_grid2.xml",
  "MENU_AUTH": "W",
  "DEP": "그리드",
  "MENU_LVL_C": "4"
}, {
  "SORT_SQ": 1,
  "MNNM": "파일업로드",
  "MENU_C": "999900013",
  "UPPER_ID": "999900010",
  "PGM_PATHNM": "/ui/sample/sample_fileupload.xml",
  "MENU_AUTH": "W",
  "DEP": "파일업로드",
  "MENU_LVL_C": "4"
}, {
  "SORT_SQ": 1,
  "MNNM": "UDC샘플",
  "MENU_C": "999900014",
  "UPPER_ID": "999900010",
  "PGM_PATHNM": "/ui/sample/sample_udc.xml",
  "MENU_AUTH": "W",
  "DEP": "UDC샘플",
  "MENU_LVL_C": "4"
}, {
  "SORT_SQ": 1,
  "MNNM": "퍼블전용",
  "MENU_C": "999900020",
  "UPPER_ID": "999900000",
  "MENU_AUTH": "W",
  "DEP": "퍼블테스트",
  "MENU_LVL_C": "3",
  "PGM_PATHNM": ""
},
//MNNM, MENU_C, PGM_PATHNM 수정!!
{
  "SORT_SQ": 1,
  "MNNM": "샘플화면",
  "MENU_C": "999900021",
  "UPPER_ID": "999900020",
  "PGM_PATHNM": "/publishing/dashboard.xml",
  "MENU_AUTH": "W",
  "DEP": "파일업로드",
  "MENU_LVL_C": "4"
}];
scwin.onpageload = function () {
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
};

/**
 * @method
 * @name getInitData
 * @description 메뉴, 즐겨찾기 등의 초기 데이터를 가져온다.
 * @hidden N
 * @exception 
 */
scwin.getInitData = function () {
  let searchMenuList = {
    id: "sbm_InitMenu",
    target: "dlt_menu",
    isProcessMsg: false,
    submitDoneHandler: scwin.initDataCallback
  };
  //bbok 임시
  if (document.domain.indexOf("127.0.0.1") == 0) {
    searchMenuList.action = "/data/sampleData/menu_sample.json";
  } else {
    searchMenuList.action = "/menu/all.ml";
  }
  $c.sbm.executeSubmit($p, searchMenuList);
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

  //샘플메뉴 추가
  //if (SEVER_TYPE == "local" || SEVER_TYPE == "dev") { /// }

  console.log("@@@@@@@@@@@@@@@@@@@ side.xml > 메뉴경로에 /ui/ 와 .xml 붙여주기");
  for (let i = 0; i < dlt_menu.getRowCount(); i++) {
    const path = dlt_menu.getCellData(i, "PGM_PATHNM");
    if (path.length > 0) {
      dlt_menu.setCellData(i, "PGM_PATHNM", "/ui/" + dlt_menu.getCellData(i, "PGM_PATHNM") + ".xml");
    }
    dlt_menu.setCellData(i, "MENU_CDNM", `[${dlt_menu.getCellData(i, "MENU_C")}] ${dlt_menu.getCellData(i, "MNNM")}`);
  }
  dlt_menu.setJSON(scwin.sampleMenu, true);

  //초기값 "R"
  dlt_menu.modifyAllStatus("R");

  //메뉴 그리기
  scwin.init_gen();

  //메뉴검색 그리기
  scwin.menuSearch();

  //즐겨찾기 그리기
  scwin.menuFavor();

  //시스템관리 메뉴가 있는 경우 메뉴 그리기
  if (dlt_menu.getMatchedJSON("MENU_C", scwin.executeMenu, true).length > 0) {
    grp_system.show("");
    scwin.menuSystem();
  }
  $c.data.menuComp = dlt_menu; //전체 공통 영역에 메뉴리스트 데이터 변수 설정

  let option = {
    isHistory: true,
    closable: false
  };
  await $c.win.openMenu($p, "메인", "/cm/main/main.xml", "MAIN", null, option);
  (async function openSideMenu(tabIndex) {
    const menuCd = $w.getParameter("menuCd");
    if ($c.util.isEmpty($p, menuCd) === false) {
      const menuInfo = dlt_menu.getMatchedJSON("MENU_C", menuCd);
      if (menuInfo.length > 0 && !$c.util.isEmpty($p, menuInfo[0].PGM_PATHNM)) {
        const option = {
          isHistory: true,
          pgmID: menuInfo[0].PGID
        };
        await $c.win.openMenu($p, menuInfo[0].MNNM, menuInfo[0].PGM_PATHNM, menuInfo[0].MENU_C, null, option);
      }
    }
  })();
};

/**
 * @method
 * @name init_gen
 * @description 최초화면 로딩 시 셋팅될 Menu를 만든다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.init_gen = function () {
  // const first = ldt_menu_Lv1.getAllJSON();//dlt_menu.getMatchedJSON("MENU_LVL_C", 2);

  for (let i = 0; i < ldt_menu_Lv1.getRowCount(); i++) {
    const dataObj = ldt_menu_Lv1.getRowJSON(i);
    const menuCode = dataObj.MENU_C;
    let menuName = dataObj.MNNM;
    let addClass = "";
    const simpJSON = dlt_simpleNm.getMatchedJSON("MENU_C", menuCode, true);
    if (simpJSON.length > 0) {
      menuName = simpJSON[0].SIMNM; //임시로 약어명세팅
      addClass = simpJSON[0].ICON;
    }
    const idx = gen_sideMenu.insertChild();

    //메뉴 header setting
    const title = gen_sideMenu.getChild(idx, "spa_lv1Title");
    title.setValue(dataObj.MNNM);
    //메뉴명 setting
    const menu1 = gen_sideMenu.getChild(idx, "spa_menuLv1");
    menu1.setValue(menuName);
    menu1.setUserData('menuCode', menuCode);
    if (addClass !== "") {
      const img1 = gen_sideMenu.getChild(idx, "spa_menuImg");
      img1.addClass(addClass);
    }

    //lv2 메뉴 setting
    const genMenu2 = gen_sideMenu.getChild(idx, "gen_2depth");
    const menu2JSON = dlt_menu.getMatchedJSON("UPPER_ID", menuCode, true);
    if (menu2JSON.length > 0) {
      for (let i2 = 0; i2 < menu2JSON.length; i2++) {
        const idxlv2 = genMenu2.insertChild();
        const menu2 = genMenu2.getChild(idxlv2, "spa_2depth");
        menu2.setValue(menu2JSON[i2].MNNM);
        menu2.setUserData('menuCode', menu2JSON[i2].MENU_C);
        menu2.setTitle(menu2JSON[i2].DEP);

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
            const grpMenu3 = genMenu3.getChild(idxlv3, "grp_3depthMenu");
            grpMenu3.setUserData('menuCode', menu3JSON[i3].MENU_C);
            grpMenu3.setTitle(menu3JSON[i3].DEP);
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

/**
 * @method
 * @name menuSystem
 * @description 최초화면 로딩 시 셋팅될 Menu를 만든다.
 * @param
 * @hidden N
 * @exception 
 */
scwin.menuSystem = function () {
  // spa_sysLv1Title.setValue("시스템관리");
  const menuCode = "";
  const menu2JSON = dlt_menu.getMatchedJSON("UPPER_ID", scwin.executeMenu, true);
  for (let i = 0; i < menu2JSON.length; i++) {
    const idx = gen_sys2depth.insertChild();
    const menu = gen_sys2depth.getChild(idx, "spa_sys2depth");
    menu.setValue(menu2JSON[i].MNNM);
    menu.setUserData('menuCode', menu2JSON[i].MENU_C);

    //lv3 메뉴 setting
    const genMenu3 = gen_sys2depth.getChild(idx, "gen_sys3depth");
    const menu3JSON = dlt_menu.getMatchedJSON("UPPER_ID", menu2JSON[i].MENU_C, true);
    if (menu3JSON.length > 0) {
      for (let i3 = 0; i3 < menu3JSON.length; i3++) {
        const idxlv3 = genMenu3.insertChild();
        const menu3Cd = genMenu3.getChild(idxlv3, "spa_sysMenu3Cd");
        menu3Cd.setValue(`[${menu3JSON[i3].MENU_C}]`);
        const menu3Nm = genMenu3.getChild(idxlv3, "spa_sysMenu3Nm");
        menu3Nm.setValue(menu3JSON[i3].MNNM);
        genMenu3.getChild(idxlv3, "grp_lv3depthMenu").setUserData('menuCode', menu3JSON[i3].MENU_C);
      }
    }
  }
};

/**
 * @event
 * @name spa_2depth_onclick
 * @description 2dept 메뉴 클릭 시 발생하는 이벤트 정의 : 메뉴 경로가 있으면 화면 open 없으면 하위메뉴 show
 */
scwin.spa_2depth_onclick = function (e) {
  const idx = this.getGeneratedIndex();
  const menuCd = this.getUserData("menuCode");
  const dataObj = dlt_menu.getMatchedJSON("MENU_C", menuCd);

  // 2Depth의 화면이 있는 경우 실행
  if (!$c.util.isEmpty($p, dataObj[0].PGM_PATHNM)) {
    scwin.menubtn_onclick(dataObj);
    // bbok - class 있으면 추가
    // this.getGenerator().getChildren()[idx].addClass('on');
  } else {
    const menu3 = this.getGenerator().getChild(idx, "gen_3depth");
    if (menu3.hasClass("active")) {
      menu3.removeClass("active");
    } else {
      menu3.addClass("active");
    }
  }
};

/**
 * @event
 * @name grp_3depthMenu_onclick
 * @description 3dept 메뉴 클릭 시 발생하는 이벤트 정의 : 메뉴이동
 */
scwin.grp_3depthMenu_onclick = function (e) {
  const menuCd = this.getUserData("menuCode");
  const dataObj = dlt_menu.getMatchedJSON("MENU_C", menuCd);

  // 3Depth의 화면이 있는 경우 실행
  if (!$c.util.isEmpty($p, dataObj[0].PGM_PATHNM)) {
    scwin.menubtn_onclick(dataObj);
    // bbok - class 있으면 추가
    // this.getGenerator().getChildren()[idx].addClass('on');
  }
};

/**
 * @event
 * @name grp_system_onclick
 * @description 시스템관리 메뉴클릭
 */
scwin.grp_system_onclick = function (e) {};

/**
 * @event
 * @name grp_thumbnail_onmouseover
 * @description 썸네일 버튼 마우스오버 시 발생하는 이벤트 정의
 */
scwin.grp_thumbnail_onmouseover = function (e) {
  if (e.target.id.indexOf("grp_thumbnail") > -1) {
    pfm_thumbnail.getWindow().scwin.openMenuInit();
  }
};

/**
 * @method
 * @name setMenuRelation
 * @description 메뉴를 open할 때 관련된 기능들을 경우에 따라 처리해준다.
 * @param <String> menuNm 메뉴 명
 * @param <String> menuUrl 메뉴 URL
 * @param <String> menuCode 메뉴 코드
 * @param <String> skipType Tree Node 선택 여부 ("Tree" || null) 
 * @hidden N
 * @exception 
 * @example
 * scwin.setMenuRelation("인사조회", "/tmp/tmp01.xml", "010001");
 * scwin.setMenuRelation("인사조회", "/tmp/tmp01.xml", "010001", "Tree");
 */
scwin.setMenuRelation = function (menuNm, menuUrl, menuCode, skipType) {
  const menuList = dlt_menu.getMatchedJSON("MENU_C", menuCode, true);
  if (menuList && menuList.length > 0) {
    const option = {
      isHistory: true,
      closable: true,
      pgmID: menuList[0].PGID
    };
    if ($c.win.openMenu($p, menuNm, menuUrl, menuCode, null, option)) {
      //bbok history 관리하는 경우 사용
      //scwin.addHistory(menuNm, menuUrl, menuCode);
    }

    /*bbok history 관리하는 경우 사용
    gen_history.removeClass("hide");
    scwin.historyResize();
    */

    // if ($p.main().main.isMobileSize() == true) {
    //     $p.main().pfm_header.getWindow().scwin.toggleMenu();
    // }

    // const deviceWidth = $c.num.parseFloat($("body").css("width"));
    // if (deviceWidth < 1280) {
    //     $p.main().grp_wrap.removeClass("show_menu");
    //     $p.main().pfm_header.getWindow().btn_toggle_menu.removeClass('on');
    // }

    //메뉴 숨김
    // grp_sidebox.hide("");
  }
};

/**
 * @method
 * @name addHistory
 * @description 최근 작업 내용을 추가한다.
 * @param {string} menuNm 메뉴명
 * @param {string} url 소스 url
 * @param {string} menuCode 메뉴코드
 * @hidden N
 * @exception 
 * @example
 * scwin.addHistory(label);
 */
scwin.addHistory = function (menuNm, url, menuCode) {
  // 맨 마지막에 열린 화면과 동일한 화면을 다시 오픈하는 경우에는 최근작업목록에 저장하지 않도록 반환한다.
  if (gen_history.getLength() >= 1) {
    const lastMenuCode = gen_history.getChild(0, "btn_History").getUserData("tmpMenuInfo").split("|")[0];
    if (menuCode === lastMenuCode) {
      return;
    }
  }
  if (gen_history.getLength() >= scwin.HISTORY_MAX_SIZE) {
    gen_history.removeChild(gen_history.getLength() - 1);
  }
  gen_history.insertChild(0);
  const curObj = gen_history.getChild(0, "btn_History");
  const tmpHH = $p.getFormattedDate(new Date(), "yyyy-MM-dd HH:mm");
  curObj.setValue(menuNm);
  curObj.setTitle("[" + tmpHH + "] " + menuNm);
  curObj.setUserData("tmpMenuInfo", menuCode + "|" + url);
};

/**
 * @method
 * @name toggle_3depthMenu
 * @description 3Depth의 클릭된 메뉴만 CSS를 적용한다.
 * @param {string} obj 2Depth Generator 객체
 * @hidden N
 */
scwin.toggle_3depthMenu = function (menuObj) {
  return;
  let d1cnt, d2cnt, d3cnt, gen;

  // 1depth 메뉴의 수
  d1cnt = gen_depth1.getLength();

  // scroll 계산을 위한 변수
  const id = grp_sidebox.getID();
  const wrap = document.getElementById(id);
  for (let i = 0; i < d1cnt; i++) {
    // 1depth 메뉴가 화면을 가진 경우
    let menuNm1 = gen_depth1.getChild(i, 'grp_1depth').getChildren();
    if (menuNm1[0].getValue() == menuObj[0].MNNM && menuObj[0].PGM_PATHNM != '') {
      gen_depth1.getChild(i, 'grp_1depth').toggleClass('on');
      const idx = dlt_menu.getMatchedIndex('MNNM', menuObj[0].MNNM);
      const element = document.getElementById(menuNm1[0].getID());
      const height = element.offsetHeight * idx;
      wrap.scrollTop = height;
    }

    // 2depth 메뉴의 수
    d2cnt = gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getLength();
    for (let j = 0; j < d2cnt; j++) {
      const dep2Grp = gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getChild(j, 'grp_2depth');
      const isNodepth = gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getChild(j, 'grp_2depth').hasClass('no_depth');
      menuNm1 = dep2Grp.getChildren();
      if (isNodepth) dep2Grp.removeClass('on');

      // 2depth 메뉴가 화면을 가진 경우
      if (menuNm1[0].getValue() == menuObj[0].MNNM && menuObj[0].PGM_PATHNM != '') {
        gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getChild(j, 'grp_2depth').toggleClass('on');
        const idx = dlt_menu.getMatchedIndex('MNNM', menuObj[0].MNNM);
        const element = document.getElementById(menuNm1[0].getID());
        const height = element.offsetHeight * idx;
        wrap.scrollTop = height;
      }

      // 3depth 메뉴의 수
      d3cnt = gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getChild(j, 'grp_2depth').getChildren()[1].getLength();
      for (let k = 0; k < d3cnt; k++) {
        gen = gen_depth1.getChild(i, 'grp_1depth').getChildren()[1].getChild(j, 'grp_2depth').getChildren()[1];
        let child = gen.getChild(k, 'grp_3depth');
        child.removeClass('on');
        let menu = child.getChildren()[0];
        if (menu.getValue() == menuObj[0].MNNM) {
          // 선택된 메뉴 CSS 적용
          child.addClass('on');
          const nid = menu.getID();
          const element = document.getElementById(nid);
          const depth3 = dlt_menu.getMatchedJSON("MENU_LVL_C", "4", true);

          // es6, es5를 사용할 경우 for를 이용한 반복 루프가 필요함.
          const idx = depth3.findIndex(obj => obj.MNNM === menuObj[0].MNNM);
          const height = element.offsetHeight * idx;
          wrap.scrollTop = height;
        }
      }
    }
  }
  ;
  return;
};

/**
 * @method
 * @name hasFavCode
 * @description 
 * 즐겨찾기 리스트에서 menuCode가 추가되어있는지 확인후 개수 반환.
 * 없으면 == 0, 있으면 > 0 
 * @hidden N
 * @exception 
 */
scwin.hasFavCode = function (menuCode) {
  return dlt_fav.getMatchedIndex("MENU_C", menuCode, true).length;
};

/**
 * @event
 * @name acb_search_onviewchange
 * @description 메뉴 검색창의 보여지는 데이터가 변경 시 발생되는 이벤트 정의
 */
scwin.acb_search_onviewchange = function (info) {
  // 메뉴 초기화
  // scwin.collapseAll();

  // 메뉴 모두 펼치기 생성
  // scwin.second_genAll();
  // scwin.third_genAll();

  // info.value 값으로 해당 메뉴 정보를 객체에 담는다.
  const menuObj = dlt_menu.getMatchedJSON('MENU_C', info.newValue);

  // menuObj로 onclick 함수를 호출한다.
  scwin.menubtn_onclick(menuObj);
};

/**
 * @event
 * @name menubtn_onclick
 * @description 메뉴 버튼 클릭 시 발생하는 이벤트 정의
 */
scwin.menubtn_onclick = function (menuObj) {
  let idx, menu, menuNm;

  // menuObj가 있는 경우 활성창 여부를 확인
  // if (menuObj != undefined) {
  //     const active = scwin.activeWindow[menuObj[0].MNNM];
  //     if (active != undefined && active == true) return;
  // };

  // menuObj에 정보가 없는 경우 직접 찾는다
  if (menuObj === undefined || menuObj === '') {
    idx = this.getGeneratedIndex();
    menu = this.getGenerator().getChildren()[idx];
    menuNm = menu.getChildren()[0].getValue();
    menuObj = dlt_menu.getMatchedJSON("MNNM", menuNm);
  }

  // 바인딩
  scwin.setMenuRelation(menuObj[0].MNNM, menuObj[0].PGM_PATHNM, menuObj[0].MENU_C);

  // 1depth 메뉴가 화면이 있고 하위 메뉴가 없으면 toggle_3depthMenu를 실행하지 않는다
  if (menuObj[0].UPPER_ID == '000000000' && menuObj[0].PGM_PATHNM != '') {
    return;
  } else {
    // CSS 적용
    scwin.toggle_3depthMenu(menuObj);
  }
};

/**
 * @event
 * @name ibx_menuSearch_onkeyup
 * @description 메뉴검색에 onkeyup 이벤트
*/
scwin.ibx_menuSearch_onkeyup = function (e) {
  const text = ibx_menuSearch.getValue();
  ldt_menuSearch.clearFilter();
  ldt_menuSearch.setCondition("filter", "PGM_PATHNM != ''");
  ldt_menuSearch.setColumnFilter({
    type: 'func',
    colIndex: 'MNNM',
    key: fn_searchFilter,
    condition: 'and',
    param: {},
    exactMatch: false
  });
  ldt_menuSearch.setColumnFilter({
    type: 'func',
    colIndex: 'MENU_C',
    key: fn_searchFilter,
    condition: 'or',
    param: {},
    exactMatch: false
  });
  spa_searchResult.setValue(text);
  scwin.menuSearch();
  function fn_searchFilter(cellData, param) {
    if (cellData.indexOf(text) > -1) {
      return true;
    } else {
      return false;
    }
  }
};

/**
 * @method
 * @name menuSearch
 * @description 메뉴검색 generator 세팅
*/
scwin.menuSearch = function () {
  const text = ibx_menuSearch.getValue() || "";
  gen_menuList.removeAll();
  for (let i = 0; i < ldt_menuSearch.getRowCount(); i++) {
    let gidx = gen_menuList.insertChild();
    const menuJSON = ldt_menuSearch.getRowJSON(i);
    const schMenu = gen_menuList.getChild(gidx, "spa_searchMenuNm");
    let menuName = "[" + menuJSON.MENU_C + "] " + menuJSON.MNNM;
    if (text != "") {
      menuName = menuName.replaceAll(text, "<span class='redFont'>" + text + "</span>");
    }
    schMenu.setValue(menuName);
    schMenu.setTitle(menuJSON.DEP);
    schMenu.setUserData("menuCode", menuJSON.MENU_C);
  }
};

/**
 * @event
 * @name menuList_onclick
 * @description 메뉴검색 결과 또는 즐겨찾기로 조회된 메뉴 클릭 시, 메뉴 이동
*/
scwin.menuList_onclick = function (e) {
  const menuCd = this.getUserData("menuCode");
  const dataObj = dlt_menu.getMatchedJSON("MENU_C", menuCd);

  // 3Depth의 화면이 있는 경우 실행
  if (!$c.util.isEmpty($p, dataObj[0].PGM_PATHNM)) {
    scwin.menubtn_onclick(dataObj);
    // bbok - class 있으면 추가
    // this.getGenerator().getChildren()[idx].addClass('on');
  }
};

/**
 * @method
 * @name menuFavor
 * @description 즐겨찾기 그리기
 */
scwin.menuFavor = function () {
  // 메뉴, 즐겨찾기 내용 표시
  // gr_tab_menu.setStyle("display", "none");
  // gr_tab_menu02.setStyle("display", "block");
  // gr_shortcut_box.setStyle("display", "none");
  // gr_search_field.removeClass("active");

  gen_fav.removeAll();

  // 즐겨찾기 메뉴 구성
  const fav = ldt_fav.getAllJSON();
  for (let i = 0; i < fav.length; i++) {
    const gIdx = gen_fav.insertChild();
    let child = gen_fav.getChild(gIdx, 'spa_favMenuNm');
    // child.setValue("[" + fav[i].MENU_C + "] " + fav[i].MNNM);
    child.setValue(fav[i].MNNM);
    child.setUserData('menuCode', fav[i].MENU_C);
    child.setTitle(fav[i].DEP);
  }
};

/**
 * @event
 * @name btn_favModify_onclick
 * @description 즐겨찾기 수정/저장
 */
scwin.btn_favModify_onclick = function (e) {
  if (btn_favModify.getValue() == "수정") {
    btn_favModify.setValue("저장");
    for (let i = 0; i < gen_fav.getLength(); i++) {
      gen_fav.getChild(i, "btn_favDelete").show("");
    }
  } else {
    //저장 클릭 시
    btn_favModify.setValue("수정");
    for (let i = 0; i < gen_fav.getLength(); i++) {
      gen_fav.getChild(i, "btn_favDelete").hide("");
    }
  }
};
}}}]},{T:1,N:'style',E:[{T:3,text:'\n    .redFont {color: var(--red01);}\n'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left-lnb'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area-wrap fix-menu'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_topList',class:'lnb-list'},E:[{T:1,N:'xf:group',A:{tagname:'a',id:'grp_dashList',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-dash'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'대시보드',class:'lnb-title'}}]},{T:1,N:'xf:group',A:{tagname:'a',id:'grp_favBtn',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-bookmark'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'즐겨찾기',class:'lnb-title'}},{T:1,N:'xf:group',A:{class:'lnb-side search',id:'grp_favTop',style:''},E:[{T:1,N:'xf:group',A:{class:'side-up',id:'grp_group9',style:''},E:[{T:1,N:'w2:span',A:{id:'spa_span8',label:'즐겨 찾는 메뉴',style:''}},{T:1,N:'xf:trigger',A:{class:'btn-close',id:'btn_favModify',style:'position: absolute;right: 20px;bottom: 20px;padding: 0px 30px;height:30px;',title:'즐겨 찾는 메뉴 수정',toolTip:'',type:'button','ev:onclick':'scwin.btn_favModify_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]}]},{T:1,N:'xf:group',A:{class:'side-down',id:'grp_favList',style:''},E:[{T:1,N:'w2:generator',A:{class:'side-list',id:'gen_fav',style:''},E:[{T:1,N:'w2:span',A:{id:'spa_favMenuNm',label:'즐겨찾기메뉴',style:'display: flex;    align-items: center;    width: calc(100% - 33px);    height: 40px;    position: relative;    border: none;    color: #333;    font-size: 18px;    font-weight: 500;    text-align: left;    cursor: pointer;    flex-direction: row;    flex-wrap: nowrap;    justify-content: flex-start;',class:'title-txt','ev:onclick':'scwin.menuList_onclick'}},{T:1,N:'xf:trigger',A:{class:'btn-close','ev:onclick':'scwin.closeMenu',id:'btn_favDelete',style:'display:none;    align-items: center;    justify-content: center;    width: 28px;    height: 28px;    padding: 0;    background: url(/cm/images/icons/close-icon24.svg) no-repeat center center / 14px 14px;    border: none;    font-size: 0;',title:'화면 닫기',toolTip:'현재 화면 닫기',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-area-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-list'},E:[{T:1,N:'xf:group',A:{class:'lnb-item',id:'grp_menuSearch',tagname:'a',style:''},E:[{T:1,N:'w2:span',A:{class:'lnb-icon lnb-icon-search',id:'',label:'',style:''}},{T:1,N:'w2:span',A:{class:'lnb-title',id:'',label:'메뉴검색',style:''}},{T:1,N:'xf:group',A:{class:'lnb-side search',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'side-up',id:'group4',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'input-search-box'},E:[{T:1,N:'xf:input',A:{class:'search-input',id:'ibx_menuSearch',placeholder:'',style:'','ev:onkeyup':'scwin.ibx_menuSearch_onkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn_cm search icon',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'span'},E:[{T:1,N:'w2:span',A:{style:'',id:'spa_span1',label:'\'',class:'fl'}},{T:1,N:'w2:span',A:{style:'',id:'spa_searchResult',label:'전체',class:'fl'}},{T:1,N:'w2:span',A:{style:'',id:'spa_span3',label:'\'에 대한 검색 결과 입니다.',class:'fl'}}]}]},{T:1,N:'xf:group',A:{class:'side-down',id:'group5',style:''},E:[{T:1,N:'w2:generator',A:{class:'side-list',id:'gen_menuList',style:''},E:[{T:1,N:'w2:span',A:{class:'title-txt',id:'spa_searchMenuNm',label:'보고서 관리',style:'','ev:onclick':'scwin.menuList_onclick',escape:'false'}}]}]}]}]},{T:1,N:'w2:generator',A:{style:'width: 100%',id:'gen_sideMenu',class:''},E:[{T:1,N:'xf:group',A:{id:'grp_lv1Btn',class:'lnb-item'},E:[{T:1,N:'w2:span',A:{style:'',id:'spa_menuImg',label:'',class:'lnb-icon lnb-icon-ctr'}},{T:1,N:'w2:span',A:{style:'',id:'spa_menuLv1',label:'CTR',class:'lnb-title'}},{T:1,N:'xf:group',A:{class:'lnb-side ',id:'grp_2deptList',style:''},E:[{T:1,N:'xf:group',A:{class:'side-up',id:'grp_search',style:''},E:[{T:1,N:'w2:span',A:{id:'spa_lv1Title',label:'고액현금거래보고',style:''}}]},{T:1,N:'xf:group',A:{class:'side-down',id:'grp_2depthList',style:''},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_2depth',class:'side-list'},E:[{T:1,N:'w2:span',A:{class:'title-txt',id:'spa_2depth',label:'보고서 관리',style:'','ev:onclick':'scwin.spa_2depth_onclick'}},{T:1,N:'w2:generator',A:{style:'',id:'gen_3depth',class:'list-item active'},E:[{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'grp_3depthMenu',class:'a-box','ev:onclick':'scwin.grp_3depthMenu_onclick'},E:[{T:1,N:'w2:span',A:{style:'',id:'spa_menu3Cd',label:'[CT01020]'}},{T:1,N:'w2:span',A:{style:'',id:'spa_menu3Nm',label:'고액현금거래 점검/결재현황'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lnb-list'},E:[{T:1,N:'xf:group',A:{tagname:'a',id:'grp_system',class:'lnb-item',style:'display: none;','ev:onclick':'scwin.grp_system_onclick'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-system'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'시스템관리',class:'lnb-title'}},{T:1,N:'xf:group',A:{class:'lnb-side',id:'grp_systemList',style:''},E:[{T:1,N:'xf:group',A:{class:'side-up',id:'grp_systemLv2',style:''},E:[{T:1,N:'w2:span',A:{id:'spa_sysLv1Title',label:'시스템관리',style:''}}]},{T:1,N:'xf:group',A:{class:'side-down',id:'grp_sys2depthList',style:''},E:[{T:1,N:'w2:generator',A:{class:'side-list',id:'gen_sys2depth',style:''},E:[{T:1,N:'w2:span',A:{class:'title-txt','ev:onclick':'scwin.spa_2depth_onclick',id:'spa_sys2depth',label:'보고서 관리',style:''}},{T:1,N:'w2:generator',A:{class:'list-item active',id:'gen_sys3depth',style:''},E:[{T:1,N:'xf:group',A:{class:'a-box','ev:onclick':'scwin.grp_3depthMenu_onclick',id:'grp_lv3depthMenu',style:'',tagname:'a'},E:[{T:1,N:'w2:span',A:{id:'spa_sysMenu3Cd',label:'[CT01020]',style:''}},{T:1,N:'w2:span',A:{id:'spa_sysMenu3Nm',label:'고액현금거래 점검/결재현황',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'a',id:'grp_thumbnail',class:'lnb-item','ev:onmouseover':'scwin.grp_thumbnail_onmouseover'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'',class:'lnb-icon lnb-icon-thumbnail'}},{T:1,N:'w2:span',A:{style:'',id:'',label:'썸네일',class:'lnb-title'}},{T:1,N:'xf:group',A:{id:'grp_thum',style:''},E:[{T:1,N:'w2:pageFrame',A:{src:'/cm/main/thumbnail.xml',style:'',id:'pfm_thumbnail',class:''}}]}]}]}]}]}]}]}]}]})