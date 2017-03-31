var social_check = document.getElementById('social');
var internal_check = document.getElementById('internal');
var city_select = document.getElementById('city');

//radio功能
var studentCheck = function() {
	var newName = this.getAttribute("id") + "_group";
	if(newName == "internal_group") {
		internal_group.style.display = "block";
		social_group.style.display="none";
	}else{
		internal_group.style.display = "none";
		social_group.style.display = "block";
	}
}

//select功能
var schoolShow = function() {
	var index = this.selectedIndex;//选中select的索引
	var city_name = this.options[index].value;
	for(var i=0,j = document.getElementById('schoolList').getElementsByTagName('select');i<j.length;i++) {
		//将所有学校的select隐藏
		j[i].style.display = "none";
	}
	document.getElementById(city_name).style.display = "block"; //把选中的select选项显示出来
}

//绑定事件
city_select.addEventListener("change",schoolShow,false);
social_check.addEventListener('change',studentCheck,false);
internal_check.addEventListener("change",studentCheck,false);
