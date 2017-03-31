function $(id) {
	return document.getElementById(id);
}
$("student").onclick = function (){
	$('business').style.display = "none";
	$('school').style.display = 'block';
}

$('nonStudent').onclick = function(){
	$("business").style.display ="block";
	$("school").style.display = "none";
}

var data = {
	bj:["北京大学","清华大学","中国人民大学","北京师范大学"],
	sh:["复旦大学","上海交通大学","同济大学","华东师范大学"],
	wh:["武汉大学","华中科技大学","华中农业大学","武汉理工大学"],
	gz:["广州大学","中山大学","华南理工大学","华南师范大学"]
}
var options = document.getElementsByClassName("opt");
$("city").addEventListener("change",change);
function change(){
	var id = options[$("city").selectedIndex].getAttribute("id");
		var content = " ";
		for(var i=0;i<data[id].length;i++){
			content += "<option>"+data[id][i]+"</option>";
		}
		$("collage").innerHTML = content;
}


