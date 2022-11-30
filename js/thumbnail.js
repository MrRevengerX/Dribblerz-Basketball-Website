const playerImage = document.getElementsByClassName("playerImage")[0];
const playerDetailHeading = document.getElementsByClassName("playerName")[0];
const playerDescription =
  document.getElementsByClassName("playerDescription")[0];
const players = document.getElementsByClassName("player");
for (var i = 0; i < players.length; i++) {
  var player = players[i];
  player.addEventListener("mouseover", showPlayerDetails);
}
/*display the each sections when hover*/
function showPlayerDetails(event) {
  var playerDiv = event.target;
  var playerName = playerDiv.getAttribute("alt");
  if (playerName == "steph") {
    playerImage.src = "src/players/stephcurry.jpg";
    playerDetailHeading.innerText = "Steph Curry";
    playerDescription.innerText = `Wardell Stephen Curry is an American professional basketball player forthe Golden
     State Warriors of the National Basketball Association (NBA).Widely regarded as
      one of the greatest basketball players of all time,and as the greatest shooter
       in NBA history, Curry is credited with revolutionizing the sport by inspiring 
       teams and players to more frequently utilize the three-point shot. An eight-time
        NBA All-Star and eight-time All-NBA selection, including four times on the first
         team, he has been named the NBA Most Valuable Player (MVP) twice, has won four NBA 
       championships,an NBA Finals MVP Award, and an NBA All-Star Game MVP Award.`;
  } else if (playerName == "damian") {
    playerImage.src = "src/players/damianlillard.jpg";
    playerDetailHeading.innerText = "Damian Lillard";
    playerDescription.innerText = `Damian Lamonte Ollie Lillard Sr.is an American professional basketball 
    player for the Portland Trail Blazers of the National Basketball Association (NBA).
    After being selected by Portland with the sixth overall pick in the 2012 NBA draft, 
    Lillard was unanimously voted the NBA Rookieof the Year. Nicknamed "Dame
     Time" for his history of making big shots in the clutch, he has received six 
     NBA All-Star and All-NBA Team selections. He is also the only player in Trail Blazers
    franchise history, to become a six-time All-Star and All-NBATeam member. In 
    October 2021, Lillard was honored as one of the league's greatest players of 
    all time by being named to the NBA 75th Anniversary Team`;
  } else if (playerName == "james") {
    playerImage.src = "src/players/lebronjames.jpg";
    playerDetailHeading.innerText = "Lebron James";
    playerDescription.innerText = `LeBron Raymone James Sr is an American professional basketball player for
    the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed 
    "King James", he is widely considered one of the greatest players of all time. 
    James has won four NBA championships, three All-Star MVP awards, and two 
    Olympic gold medals. He has been selected an NBA All-Star 18 times, to the All
    -NBA Team a record 18 times and to the NBA All-Defensive First Team five times.
    In 2021, James was selected to the NBA 75th Anniversary Team, and in 2022 
    became the first player in NBA history to accumulate 10,000 or more career
    points, rebounds, and assists.`;
  } else if (playerName == "kevin") {
    playerImage.src = "src/players/kevindurant.jpg";
    playerDetailHeading.innerHTML = "Kevin Durant";
    playerDescription.innerText = `Kevin Wayne Durant also known by his initials KD,is an American professional
     basketball playerfor the Brooklyn Nets of the National BasketballAssociation (NBA).He played one season of collegebasketball for the Texas Longhorns, and was selectedas
       the second overall pick by the Seattle SuperSonics in the 2007 NBA draft. He played 
       nine seasons with the franchise, which became the Oklahoma City Thunderin 2008, 
       before signing with the Golden StateWarriors in 2016, winning consecutive NBA 
       championshipsin 2017 and 2018.Durant is widely regarded as one of the greatest
        players of all time.`;
  } else if (playerName == "kyrie") {
    playerImage.src = "src/players/kyrieirving.jpg";
    playerDetailHeading.innerText = "Kyrie Irving";
    playerDescription.innerText = `Kyrie Andrew Irving is an American professional basketball player for the
    Brooklyn Nets of the National Basketball Association (NBA). He was named the 
    Rookie of the Year after being selected by the Cleveland Cavaliers with the first 
    overallpick in the 2011 NBA draft.A seven-time All-Star and three-time member of 
    the All-NBA Team, he won an NBA championship with the Cavaliers in 2016.Irving 
    played college basketball for the Duke Blue Devils before joining the Cavaliers 
    in 2011. He won the Most Valuable Player (MVP) award for the 2014 All-Star Game.`;
  }
}
/*section background color change*/
function color(value) {
  var detailSection = document.getElementById("Details-section");
  detailSection.style.backgroundColor = value;
}
/*section font color change*/
function changeFontColor(value) {
  var textHeading = document.getElementsByClassName("playerName")[0];
  var textPara = document.getElementsByClassName("playerDescription")[0];
  textHeading.style.color = value;
  textPara.style.color = value;
}
