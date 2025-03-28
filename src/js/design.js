
/*------------------------------------nav*/
/*main menu*/
$('.nav>ul>li>a').click(function(){
	var idx = $('.nav>ul>li>a').index($(this));
	$('.nav>ul>li>a').removeClass('active').eq(idx).addClass('active')
});

/*sub menu*/
$('.nav>ul>li>a+ul>li>a').click(function(){
	var idx = $('.nav>ul>li>a+ul>li>a').index($(this));
	$('.nav>ul>li>a+ul>li>a').removeClass('on').eq(idx).addClass('on')
});



/*------------------------------------paging*/
$('.paging ul a').click(function(){
	var idx = $('.paging ul a').index($(this));
	$('.paging ul a').removeClass('on').eq(idx).addClass('on')
});


/*------------------------------------toggle*/
$('.toggle').click(function(){
	$(this).toggleClass('on')
});

$('.sort').click(function(){
	if( $(this).hasClass('up') ){ 
		$(this).addClass('down').removeClass('up');
	}else if  (  $(this).hasClass('down') ) {
		$(this).removeClass('up  down');
	}else {
		$(this).addClass('up');
	}
});



/*------------------------------------pop*/

function popOpen(target){
	$('#' + target).addClass('open')
}


$('.popClose').click(function(){
	$(this).parents('.pop').removeClass('open')
});



//모달 외 영역 닫기
$(document).mouseup(function (e){
	var LayerPopup = $(".modal");
	if(LayerPopup.has(e.target).length === 0){
		LayerPopup.removeClass("open");
	}
});

function popClose(obj){
	$(obj).parents('.pop').removeClass('open')
}


/*------------------------------------toast*/
function toast(toastTxt){
	var toast = '<section class="toast"><i class="ico-chk orange500"></i><p>'+toastTxt+'</p></section>';
	$('body').append(toast);
	setTimeout(function(){
		$('.toast').remove();
	},1200);
}

toast('저장되었습니다.')

function toastErr(toastTxt){
	var toast = '<section class="toast"><i class="ico-chk orange500"></i><p>'+toastTxt+'</p></section>';
	$('body').append(toast);
	setTimeout(function(){
		$('.toast').remove();
	},1200);
}

/*------------------------------------form*/
$(document).ready(function (){
	if( $('.ipt').hasClass('readonly')){
		$('.ipt.readonly').find('input').attr('readonly', true);
	}
});




/*------------------------------------datepicker*/

//달력 open (from-to)
function date(obj){

	//common
	var locale = 
	{
		"format":"YYYY.MM.DD",
		"cancelLabel":"취소",
		"applyLabel":"확인",
		"customRangeLabel": "사용자 설정",
		"separator":" ~ ",
		"weekLabel":"주",
		"daysOfWeek":[ "일", "월", "화", "수", "목", "금", "토" ],
		"monthNames":[ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
		"firstDay":0
	}

	$(obj).hide();
	
	$(obj).siblings('.datepicker').show();
	$(obj).siblings('.datepicker').find('input').daterangepicker({
		alwaysShowCalendars: true,
		showDropdowns: true, 
		maxDate: moment(),
		locale: locale,
		ranges: {
			'오늘': [moment(), moment()],
			'어제': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'7일 전': [moment().subtract(6, 'days'), moment()],
			'30일 전': [moment().subtract(29, 'days'), moment()],
			'이번 달': [moment().startOf('month'), moment().endOf('month')],
			'지난 달': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}).show().click();

}

//날짜 선택 해지
function dateDelete(obj){
	$(obj).parents('.datepicker').hide();
	$(obj).parents('.iptDate').find('.dateN').show();
}



/*------------------------------------경로*/
function logout(){ location.href='../login/login.html' } /*로그인*/
function dashboard(){ location.href='../dashboard/dashboard.html' } /*대시보드*/

function accountMng(){ location.href='../user/user.html' } /*계정 관리*/
function chatbotReal(){ location.href='../user/user.html' } /*챗봇(운영)*/

/*---챗봇설정*/
function chatbotSetting(){ location.href='../chatbotSetting/chatbotSetting.html' } /*챗봇설정*/
function chatbotSettingTxt(){ location.href='../chatbotSetting/chatbotSettingTxt.html' } /*문구설정*/

/*---페르소나*/
function persona(){ location.href='../persona/persona.html' } /*현황*/
function personaApprove(){ location.href='../persona/personaApprove.html' } /*승인 요청 내역*/
/*---지식베이스*/
function knowledge(){ location.href='../knowledge/knowledge.html' } /*현황*/
function knowledgeApprove(){ location.href='../knowledge/knowledgeApprove.html' } /* 승인 요청 내역*/
function knowledgeKeyword(){ location.href='../knowledge/knowledgeKeyword.html' } /*키워드*/
function knowledgeUnlearned(){ location.href='../knowledge/knowledgeUnlearned.html' } /*미학습*/
function knowledgeIncorrect(){ location.href='../knowledge/knowledgeIncorrect.html' } /*오답변*/
/*---통계*/
function statisticsChat(){ location.href='../statistics/statisticsChat.html' } /*세션 */
function statisticsQuestion(){ location.href='../statistics/statisticsQuestion.html' } /*질문 */
function statisticsSatisfaction(){ location.href='../statistics/statisticsSatisfaction.html' } /*만족도 */
function statisticsKeyword(){ location.href='../statistics/statisticsKeyword.html' } /*키워드 */
function statisticsChatTotal(){ location.href='../statistics/statisticsChatTotal.html' } /*키워드 */



/*------------------------------------챗봇*/
//디바이스 구분
function isMobileDevice() {
	return /Mobi|Android|iPhone|iPad|iPod|IEMobile|Opera Mini/.test(navigator.userAgent);
}

//운영 챗봇 open
function chatbot() {

	if (!isMobileDevice()) {
    	//pc 일때 size, position 지정
    	const screenWidth = window.innerWidth;
    	const screenHeight = window.innerHeight;

    	const newWindowWidth = 700;
    	const newWindowHeight = 720;

    	const rightMargin = 50;
    	const bottomMargin = 50;

    	const left = screenWidth - newWindowWidth - rightMargin;
    	const top = screenHeight - newWindowHeight - bottomMargin;

    	window.open(
    		'../chatbot/chatbot.html', 
    		'_blank',                
    		`width=${newWindowWidth},height=${newWindowHeight},left=${left},top=${top}`
    		);
    } else {
    	//모바일일때 지정하지 않음
    	window.open(
    		'../chatbot/chatbot.html', 
    		'_blank',                
    		)

    }
}

//테스트 챗봇 open
function chatbotTest(){
	if (!isMobileDevice()) {
    	//pc 일때 size, position 지정
    	const screenWidth = window.innerWidth;
    	const screenHeight = window.innerHeight;

    	const newWindowWidth = 700;
    	const newWindowHeight = 720;

    	const rightMargin = 50;
    	const bottomMargin = 50;

    	const left = screenWidth - newWindowWidth - rightMargin;
    	const top = screenHeight - newWindowHeight - bottomMargin;

    	window.open(
    		'../chatbot/chatbotTest.html', 
    		'_blank',                
    		`width=${newWindowWidth},height=${newWindowHeight},left=${left},top=${top}`
    		);
    } else {
    	//모바일일때 지정하지 않음
    	window.open(
    		'../chatbot/chatbotTest.html', 
    		'_blank',                
    		)

    }
}






/*------------------------------------마이페이지*/
//팝업 open
function mypage(){ 

	var html ='<section class="pop page open">';
	html +='<div class="popBox">';
	html +='<div class="popCon">';
	html +='<div class="popHd">';
	html +='<h2></h2>';
	html +='<a href="javascript:;" class="popClose" onclick="popClose(this)"></a>';
	html +='</div>';
	html +='<div class="popBody gap40">';
	html +='<div class="flexColumn gap12">';
	html +='<div class="ft28 fwM">반갑습니다.<br><span class="crOrange500">김제주</span>님</div>';
	html +='<div class="cmt open"><i></i><span>기타 변경 사항은 관리자에게 문의하세요.</span></div>';
	html +='</div>';
	html +='<div class="formWrap">';
	html +='<div class="formGroup">';
	html +='<div class="formHd">';
	html +='<h2>계정</h2>';
	html +='</div>';
	html +='<div class="formBody">';
	html +='<ul class="form">';
	html +='<li>';
	html +='<label>아이디</label>';
	html +='<div class="ipt readonly">';
	html +='<input type="text" value="hong3" readonly="">';
	html +='</div>';
	html +='</li>';
	html +='<li>';
	html +='<label>권한<button type="button" class="btn-icon" onclick="quePermission(this);">';
	html +='<i class="ico-question i16"></i>';
	html +='</button></label>';
	html +='<div class="ipt readonly">';
	html +='<input type="text" value="사용자" readonly="">';
	html +='</div>';
	html +='</li>';
	html +='<li style="display:none;" id="accountDetailId">';
	html +='<label>아이디</label>';
	html +='<div class="ipt readonly">';
	html +='<input type="text" value="hong3" readonly="readonly">';
	html +='</div>';
	html +='</li>';
	html +='</ul>';
	html +='</div>';
	html +='</div>';
	html +='<div class="formGroup">';
	html +='<div class="formHd">';
	html +='<h2>조직</h2>';
	html +='</div>';
	html +='<div class="formBody">';
	html +='<ul class="form">';
	html +='<li>';
	html +='<label>부서</label>';
	html +='<div class="ipt readonly">';
	html +='<input type="text" value="고객 지원팀" readonly="">';
	html +='</div>';
	html +='</li>';
	html +='<li>';
	html +='<label>직급</label>';
	html +='<div class="ipt readonly">';
	html +='<input type="text" value="대리" readonly="">';
	html +='</div>';
	html +='</li>';
	html +='</ul>';
	html +='</div>';
	html +='</div>';
	html +='<div class="formGroup">';
	html +='<div class="formHd">';
	html +='<h2>사용자</h2>';
	html +='</div>';
	html +='<div class="formBody">';
	html +='<ul class="form">';
	html +='<li class="ness">';
	html +='<label>연락처</label>';
	html +='<div class="ipt">';
	html +='<input type="text" oninput="phone(this);" value="010-4565-4556">';
	html +='</div>';
	html +='</li>';
	html +='</ul>';
	html +='</div>';
	html +='</div>';
	html +='</div>';
	html +='</div>';
	html +='<div class="popFooter">';
	html +='<button type="button" class="btn-lightOrange" onclick="changePw(this,\'my\');" id="changePw" ><i class="ico-lock"></i>비밀번호 변경</button>';
	html +='<button type="button" class="btn-b savePop" onclick="saveMyAccount(this);" id="saveMyAccount" ><i class="ico-chk wh"></i>저장하기</button>';
	html +='</div>';
	html +='</div>';
	html +='</div>';
	html +='</section>';

	$('body').append(html);

} 

//마이페이지 저장 완료
function saveMyAccount(obj){
	popClose(obj);
	toast('저장되었습니다.')
}

//비밀번호 변경 팝업 open
function changePw(obj, type, txt, aaa){ 

	if( type == 'my'){ //마이페이지 비밀번호 변경
		txt = '비밀번호를 변경하시겠습니까?'
		cancelBtn = '<button type="button" class="btn-l" onclick="popClose(this);">취소</button>'
	}else if( type == 'temp' ){ //임시비밀번호 로그인 > 비번변경
		txt = '비밀번호를 변경해 주세요.'
		cancelBtn = ''
	}

	var html ='<section class="pop open">';
	html +='<div class="alertCon">';
	html +='<div class="alerHd">';
	html +='<i class="que"></i>';
	html +='<div class="alertTxt">';
	html +='<strong>'+ txt +'</strong>';
	html +='<p>8~16자리의 영문, 숫자로 입력해주세요.</p>';
	html +='</div>';
	html +='</div>';
	html +='<ul class="boxUl">';
	html +='<li>계정 ID와 동일한 문구는 입력하지 마세요.</li>';
	html +='<li>동일 단어 또는 숫자를 2회 이상 반복하지 마세요.</li>';
	html +='<li>개인 신상 및 부서 명칭 등은 입력하지 마세요.</li>';
	html +='<li>직전 5개 패스워드를 입력하지 마세요.</li>';
	html +='</ul>';
	html +='<div class="alertBody">';
	html +='<ul class="form">';
	html +='<li class="ness">';
	html +='<label>새 비밀번호</label>';
	html +='<div class="ipt focus">';
	html +='<input type="password" onkeyup="myVaild(this,\'pw1\');" id="changePw1">';
	html +='</div>';
	html +='</li>';
	html +='<li class="ness">';
	html +='<label>새 비밀번호 확인</label>';
	html +='<div class="ipt">';
	html +='<input type="password" onkeyup="myVaild(this,\'pw2\');" >';
	html +='</div>';
	html +='</li>';
	html +='</ul>';
	html +='</div>';
	html +='<div class="alerFooter">';
	html += ''+ cancelBtn +''
	html +='<button type="button" class="btn-b savePop" onclick="saveChangePw(this);" disabled><i class="ico-chk wh"></i>변경하기</button>';
	html +='</div>';
	html +='</div>';
	html +='</section>';

	$('body').append(html)
	$('#changePw1').focus();

}

//비밀번호 저장 버튼 활성화, 비활성화
function myVaild(obj, type){

	console.log(obj);
	console.log(type);
	var ipt = $(obj).val();
	if( type == 'pw1' ){
		vaildChk(obj, "","", ipt.length < 4 );
	}else if( type == 'pw2' ){
		vaildChk(obj, "","", ipt.length < 4 );
	}
}

//비밀번호 변경 완료
function saveChangePw(obj){
	popClose(obj);
	toast('변경되었습니다.')
}





/*------------------------------------form*/
//숫자만
function numberOnly(obj){
	var inputVal = $(obj).val();
	var cleaned = inputVal.replace(/\D/g, '');
	$(obj).val(cleaned);
}

//숫자만+콤마
function numberWithComma(obj){
	var inputVal = $(obj).val();
	var cleaned = inputVal.replace(/\D/g, '');
	var formatted = cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	$(obj).val(formatted);
}


//핸드폰
function phone(obj) {
	var input = $(obj).val().replace(/\D/g, ''); 
	var formatted = '';
	if (input.length < 4) {
		formatted = input;
	} else if (input.length < 7) {
		formatted = input.slice(0, 3) + '-' + input.slice(3);
	} else if (input.length < 11) {
		formatted = input.slice(0, 3) + '-' + input.slice(3, 6) + '-' + input.slice(6);
	} else {
		formatted = input.slice(0, 3) + '-' + input.slice(3, 7) + '-' + input.slice(7, 11);
	}
	$(obj).val(formatted);
}

//textarea auto height
function autoHeight(obj) {
	$(obj).css('height', 'auto');
	$(obj).css('height', obj.scrollHeight + 'px'); 
}


//vaildation check	
function vaildChk(obj, iptValue, errMsg, valueLength ){

	var flag = true;
	var ipt = $(obj).val();	

	if( ipt === iptValue &&  iptValue != ""){ //임시
		$(obj).parents('.ipt').next('.cmt').removeClass('open');
		$(obj).parents('.ipt').next('.cmt').addClass('open');
		$(obj).parents('.ipt').next('.cmt').find('span').text(errMsg)

		flag =false;
	}else if( valueLength ){
		flag =false;
		$(obj).parents('.pop').find('.savePop').prop('disabled', false);
		$(obj).parents('.ipt').next('.cmt').removeClass('open')
	}
	else{
		$(obj).parents('.ipt').next('.cmt').removeClass('open')
		$(obj).parents('.pop').find('.savePop').prop('disabled', true);
	}


	$(obj).parents('.pop').find('.ness').each(function(idx, item){

		if($(item).find("input").val() == ''){
			flag = false;
			return false;
		}
	});


	if(flag && $(obj).parents(".pop").find(".err.open").length == 0){
		$(obj).parents('.pop').find('.savePop').prop('disabled', false);
	}else{
		$(obj).parents('.pop').find('.savePop').prop('disabled', true);
	}

}

//form focus
$.fn.extend({
	handleFocusBlur: function() {
		this.on('focus', function() {
			var $this = $(this);
			if (!$this.is('[readonly]') && !$this.parents('.ipt').hasClass('iptDate') && !$this.parents('div').hasClass('search') ) {
				$this.parents('.ipt').addClass('focus');
			}
		});

		this.on('blur', function() {
			$(this).parents('.ipt').removeClass('focus');
		});

		return this;
	}
});

$('input, select').handleFocusBlur();



//form drag 공통
$(document).ready(function() {
	$(".formDrag").each(function() {
        // 'view' 클래스를 가진 요소는 sortable로 초기화하지 않음
        if (!$(this).hasClass('view')) {
        	new Sortable(this, {
        		animation: 350
        	});
        }
    });
});


function enabled(){
	const sortDisabled = Sortable.get($(".formDrag")[0]);
	sortDisabled.option("disabled",false);

}

function disabled(){
	const sortDisabled = Sortable.get($(".formDrag")[0]);
	sortDisabled.option("disabled",true);

}



//form drag 삭제
function dragDelete(obj){
	$(obj).parents('li').remove();
}

// //form drag view용
// $(document).ready(function() {

// 	$('.formDrag').each(function(){
// 		if($(this).hasClass('view')){
// 			$(this).find('input').prop('readonly', true )
// 			$(this).find('select').prop('disabled', true )
// 		}
// 	});

// });




/*------------------------------------tab*/
$('.tab a').click(function(){
	var idx = $('.tab a').index($(this));
	$('.tab a').removeClass('on').eq(idx).addClass('on')
	$('.tabCon>div').removeClass('on').eq(idx).addClass('on')
})

$('.tab2 a').click(function(){
	var idx = $('.tab2 a').index($(this));
	$('.tab2 a').removeClass('on').eq(idx).addClass('on')
	$('.tabCon2>div').removeClass('on').eq(idx).addClass('on')
})

$('.tab3 a').click(function(){
	var idx = $('.tab3 a').index($(this));
	$('.tab3 a').removeClass('on').eq(idx).addClass('on')
	$('.tabCon3>div').removeClass('on').eq(idx).addClass('on')
})

/*------------------------------------버튼 타입 설정*/
function btnType(obj){

	var type = $(obj).val();

	if( type == 'btnTypeKnowledge' ){ //지식베이스

		$(obj).parents('.iptArea').find('.iptValue').prop('readonly', true).val("").attr('onclick','btnTypeKnowledge(this)');;
		btnTypeKnowledge();

	}else if ( type == 'btnTypeUrl'){ //url
		
		$(obj).parents('.iptArea').find('.iptValue').prop('readonly', false).focus().val("");

	}else if ( type == 'btnTypeCall'){ //전화번호
		
		$(obj).parents('.iptArea').find('.iptValue').prop('readonly', false).focus().val("");

	}else if ( type == 'btnTypeMsg'){ //응답메시지

		$(obj).parents('.iptArea').find('.iptValue').prop('readonly', true).val("").attr('onclick','btnTypeMsg(this)');
		btnTypeMsg();
	}
}

/*-------지식베이스*/
function btnTypeKnowledge(){
	var html = '<section class="pop open">';
	html += '<div class="popBox" style="width:825px; height:80%; ">';
	html += '<div class="popHd">';
	html += '<h2>지식 베이스</h2>';
	html += '<a href="javascript:;" class="popClose" onclick="popClose(this);"></a>';
	html += '</div>';
	html += '<div class="popBody gap20">';
	html += '<div class="search">';
	html += '<ul class="form">';
	html += '<li>';
	html += '<label>카테고리</label>';
	html += '<div class="ipt">';
	html += '<select>';
	html += '<option>전체</option>';
	html += '<option>예약/변경/취소</option>';
	html += '</select>';
	html += '</div>';
	html += '</li>';
	html += '<li>';
	html += '<div class="ipt">';
	html += '<input type="text" placeholder="검색어 입력">';
	html += '</div>';
	html += '<button type="button" class="btn-icon" onclick="search(this);"><i class="ico-sch"></i></button>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html +='<div class="tbl">';
	html +='<div class="tblHd">';
	html +='<table>';
	html +='<colgroup>';
	html +='<col width="70"> ';
	html +='<col width="140"> ';
	html +='<col width="*"> ';
	html +='<col width="100"> ';
	html +='</colgroup>';
	html +='<tr>';
	html +='<th>코드</th>';
	html +='<th><button type="button" class="sort"><span>카테고리</span><i class="ico-sort"></i></button></th>';
	html +='<th>질문</th>';
	html +='<th></th>';
	html +='</tr>';
	html +='</table>';
	html +='</div>';
	html +='<div class="tblBody noCursor" id="selKnowledgeList">';
	html +='<table>';
	html +='<colgroup>';
	html +='<col width="70"> ';
	html +='<col width="140"> ';
	html +='<col width="*"> ';
	html +='<col width="100"> ';
	html +='</colgroup>';
	html +='<tr>';
	html +='<td>K2</td>';
	html +='<td>예약/변경/취소</td>';
	html +='<td>항공권 예약(구매)은 어떻게 하나요?</td>';
	html +='<td><button type="button" class="btn-b" onclick="saveBtnMsgKnowledge(this);">적용</button></td>';
	html +='</tr>';
	html +='<tr>';
	html +='<td>K1</td>';
	html +='<td>예약/변경/취소</td>';
	html +='<td>항공권 예약(구매)은 어떻게 하나요?</td>';
	html +='<td><button type="button" class="btn-l" onclick="saveBtnMsgKnowledge(this);">적용</button></td>';
	html +='</tr>';
	html +='</table>';
	html +='</div>';
	html +='</div>'
	html += '</div>';
	html += '</div>';
	html += '</section>';

	$('body').append(html)
}

/*선택*/
function saveBtnMsgKnowledge(obj){
	$('#selKnowledgeList button').removeClass('btn-b').addClass('btn-l')
	$(obj).addClass('btn-b').removeClass('btn-l');
	popClose(obj);
}




/*-------응답메시지*/
/*팝업 open*/
function btnTypeMsg(){
	var html = '<section class="pop open">';
	html += '<div class="popBox">';
	html += '<div class="popHd">';
	html += '<h2>응답 메시지</h2>';
	html += '<a href="javascript:;" class="popClose"  onclick="popClose(this);"></a>';
	html += '</div>';
	html += '<div class="popBody">';
	html += '<ul class="form">';
	html += '<li>';
	html += '<div class="iptArea ">';
	html += '<div class="ipt">';
	html += '<textarea placeholder="내용을 입력해 주세요." style="width:558px; height:234px;"></textarea>';
	html += '</div>';
	html += '</div>';
	html += '</li>';
	html += '</ul>';
	html += '</div>';
	html += '<div class="popFooter">';
	html += '<span></span>';
	html += '<button type="button" class="btn-b" onclick="saveBtnMsgResponse(this);"><i class="ico-chk wh"></i>적용하기</button>';
	html += '</div>';
	html += '</div>';
	html += '</section>';

	$('body').append(html)
}

/*응답 메시지 view 일 때*/
//적용하기 버튼 hidden
//texgtarea disabled


/*저장*/
function saveBtnMsgResponse(obj){
	popClose(obj);
}






