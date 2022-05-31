// JavaScript Document

//preloader//
  var preloader = document.getElementById('loader');
  function myFunction(){
    preloader.style.display = 'none';
  }

 //login-page-link//
  function login(){
 document.location.href='login-form.html';
}

//forget password//
function forgetpassword() {
  var txt;
  var person = prompt("Please enter your new password:", "");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Your password has been changed! " ;
  }
  document.getElementById("pass").innerHTML = txt;
}

//faculty-page-link//
function faculty(){
	document.location.href='faculty-page.html';
}

//Reg-page-link//
function regform(){
	document.location.href='register-form.html';
}

//about-us-link//
function abt(){
  document.location.href='about-us.html';
}
function con(){
  document.location.href='contact page.html';
}

//flip-page-link//
function director(){
	document.location.href='director.html';
}
function chairman(){
	document.location.href='chairman.html';
}
function criteria(){
	document.location.href='adm-criteria.html';
}	
function policy(){
	document.location.href='policy.html';
}

//courses-page-link//
function bcom(){
	document.location.href='bba-course-page.html';
}
function inter(){
	document.location.href='academic.html';
}
function bba(){
	document.location.href='entrance-exam-page.html';
}
function eng(){
  document.location.href='eng-course-detail.html'
}


//enterance-exam-page-link//
function bbs(){
	document.location.href='bba-detail-page.html';
}
function comp(){
	document.location.href='bs-comp-detail-page.html';
}
function llb(){
	document.location.href='llb-detail-page.html';
}
function hotel(){
	document.location.href='hotel-mng-page.html';
}


function matric(){
  document.location.href='Classes IX & X.html';
}
function inter2(){
  document.location.href='XI & XII -commerce.html';
}
function intersci(){
  document.location.href='class Xi- XII (SCI).html';
}
function cs(){
  document.location.href='ca-cs-page.html';
}

//criteria & policy-link//
function cribtn(){
  document.location.href='adm-criteria.html';
}
function policybtn(){
  document.location.href='policy.html';
}

