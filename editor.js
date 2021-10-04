/*
ToDo:
hide DL button if a processes is in progress?
streamline replacer
make the "not form" nicer looking
make dl a function rather than shoving it in an event listener?
blocklist sort/additional info (parent block (ex:wood slopes parent is wood block)), origin mod
	// single block type replace tool (will also be a button under blocklist, bring up a replace to drop down)
renderer: nothing fancy, each block will just be a sphere or cube, but properly painted.
	block locater: add a button to each line of the blocklist that will highlight the blocks in the renderer
	should also just dump positional data, not sure where though
fully map the blueprint file
	color viewer/editor (mising shiny, camostuffs)
		fleet to personal color button, moving fleet colors down 4+ (selectable) and copying COL data
		random colors
	get delete working
	
warn if armorfrom is All, AND armorto is NOT None. also if all or all armor is selected, with delete, also note if app or deck is selected, it is not fully supported
error div condenser/ error function that checks previous errors, and just adds a number, like the console
other replace tool:(switches between the two types)
	ammo clips,	plates,	doors/hatches
vehicle stat block, list SCI info, number of sub constructs(in total, top level, deepest chain) and sub vehicle names, weapon systems firepower 
region definer, limit changes to massConvert and other functions to defined regions
	blueprint split/translate tool translater
	TO DEMONSTRATE THE POWER OF THIS TOOL I WILL SAW THIS BOAT IN HALF (will be region restricted mass convert delete > delete)
blueprint merger?
cashe mods
reformat the CSI
spin block exceptions for replacer tool
include vehicle type in top bar, ex: vehicle, fortress or structure
include a link to the github on the page
dont show dropdowns until a bp is loaded
color tooltips with RGBAS

replacer tool: Wood Block Variant handler
*/
window.onload = function() {
	
	//define things
	//var dictionary made in other file
	//find things on the page
	//there ought to be a better way to do this...
	const Bpinput = document.getElementById('bp');//bp input
	const Modinput = document.getElementById('item');//mod input
	const name = document.getElementById('bpname');//top middle section
	const error = document.getElementById('error');//top banner for use with errors
	const blocklist = document.getElementById('blocklist'); // blocklist output panel
	const dropdowns = document.getElementsByClassName("dropdown");//dropdowns
	
	//mass convert
	const armorFrom = document.getElementById('armorFrom'); 
	const colorFrom = document.getElementById('colorFrom'); 
	const armorTo = document.getElementById('armorTo'); 
	const colorTo = document.getElementById('colorTo'); 
	const DL = document.getElementById('DL'); 
	const miscData = document.getElementById("data");//construct data
	const colorTool = document.getElementById("colorTool");//the color tool div
	
	//color
	const preview = document.getElementById("preview");//the color label
	const red = document.getElementById("red");//the red input
	const green = document.getElementById("green");//the green input
	const blue = document.getElementById("blue");//the blue input
	const alpha = document.getElementById("alpha");//the alpha input
	const shiny = document.getElementById("shiny");//the shiny input
	const colorSquares = document.getElementsByClassName("colorSquare");// all the colorSquare's
	const colorRange = document.getElementsByClassName("colorRange");//all color ranges
	
	//area limiter
	const enableLTA = document.getElementById("enableLTA");//is limit to area enabled?
	const invertLTA = document.getElementById("invertLTA");//is limit to area inverted?
	const recursiveLTA = document.getElementById("recursiveLTA");//is limit to area recursive?
	//W, H, l min/max
	const Lmin = document.getElementById("Lmin");
	const Lmax = document.getElementById("Lmax");
	const Hmin = document.getElementById("Hmin");
	const Hmax = document.getElementById("Hmax");
	const Wmin = document.getElementById("Wmin");
	const Wmax = document.getElementById("Wmax");
	
	var blueprint = {};//for storing the BP
	//add event listeners
	
	
	//colorSquares update editor
	for (let i of colorSquares){
		i.addEventListener("click", function(){
			////remove the current edited color
			document.getElementById("editing").removeAttribute("id");
			//set the current color as edited
			i.setAttribute("id","editing");
			
			//load values into rgba
			//create an array of the colors variable to process with
			let color = blueprint["Blueprint"]["COL"][parseInt(i.innerHTML)].split(",");
			//parseint the array.=
			color=color.map(x => parseFloat(x));
			//change text fields
			red.value=color[0];
			green.value=color[1];
			blue.value=color[2];
			alpha.value=color[3];
			//fireoff events as though the user changed inputs
			red.dispatchEvent(new Event('input', {bubbles: true }));
			green.dispatchEvent(new Event('input', {bubbles: true }));
			blue.dispatchEvent(new Event('input', {bubbles: true }));
			alpha.dispatchEvent(new Event('input', {bubbles: true }));
			
		});
	}
	//color range and number linkages
	for (let i of colorRange){
		let text = i.previousElementSibling;
		//range to text
		i.addEventListener("input", function(){
			//update preview
			previewUpdate()
			//change value
			text.value= i.value;
		});
		//text to range
		text.addEventListener("input", function(){
			//update preview
			previewUpdate()
			//change value
			i.value	= text.value;
		});
	}
	
	Bpinput.addEventListener("change", function(){BPfill(BPparse())});//the file input for bp
	Modinput.addEventListener("change", Modparse);//the file inout for modded files
	massConverterBttn.addEventListener("click", massConvert);//the button for mass convert
	
	//dropdowns
	for (let i of dropdowns){
		i.addEventListener("click", function(){dropdown(i)});
	}
	
	//dl button
	DL.addEventListener('click', () => {
		//is therer a blueprint?
		if (typeof blueprint["Name"] == "undefined"){
			error.innerHTML+="<br/>Bo BP";
			return;
		}
		//make a temp a tag and force download
		let a = document.createElement('a');
		let file = new Blob([JSON.stringify(blueprint)], {type: 'text/plain'});
		a.href= URL.createObjectURL(file);
		a.download = blueprint["Name"]+"_mod.blueprint";
		a.click();
		URL.revokeObjectURL(a.href);
	});
	
	///functions
	async function colorUpdate(BP){//updates the color squares from the BP update function
		///camo stuffs is not in color :(
		///shiny is encoded in red for some reason
		//apply for camo is vehicledata[208], 0 for true? and 7 for false? apply camo seems to be fucking everywhere
		//colors
		let COL=BP["Blueprint"]["COL"];
		//loop through all colors
		for(let i =0; i<COL.length;i++){
			//create a variable to process with
			let color = COL[i];
			//split into an array
			color=color.split(",");
			//change from percent to 255
			let map=color.map(x => x * 255);
			//convert to a format css wil understand
			let RGBA = `rgba(${map[0]},${map[1]},${map[2]},${color[3]})`;
			//send to style
			colorSquares[i].style.backgroundColor= RGBA;
		}
	}
	function previewUpdate(){//updates the color preview box
		//clearly a very complicated function, but i wanted to avoid copying it many times
		///when shiny is added it will adjust the background color
		let RGBA=`rgba(${red.value*255},${green.value*255},${blue.value*255},${alpha.value})`;
		preview.style.backgroundColor=RGBA;
		//find currently edited color
		let editing = document.getElementById("editing");
		//update color square
		editing.style.backgroundColor=RGBA;
		//update COL
		blueprint["Blueprint"]["COL"][parseInt(editing.innerHTML)]= `${red.value},${green.value},${blue.value},${alpha.value}`;
	}
	
	function dropdown(Htag){//operates the dropdowns
		///this is jank and needs to be redone
		//from the Htag we need to go to parent, then to the first div child, wich should be the 2nd child
		let div = Htag.parentElement.children[1];
		// now er need to know whether to expand or reduce the child
		if(Htag.innerHTML.endsWith("▼")){
			//switch symbol
			Htag.innerHTML = Htag.innerHTML.replace("▼","▲");
			//set display
			div.style.display = "block";
		} else {
			//switch symbol
			Htag.innerHTML = Htag.innerHTML.replace("▲","▼");
			//set display
			div.style.display = "none";
		}
	}
	
	function massConvert(){//handles updating after massConvertRecursion
		//let the converter fill the blueprint
		blueprint["Blueprint"]=massConvertRecursion(blueprint["Blueprint"]);
		//console.log(blueprint);
		BPfill(blueprint);
		//update meta data(set modified to true, set some other values (like cost) to some obviously wrong value)
		///---------------------------------------------------------ToDo
		//update page 
		BPfill(blueprint);
	}
	
	function massConvertRecursion(target){//convert swaths of blocks to other blocks
		//parse
		let cFrom = parseFloat(colorFrom.value);
		let cTo = parseFloat(colorTo.value);
		
		//does a blueprint exist?
		if (typeof target === "undefined"){
			error.innerHTML+="<br/>No BP";
			return;//no BP, eject
		}
		//bp exists
		//create an iterator array
		let positions = Array(target["BCI"].length).fill(true);
		
		//do we limit color?
		if(isNaN(cFrom)==false){
			//remove blocks of incorrect color 
			for(i in target["BCI"]){
				//if the color matches this returns true, else false.
				positions[i] = (target["BCI"][i] == cFrom);
			}
		}
		
		//sort by location (limit to area)
		
		//are we at the top level?
		let topLevel=target["blueprintName"] == blueprint["Name"];
		//is LTA enabled?
		if (recursiveLTA.checked ? (enableLTA.checked && topLevel) : enableLTA.checked){
			//iterate through blocks
			for(i in target["BLP"]){
				//only do valid blocks
				if (positions[i]){
					//yes creata a variable to store progress
					let valid = true;
					
					//position format is W, H, l, was string, converted to an array
					let WHL = target["BLP"][i].split(",");
					//make not a string
					WHL = WHL.map(Number);
					//check width
					valid = (Wmin.value <= WHL[0]) && (WHL[0] <= Wmax.value);
					//check height
					valid = (Hmin.value <= WHL[1]) && (WHL[1] <= Hmax.value) && valid;
					//check length
					valid = (Lmin.value <= WHL[2]) && (WHL[2] <= Lmax.value) && valid;
					//if valid is true the block is within bounds, check to see if it must be inverted. (this is a XOR operator)
					positions[i] = (invertLTA.checked ? !valid : valid);
					console.log("valid"+valid);
					console.log("inverted"+invertLTA.checked);
					console.log("labled"+positions[i]);
				}//else block is already removed from positions
			}//end block loop
		}
		
		//now positions is sorted by color, we need to sort by block
		
		//array of all armors
		let allArmors =["Glass block", "Heavy Armour", "Lead Block", "Rubber Block", "Stone Block", "Light-weight Alloy Block", "Metal Block", "Wood Block", "Applique Panel", "Reinforced Wood", "Alloy Plate", "Metal Plate","Truss 1m"];
		//yes the generic name of the truss is always 1m, no i don't know why
		//array of changale armors
		let armors =["Glass block", "Heavy Armour", "Lead Block", "Rubber Block", "Stone Block", "Light-weight Alloy Block", "Metal Block", "Wood Block"];
		switch(armorFrom.value){
			case "All"://do nothing
			break;//leave
			case "Armor"://any armor type
				//loop through each position
				for(i in positions){
					if (positions[i]){//no need to check false
						//assume false
						positions[i] = false;
						//get the block object
						let block = translator(target["BlockIds"][i]);
						
						//see if the blocks refrence is in the armor list
						let index = allArmors.indexOf(block.reference);
						// is the block an armor?
						if( index != -1){
							//yes 
							positions[i] = true;
						}//end is armor if
					}//end position if 
				}//end loop
			break;
			case "Other"://above, but inverted
				//loop through each position
				for(i in positions){
					if (positions[i]){//no need to check false
						//get the block object
						let block = translator(target["BlockIds"][i]);
						
						//see if the blocks reference is in the armor list
						let index = allArmors.indexOf(block.reference);
						// is the block an armor?
						if( index != -1){
							//yes 
							positions[i] = false;
						}//end is armor if
					}//end position if 
				}//end loop
			break;
			default:// its a specific armor
				//loop through
				for(i in positions){
					if (positions[i]){//no need to check false
						// if reference block is equal to armor name, then set position accordingly
						positions[i] = translator(target["BlockIds"][i]).reference ==armorFrom.value;
					}//end if 
				}//end loop
			//'break'
		}//end switch
		
		//console.log(positions);
		//now we have sorted through blocks to modify, we need only modify it!
		//paint
		//do we need paint?
		if(isNaN(cTo)==false){
			//painting time 
			for(i in positions){
				if (positions[i] == true){// if this block is ok
					target["BCI"][i] = cTo;//rewrite paint
				}
			}
		}
		//blocks painted, now need to be replaced
		
		switch(armorTo.value){
			case "None"://do nothing
			break;//leave
			case "Delete"://ka-boom
				//what could go wrong
				///-------------------------------------------------ToDo
			break;
			default:// its a specific armor
				//loop through each position
				for(i in positions){
					if (positions[i]){//only do trues
						//assume false
						positions[i] = false;
						//get the block object
						let block = translator(target["BlockIds"][i]);
						
						//see if the blocks reference is in the armor list
						let index = armors.indexOf(block.reference);
						//found flag
						let found=false;
						///========================================== ToDO Lets not loop through the dictionary?
						/*
						alternative:
						will return array, first entry is block id of block if found, length will be 0 if none found
						Object.entries(dictionary).filter(o => ((o[1].reference ==armorTo.value)&&(o[1].searchableName ==block.searchableName)))];
						*/
						
						//iterate through dictionary
						for(let j in dictionary){
							//is the block the correct material?
							let type =armorTo.value ==dictionary[j].reference;
							//is the block the correct shape?
							let shape = false;
							if( index != -1){// is the block an armor?
								//check current shape vs new shape
								shape = block.searchableName == dictionary[j].searchableName;
							} else {
								//need an exeption for subobjectblocks and subveicle spawner
								//check block vs new shape
								shape = "block" == dictionary[j].searchableName;
							}
							if (type && shape){//we found the id
								//console.log(dictionary[j]);
								found=true;
								//the id is J, unfortunately we need to update the item dictionary
								//does it exist in the dictionary?
								//id in case it doesn't
								let id = -1;
								//iterate through all items in the dictionary, writing to id if found
								for(let k in blueprint["ItemDictionary"]){
									if(blueprint["ItemDictionary"][k] == j){
										id =k;
									}
								}
								if(id ==-1){//no id found add one
									id=1//make id positive
									//find unpopulated id
									while(typeof blueprint["ItemDictionary"][id] !== "undefined"){
										id++
									}
									//populate id
									blueprint["ItemDictionary"][id]=j;
									//console.log(id+": "+j);
								} 
								//now we have a valid id, time to actually replace
								target["BlockIds"][i]=id;									
							}
						}//end add through dictionary
						if (found ==false){
							error.innerHTML+="<br/>tried to replace:"+block.readableName +" failed, not found ";
						}
					}//end if
				}//end loop
				
			//'break'
		}//end switch
		
		//blocks replaced
		
		//recursion, through subobjects, and yes we'll drill through them all
		for(let i in target["SCs"]){
			target["SCs"][i] = massConvertRecursion(target["SCs"][i]);
		}//end recursion
		//console.log(target);
		return target;//return target
	}
	//importer, fills out the dictionary
	async function Modparse(){//this function imports files to the dictionary
		blocklist.innerHTML ='<h2>Imported:</h2>';
		for(let i of Modinput.files){
			let text = await i.text();
			let data = JSON.parse(text);
			//console.log(data);
			//console.log(Object.keys(data));
			
			//needs to be a human reabable name of the block
			let readableName = data["DisplayName"];
			//data[DisplayName], all after #?!
			readableName = readableName.slice(readableName.indexOf("#?!")+3);
			
			//needs to reduce likelyhood of typed errors
			let searchableName = data["InventoryNameOverride"];
			//data[DisplayName], all after #?!
			searchableName = searchableName.slice(searchableName.indexOf("#?!")+3);
			//remove parenthesis quotes and spaces, make lowercase, 
			searchableName = searchableName.replace(/() /g,"").toLowerCase();///======================this failed to work grrrr
			//make instances of left and right to l or r (to be safe)
			searchableName = searchableName.replace("left","l").replace("right","r");
			
			//the mod the block is from
			let mod = data["DisplayName"];
			// remove ### and everything after ".", replace underscores
			mod = mod.slice(3, mod.indexOf(".")).replace("_"," ");
			
			//this reference is used to identify the "class" of block, since ot refrences the perent block, the perent block has no refrence, so we refrence ourselves
			let reference = readableName;
			if (typeof data["IdToDuplicate"] != "undefined"){
				reference = data["IdToDuplicate"]["Reference"]["Name"];
			}
			
			//fill dictionary
			dictionary[data["ComponentId"]["Guid"]] = {
				"readableName":readableName,
				"searchableName":searchableName,
				"reference":reference,
				"mod":mod
			};
			//log info
			blocklist.innerHTML +='<p>'+readableName+"("+searchableName+') as '+data["ComponentId"]["Guid"]+' with reference: '+reference + " from mod: "+ mod+'</p>';
		}
	}

	
	async function BPparse(){//this function turns the uploaded file into usable data and shoves in blueprint
		let file = Bpinput.files[0];
		let text = await file.text();
		let data = JSON.parse(text);
		blueprint = data;
		return data;
	}
		
	async function BPfill(lag){//this funtion fills the text on the page
		// wait for data
		let data= await lag;
		//dump BP into the log
		console.log(data);
		//store blocklist
		let list="";
		//fill name info
		name.innerHTML = data["Name"]+" V"+data["Version"]+ " By: "+data["Blueprint"]["AuthorDetails"]["CreatorReadableName"];
		// fill colors 
		colorUpdate(data);
				
		//fill blocklist
		//start table
		list=" <table><thead><tr><th>Block Count</th><th>Block Name</th><th>Block Mod</th><th>Block Reference</th><th>Single replace</th></tr></thead>";
		//define blocks variable for holding blocks
		let blocks = []
		
		for(let i in  data["Blueprint"]["BlockIds"]){
			//id is block id
			let id = data["Blueprint"]["BlockIds"][i];
			
			//have we encountered the block before?
			if(typeof blocks[id] == "undefined"){
				blocks[id]=1;//no add entry
			} else {
				blocks[id]++;//yes increment entry
			}
		}	
		
		//define filterd blocks
		let filteredBlocks = [];
		//reference block count
		let refBlock = [];
		//iterate through blocks
		for(let i in blocks){
			//fill filtered blocks
			let block = translator(i);
			filteredBlocks.push({"num":blocks[i],"block":block});
			//fill reference blocks
			//check dupe entry
			//have we encountered the ref before?
			if(typeof refBlock[block["reference"]] == "undefined"){
				refBlock[block["reference"]]=blocks[i];//no add entry
			} else {
				refBlock[block["reference"]]+=blocks[i];//yes increment entry
			}
		}
		/*
		we aren't currently doing anything with refBlock, and im not sure i will, its an arrayobject with keys as reference and value as count
		console.log(refBlock);
		*/
		
		//sort filtered blocks
		filteredBlocks = filteredBlocks.sort(function(a, b) {
			return b["num"] -a["num"];
		});
		//display filtered blocks
		for (let i in filteredBlocks){
			let block = filteredBlocks[i];
			///==================================================================================ToDo (the replace button)
			//make table with number of blocks, name, mod, replace buttons
			list +=`<tr><th>${block['num']}</th><th>${block['block']['readableName']}</th><th>${block['block']['mod']}</th><th>${block['block']['reference']}</th><th>NYI</th></tr>`;
		}
		//end table
		list +="</table>";
		blocklist.innerHTML=list;
		
		//display CSI
		
		//clear data
		miscData.innerHTML ="<h3>CSI</h3><p>Values ending in ? are guesses, values that are unknown are not yet mapped</p>";
		//define known entries
		let known = [];
		known[0] = {name:"Repair Tenticles"};//number of rep tenticles
		known[1] = {name:"Repair Bots"};//number of rep bots
		known[3] = {name:"Harvesters"};//number of harvesters
		known[5] = {name:"Steam Engine Power"};// steam power capacity
		known[7] = {name:"Fuel Engine Power"};// fuel power capacity
		known[10] = {name:"Blueprint Spawners"};//blueprint spawner count
		known[12] = {name:"Teleporters"};//teleporter count
		known[14] = {name:"Fuel PPM?"};//PPM- fuel I THINK THIS MAY BE WONG
		known[19] = {name:"Speed At Full"};//top speed
		known[20] = {name:"Max Alt"};//out of play alt
		known[23] = {name:"Material Storage"};//material storage
		known[26] = {name:"Electric Engine Battery Capacity"};// battery capacity
		known[28] = {name:"APS Firepower"};//aps firepower
		known[29] = {name:"Hearstone Extensions"};//number of hertstone extentions
		known[30] = {name:"Weight/100"};//weight/100?
		known[31] = {name:"Resupply Material %"};//% material to supply
		known[36] = {name:"Resupply Type",translate:{"0":"None","1":"Creator","2":"Transporter","3":"Consumer"}};//maaterial type, producer transporter consumer none
		known[38] = {name:"CRAM Firepower"};//cram cannon firepower
		known[41] = {name:"Speed At Cruse"};//cruse speed
		known[43] = {name:"Missile Firepower"};//missile firepower
		known[47] = {name:"Power At Full"};//power use at max speed
		known[48] = {name:"Current Battery Charge"};// battery capacity
		known[49] = {name:"Battery Capacity"};// battery capacity
		known[50] = {name:"Resupply Energy %"};//% material to supply
		known[51] = {name:"Fuel Use Per minute"};// fuel use per minute
		known[52] = {name:"Travel Type",translate:{"-1":"Air","0":"All Terrain","1":"Sea","2":"Land"}};// travel type, air sea land all terrain
		known[53] = {name:"Volume"};//volume
		known[54] = {name:"Weapon mat/min"};//weapon material per minute
		known[58] = {name:"Steam PPM"};//PPM- steam
		known[59] = {name:"Steam Material At Full"};//steam material use at max speed
		known[61] = {name:"Steam Material At Cruse?"};//steam material use at cruse speed
		known[62] = {name:"Power At Cruse"};//power use at cruse speed
		known[66] = {name:"Simple Weapon Firepower"};//simple cannon firepower
		
		// loopthrough
		for(let i in data["Blueprint"]["CSI"]){
			// do we know what this is?
			if(typeof known[i] == "undefined"){
				//unknown index
				miscData.innerHTML +="<p>Unknown"+i+": "+data["Blueprint"]["CSI"][i]+"</p>";
			} else if(typeof known[i].translate == "undefined") {
				//known index, non translated
				miscData.innerHTML +="<p>"+known[i].name+": "+data["Blueprint"]["CSI"][i]+"</p>";
			} else if(typeof known[i].translate[data["Blueprint"]["CSI"][i]] == "undefined"){
				//known index, translation unknown
				miscData.innerHTML +="<p>"+known[i].name+" Unknown: "+data["Blueprint"]["CSI"][i]+"</p>";
			} else {
				//known index, translated
				miscData.innerHTML +="<p>"+known[i].name+": "+known[i].translate[data["Blueprint"]["CSI"][i]]+"</p>";
				
			}
		}//end for loop
	}
	
	function translator(tempID){//this function will return a block object when fed a temp id
		//get the perminent id of the block
		let id = blueprint["ItemDictionary"][tempID];
		//do we have this block in the dictionary?
		if (typeof dictionary[id] == "undefined"){
			//no
			console.log("Unknown Block: "+id+" ID: "+tempID);
			error.innerHTML+="<br/>Unknown Block: "+id+" ID: "+tempID;
			return "none" ;
		} else {
			//yes return the object
			return dictionary[id];
		}
	}
}
