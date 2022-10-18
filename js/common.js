var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// #######################################################################################
// 작 성 자 : 권오준
// 작성일자 : 2009/12/16
// 기    능 : 공용함수 모음(고정적)
// 작업이력 :
//						'1)	2009/12/16 최초작성
// #######################################################################################

//****************************************************************************************
// 문자열 정규식 Trim 함수
// Ex) str = "    테 스트   ".trim(); => str = "테 스트";
//****************************************************************************************
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}


// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}

//****************************************************************************************
// 문자열 Left Trim 함수
//****************************************************************************************
function ltrim(str)
{
	var s = new String(str);
	
	if (s.substr(0,1) == " ")
		return ltrim(s.substr(1));
	else
		return s;
}

//****************************************************************************************
// 문자열 Right Trim 함수
//****************************************************************************************
function rtrim(str)
{
	var s = new String(str);
	
	if(s.substr(s.length-1,1) == " ")
		return rtrim(s.substring(0, s.length-1))
	else
		return s;
}

//****************************************************************************************
// 문자열 Left & Right Trim 모두 되도록 하는 함수
//****************************************************************************************
function trim(str)
{
	return ltrim(rtrim(str));
}

//****************************************************************************************
// 빈입력폼 체크함수 (단순하게 length로만 비교)
//****************************************************************************************
function isEmpty(toCheckElement,eName) {	
	toCheck = trim(toCheckElement.value);

	if(toCheck == "")
	{
		alert(eName + "을(를) 입력하십시오.");

		toCheckElement.value = "";
		toCheckElement.focus();

		return true;
	}

	return false;
}

//****************************************************************************************
// 빈입력폼 체크함수                       
//****************************************************************************************
function isEmpty2(toCheckElement,eName) {	
	toCheck = toCheckElement.value;
	
    for(var i = 0; i < toCheck.length; i++ ) {
		if( toCheck.substring(i,i+1) != " " ) {
			return false;
			break;
		}
    }
    alert(eName + "을(를) 입력하십시오.");

    toCheckElement.value = "";
    toCheckElement.focus();

    return true;
}

//****************************************************************************************
// 빈입력폼 체크함수 (Combo에서 선택값이 0일 경우)
//****************************************************************************************
function isEmptyCombo(toCheckElement,eName) {	
	if (toCheckElement.selectedIndex == 0) {
		alert(eName + "을(를) 선택하십시오.");
		toCheckElement.focus();
		return true;
	}
	else{
		return false;
	}
}

//****************************************************************************************
// 특수문자 체크함수                      
//****************************************************************************************
function isSpecialChar(toCheckElement,eName)
{
	var spchr = new Array("#","$","&", "'",  "<", ">", "\"");

	for (var k=0; k < spchr.length; k++)
	{
		if(toCheckElement.value.indexOf(spchr[k])  != -1)
		{
			alert(eName + "에는 [" + spchr[k] +"] 기호를 사용할 수 없습니다.");
			toCheckElement.focus();		
			return true;
			break;
		 }
	}
	return false;
}

//****************************************************************************************
// 특수문자 체크함수                      
//****************************************************************************************
function replaceSpecialChar(toCheckElement, arg1, arg2)
{
	// arg1(,) 를 arg2(^)로 변환한다.
	if (toCheckElement.value.indexOf(arg1) !=-1)
	{
		var arrTemp = toCheckElement.value.split(arg1);
		toCheckElement.value = arrTemp.join(arg2);
	}
}

//****************************************************************************************
// 숫자인지 체크함수
//****************************************************************************************
function isNumber(toCheckElement,eName) {
	var i=0;
	for(var i=0; i<toCheckElement.value.length; i++) {
		var toCheck = toCheckElement.value.charAt(i);
		if (toCheck<"0" || toCheck>"9") {
			alert ("[" + eName + "]에는 숫자만 입력가능합니다.");
			toCheckElement.value="";			
			toCheckElement.focus();
			toCheckElement.select();
			return false;
			break;
		}
	}
	return true;
}

//****************************************************************************************
// 문자입력 수 제한
//****************************************************************************************
function fc_chk_num_byte(aro_name,ari_max) {
    var val=aro_name.value;
    var re=/[^0-9]/gi;
    aro_name.value=val.replace(re,"");

    var ls_str = aro_name.value;
    var li_str_len = ls_str.length;

    var li_max = ari_max;
    var i = 0;
    var li_byte = 0;
    var li_len = 0;
    var ls_one_char = "";
    var ls_str2 = "";

    for(var i=0; i< li_str_len; i++) {
        ls_one_char = ls_str.charAt(i);

        if (escape(ls_one_char).length > 4) {
            li_byte += 2;
        } else {
            li_byte++;
        }

        if(li_byte <= li_max) {
            li_len = i + 1;
        }
    }

    if(li_byte > li_max) {
		alert( li_max + "byte를 초과할 수 없습니다. ");

        ls_str2 = ls_str.substr(0, li_len);
        aro_name.value = ls_str2;
    }

    aro_name.focus(); 
}


//****************************************************************************************
// List에서 전체 선택 체크
//****************************************************************************************
function checkAll()
{		
	var frmFORM = document.frmFORM;
	var len = 0;
	for (var i = 0 ; i < frmFORM.elements.length ; i++)
	{
		if (frmFORM.elements[i].type == "checkbox")
			len++;
	}
		
	if (len == 1)
	{
		frmFORM.No.checked = !frmFORM.No.checked;
	}
	else
	{			
		if (frmFORM.allChecked.value == "Y")
			frmFORM.allChecked.value = "N";
		else
			frmFORM.allChecked.value = "Y";

		for (var i=0 ; i < len ; i++)
		{
			if (frmFORM.allChecked.value == "Y")
				frmFORM.No[i].checked = true;
			else
				frmFORM.No[i].checked = false;
		}
	}		
}

//****************************************************************************************
// List에서 전체 선택 체크
//****************************************************************************************
function checkAllItem()
{	
	var frmFORM = document.frmFORM;
	var len = 0;
	
	for (var i = 0 ; i < frmFORM.elements.length ; i++)
	{
		if (frmFORM.elements[i].type == "checkbox" && frmFORM.elements[i].id == "chkContent")
		{
			len++;
		}
	}
	if (len == 1)
	{
		// 비활성화는 체크안되도록 추가
		if (frmFORM.chkContent.disabled == false)
		frmFORM.chkContent.checked = !frmFORM.chkContent.checked;
	}
	else
	{			
		if (frmFORM.allChecked.value == "Y")
			frmFORM.allChecked.value = "N";
		else
			frmFORM.allChecked.value = "Y";

		for (var i=0 ; i < len ; i++)
		{
			// 비활성화는 체크안되도록 추가
			if (frmFORM.allChecked.value == "Y" && frmFORM.chkContent[i].disabled == false)
				frmFORM.chkContent[i].checked = true;
			else
				frmFORM.chkContent[i].checked = false;
		}
	}
}

//****************************************************************************************
// List에서 선택 되었는지 체크
//****************************************************************************************
function checkValidation()
{
	var frmFORM = document.frmFORM;
	var len = 0;
	for (var i = 0 ; i < frmFORM.elements.length ; i++)
	{
		if (frmFORM.elements[i].type == "checkbox")
			len++;
	}
	var bFlag = false;
	if (len == 1)
	{
		if (frmFORM.No.checked)		bFlag = true;
	}
	else
	{
		for (var i=0 ; i < len ; i++)
		{
			if (frmFORM.No[i].checked)
			{
				bFlag = true;
				break;
			}
		}
	}
	
	if (!bFlag)
	{
		alert("삭제할 항목을 선택하십시오.");
		return false;
	}
	else
	{
		return true;
	}
}

//****************************************************************************************
// 체크박스 선택 되었는지 체크
//****************************************************************************************
function checkValidation2(obj)
{
	var frmFORM = document.frmFORM;
	var len = 0;
	for (var i = 0 ; i < frmFORM.elements.length ; i++)
	{
		if (frmFORM.elements[i].type == "checkbox" && frmFORM.elements[i].name == "chkContent")
			len++;
	}

	//var bFlag = false;
	var checkvalues = "";
	if (len == 1)
	{
		if (obj.checked)
			checkvalues = obj.value;
	}
	else
	{
		for (var i=0 ; i < len ; i++)
		{
			if (obj[i].checked)
			{
				if(checkvalues != "") checkvalues += ",";
				checkvalues += obj[i].value;
			}
		}
	}

	return checkvalues;
}

//****************************************************************************************
// input box 글자수 제한
//****************************************************************************************
function length_count(filed, max_count)
{ 
    var str; 
    var str_count = 0; 
    var cut_count = 0; 
    var max_length = max_count; 
    var str_length = filed.value.length; 

    for (k=0;k<str_length;k++) { 
        str = filed.value.charAt(k); 
        if (escape(str).length > 4) { 
            str_count += 2; 
            max_length -= 2; 
        } else { 
            // (\r\n은 1byte 처리) 
            if (escape(str) == '%0A') { 
            } else { 
                str_count++; 
                max_length--; 
            } 
        } 

        if (max_count < str_count) { 
            alert("글자수가 "+ max_count +" 자 이상은 사용불가능합니다"); 
            if (escape(str).length > 4) { 
                str_count -= 2; 
                max_length += 2; 
            } else { 
                str_count--; 
                max_length++; 
            } 
            filed.value = filed.value.substring(0,k); 
            break; 
        } 
    } 
    document.getElementById('now_length').value = max_length; 
} 

//****************************************************************************************
//Element ID 불러쓰기
//****************************************************************************************
function dEI(elementID){
	return document.getElementById(elementID);
} 

//****************************************************************************************
// toggle List
//****************************************************************************************
function toggleList(tabContainer) {
	var tabContainer=document.getElementById(tabContainer)
	var triggers = tabContainer.getElementsByTagName("a");

	for(i = 0; i < triggers.length; i++) {
		if (triggers.item(i).href.split("#")[1])
			triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);

		if (!triggers.item(i).targetEl)
			continue;

		triggers.item(i).targetEl.style.display = "none";
		triggers.item(i).className="";
		triggers.item(i).onclick = function () {
			if (tabContainer.current == this) {
				this.targetEl.style.display = "none";
				this.className="";
				tabContainer.current = null;
			} else {
				if (tabContainer.current) {
					tabContainer.current.targetEl.style.display = "none";
					tabContainer.current.className="";
				}
				this.targetEl.style.display = "block";
				this.className="on";
				tabContainer.current = this;
			}
			return false;
		}
	}
	//triggers.item(0).targetEl.style.display = "block";
}

//****************************************************************************************
// first 예외처리 firstChild(블럭Id, 태그네임, 처리할 아이템 번호) 
// 아이템번호는 0번부터 반환
//****************************************************************************************
function firstChild(Elid, Etn, Num){
	if(Num==""){Num=0;}
	liEl = dEI(Elid).getElementsByTagName(Etn);
	if (liEl.item(Num)) {
		liEl.item(Num).className += " first-child";
	}
}

// first 예외처리 listFirst(블럭Id, 태그네임, 처리할 아이템 갯수) // 아이템번호는 0번부터 반환
function listFirst(Elid, Etn, Num){
	liEl = dEI(Elid).getElementsByTagName(Etn);
	for(i=0; liEl.length>i; i=i+Num){
		liEl.item(i).className += " first";
	}
}

//****************************************************************************************
// 아이프레임 사이즈 조절
//****************************************************************************************
function resizeFrame(iframeWindow, minWidth, minHeight, fixWidth, fixHeight) {
	if (!iframeWindow.name) return false;

	var iframeElement = document.getElementById(iframeWindow.name);
	var resizeWidth = 0;
	var resizeHeight = 0;

	minWidth = (typeof minWidth != 'undefined') ? parseInt(minWidth, 10) : 0;
	minHeight = (typeof minHeight != 'undefined') ? parseInt(minHeight, 10) : 0;
	fixWidth = (typeof fixWidth != 'undefined') ? parseInt(fixWidth, 10) : 0;
	fixHeight = (typeof fixHeight != 'undefined') ? parseInt(fixHeight, 10) : 0;

	if (document.all) { // ie
		if (iframeWindow.document.compatMode && iframeWindow.document.compatMode != 'BackCompat') {
			resizeWidth = iframeWindow.document.documentElement.scrollWidth;
			resizeHeight = iframeWindow.document.documentElement.scrollHeight;
		}
		else {
			resizeWidth = iframeWindow.document.body.scrollWidth;
			resizeHeight = iframeWindow.document.body.scrollHeight;
		}
	}
	else {
		resizeWidth = iframeWindow.document.body.scrollWidth;
		resizeHeight = iframeWindow.document.body.scrollHeight;
	}

	if (minWidth > 0 && resizeWidth < minWidth) resizeWidth = minWidth;			// 최소 폭
	if (minHeight > 0 && resizeHeight < minHeight) resizeHeight = minHeight;		// 최소 높이

	if (fixWidth > 0) resizeWidth = fixWidth;		// 고정 폭
	if (fixHeight > 0) resizeHeight = fixHeight;	// 고정 높이

	if (fixWidth > -1) iframeElement.style.width = resizeWidth + 'px';
	if (fixHeight > -1) iframeElement.style.height = resizeHeight + 'px';
}

//****************************************************************************************
// 이미지 사이즈 줄이기
//****************************************************************************************
function resizeImage(objImg, limitId) {
	if (typeof (objImg) != "object") objImg = document.getElementById(objImg);
	var objParent = objImg.parentNode;
	var imgWidth = parseInt(objImg.width, 10);
	var fixWidth = imgWidth;

	if (typeof limitId == 'undefined') return;

	while (objParent) {
		if (objParent && objParent.id == limitId) {
			fixWidth = objParent.clientWidth;
			break;
		}
		objParent = objParent.offsetParent;
	}

	if (imgWidth > fixWidth) {
		objImg.width = fixWidth;
	}
}

function resizeImageAll(limitId) {
	var objLimit = document.getElementById(limitId);
	if (objLimit) {
		var fixWidth = objLimit.clientWidth;
		var arrImgs = objLimit.getElementsByTagName("IMG");
		for (var i=0, len=arrImgs.length; i<len; i++) {
			if (parseInt(arrImgs[i].width, 10) > fixWidth) {
				arrImgs[i].width = fixWidth;
			}
		}
	}
}
//****************************************************************************************
// 입력 문자길이 확인후 다음항목으로 포커스 옮기기
//****************************************************************************************
function goNextFocus(obj, len, next_item) {
	if (obj.value.stripspace().length == len){
		next_item.focus();
	}
}

//****************************************************************************************
// 영문 문자열 확인
//****************************************************************************************
function strEngCheck(value){
	var i;

	for(i=0;i<value.length-1;i++){
		// 한글 체크 (한글 ASCII코드 : 12593부터)
		if (value.charCodeAt(i) > 12592) return false;
		// 공백 체크
		if (value.charAt(i) == " ") return false;
	}
	return true;
}
//****************************************************************************************
// 파일명 확인
//****************************************************************************************
function checkFileName(obj) {
	var result = false;

	if (obj.value.stripspace() != "") {
		var fidx = obj.value.lastIndexOf("\\")+1;
		var filename = obj.value.substr(fidx, obj.value.length);
		result = strEngCheck(filename);
	}

	if (!result) {
		alert("파일명을 반드시 영문 또는 숫자로 해주세요.");
		obj.focus();
		return false;
	}
	return true;
}
//****************************************************************************************
// 파일 확장자
//****************************************************************************************
function getFileExt(value) {
	if (value != "") {
		var fidx = value.lastIndexOf("\\")+1;
		var filename = value.substr(fidx, value.length);
		var eidx = filename.lastIndexOf(".")+1;

		return filename.substr(eidx, filename.length);
	}
}
//****************************************************************************************
// 파일확장자 확인
//****************************************************************************************
function checkFileExt(obj, exts, errMsg) {
	var arrExt = exts.toLowerCase().split(",");
	var result = false;

	if (obj.value.stripspace() != "") {
		var ext = getFileExt(obj.value).toLowerCase();

		for (var i=0; i<arrExt.length; i++) {
			if (arrExt[i].trim() == ext) result = true;
		}
	}

	if (!result) {
		alert(errMsg);
		obj.focus();
		return false;
	}
	return true;
}
//****************************************************************************************
// 영문/숫자 혼용 확인
//****************************************************************************************
function checkEngNum(str) {
	var RegExpE = /[a-zA-Z]/i;
	var RegExpN = /[0-9]/;

	return (RegExpE.test(str) && RegExpN.test(str)) ? true : false;
}
//****************************************************************************************
// 특수문자 확인
//****************************************************************************************
function checkSpecialChar(value) {
	var specialChar = "`~!@#$%^&*_+=|\\[]{}:;,<.>/?'\"";
	for (var i=0, len=specialChar.length; i<len; i++) {
		if (value.indexOf(specialChar.substr(i, 1)) != -1) return true;
	}
	return false;
}
//****************************************************************************************
// 아이디 확인
//****************************************************************************************
function checkID(value, min, max) {
	var RegExp = /^[a-zA-Z0-9_]*$/i;
	var returnVal = RegExp.test(value) ? true : false;
	if (typeof(min) != "undefined" && value.length < min) returnVal = false;
	if (typeof(max) != "undefined" && value.length > max) returnVal = false;
	return returnVal;
}
//****************************************************************************************
// 비밀번호 확인
//****************************************************************************************
function checkPass(value, min, max) {
	var RegExp = /^[a-zA-Z0-9]*$/i;
	var returnVal = RegExp.test(value) ? true : false;
	if (typeof(min) != "undefined" && value.length < min) returnVal = false;
	if (typeof(max) != "undefined" && value.length > max) returnVal = false;
	return returnVal;
}
//****************************************************************************************
// 숫자 확인
//****************************************************************************************
function checkNum(value, isDec) {
	var RegExp;

	if (!isDec) isDec = false;
	RegExp = (isDec) ? /^-?[\d\.]*$/ : /^-?[\d]*$/;

	return RegExp.test(value)? true : false;
}
//****************************************************************************************
// 이메일 확인
//****************************************************************************************
function checkEmail(email) {
	if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
		return true;
	}
	else {
		return false;
	}
}
//****************************************************************************************
// URL 확인
//****************************************************************************************
function checkUrl(url) {
	var exp = new RegExp("^(http|https)\:\/\/");
	if (exp.test(url.toLowerCase())) {
		return true;
	}
	else {
		return false;
	}
}
//****************************************************************************************
// 공백 확인
//****************************************************************************************
function checkEmpty(obj) {
	if (obj.value.stripspace() == "") {
		return true;
	}
	else {
		return false;
	}
}
//****************************************************************************************
// 콤마(,) 제거
//****************************************************************************************
function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}
//****************************************************************************************
// 숫자 3자리수마다 콤마(,) 찍기
//****************************************************************************************
function formatComma(num, pos) {
	if (!pos) pos = 0;  //소숫점 이하 자리수
	var re = /(-?\d+)(\d{3}[,.])/;

	var strNum = stripComma(num.toString());
	var arrNum = strNum.split(".");

	arrNum[0] += ".";

    while (re.test(arrNum[0])) {
        arrNum[0] = arrNum[0].replace(re, "$1,$2");
    }

	if (arrNum.length > 1) {
		if (arrNum[1].length > pos) {
			arrNum[1] = arrNum[1].substr(0, pos);
		}
		return arrNum.join("");
	}
	else {
		return arrNum[0].split(".")[0];
	}
}
//****************************************************************************************
// 강제 소수점 이하 0채우기
// num: 대상숫자, pos: 출력을 원하는 소수점자리수
//****************************************************************************************
function setRoundZero(num, pos) {
	var strNum = stripComma(num.toString());
	var arrNum = strNum.split(".");

	if (arrNum.length <= 1) {
		num = arrNum[0]+".";
		for (var i=0; i<pos; i++) {
			num += "0";
		}
	}
	else {
		num = setRound(num, pos);
	}
	return num;
}

//****************************************************************************************
// 통화형태로 변환
//****************************************************************************************
function toCurrency(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(stripComma(num))) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, false);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), false);
	num = removePreZero(num);
	obj.value = formatComma(num);
}
//****************************************************************************************
//글 숫자로만 받음.
//style="ime-mode:disabled" onkeypress="javascript:GetKey();"
//****************************************************************************************
function GetKey()
{
	if (event.keyCode >= 48 && event.keyCode <= 57) {
	  event.returnValue = true;
	  }
	else {
	  event.returnValue = false;
	  }
}
//****************************************************************************************
//주민번호체크
//****************************************************************************************
function checkJumin(hJUMIN1, hJUMIN2) {
		var rn;
		rn=hJUMIN1 + hJUMIN2;
		var sum=0;
		for(i=0;i<8;i++) { sum+=rn.substring(i,i+1)*(i+2); }
		for(i=8;i<12;i++) { sum+=rn.substring(i,i+1)*(i-6); }
		sum=11-(sum%11);
		if (sum>=10) { sum-=10; }
		if (rn.substring(12,13) != sum || (rn.substring(6,7) !=1 && rn.substring(6,7) != 2)) {
			alert("주민등록번호에 오류가 있습니다. 다시 확인하십시오.");
			return;
		} else {
			return;
		}
}
//****************************************************************************************
// 전화번호 유효성 검사.
//****************************************************************************************
function DialCk(StrVal,i) {
	if (i == 1){
		if( StrVal.match(/01[016789]\-\d\d+\-\d\d\d\d/g) != StrVal ) {
			alert("정확한 휴대폰번호가 아닙니다.");
			return true;
		}
	}
	else if (i == 2){
		if( StrVal.match(/0\d+\-\d\d+\-\d\d\d\d/g) != StrVal ) {
			alert("정확한 전화번호가 아닙니다.");
			return true;
		}
	}
	else if (i == 3){
		if( StrVal.match(/0\d+\-\d\d+\-\d\d\d\d/g) != StrVal ) {
			alert("정확한 팩스번호가 아닙니다.");
			return true;
		}
	}
	else if (i == 4){ // 의미는 없다. 멧세지만 다를뿐.. 전화번호와 핸드폰 팩스 모두 공통으로 사용할때 쓴다.
		if( StrVal.match(/0\d+\-\d\d+\-\d\d\d\d/g) != StrVal ) {
			alert("정확한 연락처가 아닙니다.");
			return true;
		}
	}
	else {}
}

//****************************************************************************************
// 이미지 미리보기
//****************************************************************************************
function previewImage(obj, imgId) {
	var objImg = document.getElementById(imgId);

	if (obj.value.stripspace() == "") return;

	var ext = getFileExt(obj.value).toUpperCase();

	if (ext == 'JPG' || ext == 'GIF' || ext == 'BMP' || ext == 'PNG') objImg.src = obj.value;
}

//****************************************************************************************
//팝업 레이어
//****************************************************************************************
 
 function showPop_new(object){
  for (i=1; i<=3; i++){
    if(i==object){
    document.getElementById('pop_'+object).style.display='block';
    }else{
     document.getElementById('pop_'+i).style.display='none';
    }
  }
}

	//Element ID 불러쓰기
function dEI(elementID){
	return document.getElementById(elementID);
} 

// 이미지 롤오버
function imgRollover(imgBoxID){
	var MenuCounts = dEI(imgBoxID).getElementsByTagName("img");
	for (i=0;i<MenuCounts.length;i++) {
		var numImg=MenuCounts.item(i);
		var ImgCheck = numImg.src.substring(numImg.src.length-7,numImg.src.length);
		if (ImgCheck!="_on.gif") {
				numImg.onmouseover = function () {
					this.src = this.src.replace(".gif", "_on.gif");
				}
				numImg.onmouseout = function () {
					this.src = this.src.replace("_on.gif", ".gif");
				}
			}
	}
}

// toggle List
function toggleList(tabContainer) {
	var tabContainer=document.getElementById(tabContainer)
	var triggers = tabContainer.getElementsByTagName("a");

	for(i = 0; i < triggers.length; i++) {
		if (triggers.item(i).href.split("#")[1])
			triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);

		if (!triggers.item(i).targetEl)
			continue;

		triggers.item(i).targetEl.style.display = "none";
		triggers.item(i).className="";
		triggers.item(i).onclick = function () {
			if (tabContainer.current == this) {
				this.targetEl.style.display = "none";
				this.className="";
				tabContainer.current = null;
			} else {
				if (tabContainer.current) {
					tabContainer.current.targetEl.style.display = "none";
					tabContainer.current.className="";
				}
				this.targetEl.style.display = "block";
				this.className="on";
				tabContainer.current = this;
			}
			return false;
		}
	}
	//triggers.item(0).targetEl.style.display = "block";
}
// first 예외처리 firstChild(블럭Id, 태그네임, 처리할 아이템 번호) // 아이템번호는 0번부터 반환
function firstChild(Elid, Etn, Num){
	if(Num==""){Num=0;}
	liEl = dEI(Elid).getElementsByTagName(Etn);
	if (liEl.item(Num)) {
		liEl.item(Num).className += " first-child";
	}
}

// first 예외처리 listFirst(블럭Id, 태그네임, 처리할 아이템 갯수) // 아이템번호는 0번부터 반환
function listFirst(Elid, Etn, Num){
	liEl = dEI(Elid).getElementsByTagName(Etn);
	for(i=0; liEl.length>i; i=i+Num){
		liEl.item(i).className += " first";
	}
}

// Tab Content
function tabCheck(dotabid, num){
		var inum=parseInt(num)-1;
		var linkTab=dEI(dotabid).getElementsByTagName("a");
		for (i=0;i<linkTab.length;i++) {
			var tabimg = linkTab.item(i).getElementsByTagName("img").item(0);
			var  tabContents= dEI(dotabid+(1+i));
			if (i==inum) {
				if(tabContents.style.display!="block"){
					tabimg.src=tabimg.src.replace(".gif", "_on.gif");
					tabContents.style.display="block";
				}
		}else{
			tabimg.src=tabimg.src.replace("_on.gif", ".gif");
			tabContents.style.display="none";
		}
	}
}

// Tab Content Rollover
function tabRollover(dotabid , tnum){
	var inum=parseInt(tnum)-1;
	var linkTab=dEI(dotabid).getElementsByTagName("a");
	for (i=0;i<linkTab.length;i++) {
		var tabimg = linkTab.item(i).getElementsByTagName("img").item(0);
		var tabContents= dEI(dotabid+(1+i));
		if (i==inum) {
			if(tabContents.style.display!="block"){
			tabContents.style.display="block";
			tabimg.src=tabimg.src.replace(".gif", "_on.gif");
			}
		}else{
		tabimg.src=tabimg.src.replace("_on.gif", ".gif");
		tabContents.style.display="none";
		}
	}
}
// 레이어팝업
function imgCheck(totnum, num){
	var inum=parseInt(num)-1;
	for (i=0;i<totnum;i++) {
		var tabContents=dEI("tab"+(1+i));
		if (i==inum) {
			if(tabContents.style.display!="block"){
				tabContents.style.display="block";
			}
		}else{
			tabContents.style.display="none";
		}
	}
}

//-----------------------------------------
// Side bar MENU 플래쉬 width 동적이동
//-----------------------------------------
/*function fnOpen1()
{
	document.getElementById("left_menu").width = "350";
	document.getElementById("left_menu").style.position = "";
	document.getElementById("sidebar").style.width = "350";
}

function fnOpen2()
{
	document.getElementById("left_menu").width = "1000";
	document.getElementById("left_menu").style.position = "";
	document.getElementById("sidebar").style.width = "1000";
}*/
function fnOpen1() {
	//$(".sidebar").hide("slow").parent().animate({width:"20px"},"slow");
	$("#sidebar_wrap").css("width","300px").children("#sidebar_wrap").css("opacity",0).show("slow").animate({"opacity":1},100);
}
function fnOpen2() {
	//$(".sidebar").hide("slow").parent().animate({width:"20px"},"slow");
	$("#sidebar_wrap").css("width","1000px").children("#sidebar_wrap").css("opacity",0).show("slow").animate({"opacity":1},100);
}

function fnClose() {
	//$(".sidebar").hide("slow").parent().animate({width:"20px"},"slow");
	$("#sidebar_wrap").css("width","100px").children("#sidebar_wrap").css("opacity",0).show("slow").animate({"opacity":1},100);
}
/*function fnClose()
{
	document.getElementById("left_menu").width = "100";
	document.getElementById("sidebar").style.width = "100";
}

// 플래쉬에서 호출하는 레이어 스크립트
function fnOpen1() {
	//alert('index.asp fnOpen()');
	
	//$("#modal-zoom").modal();
	$("#side_b1").show();
	$("#side_b2").hide();
}
//조감도
function fnOpen2() {
	//alert('index.asp fnOpen()');
	
	//$("#modal-zoom").modal();
	$("#side_b2").show();
	$("#side_b1").hide();
	
}


$(document).ready(function () {
	if ($(window).width() <= 1024)
	{
		$("#side_b").css("width","20px").children(".sidebar").hide();
		$(".btn img").attr("src", "../images/common/side_btn.png");
	}

	
	$(".btn").click(function() {
		if ($(this).siblings(".sidebar").css("display") == "none")
		{
			$(this).children().attr("src","../images/common/side_btn_off.png").end().parent().animate({width:"260px"},"slow").children(".sidebar").css("opacity",0).show("slow").animate({"opacity":1},100);
		}
		else
		{
			$(this).children().attr("src","../images/common/side_btn.png").end().siblings(".sidebar").animate({"opacity":0},200);//.hide("slow").parent().animate({width:"20px"},500);
			self.setTimeout("hideMenu()",300);
		}
	});*/

//탭메뉴
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tab")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		thismenu.onclick = function tabMenuClick() {
			currentmenu = this.container.current;
			if (currentmenu == this)
				return false;

			if (currentmenu) {
				currentmenu.targetEl.style.display = "none";
				if (currentmenu.imgEl) {
					currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", "_off.gif");
				} else {
					currentmenu.className = currentmenu.className.replace("on", "");
				}
			}

			this.targetEl.style.display = "block";
			if (this.imgEl) {
				this.imgEl.src = this.imgEl.src.replace("_off.gif", "_on.gif");
			} else {
				this.className += " on";
			}
			this.container.current = this;

			return false;
		};

		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
		tabContainer.first.onclick();
}
//png
function setPng24(obj) { 
    obj.width=obj.height=1; 
    obj.className=obj.className.replace(/\bpng24\b/i,''); 
    obj.style.filter = 
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src+"',sizingMethod='image');" 
    obj.src='';  
    return ''; 
} 



//QR Code 팝업
function goQrcode() {
	var win = window.open('/qr_popup.asp','Qrcode', 'width=382, height=230, left=0, top=0');
	win.focus();	
}
function privacy() {
	var win = window.open('/event/privacy.asp','privacy', 'width=380, height=230, left=0, top=0');
	win.focus();	
}


function chgLayer() {	
	
	SLB('/etc/privacy.asp','iframe', 450, 300, false, true);
	}
	
//****************************************************************************************
// 팝업 - 팝업창 화면중앙 오픈
//****************************************************************************************
var win = null; 
function NewWindow(mypage,myname,w,h,scroll)
{ 
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0; 
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0; 
	settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable' ;
	//win = window.open(mypage,myname,settings)
	window.open(mypage,myname,settings) ;
} 

// 입주자모집공고
function goGonggo()
{	
	var g_wb = null;
	var win = window.open('/pdf/gonggo.pdf','gonggo','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,left=0,top=0,width='+window.screen.width + ',height='+window.screen.height)
}

}
/*
     FILE ARCHIVED ON 19:58:28 May 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:55:12 Oct 18, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 59.577
  exclusion.robots: 0.221
  exclusion.robots.policy: 0.212
  RedisCDXSource: 0.653
  esindex: 0.008
  LoadShardBlock: 33.218 (3)
  PetaboxLoader3.datanode: 42.439 (4)
  CDXLines.iter: 22.738 (3)
  load_resource: 272.807
  PetaboxLoader3.resolve: 259.379
*/