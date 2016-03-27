					function rock() {
					var un = prompt("Enter Your Name:");
					var cc = Math.random();
						if (cc >= 0.1 && cc <0.4){
						document.getElementById("test").innerHTML="Its a Tie try again!";
							}
					else if(cc >= 0.4 && cc<0.7) {			
					document.getElementById("test").innerHTML="Congrats " +un+" you Win";					
									}
					else if (cc >= 0.7 && cc<1){		
					document.getElementById("test").innerHTML="Computer Wins";
																}
							else{document.getElementById("test").innerHTML="Congrats " +un+" you Win";}
															}
					function paper() {										
						var un = prompt("Enter Your Name:");
						var cc = Math.random();
						if (cc >= 0.1 && cc <0.4){
						document.getElementById("test").innerHTML="Its a Tie try again!";
							}
					else if(cc >= 0.4 && cc<0.7) {			
					document.getElementById("test").innerHTML="Congrats " +un+" you Win";					
									}
					else if (cc >= 0.7 && cc<1){		
					document.getElementById("test").innerHTML="Computer Wins";
																}
							else{document.getElementById("test").innerHTML="Congrats " +un+" you Win";}
					}
					function scissors() {
						var un = prompt("Enter Your Name:");
						var cc = Math.random();
						if (cc >= 0.1 && cc <0.4){
						document.getElementById("test").innerHTML="Its a Tie try again!";
							}
					else if(cc >= 0.4 && cc<0.7) {			
					document.getElementById("test").innerHTML="Congrats " +un+" you Win";					
									}
					else if (cc >= 0.7 && cc<1){		
					document.getElementById("test").innerHTML="Computer Wins";
																}
							else{document.getElementById("test").innerHTML="Congrats " +un+" you Win";}
					}
