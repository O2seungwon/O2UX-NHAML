/*amd /cm/xml/processMsg.xml 4966 2f72b1452a09cc2b117ac330c20ff92b8eda97871f14f51e32ec55a60c5acb89 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'style',E:[{T:3,text:'\n            .w2_proc {\n                position : absolute;\n                z-index : 9800;\n            }\n            .w2_proc_group_wrapper {\n                position : relative;\n                padding : 20px 0 0 13px; \n                width : 280px; \n                height : 81px; \n                border : 1px solid #b3b3b3; \n                background : url("/websquare/_websquare_/message/images/bg_ly.gif") left top repeat-x;\n            }\n            .w2_proc_text_msg {\n                width : 200px;\n                height : 20px;\n                font-size : 13px;\n                color : #3f3f67;\n                font-weight : bold;\n                overflow : hidden;\n                white-space:nowrap;\n                text-overflow:ellipsis;\n            }\n            .w2_proc_image_bar {\n                width : 267px;\n                height : 23px;\n            }\n            .w2_proc_btn_hide {\n                position:absolute;\n                top:20px;\n                right:14px;\n                height:20px;\n                text-align:center;\n                word-wrap:break-word;\n                padding:3px;\n                display:none;\n            }\n            .w2_proc_btn_cancel {\n                position:absolute;\n                top:20px;\n                right:14px;\n                height:20px;\n                text-align:center;\n                word-wrap:break-word;\n                padding:3px;\n                display:none;\n            }\n            .w2_proc_modal {\n                position : absolute;\n                left : 0;\n                top : 0;\n                width : 100%;\n                height : 100%;\n                background-color : #cccccc;\n                filter : alpha(opacity=30);\n                opacity : 0.3;\n                z-index: 5800;\n            }\n            \n            .spinner {\n			    position:absolute; left:50%; top:50%; transform:translate(-50%, -50%);\n			    width: 80px; height: 70px; text-align: center; font-size: 10px; z-index: 11000;\n			}\n			.spinner > div {\n			    background-color: #8decff; height: 100%; width: 6px; display: inline-block; margin: 0 5px 0 0;\n			    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out; animation: sk-stretchdelay 1.2s infinite ease-in-out;\n			}\n			.spinner .rect2 { -webkit-animation-delay: -1.1s; animation-delay: -1.1s; }\n			.spinner .rect3 { -webkit-animation-delay: -1.0s; animation-delay: -1.0s; }\n			.spinner .rect4 { -webkit-animation-delay: -0.9s; animation-delay: -0.9s; }\n			.spinner .rect5 { -webkit-animation-delay: -0.8s; animation-delay: -0.8s; }\n			@-webkit-keyframes sk-stretchdelay { 0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 20% { -webkit-transform: scaleY(1.0) } }\n			@keyframes sk-stretchdelay { 0%, 40%, 100% { transform: scaleY(0.4); -webkit-transform: scaleY(0.4); } 20% { transform: scaleY(1.0); -webkit-transform: scaleY(1.0); } }\n        '}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  //image_bar.setSrc(WebSquare.baseURI + "/_websquare_/message/images/progressingbar.gif");
  //btn_hide.dom.input.value = WebSquare.language.getMessage("Window_close");
  //btn_cancel.dom.input.value = WebSquare.language.getMessage("Window_cancel");
};
scwin.onpageunload = function () {};

/**
 * @event
 * @name btn_hide_onclick
 * @description 숨김 버튼을 누를 때 발생하는 이벤트 정의
 */
scwin.btn_hide_onclick = function () {
  $p._getProcessMsgTargetFrame().hideProcessMessage();
};

/**
 * @event
 * @name btn_cancel_onclick
 * @description 취소 버튼을 누를 때 발생하는 이벤트 정의
 */
scwin.btn_cancel_onclick = function () {
  const submissionList = $p._getProcessMsgTargetFrame()._processMsgQueue;
  for (let i = 0; i < submissionList.length; i++) {
    WebSquare.ModelUtil.abort(submissionList[i].org_id, submissionList[i].scope_id);
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'w2_proc_group_wrapper',id:'group_wrapper',style:''},E:[{T:1,N:'xf:group',A:{class:'spinner',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:''}},{T:1,N:'xf:group',A:{class:'rect2',id:'',style:''}},{T:1,N:'xf:group',A:{class:'rect3',id:'',style:''}},{T:1,N:'xf:group',A:{class:'rect4',id:'',style:''}},{T:1,N:'xf:group',A:{class:'rect5',id:'',style:''}}]}]}]}]}]})