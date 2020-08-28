function onSelectedOption(sel)
{
	var who=document.getElementById("who").value;
	if( who=="1")
		{
			document.getElementById("form").action="Register.html";
			document.getElementById("form").submit();
		}

}
}