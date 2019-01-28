
// x: 70, 200, 75, 205
// y: 21, 51, 81, 111, 141, 171, 201, 231, 261
// rect: x, y - 7, 50, 14

function starBox () {	
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(0, 0, 300, 300)
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Mass:", 70, 21)
	text("Radius:", 70, 51)
	text("Circ:", 70, 81)
	text("Area:", 70, 111)
	text("Volume:", 70, 141)
	text("Density:", 70, 171)
	text("Class:", 200, 21)
	text("Lumin:", 200, 51)
	text("Lifespan:", 200, 81)
	text("Temp(SOL):", 200, 111)
	text("Temp(K):", 200, 141)
	text("Color:", 200, 171)
	text("H Zone:", 70, 231)
	fill(200)
	textAlign(LEFT, CENTER)
	let m = star.M
	let r = star.R
	text(nf(r, 0, 4), 75, 51)
	text(nf(r, 0, 5), 75, 81)
	text(nf(r ** 2, 0, 5), 75, 111)
	text(nf(r ** 3, 0, 5), 75, 141)
	text(nf(m / (r ** 3), 0, 5), 75, 171)
	let l = star.L
	text(nf(l, 0, 4), 205, 51)
	text(nf(m / l, 0, 4) + " x 10^10", 205, 81)
	let t = star.T / 5778
	text(nf(t, 0, 4), 205, 111)
	t *= 5778
	text(nf(t, 0, 4), 205, 141)
	text(nf(star.HZ[0], 0, 5), 75, 231)
	text("-", 130, 231)
	text(nf(star.HZ[1], 0, 5), 145, 231)
	let c = "UNDEFINED"
	if (m >= 0.08 && m < 0.45)
		c = "M"
	if (m >= 0.45 && m < 0.8)
		c = "K"
	if (m >= 0.8 && m < 1.04)
		c = "G"
	if (m >= 1.04 && m < 1.4)
		c = "F"
	if (m >= 1.4 && m < 2.1)
		c = "A"
	if (m >= 2.1 && m < 16)
		c = "B"
	if (m >= 16)
		c = "O"
	text(c, 205, 21)
	star.color = "#000000"
	if (t >= 2400 && t < 3700)
		star.color = "#ffcc6f"
	if (t >= 3700 && t < 5200)
		star.color = "#ffd2a1"
	if (t >= 5200 && t < 6000)
		star.color = "#fff4ea"
	if (t >= 6000 && t < 7500)
		star.color = "#f8f7ff"
	if (t >= 7500 && t < 10000)
		star.color = "#cad7ff"
	if (t >= 10000 && t < 30000)
		star.color = "#aabfff"
	if (t >= 30000)
		star.color = "#9bb0ff"
	fill(star.color)
	rect(205, 164, 50, 14)
	fill(51)
	text(star.color, 206, 171)
}

function planetBox () {
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(300, 0, 300, 300)
	sx = 300
	sy = 0
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Mass:", sx + 70, sy + 21)
	text("Radius:", sx + 70, sy + 51)
	text("Gravity:", sx + 70, sy + 81)
	text("Density:", sx + 70, sy + 111)
	text("R Limit:", sx + 70, sy + 171)
	text("Hill Sphere:", sx + 70, sy + 201)
	text("a:", sx + 200, sy + 21)
	text("b:", sx + 200, sy + 51)
	text("e:", sx + 200, sy + 81)
	text("q:", sx + 200, sy + 111)
	text("Q:", sx + 200, sy + 141)
	text("P:", sx + 200, sy + 171)
	text("v:", sx + 200, sy + 201)
	text("Habitable:", sx + 200, sy + 231)
	text("Ideal e:", sx + 200, sy + 261)
	textAlign(LEFT, CENTER)
	fill(200)
	let m = planet.M
	let r = planet.R
	let g = planet.g
	let p = planet.p
	text(nf(g, 0, 4), sx + 75, sy + 81)
	text(nf(p, 0, 4), sx + 75, sy + 111)
	let sphere = [planet.HS, planet.RL]
	text(nf(sphere[1], 0, 4), sx + 75, sy + 171)
	text(nf(sphere[0], 0, 4), sx + 75, sy + 201)
	let a = planet.a
	let e = float(planetEcc.value())
	let b = a * ((1 - (e ** 2)) ** 0.5)
	text(nf(b, 0, 4), sx + 205, sy + 51)
	text(nf(a * (1 - e), 0, 4), sx + 205, sy + 111)
	text(nf(a * (1 + e), 0, 4), sx + 205, sy + 141)
	text(nf((a ** 3 / star.M) ** 0.5, 0, 4), sx + 205, sy + 171)
	text(nf((star.M / a) ** 0.5, 0, 4), sx + 205, sy + 201)
	textAlign(LEFT)
	let N = star.o.length - 3
	text(nf(0.584 * (N ** -1.2), 0, 4), sx + 205, sy + 261)
	fill(0, 255, 0)
	planet.HAB = true
	for (let n of [a, b, a * (1 - e), a * (1 + e)]) {
		if (n < star.HZ[0] || n > star.HZ[1]) {
			fill(255, 0, 0)
			planet.HAB = false
		}
	}
	rect(sx + 205, sy + 224, 50, 14)
}

function moonBox () {
	if (boolean(moonType.value())) {
		moonRadius[1].elt.disabled = true
		moonRadius[2].elt.disabled = true
		moonDensity.elt.hidden = true
		for (let i of moonDensities)
			i.elt.disabled = false
	} else {
		moonRadius[1].elt.disabled = false
		moonRadius[2].elt.disabled = false
		moonDensity.elt.hidden = false
		for (let i of moonDensities)
			i.elt.disabled = true
	}
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(600, 0, 300, 300)
	noStroke()
	fill(255)
	sx = 600
	sy = 0
	textAlign(RIGHT, CENTER)
	text("Radius:", sx + 70, 81)
	text("Mass:", sx + 70, 171)
	text("Density:", sx + 70, 51)
	text("a:", sx + 70, 231)
	text("P:", sx + 70, 261)
	if (boolean(moonType.value())) {
		text("Gravity:", sx + 70, 201)
		text("Percent:", sx + 200, 21)
		text("Silica:", sx + 200, 51)
		text("Alumina:", sx + 200, 81)
		text("Lime:", sx + 200, 111)
		text("FeO:", sx + 200, 141)
		text("Magnesia:", sx + 200, 171)
		text("TiO2:", sx + 200, 201)
		text("Na2O:", sx + 200, 231)
		text("Water Ice:", sx + 200, 261)
	}
	textAlign(LEFT, CENTER)
	fill(200)
	if (boolean(moonType.value())) {
		let perc = 0
		for (let i of moonDensities)
			perc += float(i.value())
		if (perc < 99.8 || perc > 100)
			fill(255, 0, 0)
		text(nf(perc, 3, 2), sx + 205, 21)
		fill(200)
		text("45.4", sx + 260, 51)
		text("14.9", sx + 260, 81)
		text("11.8", sx + 260, 111)
		text("14.1", sx + 260, 141)
		text("9.2", sx + 260, 171)
		text("3.9", sx + 260, 201)
		text("0.6", sx + 260, 231)
		text("0", sx + 260, 261)
		text(nf(moon.p / 5.514, 0, 2) + " / " + nf(moon.p, 0, 2), sx + 75, 51)
		text(nf(moon.M, 0, 2), sx + 75, 171)
		let g = moon.M / (moon.R[0] ** 2)
		text(nf(g, 0, 2) + " / " + nf(g / 9.807, 0, 2), sx + 75, 201)
		let P = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
		text(nf(P, 0, 2), sx + 75, 261)
	} else {
		text(nf(moon.M / (10 ** 13), 0, 4) + " x 10^13", sx + 75, 171)
		let P = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
		text(nf(P / (10 ** -7), 0, 2) + " x 10^-7", sx + 75, 261)
	}
	noStroke()
	fill(255, 0, 0)
	moon.VAL = false
	if (moon.a > planet.RL && moon.a < planet.HS) {
		fill(0, 255, 0)
		moon.VAL = true
	}
	rect(sx + 47, 226, 10, 10)
}

function orbits () {
	starbitEx.elt.hidden = true
	if (mouseX > 290 && mouseX < 610) {
		if (mouseY > 290 && mouseY < 330) {
			starbitEx.elt.hidden = false
		}
	}
	let exg = starbitEx.value()
	noStroke()
	fill(0, 0, 51)
	rect(0, 300, 900, 300)
	strokeWeight(5)
	noFill()
	stroke(255, 0, 0, 64)
	ellipse(0, 450, 200 * exg, 200 * exg)
	ellipse(0, 450, exg * (2 * 900 - 200), exg * (2 * 900 - 200))	
	let al = []
	let orbs = star.o.slice()
	orbs.push(planet.a)
	for (let o of orbs) {
		noFill()
		let r = map(o, 0.1 * star.M, 40 * star.M, 200, 2 * 900 - 200)
		strokeWeight(3)
		if (![star.FL, star.GG, star.HZ[0], star.HZ[1]].includes(o)) {
			stroke(0)
			ellipse(0, 450, exg * r, exg  *r)
			strokeWeight(2)
		}
		stroke(255)
		if (o == star.FL)
			stroke(0, 255, 255, 64)
		if (o == star.GG)
			stroke(255, 128, 0)
		if (star.HZ.includes(o))
			stroke(0, 255, 0, 64)
		if (o == planet.a) {
			if (validate(planet.a, true))
				stroke(0, 255, 0)
			else
				stroke(255, 0, 0)
		}
		ellipse(0, 450, exg * r, exg * r)
		if (![star.FL, planet.a, star.HZ[0], star.HZ[1]].includes(o))
			al.push(nf(o, 0, 3))
	}
	noStroke()
	fill(star.color)
	ellipse(0, 450, exg * 100, exg * 100)
	textAlign(RIGHT, TOP)
	al.sort(function (a, b) { return a - b })
	let as = al.join("\n")
	text(as, 900 - 5, 305)
}

function orbitGen () {
	// 0.1 * star.M, 40 * star.M
	star.o = []
	star.FL = 4.85 * (star.L ** 0.5)
	star.o.push(star.FL)
	star.GG = random(1, 1.2) + star.FL
	star.o.push(star.GG)
	star.o.push(star.HZ[0])
	star.o.push(star.HZ[1])
	let newO = star.GG
	while (newO < 40 * star.M) {
		newO *= random(1.4, 2)
		if (validate(newO) && newO < 40 * star.M)
			star.o.push(newO)
	}
	newO = star.GG
	while (newO > 0.1 * star.M) {
		newO /= random(1.4, 2)
		if (validate(newO) && newO > 0.1 * star.M)
			star.o.push(newO)
	}
}

function validate (axis, plan=false) {
	if (!plan) {
		for (let o of star.o) {
			if ([star.HZ[0], star.HZ[1], star.FL].includes(o))
				continue
			if (abs(o - axis) <= .15) {
				return false
			}
		}
		return true
	} else {
		for (let o of star.o) {
			if ([star.HZ[0], star.HZ[1], star.FL].includes(o))
				continue
			if (abs(o - axis) <= .05) {
				return true
			}
		}
		return false
	}
}

function orbitMan () {
	while (true) {
		star.o = []
		star.FL = 4.85 * (star.L ** 0.5)
		while (true) {
			let newO = prompt("Frost Line: " + 
							  nf(star.FL, 0, 2) + 
							  "\nEnter an orbit. Leave blank to finish.")
			if (newO)
				star.o.push(newO)
			else
				break
		}
		if (confirm("Are these orbits correct?\n - " + star.o.join("\n - "))) {
			star.o.push(star.FL)
			star.o.push(star.HZ[0])
			star.o.push(star.HZ[1])
			break
		} else
			continue
	}
}

function moonbits (debug=false) {
	moonbitEx.elt.hidden = true
	if (mouseX > 900 && mouseX < 1200) {
		if (mouseY > 260 && mouseY < 310)
			moonbitEx.elt.hidden = false
	}
	let exag = moonbitEx.value()
	
	noStroke()
	fill(0, 0, 51)
	rect(900, 0, 300, 300)
	
	let mid = {x:1050, y:150}
	
	noFill()
	stroke(0, 255, 0, 64)
	strokeWeight(3)
	ellipse(mid.x, mid.y, 280, 280)
	let iScale = map(planet.R + planet.RL, 0, planet.HS, 0, 280)
	ellipse(mid.x, mid.y, iScale, iScale)
	
	let orbit = moon.a
	let oScale = map(orbit, 0, planet.HS, 0, 280)
	stroke(0)
	if (oScale / 2 <= 150 * (2 ** .5))
		ellipse(mid.x, mid.y, oScale, oScale)
	
	noStroke()
// x: 70, 200, 75, 205
// y: 21, 51, 81, 111, 141, 171, 201, 231, 261
// rect: x, y - 7, 50, 14

function starBox () {	
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(0, 0, 300, 300)
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Mass:", 70, 21)
	text("Radius:", 70, 51)
	text("Circ:", 70, 81)
	text("Area:", 70, 111)
	text("Volume:", 70, 141)
	text("Density:", 70, 171)
	text("Class:", 200, 21)
	text("Lumin:", 200, 51)
	text("Lifespan:", 200, 81)
	text("Temp(SOL):", 200, 111)
	text("Temp(K):", 200, 141)
	text("Color:", 200, 171)
	text("H Zone:", 70, 231)
	fill(200)
	textAlign(LEFT, CENTER)
	let m = star.M
	let r = star.R
	text(nf(r, 0, 4), 75, 51)
	text(nf(r, 0, 5), 75, 81)
	text(nf(r ** 2, 0, 5), 75, 111)
	text(nf(r ** 3, 0, 5), 75, 141)
	text(nf(m / (r ** 3), 0, 5), 75, 171)
	let l = star.L
	text(nf(l, 0, 4), 205, 51)
	text(nf(m / l, 0, 4) + " x 10^10", 205, 81)
	let t = star.T / 5778
	text(nf(t, 0, 4), 205, 111)
	t *= 5778
	text(nf(t, 0, 4), 205, 141)
	text(nf(star.HZ[0], 0, 5), 75, 231)
	text("-", 130, 231)
	text(nf(star.HZ[1], 0, 5), 145, 231)
	let c = "UNDEFINED"
	if (m >= 0.08 && m < 0.45)
		c = "M"
	if (m >= 0.45 && m < 0.8)
		c = "K"
	if (m >= 0.8 && m < 1.04)
		c = "G"
	if (m >= 1.04 && m < 1.4)
		c = "F"
	if (m >= 1.4 && m < 2.1)
		c = "A"
	if (m >= 2.1 && m < 16)
		c = "B"
	if (m >= 16)
		c = "O"
	text(c, 205, 21)
	star.color = "#000000"
	if (t >= 2400 && t < 3700)
		star.color = "#ffcc6f"
	if (t >= 3700 && t < 5200)
		star.color = "#ffd2a1"
	if (t >= 5200 && t < 6000)
		star.color = "#fff4ea"
	if (t >= 6000 && t < 7500)
		star.color = "#f8f7ff"
	if (t >= 7500 && t < 10000)
		star.color = "#cad7ff"
	if (t >= 10000 && t < 30000)
		star.color = "#aabfff"
	if (t >= 30000)
		star.color = "#9bb0ff"
	fill(star.color)
	rect(205, 164, 50, 14)
	fill(51)
	text(star.color, 206, 171)
}

function planetBox () {
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(300, 0, 300, 300)
	sx = 300
	sy = 0
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Mass:", sx + 70, sy + 21)
	text("Radius:", sx + 70, sy + 51)
	text("Gravity:", sx + 70, sy + 81)
	text("Density:", sx + 70, sy + 111)
	text("R Limit:", sx + 70, sy + 171)
	text("Hill Sphere:", sx + 70, sy + 201)
	text("a:", sx + 200, sy + 21)
	text("b:", sx + 200, sy + 51)
	text("e:", sx + 200, sy + 81)
	text("q:", sx + 200, sy + 111)
	text("Q:", sx + 200, sy + 141)
	text("P:", sx + 200, sy + 171)
	text("v:", sx + 200, sy + 201)
	text("Habitable:", sx + 200, sy + 231)
	text("Ideal e:", sx + 200, sy + 261)
	textAlign(LEFT, CENTER)
	fill(200)
	let m = planet.M
	let r = planet.R
	let g = planet.g
	let p = planet.p
	text(nf(g, 0, 4), sx + 75, sy + 81)
	text(nf(p, 0, 4), sx + 75, sy + 111)
	let sphere = [planet.HS, planet.RL]
	text(nf(sphere[1], 0, 4), sx + 75, sy + 171)
	text(nf(sphere[0], 0, 4), sx + 75, sy + 201)
	let a = planet.a
	let e = float(planetEcc.value())
	let b = a * ((1 - (e ** 2)) ** 0.5)
	text(nf(b, 0, 4), sx + 205, sy + 51)
	text(nf(a * (1 - e), 0, 4), sx + 205, sy + 111)
	text(nf(a * (1 + e), 0, 4), sx + 205, sy + 141)
	text(nf((a ** 3 / star.M) ** 0.5, 0, 4), sx + 205, sy + 171)
	text(nf((star.M / a) ** 0.5, 0, 4), sx + 205, sy + 201)
	textAlign(LEFT)
	let N = star.o.length - 3
	text(nf(0.584 * (N ** -1.2), 0, 4), sx + 205, sy + 261)
	fill(0, 255, 0)
	planet.HAB = true
	for (let n of [a, b, a * (1 - e), a * (1 + e)]) {
		if (n < star.HZ[0] || n > star.HZ[1]) {
			fill(255, 0, 0)
			planet.HAB = false
		}
	}
	rect(sx + 205, sy + 224, 50, 14)
}

function moonBox () {
	if (boolean(moonType.value())) {
		moonRadius[1].elt.disabled = true
		moonRadius[2].elt.disabled = true
		moonDensity.elt.hidden = true
		for (let i of moonDensities)
			i.elt.disabled = false
	} else {
		moonRadius[1].elt.disabled = false
		moonRadius[2].elt.disabled = false
		moonDensity.elt.hidden = false
		for (let i of moonDensities)
			i.elt.disabled = true
	}
	stroke(0)
	strokeWeight(4)
	fill(51)
	rect(600, 0, 300, 300)
	noStroke()
	fill(255)
	sx = 600
	sy = 0
	textAlign(RIGHT, CENTER)
	text("Radius:", sx + 70, 81)
	text("Mass:", sx + 70, 171)
	text("Density:", sx + 70, 51)
	text("a:", sx + 70, 231)
	text("P:", sx + 70, 261)
	if (boolean(moonType.value())) {
		text("Gravity:", sx + 70, 201)
		text("Percent:", sx + 200, 21)
		text("Silica:", sx + 200, 51)
		text("Alumina:", sx + 200, 81)
		text("Lime:", sx + 200, 111)
		text("FeO:", sx + 200, 141)
		text("Magnesia:", sx + 200, 171)
		text("TiO2:", sx + 200, 201)
		text("Na2O:", sx + 200, 231)
		text("Water Ice:", sx + 200, 261)
	}
	textAlign(LEFT, CENTER)
	fill(200)
	if (boolean(moonType.value())) {
		let perc = 0
		for (let i of moonDensities)
			perc += float(i.value())
		if (perc < 99.8 || perc > 100)
			fill(255, 0, 0)
		text(nf(perc, 3, 2), sx + 205, 21)
		fill(200)
		text("45.4", sx + 260, 51)
		text("14.9", sx + 260, 81)
		text("11.8", sx + 260, 111)
		text("14.1", sx + 260, 141)
		text("9.2", sx + 260, 171)
		text("3.9", sx + 260, 201)
		text("0.6", sx + 260, 231)
		text("0", sx + 260, 261)
		text(nf(moon.p / 5.514, 0, 2) + " / " + nf(moon.p, 0, 2), sx + 75, 51)
		text(nf(moon.M, 0, 2), sx + 75, 171)
		let g = moon.M / (moon.R[0] ** 2)
		text(nf(g, 0, 2) + " / " + nf(g / 9.807, 0, 2), sx + 75, 201)
		let P = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
		text(nf(P, 0, 2), sx + 75, 261)
	} else {
		text(nf(moon.M / (10 ** 13), 0, 4) + " x 10^13", sx + 75, 171)
		let P = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
		text(nf(P / (10 ** -7), 0, 2) + " x 10^-7", sx + 75, 261)
	}
	noStroke()
	fill(255, 0, 0)
	moon.VAL = false
	if (moon.a > planet.RL && moon.a < planet.HS) {
		fill(0, 255, 0)
		moon.VAL = true
	}
	rect(sx + 47, 226, 10, 10)
}

function orbits () {
	starbitEx.elt.hidden = true
	if (mouseX > 290 && mouseX < 610) {
		if (mouseY > 290 && mouseY < 330) {
			starbitEx.elt.hidden = false
		}
	}
	let exg = starbitEx.value()
	noStroke()
	fill(0, 0, 51)
	rect(0, 300, 900, 300)
	strokeWeight(5)
	noFill()
	stroke(255, 0, 0, 64)
	ellipse(0, 450, 200 * exg, 200 * exg)
	ellipse(0, 450, exg * (2 * 900 - 200), exg * (2 * 900 - 200))	
	let al = []
	let orbs = star.o.slice()
	orbs.push(planet.a)
	for (let o of orbs) {
		noFill()
		let r = map(o, 0.1 * star.M, 40 * star.M, 200, 2 * 900 - 200)
		strokeWeight(3)
		if (![star.FL, star.GG, star.HZ[0], star.HZ[1]].includes(o)) {
			stroke(0)
			ellipse(0, 450, exg * r, exg  *r)
			strokeWeight(2)
		}
		stroke(255)
		if (o == star.FL)
			stroke(0, 255, 255, 64)
		if (o == star.GG)
			stroke(255, 128, 0)
		if (star.HZ.includes(o))
			stroke(0, 255, 0, 64)
		if (o == planet.a) {
			if (validate(planet.a, true))
				stroke(0, 255, 0)
			else
				stroke(255, 0, 0)
		}
		ellipse(0, 450, exg * r, exg * r)
		if (![star.FL, planet.a, star.HZ[0], star.HZ[1]].includes(o))
			al.push(nf(o, 0, 3))
	}
	noStroke()
	fill(star.color)
	ellipse(0, 450, exg * 100, exg * 100)
	textAlign(RIGHT, TOP)
	al.sort(function (a, b) { return a - b })
	let as = al.join("\n")
	text(as, 900 - 5, 305)
}

function orbitGen () {
	// 0.1 * star.M, 40 * star.M
	star.o = []
	star.FL = 4.85 * (star.L ** 0.5)
	star.o.push(star.FL)
	star.GG = random(1, 1.2) + star.FL
	star.o.push(star.GG)
	star.o.push(star.HZ[0])
	star.o.push(star.HZ[1])
	let newO = star.GG
	while (newO < 40 * star.M) {
		newO *= random(1.4, 2)
		if (validate(newO) && newO < 40 * star.M)
			star.o.push(newO)
	}
	newO = star.GG
	while (newO > 0.1 * star.M) {
		newO /= random(1.4, 2)
		if (validate(newO) && newO > 0.1 * star.M)
			star.o.push(newO)
	}
}

function validate (axis, plan=false) {
	if (!plan) {
		for (let o of star.o) {
			if ([star.HZ[0], star.HZ[1], star.FL].includes(o))
				continue
			if (abs(o - axis) <= .15) {
				return false
			}
		}
		return true
	} else {
		for (let o of star.o) {
			if ([star.HZ[0], star.HZ[1], star.FL].includes(o))
				continue
			if (abs(o - axis) <= .05) {
				return true
			}
		}
		return false
	}
}

function orbitMan () {
	while (true) {
		star.o = []
		star.FL = 4.85 * (star.L ** 0.5)
		while (true) {
			let newO = prompt("Frost Line: " + 
							  nf(star.FL, 0, 2) + 
							  "\nEnter an orbit. Leave blank to finish.")
			if (newO)
				star.o.push(newO)
			else
				break
		}
		if (confirm("Are these orbits correct?\n - " + star.o.join("\n - "))) {
			star.o.push(star.FL)
			star.o.push(star.HZ[0])
			star.o.push(star.HZ[1])
			break
		} else
			continue
	}
}

function starbits () {
	
}

function moonbits (debug=false) {
	moonbitEx.elt.hidden = true
	if (mouseX > 900 && mouseX < 1200) {
		if (mouseY > 260 && mouseY < 310)
			moonbitEx.elt.hidden = false
	}
	let exag = moonbitEx.value()
	
	noStroke()
	fill(0, 0, 51)
	rect(900, 0, 300, 300)
	
	let mid = {x:1050, y:150}
	
	noFill()
	stroke(0, 255, 0, 64)
	strokeWeight(3)
	ellipse(mid.x, mid.y, 280, 280)
	let iScale = map(planet.R + planet.RL, 0, planet.HS, 0, 280)
	if (iScale / 2 <= 150 * (2 ** .5))
		ellipse(mid.x, mid.y, iScale, iScale)
	
	let orbit = moon.a
	let oScale = map(orbit, 0, planet.HS, 0, 280)
	stroke(0)
	if (oScale / 2 <= 150 * (2 ** .5)) 
		ellipse(mid.x, mid.y, oScale, oScale)
	
	let pScale = map(planet.R, 0, planet.HS, 0, 280)
	let mr = moon.R[0]
	if (!boolean(moonType.value())) {
		fill(100, 70, 0)
		mr = ((float(moon.R[0]) + 
		       float(moon.R[1]) + 
			   float(moon.R[2])) / 3) / 6371
	}
	let mScale = map(mr, 0, planet.HS, 0, 280)
	
	noStroke()
	fill(100)
	if (planet.HAB)
		fill(0, 0, 200)
	else if (planet.a > star.FL)
		fill(200, 100, 0)
	if ((pScale * exag) / 2 <= 150 * (2 ** .5)) {
		if ((mScale * exag) / 2 <= 150 * (2 ** .5))
			ellipse(mid.x, mid.y, pScale * exag, pScale * exag)
	} else {
		noStroke()
		fill(255, 0, 0)
		textAlign(CENTER, CENTER)
		text("ERROR DISPLAYING PLANET", mid.x, mid.y - 10)
	}
	
	fill(70)
	if ((mScale * exag) / 2 <= 150 * (2 ** .5)) {
		if ((pScale * exag) / 2 <= 150 * (2 ** .5))
			ellipse(mid.x - (oScale / 2), mid.y, mScale * exag, mScale * exag)
	} else {
		noStroke()
		fill(255, 0, 0)
		textAlign(CENTER, CENTER)
		text("ERROR DISPLAYING MOON", mid.x, mid.y + 10)
	}
	
	if (debug) {
		console.log("i", iScale)
		console.log("o", oScale)
		console.log("p", pScale)
		console.log("m", mScale)
		console.log("e", exag)
	}
}

function resBox () {
	stroke(0)
	strokeWeight(5)
	fill(51)
	rect(900, 300, 300, 300)
	let sx = 900
	let sy = 300
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Ratio:", sx + 107, sy + 51)
	text("Axis 1:", sx + 70, sy + 171)
	text("Period 1:", sx + 200, sy + 171)
	text("Axis 2:", sx + 70, sy + 231)
	text("Period 2:", sx + 200, sy + 231)
	textAlign(CENTER, CENTER)
	text(":", sx + 150, sy + 51)
	fill(200)
	textAlign(LEFT, CENTER)
	text(nf(res.a[0], 0, 4), sx + 75, sy + 171)
	text(nf(res.p[0], 0, 4), sx + 205, sy + 171)
	text(nf(res.a[1], 0, 4), sx + 75, sy + 231)
	text(nf(res.p[1], 0, 4), sx + 205, sy + 231)
}

function resGen () {
	if (boolean(resType.value())) {
		res.a[0] = planet.a
		res.p[0] = (planet.a ** 3 / star.M) ** 0.5
	} else {
		res.a[0] = moon.a
		res.p[0] = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
	}
	let resonance = Ratio(floor(resOne.value()), floor(resTwo.value())).simplify()
	resonance = resonance.toArray()
	resOne.value(resonance[0])
	resTwo.value(resonance[1])
	
	res.p[1] = res.p[0] * (resonance[0]/resonance[1])
	if (boolean(resType.value())) {
		res.a[1] = ((res.p[1] ** 2) * star.M) ** (1/3)
	} else {
		res.a[1] = ((planet.M + moon.M) * ((res.p[1] / 0.0588) ** 2)) ** (1/3)
	}
}

	fill(100)
	if (planet.HAB)
		fill(0, 0, 200)
	else if (planet.a > star.FL)
		fill(200, 100, 0)
	let pScale = map(planet.R, 0, planet.HS, 0, 280)
	ellipse(mid.x, mid.y, pScale * exag, pScale * exag)
	
	fill(70)
	let mr = moon.R[0]
	if (!boolean(moonType.value())) {
		fill(100, 70, 0)
		mr = ((float(moon.R[0]) + 
		       float(moon.R[1]) + 
			   float(moon.R[2])) / 3) / 6371
	}
	let mScale = map(mr, 0, planet.HS, 0, 280)
	ellipse(mid.x - (oScale / 2), mid.y, mScale * exag, mScale * exag)
	
	if (debug) {
		console.log("i", iScale)
		console.log("o", oScale)
		console.log("p", pScale)
		console.log("m", mScale)
		console.log("e", exag)
	}
}

function resBox () {
	stroke(0)
	strokeWeight(5)
	fill(51)
	rect(900, 300, 300, 300)
	let sx = 900
	let sy = 300
	noStroke()
	fill(255)
	textAlign(RIGHT, CENTER)
	text("Ratio:", sx + 107, sy + 51)
	text("Axis 1:", sx + 70, sy + 171)
	text("Period 1:", sx + 200, sy + 171)
	text("Axis 2:", sx + 70, sy + 231)
	text("Period 2:", sx + 200, sy + 231)
	textAlign(CENTER, CENTER)
	text(":", sx + 150, sy + 51)
	fill(200)
	textAlign(LEFT, CENTER)
	text(nf(res.a[0], 0, 4), sx + 75, sy + 171)
	text(nf(res.p[0], 0, 4), sx + 205, sy + 171)
	text(nf(res.a[1], 0, 4), sx + 75, sy + 231)
	text(nf(res.p[1], 0, 4), sx + 205, sy + 231)
}

function resGen () {
	if (boolean(resType.value())) {
		res.a[0] = planet.a
		res.p[0] = (planet.a ** 3 / star.M) ** 0.5
	} else {
		res.a[0] = moon.a
		res.p[0] = 0.0588 * (((moon.a ** 3) / (planet.M + moon.M)) ** 0.5)
	}
	let resonance = Ratio(floor(resOne.value()), floor(resTwo.value())).simplify()
	resonance = resonance.toArray()
	resOne.value(resonance[0])
	resTwo.value(resonance[1])
	
	res.p[1] = res.p[0] * (resonance[0]/resonance[1])
	if (boolean(resType.value())) {
		res.a[1] = ((res.p[1] ** 2) * star.M) ** (1/3)
	} else {
		res.a[1] = ((planet.M + moon.M) * ((res.p[1] / 0.0588) ** 2)) ** (1/3)
	}
}
