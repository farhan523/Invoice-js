
var n = 1 ;
var z = 0 ;
$(".adit").click(()=>{

	var tr  = document.createElement("tr")
var th =  document.createElement("th")
var th2 =  document.createElement("th")
var th3 =  document.createElement("th")
var th4 =  document.createElement("th")
var th5 =  document.createElement("th")
var th6 =  document.createElement("th")
var span = document.createElement("span")
var span2 = document.createElement("span")
th.setAttribute("contenteditable","true")
th2.setAttribute("contenteditable","true")
th3.setAttribute("contenteditable","true")


span.setAttribute("contenteditable","true")
tr.appendChild(th)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)
tr.appendChild(th5)
tr.appendChild(th6)
span2.setAttribute('class',z)
th4.appendChild(span)
th6.setAttribute("id",`${n+3}`)
th6.setAttribute("class","t6")
th5.setAttribute("id",`${n+2}`)
th3.setAttribute("class","edit")
th3.setAttribute("id",`${n }`)
th4.setAttribute("id",`${n + 1}`)
th6.innerText = "x"
th4.classList.add(n)

th4.classList.add("edit")
th4.setAttribute("contenteditable","true")
span.className = "edit"
th5.classList.add("all")

n = n + 4
--z

tr.setAttribute("class","tr")
tr.classList.add("spec")
$(".table2").append(tr)

	setEdit()
	setDel()
	setChange()
	setDel2()
})


function amount(bz){
	bz2 = parseInt(bz.id)
	var num2

	if (bz2 % 2 == 0){
		num2 = bz.previousSibling.innerText
		num2 = parseInt(num2)
	}else{
		num2 = bz.nextSibling.innerText
		num2 = parseInt(num2)
	}
	var res = bz.parentNode.lastChild.previousSibling.id
	res = parseInt(res)
	var num1  = document.getElementById(`${bz2}`).innerText
	num1 = parseInt(num1)
	document.getElementById(`${res}`).innerText  = `${num1 * num2}`
	var All = document.querySelectorAll(".all")
	var total 
	All.forEach((e)=>{
			var amount 
			amount = e.innerText
			amount = parseInt(e.innerText)
			
	})

}

function setEdit(){
	var boom = document.querySelectorAll(".edit")
	var f = boom
	boom.forEach((e)=>{
		e.addEventListener("input",(e)=>{
			
			amount(e.currentTarget);
		},false)
	})
	
}




function setDel(){
	var del = document.querySelectorAll(".t6")
del.forEach((e)=>{
	e.addEventListener("click",(e)=>{
		
		
		e.currentTarget.parentNode.remove()
		
	})
})
}

function setDel2(){
		var del2 = document.querySelectorAll(".t6")
del2.forEach((e)=>{
	e.addEventListener("click",(e)=>{
		
		var cur = e.currentTarget.parentNode.lastChild.previousSibling.textContent
		cur = parseInt(cur)
		var cur2 =  document.getElementById("bigo").innerText
		cur2 = parseInt(cur2)
	
		cip()
	})
})
}

function cip(){
	var tz  = document.querySelectorAll(".spec")
		var com = 0
		tz.forEach((e)=>{
			
			var death = e.lastChild.previousSibling.textContent;
			
			death = parseInt(death)
			com += death
			
		})
		
			document.getElementById("bigo").innerText = com
}





function amount2(){	
	var tz  = document.querySelectorAll(".spec")
		var com = 0
		tz.forEach((e)=>{
			
			var death = e.lastChild.previousSibling.textContent;
			
			death = parseInt(death)
			com += death
			
		})
		
			document.getElementById("bigo").innerText = com
	}

	


function setChange(){
	var k = document.querySelectorAll(".edit")
		var hello = k
		hello.forEach((e)=>{
			e.addEventListener("input",()=>{
				amount2();
			},false)
		})
}	

