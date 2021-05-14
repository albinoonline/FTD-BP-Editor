<!doctype html>
<html lang="en">
<!--
	Author Name: Albino
-->
<head>
	<meta charset="utf-8" />
	<title>Albino's Blueprint Fuckery</title>
	<link href="css.css" rel="stylesheet" />
	<script src='directory.js'></script>
	<script src='editor.js'></script>
</head>
<body>
	<div id='pagewrapper'>
		<header><h1>Albino's Blueprint Fuckery</h1></header>
		<div id="fileinput">
			<span id="bpspan">
				<label for="bp">Select Blueprint Here</label>
				<input type="file" id="bp" name="bp" accept='.blueprint,.blueprint_backup'>
			</span>
			
			<span id="bpname">No Blueprint Selected</span>
			
			<span id="filespan">
				<label for="item">Import Modded Items Here</label>
				<input type="file" id="item" name="item" accept='.itemduplicateandmodify,.item' multiple>
			</span>
		</div>
		<div>
			<div id="error"></div>
			<section class="side" id="blocklist"><h2>Blocklist</h2></section>
			<section id="converter" class="side">
				<h2>Modify</h2>
				<form>
				<h2>Mass converter</h2>
				<p>
					<label for="armorFrom">Chose block type:</label>
					<select name="armorFrom" id="armorFrom">
						<option value="All">All Blocks</option>
						<option value="Armor">All Armor</option>
						<option value="Alloy">Alloy</option>
						<option value="Glass">Glass</option>
						<option value="Heavy Armour">Heavy Armor</option>
						<option value="Lead">Lead</option>
						<option value="Metal">Metal</option>
						<option value="Rubber">Rubber</option>
						<option value="Wood">Wood</option>
						<option value="Other">Non armor</option>
					</select>
				</p>
				<p>
					<label for="colorFrom">limit color choice? leave empty to ignore</label>
					<input type="number" id="colorFrom" name="colorFrom" min="0" max="31"/>
				</p>
				<p>
					<h3>convert to:</h3>
					<label for="armorTo">Chose block type:</label>
					<select name="armorTo" id="armorTo">
						<option value="None">No conversion</option>
						<option value="Alloy">Alloy</option>
						<option value="Glass">Glass</option>
						<option value="Heavy Armour">Heavy Armor</option>
						<option value="Lead">Lead</option>
						<option value="Metal">Metal</option>
						<option value="Rubber">Rubber</option>
						<option value="Wood">Wood</option>
						<option value="Delete">Destroy(not yet implemented)</option>
					</select>
				</p>
				<p>
					<label for="colorFrom">recolor to: leave empty to ignore</label>
					<input type="number" id="colorTo" name="colorTo" min="0" max="31"/>
				</p>
				
				<input type="button" id="Mconvertoer" value="convert"/> <input type="button" id="DL" value="Download"/>
				</form>
			</section>
		</div>
	</div>
</body>
</html>