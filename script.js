confirm("This is Two Player Game. Click Ok to confirm");
		confirm("Lets Play rock Paper Scissors.");
		var u1 = prompt("Enter Player 1's Name");
		var u2 = prompt("Enter Player 2's Name");
		confirm(" Now " +u1 + "'s Turn");
		var u1c = prompt("Enter " + u1 +"'s Choice in Rock or Paper or Scissors By  r,p,s ");
		confirm("And Now "+ u2 +"'s Turn")
		var u2c = prompt("Enter " + u2 +"'s  Choice in Rock or Paper or Scissors By  r,p,s ");
		if (u1c === "r" && u2c === "r") {
			confirm("Its a Tie try again!");
		}
		else if (u1c === "r" && u2c === "p") {
			confirm( "" + u2 +"Wins");
		}
		else if (u1c === "r" && u2c === "s") {
			confirm("So "+ u1 +" Wins");
		}
		else if (u1c === "p" && u2c === "r") {
			confirm("So " + u1+" Wins");
		}
		else if (u1c === "s" && u2c === "r") {
			confirm("And "+u2+" Wins");
		}
		else if (u1c === "p" && u2c === "p") {
			confirm("Its a Tie try again");
		}
		else if (u1c === "s" && u2c ==="s"){
			confirm("Its a tie try again");
		} 
		else if (u1c === "p" && u2c === "s"){
			confirm("And "+u2+" Wins");
		}
		else if (u1c === "s" && u2c === "p"){	
			confirm("And "+ u1+" Wins");
		}
		else{
				confirm("Error occured try reloading The page & please Enter in either r or p or s");
		}
		confirm("If you find error try reloading The page");
