	function RandomCol(){
	//#FFFFFF = 1677125 in decimical 
	var randCol = '#' + Math.floor(Math.random()*16777215).toString(16)
	return randCol

	}

	var start = new Date().getTime();
	appearAfter();
	


	//re appear after click and reset time 
	function appear (){
		var rand = Math.floor(Math.random()*500)

		document.getElementById('circle').style.width = rand/2 + "px" 
		document.getElementById('circle').style.height = rand/2 + "px" 
		document.getElementById('circle').style.top = rand/2.4 + "px" 
		document.getElementById('circle').style.left = rand*3.16 + "px" 
		document.getElementById('circle').style.display = "block"
		document.getElementById('circle').style.background = RandomCol()

		if (rand <100){
			document.getElementById('circle').style.borderRadius = "0"

		} else {
			document.getElementById('circle').style.borderRadius =  "50%"

		}

		start = new Date().getTime();

	}

	function appearAfter(){
		setTimeout(appear,(Math.random*500))
	}


	// disapear on click and show time 
	document.getElementById('circle').onclick = function (){

		document.getElementById('circle').style.display = "none"

		var endTime = new Date().getTime()
		var reactT = (endTime - start)/1000

		document.getElementById('timetaken').innerHTML = reactT + "ms"

		appearAfter();

	}