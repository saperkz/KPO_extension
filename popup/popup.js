var inputTextValue = document.getElementById('itsmNum')
var base_url = 'https://hscskp2.kio.kz:443/sap/bc/ags_workcenter/ags_crm_docln?objectid='
document.getElementById("NewTab").addEventListener("click", OpenURL);
inputTextValue.addEventListener("keypress", function OnEvent(event) {
	if (event.key == "Enter"){OpenURL()}
});


function OpenURL() {
	if  (inputTextValue.value.toString().trim().startsWith("8")==true) {
            window.open(base_url+encodeURIComponent(inputTextValue.value.toString().trim())+'&proctype=ZMIN&', "_blank");
	}
	else if  (inputTextValue.value.toString().trim().startsWith("7")==true) {
            window.open(base_url+encodeURIComponent(inputTextValue.value.toString().trim())+'&proctype=ZMHF&', "_blank");
	}
	else if  (inputTextValue.value.toString().trim().startsWith("9")==true) {
            window.open(base_url+encodeURIComponent(inputTextValue.value.toString().trim())+'&proctype=YMRQ&', "_blank");
	}
	else {
	window.alert("Wrong number!");	
    //window.alert(inputTextValue.value.toString());	
 }

 }
		
		
//document.write(5 + 6);
