<?php 
$title = "Time to Color!";
include("inc/header.php"); ?>

	<canvas	width="600" height="400"></canvas>
	<div class="controls">
		<ul>
			<li class="red selected"></li>
			<li class="blue"></li>
			<li class="yellow"></li>
		</ul>
		<button id="revealColorSelect">New Color</button>
		<div id="colorSelect">
			<span id="newColor"></span>
			<div class="sliders">
				<p>
					<label for="red">Red</label>
					<input id="red" name="red" type="range" min=0 max=255 value=0>
				</p>
				<p>
					<label for="green">Green</label>
					<input id="green" name="green" type="range" min=0 max=255 value=0>
				</p>
				<p>
					<label for="blue">Blue</label>
					<input id="blue" name="blue" type="range" min=0 max=255 value=0>
				</p>
			</div>
			<div>
			<button id="addNewColor">Add Color</button>
			</div>
		</div>
	</div>

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/drawingapp.js" type="text/javascript" charset="utf-8"></script>

<?php include("inc/footer.php");?>
