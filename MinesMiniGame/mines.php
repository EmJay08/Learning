<?php 
$title = "Avoid the Mines!";
include("inc/header.php"); 
//set default grid size
$userHeight = 5;
$userWidth = 5;
?>
<p>In this simple game, choose a grid size and start clicking boxes. It's all down to luck (or cheating depending on your skills) so try to clear all the boxes without uncovering a mine to get the highest score you can! Hit a mine and "BOOM!" it's Game Over. The bigger the grid, the higher your possible score. Good Luck!</p>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
  if(isset($_POST["user_height"]) && $_POST["user_height"] > 0 && $_POST["user_height"] <= 100) {
    $userHeight = $_POST["user_height"];
  }
  if(isset($_POST["user_width"]) && $_POST["user_width"] > 0 && $_POST["user_width"] <= 100) {
    $userWidth = $_POST["user_width"];
  }
?>

<table class="minefield">
<?php 
    //populate with rows and boxes user inputs 

    for($i = 0; $i < $userHeight; $i++) {
      echo "<tr>";
        for($j = 0; $j < $userWidth; $j++) {
          echo '<td class="box">BOX</td>'; 
        }
      echo "</tr>";
    }
?>
</table>

  <a href="http://www.dsm.com/content/dam/dsm/anh/en_US/images/fresh-chick-with-egg-shell.jpg" alt="chick with egg shell"><button id="peep">No Peeking!</button></a>
    <section  class="peekaboo"><img src="http://www.dsm.com/content/dam/dsm/anh/en_US/images/fresh-chick-with-egg-shell.jpg" alt="chick with egg shell"></section>
  <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="js/minesapp.js" type="text/javascript" charset="utf-8"></script>

<?php } else { ?>
<form method="post" action="mines.php">
  <label><input type="number" name="user_width">Number of Columns
  </label><br>
  <label><input type="number" name="user_height">Number of Rows</label><br>
  <input type="submit" value="Start">
</form>
<p>*Default 5x5, minimum 1, maximum 100.</p>
<?php } ?>
