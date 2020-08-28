function validation()
{
	var who=document.getElementById("who").value;
	var fn=document.getElementById("Fname").value;
	var ln=document.getElementById("Lname").value;
	var date=document.getElementById("date").value;
	var gender=document.getElementById("gender").value;
	var address=document.getElementById("line1").value;
	var mail=document.getElementById("email").value;
	var no=document.getElementById("number").value;
	
	if(who=="select")
	{
	  document.getElementById("whoId").innerHTML="**select who you are";
	  document.getElementById("who").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("whoId").innerHTML="";
	  document.getElementById("who").style.borderColor = "";
	}
	
	if(fn=="" || fn.length<4)
	{
	  document.getElementById("fnameId").innerHTML="**Please fill Your First Name";
		document.getElementById("Fname").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("fnameId").innerHTML="";
		document.getElementById("Fname").style.borderColor = "";
	}
	if(!isNaN(fn))
	{
	  document.getElementById("fnameId").innerHTML="**Name can not contains digits";
		document.getElementById("Fname").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("fnameId").innerHTML="";
		document.getElementById("Fname").style.borderColor = "";
	}
	if(ln=="" || ln.length<4)
	{
	  document.getElementById("LnameId").innerHTML="**Please fill Your Last Name";
		document.getElementById("Lname").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("LnameId").innerHTML="";
		document.getElementById("Lname").style.borderColor = "";
	}
	if(!isNaN(ln))
	{
	  document.getElementById("LnameId").innerHTML="**Name can not contains digits";
		document.getElementById("Lname").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("LnameId").innerHTML="";
		document.getElementById("Lname").style.borderColor = "";
	}
	
	if(date=="")
	{
	  document.getElementById("dateId").innerHTML="**Please fill the date";
		document.getElementById("date").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("dateId").innerHTML="";
		document.getElementById("date").style.borderColor = "";
	}
	if(gender=="select")
	{
	  document.getElementById("genderId").innerHTML="**Please Choise your gender";
		document.getElementById("gender").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("genderId").innerHTML="";
		document.getElementById("gender").style.borderColor = "";
	}
	if(address=="")
	{
	  document.getElementById("line1Id").innerHTML="You must be fill address line 1";
		document.getElementById("line1").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("line1Id").innerHTML="";
		document.getElementById("line1").style.borderColor = "";
	}
	if(mail=="")
	{
	  document.getElementById("emailId").innerHTML="**Please fill Your Email address";
		document.getElementById("email").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("emailId").innerHTML="";
		document.getElementById("email").style.borderColor = "";
	}
	if(no=="" || no.length!=10)
	{
	  document.getElementById("numberId").innerHTML="**Please fill Your Mobile Number";
		document.getElementById("number").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("numberId").innerHTML="";
		document.getElementById("number").style.borderColor = "";
	}
	if(isNaN(no))
	{
	  document.getElementById("numberId").innerHTML="**Number should contains only digits";
		document.getElementById("number").style.borderColor = "red";
		return false;
	}
	else{
      document.getElementById("numberId").innerHTML="";
		document.getElementById("number").style.borderColor = "";
	}


}