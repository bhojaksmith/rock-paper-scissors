		confirm("Lets Play rock Paper Scissors. Click Ok to confirm");
		var un = prompt("Enter your Name:");
		var i ;
		for(i=0;i<3;i++){
		var cc = Math.random();
		var uc  = prompt("Enter your choice in 'r,p,s' (r=rock,p=paper,s=scissors): ");
		if (cc >= 0.1 && cc <0.4){
			if (uc === "r") {
			confirm("Its a Tie try again!");
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "r") {
			confirm("Congrats " +un+" you Win");
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "r") {
			confirm( "Computer Wins");
							}
									}
		if (cc >= 0.1 && cc <0.4){
			if (uc === "s") {
			confirm("Its a Tie try again!");
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "s") {
			confirm("Congrats " +un+" you Win");
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "s") {
			confirm( "Computer Wins");
							}
									}
		if (cc >= 0.1 && cc <0.4){
			if (uc === "p") {
			confirm("Its a Tie try again!");
							}
								}
		else if(cc >= 0.4 && cc<0.7) {
			if(uc === "p") {
			confirm("Congrats " +un+" you Win");
							}
									}
		else if (cc >= 0.7 && cc<1){
			if(uc === "p") {
			confirm( "Computer Wins");
							}
								}
					else{
				confirm('try again');
						}
						
			 }
			var rating = prompt("Rate this Game Out 1 to 10");
			if(rating >= 6){
				confirm("Thank You " + un + " !");
			}
			else{
				confirm("I will improve mys skils " + un +  " !");
			}

			confirm("Refresh Page If you find any 'Error' ");
