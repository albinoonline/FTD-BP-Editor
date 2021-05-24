/*
valid non self refrences:
Alloy Plate
Ammo Parts Box (empty)
Ammo Parts Box
Applique Panel
Chain Large
Glass block
Heavy Armour
Heavy Barrel
ControlSurfaceComponent
Lead Block
Metal Plate
Mimic
Railing L TA 1m M2
Railing R TA 1m M2
Railing TA 1m M1
Range Finder (5m) armour
Range Finder (5m)
Rubber Block
Rudder Square
Shaft Reduction Gear 3m
Stone Block
Truss 1m
Light-weight Alloy Block
Metal Block
Wing middle
Wood Block Variant
Wood Block

Manually added:
Reinforced Wood
To add:
clips solid/hollow



refrence extractor:for(let i in dictionary){error.innerHTML+=dictionary[i]["reference"] +"<br/>"};
dictionary extractor error.innerHTML=JSON.stringify(dictionary);


*/

var dictionary = {
	"7101e1cb-a501-49bd-8bbe-7a960881e72b":{
		"readableName":".50 AA gun",
		"searchableName":"r-class.50aagun",
		"reference":".50 AA gun",
		"mod":"Core SimpleWeapon"
	},
	"1217043c-e786-4555-ba24-46cd1f458bf9":{
		"readableName":"3.7\" Gun Shield",
		"searchableName":"typea(l)3.7\"gun",
		"reference":"3.7\" Gun Shield",
		"mod":"Core SimpleWeapon"
	},
	"f9f36cb3-cbfd-446a-9313-40f8e31e6e89":{
		"readableName":"3.7\" Gun",
		"searchableName":"typea3.7\"gun",
		"reference":"3.7\" Gun",
		"mod":"Core SimpleWeapon"
	},
	"3bff8428-7481-4847-b00e-f0e49233b86d":{
		"readableName":"4 Way pipe",
		"searchableName":"4waypipe",
		"reference":"4 Way pipe",
		"mod":"Core FuelEngine"
	},
	"819ef76e-1023-4f06-bfb1-96cd3e58ba88":{
		"readableName":"5 Way Pipe",
		"searchableName":"5waypipe",
		"reference":"5 Way Pipe",
		"mod":"Core FuelEngine"
	},
	"b633f303-0131-489a-ad4c-68b94fc5d93f":{
		"readableName":"Large 2m sealed shaft",
		"searchableName":"",
		"reference":"Large 2m sealed shaft",
		"mod":"Core SteamEngine"
	},
	"0f172964-3bad-437d-b17c-0b52c8ddc43a":{
		"readableName":"Large axis-shifting gears L",
		"searchableName":"largeaxis-shiftinggearsl",
		"reference":"Large axis-shifting gears L",
		"mod":"Core SteamEngine"
	},
	"aac4a0a5-9ff4-489d-a119-ea1b6e56ea87":{
		"readableName":"Large axis-shifting gears R",
		"searchableName":"largeaxis-shiftinggearsr",
		"reference":"Large axis-shifting gears R",
		"mod":"Core SteamEngine"
	},
	"09bec717-8b13-40ab-8468-0630cae1e964":{
		"readableName":"Large cased crank",
		"searchableName":"largecasedcrank",
		"reference":"Large cased crank",
		"mod":"Core SteamEngine"
	},
	"eb8186f4-6c24-48e6-b918-0aaea3bde6c9":{
		"readableName":"Large shaft bearing",
		"searchableName":"largeshaftbearing",
		"reference":"Large shaft bearing",
		"mod":"Core SteamEngine"
	},
	"23797716-3986-4ee7-8fed-f7884a10d810":{
		"readableName":"Large engine shaft",
		"searchableName":"largeengineshaft",
		"reference":"Large engine shaft",
		"mod":"Core SteamEngine"
	},
	"02f0c77e-2d93-4ecf-baad-5918e1825a96":{
		"readableName":"Large generator",
		"searchableName":"largegenerator",
		"reference":"Large generator",
		"mod":"Core SteamEngine"
	},
	"41f8d920-d038-4bd9-b84d-01603ac7a534":{
		"readableName":"Large gearbox",
		"searchableName":"largegearbox",
		"reference":"Large gearbox",
		"mod":"Core SteamEngine"
	},
	"b8304b5f-9b20-48b0-b3df-a8187916ed98":{
		"readableName":"Large serial piston",
		"searchableName":"largeserialpiston",
		"reference":"Large serial piston",
		"mod":"Core SteamEngine"
	},
	"0448ca96-fa37-4389-9ee3-3e7280ffadd3":{
		"readableName":"Large parallel piston",
		"searchableName":"largeparallelpiston",
		"reference":"Large parallel piston",
		"mod":"Core SteamEngine"
	},
	"4479a607-8cbf-45de-bd6b-1de26e70423b":{
		"readableName":"Large serial piston",
		"searchableName":"largeserialpiston",
		"reference":"Large serial piston",
		"mod":"Core SteamEngine"
	},
	"ceae02f9-2a21-40a0-b0d5-fdb0e4975826":{
		"readableName":"Large 5m propeller",
		"searchableName":"large5mpropeller",
		"reference":"Large 5m propeller",
		"mod":"Core SteamEngine"
	},
	"3d03785a-21b9-42c7-8acb-17cf43de9d58":{
		"readableName":"Large 7m propeller",
		"searchableName":"large7mpropeller",
		"reference":"Large 7m propeller",
		"mod":"Core SteamEngine"
	},
	"b6184e42-1647-4bd2-8465-f8b88f76621f":{
		"readableName":"Large shaft",
		"searchableName":"",
		"reference":"Large shaft",
		"mod":"Core SteamEngine"
	},
	"57b2c11e-8eea-4e0e-a102-56021b8df30f":{
		"readableName":"Large transmission",
		"searchableName":"largetransmission",
		"reference":"Large transmission",
		"mod":"Core SteamEngine"
	},
	"b87cbd21-faba-40de-9fca-a1f1a9178a21":{
		"readableName":"L turbine pipe connection",
		"searchableName":"lturbinepipeconnection",
		"reference":"L turbine pipe connection",
		"mod":"Core SteamEngine"
	},
	"9da4b2a1-a69a-472d-ad2f-a65a9a36e6ea":{
		"readableName":"L turbine generator connection",
		"searchableName":"lturbinegeneratorconnection",
		"reference":"L turbine generator connection",
		"mod":"Core SteamEngine"
	},
	"6c710586-6b65-4025-bb5c-1e359f45a352":{
		"readableName":"Large turbine generator",
		"searchableName":"largeturbinegenerator",
		"reference":"Large turbine generator",
		"mod":"Core SteamEngine"
	},
	"3dafc031-0a23-430f-bbca-4c7b8cd523db":{
		"readableName":"Large turbine middle",
		"searchableName":"largeturbinemiddle",
		"reference":"Large turbine middle",
		"mod":"Core SteamEngine"
	},
	"524cc556-c755-4df0-b396-7cb44d98fcb5":{
		"readableName":"Large turbine window",
		"searchableName":"largeturbinewindow",
		"reference":"Large turbine window",
		"mod":"Core SteamEngine"
	},
	"8266bc4e-7dc4-4c3a-bef9-9dddf4dab8d2":{
		"readableName":"Large wheel",
		"searchableName":"largewheel",
		"reference":"Large wheel",
		"mod":"Core SteamEngine"
	},
	"94c39cef-53e1-41b2-bbc6-94a869d79c64":{
		"readableName":"6 Way Pipe",
		"searchableName":"6waypipe",
		"reference":"6 Way Pipe",
		"mod":"Core FuelEngine"
	},
	"228e59f1-b3de-471a-931f-45735ae6ba7e":{
		"readableName":"6-way connector",
		"searchableName":"6-wayconnector",
		"reference":"6-way connector",
		"mod":"Core APS"
	},
	"c94e1719-bcc7-4c6a-8563-505fad2f9db9":{
		"readableName":"16 pdr Cannon",
		"searchableName":"16pdrcannon",
		"reference":"16 pdr Cannon",
		"mod":"Core SimpleWeapon"
	},
	"b92a4ce6-ea93-4c0c-97d7-494ea611caa9":{
		"readableName":"20mm AA gun",
		"searchableName":"t-class20mmaagun",
		"reference":"20mm AA gun",
		"mod":"Core SimpleWeapon"
	},
	"742f063f-d0fe-4f41-8717-a2c75c38d5e0":{
		"readableName":"30mm Assault Cannon",
		"searchableName":"30mmassaultcannon",
		"reference":"30mm Assault Cannon",
		"mod":"Core SimpleWeapon"
	},
	"58305289-16ea-43cf-9144-2f23b383da81":{
		"readableName":"32 pdr Swivel Gun",
		"searchableName":"32pdrswivelgun",
		"reference":"32 pdr Swivel Gun",
		"mod":"Core SimpleWeapon"
	},
	"3be0cab1-643b-4e3a-9f49-45995e4eb9fb":{
		"readableName":"40mm Octuple AA Gun",
		"searchableName":"octuple40mmmk-s",
		"reference":"40mm Octuple AA Gun",
		"mod":"Core SimpleWeapon"
	},
	"d8c5639a-ff5f-448e-a761-c2f69fac661a":{
		"readableName":"40mm Quad AA Gun",
		"searchableName":"quad40mmmk-i",
		"reference":"40mm Quad AA Gun",
		"mod":"Core SimpleWeapon"
	},
	"268d79bf-c266-48ed-b01b-76c8d4d31c92":{
		"readableName":"40mm Twin AA Gun",
		"searchableName":"twin40mmmk-h",
		"reference":"40mm Twin AA Gun",
		"mod":"Core SimpleWeapon"
	},
	"9b8657b9-c820-43a0-ad19-25ea45a100f1":{
		"readableName":"60mm Auto Cannon",
		"searchableName":"60mmautocannon",
		"reference":"60mm Auto Cannon",
		"mod":"Core SimpleWeapon"
	},
	"2311e4db-a281-448f-ad53-0a6127573a96":{
		"readableName":"60mm Grenade Launcher",
		"searchableName":"type-e60mmgrenadelauncher",
		"reference":"60mm Grenade Launcher",
		"mod":"Core SimpleWeapon"
	},
	"e1d1bcae-f5e4-42bb-9781-6dde51b8e390":{
		"readableName":"64 pdr Cannon",
		"searchableName":"64pdrcannon",
		"reference":"64 pdr Cannon",
		"mod":"Core SimpleWeapon"
	},
	"0aa0fa2e-1a85-4493-9c4c-0a69c385395d":{
		"readableName":"130mm Casemate",
		"searchableName":"typelcasematedgun",
		"reference":"130mm Casemate",
		"mod":"Core SimpleWeapon"
	},
	"aa070f63-c454-4f95-82fd-d946a32a1b66":{
		"readableName":"150mm Casemate",
		"searchableName":"typel(e)casematedgun",
		"reference":"150mm Casemate",
		"mod":"Core SimpleWeapon"
	},
	"2f87caef-8e9d-468f-925e-b0bf98e071f3":{
		"readableName":"AA Mantlet (2m)",
		"searchableName":"aamantlet(2m)",
		"reference":"AA Mantlet (2m)",
		"mod":"Core APS"
	},
	"328006a1-123f-432a-b18b-601dd1284247":{
		"readableName":"ACB Controller",
		"searchableName":"acbcontroller",
		"reference":"ACB Controller",
		"mod":"Core Misc"
	},
	"1aa62ea2-cb83-4778-86f0-4bd96332842c":{
		"readableName":"Acoustic sensor",
		"searchableName":"acousticsensor",
		"reference":"Acoustic sensor",
		"mod":"Core Decorations"
	},
	"267248a3-baaa-4653-83b3-ce478d600b17":{
		"readableName":"Adapter",
		"searchableName":"adapter",
		"reference":"Adapter",
		"mod":"Core FuelEngine"
	},
	"dc8f69fe-f97c-404f-996c-1b934afa17b5":{
		"readableName":"Adv. Firing piece",
		"searchableName":"adv.firingpiece",
		"reference":"Adv. Firing piece",
		"mod":"Core APS"
	},
	"b3ea8191-f5c9-42f7-b301-fc3144c8d2a5":{
		"readableName":"Advanced Cannon heatsink",
		"searchableName":"advancedcannonheatsink",
		"reference":"Advanced Cannon heatsink",
		"mod":"Core APS"
	},
	"75a78e48-0848-45ee-9df2-e2b328c1933d":{
		"readableName":"Aero elevator (pitch only)",
		"searchableName":"aeroelevator(pitchonly)",
		"reference":"Aero elevator (pitch only)",
		"mod":"Core Air"
	},
	"275b820d-dd55-49aa-9b09-48b58e8ab5da":{
		"readableName":"Aero rudder (yaw only)",
		"searchableName":"aerorudder(yawonly)",
		"reference":"Aero rudder (yaw only)",
		"mod":"Core Air"
	},
	"5ef97d26-1196-4b1a-ba1d-fd539c26b684":{
		"readableName":"AI Breadboard",
		"searchableName":"aibreadboard",
		"reference":"AI Breadboard",
		"mod":"Core AI"
	},
	"2b0444a1-9ec4-4c01-804e-a6cf07cb176d":{
		"readableName":"AI Card Slot (this version now obsolete)",
		"searchableName":"",
		"reference":"AI Card Slot (this version now obsolete)",
		"mod":"Core AI"
	},
	"edd65760-896f-4f6a-ba8c-eb2b072635f4":{
		"readableName":"AI Card Slot",
		"searchableName":"aicardslot",
		"reference":"AI Card Slot",
		"mod":"Core AI"
	},
	"8ccc8d39-5a97-4cb2-b708-d3ffefd5dc19":{
		"readableName":"AI Connector (5 way)",
		"searchableName":"connector(5way)",
		"reference":"AI Connector (5 way)",
		"mod":"Core AI"
	},
	"f29b1372-f4f3-4305-aa85-5fe214361fb7":{
		"readableName":"AI Connector (6 way)",
		"searchableName":"connector",
		"reference":"AI Connector (6 way)",
		"mod":"Core AI"
	},
	"26a604f0-071c-49ca-8a0e-e1d9c959b1c5":{
		"readableName":"AI Mainframe",
		"searchableName":"mainframe",
		"reference":"AI Mainframe",
		"mod":"Core AI"
	},
	"c4e23d98-fbde-449e-823f-872004cadc7a":{
		"readableName":"Aileron",
		"searchableName":"aileron",
		"reference":"Aileron",
		"mod":"Core Air"
	},
	"9d2ff3d6-abc2-4378-b47c-cad42d4af1bc":{
		"readableName":"Aim point selection",
		"searchableName":"aimpointselection",
		"reference":"Aim point selection",
		"mod":"Core AI"
	},
	"3b077435-2652-498b-8356-114d14dcd1dd":{
		"readableName":"Air intake duct corner",
		"searchableName":"airintakeductcorner",
		"reference":"Air intake duct corner",
		"mod":"Core Air"
	},
	"c0195e03-fdca-46bc-8a90-07591b327835":{
		"readableName":"Air intake duct",
		"searchableName":"airintakeduct",
		"reference":"Air intake duct",
		"mod":"Core Air"
	},
	"49a3ae83-4c71-4b9b-b6f3-641ec95105b1":{
		"readableName":"Air intake hull duct",
		"searchableName":"airintakehullduct",
		"reference":"Air intake hull duct",
		"mod":"Core Air"
	},
	"8331c71c-5725-472d-ad2e-65e4110982b7":{
		"readableName":"Air Pump",
		"searchableName":"airpump",
		"reference":"Air Pump",
		"mod":"Core Water"
	},
	"d93e3937-d015-44bc-95d4-84a4d264de32":{
		"readableName":"Alloy duct (1x1)",
		"searchableName":"alloyduct(1x1)",
		"reference":"Alloy duct (1x1)",
		"mod":"Core Air"
	},
	"5b37e54b-096b-4e10-9730-4f8823c596ff":{
		"readableName":"Alloy duct (3x3)",
		"searchableName":"alloyduct(3x3)",
		"reference":"Alloy duct (3x3)",
		"mod":"Core Air"
	},
	"765df0b8-b698-40b1-8361-37882e72b07c":{
		"readableName":"Alloy duct (5x5)",
		"searchableName":"alloyduct(5x5)",
		"reference":"Alloy duct (5x5)",
		"mod":"Core Air"
	},
	"23dc456a-cfc7-4373-a1a1-3eb73d1ab7b7":{
		"readableName":"Alloy duct (7x7)",
		"searchableName":"alloyduct(7x7)",
		"reference":"Alloy duct (7x7)",
		"mod":"Core Air"
	},
	"f675b19a-4a67-41de-bd60-651bac2cfe17":{
		"readableName":"Alloy Plate",
		"searchableName":"alloyplate",
		"reference":"Alloy Plate",
		"mod":"Core ACDeco"
	},
	"aecb98bb-76cd-4d05-8304-acc1392ab596":{
		"readableName":"Alloy connection strut",
		"searchableName":"",
		"reference":"Alloy connection strut",
		"mod":"Core Struts"
	},
	"da8f95fa-756d-4968-a217-7b8616fdb89c":{
		"readableName":"Ammo Barrel (empty)",
		"searchableName":"ammobarrel(empty)",
		"reference":"Ammo Barrel (empty)",
		"mod":"Core Resource"
	},
	"31277649-04ec-45db-adfc-4a7d0a73686a":{
		"readableName":"Ammo Barrel",
		"searchableName":"ammobarrel",
		"reference":"Ammo Barrel",
		"mod":"Core Resource"
	},
	"7836f02d-9d50-476c-8701-d0e4eda43de3":{
		"readableName":"Ammo Clip (1m shells)",
		"searchableName":"ammoclip(1mshells)",
		"reference":"Ammo Clip (1m shells)",
		"mod":"Core APS"
	},
	"66e3efae-4d73-4f4e-adbd-85e2573580e4":{
		"readableName":"Ammo Clip (2m shells)",
		"searchableName":"ammoclip(2mshells)",
		"reference":"Ammo Clip (2m shells)",
		"mod":"Core APS"
	},
	"3b67ec16-9ccd-47de-8753-53617df90c61":{
		"readableName":"Ammo Clip (3m shells)",
		"searchableName":"ammoclip(3mshells)",
		"reference":"Ammo Clip (3m shells)",
		"mod":"Core APS"
	},
	"c3f26ef6-22f2-4a04-bb49-aa66cc949188":{
		"readableName":"Ammo Clip (4m shells)",
		"searchableName":"ammoclip(4mshells)",
		"reference":"Ammo Clip (4m shells)",
		"mod":"Core APS"
	},
	"462f80ed-2611-4cf8-a204-c7a66ea241da":{
		"readableName":"Ammo Clip (6m shells)",
		"searchableName":"ammoclip(6mshells)",
		"reference":"Ammo Clip (6m shells)",
		"mod":"Core APS"
	},
	"2a8501f7-2463-441c-901a-57d1a6573fe6":{
		"readableName":"Ammo Clip (8m shells)",
		"searchableName":"ammoclip(8mshells)",
		"reference":"Ammo Clip (8m shells)",
		"mod":"Core APS"
	},
	"efb55635-4841-42b3-98f0-9aed90b2e826":{
		"readableName":"Ammo Controller",
		"searchableName":"ammocontroller",
		"reference":"Ammo Controller",
		"mod":"Core APS"
	},
	"c107f90f-68bb-4f16-b023-960e72e1fa3a":{
		"readableName":"Ammo Customiser 1 module",
		"searchableName":"ammocustomiser1module",
		"reference":"Ammo Customiser 1 module",
		"mod":"Core APS"
	},
	"649fc6c3-2f0c-4197-8777-e44e86696d60":{
		"readableName":"Ammo Customiser 2 modules",
		"searchableName":"ammocustomiser2modules",
		"reference":"Ammo Customiser 2 modules",
		"mod":"Core APS"
	},
	"d9a36701-b452-4364-a2f0-cc822af38cd0":{
		"readableName":"Ammo Customiser 4 modules",
		"searchableName":"ammocustomiser4modules",
		"reference":"Ammo Customiser 4 modules",
		"mod":"Core APS"
	},
	"7b672666-b275-454f-968f-506e93987800":{
		"readableName":"Ammo Ejector Backwards",
		"searchableName":"ammoejectorbackwards",
		"reference":"Ammo Ejector Backwards",
		"mod":"Core APS"
	},
	"d13556da-e6dc-4c49-a9ec-b47517709da5":{
		"readableName":"Ammo Ejector",
		"searchableName":"ammoejector",
		"reference":"Ammo Ejector",
		"mod":"Core APS"
	},
	"0a1aa046-e841-4813-907e-6567e596a079":{
		"readableName":"Ammo Input Feeder",
		"searchableName":"ammoinputfeeder",
		"reference":"Ammo Input Feeder",
		"mod":"Core APS"
	},
	"382b9ebb-03a5-4384-abfa-d7c74f7a9f46":{
		"readableName":"Ammo Parts Box (empty)",
		"searchableName":"ammopartsbox(empty)",
		"reference":"Ammo Parts Box (empty)",
		"mod":"Core Resource"
	},
	"82b2446e-c12e-436a-8340-76d38372ead1":{
		"readableName":"Ammo Parts Box",
		"searchableName":"ammopartsbox",
		"reference":"Ammo Parts Box",
		"mod":"Core Resource"
	},
	"b665e908-9db0-4c06-a209-1a7e9f41f283":{
		"readableName":"Ammunition Processor",
		"searchableName":"ammoprocessor",
		"reference":"Ammunition Processor",
		"mod":"Core Resource"
	},
	"46d84cec-6e14-4028-8aa4-e38ee045af77":{
		"readableName":"Anchor Heavy",
		"searchableName":"heavyanchor",
		"reference":"Anchor Heavy",
		"mod":"Core ACDeco"
	},
	"40f703cc-4dd4-42dd-864e-b10d9299a059":{
		"readableName":"Anchor LWT",
		"searchableName":"lightweightanchor",
		"reference":"Anchor LWT",
		"mod":"Core ACDeco"
	},
	"23b1fef3-0556-4a51-88fc-d4a223c3e934":{
		"readableName":"Anti Missile Cannon Controller",
		"searchableName":"antimissilecannoncontroller",
		"reference":"Anti Missile Cannon Controller",
		"mod":"Core AI"
	},
	"ac0f55b9-5ada-4109-9a86-31702c5597cd":{
		"readableName":"Anti roll bar 3m",
		"searchableName":"antirollbar3m",
		"reference":"Anti roll bar 3m",
		"mod":"Core Land"
	},
	"6ff28fd1-9106-45a9-9d55-2e9af5587d1b":{
		"readableName":"Anti roll bar 5m",
		"searchableName":"antirollbar5m",
		"reference":"Anti roll bar 5m",
		"mod":"Core Land"
	},
	"50cd1e03-a9f0-4ad3-9385-16b700e53008":{
		"readableName":"Anti roll bar 7m",
		"searchableName":"antirollbar7m",
		"reference":"Anti roll bar 7m",
		"mod":"Core Land"
	},
	"11703027-0d9f-4acf-ab01-c7f2e55126c9":{
		"readableName":"Anti roll bar 9m",
		"searchableName":"antirollbar9m",
		"reference":"Anti roll bar 9m",
		"mod":"Core Land"
	},
	"51f8afc5-b071-4639-9f96-693b952fdf80":{
		"readableName":"Applique Panel",
		"searchableName":"appliquepanel1m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"575187d2-ff5c-4d42-9937-0206cffbd883":{
		"readableName":"Armored Laser Optics",
		"searchableName":"armouredlaseroptics",
		"reference":"Armored Laser Optics",
		"mod":"Core Laser"
	},
	"9aa6b3c3-2569-473e-9d28-2b2cb17bc7a3":{
		"readableName":"Armored Laser Steering Optics",
		"searchableName":"armouredsteeringoptics",
		"reference":"Armored Laser Steering Optics",
		"mod":"Core Laser"
	},
	"dd9dd993-3f46-47ca-bfc0-80f37e183e9b":{
		"readableName":"Articulated Paddle",
		"searchableName":"articulatedpaddle",
		"reference":"Articulated Paddle",
		"mod":"Core Water"
	},
	"d7d56a2b-bc35-4c89-87de-38c99e7d1c2f":{
		"readableName":"Autoloader (1m shells)",
		"searchableName":"autoloader(1mshells)",
		"reference":"Autoloader (1m shells)",
		"mod":"Core APS"
	},
	"04d60765-2c11-48eb-b9fa-c3eb847b91d5":{
		"readableName":"Autoloader (2m shells)",
		"searchableName":"autoloader(2mshells)",
		"reference":"Autoloader (2m shells)",
		"mod":"Core APS"
	},
	"23453c1f-3946-4db0-a75e-f8b6dab12569":{
		"readableName":"Autoloader (3m shells)",
		"searchableName":"autoloader(3mshells)",
		"reference":"Autoloader (3m shells)",
		"mod":"Core APS"
	},
	"86a9327f-50c1-44d9-aa06-08dc3f25b433":{
		"readableName":"Autoloader (4m shells)",
		"searchableName":"autoloader(4mshells)",
		"reference":"Autoloader (4m shells)",
		"mod":"Core APS"
	},
	"1dd8c1cf-ce0b-469d-9924-455dae4958f5":{
		"readableName":"Autoloader (6m shells)",
		"searchableName":"autoloader(6mshells)",
		"reference":"Autoloader (6m shells)",
		"mod":"Core APS"
	},
	"832b5533-fa5d-45ec-ba4f-2dca1e8f0bba":{
		"readableName":"Autoloader (8m shells)",
		"searchableName":"autoloader(8mshells)",
		"reference":"Autoloader (8m shells)",
		"mod":"Core APS"
	},
	"a3d914e9-697d-425f-abda-a6b21b4de952":{
		"readableName":"Automated Control Block",
		"searchableName":"acb",
		"reference":"Automated Control Block",
		"mod":"Core Misc"
	},
	"1e978876-5c69-45f1-9ba1-40b5ae560f9e":{
		"readableName":"Wide wheel 1m mirror",
		"searchableName":"widewheel1mmirror",
		"reference":"Wide wheel 1m mirror",
		"mod":"Core Land"
	},
	"91ef14fd-da81-4010-bfa6-0a9aafc7112b":{
		"readableName":"Wide wheel 1m",
		"searchableName":"widewheel1m",
		"reference":"Wide wheel 1m",
		"mod":"Core Land"
	},
	"81db2a62-75ff-4d9a-aecb-10d3f8f4a47e":{
		"readableName":"Wide wheel 3m mirror",
		"searchableName":"widewheel3mmirror",
		"reference":"Wide wheel 3m mirror",
		"mod":"Core Land"
	},
	"e69cbb14-5df0-4645-8f11-93ce51207ff8":{
		"readableName":"Wide wheel 3m",
		"searchableName":"widewheel3m",
		"reference":"Wide wheel 3m",
		"mod":"Core Land"
	},
	"bca2b4e8-2216-448b-b254-927833620756":{
		"readableName":"Wide wheel 5m mirror",
		"searchableName":"widewheel5mmirror",
		"reference":"Wide wheel 5m mirror",
		"mod":"Core Land"
	},
	"dddf2251-d1e6-4792-9270-c9250b610733":{
		"readableName":"Wide wheel 5m turning mirror",
		"searchableName":"widewheel5mturningmirror",
		"reference":"Wide wheel 5m turning mirror",
		"mod":"Core Land"
	},
	"435fd3cc-7a4e-45f4-b47d-47a5cdd9a4fc":{
		"readableName":"Wide wheel 5m turning",
		"searchableName":"widewheel5mturning",
		"reference":"Wide wheel 5m turning",
		"mod":"Core Land"
	},
	"da173fac-8673-4ef7-aae5-d089e78ea6ce":{
		"readableName":"Wide wheel 5m",
		"searchableName":"widewheel5m",
		"reference":"Wide wheel 5m",
		"mod":"Core Land"
	},
	"24032540-b488-4316-ada1-44952bd2bb0e":{
		"readableName":"Wide wheel 1m turning mirror",
		"searchableName":"widewheel1mturningmirror",
		"reference":"Wide wheel 1m turning mirror",
		"mod":"Core Land"
	},
	"6cf7ba0b-eee5-48a8-a714-f8a6ce76d186":{
		"readableName":"Wide wheel turning 1m",
		"searchableName":"widewheelturning1m",
		"reference":"Wide wheel turning 1m",
		"mod":"Core Land"
	},
	"f601a728-1a00-4d9e-b23c-f78064cbf3a5":{
		"readableName":"Wide wheel 3m turning mirror",
		"searchableName":"widewheel3mturningmirror",
		"reference":"Wide wheel 3m turning mirror",
		"mod":"Core Land"
	},
	"9c92daaf-654d-4e4e-9976-c7348ee7898d":{
		"readableName":"Wide wheel turning 3m",
		"searchableName":"widewheelturning3m",
		"reference":"Wide wheel turning 3m",
		"mod":"Core Land"
	},
	"74f9b43b-14d2-433c-acc0-8f0322427daa":{
		"readableName":"Barrel (2m)",
		"searchableName":"barrel2m",
		"reference":"Barrel (2m)",
		"mod":"Core APS"
	},
	"e8ae14ad-159f-4d33-86f3-408e01aa4fdd":{
		"readableName":"Barrel (3m)",
		"searchableName":"barrel3m",
		"reference":"Barrel (3m)",
		"mod":"Core APS"
	},
	"011e4de9-c66c-4ce6-ad22-2fd6ac9df2a6":{
		"readableName":"Barrel (4m)",
		"searchableName":"barrel4m",
		"reference":"Barrel (4m)",
		"mod":"Core APS"
	},
	"08d6ef2c-d97e-4b40-a5e3-0485b945f88b":{
		"readableName":"Barrel",
		"searchableName":"barrel",
		"reference":"Barrel",
		"mod":"Core APS"
	},
	"543fd6c7-fcf3-4df0-a4b2-891a8574b434":{
		"readableName":"Barrel",
		"searchableName":"barrel",
		"reference":"Barrel",
		"mod":"Core CRAM"
	},
	"78514976-87cf-4d89-85cd-9d0df590a317":{
		"readableName":"Battery Charger",
		"searchableName":"batterycharger",
		"reference":"Battery Charger",
		"mod":"Core Depreciated"
	},
	"38e9a85a-ac7d-4cb0-bd43-a5ae2099640c":{
		"readableName":"Battery Storage Beam",
		"searchableName":"batterystoragebeam(4m)",
		"reference":"Battery Storage Beam",
		"mod":"Core Resource"
	},
	"56c27d46-39b3-4ac1-b4f7-71c118d8dde9":{
		"readableName":"Battery Storage Large",
		"searchableName":"batterystoragelarge(3x3)",
		"reference":"Battery Storage Large",
		"mod":"Core Resource"
	},
	"56450137-c20f-4793-972c-fb3fe56ae8d5":{
		"readableName":"Battery Storage Medium (mirror)",
		"searchableName":"batterystoragemedium(2mcubemirror)",
		"reference":"Battery Storage Medium (mirror)",
		"mod":"Core Resource"
	},
	"ee47622e-4eb6-4fd0-81f7-97b33adde8d2":{
		"readableName":"Battery Storage Medium",
		"searchableName":"batterystoragemedium(2mcube)",
		"reference":"Battery Storage Medium",
		"mod":"Core Resource"
	},
	"8600329a-4b2b-44c7-8e66-634b0d81ce3d":{
		"readableName":"Battery",
		"searchableName":"battery",
		"reference":"Battery",
		"mod":"Core Resource"
	},
	"57cd27b4-7876-41a7-8030-d5099d86bc0a":{
		"readableName":"Behaviours & Additional Routines ",
		"searchableName":"behaviours&additionalroutines",
		"reference":"Behaviours & Additional Routines ",
		"mod":"Core AI"
	},
	"00b9dfc4-ac8f-4fee-bbe0-a76aeeb75627":{
		"readableName":"Belt feed autoloader (1m shells)",
		"searchableName":"beltfeedautoloader(1mshells)",
		"reference":"Belt feed autoloader (1m shells)",
		"mod":"Core APS"
	},
	"a8dcd83f-ec5f-40fc-901e-0bf45a8e551b":{
		"readableName":"Boat Propeller circular",
		"searchableName":"propellercircular",
		"reference":"Boat Propeller circular",
		"mod":"Core Water"
	},
	"3a59c6f8-59dc-4a12-8fd3-c509a9d84906":{
		"readableName":"Boat Propeller",
		"searchableName":"propellersquare",
		"reference":"Boat Propeller",
		"mod":"Core Water"
	},
	"2078227e-d38c-4f58-abd0-6f4878806a9f":{
		"readableName":"Boat Rudder",
		"searchableName":"rudder",
		"reference":"Boat Rudder",
		"mod":"Core Water"
	},
	"bd32505c-29b2-4ff2-aa27-4ab3018b6706":{
		"readableName":"Large boiler connector",
		"searchableName":"largeboilerconnector",
		"reference":"Large boiler connector",
		"mod":"Core SteamEngine"
	},
	"16e58d6d-30ce-40ac-a80e-ea153a3608a8":{
		"readableName":"Large boiler control",
		"searchableName":"largeboilercontrol",
		"reference":"Large boiler control",
		"mod":"Core SteamEngine"
	},
	"2f3a940f-b0fb-42ab-aabf-f1c933fe0264":{
		"readableName":"Large boiler end",
		"searchableName":"largeboilerend",
		"reference":"Large boiler end",
		"mod":"Core SteamEngine"
	},
	"1af1b76e-23df-495e-8bc7-711ce2c221f8":{
		"readableName":"Large boiler",
		"searchableName":"largeboiler",
		"reference":"Large boiler",
		"mod":"Core SteamEngine"
	},
	"b44be747-32cb-41b7-9e1e-21472534b4b8":{
		"readableName":"Medium boiler",
		"searchableName":"mediumboiler",
		"reference":"Medium boiler",
		"mod":"Core SteamEngine"
	},
	"811379b2-2e27-4268-b821-940766960802":{
		"readableName":"Small boiler",
		"searchableName":"smallboiler",
		"reference":"Small boiler",
		"mod":"Core SteamEngine"
	},
	"ce494e45-5ff6-48a7-8936-30163c58ed99":{
		"readableName":"Bomb Chute",
		"searchableName":"bombchute",
		"reference":"Bomb Chute",
		"mod":"Core CRAM"
	},
	"c0577484-fdc7-43d4-bb51-a4d3fc378141":{
		"readableName":"Bombing run airplane AI",
		"searchableName":"",
		"reference":"Bombing run airplane AI",
		"mod":"Core AI"
	},
	"8af05ae6-7876-41a7-8030-d5099d86bc0a":{
		"readableName":"Bombing run hovercraft AI",
		"searchableName":"",
		"reference":"Bombing run hovercraft AI",
		"mod":"Core AI"
	},
	"d4806e59-5ebe-40b1-b223-c8232691396d":{
		"readableName":"BoomBlock",
		"searchableName":"boomblock",
		"reference":"BoomBlock",
		"mod":"Core Misc"
	},
	"9e8fd38f-a406-4d87-8186-de37979d4d20":{
		"readableName":"Bore Evacuator",
		"searchableName":"boreevacuator",
		"reference":"Bore Evacuator",
		"mod":"Core APS"
	},
	"7fcfdaf0-2d2a-43be-842a-423e736ccdd0":{
		"readableName":"Bread Board",
		"searchableName":"non-aibreadboard",
		"reference":"Bread Board",
		"mod":"Core Misc"
	},
	"7aacb57c-355d-4345-9d35-b34850058753":{
		"readableName":"Build conduit",
		"searchableName":"buildconduit",
		"reference":"Build conduit",
		"mod":"Core AI"
	},
	"06aeabde-f2bf-4a28-96c9-48bdab5dc1bc":{
		"readableName":"Build guide spawner",
		"searchableName":"",
		"reference":"Build guide spawner",
		"mod":"Core Decorations"
	},
	"0d1d97b5-3c99-45bf-8a5d-e7a624b3ddb6":{
		"readableName":"Camera 90",
		"searchableName":"camera90",
		"reference":"Camera 90",
		"mod":"Core AI"
	},
	"c68d0ed7-66d1-42cd-974e-01aa0f36c847":{
		"readableName":"Camera 360",
		"searchableName":"camera360",
		"reference":"Camera 360",
		"mod":"Core AI"
	},
	"62e2b663-c26f-461e-ae26-43068010f993":{
		"readableName":"Camera Gimbal Tracker",
		"searchableName":"cameragimbaltracker",
		"reference":"Camera Gimbal Tracker",
		"mod":"Core AI"
	},
	"043e9b00-4a2f-41b8-bf2f-4aaa4442f138":{
		"readableName":"Carburettor",
		"searchableName":"carburettor",
		"reference":"Carburettor",
		"mod":"Core FuelEngine"
	},
	"aea2161d-ff43-4b10-ac0e-933fb5809faa":{
		"readableName":"(CARD) Aerial AI",
		"searchableName":"(card)aerialai",
		"reference":"(CARD) Aerial AI",
		"mod":"Core AI"
	},
	"df687d3b-ad26-49bb-86be-ed694e880252":{
		"readableName":"(CARD) Fortress AI",
		"searchableName":"(card)fortressai",
		"reference":"(CARD) Fortress AI",
		"mod":"Core AI"
	},
	"77642c0c-277f-4a7d-9d08-f3f161d8e69c":{
		"readableName":"(CARD) Land AI",
		"searchableName":"(card)landai",
		"reference":"(CARD) Land AI",
		"mod":"Core AI"
	},
	"6ae7c977-3f62-414e-98aa-5dc0da89b376":{
		"readableName":"(CARD) Naval AI",
		"searchableName":"(card)navalai",
		"reference":"(CARD) Naval AI",
		"mod":"Core AI"
	},
	"87c616fa-b498-4858-8439-68411a0a62e3":{
		"readableName":"(CARD) Patrol",
		"searchableName":"(card)patrol",
		"reference":"(CARD) Patrol",
		"mod":"Core AI"
	},
	"6d26fe2d-c9ce-4d86-b26f-78afbd22b5b6":{
		"readableName":"(CARD) Propulsion Balancing",
		"searchableName":"(card)propulsionbalancing",
		"reference":"(CARD) Propulsion Balancing",
		"mod":"Core AI"
	},
	"f3a1dc17-764c-4435-a83b-17914d5dac6b":{
		"readableName":"(CARD) sailing",
		"searchableName":"(card)sailing",
		"reference":"(CARD) sailing",
		"mod":"Core AI"
	},
	"00d31a4d-d523-43f1-b5c2-f96b33a69a99":{
		"readableName":"(CARD) Tracker Target Association",
		"searchableName":"(card)trackertargetassociation",
		"reference":"(CARD) Tracker Target Association",
		"mod":"Core AI"
	},
	"cb04f082-b5d9-411c-86da-010123dfb5bf":{
		"readableName":"(CARD) water start",
		"searchableName":"(card)waterstart",
		"reference":"(CARD) water start",
		"mod":"Core AI"
	},
	"438b4494-6746-4223-93a1-3a75b08bd5b6":{
		"readableName":"Cargo Container",
		"searchableName":"cargocontainer",
		"reference":"Cargo Container",
		"mod":"Core ACDeco"
	},
	"f4138d11-e258-4925-9a8e-1b0054e4b82b":{
		"readableName":"Chaff Emitter",
		"searchableName":"chaffemitter",
		"reference":"Chaff Emitter",
		"mod":"Core Misc"
	},
	"e3dcb476-5dae-4d64-ad60-e25b69009ab8":{
		"readableName":"Chain Large",
		"searchableName":"largechain",
		"reference":"Chain Large",
		"mod":"Core ACDeco"
	},
	"0706d2b0-c244-4e0f-8577-79338cb073cf":{
		"readableName":"Chair",
		"searchableName":"chair",
		"reference":"Chair",
		"mod":"Core Misc"
	},
	"55ac222d-69c7-4a14-8bab-39432308ab0b":{
		"readableName":"Circling airplane AI",
		"searchableName":"",
		"reference":"Circling airplane AI",
		"mod":"Core AI"
	},
	"79ef49d5-7876-41a7-8030-d5099d86bc0a":{
		"readableName":"Circling hovercraft AI",
		"searchableName":"",
		"reference":"Circling hovercraft AI",
		"mod":"Core AI"
	},
	"9f418d0a-18b7-4e53-ac8b-acb49270fd9a":{
		"readableName":"Circling ship AI",
		"searchableName":"",
		"reference":"Circling ship AI",
		"mod":"Core AI"
	},
	"63889002-e666-4ff4-9cc1-cca01a8de2ce":{
		"readableName":"Circling tank AI",
		"searchableName":"",
		"reference":"Circling tank AI",
		"mod":"Core AI"
	},
	"24013612-7711-4f1a-8e5a-d9c540aa4884":{
		"readableName":"Coal Pile Large",
		"searchableName":"coalpile(large)",
		"reference":"Coal Pile Large",
		"mod":"Core ACDeco"
	},
	"0c0d49f3-83c0-41db-85f1-e7c27390cbdb":{
		"readableName":"Coal Pile",
		"searchableName":"coalpile",
		"reference":"Coal Pile",
		"mod":"Core ACDeco"
	},
	"46fc87ec-0f7f-4c55-a5d3-721365c5f364":{
		"readableName":"Compact Repair Tentacle",
		"searchableName":"compactrepairtentacle",
		"reference":"Compact Repair Tentacle",
		"mod":"Core Misc"
	},
	"76fb5718-e965-46ab-9f0c-c82baf648abf":{
		"readableName":"Small compact turbine",
		"searchableName":"smallcompactturbine",
		"reference":"Small compact turbine",
		"mod":"Core SteamEngine"
	},
	"6a04c57e-0076-4f30-9f99-f92eba7fcd53":{
		"readableName":"Complex Controller",
		"searchableName":"complexcontroller",
		"reference":"Complex Controller",
		"mod":"Core Misc"
	},
	"154e5001-729c-4a9f-983b-342d3092a0f3":{
		"readableName":"Connector",
		"searchableName":"connector",
		"reference":"Connector",
		"mod":"Core Missile"
	},
	"1240b6db-1f41-442a-88ce-5ab0944d804b":{
		"readableName":"Control Terminal",
		"searchableName":"controlterminal",
		"reference":"Control Terminal",
		"mod":"Core Misc"
	},
	"310a7a9a-8d4e-4365-a877-1a8e2bac2a81":{
		"readableName":"Controller",
		"searchableName":"controller",
		"reference":"Controller",
		"mod":"Core Missile"
	},
	"eabd8ca6-30c5-4960-9ec0-221b065b7306":{
		"readableName":"Control surface",
		"searchableName":"controlsurface",
		"reference":"Control surface",
		"mod":"Core ControlSurfaces"
	},
	"2de7b9d9-9e47-4765-8428-4846c0919400":{
		"readableName":"Control surface pivot",
		"searchableName":"controlsurfacepivot",
		"reference":"Control surface pivot",
		"mod":"Core ControlSurfaces"
	},
	"0e11729e-09d9-4a3c-83dd-1ee16ed4f2f8":{
		"readableName":"Steam corner pipe",
		"searchableName":"steamcornerpipe",
		"reference":"Steam corner pipe",
		"mod":"Core SteamEngine"
	},
	"d5016f16-6431-4e8f-b0cc-5f0f400b151a":{
		"readableName":"Corner Pipe",
		"searchableName":"cornerpipe",
		"reference":"Corner Pipe",
		"mod":"Core FuelEngine"
	},
	"01a87958-93cf-4efa-857f-10913b0573d9":{
		"readableName":"Crank Shaft",
		"searchableName":"crankshaft",
		"reference":"Crank Shaft",
		"mod":"Core FuelEngine"
	},
	"a0a6c5da-d68a-48dd-864f-e7632f8f6fde":{
		"readableName":"Crate",
		"searchableName":"crate",
		"reference":"Crate",
		"mod":"Core Resource"
	},
	"ce79f42d-107f-4483-91c4-f5520c1d79e6":{
		"readableName":"Crystal growth farm",
		"searchableName":"boxofcrystals",
		"reference":"Crystal growth farm",
		"mod":"Core Resource"
	},
	"4270e6e1-4d30-416b-9ed3-5bc64d574148":{
		"readableName":"Crystal growth tray",
		"searchableName":"trayofcrystals",
		"reference":"Crystal growth tray",
		"mod":"Core Resource"
	},
	"515ee20d-20d8-4195-bea5-213e6f1fd929":{
		"readableName":"Cylinder",
		"searchableName":"cylinder",
		"reference":"Cylinder",
		"mod":"Core FuelEngine"
	},
	"ac102b13-115e-4f27-bab0-4e17baf92c7a":{
		"readableName":"nce show",
		"searchableName":"",
		"reference":"nce show",
		"mod":"ce sho"
	},
	"75ffb576-34c6-4dae-87a6-0f45d6482070":{
		"readableName":"Deck Port",
		"searchableName":"deckport",
		"reference":"Deck Port",
		"mod":"Core Decorations"
	},
	"862712ab-6534-45e2-ad89-1d8eb0fd26de":{
		"readableName":"Dedicated heliblade extension",
		"searchableName":"dedibladeextension",
		"reference":"Dedicated heliblade extension",
		"mod":"Core Air"
	},
	"6f0efd3e-c241-437c-b25f-92dc1e83332c":{
		"readableName":"Dedicated heliblade pole extender",
		"searchableName":"dedibladepoleextender",
		"reference":"Dedicated heliblade pole extender",
		"mod":"Core Air"
	},
	"564a75cd-8d7c-469b-a4b3-053d772b7d9d":{
		"readableName":"Dedicated heliblade spinner",
		"searchableName":"dedibladespinner",
		"reference":"Dedicated heliblade spinner",
		"mod":"Core Air"
	},
	"e961fe5b-cce0-4a1e-8742-936ab8088636":{
		"readableName":"Dish piece",
		"searchableName":"dishpiece",
		"reference":"Dish piece",
		"mod":"Core Misc"
	},
	"6c37df0b-7eaf-48d4-85d8-2453014d8edf":{
		"readableName":"Display",
		"searchableName":"",
		"reference":"Display",
		"mod":"Core Decorations"
	},
	"7e9abf0f-84a7-44e6-b4c3-e3da6f942072":{
		"readableName":"Docking station",
		"searchableName":"dockingstation",
		"reference":"Docking station",
		"mod":"Core Misc"
	},
	"6f2ebbbc-6f9c-499e-8850-7725712e4cf2":{
		"readableName":"Door Bulkhead Alloy",
		"searchableName":"alloybulkheaddoor",
		"reference":"Door Bulkhead Alloy",
		"mod":"Core ACDeco"
	},
	"9ea523b6-af69-4809-b5e4-88351099b2dc":{
		"readableName":"Door Bulkhead Metal",
		"searchableName":"metalbulkheaddoor",
		"reference":"Door Bulkhead Metal",
		"mod":"Core ACDeco"
	},
	"83e3a5e9-cfb8-4a0c-9ced-6f53822cd2f1":{
		"readableName":"Door Hatch Alloy",
		"searchableName":"alloyarmouredhatch",
		"reference":"Door Hatch Alloy",
		"mod":"Core ACDeco"
	},
	"a8fcb3c2-49bb-4a0c-970e-2c200f9c6c0d":{
		"readableName":"Door Hatch Metal",
		"searchableName":"metalarmouredhatch",
		"reference":"Door Hatch Metal",
		"mod":"Core ACDeco"
	},
	"fc4f02ab-2e74-4deb-8d83-ca3da65c99ff":{
		"readableName":"Drill Bit (Large)",
		"searchableName":"drillbit(large)",
		"reference":"Drill Bit (Large)",
		"mod":"Core Drill"
	},
	"edf0442a-4976-43f4-9a9c-66e43f0353ff":{
		"readableName":"Drill Bit (Small)",
		"searchableName":"drillbit(small)",
		"reference":"Drill Bit (Small)",
		"mod":"Core Drill"
	},
	"1af0aadf-7edc-401a-9750-0074b8b46b6a":{
		"readableName":"Drill Extension horizontal splitter",
		"searchableName":"drillextensionhorizontalsplitter",
		"reference":"Drill Extension horizontal splitter",
		"mod":"Core Drill"
	},
	"51cfbd8b-5223-4101-b4f3-f62872a82b58":{
		"readableName":"Drill Extension vertical splitter",
		"searchableName":"extensionverticalsplitter",
		"reference":"Drill Extension vertical splitter",
		"mod":"Core Drill"
	},
	"197f8869-1891-4e7d-9465-97b9183aed22":{
		"readableName":"Drill Extension",
		"searchableName":"drillextension",
		"reference":"Drill Extension",
		"mod":"Core Drill"
	},
	"eadfab64-b2a7-4704-8241-37ae3b42f705":{
		"readableName":"Drill",
		"searchableName":"drill",
		"reference":"Drill",
		"mod":"Core Drill"
	},
	"d24cdfe7-bb26-403d-a854-dfa77506e5fb":{
		"readableName":"Drive maintainer",
		"searchableName":"drivemaintainer",
		"reference":"Drive maintainer",
		"mod":"Core Misc"
	},
	"5e236eef-c91e-45bc-afc4-bff4d133ac14":{
		"readableName":"Duct (3x3)",
		"searchableName":"metalduct(3x3)",
		"reference":"Duct (3x3)",
		"mod":"Core Air"
	},
	"e7fc9ece-d2f4-4671-a3e8-77196601cf4e":{
		"readableName":"Duct (5x5)",
		"searchableName":"metalduct(5x5)",
		"reference":"Duct (5x5)",
		"mod":"Core Air"
	},
	"52b78a75-115a-4962-96f1-35177b46ba93":{
		"readableName":"Duct (7x7)",
		"searchableName":"metalduct(7x7)",
		"reference":"Duct (7x7)",
		"mod":"Core Air"
	},
	"d898f953-9f27-484a-ba41-ce7ada3f047c":{
		"readableName":"Ducted air intake front",
		"searchableName":"ductedairintakefront",
		"reference":"Ducted air intake front",
		"mod":"Core Air"
	},
	"576a1ec8-9e31-441e-a8d3-83f3b12af97a":{
		"readableName":"Ducted air intake side",
		"searchableName":"ductedairintakeside",
		"reference":"Ducted air intake side",
		"mod":"Core Air"
	},
	"8a075da2-c74c-4129-8c89-a8c2dba21a45":{
		"readableName":"Ducted air intake",
		"searchableName":"ductedairintake",
		"reference":"Ducted air intake",
		"mod":"Core Air"
	},
	"86a6eb4b-cb64-4451-9dc5-94efff6b8ed6":{
		"readableName":"Ejector Add On",
		"searchableName":"ejectoradd-on",
		"reference":"Ejector Add On",
		"mod":"Core Missile"
	},
	"c8fe583a-357b-4fa6-86f1-fc2de639c909":{
		"readableName":"Electric Engine",
		"searchableName":"electricengine",
		"reference":"Electric Engine",
		"mod":"Core Resource"
	},
	"c937c1c0-d6f3-46b4-af96-d1842a240fb3":{
		"readableName":"Small crank motor",
		"searchableName":"",
		"reference":"Small crank motor",
		"mod":"Core SteamEngine"
	},
	"de655a70-1b6f-4549-a810-029356047512":{
		"readableName":"Medium crank motor",
		"searchableName":"",
		"reference":"Medium crank motor",
		"mod":"Core SteamEngine"
	},
	"19a3d1a2-574e-4619-91b0-050d3b1201a9":{
		"readableName":"Large crank motor",
		"searchableName":"",
		"reference":"Large crank motor",
		"mod":"Core SteamEngine"
	},
	"2e715d3f-349f-41e1-bd89-7f685939d5aa":{
		"readableName":"Elevated Chair",
		"searchableName":"elevatedchair",
		"reference":"Elevated Chair",
		"mod":"Core Misc"
	},
	"bc292fe3-2330-4a01-8615-412a19fd7f6d":{
		"readableName":"Elevation barrel",
		"searchableName":"elevationbarrel",
		"reference":"Elevation barrel",
		"mod":"Core CRAM"
	},
	"d22f3d7d-7507-4d30-b884-9bfdc68d59be":{
		"readableName":"Elevation Mantlet (1m)",
		"searchableName":"elevationmantlet(1m)",
		"reference":"Elevation Mantlet (1m)",
		"mod":"Core APS"
	},
	"c624a6cd-31dc-49d3-a1e9-5482d06acbc6":{
		"readableName":"Elevation Mantlet (3m)",
		"searchableName":"elevationmantlet(3m)",
		"reference":"Elevation Mantlet (3m)",
		"mod":"Core APS"
	},
	"d2cccaa0-415a-413a-964e-ff747f20b964":{
		"readableName":"Elevation only Turret",
		"searchableName":"elevationonlyturret",
		"reference":"Elevation only Turret",
		"mod":"Core Construct"
	},
	"87142f81-71ce-4d60-9b81-4fe5674112db":{
		"readableName":"EMP Pellets",
		"searchableName":"emppellets",
		"reference":"EMP Pellets",
		"mod":"Core CRAM"
	},
	"052432ff-4709-4cfc-b3b6-82a34f6757ca":{
		"readableName":"Enemy Simulator",
		"searchableName":"enemysimulator",
		"reference":"Enemy Simulator",
		"mod":"Core AI"
	},
	"d7e6366f-3f5c-4dbc-a1fc-b63de74ed7eb":{
		"readableName":"Engine",
		"searchableName":"engine",
		"reference":"Engine",
		"mod":"Core Depreciated"
	},
	"10e8b2e3-2a00-46e8-94d5-44c0403df6bf":{
		"readableName":"ERA Armour Slope (1m)",
		"searchableName":"eraarmourslope(1m)",
		"reference":"ERA Armour Slope (1m)",
		"mod":"Core Structural"
	},
	"b6904047-0232-442f-b444-d99a440edf2f":{
		"readableName":"ERA Armour",
		"searchableName":"eraarmour",
		"reference":"ERA Armour",
		"mod":"Core Structural"
	},
	"36eff35b-864d-4455-86e2-939996ca3f27":{
		"readableName":"Example mod block",
		"searchableName":"",
		"reference":"Example mod block",
		"mod":"ExampleMod"
	},
	"ac5dda48-2bbf-453b-a4d5-517ae78499a1":{
		"readableName":"Exhaust",
		"searchableName":"exhaust",
		"reference":"Exhaust",
		"mod":"Core FuelEngine"
	},
	"ddee4f0c-e9de-4a73-b87f-c34d674450cb":{
		"readableName":"Failsafe",
		"searchableName":"failsafe",
		"reference":"Failsafe",
		"mod":"Core AI"
	},
	"6785811b-60fb-48f2-ac17-642ab69d1dde":{
		"readableName":"Fall of Shot Predictor",
		"searchableName":"fallofshotpredictor",
		"reference":"Fall of Shot Predictor",
		"mod":"Core APS"
	},
	"cf1cffd2-27e9-45b7-9720-0025e890f99b":{
		"readableName":"Fancy Material Storage Large",
		"searchableName":"fancymaterialstoragelarge",
		"reference":"Fancy Material Storage Large",
		"mod":"Core Resource"
	},
	"f05191b9-468c-407b-9601-453a46fbaf1a":{
		"readableName":"Fancy Material Storage Small",
		"searchableName":"fancymaterialstoragesmall",
		"reference":"Fancy Material Storage Small",
		"mod":"Core Resource"
	},
	"5b609887-c1dd-407b-b3b6-b1eb35d1e818":{
		"readableName":"Fire control computer",
		"searchableName":"firecontrolcomputer",
		"reference":"Fire control computer",
		"mod":"Core Misc"
	},
	"fa3b5219-d4bf-401a-a105-c0332d8496d2":{
		"readableName":"Fire pattern controller",
		"searchableName":"firepatterncontroller",
		"reference":"Fire pattern controller",
		"mod":"Core AI"
	},
	"4d7a6918-e6ed-4328-a7b6-1f5e874618d5":{
		"readableName":"Small firebox",
		"searchableName":"smallfirebox",
		"reference":"Small firebox",
		"mod":"Core SteamEngine"
	},
	"a3114f91-5182-4803-9ec6-fc1e6a7f9a87":{
		"readableName":"Medium firebox",
		"searchableName":"mediumfirebox",
		"reference":"Medium firebox",
		"mod":"Core SteamEngine"
	},
	"a97e03b0-e8da-49e2-9913-ad8c1826d869":{
		"readableName":"Firing piece",
		"searchableName":"firingpiece",
		"reference":"Firing piece",
		"mod":"Core CRAM"
	},
	"930ab796-f1c7-47f0-bf04-0ef6ae44006b":{
		"readableName":"Flag post",
		"searchableName":"flagpost",
		"reference":"Flag post",
		"mod":"Core AI"
	},
	"a5872d78-28e7-48a3-b452-ceb29de035cc":{
		"readableName":"Flash Suppression Barrel",
		"searchableName":"flashsuppressionbarrel",
		"reference":"Flash Suppression Barrel",
		"mod":"Core CRAM"
	},
	"20100af6-ccd1-41ff-b7b0-5d2f6bb99f85":{
		"readableName":"Fortress Controller",
		"searchableName":"fortresscontroller",
		"reference":"Fortress Controller",
		"mod":"Core Misc"
	},
	"74c982f4-305f-411e-a8b4-d193315ab3bc":{
		"readableName":"Fortress",
		"searchableName":"fortress",
		"reference":"Fortress",
		"mod":"Core Construct"
	},
	"379c94e6-7f27-42ab-ab45-66e3533ecde8":{
		"readableName":"Fragmentation Pellets",
		"searchableName":"fragpellets",
		"reference":"Fragmentation Pellets",
		"mod":"Core CRAM"
	},
	"fb1fb4c7-78e8-47e7-8ff1-34a4afcd10c7":{
		"readableName":"Frequency Doubler",
		"searchableName":"frequencydoubler",
		"reference":"Frequency Doubler",
		"mod":"Core Laser"
	},
	"76dfe171-525a-48ea-8652-b7537aa06572":{
		"readableName":"Front & Back Connector",
		"searchableName":"front&backconnector",
		"reference":"Front & Back Connector",
		"mod":"Core Depreciated"
	},
	"655b4a78-f193-4da9-82bd-6f0c9b4560f1":{
		"readableName":"Front air duct intake",
		"searchableName":"frontairductintake",
		"reference":"Front air duct intake",
		"mod":"Core Air"
	},
	"68de38c4-7876-41a7-8030-d5099d86bc0a":{
		"readableName":"Frontal hovercraft AI",
		"searchableName":"frontalhovercraftai",
		"reference":"Frontal hovercraft AI",
		"mod":"Core AI"
	},
	"4c24445d-a29b-446e-b03f-29e570e9d47d":{
		"readableName":"Fuel Engine Generator",
		"searchableName":"fuelenginegenerator",
		"reference":"Fuel Engine Generator",
		"mod":"Core FuelEngine"
	},
	"edb1b2eb-dac7-4c4f-8967-35f61c75fd93":{
		"readableName":"Fuel Processor",
		"searchableName":"",
		"reference":"Fuel Processor",
		"mod":"Core Depreciated"
	},
	"1327d1ea-c923-44cf-85b0-eb9e1e272167":{
		"readableName":"Refinery Catalytic Cracker",
		"searchableName":"catalyticcracker",
		"reference":"Refinery Catalytic Cracker",
		"mod":"Core Resource"
	},
	"6bcaa132-06af-423a-9998-8f73161a2f73":{
		"readableName":"Refinery Coker",
		"searchableName":"coker",
		"reference":"Refinery Coker",
		"mod":"Core Resource"
	},
	"c89978fc-2b10-494d-8824-6717f24a8048":{
		"readableName":"Refinery Corner Pipe",
		"searchableName":"refinerycornerpipe",
		"reference":"Refinery Corner Pipe",
		"mod":"Core Resource"
	},
	"9f97c3df-a0a3-4fa4-8570-094a2e65d8aa":{
		"readableName":"Refinery Desalter",
		"searchableName":"desalter",
		"reference":"Refinery Desalter",
		"mod":"Core Resource"
	},
	"4d9a507f-84a3-456a-8b60-6d1bf48816ca":{
		"readableName":"Refinery Flare Stack",
		"searchableName":"flarestack",
		"reference":"Refinery Flare Stack",
		"mod":"Core Resource"
	},
	"442dd6e0-29d0-4457-9fa8-72deb3f25b62":{
		"readableName":"Refinery Hull Pipe",
		"searchableName":"refineryhullpipe",
		"reference":"Refinery Hull Pipe",
		"mod":"Core Resource"
	},
	"3b3b8073-7bde-4184-836b-3f1c8418eee4":{
		"readableName":"Refinery Junction Pipe",
		"searchableName":"refineryjunctionpipe",
		"reference":"Refinery Junction Pipe",
		"mod":"Core Resource"
	},
	"e3629274-8e2e-41ed-8315-d84f8db05995":{
		"readableName":"Refinery L-Junction Pipe (left)",
		"searchableName":"refineryl-junctionpipe(l)",
		"reference":"Refinery L-Junction Pipe (left)",
		"mod":"Core Resource"
	},
	"c0b07b2b-3e92-4ba7-896e-71ff7284de03":{
		"readableName":"Refinery L-Junction Pipe (right)",
		"searchableName":"refineryl-junctionpipe(r)",
		"reference":"Refinery L-Junction Pipe (right)",
		"mod":"Core Resource"
	},
	"743fbce9-9073-49b4-aa15-4a22a5a2f1e5":{
		"readableName":"Refinery Pipe 2m",
		"searchableName":"refinerypipe2m",
		"reference":"Refinery Pipe 2m",
		"mod":"Core Resource"
	},
	"a783daba-b6c2-4d87-aee8-ee1791f45587":{
		"readableName":"Refinery Pipe 3m",
		"searchableName":"refinerypipe3m",
		"reference":"Refinery Pipe 3m",
		"mod":"Core Resource"
	},
	"f21dc267-2735-4e75-a862-d48547d71663":{
		"readableName":"Refinery Pipe 4 way",
		"searchableName":"refinerypipe4way",
		"reference":"Refinery Pipe 4 way",
		"mod":"Core Resource"
	},
	"d401bed1-2346-4eef-86aa-c303556f2138":{
		"readableName":"Refinery Pipe 4m",
		"searchableName":"refinerypipe4m",
		"reference":"Refinery Pipe 4m",
		"mod":"Core Resource"
	},
	"61683d9c-848c-4ae9-945e-62b12f8b44c3":{
		"readableName":"Refinery Pipe 5 way",
		"searchableName":"refinerypipe5way",
		"reference":"Refinery Pipe 5 way",
		"mod":"Core Resource"
	},
	"21260a48-aeea-4ca3-b71a-f16959ed5955":{
		"readableName":"Refinery Pipe 6 way",
		"searchableName":"refinerypipe6way",
		"reference":"Refinery Pipe 6 way",
		"mod":"Core Resource"
	},
	"42da61ac-9a3e-4146-9ae4-5d70580e1176":{
		"readableName":"Refinery Pipe",
		"searchableName":"refinerypipe",
		"reference":"Refinery Pipe",
		"mod":"Core Resource"
	},
	"357175b3-cf60-4bad-ab62-109a6b77592d":{
		"readableName":"Refinery Throughput Pipe",
		"searchableName":"refinerythroughputpipe",
		"reference":"Refinery Throughput Pipe",
		"mod":"Core Resource"
	},
	"164b642c-c99b-48f7-b001-2aeed1badb33":{
		"readableName":"Refinery X-Junction Pipe",
		"searchableName":"refineryx-junctionpipe",
		"reference":"Refinery X-Junction Pipe",
		"mod":"Core Resource"
	},
	"56b29112-55f3-4e0a-9279-f6437adb2847":{
		"readableName":"Refinery",
		"searchableName":"refinery",
		"reference":"Refinery",
		"mod":"Core Resource"
	},
	"d40c0a33-eb4f-4fa0-8550-0e7a680eb275":{
		"readableName":"Fuel Storage Box (2m, empty)",
		"searchableName":"fuelboxbeam(2m,empty)",
		"reference":"Fuel Storage Box (2m, empty)",
		"mod":"Core Resource"
	},
	"4f87eff7-616b-4663-8f11-cd7a7ddd3649":{
		"readableName":"Fuel Storage Box (2m)",
		"searchableName":"fuelboxbeam(2m)",
		"reference":"Fuel Storage Box (2m)",
		"mod":"Core Resource"
	},
	"d676e16b-cc4c-4887-944e-77e9d07c7d30":{
		"readableName":"Fuel Storage Box (3x3m, empty)",
		"searchableName":"largefuelbox(3x3,empty)",
		"reference":"Fuel Storage Box (3x3m, empty)",
		"mod":"Core Resource"
	},
	"d661f0e7-7f81-4227-80dd-f93aed873630":{
		"readableName":"Fuel Storage Box (3x3m)",
		"searchableName":"largefuelbox(3x3)",
		"reference":"Fuel Storage Box (3x3m)",
		"mod":"Core Resource"
	},
	"5154dcf9-57f8-48f2-9503-5db1f1dc9ea5":{
		"readableName":"Fuel Storage Box (4m, empty)",
		"searchableName":"fuelboxbeam(4m,empty)",
		"reference":"Fuel Storage Box (4m, empty)",
		"mod":"Core Resource"
	},
	"9413049d-a4f7-4c1c-8b8a-d2f1f4c18e53":{
		"readableName":"Fuel Storage Box (4m)",
		"searchableName":"fuelboxbeam(4m)",
		"reference":"Fuel Storage Box (4m)",
		"mod":"Core Resource"
	},
	"7383557f-abe2-4bcc-849f-89b6c0d02c78":{
		"readableName":"Fuel Storage Box (empty)",
		"searchableName":"fuelstoragebox(empty)",
		"reference":"Fuel Storage Box (empty)",
		"mod":"Core Resource"
	},
	"5d8870cd-d401-4b52-a3dc-641c02b3b31f":{
		"readableName":"Fuel Storage Box",
		"searchableName":"fuelstoragebox",
		"reference":"Fuel Storage Box",
		"mod":"Core Resource"
	},
	"996cdf27-bebf-4999-9a2d-a54893ba70c6":{
		"readableName":"Fuel Storage Tank (empty)",
		"searchableName":"fuelstoragetank(empty)",
		"reference":"Fuel Storage Tank (empty)",
		"mod":"Core Resource"
	},
	"79015536-c137-4c87-a337-99dcf3deff81":{
		"readableName":"Fuel Storage Tank",
		"searchableName":"fuelstoragetank",
		"reference":"Fuel Storage Tank",
		"mod":"Core Resource"
	},
	"ec49b6a2-244f-4cfa-b49e-8dd19213b280":{
		"readableName":"Fusing Box",
		"searchableName":"fusingbox",
		"reference":"Fusing Box",
		"mod":"Core CRAM"
	},
	"ac65ce78-2e21-465e-a28b-07ebbd65805e":{
		"readableName":"Gauge cooler 4way",
		"searchableName":"gaugecooler4way",
		"reference":"Gauge cooler 4way",
		"mod":"Core APS"
	},
	"93c6e594-4bea-419c-93f6-8d1f6c3463ec":{
		"readableName":"Gauge cooler 5way",
		"searchableName":"gaugecooler5way",
		"reference":"Gauge cooler 5way",
		"mod":"Core APS"
	},
	"8a96edf6-93c3-47c2-b3ad-894598f262e3":{
		"readableName":"Gauge cooler corner",
		"searchableName":"",
		"reference":"Gauge cooler corner",
		"mod":"Core APS"
	},
	"52ff74a3-3d0f-4b2f-bfe3-23ff12f74354":{
		"readableName":"Gauge cooler splitter",
		"searchableName":"coolingsplitter",
		"reference":"Gauge cooler splitter",
		"mod":"Core APS"
	},
	"703d6094-850b-45fc-a01c-25ceddd49dcb":{
		"readableName":"Gauge cooling unit",
		"searchableName":"coolingunit",
		"reference":"Gauge cooling unit",
		"mod":"Core APS"
	},
	"645a71be-2a80-4228-b036-9de863576708":{
		"readableName":"Gauge Increase Corner",
		"searchableName":"gaugeincreasecorner",
		"reference":"Gauge Increase Corner",
		"mod":"Core CRAM"
	},
	"8d70c55b-d200-4f56-a159-28646427d4b1":{
		"readableName":"Gauge Increase Port",
		"searchableName":"gaugeincreaseport",
		"reference":"Gauge Increase Port",
		"mod":"Core CRAM"
	},
	"d2550253-f55a-48e2-8f57-c3931c0359da":{
		"readableName":"Gauge Increase Top",
		"searchableName":"gaugeincreasetop",
		"reference":"Gauge Increase Top",
		"mod":"Core CRAM"
	},
	"3d6d4fca-b7a9-44f3-a888-d3e43a79331a":{
		"readableName":"Gauge increase",
		"searchableName":"gaugeincreaser",
		"reference":"Gauge increase",
		"mod":"Core APS"
	},
	"9a3f63f4-48b6-4fe0-9f59-9fac3d073750":{
		"readableName":"Gauge Increase",
		"searchableName":"gaugeincrease",
		"reference":"Gauge Increase",
		"mod":"Core CRAM"
	},
	"57d0b848-3bf5-45db-bfe2-447933aee7fd":{
		"readableName":"Medium gearbox",
		"searchableName":"mediumgearbox",
		"reference":"Medium gearbox",
		"mod":"Core SteamEngine"
	},
	"a91233a6-a786-4ca8-b50f-9faca5cb3733":{
		"readableName":"Small gearbox",
		"searchableName":"smallgearbox",
		"reference":"Small gearbox",
		"mod":"Core SteamEngine"
	},
	"3ed4d2a4-62ce-4807-b516-6da685804e1e":{
		"readableName":"General Purpose Processing Card",
		"searchableName":"generalprocessingcard",
		"reference":"General Purpose Processing Card",
		"mod":"Core AI"
	},
	"da80769e-0a55-4e05-bf58-1541842f4e82":{
		"readableName":"Generator",
		"searchableName":"generator",
		"reference":"Generator",
		"mod":"Core Depreciated"
	},
	"2d519ca8-1f12-4a8e-9340-aa6648b5e799":{
		"readableName":"Glass block",
		"searchableName":"block",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"47c8ddc8-9dca-4363-a39e-95dd28008e30":{
		"readableName":"Hardener Pellets",
		"searchableName":"hardenerpellets",
		"reference":"Hardener Pellets",
		"mod":"Core CRAM"
	},
	"7cd6a310-cf17-4f6d-a818-8f29d029778f":{
		"readableName":"Heart Stone Extension",
		"searchableName":"heartstoneextension",
		"reference":"Heart Stone Extension",
		"mod":"Core Misc"
	},
	"6a7c1ad1-21e5-4b2e-bf04-cc08d639313c":{
		"readableName":"Heart Stone",
		"searchableName":"heartstone",
		"reference":"Heart Stone",
		"mod":"Core Misc"
	},
	"4576e3fe-8eda-4e24-9823-eb68e4a9c953":{
		"readableName":"Heat Decoy",
		"searchableName":"heatdecoy",
		"reference":"Heat Decoy",
		"mod":"Core Misc"
	},
	"78804e2d-8086-4e40-accb-0b5719be91bf":{
		"readableName":"Heavy armour duct (1x1)",
		"searchableName":"heavyarmourduct(1x1)",
		"reference":"Heavy armour duct (1x1)",
		"mod":"Core Air"
	},
	"6071db06-cc2a-4692-8914-bf5c2df16928":{
		"readableName":"Heavy armour duct (3x3)",
		"searchableName":"heavyarmourduct(3x3)",
		"reference":"Heavy armour duct (3x3)",
		"mod":"Core Air"
	},
	"e238669c-ef02-4e6d-847e-3397f1a5b30d":{
		"readableName":"Heavy armour duct (5x5)",
		"searchableName":"heavyarmourduct(5x5)",
		"reference":"Heavy armour duct (5x5)",
		"mod":"Core Air"
	},
	"9d6a7a27-b3d1-4579-8c6b-20c20d535d04":{
		"readableName":"Heavy armour duct (7x7)",
		"searchableName":"heavyarmourduct(7x7)",
		"reference":"Heavy armour duct (7x7)",
		"mod":"Core Air"
	},
	"fd48a04d-ddd7-4828-b6d0-b6d3347488ee":{
		"readableName":"Heavy armour connection strut",
		"searchableName":"",
		"reference":"Heavy armour connection strut",
		"mod":"Core Struts"
	},
	"0c03433e-8947-4e7d-9dec-793526fe06d1":{
		"readableName":"Heavy Armour",
		"searchableName":"block",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"62fc0360-f8ff-4ee7-90f2-92da6a26640c":{
		"readableName":"Heavy Barrel (2m)",
		"searchableName":"heavybarrel2m",
		"reference":"Heavy Barrel (2m)",
		"mod":"Core APS"
	},
	"ed9c1986-99f7-4c15-af23-d735442a286b":{
		"readableName":"Heavy Barrel (3m)",
		"searchableName":"heavybarrel3m",
		"reference":"Heavy Barrel (3m)",
		"mod":"Core APS"
	},
	"3d8c87b7-2488-4982-860b-e7eda8d5d590":{
		"readableName":"Heavy Barrel (4m)",
		"searchableName":"heavybarrel4m",
		"reference":"Heavy Barrel (4m)",
		"mod":"Core APS"
	},
	"413da151-24e7-4e94-b5c7-ce7994252586":{
		"readableName":"Heavy Barrel End (2m)",
		"searchableName":"heavybarrelend2m",
		"reference":"Heavy Barrel End (2m)",
		"mod":"Core APS"
	},
	"f49d4249-2995-4a81-b67c-6abbce092b8f":{
		"readableName":"Heavy Barrel End (3m)",
		"searchableName":"heavybarrelend3m",
		"reference":"Heavy Barrel End (3m)",
		"mod":"Core APS"
	},
	"3108f579-7c8e-44e5-8cd8-2fe107afb3ea":{
		"readableName":"Heavy Barrel End (4m)",
		"searchableName":"heavybarrelend4m",
		"reference":"Heavy Barrel End (4m)",
		"mod":"Core APS"
	},
	"02666d0e-e9a9-4c9c-854b-a35972a3be64":{
		"readableName":"Heavy Barrel End",
		"searchableName":"heavybarrelend",
		"reference":"Heavy Barrel End",
		"mod":"Core APS"
	},
	"9233e3ff-3040-45d3-a2de-873e41a1df76":{
		"readableName":"Heavy Barrel Start (2m)",
		"searchableName":"heavybarrelstart2m",
		"reference":"Heavy Barrel Start (2m)",
		"mod":"Core APS"
	},
	"24e5e3f7-ad7a-4083-abff-0a262f541dd9":{
		"readableName":"Heavy Barrel Start (3m)",
		"searchableName":"heavybarrelstart3m",
		"reference":"Heavy Barrel Start (3m)",
		"mod":"Core APS"
	},
	"6ad7cafc-e88c-4722-88c0-f5acba190527":{
		"readableName":"Heavy Barrel Start (4m)",
		"searchableName":"heavybarrelstart4m",
		"reference":"Heavy Barrel Start (4m)",
		"mod":"Core APS"
	},
	"24fc1a2c-66aa-4152-a0d8-7d0dd5645151":{
		"readableName":"Heavy Barrel Start",
		"searchableName":"heavybarrelstart",
		"reference":"Heavy Barrel Start",
		"mod":"Core APS"
	},
	"1b672c70-b108-4ec9-b6f6-9f817adf7250":{
		"readableName":"Heavy Barrel",
		"searchableName":"heavybarrel",
		"reference":"Heavy Barrel",
		"mod":"Core CRAM"
	},
	"b2a95e90-cfad-4f43-9860-513d31f47374":{
		"readableName":"Heavy Barrel",
		"searchableName":"heavybarrel",
		"reference":"Heavy Barrel",
		"mod":"Core APS"
	},
	"7fea28f0-eb30-4700-a592-c3eb1ffc7b0e":{
		"readableName":"Helicopter blade (unstabilised)",
		"searchableName":"helicopterblade(unstabilised)",
		"reference":"Helicopter blade (unstabilised)",
		"mod":"Core Air"
	},
	"2a508eb8-cc74-43bb-9643-afd0c518d09f":{
		"readableName":"Helicopter blade (Upside down!!)",
		"searchableName":"helicopterblade(upsidedown!!)",
		"reference":"Helicopter blade (Upside down!!)",
		"mod":"Core Air"
	},
	"d15a334b-d951-4991-89f0-cdf2599a9699":{
		"readableName":"Helicopter blade",
		"searchableName":"helicopterblade",
		"reference":"Helicopter blade",
		"mod":"Core Air"
	},
	"0d466e68-7a97-4e27-a73c-6bda4010f7e7":{
		"readableName":"Helium pump",
		"searchableName":"heliumpump",
		"reference":"Helium pump",
		"mod":"Core Air"
	},
	"34a95c9b-6680-4a26-8b20-87a92a6eb8fa":{
		"readableName":"Help page reader",
		"searchableName":"",
		"reference":"Help page reader",
		"mod":"Core Decorations"
	},
	"4bd38234-b485-4a94-bc2d-d3fc80d89955":{
		"readableName":"High Explosive Pellets",
		"searchableName":"hepellets",
		"reference":"High Explosive Pellets",
		"mod":"Core CRAM"
	},
	"8d948200-242c-47c3-b46a-ecdf40f7b39b":{
		"readableName":"Hologram Projector",
		"searchableName":"hologramprojector",
		"reference":"Hologram Projector",
		"mod":"Core Decorations"
	},
	"7475c363-fa60-4348-a2e9-f3e2329fc20a":{
		"readableName":"Hot air balloon deployer",
		"searchableName":"hotairballoondeployer",
		"reference":"Hot air balloon deployer",
		"mod":"Core Air"
	},
	"ad965629-9b13-448b-ab7a-7e69afad2fb4":{
		"readableName":"Hover jet",
		"searchableName":"hoverjet",
		"reference":"Hover jet",
		"mod":"Core Air"
	},
	"874113a3-3f91-4615-a9fb-008a83566803":{
		"readableName":"Huge gantry",
		"searchableName":"hugegantry",
		"reference":"Huge gantry",
		"mod":"Core Missile"
	},
	"5697891b-f3d6-4587-9a86-bd4faa29171e":{
		"readableName":"Huge hatch",
		"searchableName":"",
		"reference":"Huge hatch",
		"mod":"Core Missile"
	},
	"0083a83e-a716-4c67-aa49-d14fbcd00248":{
		"readableName":"Huge ion thruster circular",
		"searchableName":"hugeionthrustercircular",
		"reference":"Huge ion thruster circular",
		"mod":"Core Air"
	},
	"02ea8321-aaff-4d03-8c50-20c241a82632":{
		"readableName":"Huge ion thruster",
		"searchableName":"hugeionthruster",
		"reference":"Huge ion thruster",
		"mod":"Core Air"
	},
	"50626002-c1bc-41a3-ade6-ee83ba4c548a":{
		"readableName":"Huge jet Engine flush",
		"searchableName":"hugejetengineflush",
		"reference":"Huge jet Engine flush",
		"mod":"Core Air"
	},
	"b74c27c0-081a-45b7-8e81-cdd84ff33490":{
		"readableName":"Huge jet Engine",
		"searchableName":"hugejetengine",
		"reference":"Huge jet Engine",
		"mod":"Core Air"
	},
	"6fc05823-7905-4b5e-bde0-858010860e91":{
		"readableName":"Huge launcher",
		"searchableName":"hugelauncher",
		"reference":"Huge launcher",
		"mod":"Core Missile"
	},
	"576e79a6-07e1-4485-903d-e5929d512c08":{
		"readableName":"Huge propeller circular",
		"searchableName":"hugepropellercircular",
		"reference":"Huge propeller circular",
		"mod":"Core Water"
	},
	"9710b923-9e8c-4762-aa74-bffefb263a7e":{
		"readableName":"Huge propeller",
		"searchableName":"hugepropellersquare",
		"reference":"Huge propeller",
		"mod":"Core Water"
	},
	"56b8c974-6eb9-4ef4-888d-aeaba3bcf7a2":{
		"readableName":"Huge rail gantry (invisible)",
		"searchableName":"hugeinvisiblerailgantry",
		"reference":"Huge rail gantry (invisible)",
		"mod":"Core Missile"
	},
	"9eedfe02-5a15-45c1-b785-56f5aea76145":{
		"readableName":"Huge rail gantry",
		"searchableName":"",
		"reference":"Huge rail gantry",
		"mod":"Core Missile"
	},
	"9bff4b97-c652-4da7-99df-ab4a1bd5551e":{
		"readableName":"Huge rail launcher",
		"searchableName":"hugeraillauncher",
		"reference":"Huge rail launcher",
		"mod":"Core Missile"
	},
	"91d167b1-652f-4ac8-adc4-973b548ccd5d":{
		"readableName":"Hull Pipe",
		"searchableName":"hullpipe",
		"reference":"Hull Pipe",
		"mod":"Core FuelEngine"
	},
	"5bd210b0-2377-45c8-9287-ec607acbbe60":{
		"readableName":"Hydraulic recoil absorber (1m)",
		"searchableName":"recoilabsorber(1m)",
		"reference":"Hydraulic recoil absorber (1m)",
		"mod":"Core APS"
	},
	"faa18ecd-0edf-4167-8c30-8cf2b95f42e1":{
		"readableName":"Hydraulic recoil absorber (2m)",
		"searchableName":"recoilabsorber(2m)",
		"reference":"Hydraulic recoil absorber (2m)",
		"mod":"Core APS"
	},
	"fd4946a4-1633-4627-9728-c1b5dd276ddb":{
		"readableName":"Hydraulic recoil absorber (4m)",
		"searchableName":"recoilabsorber(4m)",
		"reference":"Hydraulic recoil absorber (4m)",
		"mod":"Core APS"
	},
	"e0f5e9a7-a384-48f9-9ec5-fe6aac81c440":{
		"readableName":"Hydraulic recoil absorber (6m)",
		"searchableName":"recoilabsorber(6m)",
		"reference":"Hydraulic recoil absorber (6m)",
		"mod":"Core APS"
	},
	"acb4bf6e-b10e-4a6f-b9dc-b22be888c096":{
		"readableName":"Hydraulic recoil absorber (8m)",
		"searchableName":"recoilabsorber(8m)",
		"reference":"Hydraulic recoil absorber (8m)",
		"mod":"Core APS"
	},
	"953f1c50-c18f-43f4-815a-c19e5aff7af7":{
		"readableName":"Hydrofoil",
		"searchableName":"hydrofoil",
		"reference":"Hydrofoil",
		"mod":"Core Water"
	},
	"4aa8cfcb-7aeb-430b-9726-f8bb8d8f4124":{
		"readableName":"Identify Friend Or Foe Add-on",
		"searchableName":"identifyfriendorfoeadd-on",
		"reference":"Identify Friend Or Foe Add-on",
		"mod":"Core Missile"
	},
	"f94702c9-cb55-49e3-8cc4-138288fa1f13":{
		"readableName":"Injector",
		"searchableName":"injector",
		"reference":"Injector",
		"mod":"Core FuelEngine"
	},
	"4b2109f7-abfc-46b7-b752-f9423b6f2e35":{
		"readableName":"Inline turbocharger (left)",
		"searchableName":"carburetedturbocharger(l)",
		"reference":"Inline turbocharger (left)",
		"mod":"Core FuelEngine"
	},
	"6ebe5e2b-ef9a-4849-b234-131b25579adf":{
		"readableName":"Inline turbocharger (right)",
		"searchableName":"carburetedturbocharger(r)",
		"reference":"Inline turbocharger (right)",
		"mod":"Core FuelEngine"
	},
	"5292dcab-a674-467a-a21a-702d2c2a152b":{
		"readableName":"Inter vehicle Transmitter",
		"searchableName":"inter-vehicletransmitter",
		"reference":"Inter vehicle Transmitter",
		"mod":"Core AI"
	},
	"9ebc44a7-5c1c-484e-8b06-ae390a48db17":{
		"readableName":"Interface screen",
		"searchableName":"interfacescreen",
		"reference":"Interface screen",
		"mod":"Core CRAM"
	},
	"1d206e3b-4641-4002-9d3d-940036154408":{
		"readableName":"Ion thruster circular",
		"searchableName":"ionthrustercircular",
		"reference":"Ion thruster circular",
		"mod":"Core Air"
	},
	"2718d6ad-07a2-4d98-bd7e-9cdb2b3f70db":{
		"readableName":"Ion thruster",
		"searchableName":"ionthruster",
		"reference":"Ion thruster",
		"mod":"Core Air"
	},
	"f003eae6-6818-4da9-a1d0-6e4f1677d49f":{
		"readableName":"IR Camera 90",
		"searchableName":"ircamera90",
		"reference":"IR Camera 90",
		"mod":"Core AI"
	},
	"60c591be-98fa-4844-b55b-6d55bc16493e":{
		"readableName":"IR Camera 360",
		"searchableName":"ircamera360",
		"reference":"IR Camera 360",
		"mod":"Core AI"
	},
	"a745d992-b62f-4014-a524-9e5953ccffd3":{
		"readableName":"IR Camera Gimbal Tracker",
		"searchableName":"ircameragimbaltracker",
		"reference":"IR Camera Gimbal Tracker",
		"mod":"Core AI"
	},
	"bbe92c52-4eb0-44e7-a1cf-119266d3d8e5":{
		"readableName":"Jet combuster hull",
		"searchableName":"combusterhull",
		"reference":"Jet combuster hull",
		"mod":"Core Air"
	},
	"fdab4d92-8519-4090-b7e1-b794953b44e4":{
		"readableName":"Jet combuster",
		"searchableName":"combuster",
		"reference":"Jet combuster",
		"mod":"Core Air"
	},
	"a31d4438-03b8-4cf2-ad7d-ff7c07fbf60c":{
		"readableName":"Jet compressor hull",
		"searchableName":"compressorhull",
		"reference":"Jet compressor hull",
		"mod":"Core Air"
	},
	"8e2cb19b-db70-41f4-b398-62c38fd22d2d":{
		"readableName":"Jet compressor",
		"searchableName":"compressor",
		"reference":"Jet compressor",
		"mod":"Core Air"
	},
	"2a990d46-0140-4ae7-95f5-db9efd76aaa8":{
		"readableName":"Jet connector corner",
		"searchableName":"cornerexhaustconnector",
		"reference":"Jet connector corner",
		"mod":"Core Air"
	},
	"9cfb35eb-6259-4bfe-9751-6cc1c5d4c2d6":{
		"readableName":"Jet connector hull",
		"searchableName":"exhaustconnectorhull",
		"reference":"Jet connector hull",
		"mod":"Core Air"
	},
	"58ba2272-9c86-495b-b2b2-751eda4aafb8":{
		"readableName":"Jet connector",
		"searchableName":"exhaustconnector",
		"reference":"Jet connector",
		"mod":"Core Air"
	},
	"35d7b71f-0247-4e73-8307-5199180d1cbb":{
		"readableName":"Jet controller hull",
		"searchableName":"jetcontrollerhull",
		"reference":"Jet controller hull",
		"mod":"Core Air"
	},
	"b9fabb99-ff73-4018-8521-08441d2f18cf":{
		"readableName":"Jet controller",
		"searchableName":"jetcontroller",
		"reference":"Jet controller",
		"mod":"Core Air"
	},
	"a70f015e-a9fe-45f1-958c-fc501ec7e2ea":{
		"readableName":"Jet engine flush",
		"searchableName":"jetengineflush",
		"reference":"Jet engine flush",
		"mod":"Core Air"
	},
	"b50989c9-03d4-4201-a8d4-459dcea86b05":{
		"readableName":"Jet engine",
		"searchableName":"jetengine",
		"reference":"Jet engine",
		"mod":"Core Air"
	},
	"d62b91f6-8356-4fbc-8415-6405e04cba92":{
		"readableName":"Jet exhaust hull",
		"searchableName":"exhausthull",
		"reference":"Jet exhaust hull",
		"mod":"Core Air"
	},
	"89c3beb4-0fa3-4c3f-a065-7e53497cbe64":{
		"readableName":"Jet exhaust",
		"searchableName":"exhaust",
		"reference":"Jet exhaust",
		"mod":"Core Air"
	},
	"59e0ca88-f390-48d0-ade1-0c08f629c4f2":{
		"readableName":"Jet extra combuster",
		"searchableName":"extracombuster",
		"reference":"Jet extra combuster",
		"mod":"Core Air"
	},
	"e3d22373-253f-4f48-9638-77d756473c6b":{
		"readableName":"Jet extra compressor",
		"searchableName":"extracompressor",
		"reference":"Jet extra compressor",
		"mod":"Core Air"
	},
	"c5bb6398-319b-47c1-a5ef-c6ce9af4e9a6":{
		"readableName":"Jet fuel injector",
		"searchableName":"injector",
		"reference":"Jet fuel injector",
		"mod":"Core Air"
	},
	"9e39a47e-f190-435a-9ed0-650c2b205f27":{
		"readableName":"Jet generator hull",
		"searchableName":"jetgeneratorhull",
		"reference":"Jet generator hull",
		"mod":"Core Air"
	},
	"f460c104-356f-4abe-b96a-97122285348f":{
		"readableName":"Jet generator",
		"searchableName":"jetgenerator",
		"reference":"Jet generator",
		"mod":"Core Air"
	},
	"12e26b7f-d42f-4af0-b134-129f8aed8a90":{
		"readableName":"Jet intake add-on",
		"searchableName":"intakeadd-on",
		"reference":"Jet intake add-on",
		"mod":"Core Air"
	},
	"82106938-610c-4a66-8fe3-8cde947e707a":{
		"readableName":"Jet intake hull",
		"searchableName":"intakehull",
		"reference":"Jet intake hull",
		"mod":"Core Air"
	},
	"261a60dd-5a01-4e6f-b7e8-a56bb21e2ad9":{
		"readableName":"Jet intake",
		"searchableName":"intake",
		"reference":"Jet intake",
		"mod":"Core Air"
	},
	"ad3867b5-6146-44b8-a539-6ab08311e5fe":{
		"readableName":"Jet stabiliser",
		"searchableName":"jetstabiliser",
		"reference":"Jet stabiliser",
		"mod":"Core Air"
	},
	"33b65ccc-58a0-487d-8b68-a997a71b0bfe":{
		"readableName":"Junction Pipe",
		"searchableName":"junctionpipe",
		"reference":"Junction Pipe",
		"mod":"Core FuelEngine"
	},
	"6c2979f0-365a-4e9c-88ee-7b9d931409cb":{
		"readableName":"Ladder",
		"searchableName":"",
		"reference":"Ladder",
		"mod":"Core ACDeco"
	},
	"cd788eca-ec52-40d2-bf17-48a6d47e569e":{
		"readableName":"Large Gantry Left",
		"searchableName":"",
		"reference":"Large Gantry Left",
		"mod":"Core Missile"
	},
	"87d9e52e-6386-4e93-ae29-aab2522f3edb":{
		"readableName":"Large Gantry",
		"searchableName":"largegantry",
		"reference":"Large Gantry",
		"mod":"Core Missile"
	},
	"43d357dd-d896-4f43-a0ff-8c3b091267c4":{
		"readableName":"Large Launcher Left",
		"searchableName":"",
		"reference":"Large Launcher Left",
		"mod":"Core Missile"
	},
	"9424812a-274e-4223-a3ae-9ee86a7db46b":{
		"readableName":"Large Launcher (reversed)",
		"searchableName":"largelauncher(reversed)",
		"reference":"Large Launcher (reversed)",
		"mod":"Core Missile"
	},
	"6a166a7c-dc50-401c-8498-3a7d6b7f09e7":{
		"readableName":"Large Launcher",
		"searchableName":"largelauncher",
		"reference":"Large Launcher",
		"mod":"Core Missile"
	},
	"9815045c-62a7-4bef-90f6-b385a26754ca":{
		"readableName":"Large Missile Hatch 2x2",
		"searchableName":"2x2hatch",
		"reference":"Large Missile Hatch 2x2",
		"mod":"Core Missile"
	},
	"a85fe5af-6d4a-4fcb-9744-d9d23fff5046":{
		"readableName":"Large Missile Hatch 2x2",
		"searchableName":"",
		"reference":"Large Missile Hatch 2x2",
		"mod":"Core Missile"
	},
	"eb38713d-831b-4118-8dad-a6551c1f7268":{
		"readableName":"Large Missile Hatch 4x4",
		"searchableName":"4x4hatch",
		"reference":"Large Missile Hatch 4x4",
		"mod":"Core Missile"
	},
	"25575b2b-223c-48f3-ab6f-7133d26e86e8":{
		"readableName":"Large Radiator",
		"searchableName":"largeradiator",
		"reference":"Large Radiator",
		"mod":"Core FuelEngine"
	},
	"c0a9174a-0685-48cc-a930-a3dadf614936":{
		"readableName":"Large Rail Gantry (invisible) left",
		"searchableName":"",
		"reference":"Large Rail Gantry (invisible) left",
		"mod":"Core Missile"
	},
	"76c9e52e-6386-4e93-ae29-aab2522f3edb":{
		"readableName":"Large Rail Gantry (invisible)",
		"searchableName":"largeinvisiblerailgantry",
		"reference":"Large Rail Gantry (invisible)",
		"mod":"Core Missile"
	},
	"437fdc18-7d37-47d1-81f9-79aede662a26":{
		"readableName":"Large Rail Gantry Left",
		"searchableName":"",
		"reference":"Large Rail Gantry Left",
		"mod":"Core Missile"
	},
	"98a9e52e-6386-4e93-ae29-aab2522f3edb":{
		"readableName":"Large Rail Gantry",
		"searchableName":"largerailgantry",
		"reference":"Large Rail Gantry",
		"mod":"Core Missile"
	},
	"77b3c67d-f649-438c-8e24-5779c0f0bdbf":{
		"readableName":"Large Rail Launcher Left",
		"searchableName":"",
		"reference":"Large Rail Launcher Left",
		"mod":"Core Missile"
	},
	"54a66bcd-dc50-401c-8498-3a7d6b7f09e7":{
		"readableName":"Large Rail Launcher",
		"searchableName":"largeraillauncher",
		"reference":"Large Rail Launcher",
		"mod":"Core Missile"
	},
	"1c4e94a1-c36a-4b8f-86be-a9b2ae736a71":{
		"readableName":"M turbine pipe connection",
		"searchableName":"mturbinepipeconnection",
		"reference":"M turbine pipe connection",
		"mod":"Core SteamEngine"
	},
	"dbd44b5e-acc7-4797-9c06-a07b19f03bdd":{
		"readableName":"M turbine generator connection",
		"searchableName":"mturbinegeneratorconnection",
		"reference":"M turbine generator connection",
		"mod":"Core SteamEngine"
	},
	"25ae7b90-4e78-49c3-8bd5-59712fc87b77":{
		"readableName":"Medium turbine middle",
		"searchableName":"mediumturbinemiddle",
		"reference":"Medium turbine middle",
		"mod":"Core SteamEngine"
	},
	"fd0d5e77-2074-4c3e-b708-4a2c0cc6f7a4":{
		"readableName":"Medium turbine window",
		"searchableName":"mediumturbinewindow",
		"reference":"Medium turbine window",
		"mod":"Core SteamEngine"
	},
	"9385face-922e-4158-9632-7ab9fcb00166":{
		"readableName":"Laser Anti-Munition Defence",
		"searchableName":"lamsnode",
		"reference":"Laser Anti-Munition Defence",
		"mod":"Core Laser"
	},
	"b6ac5f2e-907e-4926-88c0-355d30c6b7a5":{
		"readableName":"Laser Cavity",
		"searchableName":"cavity",
		"reference":"Laser Cavity",
		"mod":"Core Laser"
	},
	"8acc506a-41cf-4b62-ab1f-e6f523baf75b":{
		"readableName":"Laser Colorer",
		"searchableName":"lasercolourer",
		"reference":"Laser Colorer",
		"mod":"Core Laser"
	},
	"7dc67bed-fd0f-4145-9525-5840bbcc4822":{
		"readableName":"Laser Combiner",
		"searchableName":"lasercombiner",
		"reference":"Laser Combiner",
		"mod":"Core Laser"
	},
	"9c09eee2-e4bd-42ea-aaec-43a6d1451db3":{
		"readableName":"Laser Connector",
		"searchableName":"laserconnector",
		"reference":"Laser Connector",
		"mod":"Core Laser"
	},
	"db2a5655-6b32-4877-8285-40c6ddc9ba3c":{
		"readableName":"Laser Coupler",
		"searchableName":"lasercoupler",
		"reference":"Laser Coupler",
		"mod":"Core Laser"
	},
	"f2f1f8f5-92b5-4047-9ec7-de86d8608583":{
		"readableName":"Laser Cutter",
		"searchableName":"lasercutter",
		"reference":"Laser Cutter",
		"mod":"Core Laser"
	},
	"d73b886e-2498-4c17-9346-a85f77d4a454":{
		"readableName":"Laser Destabiliser",
		"searchableName":"laserdestabiliser",
		"reference":"Laser Destabiliser",
		"mod":"Core Laser"
	},
	"6222ad4d-f6d8-48c0-9f27-10e2b64d7481":{
		"readableName":"Laser Emitter",
		"searchableName":"laseremitter",
		"reference":"Laser Emitter",
		"mod":"Core Missile"
	},
	"464187d2-ff5c-4d42-9937-0206cffbd883":{
		"readableName":"Laser Optics",
		"searchableName":"laseroptics",
		"reference":"Laser Optics",
		"mod":"Core Laser"
	},
	"57c4c674-9c66-4ab7-9067-81477824785d":{
		"readableName":"Laser Pump (3m)",
		"searchableName":"laserpump(3m)",
		"reference":"Laser Pump (3m)",
		"mod":"Core Laser"
	},
	"ef2e81c1-d06d-474f-b12c-14de1702db1b":{
		"readableName":"Laser Pump",
		"searchableName":"laserpump",
		"reference":"Laser Pump",
		"mod":"Core Laser"
	},
	"31047680-b58e-407a-9f39-1b59fd656e13":{
		"readableName":"Laser Q switch",
		"searchableName":"qswitch",
		"reference":"Laser Q switch",
		"mod":"Core Laser"
	},
	"1bb2d71d-cd5f-4a23-844b-8005dec7bd5c":{
		"readableName":"Laser Range finder Tracker",
		"searchableName":"laserrangefindertracker",
		"reference":"Laser Range finder Tracker",
		"mod":"Core AI"
	},
	"8996b3c3-2569-473e-9d28-2b2cb17bc7a3":{
		"readableName":"Laser Steering Optics",
		"searchableName":"lasersteeringoptics",
		"reference":"Laser Steering Optics",
		"mod":"Core Laser"
	},
	"575c59bf-c5be-4558-8ab7-7bb672f62ffb":{
		"readableName":"Laser Targeter",
		"searchableName":"lasertargeter",
		"reference":"Laser Targeter",
		"mod":"Core APS"
	},
	"f9f91495-3c3b-48e2-9f4c-a53b01c47f6c":{
		"readableName":"Laser Targeter",
		"searchableName":"lasertargeter",
		"reference":"Laser Targeter",
		"mod":"Core CRAM"
	},
	"139d4b6a-2b6b-4bfa-8d00-1bc8e69923fd":{
		"readableName":"Laser Transceiver",
		"searchableName":"lasertransceiver",
		"reference":"Laser Transceiver",
		"mod":"Core Laser"
	},
	"cdabf95e-e712-4a93-8214-79d2d9a809a6":{
		"readableName":"Laser warner",
		"searchableName":"laserwarner",
		"reference":"Laser warner",
		"mod":"Core AI"
	},
	"c0542188-97dc-4cd5-a275-ede25d9797ba":{
		"readableName":"Laser Wavefront Adjuster",
		"searchableName":"laserwavefrontadjuster",
		"reference":"Laser Wavefront Adjuster",
		"mod":"Core Laser"
	},
	"5cf2b4da-c1b8-4005-930b-73cc39ac9d28":{
		"readableName":"Laser",
		"searchableName":"laser",
		"reference":"Laser",
		"mod":"Core SimpleWeapon"
	},
	"e71e6f97-fbe8-4bf5-9645-d15179ba0c17":{
		"readableName":"Lead Block",
		"searchableName":"block",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"288e3778-900b-4bfd-a455-e94ed75c6ec2":{
		"readableName":"Light Block",
		"searchableName":"lightblock",
		"reference":"Light Block",
		"mod":"Core Structural"
	},
	"c0afc8a9-5c49-4f15-8834-6e39ff144da3":{
		"readableName":"Light fitting",
		"searchableName":"",
		"reference":"Light fitting",
		"mod":"Core Decorations"
	},
	"3cc75979-18ac-46c4-9a5b-25b327d99410":{
		"readableName":"Light-weight Alloy Block",
		"searchableName":"block",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"99a71734-3128-4535-bb9c-f69de5277f49":{
		"readableName":"L-Junction Pipe (left)",
		"searchableName":"l-junctionpipe(l)",
		"reference":"L-Junction Pipe (left)",
		"mod":"Core FuelEngine"
	},
	"2d546425-921e-4900-b249-fa5a1c7d5513":{
		"readableName":"L-Junction Pipe (right)",
		"searchableName":"l-junctionpipe(r)",
		"reference":"L-Junction Pipe (right)",
		"mod":"Core FuelEngine"
	},
	"ef545d00-c22d-4eed-bd76-74d6432e2974":{
		"readableName":"Local Weapon Controller",
		"searchableName":"localweaponcontroller",
		"reference":"Local Weapon Controller",
		"mod":"Core AI"
	},
	"d3924bae-be5a-43a0-be19-64fc7c8d6059":{
		"readableName":"LUA Box",
		"searchableName":"luabox",
		"reference":"LUA Box",
		"mod":"Core Misc"
	},
	"742c7d8c-d03a-49d8-bc71-46f5f828bf72":{
		"readableName":"Lua Snooper",
		"searchableName":"luasnooper",
		"reference":"Lua Snooper",
		"mod":"Core AI"
	},
	"dc17bd30-20ac-47c3-9c42-af6b3cdebf6e":{
		"readableName":"LUA Transceiver",
		"searchableName":"luatransceiver",
		"reference":"LUA Transceiver",
		"mod":"Core Missile"
	},
	"1ddd4971-348f-4e3b-bac7-23b3082792c4":{
		"readableName":"Machinery",
		"searchableName":"machinery",
		"reference":"Machinery",
		"mod":"Core Resource"
	},
	"c613bc5d-5018-4961-bf19-d3e2ec694b59":{
		"readableName":"Mannequin",
		"searchableName":"",
		"reference":"Mannequin",
		"mod":"Core ACDeco"
	},
	"45886651-bb90-4ae9-9a8b-ad6658514f37":{
		"readableName":"Material Gatherer",
		"searchableName":"materialgatherer",
		"reference":"Material Gatherer",
		"mod":"Core Resource"
	},
	"adb6b43b-06df-4daa-b8e6-bfaae277d6dd":{
		"readableName":"Material Storage Locker Large (mirror)",
		"searchableName":"locker(largemirror)",
		"reference":"Material Storage Locker Large (mirror)",
		"mod":"Core Resource"
	},
	"8cf1190e-6967-47cc-81c7-7258ec75d70e":{
		"readableName":"Material Storage Locker Large",
		"searchableName":"locker(large)",
		"reference":"Material Storage Locker Large",
		"mod":"Core Resource"
	},
	"52e52d0c-02d7-4965-a46e-93462e083659":{
		"readableName":"Material Storage Locker Small",
		"searchableName":"locker(small)",
		"reference":"Material Storage Locker Small",
		"mod":"Core Resource"
	},
	"8951fabe-dbbf-4b32-82e2-e36da0b92fdb":{
		"readableName":"Material Storage Tank Large (Head mirror)",
		"searchableName":"tank(largeheadmirror)",
		"reference":"Material Storage Tank Large (Head mirror)",
		"mod":"Core Resource"
	},
	"4ac57cbd-c325-4d49-9e92-71ae3b6a65c6":{
		"readableName":"Material Storage Tank Large (Head)",
		"searchableName":"tank(largehead)",
		"reference":"Material Storage Tank Large (Head)",
		"mod":"Core Resource"
	},
	"abb3675f-8a83-4f48-8bfb-3703a961c205":{
		"readableName":"Material Storage Tank Large (mirror)",
		"searchableName":"tank(largemirror)",
		"reference":"Material Storage Tank Large (mirror)",
		"mod":"Core Resource"
	},
	"071de01c-2838-485b-bbae-9b3acfdbcdd9":{
		"readableName":"Material Storage Tank Large",
		"searchableName":"tank(large)",
		"reference":"Material Storage Tank Large",
		"mod":"Core Resource"
	},
	"a7ac32e0-c6ad-4663-a543-c9d3a9f2d0ec":{
		"readableName":"Material Storage Tank Small",
		"searchableName":"tank(small)",
		"reference":"Material Storage Tank Small",
		"mod":"Core Resource"
	},
	"8bb3a572-1dd2-4bf4-a6a2-83698310ea82":{
		"readableName":"Medium Gantry + Aerodynamic Hatch",
		"searchableName":"aerodynamichatchedgantry",
		"reference":"Medium Gantry + Aerodynamic Hatch",
		"mod":"Core Missile"
	},
	"ddde6a1e-6273-4bd9-ba1d-cb3380f38408":{
		"readableName":"Medium Gantry + Hatch",
		"searchableName":"mediumhatchedgantry",
		"reference":"Medium Gantry + Hatch",
		"mod":"Core Missile"
	},
	"b1ef236a-9ecb-406c-b4f0-6ef0fbb50bd1":{
		"readableName":"Medium Gantry",
		"searchableName":"mediumgantry",
		"reference":"Medium Gantry",
		"mod":"Core Missile"
	},
	"c743b888-a53c-42b8-b4f0-3afc6d763617":{
		"readableName":"Medium Launcher (reversed)",
		"searchableName":"mediumreversedlaunchpad",
		"reference":"Medium Launcher (reversed)",
		"mod":"Core Missile"
	},
	"bfb82ee6-345a-44a4-84e1-d6706cc8b29d":{
		"readableName":"Medium Launcher",
		"searchableName":"mediumlauncher",
		"reference":"Medium Launcher",
		"mod":"Core Missile"
	},
	"912404d2-30c9-47c5-8430-5e2834b64271":{
		"readableName":"Medium Rail Gantry (invisible)",
		"searchableName":"mediuminvisiblerailgantry",
		"reference":"Medium Rail Gantry (invisible)",
		"mod":"Core Missile"
	},
	"44cdf22f-f4b9-43bc-aaff-2d4ae6c80503":{
		"readableName":"Medium Rail Gantry",
		"searchableName":"mediumrailgantry",
		"reference":"Medium Rail Gantry",
		"mod":"Core Missile"
	},
	"8ba7a591-3923-4344-9f87-0588c6a1aba0":{
		"readableName":"Medium Rail Launcher",
		"searchableName":"mediumraillauncher",
		"reference":"Medium Rail Launcher",
		"mod":"Core Missile"
	},
	"ab699540-efc8-4592-bc97-204f6a874b3a":{
		"readableName":"Metal Block",
		"searchableName":"block",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"fd13443a-1f2e-45e1-8978-9b02541a8174":{
		"readableName":"Metal duct (1x1)",
		"searchableName":"metalduct(1x1)",
		"reference":"Metal duct (1x1)",
		"mod":"Core Air"
	},
	"ca9ca28a-3488-405f-8d74-8a609440ee95":{
		"readableName":"Metal Material Storage Large (mirror)",
		"searchableName":"metalmaterialstorage(largemirror)",
		"reference":"Metal Material Storage Large (mirror)",
		"mod":"Core Resource"
	},
	"f6ab96bf-1d6b-499b-be62-21dd8962d37d":{
		"readableName":"Metal Material Storage Large",
		"searchableName":"metalmaterialstorage(large)",
		"reference":"Metal Material Storage Large",
		"mod":"Core Resource"
	},
	"b63b85fc-685e-454f-8f93-31db02b95a05":{
		"readableName":"Metal Material Storage Small",
		"searchableName":"metalmaterialstorage(small)",
		"reference":"Metal Material Storage Small",
		"mod":"Core Resource"
	},
	"ae37018a-2b07-422c-b281-87f10fb95d3c":{
		"readableName":"Metal Plate",
		"searchableName":"metalplate",
		"reference":"Metal Plate",
		"mod":"Core ACDeco"
	},
	"27c3ff2f-e9a1-4281-a79a-1a5daddd98cd":{
		"readableName":"Metal connection strut",
		"searchableName":"",
		"reference":"Metal connection strut",
		"mod":"Core Struts"
	},
	"4c3752d8-5a61-46e7-bca6-f48b3c52f6be":{
		"readableName":"Mimic: Cone",
		"searchableName":"",
		"reference":"Mimic: Cone",
		"mod":"Core ACDeco"
	},
	"49298135-4e24-4feb-93c3-bdff67e36be9":{
		"readableName":"Mimic: Cube",
		"searchableName":"",
		"reference":"Mimic: Cube",
		"mod":"Core ACDeco"
	},
	"c91a1b6c-33a3-497c-ac42-9586cd13933e":{
		"readableName":"Mimic: Pentagon",
		"searchableName":"",
		"reference":"Mimic: Pentagon",
		"mod":"Core ACDeco"
	},
	"d440c51e-7ec0-471e-b4bf-469ee38124c7":{
		"readableName":"Mimic rubber",
		"searchableName":"",
		"reference":"Mimic rubber",
		"mod":"Core Decorations"
	},
	"48f11f4d-8321-4778-ab6c-651656890b23":{
		"readableName":"Mimic: Sphere",
		"searchableName":"",
		"reference":"Mimic: Sphere",
		"mod":"Core ACDeco"
	},
	"eb892953-0779-4a27-80b4-c84b8607b6d6":{
		"readableName":"Mimic: Torus",
		"searchableName":"",
		"reference":"Mimic: Torus",
		"mod":"Core ACDeco"
	},
	"7d0079d8-48f8-4e04-8568-38af64241440":{
		"readableName":"Mimic: Tube",
		"searchableName":"",
		"reference":"Mimic: Tube",
		"mod":"Core ACDeco"
	},
	"61c56906-c2ae-4953-8fef-2e18e5ff7a68":{
		"readableName":"Mimic",
		"searchableName":"",
		"reference":"Mimic",
		"mod":"Core Decorations"
	},
	"0eda844f-466e-4855-8f35-bcede968cdf9":{
		"readableName":"Misc Material Storage Large (mirror)",
		"searchableName":"miscmaterialstorage(largemirror)",
		"reference":"Misc Material Storage Large (mirror)",
		"mod":"Core Resource"
	},
	"d405df88-2c4d-4b33-a051-583defdf72d8":{
		"readableName":"Misc Material Storage Large",
		"searchableName":"misc.materialstorage(large)",
		"reference":"Misc Material Storage Large",
		"mod":"Core Resource"
	},
	"949d3fba-3b60-49ed-a83b-7180822d6bc0":{
		"readableName":"Misc Material Storage Small",
		"searchableName":"miscmaterialstorage(small)",
		"reference":"Misc Material Storage Small",
		"mod":"Core Resource"
	},
	"72091a02-bab4-40a7-9ee0-4c180ee24f99":{
		"readableName":"Missile Radar Buoy Holder",
		"searchableName":"missileradarbuoyholder",
		"reference":"Missile Radar Buoy Holder",
		"mod":"Core Missile"
	},
	"2be9c88d-be24-4880-aa12-ea8dc685a726":{
		"readableName":"Missile Sonar Buoy Holder",
		"searchableName":"missilesonarbuoyholder",
		"reference":"Missile Sonar Buoy Holder",
		"mod":"Core Missile"
	},
	"bc3f4b55-39b3-4a99-9823-fe57ec15aa41":{
		"readableName":"Missile wireless receiver",
		"searchableName":"",
		"reference":"Missile wireless receiver",
		"mod":"Core Missile"
	},
	"f4df33ca-5cc4-4bf1-b0de-030b7e3586a3":{
		"readableName":"Missile wireless transmitter",
		"searchableName":"",
		"reference":"Missile wireless transmitter",
		"mod":"Core Missile"
	},
	"4b4bdd8a-e01c-4d77-8228-e19e241ad623":{
		"readableName":"Mock wheel mirror",
		"searchableName":"mockwheelmirror",
		"reference":"Mock wheel mirror",
		"mod":"Core Land"
	},
	"f18d051c-2aad-4287-823e-997499716da1":{
		"readableName":"Mock wheel",
		"searchableName":"mockwheel",
		"reference":"Mock wheel",
		"mod":"Core Land"
	},
	"54836777-b634-4a21-ab1e-2b0e426b640f":{
		"readableName":"Motor Driven Barrel",
		"searchableName":"motordrivenbarrel",
		"reference":"Motor Driven Barrel",
		"mod":"Core CRAM"
	},
	"87bd3e7e-16f0-4f0c-99b9-34ddfa032a87":{
		"readableName":"Moving Light",
		"searchableName":"",
		"reference":"Moving Light",
		"mod":"Core Decorations"
	},
	"5031a9db-aa48-4903-9b16-75a54f5959ce":{
		"readableName":"Multipurpose Laser",
		"searchableName":"multipurposelaser",
		"reference":"Multipurpose Laser",
		"mod":"Core Laser"
	},
	"1725c9ed-29fd-438d-97f6-8f645a1865d4":{
		"readableName":"Munition warner",
		"searchableName":"munitionwarner",
		"reference":"Munition warner",
		"mod":"Core AI"
	},
	"fcfb5e7d-711b-4dbd-a64f-2c7a3b065e98":{
		"readableName":"Muzzle brake 2m variant",
		"searchableName":"muzzlebrake2m",
		"reference":"Muzzle brake 2m variant",
		"mod":"Core APS"
	},
	"1fb2b5d6-25aa-46a8-9371-a43cae464009":{
		"readableName":"Muzzle brake variant",
		"searchableName":"muzzlebrake",
		"reference":"Muzzle brake variant",
		"mod":"Core APS"
	},
	"ef753ff4-2d7e-411c-880c-08222dd6a4c5":{
		"readableName":"Muzzle Brake",
		"searchableName":"muzzlebrake",
		"reference":"Muzzle Brake",
		"mod":"Core APS"
	},
	"f71f9cfc-a107-4404-bb2c-7dc30e10e8da":{
		"readableName":"Neon Light",
		"searchableName":"neonlight",
		"reference":"Neon Light",
		"mod":"Core Decorations"
	},
	"79eaae57-56e1-4bb5-a573-bb9c829e8c8e":{
		"readableName":"Nuclear Containment Corner",
		"searchableName":"nuclearcontainmentcorner",
		"reference":"Nuclear Containment Corner",
		"mod":"Core NuclearEngine"
	},
	"b7b36555-0ab1-4a64-ba01-3017e4809cf6":{
		"readableName":"Nuclear Containment Platform",
		"searchableName":"nuclearcontainmentplatform",
		"reference":"Nuclear Containment Platform",
		"mod":"Core NuclearEngine"
	},
	"e4dabc7e-9566-4e7d-8d28-cbec2f811798":{
		"readableName":"Nuclear Containment Wall Corner",
		"searchableName":"nuclearcontainmentwallcorner",
		"reference":"Nuclear Containment Wall Corner",
		"mod":"Core NuclearEngine"
	},
	"23696e3e-a6c7-4ac3-8ba8-884718dd688c":{
		"readableName":"Nuclear Containment Wall Slope",
		"searchableName":"nuclearcontainmentwallslope",
		"reference":"Nuclear Containment Wall Slope",
		"mod":"Core NuclearEngine"
	},
	"1980c435-9871-470c-973e-9253f8a3b122":{
		"readableName":"Nuclear Containment Wall",
		"searchableName":"nuclearcontainmentwall",
		"reference":"Nuclear Containment Wall",
		"mod":"Core NuclearEngine"
	},
	"9d5fa98d-ce5c-4e7a-8041-2fee8d28fe35":{
		"readableName":"Nuclear Control Rod",
		"searchableName":"nuclearcontrolrod",
		"reference":"Nuclear Control Rod",
		"mod":"Core NuclearEngine"
	},
	"078b7202-f156-4936-8ca3-860055a20f1c":{
		"readableName":"Nuclear Engine Core",
		"searchableName":"nuclearenginecore",
		"reference":"Nuclear Engine Core",
		"mod":"Core NuclearEngine"
	},
	"536fa669-d522-465a-a67a-589a07aa09ad":{
		"readableName":"Nuclear Material",
		"searchableName":"nuclearmaterial",
		"reference":"Nuclear Material",
		"mod":"Core NuclearEngine"
	},
	"30e8ed70-1885-444a-9697-a89d5c524690":{
		"readableName":"Nuclear Rod Controller",
		"searchableName":"nuclearrodcontroller",
		"reference":"Nuclear Rod Controller",
		"mod":"Core NuclearEngine"
	},
	"490e286d-0367-40f2-8ed6-60d70a60bdfd":{
		"readableName":"Nuclear Water inlet and outlet",
		"searchableName":"nuclearwaterinletandoutlet",
		"reference":"Nuclear Water inlet and outlet",
		"mod":"Core NuclearEngine"
	},
	"8fd543c2-5d64-415f-befb-acb627cc1be3":{
		"readableName":"Oil Drill",
		"searchableName":"oildrill",
		"reference":"Oil Drill",
		"mod":"Core Resource"
	},
	"85cd3795-9fb0-43ce-87dc-ff07f2844dd3":{
		"readableName":"Omni Mantlet (1m)",
		"searchableName":"omnimantlet(1m)",
		"reference":"Omni Mantlet (1m)",
		"mod":"Core APS"
	},
	"09d28633-cff1-4cc4-9e11-161f350dbf60":{
		"readableName":"Omni Mantlet (3x3m)",
		"searchableName":"omnimantlet(3x3m)",
		"reference":"Omni Mantlet (3x3m)",
		"mod":"Core APS"
	},
	"05537cc1-9df6-4395-a3d4-1db6226c62b5":{
		"readableName":"One Axis Turret (3m)",
		"searchableName":"oneaxisturret(3m)",
		"reference":"One Axis Turret (3m)",
		"mod":"Core Construct"
	},
	"7161f887-4de6-4b5e-9066-f39d6cad9f16":{
		"readableName":"One Axis Turret (5m)",
		"searchableName":"oneaxisturret(5m)",
		"reference":"One Axis Turret (5m)",
		"mod":"Core Construct"
	},
	"9d4fa368-3e44-4262-a213-4157a14d3677":{
		"readableName":"One Axis Turret",
		"searchableName":"oneaxisturret",
		"reference":"One Axis Turret",
		"mod":"Core Construct"
	},
	"f817665f-e59a-43a0-9c86-0d39f64b594a":{
		"readableName":"Origin block",
		"searchableName":"originblock",
		"reference":"Origin block",
		"mod":"Core Misc"
	},
	"ad1accc2-e4bd-42ea-aaec-43a6d1451db3":{
		"readableName":"Output Regulator",
		"searchableName":"laseroutputregulator",
		"reference":"Output Regulator",
		"mod":"Core Laser"
	},
	"2eea241a-6a32-41c6-a9e4-d082c7e854de":{
		"readableName":"Long range lens (rear inputs)",
		"searchableName":"longrangelens(rearinputs)",
		"reference":"Long range lens (rear inputs)",
		"mod":"Core Laser"
	},
	"9896747c-39a5-43bc-8ba9-ccf2f645cca1":{
		"readableName":"Long range lens (symmetric inputs)",
		"searchableName":"longrangelens(symmetric)",
		"reference":"Long range lens (symmetric inputs)",
		"mod":"Core Laser"
	},
	"b20baa46-0a1c-482b-a3f9-bbb8c14520e2":{
		"readableName":"Packer x3 (automatic orientation)",
		"searchableName":"packerx3(automaticorientation)",
		"reference":"Packer x3 (automatic orientation)",
		"mod":"Core CRAM"
	},
	"19945f75-8353-45e1-938f-a548fa05e05e":{
		"readableName":"Packer x3 (manual orientation)",
		"searchableName":"packerx3(manualorientation)",
		"reference":"Packer x3 (manual orientation)",
		"mod":"Core CRAM"
	},
	"ba1d3193-abc5-4b8c-a512-e8fffe95ad99":{
		"readableName":"Paddle",
		"searchableName":"paddle",
		"reference":"Paddle",
		"mod":"Core Water"
	},
	"f1746662-adec-4054-98bd-94b553bc6c6d":{
		"readableName":"Short range lens",
		"searchableName":"shortrangelens",
		"reference":"Short range lens",
		"mod":"Core Laser"
	},
	"3d82f1a3-ad2a-4e81-a4e3-cb88c968f6e9":{
		"readableName":"Long range lens",
		"searchableName":"longrangelens",
		"reference":"Long range lens",
		"mod":"Core Laser"
	},
	"3c3d8cda-b79d-47a5-9bc4-378daf3d4358":{
		"readableName":"Particle Input Port",
		"searchableName":"particleinputport",
		"reference":"Particle Input Port",
		"mod":"Core Laser"
	},
	"2099a233-181e-4f50-9a0e-78a547969a8e":{
		"readableName":"Particle Melee Lens",
		"searchableName":"meleepaclens",
		"reference":"Particle Melee Lens",
		"mod":"Core Laser"
	},
	"48678652-cad7-40ae-918f-af432b37fdf9":{
		"readableName":"Particle tube 1m",
		"searchableName":"particletube1m",
		"reference":"Particle tube 1m",
		"mod":"Core Laser"
	},
	"73be5bb2-53f2-4cdc-abcd-6264837a44c2":{
		"readableName":"Particle Tube 2m",
		"searchableName":"particletube2m",
		"reference":"Particle Tube 2m",
		"mod":"Core Laser"
	},
	"b9c6a6bf-a61a-44eb-bf89-ee414711fed2":{
		"readableName":"Particle Tube 3m",
		"searchableName":"particletube3m",
		"reference":"Particle Tube 3m",
		"mod":"Core Laser"
	},
	"58f677fa-2af3-453e-8f63-9b4e0a13c968":{
		"readableName":"Particle Tube 4m",
		"searchableName":"particletube4m",
		"reference":"Particle Tube 4m",
		"mod":"Core Laser"
	},
	"1ab5006c-9156-4605-a670-68e1c2eb2e9a":{
		"readableName":"Particle Tube Corner",
		"searchableName":"particletubecorner",
		"reference":"Particle Tube Corner",
		"mod":"Core Laser"
	},
	"b799b159-3bab-45f8-92e4-3107bca46513":{
		"readableName":"Particle Tube Terminator",
		"searchableName":"particletubeterminator",
		"reference":"Particle Tube Terminator",
		"mod":"Core Laser"
	},
	"c2dfcb78-dd5b-4406-8c95-0f884c4d89e1":{
		"readableName":"Passive Radar 360",
		"searchableName":"passiveradar360",
		"reference":"Passive Radar 360",
		"mod":"Core AI"
	},
	"e00c4398-a6e7-4330-813a-b3c3ac8da3d8":{
		"readableName":"Passive Sonar 360",
		"searchableName":"passivesonar360",
		"reference":"Passive Sonar 360",
		"mod":"Core AI"
	},
	"2ae437c8-afe6-4d6d-9562-0423227878b2":{
		"readableName":"Payload compactor",
		"searchableName":"payloadcompactor",
		"reference":"Payload compactor",
		"mod":"Core CRAM"
	},
	"ceed114a-ddb5-47d4-9b7a-ef1ce9398e09":{
		"readableName":"PID (General Purpose)",
		"searchableName":"pid(generalpurpose)",
		"reference":"PID (General Purpose)",
		"mod":"Core Misc"
	},
	"42033da8-485e-43be-99db-ffe2492767b4":{
		"readableName":"PID",
		"searchableName":"pid",
		"reference":"PID",
		"mod":"Core AI"
	},
	"3cdfdc8b-a6ec-4aa9-bd10-0aab93237825":{
		"readableName":"Steam pipe 2m",
		"searchableName":"steampipe2m",
		"reference":"Steam pipe 2m",
		"mod":"Core SteamEngine"
	},
	"c5555c97-f068-435d-8e2a-635bbc184c16":{
		"readableName":"Steam pipe 3 way (2)",
		"searchableName":"steampipe3way(2)",
		"reference":"Steam pipe 3 way (2)",
		"mod":"Core SteamEngine"
	},
	"737a55bf-3ab9-472d-ac49-61309a13ef57":{
		"readableName":"Steam pipe 3 way (2)",
		"searchableName":"steampipe3way(2)",
		"reference":"Steam pipe 3 way (2)",
		"mod":"Core SteamEngine"
	},
	"267adeca-82e1-4578-8d3f-85608cd0aa87":{
		"readableName":"Steam pipe 3 way",
		"searchableName":"steampipe3way",
		"reference":"Steam pipe 3 way",
		"mod":"Core SteamEngine"
	},
	"03fc3659-217c-4189-9da1-1d9ae8b29f2a":{
		"readableName":"Steam pipe 4 way (2) (mirror)",
		"searchableName":"steampipe4way(2)(mirror)",
		"reference":"Steam pipe 4 way (2) (mirror)",
		"mod":"Core SteamEngine"
	},
	"31d3adbb-83ec-47aa-b2fa-7c874d710459":{
		"readableName":"Steam pipe 4 way (2)",
		"searchableName":"steampipe4way(2)",
		"reference":"Steam pipe 4 way (2)",
		"mod":"Core SteamEngine"
	},
	"bdfe2fc5-2d18-4c27-a2fe-c1a83f962730":{
		"readableName":"Steam pipe 4 way",
		"searchableName":"steampipe4way",
		"reference":"Steam pipe 4 way",
		"mod":"Core SteamEngine"
	},
	"d3f65018-2833-4746-9425-dd78590f4f26":{
		"readableName":"Steam pipe 4m",
		"searchableName":"steampipe4m",
		"reference":"Steam pipe 4m",
		"mod":"Core SteamEngine"
	},
	"cd90265f-4593-446b-9153-623c2f339dc0":{
		"readableName":"Steam pipe 5 way",
		"searchableName":"steampipe5way",
		"reference":"Steam pipe 5 way",
		"mod":"Core SteamEngine"
	},
	"cd4d4ab6-0652-46dd-b887-71714317f470":{
		"readableName":"Steam pipe 6 way",
		"searchableName":"steampipe6way",
		"reference":"Steam pipe 6 way",
		"mod":"Core SteamEngine"
	},
	"62ecbf4b-19da-481e-8910-6201521c4bd9":{
		"readableName":"Steam hull pipe",
		"searchableName":"steamhullpipe",
		"reference":"Steam hull pipe",
		"mod":"Core SteamEngine"
	},
	"909e3611-6367-4b6c-ae61-4d909391bd66":{
		"readableName":"Steam tank 1m",
		"searchableName":"",
		"reference":"Steam tank 1m",
		"mod":"Core SteamEngine"
	},
	"54adcdbd-920b-43a4-b3d3-667f648505be":{
		"readableName":"Steam tank 3m",
		"searchableName":"",
		"reference":"Steam tank 3m",
		"mod":"Core SteamEngine"
	},
	"a3ea3972-d2c4-409d-8f77-5be9e2809da0":{
		"readableName":"Valve",
		"searchableName":"",
		"reference":"Valve",
		"mod":"Core SteamEngine"
	},
	"b82023a0-5f10-4648-8230-74b159f6b185":{
		"readableName":"Pipe vent",
		"searchableName":"",
		"reference":"Pipe vent",
		"mod":"Core SteamEngine"
	},
	"1bc2df6d-f59e-40f4-ade3-83a357676123":{
		"readableName":"Steam pipe 1m",
		"searchableName":"steampipe1m",
		"reference":"Steam pipe 1m",
		"mod":"Core SteamEngine"
	},
	"e581b7dc-da92-421d-9262-a5781c287728":{
		"readableName":"Plasma firingpiece",
		"searchableName":"plasmafiringpiece",
		"reference":"Plasma firingpiece",
		"mod":"Core Laser"
	},
	"ad861a50-c881-4aa2-839b-d1248a810c77":{
		"readableName":"Plasma heater",
		"searchableName":"plasmaheater",
		"reference":"Plasma heater",
		"mod":"Core Laser"
	},
	"172c1b1f-9dc0-41c8-885c-aba814e4fe08":{
		"readableName":"Plasma storage",
		"searchableName":"plasmastorage",
		"reference":"Plasma storage",
		"mod":"Core Laser"
	},
	"c51bd0a9-99a7-463a-b20a-fe2e484ab26e":{
		"readableName":"Plasma tranciever",
		"searchableName":"plasmatranciever",
		"reference":"Plasma tranciever",
		"mod":"Core Laser"
	},
	"0fbfae3b-76ac-43f4-be8f-36739389dac7":{
		"readableName":"Porthole Alloy",
		"searchableName":"alloyporthole",
		"reference":"Porthole Alloy",
		"mod":"Core ACDeco"
	},
	"534b8fe0-1184-4191-a249-d78ba2df3332":{
		"readableName":"Porthole Metal",
		"searchableName":"metalporthole",
		"reference":"Porthole Metal",
		"mod":"Core ACDeco"
	},
	"9d43ff24-4165-4c48-bc5d-ccb89b0667bd":{
		"readableName":"Poster holder",
		"searchableName":"",
		"reference":"Poster holder",
		"mod":"Core Decorations"
	},
	"83e8cf5c-ad5a-4cfd-a0d0-eb4ca9f48127":{
		"readableName":"Power Input",
		"searchableName":"powerinput",
		"reference":"Power Input",
		"mod":"Core Drill"
	},
	"e34ec225-dda1-47fc-b56a-746da1965349":{
		"readableName":"Predictor",
		"searchableName":"predictor",
		"reference":"Predictor",
		"mod":"Core CRAM"
	},
	"ccb4fd67-d791-4b1f-80cb-42346313254e":{
		"readableName":"Radar 90",
		"searchableName":"radar90",
		"reference":"Radar 90",
		"mod":"Core AI"
	},
	"10a165d1-1333-4c57-a942-b857542c4b45":{
		"readableName":"Radar 360",
		"searchableName":"radar360",
		"reference":"Radar 360",
		"mod":"Core AI"
	},
	"8dd0863a-d0c7-4cc9-b583-d7482d0459a2":{
		"readableName":"Radar Decoy",
		"searchableName":"radardecoy",
		"reference":"Radar Decoy",
		"mod":"Core Misc"
	},
	"a6edccd7-3ec8-419c-9405-703e8b4bdc8b":{
		"readableName":"Radar Gimbal Tracker",
		"searchableName":"radargimbaltracker",
		"reference":"Radar Gimbal Tracker",
		"mod":"Core AI"
	},
	"da59d582-9254-4091-988e-b670dcabe84a":{
		"readableName":"Radiator",
		"searchableName":"radiator",
		"reference":"Radiator",
		"mod":"Core FuelEngine"
	},
	"e9444d6d-714b-4cd7-aa9d-9527f425fdd7":{
		"readableName":"Railgun barrel magnet",
		"searchableName":"railgunbarrelmagnet",
		"reference":"Railgun barrel magnet",
		"mod":"Core APS"
	},
	"b9457302-db10-49ad-98e2-1c44cdca24b9":{
		"readableName":"Railgun battery",
		"searchableName":"railgunbattery",
		"reference":"Railgun battery",
		"mod":"Core Depreciated"
	},
	"ecbcd3ac-9937-4351-abd8-a727c0d0ad77":{
		"readableName":"Railgun Charger",
		"searchableName":"railguncharger",
		"reference":"Railgun Charger",
		"mod":"Core APS"
	},
	"ae863b85-af05-40ee-a092-c97eb733d6fc":{
		"readableName":"Railgun Magnet Attaching Fixture",
		"searchableName":"railgunmagnetattacher",
		"reference":"Railgun Magnet Attaching Fixture",
		"mod":"Core APS"
	},
	"d0719f9b-28c3-45a2-9896-bbc4f9e1a602":{
		"readableName":"Railing L TA 1m M2",
		"searchableName":"railingdiagonal(1m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"6a96b58b-862c-4bc2-8701-3340027f061e":{
		"readableName":"Railing R TA 1m M2",
		"searchableName":"railingdiagonal(1m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"9f59f0aa-4a84-49d3-ac0b-1f65b3308324":{
		"readableName":"Railing TA 1m M1",
		"searchableName":"railingstraight(1m)",
		"reference":"Railing TA 1m M1",
		"mod":"Core ACDeco"
	},
	"637d3a6a-2f79-477a-b97f-34dca41b5714":{
		"readableName":"Railing",
		"searchableName":"simplerailing",
		"reference":"Railing",
		"mod":"Core Decorations"
	},
	"c0e407e9-fc15-43fa-9a61-4c79a3acb6a9":{
		"readableName":"Ram",
		"searchableName":"ram",
		"reference":"Ram",
		"mod":"Core SimpleWeapon"
	},
	"16052cd0-6fb9-4c1f-bfcb-2574d21434f0":{
		"readableName":"Range Finder (5m) armour",
		"searchableName":"rangefinder(5m)armour",
		"reference":"Range Finder (5m) armour",
		"mod":"Core AI"
	},
	"f8594608-c8c2-4544-94cb-8c0c78fbb4b0":{
		"readableName":"Range Finder (5m)",
		"searchableName":"rangefinder(5m)",
		"reference":"Range Finder (5m)",
		"mod":"Core AI"
	},
	"565faf2e-346d-4ba5-b9d3-99601ad33c74":{
		"readableName":"Recoil absorber",
		"searchableName":"recoilabsorber",
		"reference":"Recoil absorber",
		"mod":"Core APS"
	},
	"9aa55699-b91d-4e4a-921a-4b60569824bf":{
		"readableName":"Recoil Suppression Barrel",
		"searchableName":"recoilsuppressionbarrel",
		"reference":"Recoil Suppression Barrel",
		"mod":"Core CRAM"
	},
	"d92c5b73-d0fd-423e-98fc-76b1cd91b524":{
		"readableName":"Reinforced Wood 2m",
		"searchableName":"2mreinforceddecking",
		"reference":"Reinforced Wood",
		"mod":"Core ACDeco"
	},
	"50bdd099-dd8d-43f8-b43d-dd14c60be096":{
		"readableName":"Reinforced Wood 3m",
		"searchableName":"3mreinforceddecking",
		"reference":"Reinforced Wood",
		"mod":"Core ACDeco"
	},
	"6e2afb0f-97b6-4017-b14c-158146da6854":{
		"readableName":"Reinforced Wood 4m",
		"searchableName":"4mreinforceddecking",
		"reference":"Reinforced Wood",
		"mod":"Core ACDeco"
	},
	"2f7f61ae-79f1-4139-a790-3f2c26bda4e4":{
		"readableName":"Reinforced Wood",
		"searchableName":"reinforceddecking",
		"reference":"Reinforced Wood",
		"mod":"Core ACDeco"
	},
	"ad96a3cc-119e-4842-86cd-c633b1c702bb":{
		"readableName":"Remote Vehicle Controller",
		"searchableName":"remotevehiclecontroller",
		"reference":"Remote Vehicle Controller",
		"mod":"Core Misc"
	},
	"bf0db0d2-8582-41d2-bcfe-5299bec3d06b":{
		"readableName":"Repair Bot",
		"searchableName":"repairbot",
		"reference":"Repair Bot",
		"mod":"Core Misc"
	},
	"0b59767f-dcf2-43f3-895b-d876afed0063":{
		"readableName":"Repair Tentacle",
		"searchableName":"repairtentacle",
		"reference":"Repair Tentacle",
		"mod":"Core Misc"
	},
	"3af29052-8fa5-4998-a0e0-b3ea188d8860":{
		"readableName":"Respawning beacon",
		"searchableName":"respawningbeacon",
		"reference":"Respawning beacon",
		"mod":"Core Misc"
	},
	"3e0a0bd7-7805-4e8f-836e-0cbcfee512af":{
		"readableName":"Retroreflection Sensor 360",
		"searchableName":"retroreflectionsensor360",
		"reference":"Retroreflection Sensor 360",
		"mod":"Core AI"
	},
	"16b67fbc-25d5-4a35-a0df-4941e7abf6ef":{
		"readableName":"Revolving Blast-Gun",
		"searchableName":"revolvingblast-gun",
		"reference":"Revolving Blast-Gun",
		"mod":"Core SimpleWeapon"
	},
	"e3311cfd-f4a9-428e-8639-7523c2b42cc6":{
		"readableName":"Ring shield corner pipe",
		"searchableName":"cornerpipe",
		"reference":"Ring shield corner pipe",
		"mod":"Core RingShields"
	},
	"80d4a4bf-2aa4-49da-a67c-4722376d0bc6":{
		"readableName":"Ring shield pipe",
		"searchableName":"straightpipe",
		"reference":"Ring shield pipe",
		"mod":"Core RingShields"
	},
	"063eb06e-57e0-43dd-b85e-90baed4f025c":{
		"readableName":"RTG (2m)",
		"searchableName":"rtg(2m)",
		"reference":"RTG (2m)",
		"mod":"Core Resource"
	},
	"e8d04f75-a134-452e-a04a-af5172d65040":{
		"readableName":"RTG (3x3m)",
		"searchableName":"rtg(3x3m)",
		"reference":"RTG (3x3m)",
		"mod":"Core Resource"
	},
	"344a6bb2-dada-45f3-ba66-6fdbbb57f394":{
		"readableName":"RTG (4m)",
		"searchableName":"rtg(4m)",
		"reference":"RTG (4m)",
		"mod":"Core Resource"
	},
	"6c0bab88-aa88-4825-9cf5-55df36aa12b8":{
		"readableName":"Rubber Block",
		"searchableName":"block",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"41dbf539-27a7-4240-91ff-9ff523d008bf":{
		"readableName":"Rudder Square",
		"searchableName":"1x1ruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"968caa09-3778-40bd-97f9-0efffa676803":{
		"readableName":"Sail Attachment",
		"searchableName":"sailattachment",
		"reference":"Sail Attachment",
		"mod":"Core Water"
	},
	"b1ec687f-252d-4b35-b57f-a0cf0bb72212":{
		"readableName":"Sail Main Block (Square Rig!)",
		"searchableName":"sailmainblock(squarerig!)",
		"reference":"Sail Main Block (Square Rig!)",
		"mod":"Core Water"
	},
	"48122725-f6bd-45e5-a6a4-40fa2ffee1d4":{
		"readableName":"Sail Main Block",
		"searchableName":"sailmainblock",
		"reference":"Sail Main Block",
		"mod":"Core Water"
	},
	"8ca7ff43-d384-4588-a069-48ec57765db0":{
		"readableName":"Sail Winch",
		"searchableName":"sailwinch",
		"reference":"Sail Winch",
		"mod":"Core Water"
	},
	"1c146ed1-3b8d-4171-ab72-42668e6827be":{
		"readableName":"Scrap smelter base",
		"searchableName":"smelterbase",
		"reference":"Scrap smelter base",
		"mod":"Core Resource"
	},
	"8078b4a3-f928-41de-be6e-79ea410e8091":{
		"readableName":"Scrap smelter top",
		"searchableName":"smeltertop",
		"reference":"Scrap smelter top",
		"mod":"Core Resource"
	},
	"d3cc2b19-daee-432d-9aff-45fc63d24fca":{
		"readableName":"Signal Jammer ECM",
		"searchableName":"",
		"reference":"Signal Jammer ECM",
		"mod":"Core AI"
	},
	"e6b63003-67cc-4884-87ef-f791b1a3a30c":{
		"readableName":"Separator",
		"searchableName":"separator",
		"reference":"Separator",
		"mod":"Core Misc"
	},
	"ff8b571c-728e-4f81-9bad-3938ae8c540a":{
		"readableName":"Sall axis shifting gears",
		"searchableName":"smallaxisshiftinggears",
		"reference":"Sall axis shifting gears",
		"mod":"Core SteamEngine"
	},
	"0fa43634-33a6-469e-9689-ffedb05b3a33":{
		"readableName":"Medium axis shifting gears",
		"searchableName":"mediumaxisshiftinggears",
		"reference":"Medium axis shifting gears",
		"mod":"Core SteamEngine"
	},
	"ce84541b-a7f2-4d49-9074-040217580385":{
		"readableName":"Small crank",
		"searchableName":"smallcrank",
		"reference":"Small crank",
		"mod":"Core SteamEngine"
	},
	"c40ae12e-bf54-40ad-aa30-2278d78f86bc":{
		"readableName":"Medium crank",
		"searchableName":"mediumcrank",
		"reference":"Medium crank",
		"mod":"Core SteamEngine"
	},
	"afbc81cf-82bc-4f9b-a96d-079f5cd12130":{
		"readableName":"Small cased crank",
		"searchableName":"smallcasedcrank",
		"reference":"Small cased crank",
		"mod":"Core SteamEngine"
	},
	"094e242e-85be-433b-b64a-1c951695568f":{
		"readableName":"Medium cased crank",
		"searchableName":"mediumcasedcrank",
		"reference":"Medium cased crank",
		"mod":"Core SteamEngine"
	},
	"4e4e3ca6-b90d-484d-80e4-6fe6b0261532":{
		"readableName":"Small shaft generator",
		"searchableName":"smallshaftgenerator",
		"reference":"Small shaft generator",
		"mod":"Core SteamEngine"
	},
	"c11040bb-b868-4ab9-91c6-6a3924cd5c19":{
		"readableName":"Medium shaft generator",
		"searchableName":"mediumshaftgenerator",
		"reference":"Medium shaft generator",
		"mod":"Core SteamEngine"
	},
	"d43a0af4-69e3-4f28-a0fc-9d36b21273e2":{
		"readableName":"Medium 5m propeller",
		"searchableName":"medium5mpropeller",
		"reference":"Medium 5m propeller",
		"mod":"Core SteamEngine"
	},
	"a054889a-5380-4361-95e0-4482cf8bbe9f":{
		"readableName":"Small piston (2m)",
		"searchableName":"smallpiston(2m)",
		"reference":"Small piston (2m)",
		"mod":"Core SteamEngine"
	},
	"7ebdfa78-1942-457e-8f30-f178525bb5f1":{
		"readableName":"Medium piston (4m)",
		"searchableName":"mediumpiston(4m)",
		"reference":"Medium piston (4m)",
		"mod":"Core SteamEngine"
	},
	"f908dad2-4ca1-470b-b786-63ddc91f9432":{
		"readableName":"Small shaft",
		"searchableName":"",
		"reference":"Small shaft",
		"mod":"Core SteamEngine"
	},
	"6542630e-e790-4c24-9888-c949b4723ee4":{
		"readableName":"Medium Shaft",
		"searchableName":"",
		"reference":"Medium Shaft",
		"mod":"Core SteamEngine"
	},
	"c37830f6-bd7b-4c92-bf6e-cf902bbf8d0b":{
		"readableName":"Small transmission",
		"searchableName":"smalltransmission",
		"reference":"Small transmission",
		"mod":"Core SteamEngine"
	},
	"d3e77516-fa1c-4f78-acbe-731bb2a0e698":{
		"readableName":"Medium transmission",
		"searchableName":"mediumtransmission",
		"reference":"Medium transmission",
		"mod":"Core SteamEngine"
	},
	"f1cd8c28-fa65-48db-8049-1858a7fc6db3":{
		"readableName":"Small 2m sealed shaft",
		"searchableName":"",
		"reference":"Small 2m sealed shaft",
		"mod":"Core SteamEngine"
	},
	"91db1f04-92a2-47c9-a3ea-be8cf37b60a7":{
		"readableName":"Medium 2m sealed shaft",
		"searchableName":"",
		"reference":"Medium 2m sealed shaft",
		"mod":"Core SteamEngine"
	},
	"0e25d9c8-9b52-40db-9979-3d1492d9ffeb":{
		"readableName":"Small engine shaft",
		"searchableName":"smallengineshaft",
		"reference":"Small engine shaft",
		"mod":"Core SteamEngine"
	},
	"9e41c3e8-db93-41db-9ce3-95b248af6c68":{
		"readableName":"Medium engine shaft",
		"searchableName":"mediumengineshaft",
		"reference":"Medium engine shaft",
		"mod":"Core SteamEngine"
	},
	"3f95907f-c66f-4211-96d6-5765857a34de":{
		"readableName":"Small shaft bearing",
		"searchableName":"smallshaftbearing",
		"reference":"Small shaft bearing",
		"mod":"Core SteamEngine"
	},
	"a5556bd2-0d78-48d1-bfa6-dbdd08443680":{
		"readableName":"Medium shaft bearing",
		"searchableName":"mediumshaftbearing",
		"reference":"Medium shaft bearing",
		"mod":"Core SteamEngine"
	},
	"bf008077-997c-4371-a116-57de7d351fe7":{
		"readableName":"Small 1m propeller",
		"searchableName":"small1mpropeller",
		"reference":"Small 1m propeller",
		"mod":"Core SteamEngine"
	},
	"0c5a2ff0-a0bf-490d-8cd7-219d71a1b629":{
		"readableName":"Medium 3m propeller",
		"searchableName":"medium3mpropeller",
		"reference":"Medium 3m propeller",
		"mod":"Core SteamEngine"
	},
	"5373c818-c0e4-4cad-afc5-bed89f5236b4":{
		"readableName":"Small 3m propeller",
		"searchableName":"",
		"reference":"Small 3m propeller",
		"mod":"Core SteamEngine"
	},
	"abd1afe4-2fb2-4f91-94aa-39d56f94ca05":{
		"readableName":"Small wheel",
		"searchableName":"smallwheel",
		"reference":"Small wheel",
		"mod":"Core SteamEngine"
	},
	"7d016aa1-e2b3-4fb0-a51e-8e01df77c6c5":{
		"readableName":"Medium wheel",
		"searchableName":"mediumwheel",
		"reference":"Medium wheel",
		"mod":"Core SteamEngine"
	},
	"d3e8e14a-58e7-4bdd-b1b3-0f37e4723a73":{
		"readableName":"Shard Cannon",
		"searchableName":"shardcannon",
		"reference":"Shard Cannon",
		"mod":"Core SimpleWeapon"
	},
	"61228ef0-e45f-4074-bd16-9dc47b19be5b":{
		"readableName":"Ring shield generator",
		"searchableName":"shieldgenerator",
		"reference":"Ring shield generator",
		"mod":"Core RingShields"
	},
	"f7042d78-d7ae-4a0b-b273-197813c61648":{
		"readableName":"Planar shield projector",
		"searchableName":"planarshieldprojector",
		"reference":"Planar shield projector",
		"mod":"Core Misc"
	},
	"936f57b0-0376-411e-a9c2-776681111efc":{
		"readableName":"Ship's wheel",
		"searchableName":"ship'swheel",
		"reference":"Ship's wheel",
		"mod":"Core Misc"
	},
	"fd2b6afb-da6f-4a8e-bfc0-e4202b87300d":{
		"readableName":"Short Range Laser Combiner",
		"searchableName":"shortrangelasercombiner",
		"reference":"Short Range Laser Combiner",
		"mod":"Core Laser"
	},
	"b286aa49-6029-4ec3-9b58-b987a3d0ae61":{
		"readableName":"Sign post (long)",
		"searchableName":"",
		"reference":"Sign post (long)",
		"mod":"Core Decorations"
	},
	"e3bffdbf-01eb-4309-bdb5-4358662eaac4":{
		"readableName":"Sign Post",
		"searchableName":"signpost",
		"reference":"Sign Post",
		"mod":"Core Decorations"
	},
	"d7e26b38-f5a3-4ae3-9486-66d63222b336":{
		"readableName":"Single Input Laser Cavity",
		"searchableName":"singleinputcavity",
		"reference":"Single Input Laser Cavity",
		"mod":"Core Laser"
	},
	"64109192-fd8e-422b-a9e8-74295d3d74ea":{
		"readableName":"Six Way Connector",
		"searchableName":"sixwayconnector",
		"reference":"Six Way Connector",
		"mod":"Core CRAM"
	},
	"382a7650-2231-4867-96e4-8d97242a4741":{
		"readableName":"Sky Fortress Turbine",
		"searchableName":"skyfortressturbine",
		"reference":"Sky Fortress Turbine",
		"mod":"Core Construct"
	},
	"87c9eeec-3ef0-4735-a595-eb5fbf0e66ca":{
		"readableName":"Small air intake duct corner",
		"searchableName":"smallairintakeductcorner",
		"reference":"Small air intake duct corner",
		"mod":"Core Air"
	},
	"32d89838-73d1-4cc7-abbf-e18920b03e3e":{
		"readableName":"Small air intake duct",
		"searchableName":"smallairintakeduct",
		"reference":"Small air intake duct",
		"mod":"Core Air"
	},
	"7f97f70a-00a5-4e07-901a-bde9c479e0cd":{
		"readableName":"Small air intake hull duct",
		"searchableName":"smallairintakehullduct",
		"reference":"Small air intake hull duct",
		"mod":"Core Air"
	},
	"6308ac1d-7e51-4760-ba64-e0720d25f519":{
		"readableName":"Small front air duct intake",
		"searchableName":"smallfrontairductintake",
		"reference":"Small front air duct intake",
		"mod":"Core Air"
	},
	"2cf00d3a-02a2-4d77-a432-9b1e7d52aa3a":{
		"readableName":"Small Gantry + Hatch",
		"searchableName":"smallhatchedgantry",
		"reference":"Small Gantry + Hatch",
		"mod":"Core Missile"
	},
	"639405b3-d2bf-4eb6-aef3-72f7e62bf151":{
		"readableName":"Small Gantry",
		"searchableName":"smallgantry",
		"reference":"Small Gantry",
		"mod":"Core Missile"
	},
	"3dd5c28f-501e-436a-821d-46874ca9c5d1":{
		"readableName":"Small jet combuster hull pipe",
		"searchableName":"smallcombusterhull",
		"reference":"Small jet combuster hull pipe",
		"mod":"Core Air"
	},
	"26a852c0-da52-4232-8e04-69913c8edc13":{
		"readableName":"Small jet combuster",
		"searchableName":"smallcombuster",
		"reference":"Small jet combuster",
		"mod":"Core Air"
	},
	"84b391ce-db19-4cd2-b034-e520fef31cf0":{
		"readableName":"Small jet compressor hull pipe",
		"searchableName":"smallcompressorhull",
		"reference":"Small jet compressor hull pipe",
		"mod":"Core Air"
	},
	"cacc9c8b-9149-4adf-a86c-5cf5f4b035b8":{
		"readableName":"Small jet compressor",
		"searchableName":"smallcompressor",
		"reference":"Small jet compressor",
		"mod":"Core Air"
	},
	"a9763554-b190-4861-95fd-f97584923683":{
		"readableName":"Small jet connector corner",
		"searchableName":"cornerexhaustconnector",
		"reference":"Small jet connector corner",
		"mod":"Core Air"
	},
	"faa2ce2d-dd4e-4430-9706-833d578df8a6":{
		"readableName":"Small jet connector hull",
		"searchableName":"exhaustconnectorhull",
		"reference":"Small jet connector hull",
		"mod":"Core Air"
	},
	"ba60a2a9-b4f9-4bed-9a72-091ed6e41182":{
		"readableName":"Small jet connector",
		"searchableName":"exhaustconnector",
		"reference":"Small jet connector",
		"mod":"Core Air"
	},
	"97ab0a32-c1c7-4663-a497-574fb15d9318":{
		"readableName":"Small jet controller hull pipe",
		"searchableName":"smalljetcontrollerhull",
		"reference":"Small jet controller hull pipe",
		"mod":"Core Air"
	},
	"c7d3ffb8-3ceb-40ae-a2b0-69c1f4d59462":{
		"readableName":"Small jet controller",
		"searchableName":"smalljetcontroller",
		"reference":"Small jet controller",
		"mod":"Core Air"
	},
	"1fb31e58-d0bf-4234-8e92-ae6e46869e55":{
		"readableName":"Small jet exhaust hull pipe",
		"searchableName":"smallexhausthull",
		"reference":"Small jet exhaust hull pipe",
		"mod":"Core Air"
	},
	"2b2d4fdc-8ffa-4399-985a-f9f5ec1263d0":{
		"readableName":"Small jet exhaust",
		"searchableName":"smallexhaust",
		"reference":"Small jet exhaust",
		"mod":"Core Air"
	},
	"b093f1e8-7129-4f1b-83ab-737363aceb52":{
		"readableName":"Small jet extra combuster",
		"searchableName":"smallextracombuster",
		"reference":"Small jet extra combuster",
		"mod":"Core Air"
	},
	"fcffecd8-0550-4ff6-b85e-36f45cf04be1":{
		"readableName":"Small jet extra compressor",
		"searchableName":"smallextracompressor",
		"reference":"Small jet extra compressor",
		"mod":"Core Air"
	},
	"7489ebd4-92d2-4641-9db4-139bb592fc34":{
		"readableName":"Small jet fuel injector",
		"searchableName":"smallinjector",
		"reference":"Small jet fuel injector",
		"mod":"Core Air"
	},
	"5a5b609e-4b9f-4baf-8dd0-f13f9732e0ef":{
		"readableName":"Small jet generator hull",
		"searchableName":"smalljetgeneratorhull",
		"reference":"Small jet generator hull",
		"mod":"Core Air"
	},
	"a52c86ec-8f2c-4c0e-8487-8aa12ba93dd0":{
		"readableName":"Small jet generator",
		"searchableName":"smalljetgenerator",
		"reference":"Small jet generator",
		"mod":"Core Air"
	},
	"08101f92-442f-41c8-913e-e5c264463b58":{
		"readableName":"Small jet intake add-On",
		"searchableName":"smallintakeadd-on",
		"reference":"Small jet intake add-On",
		"mod":"Core Air"
	},
	"0096dd3a-44ff-4a6d-b51a-a79973bc8163":{
		"readableName":"Small jet intake hull pipe",
		"searchableName":"smallintakehull",
		"reference":"Small jet intake hull pipe",
		"mod":"Core Air"
	},
	"58ae1262-6ccd-48ca-ac6f-2eb825aa7b42":{
		"readableName":"Small jet ducted intake",
		"searchableName":"smallductedintake",
		"reference":"Small jet ducted intake",
		"mod":"Core Air"
	},
	"95e34566-9234-4559-b601-9a0b9b7c11e5":{
		"readableName":"Small jet intake",
		"searchableName":"smallintake",
		"reference":"Small jet intake",
		"mod":"Core Air"
	},
	"26b0f142-9419-41f1-9c13-3a2b62437f60":{
		"readableName":"Small Launcher (reversed)",
		"searchableName":"smalllauncher(reversed)",
		"reference":"Small Launcher (reversed)",
		"mod":"Core Missile"
	},
	"1b9aa074-9b04-4b5c-b30e-35bdfa0e0835":{
		"readableName":"Small Launcher",
		"searchableName":"smalllauncher",
		"reference":"Small Launcher",
		"mod":"Core Missile"
	},
	"1a1c9de5-6db5-4092-97ac-a4883383fadd":{
		"readableName":"Scatter lens",
		"searchableName":"scatterlens",
		"reference":"Scatter lens",
		"mod":"Core Laser"
	},
	"2e429412-2982-4335-bf3c-a6c6609c8cbf":{
		"readableName":"Vertical lens",
		"searchableName":"verticallens",
		"reference":"Vertical lens",
		"mod":"Core Laser"
	},
	"f0bc9808-c1d6-49c4-967e-3ff2de9379cf":{
		"readableName":"Small Rail Gantry (invisible)",
		"searchableName":"smallinvisiblerailgantry",
		"reference":"Small Rail Gantry (invisible)",
		"mod":"Core Missile"
	},
	"8cfd4184-ee25-4431-8c83-b9f0bf214625":{
		"readableName":"Small Rail Gantry",
		"searchableName":"smallrailgantry",
		"reference":"Small Rail Gantry",
		"mod":"Core Missile"
	},
	"a7aaf947-f16c-489b-a10e-b48d03e0d209":{
		"readableName":"Small Rail Launcher",
		"searchableName":"smallraillauncher",
		"reference":"Small Rail Launcher",
		"mod":"Core Missile"
	},
	"f1cc9808-c1d6-49c4-967e-3ff2de9379cf":{
		"readableName":"Small Single Rail Gantry (invisible)",
		"searchableName":"smallinvisiblesinglerailgantry",
		"reference":"Small Single Rail Gantry (invisible)",
		"mod":"Core Missile"
	},
	"9dfd4184-ee25-4431-8c83-b9f0bf214625":{
		"readableName":"Small Single Rail Gantry",
		"searchableName":"smallsinglerailgantry",
		"reference":"Small Single Rail Gantry",
		"mod":"Core Missile"
	},
	"b8bbf947-f16c-489b-a10e-b48d03e0d209":{
		"readableName":"Small Single Rail Launcher",
		"searchableName":"smallsingleraillauncher",
		"reference":"Small Single Rail Launcher",
		"mod":"Core Missile"
	},
	"bdd365a5-c0df-4d2b-959a-93ecb518bb85":{
		"readableName":"Small top air duct intake",
		"searchableName":"smalltopairductintake",
		"reference":"Small top air duct intake",
		"mod":"Core Air"
	},
	"9f96d700-d8bc-4aa1-bce8-f284a9117bc7":{
		"readableName":"S turbine pipe connection",
		"searchableName":"sturbinepipeconnection",
		"reference":"S turbine pipe connection",
		"mod":"Core SteamEngine"
	},
	"5ed70947-70c6-4e1d-9241-7d670874a07f":{
		"readableName":"S turbine generator connection",
		"searchableName":"sturbinegeneratorconnection",
		"reference":"S turbine generator connection",
		"mod":"Core SteamEngine"
	},
	"caeab2bf-c814-43f2-a220-e13b6d557034":{
		"readableName":"Small turbine middle",
		"searchableName":"smallturbinemiddle",
		"reference":"Small turbine middle",
		"mod":"Core SteamEngine"
	},
	"d34728c0-95de-49fd-a23d-735c7084556f":{
		"readableName":"Small turbine window",
		"searchableName":"smallturbinewindow",
		"reference":"Small turbine window",
		"mod":"Core SteamEngine"
	},
	"956b9974-b044-494e-b5e4-d1cdbc5d5327":{
		"readableName":"Smoke dispenser",
		"searchableName":"smokedispenser",
		"reference":"Smoke dispenser",
		"mod":"Core AI"
	},
	"b06788d5-4715-4168-8f7d-d6380f73fe54":{
		"readableName":"Smoke generator",
		"searchableName":"",
		"reference":"Smoke generator",
		"mod":"Core Decorations"
	},
	"375f4305-47bc-4abd-8c68-b67cb50e7036":{
		"readableName":"Solid Ammo Clip (1m shells)",
		"searchableName":"solidammoclip(1mshells)",
		"reference":"Solid Ammo Clip (1m shells)",
		"mod":"Core APS"
	},
	"f45bd228-43c8-482c-824c-71e48e8ef27a":{
		"readableName":"Solid Ammo Clip (2m shells)",
		"searchableName":"solidammoclip(2mshells)",
		"reference":"Solid Ammo Clip (2m shells)",
		"mod":"Core APS"
	},
	"7676bdb0-2cc4-4966-8d71-b1025244d911":{
		"readableName":"Solid Ammo Clip (3m shells)",
		"searchableName":"solidammoclip(3mshells)",
		"reference":"Solid Ammo Clip (3m shells)",
		"mod":"Core APS"
	},
	"120b90ce-8434-4e44-a32f-7e5da874eaf7":{
		"readableName":"Solid Ammo Clip (4m shells)",
		"searchableName":"solidammoclip(4mshells)",
		"reference":"Solid Ammo Clip (4m shells)",
		"mod":"Core APS"
	},
	"1cbba583-ef54-4de9-9364-4e7371bf4ac3":{
		"readableName":"Solid Ammo Clip (6m shells)",
		"searchableName":"solidammoclip(6mshells)",
		"reference":"Solid Ammo Clip (6m shells)",
		"mod":"Core APS"
	},
	"973c1ee1-2dc4-4cd7-be7c-32a37cb405de":{
		"readableName":"Solid Ammo Clip (8m shells)",
		"searchableName":"solidammoclip(8mshells)",
		"reference":"Solid Ammo Clip (8m shells)",
		"mod":"Core APS"
	},
	"f6d7596c-e800-41e3-9076-077fda224aa1":{
		"readableName":"Sonar 90",
		"searchableName":"sonar90",
		"reference":"Sonar 90",
		"mod":"Core AI"
	},
	"3deb411a-953b-45a7-955a-35a96ef4e86b":{
		"readableName":"Sonar 360",
		"searchableName":"sonar360",
		"reference":"Sonar 360",
		"mod":"Core AI"
	},
	"2133d1cd-0307-44e8-b156-5aecf3625230":{
		"readableName":"Sonar Decoy",
		"searchableName":"sonardecoy",
		"reference":"Sonar Decoy",
		"mod":"Core Misc"
	},
	"0586026e-8167-4594-a151-dd16df0434f0":{
		"readableName":"Sound block",
		"searchableName":"",
		"reference":"Sound block",
		"mod":"Core Decorations"
	},
	"7fbe7409-5884-4387-8348-d279e312f86b":{
		"readableName":"Spawn-o-matic",
		"searchableName":"",
		"reference":"Spawn-o-matic",
		"mod":"Core Decorations"
	},
	"788700be-1e74-46d7-9e34-1a5ec2747548":{
		"readableName":"Spin / Turn block",
		"searchableName":"spin/turnblock",
		"reference":"Spin / Turn block",
		"mod":"Core Construct"
	},
	"042cfada-38db-4af5-a1c8-13ddce0da29c":{
		"readableName":"Spin Block Controller",
		"searchableName":"spinblockcontroller",
		"reference":"Spin Block Controller",
		"mod":"Core Misc"
	},
	"cdca5dec-eeee-4849-9b2e-73b23e216465":{
		"readableName":"Spin block",
		"searchableName":"spinblock",
		"reference":"Spin block",
		"mod":"Core Construct"
	},
	"6d58d927-2e19-491c-b2d5-451cc47bf4d8":{
		"readableName":"Spot Light fitting",
		"searchableName":"spotlightfitting",
		"reference":"Spot Light fitting",
		"mod":"Core Decorations"
	},
	"4dc97284-74c1-4d5c-9673-f3209da7e9f0":{
		"readableName":"Stacked Stairs",
		"searchableName":"stackedstairs",
		"reference":"Stacked Stairs",
		"mod":"Core ACDeco"
	},
	"d30acc39-3742-47bd-82de-f5e1b9af565d":{
		"readableName":"Staggered fire add-on",
		"searchableName":"staggeredfireadd-on",
		"reference":"Staggered fire add-on",
		"mod":"Core Missile"
	},
	"9a0d25cc-f5c2-4780-b674-38fe17e73f8e":{
		"readableName":"Stairs",
		"searchableName":"",
		"reference":"Stairs",
		"mod":"Core Decorations"
	},
	"ce77cd15-ad63-425f-ab0c-28b16584d5a1":{
		"readableName":"Stairs",
		"searchableName":"",
		"reference":"Stairs",
		"mod":"Core ACDeco"
	},
	"1576f21e-9ca2-4f29-8b14-53ce98205a5b":{
		"readableName":"Standard door",
		"searchableName":"",
		"reference":"Standard door",
		"mod":"Core Decorations"
	},
	"10c9e65e-ea35-47c9-a8a7-4de86c6438b8":{
		"readableName":"Medium steam controller",
		"searchableName":"mediumsteamcontroller",
		"reference":"Medium steam controller",
		"mod":"Core SteamEngine"
	},
	"0639fbba-70be-4398-857c-6786dab39bea":{
		"readableName":"Small steam controller",
		"searchableName":"smallsteamcontroller",
		"reference":"Small steam controller",
		"mod":"Core SteamEngine"
	},
	"3af2aa7c-86c8-47f5-896d-26d9622cdea8":{
		"readableName":"Steam jet",
		"searchableName":"steamjet",
		"reference":"Steam jet",
		"mod":"Core SteamEngine"
	},
	"96c9d85c-425a-4744-8ff3-36a364ceb99d":{
		"readableName":"Small shaft drill extension",
		"searchableName":"smallshaftdrillextension",
		"reference":"Small shaft drill extension",
		"mod":"Core SteamEngine"
	},
	"35cd6905-44d0-4bb3-be0f-20ee2ed670bf":{
		"readableName":"Medium shaft drill extension",
		"searchableName":"mediumshaftdrillextension",
		"reference":"Medium shaft drill extension",
		"mod":"Core SteamEngine"
	},
	"cbe68b75-1568-494e-8caf-c9e5336faea7":{
		"readableName":"Large shaft drill extension",
		"searchableName":"largeshaftdrillextension",
		"reference":"Large shaft drill extension",
		"mod":"Core SteamEngine"
	},
	"cdc656c1-2266-470b-872c-79faa65dcaae":{
		"readableName":"Small steam drill head",
		"searchableName":"smallsteamdrillhead",
		"reference":"Small steam drill head",
		"mod":"Core SteamEngine"
	},
	"532c3d76-ede3-4fbf-bf87-8e82b3acc73b":{
		"readableName":"Medium steam drill head",
		"searchableName":"mediumsteamdrillhead",
		"reference":"Medium steam drill head",
		"mod":"Core SteamEngine"
	},
	"c0eecb94-0410-4031-9015-2ec4b8fd4c80":{
		"readableName":"Large steam drill head",
		"searchableName":"largesteamdrillhead",
		"reference":"Large steam drill head",
		"mod":"Core SteamEngine"
	},
	"e3cc9c71-2cd1-46b8-8198-e4f578591dd9":{
		"readableName":"Sticky foot",
		"searchableName":"stickyfoot",
		"reference":"Sticky foot",
		"mod":"Core Land"
	},
	"710ee212-563b-42f8-acd1-57515479524d":{
		"readableName":"Stone Block",
		"searchableName":"block",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"45ce64f5-86ca-425a-8074-7603cdfc1d4a":{
		"readableName":"Storage Laser Cavity",
		"searchableName":"laserstoragecavity",
		"reference":"Storage Laser Cavity",
		"mod":"Core Laser"
	},
	"c27e460b-f3c3-4716-b20a-69f766d27f34":{
		"readableName":"Straight Pipe (2m)",
		"searchableName":"straightpipe(2m)",
		"reference":"Straight Pipe (2m)",
		"mod":"Core FuelEngine"
	},
	"6d0d9986-5871-4e5c-a415-6457552595eb":{
		"readableName":"Straight Pipe (3m)",
		"searchableName":"straightpipe(3m)",
		"reference":"Straight Pipe (3m)",
		"mod":"Core FuelEngine"
	},
	"663d3348-9700-487e-a30e-f472d933e859":{
		"readableName":"Straight Pipe (4m)",
		"searchableName":"straightpipe(4m)",
		"reference":"Straight Pipe (4m)",
		"mod":"Core FuelEngine"
	},
	"a160804b-15cc-46e2-8ffb-401c2aa01de6":{
		"readableName":"Straight Pipe",
		"searchableName":"straightpipe",
		"reference":"Straight Pipe",
		"mod":"Core FuelEngine"
	},
	"5ea1b039-9f46-45ac-b8d3-ba837f10f069":{
		"readableName":"Strategic Antenna",
		"searchableName":"strategicantenna",
		"reference":"Strategic Antenna",
		"mod":"Core Misc"
	},
	"cb5bfa64-c3fd-435c-b0da-3891a86b20d2":{
		"readableName":"Structure",
		"searchableName":"structure",
		"reference":"Structure",
		"mod":"Core Construct"
	},
	"58e7abb1-de9f-47f9-864b-d5c8218f1769":{
		"readableName":"Subvehicle Spawner",
		"searchableName":"subvehiclespawner",
		"reference":"Subvehicle Spawner",
		"mod":"Core Misc"
	},
	"47da23fc-17bb-4a66-9c6d-fb66fddb3be6":{
		"readableName":"Supercharger",
		"searchableName":"supercharger",
		"reference":"Supercharger",
		"mod":"Core FuelEngine"
	},
	"ea3d81c0-c862-4e06-90aa-63f746e5ce6f":{
		"readableName":"Supply Pump",
		"searchableName":"supplypump",
		"reference":"Supply Pump",
		"mod":"Core Depreciated"
	},
	"9a564782-3a07-472b-ae06-5a7dfd123e7d":{
		"readableName":"Surge Protector",
		"searchableName":"surgeprotector",
		"reference":"Surge Protector",
		"mod":"Core Misc"
	},
	"03d79bec-7af0-44e7-a012-f2e2dcacff30":{
		"readableName":"Switch",
		"searchableName":"switch",
		"reference":"Switch",
		"mod":"Core Air"
	},
	"06484d1a-d956-49a4-b9de-e779696d001c":{
		"readableName":"Tactical Nuke",
		"searchableName":"tacticalnuke",
		"reference":"Tactical Nuke",
		"mod":"Core Misc"
	},
	"4934fff3-aca3-4fb3-b242-60afbe8d4439":{
		"readableName":"Tailplane",
		"searchableName":"tailplane",
		"reference":"Tailplane",
		"mod":"Core Air"
	},
	"2c557c38-4136-436a-bae2-c5cd1102690c":{
		"readableName":"Target Prioritisation",
		"searchableName":"targetprioritisation",
		"reference":"Target Prioritisation",
		"mod":"Core AI"
	},
	"4c352619-ef4f-4919-b64c-ef11d4435754":{
		"readableName":"Teleport pad",
		"searchableName":"teleportpad",
		"reference":"Teleport pad",
		"mod":"Core Misc"
	},
	"9de26959-6d51-4a6e-b575-ec47e6bdafaf":{
		"readableName":"Telescope Camera Gimbal Tracker",
		"searchableName":"telescopegimbaltracker",
		"reference":"Telescope Camera Gimbal Tracker",
		"mod":"Core AI"
	},
	"2e86af10-00e0-4dad-9cac-3b87ca9e468d":{
		"readableName":"Telescopic Piston (1m) Block",
		"searchableName":"telescopicpiston(1m)",
		"reference":"Telescopic Piston (1m) Block",
		"mod":"Core Construct"
	},
	"d83e6a25-e6c3-49df-9d0b-de3c5edb579b":{
		"readableName":"Telescopic Piston (1m) Constructable",
		"searchableName":"telescopicpiston(1m)",
		"reference":"Telescopic Piston (1m) Constructable",
		"mod":"Core Construct"
	},
	"6ebdb4c7-5626-4051-a91f-21fe6e636263":{
		"readableName":"Telescopic Piston Block",
		"searchableName":"telescopicpiston",
		"reference":"Telescopic Piston Block",
		"mod":"Core Construct"
	},
	"107478fd-2a4d-4fb0-81b9-1a448d3ba987":{
		"readableName":"Telescopic Piston Constructable",
		"searchableName":"telescopicpiston",
		"reference":"Telescopic Piston Constructable",
		"mod":"Core Construct"
	},
	"14930ee7-6795-44f4-ab26-a55a67e8ce01":{
		"readableName":"Text Screen",
		"searchableName":"textscreen",
		"reference":"Text Screen",
		"mod":"Core Misc"
	},
	"e0f9e669-4748-4cde-be95-58e47e094253":{
		"readableName":"Junction pipe",
		"searchableName":"junctionpipe",
		"reference":"Junction pipe",
		"mod":"Core FuelEngine"
	},
	"ae2bb239-d304-4037-b35d-eb7d3ded91bf":{
		"readableName":"Thrust Controller",
		"searchableName":"thrustcontroller",
		"reference":"Thrust Controller",
		"mod":"Core Misc"
	},
	"7daa646e-4aa2-4b6a-bcd4-4f0405cd58bc":{
		"readableName":"Top air duct intake",
		"searchableName":"topairductintake",
		"reference":"Top air duct intake",
		"mod":"Core Air"
	},
	"dfb470c9-e7f2-4530-9b5b-3de8214501da":{
		"readableName":"Torque Amplifier",
		"searchableName":"torqueamplifier",
		"reference":"Torque Amplifier",
		"mod":"Core Drill"
	},
	"8e9327fb-66d3-45ea-af24-d5f9d60e2cdc":{
		"readableName":"Tracking Computer",
		"searchableName":"trackingcomputer",
		"reference":"Tracking Computer",
		"mod":"Core AI"
	},
	"8bd20877-417f-4094-ab24-1ebae4d73f85":{
		"readableName":"Truss 1m",
		"searchableName":"1mtruss",
		"reference":"Truss 1m",
		"mod":"Core ACDeco"
	},
	"2588c8c7-5347-4d68-b9a0-c794e5fdf408":{
		"readableName":"Medium turbine generator",
		"searchableName":"mediumturbinegenerator",
		"reference":"Medium turbine generator",
		"mod":"Core SteamEngine"
	},
	"33d7dc96-ff04-4178-8f67-9c380d26f168":{
		"readableName":"Small turbine generator",
		"searchableName":"smallturbinegenerator",
		"reference":"Small turbine generator",
		"mod":"Core SteamEngine"
	},
	"6209370e-abeb-4ec1-b523-dc21ea33fe0c":{
		"readableName":"Turbocharger (left)",
		"searchableName":"cylinderturbocharger(l)",
		"reference":"Turbocharger (left)",
		"mod":"Core FuelEngine"
	},
	"91cca4a9-a40f-43eb-9ba5-34c738b03d1f":{
		"readableName":"Turbocharger (right)",
		"searchableName":"cylinderturbocharger(r)",
		"reference":"Turbocharger (right)",
		"mod":"Core FuelEngine"
	},
	"2c56eeab-7432-4c31-b413-68b0ee7e2d7c":{
		"readableName":"Turret Block Elevation only",
		"searchableName":"turretblockelevationonly",
		"reference":"Turret Block Elevation only",
		"mod":"Core Construct"
	},
	"c310aa38-b723-4a66-8700-47cffe7647f4":{
		"readableName":"Turret Block One Axis (3m)",
		"searchableName":"turretblockoneaxis(3m)",
		"reference":"Turret Block One Axis (3m)",
		"mod":"Core Construct"
	},
	"b7c60d19-d652-4fcc-af1a-85409c9c131f":{
		"readableName":"Turret Block One Axis (5m)",
		"searchableName":"turretblockoneaxis(5m)",
		"reference":"Turret Block One Axis (5m)",
		"mod":"Core Construct"
	},
	"8f461b33-37cf-4049-b04c-4aa0d2292e2d":{
		"readableName":"Turret Block One Axis",
		"searchableName":"turretblockoneaxis",
		"reference":"Turret Block One Axis",
		"mod":"Core Construct"
	},
	"c5cec892-2e43-4905-9d28-44fc8ecb5cc7":{
		"readableName":"Turret Block Two Axis",
		"searchableName":"turretblocktwoaxis",
		"reference":"Turret Block Two Axis",
		"mod":"Core Construct"
	},
	"213026bc-fd7a-44e6-b543-a31c219aaef0":{
		"readableName":"Two Axis Turret",
		"searchableName":"twoaxisturret",
		"reference":"Two Axis Turret",
		"mod":"Core Construct"
	},
	"d4e23d98-fbde-449e-823f-872004cadc7a":{
		"readableName":"Universal flight surface",
		"searchableName":"",
		"reference":"Universal flight surface",
		"mod":"Core Air"
	},
	"552785c2-43cd-41e6-a13a-818388b93968":{
		"readableName":"Up & Down Connector",
		"searchableName":"up&downconnector",
		"reference":"Up & Down Connector",
		"mod":"Core Depreciated"
	},
	"d43b5a55-9e60-48f9-9e77-ac1cfa97dafa":{
		"readableName":"Vehicle Blueprint Spawner",
		"searchableName":"vehicleblueprintspawner",
		"reference":"Vehicle Blueprint Spawner",
		"mod":"Core Misc"
	},
	"2ed46940-a47c-4283-bf5d-6b52132da9b4":{
		"readableName":"Vehicle Controller",
		"searchableName":"vehiclecontroller",
		"reference":"Vehicle Controller",
		"mod":"Core Misc"
	},
	"e63040c9-0027-4fd3-be30-67fe3e950140":{
		"readableName":"Vehicle",
		"searchableName":"vehicle",
		"reference":"Vehicle",
		"mod":"Core Construct"
	},
	"251a3c8a-62d7-41bd-a648-268e3b1c2c83":{
		"readableName":"Video Controller",
		"searchableName":"videocontroller",
		"reference":"Video Controller",
		"mod":"Core Misc"
	},
	"69061de4-f4df-41cd-8af1-ccb2081cbae6":{
		"readableName":"Video Screen",
		"searchableName":"videoscreen",
		"reference":"Video Screen",
		"mod":"Core Decorations"
	},
	"24f6df16-98dc-4176-93cf-456a5e4d7ab8":{
		"readableName":"Warp stabilizer",
		"searchableName":"warpstabilizer",
		"reference":"Warp stabilizer",
		"mod":"Core WarpDrive"
	},
	"0a8d8d02-5d03-4488-8431-e75602fea1e4":{
		"readableName":"Warp Controller",
		"searchableName":"warpcontroller",
		"reference":"Warp Controller",
		"mod":"Core WarpDrive"
	},
	"c6497cec-51b5-4d94-940e-107990a25afd":{
		"readableName":"Warp rod",
		"searchableName":"warprod",
		"reference":"Warp rod",
		"mod":"Core WarpDrive"
	},
	"d6c8b7aa-bdcd-459a-a2ec-fbbba09cffcf":{
		"readableName":"Warp Terminator",
		"searchableName":"warpterminator",
		"reference":"Warp Terminator",
		"mod":"Core WarpDrive"
	},
	"362cf2d2-533d-4622-b2c1-490843662d97":{
		"readableName":"Weather Vane circular",
		"searchableName":"weathervanecircular",
		"reference":"Weather Vane circular",
		"mod":"Core Water"
	},
	"5c76e88d-29e4-4078-aed2-7686d5b1eec7":{
		"readableName":"Weather Vane",
		"searchableName":"weathervane",
		"reference":"Weather Vane",
		"mod":"Core Water"
	},
	"22524171-87ab-4fc3-80fb-ac5690b624b3":{
		"readableName":"Wheel 3m mirror (turning)",
		"searchableName":"wheel3mmirror(turning)",
		"reference":"Wheel 3m mirror (turning)",
		"mod":"Core Land"
	},
	"a5bb808a-ef3d-4262-84a6-6d245e3735ea":{
		"readableName":"Wheel 3m mirror",
		"searchableName":"wheel3mmirror",
		"reference":"Wheel 3m mirror",
		"mod":"Core Land"
	},
	"c05c88aa-96df-461e-832f-7d5591a24972":{
		"readableName":"Wheel 3m (turning)",
		"searchableName":"wheel3m(turning)",
		"reference":"Wheel 3m (turning)",
		"mod":"Core Land"
	},
	"2ec29b39-8a90-475b-b116-e62c83db3e97":{
		"readableName":"Wheel 3m",
		"searchableName":"wheel3m",
		"reference":"Wheel 3m",
		"mod":"Core Land"
	},
	"15d4be68-edf9-44ed-bfda-5522cd9da33f":{
		"readableName":"Wheel 5m mirror (turning)",
		"searchableName":"wheel5mmirror(turning)",
		"reference":"Wheel 5m mirror (turning)",
		"mod":"Core Land"
	},
	"78d6177b-345c-43d6-8e34-b28bf0a82659":{
		"readableName":"Wheel 5m mirror",
		"searchableName":"wheel5mmirror",
		"reference":"Wheel 5m mirror",
		"mod":"Core Land"
	},
	"c9c226ff-ebd3-4394-b6d5-d4796e0dd149":{
		"readableName":"Wheel 5m (turning)",
		"searchableName":"wheel5m(turning)",
		"reference":"Wheel 5m (turning)",
		"mod":"Core Land"
	},
	"4ae3bc3c-c39e-4d6b-afab-d0e34d783bc5":{
		"readableName":"Wheel 5m",
		"searchableName":"wheel5m",
		"reference":"Wheel 5m",
		"mod":"Core Land"
	},
	"a4fdfea1-1254-4f7b-9346-124dddb595bd":{
		"readableName":"Wheel mirror (turning)",
		"searchableName":"wheelmirror(turning)",
		"reference":"Wheel mirror (turning)",
		"mod":"Core Land"
	},
	"c384fa33-67c3-4915-a878-4245f4cdcecc":{
		"readableName":"Wheel mirror",
		"searchableName":"wheelmirror",
		"reference":"Wheel mirror",
		"mod":"Core Land"
	},
	"4363ead8-3cdd-4d95-b461-193dc928790d":{
		"readableName":"Wheel (turning)",
		"searchableName":"wheel(turning)",
		"reference":"Wheel (turning)",
		"mod":"Core Land"
	},
	"f3f7620a-f281-4a3a-a75e-0106ef9c4eb8":{
		"readableName":"Wheel",
		"searchableName":"wheel",
		"reference":"Wheel",
		"mod":"Core Land"
	},
	"7d005e15-c63a-44f0-b12e-b8599a9f0424":{
		"readableName":"Widget",
		"searchableName":"",
		"reference":"Widget",
		"mod":"Core Misc"
	},
	"b0c166d0-c6dd-4328-97a9-335c25fff2fb":{
		"readableName":"Winch",
		"searchableName":"winch",
		"reference":"Winch",
		"mod":"Core Missile"
	},
	"d51549fd-2e38-4271-b85a-afded45400df":{
		"readableName":"Window Block",
		"searchableName":"windowblock",
		"reference":"Window Block",
		"mod":"Core Structural"
	},
	"0fd8c160-7f2e-4921-8eef-ff2bd8785c1a":{
		"readableName":"Wing middle",
		"searchableName":"middle",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"fb997dde-d192-4be3-93bf-9b8bbb647bc5":{
		"readableName":"Wing missile strut",
		"searchableName":"",
		"reference":"Wing missile strut",
		"mod":"Core Air"
	},
	"a3746c99-5e0b-4e0f-ad1e-c0f834054d72":{
		"readableName":"Wing connection strut",
		"searchableName":"",
		"reference":"Wing connection strut",
		"mod":"Core Struts"
	},
	"478efa9f-5743-4238-ad2e-750770d7da11":{
		"readableName":"Wing",
		"searchableName":"",
		"reference":"Wing",
		"mod":"Core Air"
	},
	"22c7914a-d836-4b41-93e7-7de9e3b9b11e":{
		"readableName":"Wireless Camera",
		"searchableName":"wirelesscamera",
		"reference":"Wireless Camera",
		"mod":"Core Misc"
	},
	"e6bb2b09-daee-432d-9aff-45fc63d24fca":{
		"readableName":"Wireless Receiver",
		"searchableName":"wirelessreceiver",
		"reference":"Wireless Receiver",
		"mod":"Core AI"
	},
	"4b334c3f-aafd-440c-9c1f-02a98fd18ab5":{
		"readableName":"Wireless Snooper",
		"searchableName":"wirelesssnooper",
		"reference":"Wireless Snooper",
		"mod":"Core AI"
	},
	"a56e0dcf-94e4-48a0-b8b9-5e33e0ab69cf":{
		"readableName":"Wireless Transmitter",
		"searchableName":"wirelesstransmitter",
		"reference":"Wireless Transmitter",
		"mod":"Core AI"
	},
	"f72b5a6e-081e-4889-b041-a90b2ca7ae4e":{
		"readableName":"Wood Block Variant",
		"searchableName":"masttop",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"9a0ae372-beb4-4009-b14e-36ed0715af73":{
		"readableName":"Wood Block",
		"searchableName":"block",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"fb1276c4-ba55-4e62-8315-40d4bf8adbf2":{
		"readableName":"Wood duct (1x1)",
		"searchableName":"woodduct(1x1)",
		"reference":"Wood duct (1x1)",
		"mod":"Core Air"
	},
	"692f710c-1710-4db5-9d8a-8c5acc4890ab":{
		"readableName":"Wood duct (3x3)",
		"searchableName":"woodduct(3x3)",
		"reference":"Wood duct (3x3)",
		"mod":"Core Air"
	},
	"05c9b256-38d2-4388-ad8c-b98118593f11":{
		"readableName":"Wood duct (5x5)",
		"searchableName":"woodduct(5x5)",
		"reference":"Wood duct (5x5)",
		"mod":"Core Air"
	},
	"24b4b0d5-8b0f-48bd-bef7-fdad00dede68":{
		"readableName":"Wood duct (7x7)",
		"searchableName":"woodduct(7x7)",
		"reference":"Wood duct (7x7)",
		"mod":"Core Air"
	},
	"ba4a4581-d315-494e-9936-a82acd3fce13":{
		"readableName":"Wooden connection strut",
		"searchableName":"",
		"reference":"Wooden connection strut",
		"mod":"Core Struts"
	},
	"2a488683-f25b-4ecb-aea6-9a1c96d1e372":{
		"readableName":"Wooden Material Storage Large (mirror)",
		"searchableName":"wooden(largemirror)",
		"reference":"Wooden Material Storage Large (mirror)",
		"mod":"Core Resource"
	},
	"a76daffa-ba3f-4c09-a947-5b694aca4448":{
		"readableName":"Wooden Material Storage Large",
		"searchableName":"wooden(large)",
		"reference":"Wooden Material Storage Large",
		"mod":"Core Resource"
	},
	"8746f5b3-e2a6-4067-95bc-9da3900690f8":{
		"readableName":"Wooden Material Storage Small",
		"searchableName":"wooden(small)",
		"reference":"Wooden Material Storage Small",
		"mod":"Core Resource"
	},
	"542cacd4-c366-4a76-8d01-4ace6c5ce619":{
		"readableName":"X-Junction Pipe",
		"searchableName":"x-junctionpipe",
		"reference":"X-Junction Pipe",
		"mod":"Core FuelEngine"
	},
	"99409fb0-d2a3-435d-8fd8-cf4a809236e7":{
		"readableName":"2m CS corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"950c932b-125c-4f99-8d32-f44f8125e983":{
		"readableName":"2m CS corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"f779ea34-dfe1-450a-b28a-17f4e947846e":{
		"readableName":"2m CS inverted corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"4abc9018-c0fe-40de-86c3-23599c5c984c":{
		"readableName":"2m CS inverted corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"3e01fa52-676c-40cd-b62c-620c215b2c82":{
		"readableName":"2m Wing corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"bff4fd3e-980f-4c0d-bf36-84e077a32c15":{
		"readableName":"2m Wing corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"e5773f95-5fb1-4ca5-99ff-4d472c28e0bb":{
		"readableName":"2m Wing inverted corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"bb18935d-7b63-4af9-a87f-a067da5f5109":{
		"readableName":"2m Wing inverted corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"df9737d0-b566-45c6-89c5-f78277edd3c9":{
		"readableName":"3m CS corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"32f279e7-f1ca-46d0-b612-3758a97c451e":{
		"readableName":"3m CS corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"7577e9eb-9f41-48c8-8b6d-cb494b454f49":{
		"readableName":"3m CS inverted corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"fcd1cdc0-0e2e-4b35-918b-5abe344b2ebe":{
		"readableName":"3m CS inverted corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"e6cfc973-36ee-4dbb-8fcf-949a57b0e09c":{
		"readableName":"3m Wing corner Left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"73d1c070-a1e2-4928-9446-ea7b217a8bfb":{
		"readableName":"3m Wing corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"2891ef14-4d02-459a-b9a5-17469997c6d7":{
		"readableName":"3m Wing inverted corner Left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"667f4e1c-533d-4af2-9fb0-d0af518d9227":{
		"readableName":"3m Wing inverted corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"3de74aa0-cbb9-4cd7-b497-024d8ba98ffc":{
		"readableName":"4m CS corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"fd62dd66-6aa3-4c07-8508-480560a3355d":{
		"readableName":"4m CS corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"3b98ec90-e042-471a-ad92-e388e0fe3e50":{
		"readableName":"4m CS inverted corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"5f2019e9-ce40-4bab-a054-ce3af4aad9b3":{
		"readableName":"4m CS inverted corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"aa129823-57fd-44ae-8c6d-a6291441e326":{
		"readableName":"4m Wing corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"91e7a486-6b8b-4f76-bf74-096e3c41a7af":{
		"readableName":"4m Wing corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"2d101cbc-b3aa-47e4-8a96-00a24638f6b0":{
		"readableName":"4m Wing inverted corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"7325f3c9-79b3-4f3b-ae94-e9223f3ae717":{
		"readableName":"4m Wing inverted corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"755d86c3-86cd-456f-9256-5a274780faba":{
		"readableName":"Alloy Plate Slope",
		"searchableName":"slopedalloyplate",
		"reference":"Alloy Plate",
		"mod":"Core ACDeco"
	},
	"4929dc91-e2af-42cd-a672-b86571a0b92f":{
		"readableName":"Alloy 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"e3921d2a-d812-4c80-a4f6-4360b1af8631":{
		"readableName":"Alloy 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"29251fa7-0963-4206-bb08-a144b767fdea":{
		"readableName":"Alloy 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"69784c50-9b89-48f4-bb27-00fd293101e2":{
		"readableName":"Alloy 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"66d91ba8-5540-4806-97f6-888c0146d277":{
		"readableName":"Alloy 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"559146d5-618d-48a3-811d-5292fee0b112":{
		"readableName":"Alloy 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"c099b76c-f011-4c87-ad8e-20c968c1eb76":{
		"readableName":"Alloy 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"5de2adf7-76fb-42ea-8120-209ee5a42624":{
		"readableName":"Alloy 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"4b2033a2-d233-47f0-a9cf-ecc798072802":{
		"readableName":"Alloy 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"71f02e31-0baf-497d-bf13-e568d8baa117":{
		"readableName":"Alloy 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"80a03fbd-b4fc-4a03-a7dc-bc4ba61c9782":{
		"readableName":"Alloy 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"83aaf521-2335-46fd-ab73-85bc9eab379d":{
		"readableName":"Alloy 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"2d1d0f03-0751-4430-b023-b660749187dd":{
		"readableName":"Alloy 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"faafca6a-e060-4a5f-97c4-80e89173e004":{
		"readableName":"Alloy 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"84cd2d26-9521-450d-8c6b-96101341e865":{
		"readableName":"Alloy 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"567281a0-cf1d-4bcf-aaf1-2c2020d8e754":{
		"readableName":"Alloy 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a14fc7d8-f7bf-462f-947b-4df1301b6f26":{
		"readableName":"Alloy 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"94704fd4-d54d-45cc-b247-34d7492e4d51":{
		"readableName":"Alloy 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"b03a2c1b-69b5-4a1b-8daf-6b5b46ffe750":{
		"readableName":"Alloy 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"6df35bc7-4799-43bc-9f49-782e1e9a53a4":{
		"readableName":"Alloy 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"ab8dda56-4b5e-47cf-886c-219a0259018b":{
		"readableName":"Alloy 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"20f74da8-3052-4e5a-8b9a-28252781f37b":{
		"readableName":"Alloy 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"ccb16d68-186c-4896-82e3-9e9213271ace":{
		"readableName":"Alloy 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"10c36664-41f1-4429-8a1e-0ff3dade19c2":{
		"readableName":"Alloy 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"77b48c53-c300-46f7-9f1d-7bd3ea99768d":{
		"readableName":"Alloy 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"5a49b8cb-0255-414d-9fb4-fd36aade3429":{
		"readableName":"Alloy 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"e2389407-d04d-4b2d-a02b-4085bbe4d4df":{
		"readableName":"Alloy 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"44b7168c-4c2b-4875-a1b5-f77029cf4658":{
		"readableName":"Alloy 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"cc10dea1-469d-4574-b672-61c786284cf0":{
		"readableName":"Alloy 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"b5f4a946-dea1-4f99-93cf-6f0741c3b4e6":{
		"readableName":"Alloy 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"d0a7a581-b9a3-4358-a455-cbf90e763327":{
		"readableName":"Alloy 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"081a7cf8-c80d-4e22-9140-1cab6a875db9":{
		"readableName":"Alloy 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"21907204-b5a0-466b-aa32-5c1b09f9c55b":{
		"readableName":"Alloy 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"4cbd1e09-0cb0-4d91-a488-58725bcff7c3":{
		"readableName":"Alloy 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"1fc1a1b6-bd6d-4907-8e96-f3b6e7b49670":{
		"readableName":"Alloy 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"77b5b1be-56a8-4699-b9fb-a967a03897c5":{
		"readableName":"Alloy 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"903ed616-47a5-4aa2-a85c-f3e18ce9e620":{
		"readableName":"Alloy 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"ddaa81f0-cc9e-4585-ad4f-34b0a295953d":{
		"readableName":"Alloy 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"7f70840d-3a03-46ac-a34c-eaed9ff76b49":{
		"readableName":"Alloy 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"8cc9f7ee-50ed-4a1d-9fbd-57e1d635bf83":{
		"readableName":"Alloy 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"e7b8b9c0-f071-42ed-8cee-bb868ab4b245":{
		"readableName":"Alloy 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"6debd577-7c5b-4b96-984d-6f830a33c47c":{
		"readableName":"Alloy 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"d4330968-0024-425c-82e4-8ff04985ac09":{
		"readableName":"Alloy 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"872ace7e-5f07-4e1f-ac4e-ff8811484ee4":{
		"readableName":"Alloy 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"83e8ef5c-b943-4896-8a35-0ab346eaeb40":{
		"readableName":"Alloy 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"54b18bde-2698-4840-a2aa-a37efba89ff4":{
		"readableName":"Alloy 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"fdba2b5d-3570-43fb-a9e1-10a0c0bba0ef":{
		"readableName":"Alloy 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"80277222-e122-44c4-8e8f-83ba7fb370ce":{
		"readableName":"Alloy 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a7e535a6-e684-4afc-b354-b2470094b014":{
		"readableName":"Alloy 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"3a0be065-8983-46ea-8a1f-099ff9d544c7":{
		"readableName":"Alloy 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"8f9dbf41-6c2d-4e7b-855d-b2432c6942a2":{
		"readableName":"Alloy beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"649f2aec-6f59-4157-ac01-0122ce2e6dad":{
		"readableName":"Alloy beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"9411e401-27da-4546-b805-3334f200f055":{
		"readableName":"Alloy beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"b5d46bb7-d49e-42f6-817b-323fbf6d62b0":{
		"readableName":"Alloy beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"9af822b3-80d9-46bd-9ce0-e6e5c2e61da4":{
		"readableName":"Alloy beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"911fe222-f9b2-4892-9cd6-8b154d55b2aa":{
		"readableName":"Alloy slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"c6176cb5-0a32-4d68-a749-8ee33b2230c1":{
		"readableName":"Alloy slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a3ea61a8-018c-4277-afd9-ac0a34faa759":{
		"readableName":"Alloy slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"2a3905ff-2030-421d-a2bf-90fba71c1c5e":{
		"readableName":"Alloy slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"62f61c31-a453-44ce-87a2-b5ce142fb052":{
		"readableName":"Alloy inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"95a626e6-f1b8-491a-aa31-8de5a2beb513":{
		"readableName":"Alloy inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"51b37dbf-2beb-425b-a817-89434838c857":{
		"readableName":"Alloy inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"8c2aaf82-442e-46a7-9ea5-1b7862cacb87":{
		"readableName":"Alloy inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"ba5c8d03-9093-47a9-a8cd-b721ceeee1dd":{
		"readableName":"Alloy inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"2cdbdb66-132e-4202-90c6-e0a2d8022cc6":{
		"readableName":"Alloy inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"967f98c3-d708-4602-9c71-0f34562cdfca":{
		"readableName":"Alloy inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"afb33fc2-3071-408a-b312-da22478c0a14":{
		"readableName":"Alloy inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"e8c5c921-b116-45cd-b0de-7a37973d5158":{
		"readableName":"Alloy Plate Triangle L",
		"searchableName":"alloyplatetrianglel",
		"reference":"Alloy Plate",
		"mod":"Core ACDeco"
	},
	"819dea06-da54-4236-a041-7346e3dad3d2":{
		"readableName":"Alloy Plate Triangle R",
		"searchableName":"alloyplatetriangler",
		"reference":"Alloy Plate",
		"mod":"Core ACDeco"
	},
	"04019f87-c371-4574-acfe-b7086557eaba":{
		"readableName":"Alloy pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"11f3d43b-8065-472f-a86e-e66eda2e5e88":{
		"readableName":"Alloy pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"657967ac-3647-42ac-8572-be20b02b6398":{
		"readableName":"Alloy pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a84e8d23-c425-4d21-8bdb-2fa5da87b110":{
		"readableName":"Alloy pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"f2df1943-1ebf-47c6-9b81-ad613b7c5d5b":{
		"readableName":"Alloy square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"272f0dea-8aac-4ca9-98e6-79897e7df0f9":{
		"readableName":"Alloy square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"7dd4933f-8a0d-478e-b0a2-1e2c2f1c6957":{
		"readableName":"Alloy square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"1e5247be-25c1-45bc-92a6-e2ab1bfaaa8c":{
		"readableName":"Alloy square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"902446c4-ff32-4118-83ac-1f4bf89c56d1":{
		"readableName":"Alloy square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"29c40e04-59fb-45dc-a80b-31ee1c4f82ac":{
		"readableName":"Alloy square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"d7b990f8-86fc-476c-bc8d-44ba9ecd1c05":{
		"readableName":"Alloy square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"7530d72e-1b5b-408c-9abc-59957a90970f":{
		"readableName":"Alloy square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a4b0d100-c480-4697-b606-489d80a6d376":{
		"readableName":"Alloy triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"90c9965a-1dcc-4786-a2d2-6299fed7260f":{
		"readableName":"Alloy triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"b2ca635d-350c-4977-b8d4-2b2dd28cd2d7":{
		"readableName":"Alloy triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"a6cfd078-bc39-4ad8-a47f-49097913a27b":{
		"readableName":"Alloy triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"ad3e7665-cf63-4135-835f-2f743c69bb36":{
		"readableName":"Alloy triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"27692d7a-c05f-4ac4-ac98-f25e359faebc":{
		"readableName":"Alloy triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"8aceae65-2dce-44b7-94b1-b4bd34d287a5":{
		"readableName":"Alloy triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"2b1b3011-0b81-472e-aa42-26383f453268":{
		"readableName":"Alloy triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"f1a3f1bd-b5f7-43bf-9b72-c7a060c24f73":{
		"readableName":"Alloy wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"efb3284f-bedc-453f-9519-043f77f2e85d":{
		"readableName":"Alloy wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"0d915e65-114c-4945-9585-ac58ad90223f":{
		"readableName":"Alloy wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"791dfc7d-24d9-4e87-b639-d19561b6cb26":{
		"readableName":"Alloy wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"d84b0c14-0a96-41bf-a2e1-d7d2a68ed10d":{
		"readableName":"Ammo 2m (empty)",
		"searchableName":"2mammunitionbox(empty)",
		"reference":"Ammo Parts Box (empty)",
		"mod":"Core Resource"
	},
	"e62413c3-e841-4eda-9e2a-ceaec75e8b64":{
		"readableName":"Ammo 2m",
		"searchableName":"2mammunitionbox",
		"reference":"Ammo Parts Box",
		"mod":"Core Resource"
	},
	"8a60f1e1-8c18-4c93-84e6-49ec2b3e955b":{
		"readableName":"Ammo 2x2m (empty)",
		"searchableName":"2x2mammunitionbox(empty)",
		"reference":"Ammo Parts Box (empty)",
		"mod":"Core Resource"
	},
	"fc52407e-bec1-441a-8828-68441c418deb":{
		"readableName":"Ammo 2x2m Left (empty)",
		"searchableName":"2x2mammunitionbox",
		"reference":"Ammo Parts Box (empty)",
		"mod":"Core Resource"
	},
	"69fdb913-b462-4f88-a614-620462c253a6":{
		"readableName":"Ammo 2x2m Left",
		"searchableName":"2x2mammunitionbox",
		"reference":"Ammo Parts Box",
		"mod":"Core Resource"
	},
	"4dd5c902-6c7c-4e9a-a970-31fb67f44dd4":{
		"readableName":"Ammo 2x2m",
		"searchableName":"2x2mammunitionbox",
		"reference":"Ammo Parts Box",
		"mod":"Core Resource"
	},
	"5dc0032d-d532-4766-b081-4204947bcaa0":{
		"readableName":"Applique Panel 2m",
		"searchableName":"appliquepanel2m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"195e0661-21dc-4fba-88f1-81481f3bf409":{
		"readableName":"Applique Panel 3m",
		"searchableName":"appliquepanel3m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"1fa6e1a9-83fb-4efc-b9bc-19ea0d1005cb":{
		"readableName":"Applique Panel 4m",
		"searchableName":"appliquepanel4m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"ec641c5f-d6fa-4e58-8158-142f44c2516a":{
		"readableName":"Applique Slope 0.5m",
		"searchableName":"appliqueslope0.5m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"9083c801-30fd-4c67-b571-b67aeb48ec88":{
		"readableName":"Applique Slope 1.5m",
		"searchableName":"appliqueslope1.5m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"2eca89e0-5c2f-4b1c-a5bf-df5190e13ef4":{
		"readableName":"Applique Slope 1m",
		"searchableName":"appliqueslope1m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"5db44623-9d7e-40f1-ac8b-c91e15a709f1":{
		"readableName":"Applique Slope 2.5m",
		"searchableName":"appliqueslope2.5m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"85ea264e-6ef0-48df-9adc-9b1a8fe15247":{
		"readableName":"Applique Slope 2m",
		"searchableName":"appliqueslope2m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"486800cf-72f3-470d-9b3c-db6066fbca00":{
		"readableName":"Applique Slope 3.5m",
		"searchableName":"appliqueslope3.5m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"f62c34b8-727e-4f6d-8d75-97c52631b7f9":{
		"readableName":"Applique Slope 3m",
		"searchableName":"appliqueslope3m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"548c437e-66c2-4783-8b22-1ce784019672":{
		"readableName":"Applique Slope 4.5m",
		"searchableName":"appliqueslope4.5m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"60bc1939-6207-4b3e-9f31-444ed626c775":{
		"readableName":"Applique Slope 4m",
		"searchableName":"appliqueslope4m",
		"reference":"Applique Panel",
		"mod":"Core ACDeco"
	},
	"306279e7-5dea-464c-9991-bb3faf7d6c99":{
		"readableName":"Chain Small",
		"searchableName":"smallchain",
		"reference":"Chain Large",
		"mod":"Core ACDeco"
	},
	"ce05e453-eca5-4833-b3c6-bf9373851922":{
		"readableName":"Control surface 1m",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"b46c1759-a7c1-4dca-9c15-d0c3329dcaae":{
		"readableName":"Control surface 2m",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"8768ed82-11cd-4823-a5c3-58ef4e1912a9":{
		"readableName":"Control surface 3m",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"14884b06-6834-469d-a996-629b6d155a8f":{
		"readableName":"Control surface 4m",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"feb05769-2576-4837-9cff-e1665f7e471a":{
		"readableName":"CS corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"c260c24c-3cac-44ab-be7a-ef51c3bb94aa":{
		"readableName":"CS corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"eb7fa163-6a07-406e-ba71-8117065747ac":{
		"readableName":"Glass 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"7f189a18-7c28-4a4c-a1ee-e4d4335e79d6":{
		"readableName":"Glass 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"45073512-a1cf-470d-9c12-f47c36cf3351":{
		"readableName":"Glass 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"4daeed6d-fc6a-4490-b038-c61efb4d6ff4":{
		"readableName":"Glass 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"73ec0366-c42a-4d9c-a5b2-397470fc4be1":{
		"readableName":"Glass 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"973d25ff-2ecc-4c01-904a-c42d77560809":{
		"readableName":"Glass 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"a285d4bd-69f9-4b12-a8e0-aa1ebd966c06":{
		"readableName":"Glass 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"583b24e6-4f8b-4e6e-bd72-804a6424c816":{
		"readableName":"Glass 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"89ae8f0f-9e80-4849-888d-12d81a8df326":{
		"readableName":"Glass 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"3fac543b-7d25-4ea7-8f5c-002025881ca1":{
		"readableName":"Glass 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"1cb1b512-abc9-463e-868a-6393acfeb5f2":{
		"readableName":"Glass 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"8071b2a0-aff9-4d51-8c74-1d9b77f2a769":{
		"readableName":"Glass 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"67fc1acd-44fd-4511-93d6-a75dc2f1ae82":{
		"readableName":"Glass 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"cf9f84cb-a565-43c8-bbce-7da64877e9e1":{
		"readableName":"Glass 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"ef99c9f8-6ea3-4bd2-b56b-5f2b1c7b8983":{
		"readableName":"Glass 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"837f9050-6a17-47db-ae08-6e72a740a469":{
		"readableName":"Glass 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"5190d6b7-6bf6-4d9a-8a26-0ed2b562a7c2":{
		"readableName":"Glass 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"e90c2be1-6330-4839-92a6-160ba2b97615":{
		"readableName":"Glass 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"4ab39452-a19f-4fcf-ba41-6effc2c22bc7":{
		"readableName":"Glass 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"03c74855-093e-4e31-b071-e7198d1e077b":{
		"readableName":"Glass 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"d6181b6e-c51f-42cd-a645-625e91573254":{
		"readableName":"Glass 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"a8b9d98b-5ae9-427c-9445-bf9c86e84a9c":{
		"readableName":"Glass 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"86f9fcac-6607-45b7-94fc-f0f6f76662bf":{
		"readableName":"Glass 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"5852944e-e3fa-48a0-8498-f1fe6a86f4f5":{
		"readableName":"Glass 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"eeb41a6f-1205-4aab-af3a-fb155bc63055":{
		"readableName":"Glass 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"e15bf1dd-0dd3-4b94-b05c-0b516969689a":{
		"readableName":"Glass 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"b2957d34-c1a6-457d-ad7c-efc64d1ffa43":{
		"readableName":"Glass 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"d741b54c-bb97-4768-abc7-63a4fa8ae49c":{
		"readableName":"Glass 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"6a8a4a2d-01f7-42d7-81ac-6337546cf56d":{
		"readableName":"Glass 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"a84ed9da-7a18-44ce-8093-a5d31f6b6b61":{
		"readableName":"Glass 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"4d901cbe-b83a-49c9-a016-6498578926f2":{
		"readableName":"Glass 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"d514be67-eb1c-419c-82ba-6ee8ff14c729":{
		"readableName":"Glass 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"8108607a-fd3b-4815-8c71-8bc82504a124":{
		"readableName":"Glass 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"22bf6058-7be5-4e56-899f-8365624508e2":{
		"readableName":"Glass 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"0db0964e-5ad5-4c58-8f48-29d97ab6619c":{
		"readableName":"Glass 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"f93d2963-8c36-4546-9c89-03ebd53d4651":{
		"readableName":"Glass 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"4c9b5909-bd2d-439d-afb6-f9ec42979fb7":{
		"readableName":"Glass 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"376df835-1735-4e56-8c76-f8734fb6245d":{
		"readableName":"Glass 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"aa355fd9-295c-43f3-9f11-7a781a9808b0":{
		"readableName":"Glass beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"049b9d0c-1cb3-4511-be7f-9fad6e0a607e":{
		"readableName":"Glass beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"395179c1-37a0-4250-851b-5bc19fd601b6":{
		"readableName":"Glass beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"0c64d302-c6df-42eb-a0ff-7c90f867ba4b":{
		"readableName":"Glass beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"35abb89b-33b8-4cb4-b3d0-ee132247de8d":{
		"readableName":"Glass beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"174b5b41-b70e-485d-b00a-a61cc9826b2c":{
		"readableName":"Glass slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"69feebc3-e241-4dff-a000-736def80c851":{
		"readableName":"Glass slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"b148f5b4-e237-41a0-a1a3-30c455321149":{
		"readableName":"Glass slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"c4ef6072-822a-4fa5-b618-e7fc0508c499":{
		"readableName":"Glass slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"729b7ea3-59d5-4182-9177-684da6fbe0a9":{
		"readableName":"Glass inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"7936fa47-6616-4e73-85f1-bf831db8f0c8":{
		"readableName":"Glass inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"e42929f1-ccd0-4fff-8413-6cb94cf08405":{
		"readableName":"Glass inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"bb0337d9-69f7-48f1-9c12-2de83ceff42d":{
		"readableName":"Glass inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"c34145c5-bc8c-48c3-bafb-ebda44f1e300":{
		"readableName":"Glass inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"04993e98-6b77-46d3-ad80-5278550e9b65":{
		"readableName":"Glass inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"5e73653e-519c-4f13-9f69-1d80c19151d8":{
		"readableName":"Glass inverted triangle corner (right) (2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"217d4bdc-4b0d-4986-be2c-de98efd00f62":{
		"readableName":"Glass inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"7434948c-1b56-4dd0-bb0c-a3d291653f09":{
		"readableName":"Glass inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"f8cd4d8b-c7ef-434e-a404-04423fb5fcae":{
		"readableName":"Glass pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"24eaca7e-8d1b-472c-91fa-26201a33874c":{
		"readableName":"Glass pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"bbe54c3a-4d87-4ec5-8d76-055424cd24a6":{
		"readableName":"Glass pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"f907ba76-8bc4-48c0-a246-5999941f0e64":{
		"readableName":"Glass pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"d3a729d9-c25f-419c-ba7e-63cd2cac1a4d":{
		"readableName":"Glass square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"09957acb-9916-41ea-8799-66b0359ccb31":{
		"readableName":"Glass square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"84cf449c-e1ae-49a4-a170-c63464106cfe":{
		"readableName":"Glass square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"13d4b7b9-897b-4c71-be66-13aba3c3310b":{
		"readableName":"Glass square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"87103032-b0e5-47c4-a632-ba33da2cbe1b":{
		"readableName":"Glass square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"585d7b93-955d-4099-b9f5-2ea41797f419":{
		"readableName":"Glass square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"699ccf4d-45a4-4635-ba4d-850a40ba6e0a":{
		"readableName":"Glass square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"0bc8fd97-b7ae-4a59-98b8-2f60fe4cf874":{
		"readableName":"Glass square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"0375d846-a203-4813-a330-0d8fd1e6586e":{
		"readableName":"Glass triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"3f349a8a-e5a1-4f43-9cc4-cea2f0f5b623":{
		"readableName":"Glass triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"ea84e01f-5fac-4269-9754-c2c934e4b7d6":{
		"readableName":"Glass triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"48360916-a894-4bd8-b8b5-4595bb7ccf2e":{
		"readableName":"Glass triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"787524d3-1b60-44d8-bef2-d42156c55446":{
		"readableName":"Glass triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"d9952f54-1e40-4e5e-87af-b1011ca18b83":{
		"readableName":"Glass triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"2e691f79-065c-42bb-879a-a91a3cda67e9":{
		"readableName":"Glass triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"37999ce4-4189-4d46-bd77-4b7b5ec4be62":{
		"readableName":"Glass triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"573f6de1-1379-49f8-8342-588bd81a50b7":{
		"readableName":"Glass wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"a2922c8c-4da3-433a-a6b9-85ee0620d876":{
		"readableName":"Glass wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"f163ed91-e4c2-40f0-bb83-0540f4dc9706":{
		"readableName":"Glass wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"6bc790f3-c15a-4aa4-adb1-a1f9c8265b4b":{
		"readableName":"Glass wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"97e8a443-a784-4ca7-a47a-b13fdcebbb99":{
		"readableName":"Glass wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"5e855bfd-c341-4775-b141-d1759f94efaf":{
		"readableName":"Glass wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"7ee91ac9-0498-468a-aa0e-163c404c8e07":{
		"readableName":"Glass wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"6c33beca-d1e6-40a7-993a-89b40e0ac131":{
		"readableName":"Glass wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"df5b0e98-14a7-4f72-9036-3036486c4f60":{
		"readableName":"Glass wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"62568fd8-bb60-4e86-8ad7-3bd91d8dde58":{
		"readableName":"Glass wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"ca233dee-e353-4a20-b27f-afbcb11be877":{
		"readableName":"Glass wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"c0be616d-9f71-48e3-bcc7-357b07f6d0b4":{
		"readableName":"Glass wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Glass block",
		"mod":"Core Structural"
	},
	"1ce727a4-fc31-4ced-ab48-a6b03986341f":{
		"readableName":"Heavy armour 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b0c3d4dd-d225-48c9-b19b-b320bf88e4c5":{
		"readableName":"Heavy armour 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"15da2066-cc54-4eaa-81e9-64be87330205":{
		"readableName":"Heavy armour 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"495a4c41-467f-4586-b385-276512f9c827":{
		"readableName":"Heavy Armour 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"3564752b-f31b-4796-a948-5c0a202653cf":{
		"readableName":"Heavy armour 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c0398bba-7893-47f0-b02e-da2925d365ed":{
		"readableName":"Heavy Armour 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"f36d81a6-f11d-4d8b-8ae5-25699f5380e3":{
		"readableName":"Heavy armour 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"e2fb4854-f848-48a1-a850-7512116a19b9":{
		"readableName":"Heavy armour 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"0fdc488b-2019-4d4c-b2a5-e4d3b409a3e0":{
		"readableName":"Heavy armour 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4b22faf5-c964-4ed3-a6bb-806c3a8363a8":{
		"readableName":"Heavy armour 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4ba5a5b9-4bf6-4a45-8a04-a454aa380602":{
		"readableName":"Heavy Armour 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"6faabd84-f5a7-4775-be42-a3db66292ae7":{
		"readableName":"Heavy Armour 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"23b923a7-742c-4c7a-aac4-6ec0ff7c80cd":{
		"readableName":"Heavy armour 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c3264d31-08c3-40f8-adfb-859b51e3b02f":{
		"readableName":"Heavy armour 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"54998e4e-7abe-47f6-9b82-f762a4bcd312":{
		"readableName":"Heavy armour 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"8cdce26c-0d33-4b48-9e3f-f9669f7e2c99":{
		"readableName":"Heavy armour 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"88795c9b-c11b-4a12-9288-a629b6b839ce":{
		"readableName":"Heavy armour 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"91495bf6-f7a4-4b0b-b0bb-f2f7f5b7cf20":{
		"readableName":"Heavy Armour 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"df59c7a9-2412-4e11-91a9-a359c8f11386":{
		"readableName":"Heavy Armour 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"317d535d-6d0b-4865-8bf4-a6784d668435":{
		"readableName":"Heavy armour 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"59bb19e7-9293-42e1-ada2-a1bb21300164":{
		"readableName":"Heavy armour 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a03bb56f-2113-456d-939f-265c672e5e0f":{
		"readableName":"Heavy armour 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b8a325d6-1867-4097-b768-10a6d5888d6f":{
		"readableName":"Heavy armour 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"58a21be6-163e-4b0a-aab0-995b246ea15c":{
		"readableName":"Heavy armour 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"56583174-67d9-4091-8a05-20aec4e7ef1e":{
		"readableName":"Heavy armour 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c4a2455b-cae5-4657-8db5-d5eef2e4aeb7":{
		"readableName":"Heavy Armour 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c486d719-cab3-4c0c-8018-fdf00b7c0448":{
		"readableName":"Heavy Armour 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a67d4597-ecf6-44f5-994b-8afbcd3f2931":{
		"readableName":"Heavy armour 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b174cad8-a3e7-4c22-9215-ac208b8596da":{
		"readableName":"Heavy armour 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"09e714a3-3a04-4a8d-b488-31bbc576094a":{
		"readableName":"Heavy armour 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"84fe8b2a-c074-4de7-ac00-3e0434586d64":{
		"readableName":"Heavy Armour 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"1371d396-33b3-4510-817f-222cb0df4426":{
		"readableName":"Heavy armour 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"70340fad-2ce1-4ce6-ba43-ad03677cd278":{
		"readableName":"Heavy Armour 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c0a43f45-42ea-481f-85c3-6e640bdd2036":{
		"readableName":"Heavy armour 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"db58ac8f-af7b-468e-91a0-6e8114fb7800":{
		"readableName":"Heavy armour 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"281689d3-1cce-4740-95ff-76a1c4d1a6a1":{
		"readableName":"Heavy armour 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"d20ec006-ee98-4ff3-89d0-34da13e5b253":{
		"readableName":"Heavy armour 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"d1424dbf-197c-4b5d-b361-1a2ea39b1e47":{
		"readableName":"Heavy armour 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"ef0bbe65-28c6-4689-a9c5-5eb3c45e30ba":{
		"readableName":"Heavy armour 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"9af8119e-c8e6-4cab-a4db-8adcbfbad8ce":{
		"readableName":"Heavy armour 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"aa877350-43f7-490f-88a0-150f9af32c93":{
		"readableName":"Heavy armour 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b37ac31e-42ff-4a72-b7f7-b186e76cba45":{
		"readableName":"Heavy Armour 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b43207de-f0a3-40c1-8150-5074d1b6cc64":{
		"readableName":"Heavy Armour 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"85d4464a-a6cc-4cab-a34c-802f99b6a9c3":{
		"readableName":"Heavy armour 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"3b0108f0-e792-44e6-80d5-861d32891e6d":{
		"readableName":"Heavy armour 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"9965f5e6-64eb-456c-b0af-434b6fb23603":{
		"readableName":"Heavy armour 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"158676b2-faca-421b-b99a-c43667cbe234":{
		"readableName":"Heavy armour 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"39d6e8dd-ce7c-4429-a840-9a21e915a9f5":{
		"readableName":"Heavy armour 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"eee38852-9106-4946-a5ce-7fae2dfa4a12":{
		"readableName":"Heavy armour 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"604cbbd5-8d8b-4e77-9ec0-e66f2f6c0c12":{
		"readableName":"Heavy armour 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"242e07fa-399f-4caa-bfc2-1b77bd2bd538":{
		"readableName":"Heavy armour beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"49714981-369a-4158-aff6-e562ee5f98d5":{
		"readableName":"Heavy armour beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"867cea4e-6ea4-4fe2-a4a1-b6230308f8f1":{
		"readableName":"Heavy armour beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"6e5c9f1d-160b-49b1-9b74-606d2f695c7e":{
		"readableName":"Heavy armour beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c61c1c19-cc53-49a2-b207-9de6b9ce328a":{
		"readableName":"Heavy armour beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"78b81c0a-44df-4c24-b2a5-5d273737da60":{
		"readableName":"Heavy armour slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"525d85fc-f4d4-49ea-bebd-dc51bc562adf":{
		"readableName":"Heavy armour slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"98467918-ec0c-47e1-8ce6-55949326eb4f":{
		"readableName":"Heavy armour slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"983ebe9d-535e-4bdb-a37f-6b681a96f5a3":{
		"readableName":"Heavy armour slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"1a48f832-e111-430b-9639-38bb63ec749e":{
		"readableName":"Heavy armour inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"1fcaab1e-18b8-4eb0-a36b-0451b58cf403":{
		"readableName":"Heavy armour inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"5f579567-d069-4a88-b866-d9ef5d85c8c5":{
		"readableName":"Heavy armour inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"882c8ced-9183-4fa2-9661-2b150e3bf769":{
		"readableName":"Heavy armour inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4de90e1c-b6e4-48e6-8304-f624123ea33b":{
		"readableName":"Heavy armour inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"6de2590c-63bc-4f65-bc4d-edaa7b79a342":{
		"readableName":"Heavy armour inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"75941ed5-78d5-41e9-8dca-e3fd9a5ce9ab":{
		"readableName":"Heavy armour inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"29506948-3688-4a66-999b-05b8aca583f3":{
		"readableName":"Heavy armour inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"60b279e2-9c1e-409f-8248-568039537baa":{
		"readableName":"Heavy armour pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"995a9f59-5845-421b-9ac0-f8202922e0d4":{
		"readableName":"Heavy armour pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"9341f524-dc7b-46f9-ab72-7ea821a8cdad":{
		"readableName":"Heavy armour pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"843d4115-d016-40ea-baf9-e71a559d85bc":{
		"readableName":"Heavy armour pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"e5e9f07e-d956-495c-bd47-8749b51916ac":{
		"readableName":"Heavy armour square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c9ec7ef3-0fe9-4e52-8e92-d6259775b38e":{
		"readableName":"Heavy armour square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"ecfa83b1-fe79-414d-a529-cb72c18e1806":{
		"readableName":"Heavy armour square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"3f6eb436-9c32-4e9a-8dc2-cef5acc17478":{
		"readableName":"Heavy armour square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a2b2dfdc-d014-466b-8d45-9432c9866f6a":{
		"readableName":"Heavy armour square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"21de9d6e-f13f-4c1d-862e-17a1428a0c50":{
		"readableName":"Heavy armour square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"73141f86-d17d-4362-91a5-a885fbb815d7":{
		"readableName":"Heavy armour square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"d3e683bf-14e4-482c-90da-d2220018517e":{
		"readableName":"Heavy armour square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"b9948d0c-d9da-4c22-adb3-ed3fd8509806":{
		"readableName":"Heavy armour triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"e1bb3954-5a2f-4039-bb6c-3b6489cc007c":{
		"readableName":"Heavy armour triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"49be6be8-e17b-4bc6-b206-3aece5fb3708":{
		"readableName":"Heavy armour triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"503161e4-286e-48d3-bcab-61b8769c806e":{
		"readableName":"Heavy armour triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"bb9ea0e4-c446-49bc-b4f1-3d2daec6c9f0":{
		"readableName":"Heavy armour triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"d557b2d6-4e84-49fc-ba75-35f6c87036c2":{
		"readableName":"Heavy armour triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"ca49a92a-1ae1-45c6-9b8f-aad28d9859c1":{
		"readableName":"Heavy armour triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a8aebdd1-1479-4b00-8415-8f6da2018dc6":{
		"readableName":"Heavy armour triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a0945b5c-2f1e-45ce-95fb-721e5657afa7":{
		"readableName":"Heavy armour wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"ec907a52-f1aa-40df-8d63-cf1911a42abc":{
		"readableName":"Heavy armour wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4fa0ea70-46da-4fed-bde1-01dea3f3056b":{
		"readableName":"Heavy armour wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"9435a1c1-00a3-4a9c-9aa5-05713a221bc5":{
		"readableName":"Heavy armour wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"12a456b9-7f30-4d26-94b5-2ecd537bd6dc":{
		"readableName":"Heavy armour wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"a243f091-0a79-452e-a34e-1d3c26b8d45d":{
		"readableName":"Heavy armour wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"0f2f0226-6602-4e62-970f-8ad866f12a58":{
		"readableName":"Heavy armour wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4dd3f70a-e106-4049-b498-bd2b01c4eb2c":{
		"readableName":"Heavy armour wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"924ebc61-bf03-4fd9-9c24-ffedd23592cd":{
		"readableName":"Heavy armour wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"4bec3c1c-f47c-4dd6-b8c4-6255f11b0127":{
		"readableName":"Heavy armour wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"30a8fc02-0133-4dbe-9a6f-1e4df68ac635":{
		"readableName":"Heavy armour wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"ef642411-03bb-4c82-9bd4-5ae525e50023":{
		"readableName":"Heavy armour wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Heavy Armour",
		"mod":"Core Structural"
	},
	"c2dd399b-3563-496c-a7f3-5cc9984e2bd7":{
		"readableName":"Heavy Barrel End",
		"searchableName":"heavybarrelend",
		"reference":"Heavy Barrel",
		"mod":"Core CRAM"
	},
	"279f21cf-ea0b-4e4d-9b89-cff016a72e24":{
		"readableName":"Heavy Barrel Start",
		"searchableName":"heavybarrelstart",
		"reference":"Heavy Barrel",
		"mod":"Core CRAM"
	},
	"b5bb2b8e-d024-45b6-b584-9f742bc59355":{
		"readableName":"CS inverted corner left",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"b3a4fdec-db61-464f-96f1-32fc4f104456":{
		"readableName":"CS inverted corner right",
		"searchableName":"",
		"reference":"ControlSurfaceComponent",
		"mod":"Core ControlSurfaces"
	},
	"379598f2-dfb5-4114-9340-323cc2a6ffb2":{
		"readableName":"Lead 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"1d3b82b0-8fea-4648-afba-68677255f21a":{
		"readableName":"Lead 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"33d42711-45e5-4170-a772-99291be1c1c9":{
		"readableName":"Lead 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"e8ae5255-ab28-41bb-9a0a-7ab80500eef3":{
		"readableName":"Lead 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"9f5df742-512c-48b6-8169-3e6c205d2c22":{
		"readableName":"Lead 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"68a33101-b1e0-4cae-be64-e94f5ffa2ece":{
		"readableName":"Lead 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"bde67122-056b-4e43-9e7d-5d34596fa69e":{
		"readableName":"Lead 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"70d56187-181b-4dd4-b49a-937e30f6f442":{
		"readableName":"Lead 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"b5d23070-4083-41a6-b154-79faaf51fd86":{
		"readableName":"Lead 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"feb69d2b-56ec-492f-91fe-50360992eb5c":{
		"readableName":"Lead 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"475e9779-a705-48c5-a553-2cb118ae181e":{
		"readableName":"Lead 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"04474e69-83e7-424a-802f-512ece09925d":{
		"readableName":"Lead 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"33407abf-5365-4058-8ce5-b65d3e131688":{
		"readableName":"Lead 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"39fccb33-d334-479b-9b69-5571bd2cba38":{
		"readableName":"Lead 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"922205f4-94f0-45da-9e46-86a8bc033842":{
		"readableName":"Lead 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"5bdde677-6886-452b-b34f-4031b56bb8cc":{
		"readableName":"Lead 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"f7a52cfe-6507-48c3-b4c5-344bf838d06d":{
		"readableName":"Lead 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"844e895c-b4bc-4670-acc7-104bec8b4703":{
		"readableName":"Lead 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"ee80686d-2abc-478e-a552-d4978cd98984":{
		"readableName":"Lead 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"fde2ff75-db92-45ff-bb86-2037d4b5f98f":{
		"readableName":"Lead 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"91b89bcf-5822-4e77-b0cc-8d3271620700":{
		"readableName":"Lead 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"89e1c5b3-cf7c-4399-98ff-ed91e14cc948":{
		"readableName":"Lead 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"7f7ec39a-013f-46a2-b499-be2a0de8ea11":{
		"readableName":"Lead 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"2357f431-3baf-45d1-94de-f845fec9b501":{
		"readableName":"Lead 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"d64bcbc1-873d-4175-89eb-13ae966415d5":{
		"readableName":"Lead 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"89c75c03-ac8d-4bf8-afe5-e36bb674c84d":{
		"readableName":"Lead 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"326a2f34-1bfd-4547-92b1-43a9f0c05dea":{
		"readableName":"Lead 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"a34cb834-1741-4b26-9ed8-21c85c28e088":{
		"readableName":"Lead 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"cef66a85-b517-4e1a-9dbe-643771a24e2e":{
		"readableName":"Lead 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"2d827849-1ad0-4093-b037-c5e14e74d8ec":{
		"readableName":"Lead 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"ccc7063c-781d-47d1-bd32-da219641552e":{
		"readableName":"Lead 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"61b27590-b3ae-4eb4-bd59-0fef7eb91ac1":{
		"readableName":"Lead 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"c7f59e0e-cceb-4aa3-9a3a-1c577b1f24e2":{
		"readableName":"Lead 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"653daa39-beac-4aa2-980f-c4a49052f9ab":{
		"readableName":"Lead 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"d78bbac3-a00e-4c77-ac0c-6da5a95e2d72":{
		"readableName":"Lead 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"76f9ce05-57dd-4c70-8219-71c48f63a716":{
		"readableName":"Lead 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"5e50a9c4-2a8b-40fd-a8ab-d62d9b22f37b":{
		"readableName":"Lead 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"a783e64e-941b-4e1d-b360-e2d5fa52e4bb":{
		"readableName":"Lead 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"3170c37c-7878-4a51-a743-4e8a5171e641":{
		"readableName":"Lead 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"093773cf-b288-4663-9d27-a182abcaac1a":{
		"readableName":"Lead 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"d0fac21b-bf1d-48f9-b8dc-a372ec74ebef":{
		"readableName":"Lead 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"03ea7bdc-2ec3-4cf6-a8af-9aa21126a074":{
		"readableName":"Lead 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"6d4063d2-c81c-48ac-8abd-4e9d255f8415":{
		"readableName":"Lead 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"fdcbee9f-3473-45a2-ab98-d827eb102274":{
		"readableName":"Lead 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"c77ee831-9744-4d74-9a1e-f5c8b9c8202c":{
		"readableName":"Lead 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"53ace348-3082-4b41-9630-197a60f8e658":{
		"readableName":"Lead 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"1e27893d-eece-4a43-9de2-6d6636a02f65":{
		"readableName":"Lead 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"4de09dc2-b68b-4fd3-a7fb-9031d9a064f2":{
		"readableName":"Lead 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"e823e772-3774-45d5-932c-da64f412f32b":{
		"readableName":"Lead 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"3a5581af-da8b-44d7-bddf-363ed49c632e":{
		"readableName":"Lead 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"d5e50322-fbc0-4e09-bfab-050f431146a9":{
		"readableName":"Lead beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"19ee2ba3-9443-4a44-97fd-bad9b1443895":{
		"readableName":"Lead beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"f5d2db25-114e-473a-8313-96831ccd011e":{
		"readableName":"Lead beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"9ee81122-d411-48a8-adee-73f0a2241176":{
		"readableName":"Lead beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"ea1c1e77-149d-406c-8b81-1a45537ab1bf":{
		"readableName":"Lead beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"df61d4c4-a514-4f23-baab-4da8fce066a3":{
		"readableName":"Lead slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"354bc2b0-de06-4948-ad1e-2fbcef516cb7":{
		"readableName":"Lead slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"7579ca39-af82-4a2c-83f6-a2090ae50d6b":{
		"readableName":"Lead slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"97ea8dab-dc9b-4056-9532-78533e3b82bf":{
		"readableName":"Lead slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"6d965de2-535a-4574-bf5b-b52c40dcc0d0":{
		"readableName":"Lead inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"2a188034-0d97-4592-9a07-caa8b86b8a13":{
		"readableName":"Lead inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"267c3871-b012-4856-b640-00bdb3cfe287":{
		"readableName":"Lead inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"4581670a-fab6-40f8-aced-998dea107b68":{
		"readableName":"Lead inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"67ac785e-154d-4326-9df4-559b122d0aaa":{
		"readableName":"Lead inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"7667a2ad-20b5-434a-9ec3-37acb16027dd":{
		"readableName":"Lead inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"4aa571ec-2dc8-4cd3-b0a8-e5f97a9d2935":{
		"readableName":"Lead inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"c507ebe0-42ce-42f5-9b22-93c37beb6db8":{
		"readableName":"Lead inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"995d25a2-7237-4cd2-b763-7eb3b3f7e1e7":{
		"readableName":"Lead pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"0431b5df-6741-4cc5-8171-4c15327bcd76":{
		"readableName":"Lead pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"4269a390-59e9-4438-a171-f2a9c181767b":{
		"readableName":"Lead pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"72e5674d-8056-4321-bad5-287c81d5d880":{
		"readableName":"Lead pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"33040759-1059-4ef5-9ebc-dcf9a90bbd6d":{
		"readableName":"Lead square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"fce44a0b-df1b-45f2-bfa8-159bfc00d192":{
		"readableName":"Lead square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"5d9365d3-0598-44c4-b6e2-0dd8c4fd5101":{
		"readableName":"Lead square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"9c7311fb-fbf7-4bb1-a953-7823e38c733c":{
		"readableName":"Lead square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"571c4683-f2d6-4a9e-9e64-b2853a6ad51e":{
		"readableName":"Lead square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"920ca276-3c8c-4558-b9c4-b5d216c15a6a":{
		"readableName":"Lead square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"845a8639-bf04-4550-9524-9dbcaf55a163":{
		"readableName":"Lead square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"b39d779b-02a4-4c66-b6a0-2b712ed5e5ab":{
		"readableName":"Lead square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"9b28100a-6d85-4680-b3f1-e3f068298cd9":{
		"readableName":"Lead triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"ab2d7e9b-c4ee-41d1-84aa-998895dfc28b":{
		"readableName":"Lead triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"2ffb6856-1994-422a-b303-bcd9c3d17c07":{
		"readableName":"Lead triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"57dac102-64bb-45fc-9f62-4322315fc29e":{
		"readableName":"Lead triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"a38cee19-5de4-4a83-ad48-54257af58a4e":{
		"readableName":"Lead triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"0bd61bef-d0d3-459e-a1d1-4c899523d45f":{
		"readableName":"Lead triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"24677e74-5178-4fca-bf14-9fb0181014f5":{
		"readableName":"Lead triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"e90a832b-32d6-4695-98a3-70793885d616":{
		"readableName":"Lead triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"6a20f299-6c3e-4406-a859-157075aab08d":{
		"readableName":"Lead wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"b0bb3f96-4f2a-4e9f-8372-a800dc9a10d5":{
		"readableName":"Lead wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"3123cb13-73e9-4d32-89dd-5ce567ee1597":{
		"readableName":"Lead wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"4984255b-5dcf-4bb8-9ea2-917eac36b06d":{
		"readableName":"Lead wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"a1b6a2c6-4bf4-4c18-838e-5564ea0f951d":{
		"readableName":"Lead wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"b0df4001-cae1-49da-b20a-3ec94b8082e1":{
		"readableName":"Lead wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"71a34383-0592-424e-bce2-a017a9b0d32b":{
		"readableName":"Lead wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"5046037e-5c28-4a60-a29f-bc171b3ad1f1":{
		"readableName":"Lead wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"1abc7373-c658-47aa-91ce-ce3242dbf329":{
		"readableName":"Lead wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"54916861-4b52-4fa0-a42c-b08736b7b930":{
		"readableName":"Lead wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"79d73a29-95de-4918-a69f-207149aab6a3":{
		"readableName":"Lead wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"def39d03-c87b-4794-a306-9dc741ff990e":{
		"readableName":"Lead wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Lead Block",
		"mod":"Core Structural"
	},
	"c30ac9c4-8fa1-4812-a56a-1926d2119dc5":{
		"readableName":"Metal 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"6d3e8b3f-b945-47e9-a77d-e0fcd1c61b69":{
		"readableName":"Metal 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"576586fc-3938-4ae9-93a7-6cf74b8efbf2":{
		"readableName":"Metal 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"fc3341c2-66c0-42a1-ad51-4cc572e8c7b5":{
		"readableName":"Metal 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0a0754e4-024e-4622-9a06-506a7f4a6ca3":{
		"readableName":"Metal 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"9102cf1b-8ef1-4c6d-8933-5cd07bd5ca52":{
		"readableName":"Metal 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"8ae14459-075e-4384-bd95-1fef61b4021f":{
		"readableName":"Metal 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"4035532b-9d7b-4570-8ede-68ebfe42418d":{
		"readableName":"Metal 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"3b6e3500-bbdf-4de3-95cc-0eea2495b2be":{
		"readableName":"Metal 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"59a2df51-5afa-4139-9f92-b29e8c8f2546":{
		"readableName":"Metal 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0dc84af2-12e8-4523-b5db-284cfc6b5b45":{
		"readableName":"Metal 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"c36bae1b-3aba-4341-a488-bb4ada6d594a":{
		"readableName":"Metal 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d7767631-2bc3-4a3f-8260-444e37b950aa":{
		"readableName":"Metal 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d6b944ee-04fc-411c-9d22-935d5f4b2440":{
		"readableName":"Metal 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f4c0e758-b44d-48d8-976a-1f8ae33d7969":{
		"readableName":"Metal 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"7e4ef4ba-95ad-4248-a989-59a71a983ce2":{
		"readableName":"Metal 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f8f9f747-7a12-46e5-a7de-e61fec31d2bf":{
		"readableName":"Metal 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"928e927f-d394-453a-824c-24374d883e35":{
		"readableName":"Metal 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"cc4adc34-9881-4d4e-849c-2a05e4b48f2e":{
		"readableName":"Metal 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0d62d218-3370-40c2-b0d8-9052a2e8598f":{
		"readableName":"Metal 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"5bde06fa-3244-4059-8dd1-1efa60c0076f":{
		"readableName":"Metal 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"aeb8c2da-d589-44dc-a4cd-4c4d35543c70":{
		"readableName":"Metal 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f4cbeb0b-fc70-439a-870f-fa9ade1cf913":{
		"readableName":"Metal 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0f9d31f1-b48e-4931-88be-b6368f029ef0":{
		"readableName":"Metal 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"9be3f3e5-4d6f-41b6-9c09-621dff76c7db":{
		"readableName":"Metal 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"b5c51d4d-b881-433a-9290-8c2b2ae491ba":{
		"readableName":"Metal 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"e8b1d941-d737-486c-b53a-76548bb74a2e":{
		"readableName":"Metal 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"3a42ac8c-2c51-429c-a375-5d0f2c41742e":{
		"readableName":"Metal 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"c5550009-2b37-41ff-a788-d413b39376ae":{
		"readableName":"Metal 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d9d0a930-c60a-4cdc-a69b-f9db59003bf4":{
		"readableName":"Metal 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ff73c486-0327-4d3e-bfbf-2cce173e2dd9":{
		"readableName":"Metal 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"8a428506-4727-4049-b71c-731acaffa1f0":{
		"readableName":"Metal 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"e4522ade-004d-4fd3-93b0-9fb0884b3972":{
		"readableName":"Metal 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"06148e1a-1ab1-413b-bcb8-03acac4f51c4":{
		"readableName":"Metal 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d8a658e9-1994-40d0-b988-2cc754490a31":{
		"readableName":"Metal 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0358dee0-2d87-4b29-bb73-5c9e3399fd4e":{
		"readableName":"Metal 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"de7aab07-7fec-438f-872a-d66b0e942b42":{
		"readableName":"Metal 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ffa8a7a0-4f05-40f2-81c2-9fef6b60b349":{
		"readableName":"Metal 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f7667f01-740f-4252-8036-8ec7fcdc89ca":{
		"readableName":"Metal 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"48d61a93-6389-4d25-a5dd-c77ccdd10398":{
		"readableName":"Metal 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"7044722a-bfb2-470c-b2d2-87fc9b121138":{
		"readableName":"Metal 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"b1d536bd-ffb7-4c9a-a4d1-67536a2b5e7c":{
		"readableName":"Metal 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"bd15e298-36b1-44ed-8835-11d70f6de7ac":{
		"readableName":"Metal 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"31055780-b250-4f02-b0c1-92296219e028":{
		"readableName":"Metal 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"4d8b8dca-49ac-4995-b36c-791317b13fc1":{
		"readableName":"Metal 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"a2983545-008e-4926-a54a-89cc56de8f48":{
		"readableName":"Metal 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"5a0d6e26-7939-437f-ba35-33d9b3cf193f":{
		"readableName":"Metal 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0f1a577f-2ad8-47d1-ace0-ae0c6d95a7c6":{
		"readableName":"Metal 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"c531f93d-7309-43d7-ae46-a16ba73efaba":{
		"readableName":"Metal 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f5d7869b-825d-4095-9693-8d78c830d377":{
		"readableName":"Metal 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"2a22f176-01c2-42f2-a7d2-2c7054504aa9":{
		"readableName":"Metal beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"46f54639-5f91-4731-93eb-e5c0a7460538":{
		"readableName":"Metal beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"a7f5d8de-4882-4111-9d01-436493e5b2d8":{
		"readableName":"Metal beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"e5d065f6-907b-450d-b998-213cdc54eec1":{
		"readableName":"Metal beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"0d554a9d-7d06-48b3-8aea-ffaeaa30380a":{
		"readableName":"Metal beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"5548037e-8428-43f8-bcb6-d730dbcd0a79":{
		"readableName":"Metal slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"8477bbec-974c-45bf-a1ce-49a48d5b5307":{
		"readableName":"Metal slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"a09be1c6-93fd-4b54-b9ca-62e60efbc818":{
		"readableName":"Metal slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"db9ed060-d556-435b-945c-19c923e233d3":{
		"readableName":"Metal slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"de50f4f6-3d7e-4d6b-ae34-e6a34b24b104":{
		"readableName":"Metal inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"442f3ea3-c7cd-4759-84ee-a0d2fac5a711":{
		"readableName":"Metal inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"b9d21957-633f-4926-9562-4cfab38badee":{
		"readableName":"Metal inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"91183077-8eac-4e29-a197-9190429ef0ba":{
		"readableName":"Metal inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ac09f902-8921-4a58-aad5-c679706697f6":{
		"readableName":"Metal inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"2ddec223-13c2-4bf9-ba05-66338c51bd45":{
		"readableName":"Metal inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"5f07c608-acf2-4cc5-97d0-1a0a96acb9e3":{
		"readableName":"Metal inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"098917ec-d86a-4cee-9c65-7997295bc248":{
		"readableName":"Metal inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"a753d0bc-78d2-4034-bba5-8298a967d45c":{
		"readableName":"Metal Plate Slope",
		"searchableName":"slopedmetalplate",
		"reference":"Metal Plate",
		"mod":"Core ACDeco"
	},
	"ec96c0cd-ceb8-4d66-8002-c3914947ee9b":{
		"readableName":"Metal Plate Triangle L",
		"searchableName":"metalplatetrianglel",
		"reference":"Metal Plate",
		"mod":"Core ACDeco"
	},
	"e1d0c17b-9877-47a2-b5aa-d88db60781ca":{
		"readableName":"Metal Plate Triangle R",
		"searchableName":"metalplatetriangler",
		"reference":"Metal Plate",
		"mod":"Core ACDeco"
	},
	"ad00935b-e95c-4345-8ea7-646846bc16db":{
		"readableName":"Metal pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f4ec0bf4-1037-4b56-b1d1-c48f528f1767":{
		"readableName":"Metal pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"fa519e04-e82f-47db-91b8-f78ba4a5ba35":{
		"readableName":"Metal pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ecf87366-edbe-4133-bf8b-d681a67fec92":{
		"readableName":"Metal pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"2f5f91c0-bebf-4de2-bf70-8d9bc1816997":{
		"readableName":"Metal square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f6f120ee-fbc3-49f8-a2a3-a49e8674b8c8":{
		"readableName":"Metal square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d09c2121-c7e4-4d99-9556-02b92d17a652":{
		"readableName":"Metal square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ca924c87-8012-448a-a6c7-a7ff91b0e801":{
		"readableName":"Metal square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"6f820954-63e4-4bc9-a299-8266e712d838":{
		"readableName":"Metal square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"686e9438-d86e-4504-b9f6-7029b264924e":{
		"readableName":"Metal square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"225daaae-6f35-4489-aeb5-73e66e0664a4":{
		"readableName":"Metal square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"b183f553-ce82-47c5-a4ed-6470b83b0d45":{
		"readableName":"Metal square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"bcaf33a4-98c3-41d7-b416-438670e97d53":{
		"readableName":"Metal triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"40659614-1b34-497a-b745-78497e4b2025":{
		"readableName":"Metal triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"6641c0af-44e6-4f6c-8558-f5cdf3c3feee":{
		"readableName":"Metal triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"52a61c5e-07be-4bb9-9649-d3375c66e97e":{
		"readableName":"Metal triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ee18a848-1319-4ff9-b5e5-3f3710635dbf":{
		"readableName":"Metal triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"369eefd9-0c39-412e-a294-d0bb2251c509":{
		"readableName":"Metal triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"a30c0bb3-3f38-46da-8cd3-a813aabaccc9":{
		"readableName":"Metal triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"d48733e2-f003-4643-86a2-cb350fd0dc04":{
		"readableName":"Metal triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"ea2f8200-a920-40fc-9715-d0f66ae5f492":{
		"readableName":"Metal wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"f07f759c-41d1-4095-8054-dc471687884b":{
		"readableName":"Metal wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"5c51a13b-a083-43dd-80ea-f340e6ef88f8":{
		"readableName":"Metal wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"1278df17-e3e8-4d29-aa8d-0f779cb60b1d":{
		"readableName":"Metal wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"69202543-e9d5-41a6-bf9f-96627eafecfa":{
		"readableName":"Mimic Alloy",
		"searchableName":"mimicalloy",
		"reference":"Mimic",
		"mod":"Core Decorations"
	},
	"9a7d5a01-f5a0-4f2e-95e7-0eb222311fb7":{
		"readableName":"Mimic Lead",
		"searchableName":"mimiclead",
		"reference":"Mimic",
		"mod":"Core Decorations"
	},
	"84dce5de-cacc-4ce5-b3fe-498f926c7ea4":{
		"readableName":"Mimic Metal",
		"searchableName":"mimicmetal",
		"reference":"Mimic",
		"mod":"Core Decorations"
	},
	"f0dad246-5282-4041-baa5-32d7500db8bd":{
		"readableName":"Railing L TA 1m M3",
		"searchableName":"railingsloped(1m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"7d3f4791-55ac-4193-bdd3-31286f931ed2":{
		"readableName":"Railing L TA 1m M4",
		"searchableName":"railingdiagonalsloped(1m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"74ceb266-9503-4ede-84eb-0ff10d9bbac8":{
		"readableName":"Railing L TA 2m M1",
		"searchableName":"railingstraight(2m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"26cb0a34-7808-401a-8bf7-2aa84ee9ea4d":{
		"readableName":"Railing L TA 2m M2",
		"searchableName":"railingdiagonal(2m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"63518578-0327-4f4f-8250-0fb4c15b9934":{
		"readableName":"Railing L TA 2m M3",
		"searchableName":"railingsloped(2m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"840d0776-c341-4836-a1f1-6da1e8bff032":{
		"readableName":"Railing L TA 2m M4",
		"searchableName":"railingdiagonalsloped(2m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"39542cab-1b2e-4740-b891-b5c4571294e4":{
		"readableName":"Railing L TA 3m M1",
		"searchableName":"railingstraight(3m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"87df0a0d-21ed-4e30-b68c-d6d70715ba81":{
		"readableName":"Railing L TA 3m M2",
		"searchableName":"railingdiagonal(3m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"b8b3c189-7e1d-434b-8cff-1b1e896ac593":{
		"readableName":"Railing L TA 3m M3",
		"searchableName":"railingsloped(3m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"50fb8aa9-36d9-43a1-9d81-70fbed759a45":{
		"readableName":"Railing L TA 3m M4",
		"searchableName":"railingdiagonalsloped(3m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"9f5dc66c-76d1-448f-9e79-52bf634738ef":{
		"readableName":"Railing L TA 4m M1",
		"searchableName":"railingstraight(4m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"22af3050-6cd5-4ac4-a7e9-5616d1a30bc9":{
		"readableName":"Railing L TA 4m M2",
		"searchableName":"railingdiagonal(4m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"7f6de463-f4ff-4f17-917a-d220b2de3597":{
		"readableName":"Railing L TA 4m M3",
		"searchableName":"railingsloped(4m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"a6f2082d-9c6e-4cba-8a02-ab5e6f77974f":{
		"readableName":"Railing L TA 4m M4",
		"searchableName":"railingdiagonalsloped(4m)",
		"reference":"Railing L TA 1m M2",
		"mod":"Core ACDeco"
	},
	"10797fef-0217-4594-8c33-42cd592ce158":{
		"readableName":"Railing R TA 1m M3",
		"searchableName":"railingsloped(1m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"25b76297-c884-4d6f-b0de-ee8c096912ba":{
		"readableName":"Railing R TA 1m M4",
		"searchableName":"railingdiagonalsloped(1m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"5e2a61b2-6902-4d01-9990-7a1cc0b7f282":{
		"readableName":"Railing R TA 2m M1",
		"searchableName":"railingstraight(2m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"887d4cad-c968-4b01-9252-2c86e99a86c3":{
		"readableName":"Railing R TA 2m M2",
		"searchableName":"railingdiagonal(2m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"6a669c92-32c0-478a-b1ee-f2b3d5751487":{
		"readableName":"Railing R TA 2m M3",
		"searchableName":"railingsloped(2m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"6be28a59-429d-42e6-89c8-811fe1dd531f":{
		"readableName":"Railing R TA 2m M4",
		"searchableName":"railingdiagonalsloped(2m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"56332ca1-d7f8-4b86-abe0-3a1c35387829":{
		"readableName":"Railing R TA 3m M1",
		"searchableName":"railingstraight(3m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"d279f5fa-c310-494f-83f2-a1963e1e7fa0":{
		"readableName":"Railing R TA 3m M2",
		"searchableName":"railingdiagonal(3m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"db0fdd08-9e27-41fd-9db6-4139666a4fa2":{
		"readableName":"Railing R TA 3m M3",
		"searchableName":"railingsloped(3m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"4f69c678-2fc0-426f-bcb4-cd0006bbc7fb":{
		"readableName":"Railing R TA 3m M4",
		"searchableName":"railingdiagonalsloped(3m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"23922e90-9310-44bb-a4b7-1d6911addbf9":{
		"readableName":"Railing R TA 4m M1",
		"searchableName":"railingstraight(4m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"dd381fb7-08b1-470a-a8d7-71889cd792eb":{
		"readableName":"Railing R TA 4m M2",
		"searchableName":"railingdiagonal(4m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"7ececcaf-cfd8-4610-8f78-4eb670a9d03e":{
		"readableName":"Railing R TA 4m M3",
		"searchableName":"railingsloped(4m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"77f70295-fe92-4b9a-b677-c6c9ef061862":{
		"readableName":"Railing R TA 4m M4",
		"searchableName":"railingdiagonalsloped(4m)",
		"reference":"Railing R TA 1m M2",
		"mod":"Core ACDeco"
	},
	"68e160e0-c891-4fc6-a3d6-9b341329f418":{
		"readableName":"Railing TA 1m M2",
		"searchableName":"railingl-shape(4m)",
		"reference":"Railing TA 1m M1",
		"mod":"Core ACDeco"
	},
	"3ec33e9a-b80a-424f-9065-46087c1e4301":{
		"readableName":"Railing TA 1m M3",
		"searchableName":"railingl-shape(4m)",
		"reference":"Railing TA 1m M1",
		"mod":"Core ACDeco"
	},
	"0c5427ca-c9b5-40c9-9ec6-bd7bd0b4e86e":{
		"readableName":"Railing TA 1m M4",
		"searchableName":"railingu-shape(4m)",
		"reference":"Railing TA 1m M1",
		"mod":"Core ACDeco"
	},
	"cd06f23c-9a61-448a-864e-529298e5bbd1":{
		"readableName":"Range Finder (7m) armour",
		"searchableName":"rangefinder(7m)armour",
		"reference":"Range Finder (5m) armour",
		"mod":"Core AI"
	},
	"28e3bb10-95af-4c63-934b-880f03d52be0":{
		"readableName":"Range Finder (7m)",
		"searchableName":"rangefinder(7m)",
		"reference":"Range Finder (5m)",
		"mod":"Core AI"
	},
	"3d540639-ac08-4e71-a233-3b483f594c1b":{
		"readableName":"Range Finder (9m) armour",
		"searchableName":"rangefinder(9m)armour",
		"reference":"Range Finder (5m) armour",
		"mod":"Core AI"
	},
	"933a73ef-fb60-429f-9126-4f7d2a01605f":{
		"readableName":"Range Finder (9m)",
		"searchableName":"rangefinder(9m)",
		"reference":"Range Finder (5m)",
		"mod":"Core AI"
	},
	"1019c502-0f6e-4958-bb30-b78950ca694f":{
		"readableName":"Rubber 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b9de1b74-162b-4c09-81c5-0a85c6d64f4d":{
		"readableName":"Rubber 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"9c64eb53-f66f-4966-a9d7-4208f7b0af71":{
		"readableName":"Rubber 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d7850986-d6a7-4ac5-a448-36b471c33383":{
		"readableName":"Rubber 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"424a1483-28f5-4958-9332-4d373731bcc0":{
		"readableName":"Rubber 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b21ee34b-3080-4715-81d6-af41901585e6":{
		"readableName":"Rubber 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"1a1a821f-33e7-4c06-8989-00e359ecb0db":{
		"readableName":"Rubber 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"50791855-e917-4e2e-ae9c-0fe22fff9018":{
		"readableName":"Rubber 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"8b68280b-3106-43c0-afcb-45058673122a":{
		"readableName":"Rubber 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"9f69a39b-2d16-476b-afa3-935029cea5fb":{
		"readableName":"Rubber 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"a9eaa512-c8e7-4109-b3a9-88bb5065c619":{
		"readableName":"Rubber 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b30c6be9-1c46-4653-b78f-308aefe667cd":{
		"readableName":"Rubber 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"28f4d320-7ff4-4d08-8586-c41c0a53a216":{
		"readableName":"Rubber 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f4a993f3-e9ec-4405-bf36-7ae5d90e6b95":{
		"readableName":"Rubber 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"c0e6ee78-0b7f-43f8-b5b9-3c96306734c6":{
		"readableName":"Rubber 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"bf8156d8-2fc9-4f0f-bb88-11e1024327af":{
		"readableName":"Rubber 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d48cb1f9-f0c5-4709-a151-cef8d7eb9dc1":{
		"readableName":"Rubber 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"43095483-b1be-4a7e-9228-cee78746d6ac":{
		"readableName":"Rubber 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f5e58aea-4550-4ac6-85d5-58b0bec8e720":{
		"readableName":"Rubber 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f5d09c0f-1a85-40ac-a6d8-2f7f7c416657":{
		"readableName":"Rubber 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"e4f8c207-e538-49c3-a17c-af0cedb43b9d":{
		"readableName":"Rubber 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"4731964e-37b7-42d4-a3a5-763abb56d27e":{
		"readableName":"Rubber 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"dafbcb70-da67-4474-ad22-05e73b827572":{
		"readableName":"Rubber 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"25f1eceb-03f4-435e-946e-eec907e768f4":{
		"readableName":"Rubber 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f508e2d8-9a5c-4424-8e60-371f0d31f6e1":{
		"readableName":"Rubber 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"bb192177-bbc8-43a9-a022-28c891148f67":{
		"readableName":"Rubber 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d1664a75-8448-4f05-8163-76773198d770":{
		"readableName":"Rubber 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"69dc80f1-943d-4f60-a011-bfe038c002d9":{
		"readableName":"Rubber 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"087fe9e0-63cb-4511-adc8-5e7b943dd71b":{
		"readableName":"Rubber 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"75fb3a6f-61f7-4336-a978-7037821f9a5c":{
		"readableName":"Rubber 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"07538fcc-c67f-4f0c-8cc6-0de63f3951d1":{
		"readableName":"Rubber 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"47c90188-765d-4b36-a024-5f2910e1a402":{
		"readableName":"Rubber 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f7d2cfac-e4fd-47e3-b852-a61238287b48":{
		"readableName":"Rubber 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"c8bb1819-1763-46d1-83e8-dbdc3d61e612":{
		"readableName":"Rubber 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"253dd48f-7f37-47c2-9497-3e5489c09329":{
		"readableName":"Rubber 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"fe063db5-9a03-4c93-bb4f-c25a4f7c9914":{
		"readableName":"Rubber 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"374dc36e-c905-4a79-968a-b8bdd64ecaf0":{
		"readableName":"Rubber 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"a33738ad-a617-446c-82ae-f657c7ecf471":{
		"readableName":"Rubber 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"23726d51-3f6c-4951-be39-b65fa3388d4e":{
		"readableName":"Rubber 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"0b9e3bd1-4818-4be6-896e-c51587e01012":{
		"readableName":"Rubber 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"c5116acc-11a2-4d7d-b392-8e420fbdb1ed":{
		"readableName":"Rubber 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"8c9d5fcc-4e49-4b14-b9dc-4d8080e75445":{
		"readableName":"Rubber 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b899d054-b4b8-44c9-9f6d-002578dd75cd":{
		"readableName":"Rubber 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"c6f2e2ea-a894-449e-800d-473cb73966cb":{
		"readableName":"Rubber 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"1c289eb1-94d0-4e89-a829-0a979841ca15":{
		"readableName":"Rubber 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b74cf011-75ce-4408-a0c9-d69cbc45f0ac":{
		"readableName":"Rubber 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"7b5cb254-9320-4ed1-82fa-2441ee33867b":{
		"readableName":"Rubber 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"099e452e-baae-40a9-bc40-a2124bb2224f":{
		"readableName":"Rubber 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"aa064b4c-e7a2-4eeb-af1e-153d8ef69b94":{
		"readableName":"Rubber 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"6be71bca-f7ca-4b2e-85a6-d29371bf1b7b":{
		"readableName":"Rubber 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"7e0913f6-9961-4697-b9cb-c87ca8b90dd7":{
		"readableName":"Rubber beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"1fb9209d-f982-4326-847d-f276aef5dce2":{
		"readableName":"Rubber beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"39cf32c0-8fde-4f01-9b68-977624fffe69":{
		"readableName":"Rubber beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"6cc729ae-3c7f-414d-ae3d-58229b99b9ea":{
		"readableName":"Rubber beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"533e9619-9a37-4d1b-b2fb-cc7b57eb3d03":{
		"readableName":"Rubber beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"552d8144-11c0-46e6-8607-927f825b18be":{
		"readableName":"Rubber slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d204f301-7ea9-4bcf-b9e8-34ed899de190":{
		"readableName":"Rubber slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d62bca2a-ffe5-4316-8c43-269e5393db6e":{
		"readableName":"Rubber slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"2a31679e-2d6e-4598-95e2-4016ed834e9c":{
		"readableName":"Rubber slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b55a09cd-3aa8-40b0-b3fa-ae07a6941b77":{
		"readableName":"Rubber inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"0bb9718c-bbe8-4b8d-b1a5-fa0f36041e8d":{
		"readableName":"Rubber inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"7c40569c-b0cd-47ba-b963-06664010253e":{
		"readableName":"Rubber inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"0173899d-e703-414b-bfda-6788d2cdfc08":{
		"readableName":"Rubber inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b39f6e0c-fc73-4e96-83f5-3d5b884f076a":{
		"readableName":"Rubber inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"92d0134d-7fa4-4cf7-9198-f1b0951d1fac":{
		"readableName":"Rubber inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"98f6c067-1d29-4d8b-83d6-62faec838220":{
		"readableName":"Rubber inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"fa3c8603-784c-4a76-9f1a-dbc233e97034":{
		"readableName":"Rubber inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"4da4057d-1f5a-4d82-97dd-10502ae2bb80":{
		"readableName":"Rubber pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b9dc2e43-033c-4520-93e9-9c905bae5729":{
		"readableName":"Rubber pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"25c83f33-5aba-462a-bebe-8f302af1a5ee":{
		"readableName":"Rubber pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"a67de77b-62e2-4262-9aba-835a29c2cdac":{
		"readableName":"Rubber pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"707f2551-c603-4183-b84d-9cd5a4a52f19":{
		"readableName":"Rubber square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"c4d56b61-1df3-4e38-8d2f-ec97ff2c169a":{
		"readableName":"Rubber square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b98d48e3-ab09-4fb3-b0c4-28ec9990de2b":{
		"readableName":"Rubber square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f43c04aa-72f1-4de4-bc28-4c3bd7439fac":{
		"readableName":"Rubber square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"7c89899e-b28d-4032-8e0a-0321ae8c381e":{
		"readableName":"Rubber square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"2c680c33-b254-447a-9155-76eba414d511":{
		"readableName":"Rubber square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"fc42430d-1e52-4825-a115-d603e633f23a":{
		"readableName":"Rubber square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"2f6ea991-33b9-469c-890e-411053fb9a06":{
		"readableName":"Rubber square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"aa8734e8-095a-4105-9436-f76a0c69a02b":{
		"readableName":"Rubber triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"455eb785-58ca-4494-b21a-5f2636908104":{
		"readableName":"Rubber triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"9d8725bf-e97b-4e84-9077-f02c069cdc48":{
		"readableName":"Rubber triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"290e5534-4d14-4b0e-a83f-756d89fc0b2e":{
		"readableName":"Rubber triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"82180117-4e72-4c87-b6d3-6a2f666ae433":{
		"readableName":"Rubber triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"d25b518f-83e6-422f-a479-3acd280ddf43":{
		"readableName":"Rubber triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"3157b109-d0f8-4cd3-a534-40fa2dac03d1":{
		"readableName":"Rubber triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"77a64131-75a3-4912-a9a8-7ece10e2c95a":{
		"readableName":"Rubber triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f9b1d3e4-c4c8-47eb-9547-b4bf3f3ba730":{
		"readableName":"Rubber wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"f4b61ebc-c689-4263-9fde-5f9b705a0525":{
		"readableName":"Rubber wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"8ae27624-fdce-4a7c-bb09-690cce904826":{
		"readableName":"Rubber wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"711936f2-7dba-4537-92aa-c6419b6e8844":{
		"readableName":"Rubber wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"ff29acc9-e565-47eb-875d-c279d73c8c70":{
		"readableName":"Rubber wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"bf52f547-0b50-4e21-b838-57866c33d104":{
		"readableName":"Rubber wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"90822c1a-d4a3-4d62-8405-50b551eed87a":{
		"readableName":"Rubber wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"cdab7fc2-ebf1-4a85-aacf-6fd1c95498a9":{
		"readableName":"Rubber wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"b3d4e1ff-090d-443e-a571-d4b522eed959":{
		"readableName":"Rubber wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"59fa8786-9c0a-4ac4-a15a-a62dd267d9df":{
		"readableName":"Rubber wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"45a4bb52-ab79-4933-a342-ce5858b4d41a":{
		"readableName":"Rubber wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"337792f8-a31a-46de-a022-d9e26ff927a8":{
		"readableName":"Rubber wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Rubber Block",
		"mod":"Core Structural"
	},
	"2d43288e-d05d-4ae8-8929-85ca0bb2d27d":{
		"readableName":"Rudder Attachment",
		"searchableName":"shaftedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"1b59381d-d699-4ead-884f-1e069364bf9b":{
		"readableName":"Rudder Curve Large Huge",
		"searchableName":"2x1curvedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"c947b280-da3e-473d-9727-8294bc7d0821":{
		"readableName":"Rudder Curve Large Small",
		"searchableName":"1x0.5curvedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"b11cc1e0-cef9-42fc-8101-7faedd5cfc63":{
		"readableName":"Rudder Curve Large",
		"searchableName":"1x1curvedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"2ca22754-0636-407b-a101-eb58c78814e3":{
		"readableName":"Rudder Curve Small",
		"searchableName":"0.5x0.5curvedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"242be860-8b25-4bdc-91fd-c1fecba9a7f1":{
		"readableName":"Rudder Square Small",
		"searchableName":"1x0.5ruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"97c962ec-6ae2-4d92-92a4-7b305df835a4":{
		"readableName":"Rudder Trap Large Huge",
		"searchableName":"2x1slopedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"cac80cc3-1d8e-4c2e-b904-09ba3374f940":{
		"readableName":"Rudder Trap Large Small",
		"searchableName":"1x0.5slopedruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"02008b7b-1f99-4333-88f8-bb07a0e7e857":{
		"readableName":"Rudder Triangle Large Small",
		"searchableName":"1x0.5triangleruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"e63736e0-d496-4b0c-a36a-00dba970b829":{
		"readableName":"Rudder Triangle Large",
		"searchableName":"1x1triangleruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"2b58c066-e38e-4a21-af64-17b2bb5bed0d":{
		"readableName":"Rudder Triangle Small Huge",
		"searchableName":"2x0.5triangleruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"1dc0c474-f547-4570-85ed-6dc2f7ab33dd":{
		"readableName":"Rudder Triangle Small",
		"searchableName":"0.5x0.5triangleruddersection",
		"reference":"Rudder Square",
		"mod":"Core Surface"
	},
	"6a8db77a-73a9-45c2-845b-1d3d4804d7ff":{
		"readableName":"Medium transmission mirror",
		"searchableName":"",
		"reference":"Shaft Reduction Gear 3m",
		"mod":"Core SteamEngine"
	},
	"6cf8a940-889d-4caa-9ae4-53c918f4458b":{
		"readableName":"Stone 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"7d3650e9-342f-4008-9677-831b696f062f":{
		"readableName":"Stone 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"7f7dfb16-0d98-462e-898a-71bf5dff0f77":{
		"readableName":"Stone 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"25c27094-7294-4c21-b9ca-d4f470b9f58f":{
		"readableName":"Stone 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"64596359-2a3e-484d-962c-8204beb8bbd8":{
		"readableName":"Stone 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"a6648d34-3f29-4998-b900-9a55dca7b918":{
		"readableName":"Stone 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"c7b1810e-c9ee-414e-9b41-b789c9023b93":{
		"readableName":"Stone 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e3f40e91-96fa-43e6-84a4-8e54a35210b5":{
		"readableName":"Stone 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"4f15965a-ff4c-4423-9d18-1056519d7f32":{
		"readableName":"Stone 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"72858bf1-7523-45ef-8412-5e571bbfddf5":{
		"readableName":"Stone 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"9445a647-5034-4f32-8ae5-b156e6ee1d46":{
		"readableName":"Stone 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"ec22d5da-516b-45d4-965b-873f0ac5e101":{
		"readableName":"Stone 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"c0a0c8ff-a554-4a9e-97ea-e0e1aa3cb99c":{
		"readableName":"Stone 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e183a579-7839-4226-83c1-99ddeb5540cc":{
		"readableName":"Stone 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"dde01453-fb08-4818-a85e-d56cb3a3e060":{
		"readableName":"Stone 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"810a82d5-0dd6-4a3e-8426-b5dc34ca27ea":{
		"readableName":"Stone 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"da9f856c-d8f1-46be-ae04-1e527bdd60f2":{
		"readableName":"Stone 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"3e31d403-1ae3-466f-8c1f-d0a1c8e213eb":{
		"readableName":"Stone 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"ccacc040-9525-4240-ae6e-dd45cb749462":{
		"readableName":"Stone 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"969cd026-e5d6-407f-9877-70f60092b9a4":{
		"readableName":"Stone 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e5fddc8d-d1e4-470e-af8e-3039d5aa1173":{
		"readableName":"Stone 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"d010466a-44bc-4572-96fb-94ae72f93009":{
		"readableName":"Stone 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"1dfa3fef-9e64-4ee4-b6a8-e89df1bba0fa":{
		"readableName":"Stone 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"957eb503-8d98-456f-b6fb-876fa06ebdca":{
		"readableName":"Stone 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"dcf13dfe-2d18-4c7e-a5f1-2304df008aa2":{
		"readableName":"Stone 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"2eb50cb8-4b24-4f4a-9da1-82dcf43f79b2":{
		"readableName":"Stone 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"55639e97-ed09-4703-bbad-b9aaa9f6a872":{
		"readableName":"Stone 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"5ebf9caa-ee7e-476d-b45d-33ca3f5ea93a":{
		"readableName":"Stone 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"79c7b25d-b286-445f-9942-b1bcabbedc05":{
		"readableName":"Stone 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"19a7c9e2-b1cb-414c-bc9d-c6510fd4ee76":{
		"readableName":"Stone 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"068b569a-72bb-43c5-98e9-400ba47154cf":{
		"readableName":"Stone 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"27e6ec03-6de1-4d6c-886e-1ff33403651d":{
		"readableName":"Stone 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"56816490-49a9-4766-b317-c1109331baf7":{
		"readableName":"Stone 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"526f6cb0-0c6f-4de0-8e6a-c409ced014d0":{
		"readableName":"Stone 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"c5aaf2f4-ccf1-4c34-9ebf-a16eb5451920":{
		"readableName":"Stone 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"6b0d80a1-06ea-47f6-a09f-a59084e985fb":{
		"readableName":"Stone 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"64b961b7-0117-4db2-8b94-2f89db082909":{
		"readableName":"Stone 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"b199d3d7-8c91-4b6b-aa60-d4b8da77309f":{
		"readableName":"Stone 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"2ff15f2f-5787-4bf5-92e3-95ee5160903e":{
		"readableName":"Stone 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"67c856b2-b954-4e1b-9402-16213636aef2":{
		"readableName":"Stone 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"ca2f5ae8-2b47-4de7-986c-e50dde3f4783":{
		"readableName":"Stone 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"1488e9ed-e89b-4902-883e-bc4a0613ed72":{
		"readableName":"Stone 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"d2e37b39-512a-44c2-ab7d-99bf8d18c569":{
		"readableName":"Stone 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"2133124d-dc7e-436f-bca5-19f6b7c1da87":{
		"readableName":"Stone 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"0b98aca0-1db4-4545-a43a-37fdf57a346f":{
		"readableName":"Stone 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"def31246-d999-49f8-9daf-acacd802d3ec":{
		"readableName":"Stone 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e640d817-209a-42af-b478-7627a06296cc":{
		"readableName":"Stone 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"5bef17ae-6cad-4034-b063-82e25e24566a":{
		"readableName":"Stone 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e0a33722-5b20-4f51-9c34-7a05fecc20ba":{
		"readableName":"Stone 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"fa398fc2-0458-4e18-be78-9d34ca85d62f":{
		"readableName":"Stone 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"6cd6c6bd-da8b-483f-ace2-fa427a07d91a":{
		"readableName":"Stone beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"d47815a1-9052-4885-8d17-8c9cb3eab72b":{
		"readableName":"Stone beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"c7a19161-b361-4074-8c51-2398a0a70d1b":{
		"readableName":"Stone beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"ca247c84-51a6-4435-a327-38afb91eb13e":{
		"readableName":"Stone beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"dec02cea-91bb-41fe-9241-8c99711ce1f1":{
		"readableName":"Stone beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"11fcac17-e3b9-47d5-aeb8-2224d86b2f1d":{
		"readableName":"Stone slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"66aa8853-094a-41ef-aa96-a2d658b21305":{
		"readableName":"Stone slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"9e204cce-876c-4d9d-af0e-65ec39cf1ba4":{
		"readableName":"Stone slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"cf8b2e90-abe7-4a4f-9596-253364004394":{
		"readableName":"Stone slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"fd702655-7c67-42e7-b2ff-c53d134c3b3f":{
		"readableName":"Stone inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"c4c6b83c-f147-46a9-9a20-d3273c5890cd":{
		"readableName":"Stone inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"3d2afcd1-3c4f-43a2-a23f-ec76fb00b2d7":{
		"readableName":"Stone inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"fa0e8280-a5f8-45ea-b861-a14cdd3a9151":{
		"readableName":"Stone inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"5227e81c-c16e-474a-9d9f-2311b88b84e2":{
		"readableName":"Stone inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"95b6ce46-fb5b-46b0-b270-3894a6dd22e4":{
		"readableName":"Stone inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"a60e954e-6b51-4a57-9d1f-f9dcdf31ab4c":{
		"readableName":"Stone inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"aae589dd-4a56-4749-887b-dd4e3f7144e7":{
		"readableName":"Stone inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"e62d5f04-5c7a-4524-b97d-d60504babb2f":{
		"readableName":"Stone pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"a1ec94dd-9495-467a-8f4f-d173ab20ae00":{
		"readableName":"Stone pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"1403e1cd-1b91-4ccb-bb57-eebf1b1e0b16":{
		"readableName":"Stone pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"305982c6-9839-419f-954d-1c84740dbf05":{
		"readableName":"Stone pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"d6b09745-b47f-460b-ad9b-5aaec46b3871":{
		"readableName":"Stone square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"a90d3d6b-9daf-41d8-8b67-9356a95f02bd":{
		"readableName":"Stone square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"8ee6e0a8-3ac9-4020-adc8-2b7edd4bd38d":{
		"readableName":"Stone square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"2a0ce564-9c8e-4784-8d35-9b9e36b30c02":{
		"readableName":"Stone square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"851e472d-1e20-4fc9-a3b3-eb9ccd12d15f":{
		"readableName":"Stone square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"fe8eabc0-0813-42f1-a816-442b0c45b9c8":{
		"readableName":"Stone square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"4b3b94cd-eb73-4d94-a226-a1b7a927261d":{
		"readableName":"Stone square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"21be97ec-39e7-4ad3-9644-3a7a6cf396ad":{
		"readableName":"Stone square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"386512bc-237b-4faa-a989-323c270dec4c":{
		"readableName":"Stone triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"f64a64e3-7668-4610-b065-96fea40d221b":{
		"readableName":"Stone triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"985cbecd-1778-4296-a640-1b58c7958452":{
		"readableName":"Stone triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"9aa01c12-8093-436c-a947-1a48297cf60f":{
		"readableName":"Stone triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"7d1cb6b4-963e-4bd8-b069-3c08e6a4aeac":{
		"readableName":"Stone triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"26b8ee96-5312-478f-840e-850961ee25b2":{
		"readableName":"Stone triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"1fc65b9c-7097-4186-be59-ecf1581c10cf":{
		"readableName":"Stone triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"85f92acd-49e2-42b7-aa9a-fb1059976163":{
		"readableName":"Stone triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"0630b5e3-d51b-4441-8533-c054e018ee64":{
		"readableName":"Stone wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"79bd4565-912e-478e-95e8-2c8305c13d5e":{
		"readableName":"Stone wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"4dd25db2-deca-4751-8c22-c5163b231a3e":{
		"readableName":"Stone wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"97b930b4-913f-41b9-bc28-a7713c68410b":{
		"readableName":"Stone wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"2456a5f2-7ee9-469e-924f-eb45db0f6850":{
		"readableName":"Stone wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"8dac1274-e61e-4db1-ab93-38acfa5747f9":{
		"readableName":"Stone wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"3bcf1786-92ae-4fea-b8d4-aec131d0c342":{
		"readableName":"Stone wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"cfc729fc-8799-4b3c-a590-e3fd0d0ef79f":{
		"readableName":"Stone wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"f17b9bf1-9ab9-45b4-8efb-8a847770bd1b":{
		"readableName":"Stone wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"411cca8d-244b-446b-86e9-2bf219d557e8":{
		"readableName":"Stone wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"08a5210f-5710-4552-a8a4-d7894fded8d4":{
		"readableName":"Stone wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"ed94d7a4-c054-42aa-97b0-c946519fc313":{
		"readableName":"Stone wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Stone Block",
		"mod":"Core Structural"
	},
	"de17ff79-e670-4f08-ab59-df1ecac3905b":{
		"readableName":"Truss 2m",
		"searchableName":"2mtruss",
		"reference":"Truss 1m",
		"mod":"Core ACDeco"
	},
	"ac24cd04-449e-47b9-bf8c-bf58d9997264":{
		"readableName":"Truss 3m",
		"searchableName":"3mtruss",
		"reference":"Truss 1m",
		"mod":"Core ACDeco"
	},
	"1dd66387-6293-4fa0-a1da-6f0e4cb80dfa":{
		"readableName":"Truss 4m",
		"searchableName":"4mtruss",
		"reference":"Truss 1m",
		"mod":"Core ACDeco"
	},
	"a6ad7eaa-e826-42d5-b4f5-7358a842623f":{
		"readableName":"Alloy wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"f5e7ac10-3c0c-4999-8287-07245ee81062":{
		"readableName":"Alloy wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"c855c2f8-716b-44ba-901f-2dbfb4bf1612":{
		"readableName":"Alloy wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"bdf96eb8-6d43-4b2e-8610-68952484ca04":{
		"readableName":"Alloy wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"020fae5d-c759-4456-87e6-7e423752a427":{
		"readableName":"Alloy wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"80a0edf3-97c0-4bf6-bfc3-80dc68525080":{
		"readableName":"Alloy wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"47f51fca-7668-45b9-8201-51541110833e":{
		"readableName":"Alloy wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"91f61454-6e53-4df0-9ced-e4d86a98ab88":{
		"readableName":"Alloy wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Light-weight Alloy Block",
		"mod":"Core Structural"
	},
	"58a13b46-73a4-45f8-8bc0-0cc250ffd813":{
		"readableName":"Metal wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"1b599425-cbc5-4313-8b1a-9485e01fb4c8":{
		"readableName":"Metal wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"9e02bc1c-fddd-47b8-9cd8-3b6dc335e409":{
		"readableName":"Metal wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"55a250be-b928-46cf-8349-5d60a42eb721":{
		"readableName":"Metal wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"1515cb7e-56cf-4802-a33e-7c984d6cd93c":{
		"readableName":"Metal wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"61c573f4-b67e-4159-9aec-22bddf355770":{
		"readableName":"Metal wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"713802e0-da59-4df3-97ce-ae733a1156da":{
		"readableName":"Metal wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"26bfbbd1-4c8d-4b46-9732-ebd05eea321b":{
		"readableName":"Metal wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Metal Block",
		"mod":"Core Structural"
	},
	"4996676f-deef-4bf3-9329-ef4f562c1902":{
		"readableName":"Wing 1m",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"7047d22e-8f85-4cda-9f4f-6af3e8399b27":{
		"readableName":"Wing 2m",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"df7ab21c-f0ed-4d37-9348-67c652239a48":{
		"readableName":"Wing 3m",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"accbfca6-ba3b-49df-83e3-96007b1dc571":{
		"readableName":"Wing 4m",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"fc010d1b-1c19-40e3-92dd-0f18c816b066":{
		"readableName":"Wing corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"aa09f129-19dd-4f9e-b1e6-b7739fe12d3f":{
		"readableName":"Wing corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"41053b64-a49a-4618-b153-bcc66bf77365":{
		"readableName":"Wing inverted corner left",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"7e8d0314-5433-44ae-a0f6-88356f1ecb9b":{
		"readableName":"Wing inverted corner right",
		"searchableName":"",
		"reference":"Wing middle",
		"mod":"Core Air"
	},
	"5b009725-d904-4884-a498-d29958102b87":{
		"readableName":"Wood 1m offset left",
		"searchableName":"1moffsetl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"09963c07-3c9e-4021-9bc1-cb6d2ac880e1":{
		"readableName":"Wood 1m offset right",
		"searchableName":"1moffsetr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c554e07a-f19f-4851-854e-d54ebda258ba":{
		"readableName":"Wood 1m to 2m inverse transition left",
		"searchableName":"1mto2minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"f321f5bf-6dfd-4ce9-ae9f-6528183db4b1":{
		"readableName":"Wood 1m to 2m inverse transition right",
		"searchableName":"1mto2minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"e44c6776-5dac-42a7-b192-8ede0c18203a":{
		"readableName":"Wood 1m to 2m slope transition left",
		"searchableName":"1mto2mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"7a6b25ce-12f3-4d67-83b9-bc4cc7802e4d":{
		"readableName":"Wood 1m to 2m slope transition right",
		"searchableName":"1mto2mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"ad7546ec-70d2-485d-ba99-44dc2a8dda70":{
		"readableName":"Wood 1m to 3m inverse transition left",
		"searchableName":"1mto3minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"95b25087-ace8-426a-95ad-74023d67e620":{
		"readableName":"Wood 1m to 3m inverse transition right",
		"searchableName":"1mto3minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"e7ff5851-85c1-4707-9902-2051ae5b2975":{
		"readableName":"Wood 1m to 3m slope transition left",
		"searchableName":"1mto3mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"9ebf197b-4961-45e0-b7b4-cfe93e7e8367":{
		"readableName":"Wood 1m to 3m slope transition right",
		"searchableName":"1mto3mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"911a5fe1-bdb9-4024-90be-996c767e6cf2":{
		"readableName":"Wood 1m to 4m inverse transition left",
		"searchableName":"1mto4minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"3af03457-30c9-4205-9288-fad75d44cbc1":{
		"readableName":"Wood 1m to 4m inverse transition right",
		"searchableName":"1mto4minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"d219c03f-fa74-4a9b-b582-2625462a16ba":{
		"readableName":"Wood 1m to 4m slope transition left",
		"searchableName":"1mto4mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"d06af565-8e3c-43ce-8449-b2d07167bbec":{
		"readableName":"Wood 1m to 4m slope transition right",
		"searchableName":"1mto4mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c9d0d3dc-9715-4629-abde-7f178d52f2fd":{
		"readableName":"Wood 2m offset left",
		"searchableName":"2moffsetl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"ab84a940-f992-4172-a4d1-07a9ae7e4a51":{
		"readableName":"Wood 2m offset right",
		"searchableName":"2moffsetr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"4a16b283-3d3d-46c9-aa27-9abd45a2f241":{
		"readableName":"Wood 2m square backed corner left",
		"searchableName":"2msquarebackedcornerl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c79bc8fe-67fd-40d3-ae0a-28230b53d755":{
		"readableName":"Wood 2m square backed corner right",
		"searchableName":"2msquarebackedcornerr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"ec4da327-efca-4d84-9ca3-431d75acbe20":{
		"readableName":"Wood 2m to 3m inverse transition left",
		"searchableName":"2mto3minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"93f3443b-4c84-4f00-bf69-478d553a2d9b":{
		"readableName":"Wood 2m to 3m inverse transition right",
		"searchableName":"2mto3minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"23450f77-e811-4113-9b9a-337b625fc1ac":{
		"readableName":"Wood 2m to 3m slope transition left",
		"searchableName":"2mto3mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"9d534595-f905-463b-b75d-04fc0769ae8e":{
		"readableName":"Wood 2m to 3m slope transition right",
		"searchableName":"2mto3mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"a00c6e9e-6896-4615-bd03-97501c2a1523":{
		"readableName":"Wood 2m to 4m inverse transition left",
		"searchableName":"2mto4minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"6e52d1ad-5e6e-4a7d-ab6e-63bac98c8e6b":{
		"readableName":"Wood 2m to 4m inverse transition right",
		"searchableName":"2mto4minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"2540cbec-8907-4c29-9309-c17707dae5bd":{
		"readableName":"Wood 2m to 4m slope transition left",
		"searchableName":"2mto4mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"8c6a2f06-9091-42c1-badb-2935e75460a1":{
		"readableName":"Wood 2m to 4m slope transition right",
		"searchableName":"2mto4mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"3d15d678-7c66-4bbe-bd1b-d37b7f4904c5":{
		"readableName":"Wood 3m offset left",
		"searchableName":"3moffsetl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"37dc0159-c896-49cd-a018-e0ffc12999dc":{
		"readableName":"Wood 3m offset right",
		"searchableName":"3moffsetr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"69cbf471-a495-4fe4-ae04-bb1bfb1941cc":{
		"readableName":"Wood 3m square backed corner left",
		"searchableName":"3msquarebackedcornerl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"0a76f885-5285-43d3-b057-74eab5f32ee8":{
		"readableName":"Wood 3m square backed corner right",
		"searchableName":"3msquarebackedcornerr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"052d7b61-62db-425c-98c1-5b5b84896586":{
		"readableName":"Wood 3m to 4m inverse transition left",
		"searchableName":"3mto4minversetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"fa0b636f-6b44-48a5-8422-ee6343a34e39":{
		"readableName":"Wood 3m to 4m inverse transition right",
		"searchableName":"3mto4minversetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"6c22d927-8d6c-40ba-b2a7-f42d3d21a793":{
		"readableName":"Wood 3m to 4m slope transition left",
		"searchableName":"3mto4mslopetransitionl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"976fee7f-6dcf-4620-86f0-e103f3b847fb":{
		"readableName":"Wood 3m to 4m slope transition right",
		"searchableName":"3mto4mslopetransitionr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"9100db0a-b961-4ec7-9cb9-b171c3436ec0":{
		"readableName":"Wood 4m offset left",
		"searchableName":"4moffsetl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"5712f568-385b-4d8c-bf66-4f55b7d2099f":{
		"readableName":"Wood 4m offset right",
		"searchableName":"4moffsetr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"5339bbf3-6949-4789-ad65-b1c23becdde1":{
		"readableName":"Wood 4m square backed corner left",
		"searchableName":"4msquarebackedcornerl",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"bf24bb86-7706-4089-a389-39f5a86f13f8":{
		"readableName":"Wood 4m square backed corner right",
		"searchableName":"4msquarebackedcornerr",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"de36c624-8c78-4b52-8d86-431cec16a306":{
		"readableName":"Wood beam (2m)",
		"searchableName":"beam(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"39553630-8281-40e4-96fb-b01c1f3537e6":{
		"readableName":"Wood beam (3m)",
		"searchableName":"beam(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"05475442-0e52-4e0b-9fbb-2715f0e54f97":{
		"readableName":"Wood beam (4m)",
		"searchableName":"beam(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"d077c2a4-4578-4965-9318-c14bb7ac1bd6":{
		"readableName":"Wood beam slope (4m mirrored)",
		"searchableName":"beamslope(4mmirrored)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"2ee817c1-f2a3-407a-847d-b97ffb844e45":{
		"readableName":"Wood beam slope (4m)",
		"searchableName":"beamslope(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"26e35912-060b-4a13-a299-a2b0019ab6bc":{
		"readableName":"Wood Block Variant 2",
		"searchableName":"mastbase",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"e5d3c632-b2dc-4be7-a5bc-623415f76d28":{
		"readableName":"Wood Block Variant 3",
		"searchableName":"mast",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"4927aa86-8882-4b04-8ca7-44052bd00aa9":{
		"readableName":"Wood Block Variant 4",
		"searchableName":"mastalt",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"ee5463c9-b9f8-4438-bb79-7f2364f69b61":{
		"readableName":"Wood Block Variant 5",
		"searchableName":"shutters",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"2db5d925-700e-4375-abcd-f79bb17a1855":{
		"readableName":"Wood Block Variant 6",
		"searchableName":"doubleshutters",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"5a2c1219-d4e6-4bf4-a67d-c2b6478dc1e0":{
		"readableName":"Wood Block Variant 7",
		"searchableName":"endstop",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"b335e984-7bc1-4bb7-a3a6-44139d991f63":{
		"readableName":"Wood Block Variant 8",
		"searchableName":"hpiece",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"1e311aa8-7a58-4ed9-a62e-bf236cf32982":{
		"readableName":"Wood Block Variant 9",
		"searchableName":"board",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"5631c137-ebe8-463b-880b-f7a6992d84d9":{
		"readableName":"Wood Block Variant 10",
		"searchableName":"centerwall",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"e4786dcc-b1d5-4380-a0b9-c55d32ae6d82":{
		"readableName":"Wood Block Variant 11",
		"searchableName":"centerwallalt",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"7854121c-adb3-4615-9646-25ed8bd13b53":{
		"readableName":"Wood Block Variant 12",
		"searchableName":"keel",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"26d9ad5a-baf7-473d-a43a-dcc6e6d7ebf6":{
		"readableName":"Wood Block Variant 13",
		"searchableName":"outsidestep",
		"reference":"Wood Block Variant",
		"mod":"Core Structural"
	},
	"bdafa446-f615-49cb-94f3-d7652dde6cec":{
		"readableName":"Wood slope (1m)",
		"searchableName":"slope(1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"b88679fb-0325-4c85-942f-ad9c6ed6545b":{
		"readableName":"Wood slope (2m)",
		"searchableName":"slope(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"caec26b3-847c-4876-80e1-e6206003ecb5":{
		"readableName":"Wood slope (3m)",
		"searchableName":"slope(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"3296c67d-6ace-44dd-8e86-335b9a90ad80":{
		"readableName":"Wood slope (4m)",
		"searchableName":"slope(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c545a97c-6ac6-4181-a704-28031244aeb1":{
		"readableName":"Wood inverted (R 1m)",
		"searchableName":"inverted(r1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"739ca00f-846e-4521-8923-327dcd800454":{
		"readableName":"Wood inverted (R 3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"17575457-18fa-43e0-a8cb-1331efc1c77e":{
		"readableName":"Wood inverted (L 1m)",
		"searchableName":"inverted(l1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"90ca403c-ddb5-4a55-ac6f-2ca2c970d6ad":{
		"readableName":"Wood inverted (L 2m)",
		"searchableName":"inverted(l2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"cefc210e-a06a-4e34-ace5-d24e5a525592":{
		"readableName":"Wood inverted (L 3m)",
		"searchableName":"inverted(l3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"ba05b02a-f2b2-4c5e-ba73-00a519535763":{
		"readableName":"Wood inverted (L 4m)",
		"searchableName":"inverted(l4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"6cc4ec54-404c-4989-9f85-9b59824faf96":{
		"readableName":"Wood inverted (R 2m)",
		"searchableName":"inverted(r2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"6c6cbf7a-6133-425b-8b29-41471889a67e":{
		"readableName":"Wood inverted triangle corner (right) (3m)",
		"searchableName":"inverted(r3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"fe628646-64da-462c-ac5c-1d4f976a129a":{
		"readableName":"Wood inverted (R 4m)",
		"searchableName":"inverted(r4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"0de95539-4751-4355-88bd-156f17b5f64a":{
		"readableName":"Wood pole (1m)",
		"searchableName":"pole(1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"155d151c-860c-4523-97b4-18a31c7579f1":{
		"readableName":"Wood pole (2m)",
		"searchableName":"pole(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"57af2af7-29ce-4c97-b107-b59edffb6ce5":{
		"readableName":"Wood pole (3m)",
		"searchableName":"pole(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"40509baf-e982-4a03-81dc-994b67ed0919":{
		"readableName":"Wood pole (4m)",
		"searchableName":"pole(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"9c0d97cf-0c99-4565-a931-b1c5bdf8fc1b":{
		"readableName":"Wood square corner (L 1m)",
		"searchableName":"squarecorner(l1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c7b07df3-6afe-4616-9dd4-64f7687e98e9":{
		"readableName":"Wood square corner (L 2m)",
		"searchableName":"squarecorner(l2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"63fd0968-5f9e-4afd-bde5-0a7f36645ce5":{
		"readableName":"Wood square corner (L 3m)",
		"searchableName":"squarecorner(l3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"27e60f25-016f-49ca-a7f2-8b1e194f1d78":{
		"readableName":"Wood square corner (L 4m)",
		"searchableName":"squarecorner(l4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"f878fa09-cb47-4e1c-8f1e-df2544a6882a":{
		"readableName":"Wood square corner (R 1m)",
		"searchableName":"squarecorner(r1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"12bfb5a0-772e-4d14-bb1a-00077211f70b":{
		"readableName":"Wood square corner (R 2m)",
		"searchableName":"squarecorner(r2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"d61cc329-1652-4b93-9756-ac4380e5bd04":{
		"readableName":"Wood square corner (R 3m)",
		"searchableName":"squarecorner(r3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"7d55bbc8-8692-40ee-944b-6b172680075a":{
		"readableName":"Wood square corner (R 4m)",
		"searchableName":"squarecorner(r4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"1ae7e9fe-c0c4-4bb4-a0d6-28e21789a66c":{
		"readableName":"Wood triangle corner (L 1m)",
		"searchableName":"trianglecorner(l1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"dee106ea-3e91-4b03-92ef-33038c5681a0":{
		"readableName":"Wood triangle corner (L 2m)",
		"searchableName":"trianglecorner(l2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"93cbaa78-9185-424f-814b-b568c3358316":{
		"readableName":"Wood triangle corner (L 3m)",
		"searchableName":"trianglecorner(l3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"ae98ddb2-901d-402b-8ab0-149b778acdb8":{
		"readableName":"Wood triangle corner (L 4m)",
		"searchableName":"trianglecorner(l4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"6448ddc8-a3df-465f-b819-52f1cf347983":{
		"readableName":"Wood triangle corner (R 1m)",
		"searchableName":"trianglecorner(r1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"92159a6b-a1b6-4f8b-9c08-503f2cbbd572":{
		"readableName":"Wood triangle corner (R 2m)",
		"searchableName":"trianglecorner(r2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"1e8bb65d-51b6-42bb-813c-1fba696454e8":{
		"readableName":"Wood triangle corner (R 3m)",
		"searchableName":"trianglecorner(r3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"e2ea58d4-ee32-432b-8086-29bf5675e5f7":{
		"readableName":"Wood triangle corner (R 4m)",
		"searchableName":"trianglecorner(r4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"0b73f42f-ff32-4654-8857-aa13413bff33":{
		"readableName":"Wood wedge (1m)",
		"searchableName":"wedge(1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"0cc588ec-037a-4eb1-b498-9f49a0669a36":{
		"readableName":"Wood wedge (2m)",
		"searchableName":"wedge(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"c82449ab-668c-4720-a641-381877751984":{
		"readableName":"Wood wedge (3m)",
		"searchableName":"wedge(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"2daf5d7e-b7bc-4017-bc0d-6fe32a676fa0":{
		"readableName":"Wood wedge (4m)",
		"searchableName":"wedge(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"f97c324f-e10c-43e6-91a3-5480500ff374":{
		"readableName":"Wood wedge back (1m)",
		"searchableName":"wedgeback(1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"e1a58b43-e0e0-4be9-8359-f54d5d15d1fa":{
		"readableName":"Wood wedge back (2m)",
		"searchableName":"wedgeback(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"dc01bf01-a961-48a4-9534-59dfa050538d":{
		"readableName":"Wood wedge back (3m)",
		"searchableName":"wedgeback(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"1fdae3d6-8960-4083-b122-44b110eea762":{
		"readableName":"Wood wedge back (4m)",
		"searchableName":"wedgeback(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"df546ee5-c317-4b04-8ea4-63f59f16bfd1":{
		"readableName":"Wood wedge front (1m)",
		"searchableName":"wedgefront(1m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"f1902ab2-589a-47a9-99e0-dbba65d82a6b":{
		"readableName":"Wood wedge front (2m)",
		"searchableName":"wedgefront(2m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"51474420-0731-4753-9693-3825fa906f4d":{
		"readableName":"Wood wedge front (3m)",
		"searchableName":"wedgefront(3m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	},
	"804b465e-e137-48f7-b1ca-6452034ce285":{
		"readableName":"Wood wedge front (4m)",
		"searchableName":"wedgefront(4m)",
		"reference":"Wood Block",
		"mod":"Core Structural"
	}
};
