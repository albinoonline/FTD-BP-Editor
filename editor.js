
window.onload = function() {
	//define things
	// when testing mod support {"unknown block":"unknown block"};//
	//for converting to and fro human readable formats
	//var dictionary made in other file
	//find thing on the page
	var Bpinput = document.getElementById('bp');//bp input
	var Modinput = document.getElementById('item');//mod input
	var name = document.getElementById('bpname');//top middle section
	var error = document.getElementById('error');//top banner for use with errors
	var blocklist = document.getElementById('blocklist'); // blocklist output panel
	//form info
	var armorFrom = document.getElementById('armorFrom'); 
	var colorFrom = document.getElementById('colorFrom'); 
	var armorTo = document.getElementById('armorTo'); 
	var colorTo = document.getElementById('colorTo'); 
	var DL = document.getElementById('DL'); 
	
	
	
	var blueprint = {};//for storing the BP
	
	
	//add event listeners
	Bpinput.addEventListener("change", function(){BPfill(BPparse())});
	Modinput.addEventListener("change", Modparse);
	Mconvertoer.addEventListener("click", massConvert);
	
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
	
	
	function massConvert(){//convert swaths of blocks to other blocks
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
		//console.log(positions);
		//now positions is sorted by color, we need to sort by block
		//armorFrom "All" "Armor" "Alloy" "Glass" "Heavy armour" "Lead" "Metal" "Rubber""Wood" "Other"
		let armors = ["Alloy","Glass","Heavy","Lead ","Metal","Rubbe","Wood "];//truncated to make things easier
		switch(armorFrom.value){
			case "All"://do nothing
			break;//leave
			case "Armor"://any armor type
				//loop through
				for(i in positions){
					if (positions[i]){//no need ti check falses
						let block = translator(target["BlockIds"][i]).slice(0,5);
						if (armors.indexOf(block) == -1){//is it an armor?
							//nope, set false
							positions[i] = false;
						}
					}//end if 
				}//end loop
			break;
			case "Other"://above, but inverted
				//loop through
				for(i in positions){
					if (positions[i]){//no need ti check falses
						let block = translator(target["BlockIds"][i]).slice(0,5);
						//console.log(block);
						if (armors.indexOf(block) != -1){//is it an armor?
							//yes, set false
							positions[i] = false;
						}
					}//end if 
				}//end loop
			break;
			default:// its a specific armor
				//loop through
				for(i in positions){
					if (positions[i]){//no need ti check falses
						let block = translator(target["BlockIds"][i]);
						if (block.slice(0,armorFrom.value.length) != armorFrom.value){//do the strings start the same?
							//nope, set false
							positions[i] = false;
						}
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
		//armorTo.value
		
		
		//armorTo "None" "Delete" "Alloy" "Glass" "Heavy armour" "Lead" "Metal" "Rubber" "Wood"
		let fullArmors = ["Alloy","Glass","Heavy Armour","Lead","Metal","Rubber","Wood"];
		switch(armorTo.value){
			case "None"://do nothing
			break;//leave
			case "Delete"://any armor type
				//this ganna be sketch 
				///-------------------------------------------------ToDo
			break;
			default:// its a specific armor
				//loop through
				//console.log(blueprint["ItemDictionary"]);
				for(i in positions){
					if (positions[i]){//only change if true, no need to check falses
						let block = translator(target["BlockIds"][i]);
						let index = armors.indexOf(block.slice(0,5));
						if (index != -1){//is it an armor?
							//yes find replacement
							
							//rename the block
							let newBlock = armorTo.value + block.slice(fullArmors[index].length);
							//find id of new block 
							//iterate through dictionary(may at some point make an inverted array), will also make a reverse translator
							//console.log(block +" > "+newBlock);
							let found=false;
							for(let j in dictionary){
								if (dictionary[j] == newBlock){//we found the id
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
								console.log(newBlock+" not found");
								error.innerHTML+="<br/>"+newBlock+" not found";
							}
						} else {
							//no block found 
							error.innerHTML +="<br/>did not replace; not an armor: "+block;
						}
					}//end if 
				}//end loop
				//console.log(blueprint["ItemDictionary"]);
			//'break'
		}//end switch
		
		//blocks replaced
		
		//recursion, through subobjects, and yes we'll drill through them all
		for(let i in target["SCs"]){
			target["SCs"][i] = massConvertRecursion(target["SCs"][i]);
		}//end recursion
		return target;//return target
	}
	//importer, will need to hook into mod importable items, and store in cookie
	async function Modparse(){//this function imports files to the dictionary
		blocklist.innerHTML ='<h2>imported:</h2>';
		console.log(Modinput.files.length);
		//blocklist.innerHTML="";
		for(let i = 0;i < Modinput.files.length ; i++){
		let file = Modinput.files[i];
		let text = await file.text();
		let data = JSON.parse(text);
		//console.log(data);
		//console.log(Object.keys(data));
		let j = data["ComponentId"];
		//header
		blocklist.innerHTML +='<p>'+j["Name"]+' as '+j["Guid"]+'</p>';
		dictionary[j["Guid"]]=j["Name"];
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
		//nuke output
		blocklist.innerHTML="<h2>Blocklist</h2>";
		let blocks = []
		for(let i in  data["Blueprint"]["BlockIds"]){
			let id = data["Blueprint"]["BlockIds"][i];
			//header
			//console.log(id);
			if(typeof blocks[id] == "undefined"){
				blocks[id]=1;
			} else {
				blocks[id]++;
			}
		}
		//fill name info
		name.innerHTML = data["Name"]+" V"+data["Version"]+ " By: "+data["Blueprint"]["AuthorDetails"]["CreatorReadableName"];
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
			blocklist.innerHTML +='<p> '+filteredBlocks[i]["num"]+': '+filteredBlocks[i]["block"]+'</p>';
		}	
	}
	function translator(tempID){
		let id = blueprint["ItemDictionary"][tempID];
		if (typeof dictionary[id] == "undefined"){
			console.log("Unknown Block: "+id+" ID: "+tempID);
			//error debugging
			
			//dictionary[id];
			
			
			
			error.innerHTML+="<br/>Unknown Block: "+id+" ID: "+tempID;
			return "none" ;
		} else {
			return dictionary[id];
		}
	}
}
