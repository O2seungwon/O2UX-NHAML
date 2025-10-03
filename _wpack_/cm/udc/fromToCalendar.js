/*amd /cm/udc/fromToCalendar.xml 23368 fffd8d12e7f79da52050dd8eab361d4fbd1a8dc454d613c12fe55a8ae756d5ad */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:aliasDataMap',A:{scope:'',id:'adm_dataMap'}}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.businessDay_Calculate,scwin.calulateDays,scwin.day_Calcultate,scwin.formattedDate,scwin.getFromInValue,scwin.getFromValue,scwin.getToInValue,scwin.getToValue,scwin.month_calculate,scwin.parseStringDate,scwin.quareterSelect,scwin.removeCellFocus,scwin.setBusinessDays,scwin.setDisplayLocation,scwin.setTimeDisplay,scwin.setValue,scwin.validationDate'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
 * @name refTo
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 종료일자의 ref를 설정.
 * 바인딩한 DataMap의 Key
 * "data:" prefix를 추가하여 data:[dataMap ID].[Key id] 형태로 지정해야 함.
 */

/**
 * @property
 * @name refFrom
 * @category 01.Basic & ETC
 * @type bindColumn
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 시작일자의 ref를 설정.
 * 바인딩한 DataMap의 Key
 * "data:" prefix를 추가하여 data:[dataMap ID].[Key id] 형태로 지정해야 함.
 */

/**
 * @property
 * @name readOnly
 * @category 01.Basic & ETC
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description desc
 */

// 전역변수
scwin.isOpen = false;
scwin.previousDate = ['from', 'to'];
scwin.onpageload = function () {
  scwin.option = $p.getOptions();
  let dataMap = "";

  // 속성 refFrom 확인
  if (!$c.util.isEmpty($p, scwin.option.refFrom)) {
    const dataObj = scwin.option.refFrom.replaceAll("data:", "").split(".");
    if ($c.util.isEmpty($p, dataMap)) {
      dataMap = dataObj[0];
      adm_dataMap.setScope(`../${dataMap}`);
    }
    ipt_start.setRef(`data:adm_dataMap.${dataObj[1]}`);
  }

  // 속성 refTo 확인
  if (!$c.util.isEmpty($p, scwin.option.refTo)) {
    const dataObj = scwin.option.refTo.replaceAll("data:", "").split(".");
    if ($c.util.isEmpty($p, dataMap)) {
      dataMap = dataObj[0];
      adm_dataMap.setScope(`../${dataMap}`);
    }
    ipt_exit.setRef(`data:adm_dataMap.${dataObj[1]}`);
  }

  // 속성 period 확인

  scwin.setDisplayLocation();
  scwin.focusRemove();
  // oninput으로 상시 입력 값 체크를 하는 경우 아래의 주석 해제하여 함수 구현
  // ipt_start.bind('oninput', scwin.oninput_ipt_calendar);
  // ipt_exit.bind('oninput', scwin.oninput_ipt_calendar);
};

/**
 * @method
 * @name focusRemove
 * @description 최초 load시 To Calendar에 focus를 없앤다.
 * @hidden N
 * @exception 
 */
scwin.focusRemove = function () {
  const obj = document.getElementsByClassName('w2calendar_selected');
  const selObj = document.getElementsByClassName('w2calendar_today');

  // ES6
  Array.from(obj).forEach(obj => {
    if (obj.id.includes('exit') || obj.id.includes('start')) obj.classList.remove('w2calendar_selected');
  });
  Array.from(selObj).forEach(selObj => {
    selObj.classList.remove('w2calendar_today');
  });
};

/**
 * @method
 * @name setDisplayLocation
 * @description UDC의 위치에 따른 Calendar Display의 위치를 동적으로 설정한다.
 * 예시) udc가 왼쪽 가장자리인 경우 Calendar Display는 오른쪽으로 호출된다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.setDisplayLocation = function () {
  // getBoundingClient
  const parent = document.getElementById($c.win.getParent($p).$p.getFrameId()).getBoundingClientRect();
  const x = grp_wrap.getPosition('left');
  const y = grp_wrap.getPosition('top');
  let left, top;
  if (parent.width - x < 560) {
    const space = parent.width - x - grp_wrap.getSize('outerMarginWidth');
    left = parent.width - (560 + space);
  }
  if (parent.height - y < 440) {
    const space = parent.height - y - grp_wrap.getSize('outerMarginHeight');
    top = parent.height - (450 + space); // calendar height 429, input outerHeight 32, calendar margin-top 8px;
  }
  grp_cal.setPosition(left, top);
};

/**
 * @method
 * @name calulateDays
 * @description 선택한 날짜 사이의 간격을 계산한다. 
 * @param {string} start fromCalendar의 Date 값
 * @param {string} finish toCalendar의 Date 값
 * @param {boolean} isAbs 절대값 사용여부 default : true;
 * @retrun {Number} diff from과 to의 날짜사이 간격 계산 값.
 * @exception 
 * @example const days = scwin.calulateDays(start, finish);
 */
scwin.calulateDays = function (start, finish, isAbs) {
  start = start instanceof Date ? start : new Date(start);
  finish = finish instanceof Date ? finish : new Date(finish);
  isAbs = isAbs || true;
  const diff = calculate(start, finish, isAbs);

  // isDisplay 표시인 경우 TextBox 표시.
  if (diff > 0) tbx_period.setValue(diff + '일');
  return diff;
  function calculate(start, finish, isAbs) {
    start = start.getTime();
    finish = finish.getTime();

    // 당일을 1일로 계산
    let diff = (finish - start) / (1000 * 60 * 60 * 24) + 1;
    return isAbs ? Math.floor(diff) : diff;
  }
};

/**
 * @method
 * @name formattedDate
 * @description string형태의 Date값을 Date객체로 formatting 한다.
 * @param {string} date string형태로 들어온 날짜 값
 * @return {Date} date Date객체로 변환된 date 값.
 * @hidden N
 * @exception 
 * @example
 * const today = cal_start.getValue(); 
 * const date = scwin.formattedDate(today);
 */
scwin.formattedDate = function (date) {
  let year, month, day;
  year = date.slice(0, 4);
  month = date.slice(4, 6);
  day = date.slice(6, 8);
  return new Date(year, month - 1, day);
};

/**
 * @method
 * @name parseStringDate
 * @description Date객체를 Calendar의 파라미터로 사용할 수 있게 변환한다
 * @param {Date} date string 형태로 전환하려는 Date값
 * @hidden N
 * @exception 
 * @example
 * const date = scwin.parseStringDate(today);
 */
scwin.parseStringDate = function (date) {
  date = new Date(date);
  let year, month, day, hour, minute, second;
  year = date.getFullYear().toString();
  month = (date.getMonth() + 1).toString().padStart(2, '0');
  day = date.getDate().toString().padStart(2, '0');
  return year + month + day;
};

/**
 * @method
 * @name validationDate
 * @description 날짜의 유효성을 검사한다.
 * @param {string} date string형태의 날짜값
 * @return {boolean} res 유효성 검사 결과 [true, false]
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.validationDate = function (date) {
  // 입력 값이 8자리 이하인 경우 무조건 false
  if (date.length < 8) return false;
  let year = parseInt(date.slice(0, 4));
  let month = parseInt(date.slice(4, 6));
  let day = parseInt(date.slice(6, 8));
  if (year < 1970 || year > 2100) return false;
  if (month < 0 || month > 12) return false;
  const daysInMonth = [31, $c.date.isLeafYear($p, date) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day < 1 || day > daysInMonth[month - 1]) return false;
  return true;
};

/**
 * @method
 * @name getFromInValue
 * @description From Calendar로 설정된 InputBox의 값을 가져온다.
 * @param
 * @returns {string} From Calendar로 설정되거나 사용자가 직접 입력한 InputBox의 값
 * @hidden N
 * @exception
 * @example const fromInput = udc_fromToCalendar.getFromInValue();
 */
scwin.getFromInValue = function () {
  return ipt_start.getValue();
};

/**
 * @method
 * @name getToInValue
 * @description To Calendar로 설정된 inputBox의 값을 가져온다.
 * @param
 * @returns {string} To Calendar로 설정되거나 사용자가 직접 입력한 InputBox의 값.
 * @hidden N
 * @exception
 * @example const toInput = udc_fromToCalendar.getToInValue();
 */
scwin.getToInValue = function () {
  return ipt_exit.getValue();
};

/**
 * @method
 * @name setValue
 * @description inputBox에 date값을 set하고 calendar의 값을 셋팅.
 * @param {string} date 날짜형식의 string 파라미터
 * @param {Number} division start, exit 구분자 0은 start, 1은 exit
 * @hidden N
 * @exception
 */
scwin.setValue = function (date, division) {
  if (division == 0) {
    ipt_start.setValue(date);
    cal_start.gotoCalendar(date);
  } else if (division == 1) {
    ipt_exit.setValue(date);
    cal_exit.gotoCalendar(date);
  }
};

/**
 * @method
 * @name setClassFromToCalendar
 * @description From Calendar에 설정된 날짜와 To Calendar의 설정된 날짜값 사이의 일별로 CSS Class를 적용한다.
 * @param {string} fromDate FromCalendar에 설정된 날짜
 * @param {string} toDate ToCalendar에 설정된 날짜
 * @param {Number} diff From과 To사이의 날짜 간격일자
 * @hidden N
 * @exception
 */
scwin.setClassFromToCalendar = function (fromDate, toDate, diff) {
  // 20241015 -> 20241031 => 16부터 30까지 selected_area class 적용
  let from = fromDate instanceof Date ? scwin.parseStringDate(fromDate) : fromDate; // 20241201
  let to = toDate instanceof Date ? scwin.parseStringDate(toDate) : toDate; // 20241205
  let start = cal_start;
  let exit = cal_exit;

  // 초기화
  start.removeAllCellClass();
  exit.removeAllCellClass();
  if (diff === 1) {
    start.setCellClass(from, 'w2calendar_selected');
    exit.setCellClass(from, 'w2calendar_selected');
    return;
  }
  for (let i = 1; i <= diff; i++) {
    i != 1 ? start.setCellClass(from, 'selected_area') : start.setCellClass(from, 'date_start');
    diff != i ? exit.setCellClass(from, 'selected_area') : exit.setCellClass(from, 'date_end');
    from = scwin.formattedDate(from, true);
    from = new Date(from.setDate(from.getDate() + 1));
    from = scwin.parseStringDate(from, true);
  }
  ;

  // today css 삭제
  scwin.delete_todayCSS();
};

/**
 * @method
 * @name delete_todayCSS
 * @description today, 오늘 날짜에 동작하는 엔진 CSS 제거
 * @hidden N
 * @exception
 */
scwin.delete_todayCSS = function () {
  const obj = document.getElementsByClassName('w2calendar_today');
  Array.from(obj).forEach(obj => {
    obj.classList.remove('w2calendar_today');
  });
};

/**
 * @method
 * @name setFromInValue
 * @description From Input과 calendar에 값을 설정한다. TimeMode에 따라 달라진다. 형식에 맞지 않는 경우 값이 대입되지 않는다.
 * @param {string} date FromCalendar 및 input에 설정할 값. ex) '20241201', '202412011230', '20241201123030'
 * @hidden N
 * @exception
 */
scwin.setFromInValue = function (date) {
  const day = date.slice(0, 8);
  if (scwin.validationDate(day)) {
    ipt_start.setValue(day);
    cal_start.gotoCalendar(day);
  } else {
    return;
  }
};

/**
 * @method
 * @name setToInValue
 * @description To Input과 calendar에 값을 설정한다. TimeMode에 따라 달라진다. 형식에 맞지 않는 경우 값이 대입되지 않는다.
 * @param {string} date ToCalendar 및 input에 설정할 값.
 * @hidden N
 * @exception
 */
scwin.setToInValue = function (date) {
  const day = date.slice(0, 8);
  if (scwin.validationDate(day)) {
    ipt_exit.setValue(day);
  } else {
    return;
  }
};

//Event
/**
 * @event
 * @name calendarValue_onviewchange
 * @description input의 데이터를 사용자가 편집했을 때 실행되는 이벤트
 * @param {Object} info 이전 값, 새로 입력한 값의 정보가 있는 객체
 * @example
 */
scwin.calendarValue_onviewchange = function (info) {
  const res = scwin.validationDate(info.newValue);
  let inStart = ipt_start.getValue();
  let inFinish = ipt_exit.getValue();
  const division = this.getUserData('userData1');
  let today = new Date(new Date().toDateString());
  let todayStr = scwin.parseStringDate(today, true);
  if (res) {
    if (division == 'start') {
      if (!$c.util.isEmpty($p, inFinish) && scwin.validationDate(inFinish)) {
        const val = scwin.calulateDays(scwin.formattedDate(inStart), scwin.formattedDate(inFinish), false);
        val > 0 ? ipt_start.setValue(info.newValue) : ipt_start.setValue(todayStr);
      }
      cal_start.gotoCalendar(ipt_start.getValue());
      scwin.previousDate[0] = ipt_start.getValue();
    } else if (division == 'exit') {
      if (!$c.util.isEmpty($p, inStart) && scwin.validationDate(inStart)) {
        const val = scwin.calulateDays(scwin.formattedDate(inStart), scwin.formattedDate(inFinish), false);
        val > 0 ? ipt_exit.setValue(info.newValue) : ipt_exit.setValue(todayStr);
      }
      cal_exit.gotoCalendar(ipt_exit.getValue());
      scwin.previousDate[1] = ipt_exit.getValue();
    }
  } else {
    setInvalidData(division);
  }

  // CSS Class 적용
  if (!$c.util.isEmpty($p, inStart) && !$c.util.isEmpty($p, inFinish)) {
    const diff = scwin.calulateDays(scwin.formattedDate(inStart), scwin.formattedDate(inFinish));
    scwin.setClassFromToCalendar(inStart, inFinish, diff);
  }

  // 직전일자 전역변수 저장
  if (division === 'start') {
    scwin.previousDate[0] = ipt_start.getValue();
  } else if (division === 'exit') {
    scwin.previousDate[1] = ipt_exit.getValue();
  }
  scwin.delete_todayCSS();

  // 유효성 검사를 통과하지 못한 경우의 Date set
  function setInvalidData(division) {
    if (division == 'start' && !$c.util.isEmpty($p, inFinish)) {
      // To 값이 있는 상태에서 From의 유효성 검사가 false인 경우 To의 -1로 보낸다
      inStart = scwin.formattedDate(inFinish);
      inStart = new Date(inStart.setDate(inStart.getDate() - 1));
      inStart = scwin.parseStringDate(inStart);
      scwin.setValue(inStart, 0);
    } else if (division == 'exit' && !$c.util.isEmpty($p, inStart)) {
      // From 값이 있는 상태에서 To의 유효성 검사가 false인 경우 From의 +1 보낸다
      inFinish = scwin.formattedDate(inStart);
      inFinish = new Date(inFinish.setDate(inFinish.getDate() + 1));
      inFinish = scwin.parseStringDate(inFinish);
      scwin.setValue(inFinish, 1);
    } else {
      // From 또는 To 값이 없는 경우 오늘 날짜로 보낸다.
      if (division == 'start') {
        scwin.setValue(todayStr, 0);
      } else if (division == 'exit') {
        scwin.setValue(todayStr, 1);
      }
    }
  }
};

/**
 * @method
 * @name validationTime
 * @description 시간의 유효성을 검사한다.
 * @param {string} time string형태의 시간값
 * @return {boolean} res 유효성 검사 결과 [true, false]
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.validationTime = function (time) {
  // string이 아니거나, 지원하지 않는 길이는 false 반환
  if (typeof time !== 'string' || time.length !== 4 && time.length !== 6) return false;
  if (time.length === 4) {
    const hours = parseInt(time.substring(0, 2), 10);
    const minute = parseInt(time.substring(2, 4), 10);
    return hours >= 0 && hours <= 24 && minute < 60 && minute >= 0;
  }
  if (time.length === 6) {
    const hours = parseInt(time.substring(0, 2), 10);
    const minute = parseInt(time.substring(2, 4), 10);
    const second = parseInt(time.substring(4, 6), 10);
    return hours >= 0 && hours <= 24 && minute < 60 && minute >= 0 && second >= 0 && second < 60;
  }
};

/**
 * @event
 * @name calendar_ondateselect
 * @description calendar의 data가 선택됐을 때 실행되는 이벤트
 * @param {Object} date 사용자가 클릭한 날짜 값
 * @example
 */
scwin.calendar_ondateselect = function (date, dateObject) {
  const division = this.getUserData('userData1');
  let start = cal_start.getValue();
  let finish = cal_exit.getValue();
  let current;
  let inStart = ipt_start.getValue();
  let inFinish = ipt_exit.getValue();
  start = scwin.formattedDate(start);
  finish = scwin.formattedDate(finish);
  if (division == 'start') {
    current = scwin.parseStringDate(finish, true);
    if (!$c.util.isEmpty($p, inFinish) && scwin.validationDate(current)) {
      // 선택한 값이 ToCalendar보다 큰 경우 ToCalendar - 1일로 강제 변경
      current = scwin.formattedDate(current);
      date = start <= finish ? date : date = new Date(current.setDate(current.getDate() - 1));
      date = date instanceof Date ? scwin.parseStringDate(date, true) : date;
      cal_start.gotoCalendar(date);
    }
    scwin.setValue(date, 0);
    start = scwin.formattedDate(date);
    inStart = ipt_start.getValue();
  } else if (division == 'exit') {
    current = scwin.parseStringDate(start, true);
    if (!$c.util.isEmpty($p, inStart) && scwin.validationDate(current)) {
      // 선택한 값이 from Calendar보다 작은 경우 시작날짜 +1일로 강제 변경
      current = scwin.formattedDate(current);
      date = start <= finish ? date : date = new Date(current.setDate(current.getDate() + 1));
      date = date instanceof Date ? scwin.parseStringDate(date, true) : date;
      cal_exit.gotoCalendar(date);
    }
    scwin.setValue(date, 1);
    finish = scwin.formattedDate(date);
    inFinish = ipt_exit.getValue();
  }

  // 선택일자 계산 함수
  if (!$c.util.isEmpty($p, inStart) && !$c.util.isEmpty($p, inFinish)) {
    const diff = scwin.calulateDays(start, finish);

    // 새로 설정된 기간에 CSS Class Set
    scwin.setClassFromToCalendar(start, finish, diff);
  }

  // 직전일자 전역변수 저장
  if (division === 'start') {
    scwin.previousDate[0] = ipt_start.getValue();
  } else if (division === 'exit') {
    scwin.previousDate[1] = ipt_exit.getValue();
  }
  scwin.delete_todayCSS();
};

/**
 * @event
 * @name btn_init_onclick
 * @description 초기화 버튼 클릭, inputBox의 내용, calendar Class 모두 초기화된다.
 * @param {Object} e 이벤트객체
 * @example
 */
scwin.btn_init_onclick = function (e) {
  const today = new Date(new Date().toDateString());
  const todayStr = scwin.parseStringDate(today, true);
  ipt_start.setValue('');
  ipt_exit.setValue('');
  cal_start.gotoCalendar(todayStr);
  cal_exit.gotoCalendar(todayStr);
  cal_start.removeAllCellClass();
  cal_exit.removeAllCellClass();
  tbx_period.setValue('0일');
};

/**
 * @event
 * @name btn_close_onclick
 * @description 닫기 버튼 클릭 시 이벤트, 창을 숨긴다.
 * @param {Object} e 이벤트객체
 * @example
 */
scwin.btn_close_onclick = function (e) {
  grp_cal.hide();
  scwin.isOpen = false;

  // validation
  // let opt = [{ id: "ipt_start", mandatory: true }, { id: "ipt_exit", mandatory: true }];

  // if ($c.data.validateGroup(grp_head, opt)) {
  //     grp_cal.hide();
  //     scwin.isOpen = false;
  // } else {
  //     return;
  // }
};

/**
 * @event
 * @name grp_img_onclick
 * @description 달력 클릭 시 FromToCalendar의 Display 호출
 * @param {Object} e 이벤트객체
 * @example
 */
scwin.grp_img_onclick = function (e) {
  if (scwin.isOpen) {
    grp_cal.hide();
    scwin.isOpen = false;
  } else {
    const start = ipt_start.getValue();
    const finish = ipt_exit.getValue();
    if (!$c.util.isEmpty($p, start)) cal_start.gotoCalendar(start);
    if (!$c.util.isEmpty($p, finish)) cal_exit.gotoCalendar(finish);

    // CSS Class 적용
    if (!$c.util.isEmpty($p, start) && !$c.util.isEmpty($p, finish)) {
      const diff = scwin.calulateDays(scwin.formattedDate(start), scwin.formattedDate(finish));
      scwin.setClassFromToCalendar(start, finish, diff);
      scwin.delete_todayCSS();
    }
    grp_cal.show();
    scwin.isOpen = true;
  }

  // if (scwin.isOpen) {
  //     const start = ipt_start.getValue();
  //     const finish = ipt_exit.getValue();
  //     const opt = [{ id: "ipt_start", mandatory: true }, { id: "ipt_exit", mandatory: true }];

  //     if ($c.data.validateGroup(grp_head, opt) && scwin.validationDate(start) && scwin.validationDate(finish)) {
  //         grp_cal.hide();
  //         scwin.isOpen = false;
  //     } else {
  //         return;
  //     }
  // } else {
  //     grp_cal.show();
  //     scwin.isOpen = true;
  // }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap_period',id:'grp_wrap',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_head',class:'grp_period'},E:[{T:1,N:'xf:input',A:{maxlength:'8',dataType:'date','ev:onviewchange':'scwin.calendarValue_onviewchange',displayFormat:'yyyy-MM-dd',style:'',readOnly:'false',id:'ipt_start',userData1:'start',class:'ipt_period',mandatory:'true'}},{T:1,N:'w2:span',A:{style:'',label:'~',id:'',class:'tilde_period'}},{T:1,N:'xf:input',A:{maxlength:'8',dataType:'date','ev:onviewchange':'scwin.calendarValue_onviewchange',displayFormat:'yyyy-MM-dd',style:'',readOnly:'false',id:'ipt_exit',userData1:'exit',class:'ipt_period',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn_period','ev:onclick':'scwin.grp_img_onclick',id:'grp_img',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'grp_cal',class:'pop_period'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_content',class:'grp_period_content'},E:[{T:1,N:'xf:group',A:{id:'',class:'grp_period_start'},E:[{T:1,N:'w2:calendar',A:{'ev:ondateselect':'scwin.calendar_ondateselect',footerDiv:'true',style:'',id:'cal_start',userData1:'start'}}]},{T:1,N:'xf:group',A:{id:'',class:'grp_period_end'},E:[{T:1,N:'w2:calendar',A:{'ev:ondateselect':'scwin.calendar_ondateselect',footerDiv:'true',style:'',id:'cal_exit',userData1:'exit',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_footer',class:'grp_period_footer'},E:[{T:1,N:'xf:group',A:{id:'',class:'grp_period_btn'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_result',class:'lt'},E:[{T:1,N:'xf:group',A:{id:'grp_period',class:'grp_period_info'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'선택기간 : ',class:'tit_period'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_period',label:'0일',class:'txt_period'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_btn',class:'rt'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_init_onclick',style:'',id:'btn_init',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_close_onclick',style:'',id:'btn_trigger2',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]}]}]})