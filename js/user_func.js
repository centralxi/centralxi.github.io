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
// 작성일자 : 2014/08/01
// 기    능 : 사용자페이지 관련 함수 모음(유동적)
// 작업이력 :
//						'1)	2009/12/16 최초작성
// #######################################################################################

//****************************************************************************************
// 관심고객등록
//****************************************************************************************
var f;

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
	
	f.target='ckframe';
	f.action = f.hSSLURL.value + "/event/regist_check.asp";
	f.submit();
}

//****************************************************************************************
// 우편번호찾기
//****************************************************************************************
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

function fRET_ZIP(zip1,zip2,city,addr1,addr2)
{
  opener.fZIPSet(zip1,zip2,city,addr1,addr2);
  this.close();
}

//****************************************************************************************
// 관심고객등록.이메일선택
//****************************************************************************************
function ChangeEmail()
{
	var f = document.frmFORM;
	if (f.hEMAIL3.value=='D') // 직접입력이면.
	{
		f.hMAIL_SVR.value = "";
	}
	else
	{
		f.hMAIL_SVR.value = f.hEMAIL3.value;
	}
}
//****************************************************************************************
// 관심고객등록 우편번호찾기 팝업열기
//****************************************************************************************
function fGoZIPCODE()
{
	NewWindow('./pop_zip.asp','post', '450', '450','no'); /* 20131212 사이즈 수정 */
}

//****************************************************************************************
// 관심고객등록. 등록후 화면이동
//****************************************************************************************
function fLoad() {
	//document.frmFORM.reload();
	location.href = f.hDEFAULT_URL.value + "/daelim/";
}

//****************************************************************************************
//이북오픈하기.
//****************************************************************************************
function wndWebBook()
{	
	//g_wb = openEbook(targetBookID, themeID,srcDir);
	
}



function goCatalog() {	
	//var win = window.open('/ebook/xebook.html','catalog', 'width=1280, height=870 left=0, top=0, scrollbars=no');
	var win = window.open('/ebook/xebook.html','catalog','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,left=0,top=0,width='+window.screen.width + ',height='+window.screen.height)
	win.focus();
}


// 주택내부모습 오픈.
function fGoCyber(){
	var cyberWin1 = window.open("/cyber_modelhouse/vrMain.html","vrMain","fullscreen=yes,toolbar=0,menubar=0,scrollbars=no,resizable=no");
	cyberWin1.focus();
}

// 찾아오시는길

function goMap()
{		
	NewWindow("/pop_location.asp",'pop_location',526,452,'no');
}

//QR코드
function goQr()
{
	NewWindow("/qr_popup.asp",'qr_popup',382,248,'no');
}



}
/*
     FILE ARCHIVED ON 19:58:56 May 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:55:17 Oct 18, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 4897.842
  exclusion.robots: 0.159
  exclusion.robots.policy: 0.152
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 218.235 (3)
  PetaboxLoader3.datanode: 113.155 (4)
  CDXLines.iter: 20.555 (3)
  load_resource: 77.737
  PetaboxLoader3.resolve: 42.302
*/