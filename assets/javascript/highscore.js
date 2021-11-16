let scoreData = JSON.parse(localStorage.getItem("HighscoreData"));
$("#NameField").text(scoreData.username);
$("#ScoreField").text(scoreData.score);