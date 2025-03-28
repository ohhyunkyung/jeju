	////////////////////////////////페르소나 상세
	/*----------상세*/
	function detail(obj, type){

		$('#p_persona').addClass('open');
		$('.popType').text('상세')
		$('#detailCode').show();
		$('#history').show();
		$('#approveBtn').hide();
		$('#approveResultBody').find('.ness').removeClass('hide');

		$('#approveResultBody').removeClass('test pending reject admin approvePending approveComplete');

		if(type == "test" ){ //테스트
			$('#approveResultBody').addClass('test');
			pendingEditEnabled();
			historyHide();
		}else if(type == "wait" ){ //승인 대기
			$('#approveResultBody').addClass('pending');
			pendingEditDisabled();
		}else if(type == "complete" ){ //승인 완료
			pendingEditEnabled();
			historyShow();
		}else if(type == "reject" ){ //승인 불가(승인요청내역)
			$('#approveResultBody').addClass('reject');
			pendingEditDisabled();
			historyHide();
		}else if(type == "pendingAdmin" ){ //승인 대기(승인요청내역+관리자용)
			$('#approveResultBody').addClass('pending admin');
			pendingEditDisabled();
			historyHide();
		}else if(type == "approvePending" ){ //승인 대기(승인요청내역)
			$('#approveResultBody').addClass('approvePending');
			pendingEditDisabled();
			historyHide();
		}else if(type == "approveComplete" ){ //승인 완료(승인요청내역)
			$('#approveResultBody').addClass('approveComplete');
			pendingEditDisabled();
			historyHide();
		}
	}

	/*불가능*/
	function pendingEditDisabled(){
		$('[name="langTypeChk"]').prop('disabled', true); 
		$('#personaTxt').prop('disabled', true);
		$('#approveResultBody').find('.ness').addClass('hide');
		$('#approveResultBody .toggle').prop('disabled', true )
		$('#selType').prop('disabled', true)
	}

	/*편집 가능*/
	function pendingEditEnabled(){
		$('[name="langTypeChk"]').prop('disabled', false); 
		$('#personaTxt').prop('disabed', false);
		$('#approveResultBody').find('.ness').removeClass('hide');
		$('#approveResultBody .toggle').prop('disabled', false )
		$('#selType').prop('disabled', false)
	}

	/*히스토리 숨기기*/
	function historyHide(){
		$('#history').hide();
	}

	function historyShow(){
		$('#history').show();
	}


	/*----------삭제*/
	/*팝업 open*/
	function deleteDetail(){
		$('#p_deleteDetail').addClass('open')
	}

	/*삭제 완료*/
	function saveDeleteDetail(obj){
		popClose(obj);
		$('#p_persona').removeClass('open');
		toast('삭제되었습니다.')
	}

	


