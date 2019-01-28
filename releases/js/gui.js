function setup () {
	createCanvas(1200, 630)
	stelarMass = createInput("1", "number")
		.position(80, 20)
		.style("width", "70px")
	starOrbit = createButton("OrbitGen")
		.position(210, 260)
		.mousePressed(orbitGen)
	starManual = createButton("OrbitMan")
		.position(130, 260)
		.mousePressed(orbitMan)
	planetMass = createInput("1", "number")
		.position(380, 20)
		.style("width", "70px")
	planetRadius = createInput("1", "number")
		.position(380, 50)
		.style("width", "70px")
	planetAxis = createInput("1", "number")
		.position(510, 20)
		.style("width", "70px")
	planetEcc = createInput("0.016", "number")
		.position(510, 80)
		.style("width", "70px")
	moonType = createRadio()
		.position(630, 18)
		.style("width", "150px")
		.style("color", "white")
		.style("font-family", "sans-serif")
		.style("font-size", "12px")
	moonType.option("Major", true)
	moonType.option("Minor", false)
	moonType.selected("true")
	moonDensities = [createInput("45.4", "number"), 
					 createInput("14.9", "number"), 
					 createInput("11.8", "number"), 
					 createInput("14.1", "number"), 
					 createInput("9.2", "number"), 
					 createInput("3.9", "number"), 
					 createInput("0.6", "number"), 
					 createInput("0", "number"), 
					 ]
	for (let i = 0; i < 8; i++) {
		let inp = moonDensities[i]
		inp.position(810, 50 + (30 * i))
		inp.style("width", "50px")
	}
	moonRadius = [createInput(".273", "number"),
				  createInput("0", "number"),
				  createInput("0", "number"),
				  ]
	for (let i = 0; i < 3; i++) {
		let inp = moonRadius[i]
		inp.position(680, 80 + (30 * i))
		inp.style("width", "70px")
	}
	moonDensity = createInput("0", "number")
		.position(680, 50)
		.style("width", "70px")
	moonAxis = createInput("60.34", "number")
		.position(680, 230)
		.style("width", "70px")
	moonbitEx = createSlider(1, 50, 1)
		.position(915, 280)
		.style("width", "280px")
	starbitEx = createSlider(1, 4.3, 1, 0.01)
		.position(305, 310)
		.style("width", "300px")
	resType = createRadio()
		.position(930, 318)
		.style("width", "150px")
		.style("color", "white")
		.style("font-family", "sans-serif")
		.style("font-size", "12px")
	resType.option("Planet", true)
	resType.option("Moon", false)
	resType.selected("true")
	resOne = createInput("1", "number")
		.position(1020, 350)
		.style("width", "30px")
	resTwo = createInput("1", "number")
		.position(1066, 350)
		.style("width", "30px")
	resGo = createButton("Resonate")
		.position(1020, 400)
		.mousePressed(resGen)
	resGen()
	techReset = createButton("Defaults")
		.position(15, 612)
		.mousePressed(function () { tech(0) })
}

var tLim = 1005

var star = {M:0, R:0, p:0, L:0, T:0, HZ:[0, 0], color:"#000000", o:[], FL:0}
var planet = {M:0, R:0, g:0, p:0, HS:0, RL:0, a:0, HAB:false}
var moon = {p:0, R:[0, 0, 0], M:0, a:0, VAL:false}
var res = {a:[0, 0], p:[0, 0]}

star.L = 1
star.HZ[0] = (star.L / 1.1) ** 0.5
star.HZ[1] = (star.L / 0.53) ** 0.5
star.o = [.307, .723, 1, 1.524, 2.75, 5, 5.204, 9.583, 19.218, 30.11, star.HZ[0], star.HZ[1]]
star.FL = 5
star.GG = 5.204

function draw () {
	background(51, 0, 0)
	
	star.M = float(stelarMass.value())
	if (star.M <= 0) {
		stelarMass.value(0.1)
		star.M = 0.1
	} else {
		star.R = star.M ** 0.5
		if (star.M > 1)
			star.R = star.M ** 0.8
		star.p = star.M / (star.R ** 3)
		star.L = star.M ** 3.5
		star.T = ((star.L / (star.R ** 2)) ** .25) * 5778
		star.HZ[0] = (star.L / 1.1) ** 0.5
		star.HZ[1] = (star.L / 0.53) ** 0.5
		
		planet.M = float(planetMass.value())
		planet.R = float(planetRadius.value())
		planet.g = planet.M / (planet.R ** 2)
		planet.p = planet.g / planet.R
		planet.HS = (planet.a * ((planet.M / star.M) ** 0.33)) * 235
		planet.RL = (2.44 * planet.R) * ((planet.p / star.p) ** 0.33)
		planet.a = float(planetAxis.value())
		
		densities = [2.648, 3.987, 3.34, 5.745, 3.6, 4.23, 2.27, 0.9340]
		moon.p = 0
		if (boolean(moonType.value())) {
			for (let i = 0; i < 8; i++)
				moon.p += densities[i] * (moonDensities[i].value() / 100)
		} else {
			moon.p = moonDensity.value()
		}
		for (let i = 0; i < 3; i++)
			moon.R[i] = moonRadius[i].value()
		if (!boolean(moonType.value())) {
			moon.M = (((4/3) * TWO_PI) * moon.p * moon.R[0]
												* moon.R[1]
												* moon.R[2]
												* (1000 ** 3))
		} else {
			moon.M = (moon.R[0] ** 3) * moon.p
		}
		moon.a = moonAxis.value()
		
		orbits()
		starbits()
		moonbits()
		starBox()
		planetBox()
		moonBox()
		resBox()
		techBox()
	}
}

function techBox () {
	fill(0)
	noStroke()
	rect(0, 600, 1200, 30)
	fill(255)
	textAlign(RIGHT, CENTER)
	let cw = "Program by Jenni Zimmerle, 2018. "
	if (mouseY > 595 && mouseY < 630) {
		if (mouseX > tLim && mouseX < 1200) {
			cw += "/ Equations courtesy of                              . "
			cw += "/ Libraries Used:         ,             "
			fill(200)
			text("Edgar Grunewald                              p5.js  Ratio.js", 1195, 615)
			fill(255)
			tLim = 620
		} else {
			tLim = 1005
		}
	} else {
		tLim = 1005
	}
	text(cw, 1195, 615)
	document.body.style.cursor = "default";
	if (mouseY > 605 && mouseY < 620) {
		if (mouseX > 1122 && mouseX < 1148) {
			document.body.style.cursor = "pointer"
		}
		if (mouseX > 1155 && mouseX < 1195) {
			document.body.style.cursor = "pointer"
		}
		if (mouseX > 929 && mouseX < 1023 && tLim == 620) {
			document.body.style.cursor = "pointer"
		}
	}
}

function tech (action) {
	switch (action) {
		case 0:
			star = {M:0, R:0, p:0, L:0, T:0, HZ:[0, 0], color:"#000000", o:[], FL:0}
			star.L = 1
			star.HZ[0] = (star.L / 1.1) ** 0.5
			star.HZ[1] = (star.L / 0.53) ** 0.5
			star.o = [.307, .723, 1, 1.524, 2.75, 5, 5.204, 9.583, 19.218, 30.11, star.HZ[0], star.HZ[1]]
			star.FL = 5
			star.GG = 5.204
			planet = {M:0, R:0, g:0, p:0, HS:0, RL:0, a:0, HAB:false}
			moon = {p:0, R:[0, 0, 0], M:0, a:0, VAL:false}
			res = {a:[0, 0], p:[0, 0]}
			stelarMass.value(1)
			planetMass.value(1)
			planetRadius.value(1)
			planetAxis.value(1)
			planetEcc.value(0.016)
			moonType.selected("true")
			moonDensities[0].value(45.4)
			moonDensities[1].value(14.9)
			moonDensities[2].value(11.8)
			moonDensities[3].value(14.1)
			moonDensities[4].value(9.2)
			moonDensities[5].value(3.9)
			moonDensities[6].value(0.6)
			moonDensities[7].value(0)
			moonRadius[0].value(.273)
			moonRadius[1].value(0)
			moonRadius[2].value(0)
			moonDensity.value(0)
			moonAxis.value(60.34)
			moonbitEx.value(1)
			resType.selected("true")
			resOne.value(1)
			resTwo.value(1)
			break
	}
}

function mousePressed () {
	if (mouseY > 605 && mouseY < 620) {
		if (mouseX > 1122 && mouseX < 1148) {
			window.open("https://p5js.org/", "_blank")
		}
		if (mouseX > 1155 && mouseX < 1195) {
			window.open("https://github.com/LarryBattle/Ratio.js", "_blank")
		}
		if (mouseX > 929 && mouseX < 1023) {
			window.open("https://www.artifexian.com/", "_blank")
		}
	}
}

