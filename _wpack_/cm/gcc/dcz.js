/*amd /cm/gcc/dcz.xml 26098 c5a229caaf55b90278888f5ccf18bed9e335fbed67a64fd493c2a9d1c8756f2f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMMON'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @componentName udc_dcz
 * @pluginName
 * @company
 * @developer
 * @category /cm/gcc
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

scwin.onpageload = function () {};

/**
 * @method
 * @name getDczMakeAuth
 * @description 결재 상신 권한 확인
 * @param {String} pDcz_upmu 결재업무구분코드
 * @param {String} pBrc 대상사무소코드
 * @param {String} pDcz_sqno 결재일련번호가 있으면 해당 결재건이 진행중인지 확인. 결재일련번호가 없으면 해당 결재업무의 권한만 확인
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {number} 결재상신 진행여부. (1 : 결재상신을 진행할 수 있음 / 0 : 결재상신을 진행할 수 없음)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getDczMakeAuth = function (pDcz_upmu, pBrc, pDcz_sqno = '', pAddAuthGrp = '') {
  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_S002");
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_upmu, pBrc, pDcz_sqno, pAddAuthGrp));

  // CreateProc tmpProc, query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재상신 권한 조회중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }else if(substr(lErrCd, '|', 1) == '100'){
  // 		MsgBox ERROR, '결재일련번호 [' || pDcz_sqno || '] 에 해당하는 결제 데이터를 찾을 수 없습니다.';
  // 		return 0;
  // }else if(tmpProc.DCZ_MAKE_AUTH_YN == '1'){
  // 	return 1;
  // }else{
  // 	return 0;
  // }
};

/**
 * @method
 * @name fnDczSqnoMake
 * @description 결재 상신
 * @param {String} pDcz_upmu 결재업무구분코드
 * @param {String} pBrc 대상사무소코드
 * @param {String} pBasStDt 결재대상데이터의 시작일
 * @param {String} pBasEdDt 결재대상데이터의 종료일
 * @param {String} pDcz_sqno 결재일련번호가 있으면 해당 결재건이 진행중인지 확인. 결재일련번호가 없으면 해당 결재업무의 권한만 확인
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @param {String} pOpi_cntn 결재의견
 * @returns {number} 결재일련번호 YYYYMMDD + LPAD(개인번호, 9,'0') + HH24MISSFFS + LPAD(pDcz_upmu, 3,'0') = 30자리
 * 0 : 결재일련번호 생성 실패
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnDczSqnoMake = function (pDcz_upmu, pBrc, pBasStDt = '', pBasEdDt = '', pDcz_sqno = '', pAddAuthGrp = '', pOpi_cntn = '') {
  // var rtn = scwin.getDczMakeAuth(pDcz_upmu, pBrc, pDcz_sqno, pAddAuthGrp);
  // if(rtn == False){
  // 	MsgBox OK, '결재상신 권한이 없습니다.';
  // 	return 0;
  // }

  // if(IsEmpty(pDcz_sqno)== False){
  // 	var queryNum = 0;

  // 	queryFunc.init();
  // 	queryNum++;
  // 	var NEW_DCZ_SQNO = pDcz_sqno;
  // 	queryFunc.setQueryid(queryNum , "COM02_DCZ_U003");	// 결재 재 상신
  // 	queryFunc.setPara(queryNum , ParamToMSV(pDcz_upmu, pBrc, pBasStDt, pBasEdDt, NEW_DCZ_SQNO, pAddAuthGrp, pOpi_cntn));
  // 	queryNum++;
  // 	var pStsc = '0';
  // 	queryFunc.setQueryid(queryNum , "COM02_DCZ_I002");	// 결재로그 insert
  // 	queryFunc.setPara(queryNum , ParamToMSV(pDcz_upmu, pBrc, pBasStDt, pBasEdDt, pDcz_sqno, pStsc, pOpi_cntn));

  // 	query Agent = &App.gAgentParam;
  // 	var lErrCd = SqlStatus();
  // 	if(lErrCd == '')
  // 	{
  // 		/* STR 집계 */
  // 		if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // 		{
  // 			Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // 		}
  // 		return pDcz_sqno;
  // 	}else{
  // 		MsgBox ERROR, '결재상신중 오류가 발생했습니다. ' || lErrCd;
  // 		return 0;
  // 	}
  // }else{
  // 	var queryNum = 0;
  // 	queryFunc.init();
  // 	queryFunc.setQueryid(1 , "COM02_DCZ_S001");	// 결재일련번호 채번
  // 	queryFunc.setPara(1 , ParamToMSV(pDcz_upmu, pBrc, pBasStDt, pBasEdDt));

  // 	CreateProc tmpProc, query Agent = &App.gAgentParam;

  // 	if(CharCount(ColumnIDs(tmpProc), "NEW_DCZ_SQNO") > 0)
  // 	{
  // 		pDcz_sqno = tmpProc.NEW_DCZ_SQNO;
  // 	}else{
  // 		MsgBox ERROR, '결재상신중 오류가 발생했습니다. ' || SqlStatus();
  // 		return 0;
  // 	}

  // 	queryFunc.init();
  // 	queryNum++;
  // 	queryFunc.setQueryid(queryNum , "COM02_DCZ_I001");	// 신규 결재건 등록
  // 	queryFunc.setPara(queryNum , ParamToMSV(pDcz_upmu, pBrc, pBasStDt, pBasEdDt, pDcz_sqno, pAddAuthGrp, pOpi_cntn));

  // 	queryNum++;
  // 	var pStsc = '0'; /* 상신상태코드 */
  // 	queryFunc.setQueryid(queryNum , "COM02_DCZ_I002");	// 결재로그 insert
  // 	queryFunc.setPara(queryNum , ParamToMSV(pDcz_upmu, pBrc, pBasStDt, pBasEdDt, pStsc, pOpi_cntn, pDcz_sqno));

  // 	CreateProc tmpProc, query Agent = &App.gAgentParam;
  // 	if(SqlStatus() == '')
  // 	{
  // 		return pDcz_sqno;
  // 	}else{
  // 		MsgBox ERROR, '결재상신중 오류가 발생했습니다. ' || SqlStatus();
  // 		return 0;
  // 	}
  // }
};

/**
 * @method
 * @name removeDCZ
 * @description 결재건 제거
 * 결재 상신후 업무데이터 UPDATE 실패시 공통테이블의 결재데이터 제거
 * @param {String} pDcz_sqno 결재 일련번호
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */

scwin.removeDCZ = function (pDcz_sqno) {
  // var queryNum = 0;

  // Call queryFunc.init();
  // queryNum++;
  // Call queryFunc.setQueryid(queryNum , "COM02_DCZ_D002");	// 결재로그 삭제
  // Call queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno));

  // queryNum++;
  // Call queryFunc.setQueryid(queryNum , "COM02_DCZ_D003");	// 결재건 삭제
  // Call queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno));

  // query Agent = &App.gAgentParam;
};

/**
 * @method
 * @name getDczClearAuth
 * @description 상신취소 권한 확인
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 1:상신취소를 진행할 수 있음 / 0:상신취소를 진행할 수 없음
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getDczClearAuth = function (pDcz_sqno, pAddAuthGrp = '') {
  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_S004");
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pAddAuthGrp));

  // CreateProc tmpProc, query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재상신취소 권한 조회중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }else if(tmpProc.DCZ_CANCEL_YN == '1'){
  // 	return 1;
  // }else{
  // 	return 0;
  // }
};

/**
 * @method
 * @name addMinute
 * @description 결재 상신취소
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnDczClear = function (pDcz_sqno, pAddAuthGrp = '') {
  // if(scwin.getDczClearAuth(pDcz_sqno, pAddAuthGrp)  < 1){
  // 	MsgBox OK, '상신취소 권한이 없습니다.';
  // 	return 0;
  // }

  // var pStsc = '4'; /* 상신취소 */
  // var pOpi_cntn = '';

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_U002");	// 결재상신 취소처리
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn, pAddAuthGrp));
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_I002");	// 결재로그 insert
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn));

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '상신취소중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name chkDczStep
 * @description 결재 단계 확인
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 현재 내가 결재할 단계 (1 ~ n)
 * 0  : 결재가 완료된 결재건.
 * -1 : 반려된 결재건.
 * -2 : 결재권한이 없음. (결재할 단계가 아님)
 * -3 : 결재할 데이터가 없음.
 * -4 : 쿼리에러
 * @hidden N
 * @exception 
 * @example 
 */
scwin.chkDczStep = function (pDcz_sqno, pAddAuthGrp = '') {
  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_S003", "Y");
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pAddAuthGrp));

  // CreateProc tmpProc, query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재 권한 조회중 오류가 발생했습니다. ' || lErrCd;
  // 	return -4;
  // }else if(tmpProc.@RecordCount < 1){
  // 	return -3;
  // }else if(tmpProc.NOW_STS_DSC == '5'){
  // 	return 0;
  // }else if(tmpProc.NOW_STS_DSC == '2'){
  // 	return -1;
  // }else if(tmpProc.DCZ_STP_NO != 0 and tmpProc.DCZ_AUTH_YN == '0'){
  // 	return -2;
  // }else{
  // 	return tmpProc.DCZ_STP_NO;
  // }
};

/**
 * @method
 * @name getDczAuth
 * @description 결재 권한 확인
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 1:결재를 진행할 수 있음 / 0:결재를 진행할 수 없음
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getDczAuth = function (pDcz_sqno, pAddAuthGrp = '') {
  // var rtn = scwin.chkDczStep(pDcz_sqno, pAddAuthGrp);
  // if(rtn > 0){
  // 	return 1;
  // }else{
  // 	return 0;
  // }
};

/**
 * @method
 * @name fnDcz
 * @description 결재
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pStsc 1: 승인, 2: 반려 (반려시 결재의견 등록)
 * @param {String} opi_cntn 결재 의견
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 결재처리 성공 여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnDcz = function (pDcz_sqno, pStsc = '1', pOpi_cntn = '', pAddAuthGrp = '') {

  // if(pStsc in ('2', '8') and IsEmpty(pOpi_cntn)){
  // 	MsgBox OK, '반려시에는 결재의견을 반드시 입력해주세요.';
  // 	return 0;
  // }

  // var step_no = scwin.chkDczStep(pDcz_sqno, pAddAuthGrp);
  // if(step_no == 0){
  // 	MsgBox WARNING, '결재가 완료된 결재건입니다.';
  // 	return 0;
  // }else if(step_no == -1){
  // 	MsgBox WARNING, '반려된 결재건입니다.';
  // 	return 0;
  // }else if(step_no == -2){
  // 	MsgBox WARNING, '결재권한이 없습니다.';
  // 	return 0;
  // }else if(step_no == -3){
  // 	MsgBox WARNING, '시스템오류. 결재 데이터를 찾을 수 없습니다.';
  // 	return 0;
  // }else if(step_no < 1){
  // 	// 쿼리에러
  // 	return 0;
  // }

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_U001");	// 결재처리
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn, pAddAuthGrp));

  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_I002");	// 결재로그 insert
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn));

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name fnMultiDcz
 * @description 일괄 결재
 * 현재 결재상태(NOW_STS_DSC)가 '0'(결재상신), '3'(진행중), '8', '9' 인 데이터만 처리.
 * 현재 결재 단계에 사용자가 결재권한이 있는 데이터만 처리.
 * @param {String} pDataSet 결재대상 데이터셋
 * @param {String} pDataSet.DCZ_SQNO 결재일련번호
 * @param {String} pDataSet.NOW_STS_DSC 결재상태구분코드
 * @param {String} stsc 1: 승인, 2: 반려 (반려시 결재의견 등록)
 * @param {String} opi_cntn 결재 의견
 * @returns {String} 결재처리 성공 여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnMultiDcz = function (pDataSet, pStsc = '1', pOpi_cntn = '', pAddAuthGrp = '00') {

  // &pDataSet.ModifyRecordSet delete where NOW_STS_DSC not in ('0', '3', '8', '9');
  // &pDataSet.ModifyRecordSet SetRowStatus '*';
  // &pDataSet.ModifyRecordSet set pDcz_sqno = DCZ_SQNO;

  // if(&pDataSet.@RecordCount < 1)
  // {
  // 	MsgBox WARNING, '결재대상 데이터가 없습니다.';
  // 	return 0;
  // }

  // if(pStsc in ('2','8') and IsEmpty(pOpi_cntn)){
  // 	MsgBox WARNING, '반려시에는 결재의견을 반드시 입력해주세요.';
  // 	return 0;
  // }

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_U001' , '' , queryNum); // 결재처리
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn, pAddAuthGrp) , '' , queryNum);

  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_I002' , '' , queryNum); // 결재로그 insert
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn) , '' , queryNum);

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // Call strFunc.fnUpdateDtpPrcpSttForDczMulti(pDataSet, 'Y');

  // return 1;
};

/**
 * @method
 * @name fnRejectFromCenter
 * @description 본부반송
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pOpi_cntn 결재 의견
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 반송처리 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnRejectFromCenter = function (pDcz_sqno, pOpi_cntn, pAddAuthGrp = '') {
  // var pStsc = '6'; /* 본부반송 */
  // queryFunc.init();
  // queryFunc.setQueryid(1 , 'COM02_DCZ_U002');
  // queryFunc.setPara(1 , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn, pAddAuthGrp));
  // queryFunc.setQueryid(2 , 'COM02_DCZ_I002');
  // queryFunc.setPara(2 , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn));

  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	queryFunc.setQueryid(3 , 'COM02_DCZ_I003');
  // 	queryFunc.setPara(3 , ParamToMSV(pDcz_sqno, pOpi_cntn));
  // }

  // query Agent = &App.gAgentParam;

  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '본부반송중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name fnCancelCompletedDCZ
 * @description 결재완료건의 취소 (결재상신전의 상태로)
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 승인취소처리 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnCancelCompletedDCZ = function (pDcz_sqno, pAddAuthGrp = '') {
  // var pStsc = '7'; /* 승인취소 */
  // var pOpi_cntn = '';
  // queryFunc.init();
  // queryFunc.setQueryid(1 , 'COM02_DCZ_U002');
  // queryFunc.setPara(1 , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn, pAddAuthGrp));
  // queryFunc.setQueryid(2 , 'COM02_DCZ_I002');
  // queryFunc.setPara(2 , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn));

  // query Agent = &App.gAgentParam;

  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '승인취소 중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name fnCancelCompletedDCZMulti
 * @description 승인취소 (일괄처리)
 * 현재 결재상태(NOW_STS_DSC)가 '0'(결재상신), '3'(진행중), '8', '9' 인 데이터만 처리.
 * 현재 결재 단계에 사용자가 결재권한이 있는 데이터만 처리.
 * @param {String} pDataSet 결재대상 데이터셋
 * @param {String} pDataSet.DCZ_SQNO 결재일련번호
 * @param {String} pDataSet.NOW_STS_DSC 결재상태구분코드
 * @param {String} pDataSet.NOW_DCZ_STP_NO 현재 결재 단계
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 승인취소처리 성공 여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnCancelCompletedDCZMulti = function (pDataSet, pAddAuthGrp = '00') {
  // //&pDataSet.ModifyRecordSet delete where NOW_STS_DSC != '3' or NOW_DCZ_STP_NO != '3'; // 승인취소는 결재상태와 상관 없이 모두 처리
  // &pDataSet.ModifyRecordSet SetRowStatus '*';
  // &pDataSet.ModifyRecordSet set pDcz_sqno = DCZ_SQNO;

  // if(&pDataSet.@RecordCount < 1)
  // {
  // 	MsgBox WARNING, '결재대상 데이터가 없습니다.';
  // 	return 0;
  // }

  // var pStsc = '7'; /* 승인취소 */
  // var pOpi_cntn = '';

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_U002' , '' , queryNum); // 결재처리
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn, pAddAuthGrp) , '' , queryNum);

  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_I002' , '' , queryNum); // 결재로그 insert
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn) , '' , queryNum);

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '승인취소중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // Call strFunc.fnUpdateDtpPrcpSttForDczMulti(pDataSet, 'Y');

  // return 1;
};

/**
 * @method
 * @name getCaseDczClearAuth
 * @description 혐의거래 상신취소 권한 확인
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 상신취소 진행여부 (1:가능 / 0:불가)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getCaseDczClearAuth = function (pDcz_sqno, pAddAuthGrp = '') {
  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_S010");
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pAddAuthGrp));

  // CreateProc tmpProc, query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '결재상신취소 권한 조회중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }else if(tmpProc.DCZ_CANCEL_YN == '1'){
  // 	return 1;
  // }else{
  // 	return 0;
  // }
};

/**
 * @method
 * @name fnCaseDczClear
 * @description 혐의거래 결재 상신취소
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnCaseDczClear = function (pDcz_sqno, pAddAuthGrp = '') {
  // var pStsc = '9'; /* 상신취소 */
  // var pOpi_cntn = '';

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_U004");	// 결재상신 취소처리
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn, pAddAuthGrp));
  // queryNum++;
  // queryFunc.setQueryid(queryNum , "COM02_DCZ_I002");	// 결재로그 insert
  // queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno, pStsc, pOpi_cntn));

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '상신취소중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name fnCaseDczClearMulti
 * @description 혐의거래 결재 상신취소 (일괄처리)
 * @param {String} pDataSet 결재대상 데이터셋
 * @param {String} pDataSet.DCZ_SQNO 결재일련번호
 * @param {String} pDataSet.NOW_STS_DSC 현재 결재 상태
 * @param {String} pDataSet.NOW_DCZ_STP_NO 현재 결재 단계
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 결재처리 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnCaseDczClearMulti = function (pDataSet, pAddAuthGrp = '00') {
  // &pDataSet.ModifyRecordSet SetRowStatus '*';
  // &pDataSet.ModifyRecordSet set pDcz_sqno = DCZ_SQNO;

  // if(&pDataSet.@RecordCount < 1)
  // {
  // 	MsgBox WARNING, '결재대상 데이터가 없습니다.';
  // 	return 0;
  // }

  // var pStsc = '9'; /* 상신취소 */
  // var pOpi_cntn = '';

  // var queryNum = 0;

  // queryFunc.init();
  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_U004' , '' , queryNum); // 결재처리
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn, pAddAuthGrp) , '' , queryNum);

  // queryNum++;
  // queryFunc.setGridQuery('' , 'COM02_DCZ_I002' , '' , queryNum); // 결재로그 insert
  // queryFunc.setGridPara(pDataSet , ParamToMSV(pStsc, pOpi_cntn) , '' , queryNum);

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '상신취소중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // Call strFunc.fnUpdateDtpPrcpSttForDczMulti(pDataSet, 'Y');

  // return 1;
};

/**
 * @method
 * @name fnRollBackDcz
 * @description 이전결재 취소처리
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 결재처리 성공 여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnRollBackDcz = function (pDcz_sqno, pAddAuthGrp = '') {
  // var queryNum = 0;

  // Call queryFunc.init();
  // queryNum++;
  // Call queryFunc.setQueryid(queryNum , 'COM02_DCZ_D001'); // 이전결재 취소처리 1
  // Call queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno));

  // queryNum++;
  // Call queryFunc.setQueryid(queryNum , 'COM02_DCZ_U005'); // 이전결재 취소처리 2
  // Call queryFunc.setPara(queryNum , ParamToMSV(pDcz_sqno));

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '취소 처리중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // if(substr(pDcz_sqno,29,1) == 'S') /* STR만 */
  // {
  // 	Call strFunc.fnUpdateDtpPrcpSttForDcz(pDcz_sqno, 'Y');
  // }

  // return 1;
};

/**
 * @method
 * @name fnRollBackDczMulti
 * @description 이전결재 취소처리(일괄처리)
 * @param {String} pDcz_sqno 결재일련번호
 * @param {String} pAddAuthGrp 강제 권한 부여 그룹코드 - '|'(파이프)로 여러개의 그룹코드 전달 가능 => "S1|09|C2"
 * @returns {String} 결재처리 성공여부 (1:성공 / 0:실패)
 * @hidden N
 * @exception 
 * @example 
 */
scwin.fnRollBackDczMulti = function (pDataSet, pAddAuthGrp = '') {
  // &pDataSet.ModifyRecordSet SetRowStatus '*';
  // &pDataSet.ModifyRecordSet set pDcz_sqno = DCZ_SQNO;

  // var queryNum = 0;

  // Call queryFunc.init();
  // queryNum++;
  // Call queryFunc.setGridQuery('' , 'COM02_DCZ_D001' , '' , queryNum); // 이전결재 취소처리 1
  // Call queryFunc.setGridPara(pDataSet ,'' , '' , queryNum);

  // queryNum++;
  // Call queryFunc.setGridQuery('' , 'COM02_DCZ_U005' , '' , queryNum); // 이전결재 취소처리 2
  // Call queryFunc.setGridPara(pDataSet , '' , '' , queryNum);

  // query Agent = &App.gAgentParam;
  // var lErrCd = SqlStatus();
  // if(lErrCd != ''){
  // 	MsgBox ERROR, '취소 처리중 오류가 발생했습니다. ' || lErrCd;
  // 	return 0;
  // }

  // /* STR 집계 */
  // Call strFunc.fnUpdateDtpPrcpSttForDczMulti(pDataSet, 'Y');

  // return 1;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})