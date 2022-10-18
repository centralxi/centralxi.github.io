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


function fGoSave()
{
	var f = document.frmFORM ;
	
	var su_var = "0123456789";
	

	if (f.hAGREE1[0].checked==false)
	{
		alert("개인정보취급방침에 동의해 주세요.");
		f.hAGREE1[0].focus();
		return ;
	}	



	if (f.hNAME.value=="")
	{
		alert("성명을 입력해 주세요.");
		f.hNAME.focus();
		return;		
	}

	if (f.hPCS1.value==""){
		alert("핸드폰를 입력해주세요.")
		f.hPCS1.focus();
		return;
	}
	for (i=0;i<f.hPCS1.value.length;i++){
		if ( su_var.indexOf(f.hPCS1.value.substring(i,i+1)) < 0 ){
			alert("핸드폰는 숫자로만 이루어져야 합니다.");
			f.hPCS1.focus();
			return;
		}
	}
	if (f.hPCS2.value==""){
		alert("핸드폰를 입력해주세요.")
		f.hPCS2.focus();
		return;
	}
	for (i=0;i<f.hPCS2.value.length;i++){
		if ( su_var.indexOf(f.hPCS2.value.substring(i,i+1)) < 0 ){
			alert("핸드폰는 숫자로만 이루어져야 합니다.");
			f.hPCS2.focus();
			return;
		}
	}
	if (f.hPCS3.value==""){
		alert("핸드폰를 입력해주세요.")
		f.hPCS3.focus();
		return;
	}
	for (i=0;i<f.hPCS3.value.length;i++){
		if ( su_var.indexOf(f.hPCS3.value.substring(i,i+1)) < 0 ){
			alert("핸드폰는 숫자로만 이루어져야 합니다.");
			f.hPCS3.focus();
			return;
		}
	}


	if (f.confirmYN.value=="N")
	{
		alert("중복확인을 클릭해 주세요.");
		return;
	}

	
	if (f.hEMAIL.value==""){
		alert("이메일 주소를 입력해주세요.")
		f.hEMAIL.focus();
		return;
	}
	if (f.EmailTail.value==""){
		alert("이메일 주소를 입력해주세요.")
		f.EmailTail.focus();
		return;
	}


	/*
	if (email_chk(f.hEMAIL.value+'@'+f.EmailTail.value)==false){
		alert("이메일 주소가 올바르지 않습니다.");
		return;
	}
	*/
	
	if(f.hZIP1.value==""||f.hZIP2.value=="")
	{
		alert("우편번호를 입력해 주세요.");
		return;
	}

	if(f.hADDR5.value.length <2)
	{
		alert("주소를 입력하세요.");
		f.hADDR5.focus();
		return;
	}
	if(f.hADDR4.value.length <2)
	{
		alert("상세주소를 입력하세요.");
		f.hADDR4.focus();
		return;
	}

	if(f.hADDR4.value.length <2)
	{
		alert("상세주소를 입력하세요.");
		f.hADDR5.focus();
		return;
	}






//---설문시작

	var checked
	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_1') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 1번 문항을 선택해 주세요");
		return;
	}

	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_2') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 2번 문항을 선택해 주세요");
		return;
	}

	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_3') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 3번 문항을 선택해 주세요");
		return;
	}

	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_4') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 4번 문항을 선택해 주세요");
		return;
	}

	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_5') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 5번 문항을 선택해 주세요");
		return;
	}


	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_6') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 6번 문항을 선택해 주세요");
		return;
	}



	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_7') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 7번 문항을 선택해 주세요");
		return;
	}



	checked = false;

	for(var j=0; j < f.elements.length; j++){
		if (f.elements[j].name=='Q_8') {

			if (f.elements[j].checked){
				checked = true;
			}
		}
	}

	if(checked == false){
		window.alert("설문조사 중 8번 문항을 선택해 주세요");
		return;
	}



	/*
	len = 0
	for (i=0;i<f.hIS_INFO.length ;i++ )
	{
		if (f.hIS_INFO[i].checked==true)
		{
			len = len + 1;
		}
	}

	if (len==0)
	{
		alert("분양정보 수신여부를 선택해 주세요.")
		return ;
	}
	*/
		

//---설문완료

	var argNAME = f.hNAME.value
	var argPCS  = f.hPCS1.value + "-" + f.hPCS2.value + "-" + f.hPCS3.value

	if(confirm("["+argNAME+"]님께서 입력하신 전화번호는[" + argPCS + "]입니다.\n맞으시면 아래 확인버튼을 눌러 주세요."))
	{
		f.target = "ckframe1";
		//f.action = "";
		//f.action = f.hSSLURL.value + "/register/"+f.hACTON_URL.value+"regist_save_action.asp";
		f.action = "regist_save_action.asp";
		//f.action = f.hSSLURL.value + "/register/regist_save_action.asp";
		f.submit();
	}

}

// SMS 인증받기
function fGoAuthSMS()
{
	var f = document.frmFORM;
	var su_var = "0123456789";

	if(f.hNAME.value == "")
	{
		alert("성명을 입력하세요.");
		f.hNAME.focus();
		return;
	}

	if (f.hPCS1.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS1.focus();
		return;
	}
	
	for (i=0;i<f.hPCS1.value.length;i++){
		if ( su_var.indexOf(f.hPCS1.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS1.focus();
			return;
		}
	}
	if (f.hPCS2.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS2.focus();
		return;
	}
	for (i=0;i<f.hPCS2.value.length;i++){
		if ( su_var.indexOf(f.hPCS2.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS2.focus();
			return;
		}
	}
	if (f.hPCS3.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS3.focus();
		return;
	}
	for (i=0;i<f.hPCS3.value.length;i++){
		if ( su_var.indexOf(f.hPCS3.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS3.focus();
			return;
		}
	}


	f.hAUTH_PCS.value = f.hPCS1.value + "-" + f.hPCS2.value + "-" + f.hPCS3.value;

	var argNAME = f.hNAME.value
	var argPCS  = f.hPCS1.value + "-" + f.hPCS2.value + "-" + f.hPCS3.value
	var agrID = f.hID.value
	if(confirm("["+argNAME+"]님께서 입력하신 전화번호는[" + argPCS + "]입니다.\n맞으시면 아래 확인버튼을 눌러 주세요."))
	{

		f.action = "../inc/auth_smssend.asp?hID="+agrID;
		f.target = "ckframe1";
		f.submit();
	}
}

function fZIPSet(zip1,zip2,addr1,addr2,addr3)
{
	var f
	f = document.frmFORM;
	f.hZIP1.value= zip1;
	f.hZIP2.value= zip2;
	f.hADDR1.value= addr1;
	f.hADDR2.value= addr2;
	f.hADDR3.value= addr3;
	f.hADDR5.value= addr1 + " " + addr2 + " " + addr3;
	f.hADDR4.focus();
}

function EmailMethod()
{
	var f = document.frmFORM;
	if (f.EmailTail2.value=='D') // 직접입력이면.
	{
		f.EmailTail.value = "";
		f.EmailTail.focus();
	}
	else
	{
		f.EmailTail.value = f.EmailTail2.value;
	}
}

function fGoZIPCODE()
{
	
	var win = window.open('pop_zip.asp','pop_zip','scrollbars=no,resizable=no, width=450,height=420');
	/*
	win.focus();
	*/
	//window.open('/include/util/zip_find.asp','zipWin','scrollbars=no,resizable=no, width=840,height=630');

}

function fReset() {
	document.frmFORM.reset();
}

// 이메일 체크
function email_chk(tempf)
{
	var t = tempf
	var ValidFlag = false
	var atCount = 0
	var SpecialFlag
	var atLoop
	var atChr
	var BadFlag
	var tAry1
	var UserName
	var DomainName

	if ( t.length > 0 && t.indexOf("@") > 0 && t.indexOf(".") > 0 ) {
		atCount = 0
		SpecialFlag = false

		for( atLoop=1; atLoop<=t.length; atLoop++ ) {
			atChr = t.substring( atLoop, atLoop+1 )
			if ( atChr == "@" ) atCount = atCount + 1

			if ( (atChr >= 32) && (atChr <= 44) ) SpecialFlag = true 
			if ( (atChr == 47) || (atChr == 96) || (atChr >= 123) ) SpecialFlag = true 
			if ( (atChr >= 58) && (atChr <= 63) ) SpecialFlag = true 
			if ( (atChr >= 91) && (atChr <= 94) ) SpecialFlag = true 
		}

		if ( ( atCount == 1 ) && (SpecialFlag == false ) ) {
			BadFlag = false
			tAry1 = t.split("@")
			UserName = tAry1[0]
			DomainName = tAry1[1]
			if ( (UserName.length <= 0 ) || (DomainName.length <= 0 ) ) BadFlag = true
			if ( DomainName.substring( 1, 2 ) == "." ) BadFlag = true
			if ( DomainName.substring( DomainName.length-1, DomainName.length) == "." ) BadFlag = true
			ValidFlag = true
		}
	}
	if ( BadFlag == true ) ValidFlag = false
	return ValidFlag
}

function release(){
	
	f = document.frmFORM ;

	if (f.hAPP_BANK[4].checked==true)
	{
		f.hAPP_ORDER[0].disabled = true;
		f.hAPP_ORDER[1].disabled = true;
		f.hAPP_ORDER[2].disabled = true;
		f.hAPP_ORDER[3].checked = true;
	}else{
		f.hAPP_ORDER[0].disabled = false;
		f.hAPP_ORDER[1].disabled = false;
		f.hAPP_ORDER[2].disabled = false;
		f.hAPP_ORDER[3].checked = false;
	}
	
}

/*
청약통장 선택여부에 따른 disabled 처리.
*/
function subCkArea(param){
	var f = document.frmFORM;
	if (param=="A")
	{
		f.Q_2[0].disabled = false;
		f.Q_2[1].disabled = false;
		f.Q_2[2].disabled = false;
		f.Q_2[3].disabled = false;
		f.Q_3.disabled = false;
		f.Q_4.disabled = false;
		f.Q_5[0].disabled = false;
		f.Q_5[1].disabled = false;

	}
	else{
		f.Q_2[0].disabled = true;
		f.Q_2[1].disabled = true;
		f.Q_2[2].disabled = true;
		f.Q_2[3].disabled = true;
		f.Q_3.disabled = true;
		f.Q_4.disabled = true;
		f.Q_5[0].disabled = true;
		f.Q_5[1].disabled = true;

		f.Q_2[0].checked = false;
		f.Q_2[1].checked = false;
		f.Q_2[2].checked = false;
		f.Q_2[3].checked = false;
		f.Q_3.value = "";
		f.Q_4.value = "";
		f.Q_5[0].checked = false;
		f.Q_5[1].checked = false;

	}
}


//****************************************************************************************
// 관심고객등록. 중복확인검사
//****************************************************************************************
function fconfirmYN()
{
	f = document.frmFORM ;
	
	var su_var = "0123456789";
	
	if (f.hNAME.value=="")
	{
		alert("성명을 입력해 주세요.");
		f.hNAME.focus();
		return ;		
	}

	if (f.hPCS1.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS1.focus();
		return ;
	}
	for (i=0;i<f.hPCS1.value.length;i++){
		if ( su_var.indexOf(f.hPCS1.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS1.focus();
			return ;
		}
	}
	if (f.hPCS2.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS2.focus();
		return ;
	}
	for (i=0;i<f.hPCS2.value.length;i++){
		if ( su_var.indexOf(f.hPCS2.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS2.focus();
			return ;
		}
	}

	if (f.hPCS3.value==""){
		alert("휴대전화번호를 입력해주세요.")
		f.hPCS3.focus();
		return ;
	}
	for (i=0;i<f.hPCS3.value.length;i++){
		if ( su_var.indexOf(f.hPCS3.value.substring(i,i+1)) < 0 ){
			alert("휴대전화번호는 숫자로만 이루어져야 합니다.");
			f.hPCS3.focus();
			return ;
		}
	}
	if (DialCk(f.hPCS1.value+"-"+f.hPCS2.value+"-"+f.hPCS3.value,"1"))
	{
		return;
	}	

	f.target='ckframe1';
	f.action = "regist_check.asp";
	f.submit();
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

}
/*
     FILE ARCHIVED ON 19:29:50 May 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:55:12 Oct 18, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 128.312
  exclusion.robots: 0.179
  exclusion.robots.policy: 0.173
  RedisCDXSource: 1.952
  esindex: 0.007
  LoadShardBlock: 106.298 (3)
  PetaboxLoader3.datanode: 86.114 (4)
  CDXLines.iter: 17.602 (3)
  load_resource: 44.935
  PetaboxLoader3.resolve: 22.4
*/