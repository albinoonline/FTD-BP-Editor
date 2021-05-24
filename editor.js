/*
ToDo:
make the "not form" nicer looking
make dl a function rather than shoving it in an event listener
blocklist sort/additional info (parent block (ex:wood slopes parent is wood block)), origin mod
	// single block type replace tool (will also be a button under blocklist, bring up a replace to drop down)
renderer: nothing fancy, each block will just be a sphere or cube, but properly painted.
	block locater: add a button to each line of the blocklist that will highlight the blocks in the renderer
	should also just dump positional data, not sure where though
fully map the blueprint file
warn if armorfrom is All, AND armorto is NOT None. also if all or all armor is selected, with delete, also note if app or deck is selected, it is paint only
error div condenser/ error function that checks previous errors, and just adds a number, like the console
other replace tool:
	ammo clips
	plates
	doors/hatches
vehicle stat block, list SCI info, number of sub constructs(in total, top level, deepest chain) and sub vehicle names, weapon systems firepower 
color viewer/editor
	fleet to personal color button, moving fleet colors down 4+ (selectable) and copying COL data
	random colors
get delete working
region definer, limit changes to massConvert and other functions to defined regions
	blueprint split/translate tool translater
	TO DEMONSTRATE THE POWER OF THIS TOOL I WILL SAW THIS BOAT IN HALF (will be region restricted mass convert delete > delete)
blueprint merger
cashe mods
reformat the CSI
spinblock exeptions for replacer tool

replacer tool: Wood Block Variant handler
*/
window.onload = function() {
	//define things
	//var dictionary made in other file
	//find things on the page
	const Bpinput = document.getElementById('bp');//bp input
	const Modinput = document.getElementById('item');//mod input
	const name = document.getElementById('bpname');//top middle section
	const error = document.getElementById('error');//top banner for use with errors
	const blocklist = document.getElementById('blocklist'); // blocklist output panel
	const dropdowns = document.getElementsByClassName("dropdown");//dropdowns
	//form info
	const armorFrom = document.getElementById('armorFrom'); 
	const colorFrom = document.getElementById('colorFrom'); 
	const armorTo = document.getElementById('armorTo'); 
	const colorTo = document.getElementById('colorTo'); 
	const DL = document.getElementById('DL'); 
	const miscData = document.getElementById("data");//construct data
	
	
	var blueprint = {};//for storing the BP
	
	//add event listeners
	Bpinput.addEventListener("change", function(){BPfill(BPparse())});
	Modinput.addEventListener("change", Modparse);
	massConverterBttn.addEventListener("click", massConvert);
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
	
	function dropdown(Htag){//operates the dropdowns
		//from the Htag we need to go to parent, then to the first div child, wich should be the 2nd child
		let div = Htag.parentElement.children[1];
		console.log();
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
				//no need for an if, since we dont care about previous data
				positions[i] = (target["BCI"][i] == cFrom);
			}
		}
		
		///---------------------------------------------------------ToDo
		//sort by position
		
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
						console.log(index);
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
			case "Delete"://any armor type
				//this ganna be sketch 
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
							//console.log(block +" > "+newBlock);
							//console.log(newBlock+" not found");
							error.innerHTML+="<br/>tried to replace:"+block.readableName +" failed, not found";
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
		blocklist.innerHTML ='<hr><h2>Imported:</h2>';
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

	
	async function BPparse(){//this function turns the file into usable data
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
		
		//fill name info
		name.innerHTML = data["Name"]+" V"+data["Version"]+ " By: "+data["Blueprint"]["AuthorDetails"]["CreatorReadableName"];
		
		//nuke output
		blocklist.innerHTML="<hr>";
		//define blocks variable for holding blocks
		let blocks = []
		for(let i in  data["Blueprint"]["BlockIds"]){
			let id = data["Blueprint"]["BlockIds"][i];
			//header
			//console.log(id);
			//have we encountered the block before?
			if(typeof blocks[id] == "undefined"){
				blocks[id]=1;//no add entry
			} else {
				blocks[id]++;//yes increment entry
			}
			///===============================================================================ToDo
			//count based on reference, for additional display, maybe even have the specific blocks under reference
		}
		//define filterd blocks
		let filteredBlocks = [];
		//fill filtered blocks
		for(let i in blocks){
			let id = translator(i);
			filteredBlocks.push({"num":blocks[i],"block":id});
		}
		//sort filtered blocks
		filteredBlocks = filteredBlocks.sort(function(a, b) {
			return b["num"] -a["num"];
		});
		//display filtered blocks
		for (let i in filteredBlocks){
			///==================================================================================ToDo
			//make table with number of blocks, name, mod, replace buttons
			blocklist.innerHTML +='<p> '+filteredBlocks[i]["num"]+': '+filteredBlocks[i]["block"]["readableName"]+" mod: "+filteredBlocks[i]["block"]["mod"]+'</p>';
		}
		//display CSI
		
		//clear data
		miscData.innerHTML ="<h3>CSI</h3><p>Values ending in ? are guesses, values that are unknown are not yet mapped</p>";
		//define known entries
		let known = [];
		known[0] = {name:"Repair Tenticles"};//number of rep tenticles
		known[1] = {name:"Repair Bots"};//number of rep bots
		known[3] = {name:"Harvesters"};//number of harvesters
		known[5] = {name:"Steam Engine Power"};// steam power capacity
		known[6] = {name:"Supply Chain?"};//material supply chain
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
		known[36] = {name:"Material Type",translate:{"0":"None","1":"Creator","2":"Transporter","3":"Consumer"}};//maaterial type, producer transporter consumer none
		known[38] = {name:"CRAM Firepower"};//cram cannon firepower
		known[41] = {name:"Speed At Cruse"};//cruse speed
		known[43] = {name:"Missile Firepower"};//missile firepower
		known[47] = {name:"Power At Full"};//power use at max speed
		known[48] = {name:"Current Battery Charge"};// battery capacity
		known[49] = {name:"Battery Capacity"};// battery capacity
		known[50] = {name:"Resupply Energy %"};//% material to supply
		known[51] = {name:"Fuel Use Per minute"};// fuel use per minute
		known[52] = {name:"Travel Type",translate:{"-1":"Air","0":"All Terrain?","1":"Sea","2":"Land"}};// travel type, air sea land all terrain
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
