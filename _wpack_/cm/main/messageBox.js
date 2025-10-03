/*amd /cm/main/messageBox.xml 3046 06dcc7565b9b562ebd6a8e8bdc1109d6ef1eb59e37a99e08edf7e5d7b4e5c3ac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 메시지 박스 화면 초기화 작업을 수행한다.
 */
scwin.onpageload = function () {
  try {
    const messageType = scwin.getMessageType();
    const message = $c.data.getParameter($p, "message") || "메시지 없음";
    tbx_message.setValue(message);
    if (messageType === "alert") {
      btn_cancel.hide();
      btn_yes.hide();
    } else if (messageType === "confirm") {
      btn_confirm.hide("");
      btn_yes.show("");
      btn_cancel.show("");
    }
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @event
 * @name btn_confirm_onclick
 * @description 확인 버튼을 누를 때 발생하는 이벤트 정의
 */
scwin.btn_confirm_onclick = function (e) {
  try {
    scwin.callBackParam = $c.data.getParameter($p, "callBackParam");
    if (scwin.getMessageType() == "confirm") {
      scwin.callBackParam.clickValue = true;
    }
    $c.win.closePopup($p, scwin.callBackParam);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @event
 * @name btn_cancel_onclick
 * @description 취소 버튼을 누를 때 발생하는 이벤트 정의
 */
scwin.btn_cancel_onclick = function (e) {
  try {
    scwin.callBackParam = $c.data.getParameter($p, "callBackParam");
    if (scwin.getMessageType() == "confirm") {
      scwin.callBackParam.clickValue = false;
    }
    $c.win.closePopup($p, scwin.callBackParam);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name getMessageType
 * @description MessageType에 대한 값을 가져온다
 * @hidden N
 * @exception 
 */
scwin.getMessageType = function () {
  const messageType = $c.data.getParameter($p, "messageType") || "alert";
  return messageType;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'msbox'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_message',label:'',style:'',class:'grp_poptxt',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_yes',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]}]})