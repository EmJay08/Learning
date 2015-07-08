//A game where mines are loaded and hidden under boxes. The more boxes the user uncovers, the higher their score. Hit a mine and it's game over.

var score = 0;
var gameOver = false;
var totalBoxes;
var mines = 0;
//default difficulty, about half the boxes will have mines
var difficulty = 0.5;

//make an overlaying lightbox for the end of the game
var $endgame = $('<div id="endgame"></div>');
var $winloss = $("<h1></h1>");
var $caption = $("<p>Your score:</p>");
$caption.addClass("scorebox");
var $scoreBox = $("<p></p>");
$scoreBox.addClass("scorebox");
var $resetButton = $("<button>Reset</button>");
$resetButton.addClass("retry");
//add everything to the lightbox
$endgame.append($winloss);
$endgame.append($caption);
$endgame.append($scoreBox);
$endgame.append($resetButton);
//add the whole thing to the document
$("body").append($endgame);

//TODO promt user for difficulty
  //var difficulty = user's option selection
  //option very easy = .1
  //option easy = .25
  //option normal = .4
  //option hard = .55
  //option very hard = .7
  //option impossible = .95
  //option literrally impossible = 1, just kiddding that won't be an option

//populate page with boxes
var $mineField = $("<table></table>");
$mineField.addClass("minefield");

//populate page with random mines, based on difficulty
var populateMines = function() {
  mines = 0;
  totalBoxes = 0;
  //for each box see if there should be a mine there
  $(".minefield td").each(function(){
    //keep track of the total boxes that were made
    totalBoxes++;
    //generate a random number between 0 and 1
    var $randomNumber = Math.random();
    if($randomNumber < difficulty){
    //if random number is < difficulty
      //put a mine there
      $(this).removeClass("box");
      $(this).addClass("mine");
      //keep track of how many mines there are total
      mines++;
    }
  });
}

//at game start
populateMines();

//TODO start timer
    //if game over
      //stop timer (do while loop not met)
      //if timer is less than
          //add timer bonus
      //display timer bonus, default 0
      //add timer bonus to score

//at game's end
var reset = function() {
  $(".clear").removeClass("clear");
  $(".mine").removeClass("mine");
  $(".boom").removeClass("boom");
  $("td").addClass("box");
  populateMines();
  gameOver = false;
  score = 0;
  $endgame.hide();
}

$(".peekaboo").hide()

//when box is activated via click
$(".minefield").on("click", "td", function(){
  
  //if it doesn't have a mine, make sure they can't keep going after hitting a mine
  if($(this).hasClass("box") && gameOver != true) {
    $(this).removeClass("box");
    $(this).addClass("clear");
    score++;
    //if they've gotten all the empty boxes it's game won
    if((mines+score) == totalBoxes) {
      //set the win/loss text
      gameOver = true;
      winloss = "You Won! Yea is you!";
      //set the scorebox to the new score
      score = score + 100;
      $winloss.text(winloss);
      $scoreBox.text(score);
      $endgame.show();
    }
  }
  //if it does have a mine, the BOOM it's game over
  if($(this).hasClass("mine")) {
    $(this).removeClass("mine");
    $(this).addClass("boom");
    gameOver = true;
    //set the win/loss display
    winloss = "You Lost!";
    $winloss.text(winloss);
    //set the scorebox to the score
    $scoreBox.text(score);
    $endgame.show();
  }
});

$(".retry").click(reset);

$("#peep").hover(function(){$(".peekaboo").show();}, function() {$(".peekaboo").hide();});
