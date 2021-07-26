function hidelp(){
	var a = document.getElementById("fpfd");
	a.style.display='block';
}
function showhelp(){
	var b = document.getElementById("fpfd");
	b.style.display='none';
}
function showfp(){
	var c = document.getElementById("spfd");
	c.style.display='block';
}
function hidesp(){
	var c = document.getElementById("spfd");
	c.style.display='none';
}
function showmail(){
	var d = document.getElementById("form");
	d.style.display='block';
}
function deleteo(){
	var e = document.getElementById("fp");
	e.style.display='none';
	var mails = document.getElementById("demails");
	var ma = 0;
	ma++;
	mails.innerHTML = '<span>Deleted Mails : '+ma+'</span>'
}
function de(){
	var f = document.getElementById("sp");
	f.style.display='none';
	var mails = document.getElementById("demails");
	var ma = 1;
	ma++;
	mails.innerHTML = '<span>Deleted Mails : '+ma+'</span>'
}
function starn(){
	var g = document.getElementById("staro");
	g.innerHTML = '<i class="fas fa-star" onClick="unstaro()"></i>';
}
function unstaro(){
	var h = document.getElementById("staro");
	h.innerHTML = '<i class="far fa-star" onClick="starn()"></i>';
}
function stars(){
	var j = document.getElementById("stars");
	j.innerHTML = '<i class="fas fa-star" onClick="unstars()"></i>';
}
function unstars(){
	var j = document.getElementById("stars");
	j.innerHTML = '<i class="far fa-star" onClick="stars()"></i>'
}
function formsub(){
	var name = document.getElementById("rcv").value;
	var subject = document.getElementById("sj").value;
	var msg = document.getElementById("tmsg").value;
	var sname = document.getElementById("recv");
	var ssbj = document.getElementById("sub");
	var mas = document.getElementById("msg");
	sname.innerHTML = '<span> Reciever name : '+name+'</span>';
	ssbj.innerHTML = '<span> Subject : '+subject+' </span>'
	mas.innerHTML = '<span> Message : '+msg+' </span>'
	var hide = document.getElementById("form").style.display='none';
}
function showsent(){
	var y = document.getElementById("peoples");
	var z = document.getElementById("sents");
	z.style.display = 'block';
	y.style.display = 'none';
}
function showinbox(){
	var y = document.getElementById("peoples");
	var z = document.getElementById("sents");
	y.style.display = 'block';
	z.style.display = 'none';
}