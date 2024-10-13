
	let hrs=document.getElementById("hrs");
	let min=document.getElementById("min");
	let sec=document.getElementById("sec");
	
	

	setInterval(()=>{
	let currentTime = new Date();
	
	hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
	min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
	sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
	
	
	
	
	},1000);
	

let months = [" January "," February "," March "," April "," May "," June "," July "," August "," September "," October "," November "," December "]; 

let days = ["Sunday  ","Monday  ","Tuesday ","Wednesday ","Thrusday ","Friday ","Saterday "];


let d = new Date();

let monnes =days[d.getDay()] + d.getDate() + months[d.getMonth()]+ 
d.getFullYear();
document.getElementById("demo").innerHTML = monnes;
