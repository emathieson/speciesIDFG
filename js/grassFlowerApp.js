//beginning values for quiz variables
userAnswer = null;
color = null;
noColor = null;
ywo = null;
ppb = null;
white = null;
yellowOrange = null;
narrow = null;
ovoid = null;
yellowPetals = null;
noCup = null;
many = null;
one = null;
blue = null;
ppr = null;
spike = null;
noSpine = null;
solid = null;
thin = null;
noSpike = null;
grass = null;
vertical = null;
noVertical = null;


//must set initial value
correctAnswer = 'speciesname';
speciesImage = null;
quizResult = 'boof';


// questions
G1 = 'Does it have a colored flower or not?';
G2 = 'Is it yellow, white, or orange OR is it pink, purple, or blue?';
G3 = 'Is it white OR is it orange or yellow?';
G4 = 'Does it grow on land or in the water?';
G5 = 'How are the petals shaped?';
G6 = 'Does it have yellow petals or red-tipped petals?';
G7 = 'Can you see a large brown disk in the center?';
G8 = 'Does it have a separate cup in the middle?';
G9 = 'Is the flower orange or yellow?';
G10 = 'Does the stem have many flowers or only one?';
G11 = 'Are its flowers blue OR are they pink or red?';
G12 = 'Are its flowers trumpet-like or pea-like?';
G13 = 'Is it arranged in a spike or in a cluster?';
G14 = 'Are its flowers bluish-purple flowers or deep pink?';
G15 = 'Does the flower head have a spiny bract?';
G16 = 'Are the petals solid colored or crested with yellow?';
G17 = 'Are its leaves thick and succulent?';
G18 = 'Does the flower have a pink or yellow pistil?';
G19 = 'Do the leaves have sharp spikes?';
G20 = 'Are its leaves fern-like or grass-like?';
G21 = 'Does it flower on a vertical spike?';
G22 = 'Does the flower look like a cylindar or like wheat?';
G23 = 'Do the flowers grow along a stem or in a panicle?';

// answers
G1A = 'Colored flower';     //sets question to G2  //color = true
G1B = 'No colored flowers'; //sets question to G19 //noColor = true

G2A = 'Yellow, white, or orange flowers'; //sets question to G3  //ywo = true
G2B = 'Pink, purple, or blue flowers';    //sets question to G10 //ppb = true

G3A = 'White flowers ';           //sets question to G4  //white = true
G3B = 'Yellow or orange flowers'; //sets question to G5  //yellowOrange = true

G4A = 'Land' ; //sets userAnswer to DAISY		//id = 1
G4B = 'Water'; //sets userAnswer to WATER LILY  //id = 2

G5A = 'Long, narrow petals';   //sets question to G6  //narrow = true
G5B = 'Rounded, ovoid petals'; //sets question to G8  //ovoid = true

G6A = 'Yellow petals ';    //sets question to G7    //yellowPetals = true
G6B = 'Red-tipped petals'; //sets userAnswer to PAINTBRUSH   //id = 3

G7A = 'No brown disk';    //sets userAnswer to DANDELION        //id = 4
G7B = 'Large brown disk ';//sets userAnswer to GIANT SUNFLOWER  //id = 5

G8A = 'Cup in middle';    //sets userAnswer to DAFFODIL			//id = 6
G8B = 'No cup in middle'; //sets question to G9   //noCup = true

G9A = 'Yellow flower'; //sets userAnswer to BUTTERCUP			//id = 7
G9B = 'Orange flower'; //sets userAnswer to POPPY				//id = 8

G10A = 'Many flowers'; //sets question to G11  //many = true
G10B = 'One flower';   //sets question to G15  //one = true

G11A = 'Blue flowers ';                //sets question to G12  //blue = true
G11B = 'Pink, purple, or red flowers'; //sets question to G13  //ppr = true

G12A = 'Trumpet-like flowers'; //sets userAnswer to BLUEBELL	//id = 9
G12B = 'Pea-like flowers';     //sets userAnswer to LUPINE		//id = 10

G13A = 'Flowers in spike';   //sets question to G14    //spike = true
G13B = 'Flowers in cluster'; //sets userAnswer to SHOOTING STAR	//id = 11

G14A = 'Bluish-purple flowers'; //sets userAnswer to WATER HYACINTH		//id = 12
G14B = 'Deep pink flowers';     //sets userAnswer to FIREWEED			//id = 13

G15A = 'Spiny bract';    //sets userAnswer to THISTLE				//id = 14
G15B = 'No spiny bract'; //sets question to G16  //noSpine = true

G16A = 'Crested with yellow'; //sets userAnswer to IRIS				//id = 15
G16B = 'Solid colored';       //sets question to G17  //solid = true

G17A = 'Thick, succulent leaves'; //sets userAnswer to ICE PLANT	id = 16
G17B = 'Thin leaves';             //sets question to G18  //thin = true

G18A = 'Pink pistil';   //sets userAnswer to GERANIUM       //id = 17
G18B = 'Yellow pistil'; //sets userAnswer to VIOLET			//id = 18

G19A = 'Spikes on leaves';    //sets userAnswer to VENUS FLYTRAP  //id = 19
G19B = 'No spikes on leaves'; //sets question to G20  //noSpike = true

G20A = 'Fern-like leaves';  //sets userAnswer to FERN        id = 20
G20B = 'Grass-like leaves'; //sets question to 21   //grass= true

G21A = 'Vertical spike';    //sets question to G22  //vertical = true
G21B = 'No vertical spike'; //sets question to G23  //noVertical = true

G22A = 'Shaped like a cylindar'; //sets userAnswer to CATTAIL   //id = 21
G22B = 'Shaped like wheat';      //sets userAnswer to SEDGE		//id = 22

G23A = 'Panicle'; //sets userAnswer to KENTUCKY BLUEGRASS       //id = 23
G23B = 'Stem';    //sets userAnswer to BUFFALO GRASS            //id = 24


const app = new Vue ({
	el: '#app',
	data: {
		title: 'GRASSES & FLOWERS IDENTIFICATION',
		question: G1,
		answerA: G1A,
		answerB: G1B,
		correctAnswer: correctAnswer,
		quizResult: quizResult,
		speciesImage: './img/gf/' + speciesImage + '.jpg',
		keyNumber: Math.floor((Math.random() * 24) + 1)   //chooses a number between 1 and 24
			},

	methods: {
		//what happens when buttonA is clicked
		buttonA: function(){      
			console.log('Button A was pressed');
			if (this.question == G1) {
				color = true,
				console.log('color is true')};
			if (this.question == G2) {
				ywo = true,
				console.log('ywo is true')};
			if (this.question == G3) {
				white = true,
				console.log('white is true')};
			if (this.question == G4) {
				userAnswer = 'DAISY'
				console.log('Chosen answer is DAISY')};
			if (this.question == G5) {
				narrow = true,
				console.log('narrow is true')};
			if (this.question == G6) {
				yellowPetals = true,
				console.log('yellowPetals is true')};
			if (this.question == G7) {
				userAnswer = 'DANDELION'
				console.log('Chosen answer is DANDELION')};
			if (this.question == G8) {
				userAnswer = 'DAFFODIL'
				console.log('Chosen answer is DAFFODIL')};
			if (this.question == G9) {
				userAnswer = 'BUTTERCUP'
				console.log('Chosen asnwer is BUTTERCUP')};
			if (this.question == G10) {
				many = true,
				console.log('many is true')};
			if (this.question == G11) {
				blue = true
				console.log('blue is true')};
			if (this.question == G12) {
				userAnswer = 'BLUEBELL'
				console.log('Chosen answer is BLUEBELL')};
			if (this.question == G13) {
				spike = true,
				console.log('spike is true')};
			if (this.question == G14) {
				userAnswer = 'WATER HYACINTH'
				console.log('Chosen answer is WATER HYACINTH')};
			if (this.question == G15) {
				userAnswer = 'THISTLE'
				console.log('Chosen answer is THISTLE')};
			if (this.question == G16) {
				userAnswer = 'IRIS'
				console.log('Chosen answer is IRIS')};
			if (this.question == G17) {
				userAnswer = 'ICE PLANT'
				console.log('Chosen answer is ICE PLANT')};
			if (this.question == G18) {
				userAnswer = 'GERANIUM'
				console.log('Chosen answer is GERANIUM')};
			if (this.question == G19) {
				userAnswer = 'VENUS FLYTRAP'
				console.log('Chosen answer is VENUS FLYTRAP')};
			if (this.question == G20) {
				userAnswer = 'FERN'
				console.log('Chosen answer is FERN')};
			if (this.question == G21) {
				vertical = true
				console.log('vertical is true')};
			if (this.question == G22) {
				userAnswer = 'CATTAIL'};
			if (this.question == G23) {
				userAnswer = 'KENTUCKY BLUEGRASS'};
			},

		//what happens when buttonB is clicked
		buttonB: function() {      
			console.log('Button B was pressed');
			if (this.question == G1) {
				noColor = true,
			console.log('noColor is true')};
			if (this.question == G2) {
				ppb = true,
				console.log('ppb is true')};
			if (this.question == G3) {
				yellowOrange = true,
				console.log('yellowOrange is true')};
			if (this.question == G4) {
				userAnswer = 'WATER LILY'
				console.log('Chosen answer is WATER LILY')};
			if (this.question == G5) {
				ovoid = true,
				console.log('ovoid is true')};
			if (this.question == G6) {
				userAnswer = 'PAINTBRUSH'
				console.log('Chosen answer is PAINTBRUSH')};
			if (this.question == G7) {
				userAnswer = 'GIANT SUNFLOWER'
				console.log('Chosen answer is GIANT SUNFLOWER')};
			if (this.question == G8) {
				noCup = true,
				console.log('noCup is true')};
			if (this.question == G9) {
				userAnswer = 'POPPY'
				console.log('Chosen asnwer is POPPY')};
			if (this.question == G10) {
				one = true,
				console.log('one is true')};
			if (this.question == G11) {
				ppr = true
				console.log('ppr is true')};
			if (this.question == G12) {
				userAnswer = 'LUPINE'
				console.log('Chosen answer is LUPINE')};
			if (this.question == G13) {
				userAnswer = 'SHOOTING STAR'
				console.log('Chosen asnwer is SHOOTING STAR')};
			if (this.question == G14) {
				userAnswer = 'FIREWEED'
				console.log('Chosen answer is FIREWEED')};
			if (this.question == G15) {
				noSpine = true,
				console.log('noSpine is true')};
			if (this.question == G16) {
				solid = true,
				console.log('solid is true')};
			if (this.question == G17) {
				thin = true,
				console.log('thin is true')};
			if (this.question == G18) {
				userAnswer = 'VIOLET'
				console.log('Chosen answer is VIOLET')};
			if (this.question == G19) {
				noSpike = true,
				console.log('noSpike is true')};
			if (this.question == G20) {
				grass = true,
				console.log("grass is true")};
			if (this.question == G21) {
				noVertical = true
				console.log('noVertical is true')};
			if (this.question == G22) {
				userAnswer = 'SEDGE'};
			if (this.question == G23) {
				userAnswer = 'BUFFALO GRASS'};
			},

		//what happens after either buttonA or buttonB is clicked, updates to the correct question
		updateQuestion: function(){      
			if (color == true && this.question == G1) {
				this.question = G2;
				this.answerA = G2A;
				this.answerB = G2B; 
				document.getElementById("li19").style.display = "none"; 
				document.getElementById("li20").style.display = "none"; 
				document.getElementById("li21").style.display = "none"; 
				document.getElementById("li22").style.display = "none"; 
				document.getElementById("li23").style.display = "none"; 
				document.getElementById("li24").style.display = "none"; 
			}
			else if(noColor == true && this.question == G1) {
				this.question = G19;
				this.answerA = G19A;
				this.answerB = G19B;
				document.getElementById("li1").style.display = "none"; 
				document.getElementById("li2").style.display = "none"; 
				document.getElementById("li3").style.display = "none"; 
				document.getElementById("li4").style.display = "none"; 
				document.getElementById("li5").style.display = "none"; 
				document.getElementById("li6").style.display = "none"; 
				document.getElementById("li7").style.display = "none"; 
				document.getElementById("li8").style.display = "none"; 
				document.getElementById("li9").style.display = "none"; 
				document.getElementById("li10").style.display = "none"; 
				document.getElementById("li11").style.display = "none"; 
				document.getElementById("li12").style.display = "none"; 
				document.getElementById("li13").style.display = "none"; 
				document.getElementById("li14").style.display = "none"; 
				document.getElementById("li15").style.display = "none"; 
				document.getElementById("li16").style.display = "none"; 
				document.getElementById("li17").style.display = "none"; 
				document.getElementById("li18").style.display = "none"; 
			}
			else if (ywo == true && this.question == G2) {
				this.question = G3;
				this.answerA = G3A;
				this.answerB = G3B;
				document.getElementById("li9").style.display = "none";
				document.getElementById("li10").style.display = "none"; 
				document.getElementById("li11").style.display = "none"; 
				document.getElementById("li12").style.display = "none"; 
				document.getElementById("li13").style.display = "none"; 
				document.getElementById("li14").style.display = "none"; 
				document.getElementById("li15").style.display = "none"; 
				document.getElementById("li16").style.display = "none"; 
				document.getElementById("li17").style.display = "none";  
				document.getElementById("li18").style.display = "none"; 
			}
			else if (ppb == true && this.question == G2) {
				this.question = G10;
				this.answerA = G10A;
				this.answerB = G10B;
				document.getElementById("li1").style.display = "none"; 
				document.getElementById("li2").style.display = "none"; 
				document.getElementById("li3").style.display = "none"; 
				document.getElementById("li4").style.display = "none"; 
				document.getElementById("li5").style.display = "none"; 
				document.getElementById("li6").style.display = "none"; 
				document.getElementById("li7").style.display = "none"; 
				document.getElementById("li8").style.display = "none"; 
			}
			else if (white == true && this.question == G3) {
				this.question = G4;
				this.answerA = G4A;
				this.answerB = G4B;
				document.getElementById("li3").style.display = "none"; 
				document.getElementById("li4").style.display = "none"; 
				document.getElementById("li5").style.display = "none"; 
				document.getElementById("li6").style.display = "none"; 
				document.getElementById("li7").style.display = "none"; 
				document.getElementById("li8").style.display = "none"; 
			}
			else if (yellowOrange == true && this.question == G3) {
				this.question = G5;
				this.answerA = G5A;
				this.answerB = G5B;
				document.getElementById("li1").style.display = "none"; 
				document.getElementById("li2").style.display = "none"; 
			}
			else if (narrow == true && this.question == G5) {
				this.question = G6;
				this.answerA = G6A;
				this.answerB = G6B;
				document.getElementById("li6").style.display = "none"; 
				document.getElementById("li7").style.display = "none"; 
				document.getElementById("li8").style.display = "none"; 
			}
			else if (ovoid == true && this.question == G5) {
				this.question = G8;
				this.answerA = G8A;
				this.answerB = G8B;
				document.getElementById("li3").style.display = "none"; 
				document.getElementById("li4").style.display = "none"; 
				document.getElementById("li5").style.display = "none"; 
			}
			else if (yellowPetals == true && this.question == G6) {
				this.question = G7;
				this.answerA = G7A;
				this.answerB = G7B;
				document.getElementById("li3").style.display = "none"; 
			}
			else if (noCup == true && this.question == G8) {
				this.question = G9;
				this.answerA = G9A;
				this.answerB = G9B;
				document.getElementById("li6").style.display = "none"; 
			}
			else if (many == true && this.question == G10) {
				this.question = G11;
				this.answerA = G11A;
				this.answerB = G11B;
				document.getElementById("li14").style.display = "none"; 
				document.getElementById("li15").style.display = "none"; 
				document.getElementById("li16").style.display = "none"; 
				document.getElementById("li17").style.display = "none"; 
				document.getElementById("li18").style.display = "none"; 
			}
			else if (one == true && this.question == G10) {
				this.question = G15;
				this.answerA = G15A;
				this.answerB = G15B;
				document.getElementById("li9").style.display = "none"; 
				document.getElementById("li10").style.display = "none"; 
				document.getElementById("li11").style.display = "none"; 
				document.getElementById("li12").style.display = "none"; 
				document.getElementById("li13").style.display = "none"; 
			}
			else if (blue == true && this.question == G11) {
				this.question = G12;
				this.answerA = G12A;
				this.answerB = G12B;
				document.getElementById("li11").style.display = "none"; 
				document.getElementById("li12").style.display = "none"; 
				document.getElementById("li13").style.display = "none"; 
				document.getElementById("li14").style.display = "none"; 
				document.getElementById("li15").style.display = "none"; 
				document.getElementById("li16").style.display = "none"; 
				document.getElementById("li17").style.display = "none"; 
				document.getElementById("li18").style.display = "none"; 
			}
			else if (ppr == true && this.question == G11) {
				this.question = G13;
				this.answerA = G13A;
				this.answerB = G13B;
				document.getElementById("li9").style.display = "none"; 
				document.getElementById("li10").style.display = "none"; 
			}
			else if (spike == true && this.question == G13) {
				this.question = G14;
				this.answerA = G14A;
				this.answerB = G14B;
				document.getElementById("li11").style.display = "none"; 
			}
			else if (noSpine == true && this.question == G15) {
				this.question = G16;
				this.answerA = G16A;
				this.answerB = G16B;
				document.getElementById("li14").style.display = "none"; 
			}
			else if (solid == true && this.question == G16) {
				this.question = G17;
				this.answerA = G17A;
				this.answerB = G17B;
				document.getElementById("li15").style.display = "none"; 
			}
			else if (thin == true && this.question == G17) {
				this.question = G18;
				this.answerA = G18A;
				this.answerB = G18B;
				document.getElementById("li16").style.display = "none"; 
			}
			else if (noSpike == true && this.question == G19) {
				this.question = G20;
				this.answerA = G20A;
				this.answerB = G20B;
				document.getElementById("li19").style.display = "none"; 
			}
			else if (grass == true && this.question == G20) {
				this.question = G21;
				this.answerA = G21A;
				this.answerB = G21B;
				document.getElementById("li20").style.display = "none"; 
			}
			else if (vertical == true && this.question == G21) {
				this.question = G22;
				this.answerA = G22A;
				this.answerB = G22B;
				document.getElementById("li23").style.display = "none"; 
				document.getElementById("li24").style.display = "none"; 
			}
			else if (noVertical == true && this.question == G21) {
				this.question = G23;
				this.answerA = G23A;
				this.answerB = G23B;
				document.getElementById("li21").style.display = "none"; 
				document.getElementById("li22").style.display = "none"; 
			}
		},

		//this happens everytime a button is pressed, to see if a final answer was chosen
		checkAnswer: function() {       
			if (userAnswer == null) {
				console.log('No answer chosen yet')}
			else if (userAnswer != null && this.correctAnswer == userAnswer) {
				this.quizResult = 'Correct!';
				console.log('Correct!');
				document.getElementById("tryAgain").style.display="none";
				document.getElementById("fieldGuideButtonA").style.display="inline-block";
				document.getElementById("answerResultsMenu").style.zIndex = "3";
				document.getElementById("quizResultText").innerHTML = "You correctly identified the " + this.correctAnswer + "!";
			}
			else if (userAnswer !=null && this.correctAnswer != userAnswer) {
				console.log('Incorrect!');
				document.getElementById("tryAgain").style.display="inline-block";
				document.getElementById("fieldGuideButtonA").style.display="none";
				document.getElementById("answerResultsMenu").style.zIndex = "3";
				this.quizResult = 'Incorrect!';
				document.getElementById("quizResultText").innerHTML = "You did not correctly identify this species.";
			};
				
		},

		//these are for the buttons for the species select menu
		//tried making one reusable function using argument, but could not get it to work
		setG1: function() {
				this.correctAnswer = 'DAISY';
				this.speciesImage = './img/gf/daisy.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG2: function() {
				this.correctAnswer = 'WATER LILY';
				this.speciesImage = './img/gf/waterlily.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG3: function() {
				this.correctAnswer = 'PAINTBRUSH';
				this.speciesImage = './img/gf/paintbrush.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG4: function() {
				this.correctAnswer = 'DANDELION';
				this.speciesImage = './img/gf/dandelion.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG5: function() {
				this.correctAnswer = 'GIANT SUNFLOWER';
				this.speciesImage = './img/gf/giantsunflower.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG6: function() {
				this.correctAnswer = 'DAFFODIL';
				this.speciesImage = './img/gf/daffodil.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG7: function() {
				this.correctAnswer = 'BUTTERCUP';
				this.speciesImage = './img/gf/buttercup.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG8: function() {
				this.correctAnswer = 'POPPY';
				this.speciesImage = './img/gf/poppy.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG9: function() {
				this.correctAnswer = 'BLUEBELL';
				this.speciesImage = './img/gf/bluebell.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG10: function() {
				this.correctAnswer = 'LUPINE';
				this.speciesImage = './img/gf/lupine.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG11: function() {
				this.correctAnswer = 'SHOOTING STAR';
				this.speciesImage = './img/gf/shootingstar.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG12: function() {
				this.correctAnswer = 'WATER HYACINTH';
				this.speciesImage = './img/gf/waterhyacinth.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG13: function() {
				this.correctAnswer = 'FIREWEED';
				this.speciesImage = './img/gf/fireweed.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG14: function() {
				this.correctAnswer = 'THISTLE';
				this.speciesImage = './img/gf/thistle.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG15: function() {
				this.correctAnswer = 'IRIS';
				this.speciesImage = './img/gf/iris.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG16: function() {
				this.correctAnswer = 'ICE PLANT';
				this.speciesImage = './img/gf/iceplant.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG17: function() {
				this.correctAnswer = 'GERANIUM';
				this.speciesImage = './img/gf/geranium.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG18: function() {
				this.correctAnswer = 'VIOLET';
				this.speciesImage = './img/gf/violet.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG19: function() {
				this.correctAnswer = 'VENUS FLYTRAP';
				this.speciesImage = './img/gf/venusflytrap.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG20: function() {
				this.correctAnswer = 'FERN';
				this.speciesImage = './img/gf/fern.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG21: function() {
				this.correctAnswer = 'CATTAIL';
				this.speciesImage = './img/gf/cattail.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG22: function() {
				this.correctAnswer = 'SEDGE';
				this.speciesImage = './img/gf/sedge.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG23: function() {
				this.correctAnswer = 'KENTUCKY BLUEGRASS';
				this.speciesImage = './img/gf/kentuckybluegrass.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},
		setG24: function() {
				this.correctAnswer = 'BUFFALO GRASS';
				this.speciesImage = './img/gf/buffalograss.jpg';
				console.log(this.correctAnswer);
				document.getElementById("speciesSelectMenu").style.zIndex = "-6";
				document.getElementById("answerResultsMenu").style.zIndex = "-7";
		},

		GfMenuSelect: function() {
			console.log('Please select a new gf to identify');
			document.getElementById("speciesSelectMenu").style.zIndex = "3";
			document.getElementById("answerResultsMenu").style.zIndex = "-2";
			this.question = G1;
			this.answerA = G1A;
			this.answerB = G1B;
			userAnswer = null;
			color = null;
			noColor = null;
			ywo = null;
			ppb = null;
			white = null;
			yellowOrange = null;
			narrow = null;
			ovoid = null;
			yellowPetals = null;
			noCup = null;
			many = null;
			one = null;
			blue = null;
			ppr = null;
			spike = null;
			noSpine = null;
			solid = null;
			thin = null;
			noSpike = null;
			grass = null;
			vertical = null;
			noVertical = null;

		},

		//selects a new random correctAnswer and resets initial variable values
		randomGf: function() {
			console.log('A new random gf has been chosen');
			this.question = G1;
			this.answerA = G1A;
			this.answerB = G1B;
			userAnswer = null;
			color = null;
			noColor = null;
			ywo = null;
			ppb = null;
			white = null;
			yellowOrange = null;
			narrow = null;
			ovoid = null;
			yellowPetals = null;
			noCup = null;
			many = null;
			one = null;
			blue = null;
			ppr = null;
			spike = null;
			noSpine = null;
			solid = null;
			thin = null;
			noSpike = null;
			grass = null;
			vertical = null;
			noVertical = null;
			document.getElementById("speciesSelectMenu").style.zIndex = "-6"; //hides speciesSelectMenu if not already hidden
			document.getElementById("answerResultsMenu").style.zIndex = "-7";
			keyNumber = Math.floor((Math.random() * 24) + 1);   //randomly chooses a number between 1 & 24
			console.log(keyNumber);		   //logs the new random gf name
				switch(keyNumber) {        //depending on random number, sets correctAnswer to appropriate value
					case 1:
					this.correctAnswer = 'DAISY'
					this.speciesImage = './img/gf/daisy.jpg'
					break;
					case 2:
					this.correctAnswer = 'WATER LILY'
					this.speciesImage = './img/gf/waterlily.jpg'
					break;
					case 3:
					this.correctAnswer = 'PAINTBRUSH'
					this.speciesImage = './img/gf/paintbrush.jpg'
					break;
					case 4:
					this.correctAnswer = 'DANDELION'
					this.speciesImage = './img/gf/dandelion.jpg'
					break;
					case 5:
					this.correctAnswer = 'GIANT SUNFLOWER'
					this.speciesImage = './img/gf/giantsunflower.jpg'
					break;
					case 6:
					this.correctAnswer = 'DAFFODIL'
					this.speciesImage = './img/gf/daffodil.jpg'
					break;
					case 7:
					this.correctAnswer = 'BUTTERCUP'
					this.speciesImage = './img/gf/buttercup.jpg'
					break;
					case 8:
					this.correctAnswer = 'POPPY'
					this.speciesImage = './img/gf/poppy.jpg'
					break;
					case 9:
					this.correctAnswer = 'BLUEBELL'
					this.speciesImage = './img/gf/bluebell.jpg'
					break;
					case 10:
					this.correctAnswer = 'LUPINE'
					this.speciesImage = './img/gf/lupine.jpg'
					break;
					case 11:
					this.correctAnswer = 'SHOOTING STAR'
					this.speciesImage = './img/gf/shootingstar.jpg'
					break;
					case 12:
					this.correctAnswer = 'WATER HYACINTH'
					this.speciesImage = './img/gf/waterhyacinth.jpg'
					break;
					case 13:
					this.correctAnswer = 'FIREWEED'
					this.speciesImage = './img/gf/fireweed.jpg'
					break;
					case 14:
					this.correctAnswer = 'THISTLE'
					this.speciesImage = './img/gf/thistle.jpg'
					break;
					case 15:
					this.correctAnswer = 'IRIS'
					this.speciesImage = './img/gf/iris.jpg'
					break;
					case 16:
					this.correctAnswer = 'ICE PLANT'
					this.speciesImage = './img/gf/iceplant.jpg'
					break;
					case 17:
					this.correctAnswer = 'GERANIUM'
					this.speciesImage = './img/gf/geranium.jpg'
					break;
					case 18:
					this.correctAnswer = 'VIOLET'
					this.speciesImage = './img/gf/violet.jpg'
					break;
					case 19:
					this.correctAnswer = 'VENUS FLYTRAP'
					this.speciesImage = './img/gf/venusflytrap.jpg'
					break;
					case 20:
					this.correctAnswer = 'FERN'
					this.speciesImage = './img/gf/fern.jpg'
					break;
					case 21:
					this.correctAnswer = 'CATTAIL'
					this.speciesImage = './img/gf/cattail.jpg'
					break;
					case 22:
					this.correctAnswer = 'SEDGE'
					this.speciesImage = './img/gf/sedge.jpg'
					break;
					case 23:
					this.correctAnswer = 'KENTUCKY BLUEGRASS'
					this.speciesImage = './img/gf/kentuckybluegrass.jpg'
					break;
					case 24:
					this.correctAnswer = 'BUFFALO GRASS'
					this.speciesImage = './img/gf/buffalograss.jpg'
					break;
				} 
					console.log(this.correctAnswer);

		},

		resetLi: function() {
			document.getElementById("li1").style.display = "block";
			document.getElementById("li2").style.display = "block";
			document.getElementById("li3").style.display = "block";
			document.getElementById("li4").style.display = "block";
			document.getElementById("li5").style.display = "block";
			document.getElementById("li6").style.display = "block";
			document.getElementById("li7").style.display = "block";
			document.getElementById("li8").style.display = "block";
			document.getElementById("li9").style.display = "block";
			document.getElementById("li10").style.display = "block";
			document.getElementById("li11").style.display = "block";
			document.getElementById("li12").style.display = "block";
			document.getElementById("li13").style.display = "block";
			document.getElementById("li14").style.display = "block";
			document.getElementById("li15").style.display = "block";
			document.getElementById("li16").style.display = "block";
			document.getElementById("li17").style.display = "block";
			document.getElementById("li18").style.display = "block";
			document.getElementById("li19").style.display = "block";
			document.getElementById("li20").style.display = "block";
			document.getElementById("li21").style.display = "block";
			document.getElementById("li22").style.display = "block";
			document.getElementById("li23").style.display = "block";
			document.getElementById("li24").style.display = "block";
		},

		//resets variable values and question/answer
		resetGf: function() {
			console.log('Your quiz has been reset');
			this.question = G1;
			this.answerA = G1A;
			this.answerB = G1B;
			userAnswer = null;
			color = null;
			noColor = null;
			ywo = null;
			ppb = null;
			white = null;
			yellowOrange = null;
			narrow = null;
			ovoid = null;
			yellowPetals = null;
			noCup = null;
			many = null;
			one = null;
			blue = null;
			ppr = null;
			spike = null;
			noSpine = null;
			solid = null;
			thin = null;
			noSpike = null;
			grass = null;
			vertical = null;
			noVertical = null;
			document.getElementById("speciesSelectMenu").style.zIndex = "-6";
			document.getElementById("answerResultsMenu").style.zIndex = "-7";
			
		},

		chooseLi1: function() {
			userAnswer = 'DAISY';
		},
		chooseLi2: function() {
			userAnswer = 'WATER LILY';
		},
		chooseLi3: function() {
			userAnswer = 'PAINTBRUSH';
		},
		chooseLi4: function() {
			userAnswer = 'DANDELION';
		},
		chooseLi5: function() {
			userAnswer = 'GIANT SUNFLOWER';
		},
		chooseLi6: function() {
			userAnswer = 'DAFFODIL';
		},
		chooseLi7: function() {
			userAnswer = 'BUTTERCUP';
		},
		chooseLi8: function() {
			userAnswer = 'POPPY';
		},
		chooseLi9: function() {
			userAnswer = 'BLUEBELL';
		},
		chooseLi10: function() {
			userAnswer = 'LUPINE';
		},
		chooseLi11: function() {
			userAnswer = 'SHOOTING STAR';
		},
		chooseLi12: function() {
			userAnswer = 'WATER HYACINTH';
		},
		chooseLi13: function() {
			userAnswer = 'FIREWEED';
		},
		chooseLi14: function() {
			userAnswer = 'THISTLE';
		},
		chooseLi15: function() {
			userAnswer = 'IRIS';
		},
		chooseLi16: function() {
			userAnswer = 'ICE PLANT';
		},
		chooseLi17: function() {
			userAnswer = 'GERANIUM';
		},
		chooseLi18: function() {
			userAnswer = 'VIOLET';
		},
		chooseLi19: function() {
			userAnswer = 'VENUS FLYTRAP';
		},
		chooseLi20: function() {
			userAnswer = 'FERN';
		},
		chooseLi21: function() {
			userAnswer = 'CATTAIL';
		},
		chooseLi22: function() {
			userAnswer = 'SEDGE';
		},
		chooseLi23: function() {
			userAnswer = 'KENTUCKY BLUEGRASS';
		},
		chooseLi24: function() {
			userAnswer = 'BUFFALO GRASS';
		},

		
	}
});
		

