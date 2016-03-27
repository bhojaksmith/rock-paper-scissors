		function script() {
		confirm("Lets Play rock Paper Scissors. Click Ok to confirm");
		var un = prompt("Enter your Name:");
		for(i=0;i<3;i++){
		var cc = Math.random();
		var uc  = prompt("Enter your choice in 'r,p,s' (r=rock,p=paper,s=scissors): ");
		if (cc >= 0.1 && cc <0.4){
			if (uc === "r") {
			document.getElementById("test").innerHTML="Its a Tie try again!";
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "r") {
			document.getElementById("test").innerHTML="Congrats " +un+" you Win";
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "r") {
			document.getElementById("test").innerHTML="Computer Wins";
							}
									}
		if (cc >= 0.1 && cc <0.4){
			if (uc === "s") {
			document.getElementById("test").innerHTML="Its a Tie try again!";
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "s") {
				document.getElementById("test").innerHTML="Congrats " +un+" you Win";
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "s") {
			document.getElementById("test").innerHTML= "Computer Wins";
							}
									}
		if (cc >= 0.1 && cc <0.4){
			if (uc === "p") {
				document.getElementById("test").innerHTML="Its a Tie try again!";
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "p") {
			document.getElementById("test").innerHTML="Congrats " +un+" you Win";
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "p") {
			document.getElementById("test").innerHTML="Computer Wins";
							}
									}
			else{
					document.getElementById("test").innerHTML='Congrats '+un+ " You Win!";
			}
				}
					}
