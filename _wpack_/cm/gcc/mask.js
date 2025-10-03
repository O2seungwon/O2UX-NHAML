/*amd /cm/gcc/mask.xml 16127 c67dfe69630d1b5c13e4c5c56c19c796f7aa1179aa8aee1b064481dc2ca78769 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

/**
 * @method
 * @name fn_fmNum
 * @description 
 * @param {String} pStrNumber 숫자가 아닌경우 넘어온값을 그대로 리턴
 * @param {String} pUnit 기본값 : 1
 * @returns {String} 마스킹처리된 숫자
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fn_fmNum = function (pStrNumber, pUnit = '1') {
  if ($c.num.isNumber($p, pStrNumber)) {
    pStrNumber = $c.num.floor($p, pStrNumber / pUnit, 0);
    return $c.num.formatNumber($p, pStrNumber); // return Format(pStrNumber/pUnit, 0, 1);
  }
  return pStrNumber;
};

/**
 * @method
 * @name getUsrnmMasked
 * @description 고객명 Masking처리 (절반을 자르고(반올림) 나머지 * 처리)
 * @param {String} p_usrnm 고객명 '조상현',  '남궁상현', 'TIAN YANHONG', '(주)마이오토뱅크'
 * @returns {String} Masking된 고객명
 * @hidden N
 * @exception 
 * @example 
 * $c.mask.getUsrnmMasked("조1");   //return "조*"
 * $c.mask.getUsrnmMasked("조상현");   //return "조상*"
 * $c.mask.getUsrnmMasked("남궁상현");   //return "남궁**"
 * $c.mask.getUsrnmMasked("조남궁상현");   //return "조남궁**"
 * $c.mask.getUsrnmMasked("TIAN YANHONG");   //return "TIAN Y******"
 * $c.mask.getUsrnmMasked("(주)마이오토뱅크");   //return "(주)마이****"
 */
scwin.getUsrnmMasked = function (p_usrnm) {
  const len = p_usrnm.length;
  if (len < 2) return p_usrnm;
  const half = len - Math.round(len / 2);
  // const plainText = substr(p_usrnm, 1, len-half);
  const plainText = p_usrnm.substring(0, len - half);
  return plainText + '*'.repeat(len - plainText.length);
};

/**
 * @method
 * @name getAcnoMasked
 * @description 계좌번호 포맷팅
 * @param {String} pAccountNo 농협 계좌번호
 * @returns {String} Masking된 계좌번호
 * @hidden N
 * @exception 
 * @example $c.mask.getAcnoMasked("29603174123"); //return "296-03-174123";
 */
scwin.getAcnoMasked = function (pAccountNo) {
  const delimeter = "-";
  const accountNo = $c.str.trim($p, pAccountNo);
  const accountNoLength = accountNo.length;
  let rtnAcc = "";
  if ($c.util.isEmpty($p, accountNo) || !accountNo.replaceAll("0", "")) return "";
  if (accountNoLength == 11) {
    /*구계좌 중앙회포맷 3-2-6 */
    rtnAcc = accountNo.replace(/^(\d{3})(\d{2})(\d{6})$/, `$1${delimeter}$2${delimeter}$3`);
  } else if (accountNoLength == 12) {
    /*구계좌 중앙회 포맷 4-2-6 */
    rtnAcc = accountNo.replace(/^(\d{4})(\d{2})(\d{6})$/, `$1${delimeter}$2${delimeter}$3`);
  } else if (accountNoLength == 13) {
    /*  신계좌 3-4-4-2 */
    rtnAcc = accountNo.replace(/^(\d{3})(\d{4})(\d{4})(\d{2})$/, `$1${delimeter}$2${delimeter}$3${delimeter}$4`);
  } else if (accountNoLength == 14) {
    /*
    	가상계좌는 패딩 없이 넘김.
    	790, 791 - 은행
    	792 - 농축협
    	793 - 은행(외화)
    	64,65 - 은행
    	66,67 - 농축협
    */
    if (['790', '791', '792', '793'].includes(accountNo.substring(0, 3)) || ['64', '65', '66', '67'].includes(accountNo.substring(6, 8))) {
      rtnAcc = accountNo;
    } else {
      /*구계좌 조합 포맷 6-2-6*/
      rtnAcc = accountNo.replace(/^(\d{6})(\d{2})(\d{6})$/, `$1${delimeter}$2${delimeter}$3`);
    }
  } else if (accountNoLength == 15) {
    /*구계좌 조합  포맷 6-3-6 */
    rtnAcc = accountNo.replace(/^(\d{6})(\d{3})(\d{6})$/, `$1${delimeter}$2${delimeter}$3`);
  } else if (accountNoLength == 16) {
    /*특수계좌 6-3-7*/
    rtnAcc = accountNo.replace(/^(\d{6})(\d{3})(\d{7})$/, `$1${delimeter}$2${delimeter}$3`);
  } else if (accountNoLength == 17) {
    /*구계좌 공통포맷 7-3-7 */
    rtnAcc = accountNo.replace(/^(\d{7})(\d{3})(\d{7})$/, `$1${delimeter}$2${delimeter}$3`);
  } else {
    rtnAcc = accountNo;
  }
  return rtnAcc;
};

/**
 * @method
 * @name get_NEWAcnoMasked
 * @description 신규계좌번호 포맷팅
 * @param {String} pAccountNo 농협 계좌번호
 * @returns {String} Masking된 계좌번호
 * @hidden N
 * @exception 
 * @example 
 */
scwin.get_NEWAcnoMasked = function (pAccountNo) {
  const mask = "******";
  const delimeter = "-";
  const accountNo = pAccountNo.trim();
  const accountNoLength = accountNo.length;
  if ($c.util.isEmpty($p, accountNo) || !accountNo.replaceAll("0", "")) return '';
  const subAccountNo = accountNo.substring(0, accountNoLength - 6);
  let rtnAcc = "";
  if (accountNoLength == 11) {
    /*구계좌 중앙회포맷 3-2-6 */
    rtnAcc = subAccountNo.replace(/^(\d{3})(\d{2})$/, `$1${delimeter}$2`) + delimeter + mask;
  } else if (accountNoLength == 12) {
    /*구계좌 중앙회 포맷 4-2-6 */
    rtnAcc = subAccountNo.replace(/^(\d{4})(\d{2})$/, `$1${delimeter}$2`) + delimeter + mask;
  } else if (accountNoLength == 13) {
    /*  신계좌 3-4-4-2 */
    rtnAcc = subAccountNo.replace(/^(\d{3})(\d{4})$/, `$1${delimeter}$2`) + delimeter + "****" + delimeter + "**";
  } else if (accountNoLength == 14) {
    /*
    	가상계좌는 패딩 없이 넘김.
    	790, 791 - 은행
    	792 - 농축협
    	793 - 은행(외화)
    	64,65 - 은행
    	66,67 - 농축협
    */
    if (['790', '791', '792', '793'].includes(accountNo.substring(0, 3)) || ['64', '65', '66', '67'].includes(accountNo.substring(6, 8))) {
      rtnAcc = subAccountNo + mask;
    } else {
      /*구계좌 조합 포맷 6-2-6*/
      rtnAcc = subAccountNo.replace(/^(\d{6})(\d{2})$/, `$1${delimeter}$2`) + delimeter + mask;
    }
  } else if (accountNoLength == 15) {
    /*구계좌 조합  포맷 6-3-6 */
    rtnAcc = subAccountNo.replace(/^(\d{6})(\d{3})$/, `$1${delimeter}$2`) + delimeter + mask;
  } else if (accountNoLength == 16) {
    /*특수계좌 6-3-7*/
    rtnAcc = subAccountNo.replace(/^(\d{6})(\d{3})(\d{1})$/, `$1${delimeter}$2${delimeter}$3`) + mask;
  } else if (accountNoLength == 17) {
    /*구계좌 공통포맷 7-3-7 */
    rtnAcc = subAccountNo.replace(/^(\d{7})(\d{3})(\d{1})$/, `$1${delimeter}$2${delimeter}$3`) + mask;
  } else {
    rtnAcc = subAccountNo;
  }
  return rtnAcc;
};

/**
 * @method
 * @name getAcnoMaskedForSbjc
 * @description 조회완료후 계좌번호컬럼에 마스킹처리
 * @param {String} pAcno 계좌번호
 * @param {String} pAcSbjc 과콕코드
 * @param {String} pAudMbAcno 회원계좌번호
 * @param {String} pAcBrc 계좌사무소코드
 * @param {String} pBnknm 은행명
 * @param {String} pCkno 수표번호
 * @returns {String} 마스킹처리된 계좌번호
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getAcnoMaskedForSbjc = function (pAcno, pAcSbjc, pAudMbAcno, pAcBrc, pBnknm, pCkno) {
  const delimeter = "-";
  if (pAcSbjc == '136') {
    return pAcBrc + '-' + pAcSbjc + '-' + pCkno;
  }
  if (pAcSbjc == '210') {
    if ($c.str.trim($p, pAudMbAcno) != '' && pAudMbAcno.length >= 8) {
      return pAcBrc + '-' + pAcSbjc + '-' + pAudMbAcno.substring(0, 8);
    }
    return scwin.getAcnoMasked(pAcno);
  }
  if (['090', '190', '752', '137', '167'].includes(pAcSbjc)) {
    if (pAcno.length == 18) {
      return pAcno.replace(/^(\d{2})(\d{4})(\d{4})(\d{4})(\d{4})$/, `$2${delimeter}$3${delimeter}$4${delimeter}$5`);
    }
    if (pAcno.length == 16) {
      return pAcno.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, `$1${delimeter}$2${delimeter}$3${delimeter}$4`);
    }
    return pAcno;
  }
  if (['755', '143'].includes(pAcSbjc)) {
    if (pBnknm) {
      return pAcno + `[${pBnknm}]`;
    }
    return pAcno;
  }
  if (['700', '800', '818', '809'].includes(pAcSbjc)) {
    return pAcno.substring(0, 6) + '-' + pAcno.substring(6, 9) + '-' + pAcno.substring(9, pAcno.length);
  }
  return scwin.getAcnoMasked(pAcno);
};

/**
 * @method
 * @name getAcnoLpad
 * @description 계좌번호 조회시 자릿수 조정하기
 * @param {String} pAcno1 계좌번호 앞자리
 * @param {String} pAcno2 계좌번호 중간자리
 * @param {String} pAcno3 계좌번호 뒷자리
 * @returns {String} 자릿수 조정된 계좌번호
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getAcnoLpad = function (pAcno1, pAcno2, pAcno3) {
  const lAcno1 = $c.num.parseInt($p, $c.str.trim($p, pAcno1));
  const lAcno2 = $c.num.parseInt($p, $c.str.trim($p, pAcno2));
  let padlen = 6;
  if (lAcno1 < 9999) padlen = 4;
  if (lAcno1 < 999) padlen = 3;
  const accountNo1 = pAcno1.padStart(padlen, "0");
  let padlen2 = 6;
  if (lAcno2 < 99) padlen2 = 2;
  if (lAcno2 > 99 && lAcno2 <= 999) padlen2 = 3;
  let accountNo2 = pAcno2.padStart(padlen2, "0");
  return accountNo1 + accountNo2 + pAcno3.padStart(6, "0");
};

/**
 * @method
 * @name getRlnoMasked
 * @description 실명번호 or 사업자번호 Masking
 * @param {String} pRlno 실명번호 or 사업자번호
 * @param {String} pIsMask masking 여부
 * @returns {String} Masking된 실명번호
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getRlnoMasked = function (pRlno, pIsMask = 'N') {
  let retVal = '';
  const lRlno = $c.str.trim($p, pRlno.replaceAll('-', ''));
  if (lRlno.length == 13 && lRlno.substring(0, 1) == '0' && lRlno.substring(6, 8) == '00') {
    // 사업자번호에 13자리 맞추기 위해 '0' 이 채워진경우
    lRlno = lRlno.substring(1, 4) + lRlno.substring(4, 6) + lRlno.substring(8, 13);
  }
  switch (lRlno.length) {
    case 13:
      /* 주민번호, 법인번호 6-7 */
      if (pIsMask == 'N') {
        retVal = `${lRlno.substring(0, 6)}-${lRlno.substring(6, 13)}`;
      } else {
        retVal = `${lRlno.substring(0, 6)}-${lRlno.substring(6, 7)}******`;
      }
      break;
    case 10:
      /* 사업자번호 3-2-5 */
      if (pIsMask == 'N') {
        retVal = `${lRlno.substring(0, 3)}-${lRlno.substring(3, 5)}-${lRlno.substring(5, 10)}`;
      } else {
        retVal = `${lRlno.substring(0, 3)}-${lRlno.substring(3, 5)}-*****`;
      }
      break;
    default:
      retVal = pRlno;
      break;
  }
  return retVal;
};

/**
 * @method
 * @name fn_getTelNo
 * @description 구분별 전화번호 값을 구한다.
 * @param {String} pTelNo 전화번호
 * @returns {String} 전화번호
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fn_getTelNo = function (telNo) {
  if (telNo.length < 8 || telNo.length > 13) {
    return telNo;
  }
  if (telNo.length == 8) {
    return telNo.replace(/(\d{4})(\d{4})/, "$1-$2");
  }
  if (telNo.length == 10) {
    if (telNo.substring(0, 2) == '02') {
      return telNo.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
    }
    return telNo.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  if (telNo.length == 12) {
    return telNo.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
  }
  if (telNo.length == 13) {
    return telNo.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, "$1-$2-$3-$4");
  }
  return telNo;
};

/**
 * @method
 * @name fn_getTelNo2
 * @description 구분별 전화번호 값을 구하고 뒷자리에 * 마스킹 처리
 * @param {String} pTelNo 전화번호
 * @returns {String} 전화번호
 * @hidden N
 * @exception 
 * @example 
 * $c.mask.fn_getTelNo2("010-1234-5678");   //return "010-11**-11**";
 * $c.mask.fn_getTelNo2("02-1234-5678");   //return "02-12**-56**";
 */
scwin.fn_getTelNo2 = function (pTelNo) {
  const lTelNo = $c.str.trim($p, pTelNo).replaceAll('-', '');
  const lTelLen = lTelNo.length;
  if (lTelLen < 8 || lTelLen > 13) {
    return pTelNo;
  }
  if (lTelLen == 8) {
    //xxxx-xxxx
    return `${lTelNo.substring(0, 4)}-${lTelNo.substring(4, 8)}`;
  }
  if (lTelLen == 10) {
    //xxxx-xxxx
    if (lTelNo.substring(0, 2) == '02') {
      // 02-xxxx-xxxx
      return lTelNo.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2**-$4**");
    }
    return lTelNo.replace(/(\d{3})(\d{2})(\d{1})(\d{2})(\d{2})/, "$1-$2*-$4**");
  }
  if (lTelLen == 12) {
    return lTelNo.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2**-$4**");
  }
  if (lTelLen == 13) {
    return lTelNo.replace(/(\d{2})(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3**-$5**");
  }
  return pTelNo;
};

/**
 * @method
 * @name makeMappedAcno
 * @description (STR 전용) 맵핑을 위한 17자리 계좌 만드는 함수
 * @param {String} acnoStr 변환 할 계좌번호 문자열
 * @returns {String} 17자리수가 채워진 문자열 리턴
 * @hidden N
 * @exception 
 * @example 
 */
scwin.makeMappedAcno = function (acnoStr) {
  let retStr = "";
  const acnoLen = acnoStr.length;
  if (acnoLen == 11) {
    retStr = acnoStr.replace(/(\d{3})(\d{2})(\d{6})/, "0000$10$20$3");
  } else if (acnoLen == 12) {
    retStr = acnoStr.replace(/(\d{4})(\d{2})(\d{6})/, "000$10$20$3");
  } else if (acnoLen == 14) {
    if (acnoStr.substring(0, 2) == "91") {
      retStr = `000${acnoStr}`;
    } else {
      retStr = acnoStr.replace(/(\d{6})(\d{2})(\d{6})/, "0$10$20$3");
    }
  } else if (acnoLen == 15) {
    retStr = acnoStr.replace(/(\d{6})(\d{3})(\d{6})/, "0$1$20$3");
  } else if (acnoLen == 16) {
    retStr = `0${acnoStr}`;
  } else {
    retStr = acnoStr;
  }
  return retStr;
};

/**
 * @method
 * @name fn_getEmail
 * @description 이메일 주소의 도메인을 3자리 이후 마스킹을 한다.
 * @param {String} pEaddress 이메일 주소
 * @returns {String} 마스킹 된 이메일
 * @hidden N
 * @exception 
 * @example 
 * $c.mask.fn_getEmail("1234@naver.com");  //return "123*@naver.com";
 * $c.mask.fn_getEmail("12@naver.com");    //return "12@naver.com";
 */
scwin.fn_getEmail = function (pEaddress) {
  const splitedEmail = pEaddress.split("@");
  if (splitedEmail[0].length < 3) return pEaddress;
  const rtnStr = $c.str.rpad($p, splitedEmail[0].substring(0, 3), splitedEmail[0].length, "*") + "@" + splitedEmail[1];
  return rtnStr;
};

/**
 * @method
 * @name fn_getPassPort
 * @description 여권번호 중 뒤에서 4자리 마스킹 처리
 * @param {String} pPassPort 이메일 주소
 * @returns {String} 마스킹 된 여권번호
 * @hidden N
 * @exception 
 * @example $c.mask.fn_getPassPort("AB1234567");  //return "AB123****";
 */
scwin.fn_getPassPort = function (pPassPort) {
  if (pPassPort.length < 5) return pPassPort;
  const rtnStr = $c.str.rpad($p, pPassPort.substring(0, pPassPort.length - 4), pPassPort.length, "*");
  return rtnStr;
};

/**
 * @method
 * @name fn_getCard
 * @description 카드번호 처음 6자리와 마지막 4자리 노출 나머지는 마스킹 처리
 * @param {String} pCard 카드번호
 * @returns {String} 마스킹 된 카드번호
 * @hidden N
 * @exception 
 * @example 
 * 16자리 : $c.mask.fn_getCard("1234567812345678");   //return "1234-56**-****-5678";
 * 15자리 : $c.mask.fn_getCard("1234-5678-1234-567");    //return "1234-56**-****-567";
 */
scwin.fn_getCard = function (pCard) {
  const cardNo = $c.str.trim($p, pCard)?.replaceAll("-", "");
  if (cardNo.length > 16 || cardNo.length < 15) return pCard;
  if (cardNo.length == 15) {
    return `${cardNo.substring(0, 4)}-${cardNo.substring(4, 6)}**-****-${cardNo.substring(12, 15)}`;
  }
  return `${cardNo.substring(0, 4)}-${cardNo.substring(4, 6)}**-****-${cardNo.substring(12, 16)}`;
};

/**
 * @method
 * @name getCUSMasked
 * @description 숫자형식에 마스킹처리 (뒷 5자리 * 처리)
 * @param {String} p_CUSNO 고객번호
 * @returns {String} 마스킹처리된 고객번호
 * @hidden N
 * @exception 
 * @example $c.mask.getCUSMasked("T10004"); // return "T*****";
 */
scwin.getCUSMasked = function (pCusNo) {
  const cusNo = $c.str.trim($p, pCusNo)?.replaceAll("-", "");
  if (cusNo.length < 2) return pCusNo;
  const len = cusNo.length > 5 ? 5 : Math.round(cusNo.length / 2);
  return $c.str.rpad($p, cusNo.substring(0, cusNo.length - len), cusNo.length, '*');
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})