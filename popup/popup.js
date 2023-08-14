var inputTextValue = document.getElementById('itsmNum')

document.getElementById("NewTab").addEventListener("click", OpenURL);
function OpenURL() {
	if  (inputTextValue.value.toString().startsWith("9")==true) {
            window.open('https://iffffffnine.com'+encodeURIComponent(inputTextValue.value)+'999999', "_blank");
	}
	else {
	window.alert(inputTextValue.value.toString());	
  //window.open('https://www.elseeeeeeeee.com'+encodeURIComponent(inputTextValue.value)+'77777777', "_blank");
}
console.log(inputTextValue)
        }
		
		
//document.write(5 + 6);
