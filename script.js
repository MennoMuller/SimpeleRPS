function rps(played) {
  const options = ["Rock", "Paper", "Scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (played == computerChoice) {
    alert(played + " and " + computerChoice + " are the same.\nIt's a tie!");
  } else if (played == "Rock") {
    if (computerChoice == "Paper") {
      alert("Paper covers Rock.\nI win!");
    } else {
      alert("Rock blunts Scissors.\nYou win!");
    }
  } else if (played == "Paper") {
    if (computerChoice == "Rock") {
      alert("Paper covers Rock.\nYou win!");
    } else {
      alert("Scissors cut Paper.\nI win!");
    }
  } else if (played == "Scissors") {
    if (computerChoice == "Paper") {
      alert("Scissors cut Paper.\nYou win!");
    } else {
      alert("Rock blunts Scissors.\nI win!");
    }
  } else {
    alert("You cheated, cheater!");
  }
}
