# Star-Builder

#### Latest Webapp Version: v1.w.2AA7
*Runs on any javascript-enabled browser*
#### Latest Desktop Version: *COMING SOON*
*Will run on Windows and Linux, and possibly MacOS*

___

> "To bake an apple pie from scratch, you must first create the universe" -Carl Sagan

Star-Builder is an app intended for those who are interested in worldbuilding, in need of a fictional solar system for any reason, or simply just think astronomical math is cool.

Below is a comprehensive list of exactly what Star-Builder can be used for.

# Features:
### This program *can*:
- Calculate the radius, circumference, area, volume, and density of a star based on it's mass.
- Calculate a star's luminosity and temperature.
- Calculate a star's lifespan.
- Determine a star's habitable zone, or "Goldilocks zone".
- Generate plausible orbital distances from the star.
- Accept user-determined orbital distances.
- Display orbits (generated or otherwise) at true* distance from the star, for reference.
- Predict the mean eccentricity of all orbits in the system.
- Calculate a planet's gravity and density based on it's mass and radius.
- Determine a planet's Hill sphere and Roche limit.
- Calculate several orbital parameters of a planet.
- Determine if a planet's orbital radius is plausable based on existing orbit data.
- Determine whether or not a planet is within a given star's habitable zone.
- Calculate the mass, density, and gravity of a major moon given it's radius and partial densities.
- Calculate the mass of a minor moon given it's density and radii.
- Calculate a moon's orbital period about a given planet.
- Display a planet and it's moon at true scale and distance.
- Display a planet and it's moon at an exagerated scale for clarity.
- Generate orbital resonances for planets about a given star.
- Generate orbital resonances for moons about a given planet.

*\*"true" in this instance does not apply to the star shown, which is enlarged for emphasis.*

### This program *cannot yet*:
- Save files storing solar system data for later use.
- Allow multiple planets to be created and stored at once for a given star.
- Allow multiple moons to be created and stored at once for a given planet.
- Generate stars, planets, and moons at random.
- Generate data on asteroid belts or other rock fields.
- Predict the temperature or climate of planets or moons.
- Determine rotational resonance or tidal locking for planets or moons.
- Calculate lagrange points.
- Generate data on trojan bodies.
- Display a specific body's orbit and relevant orbital data/objects.
- Convert from proportional measurements to actual measurements.
- Check for plausibility of user-determined orbits.
- Do anything I haven't thought of.

### This program *might eventually*:
- Render orbits in three dimentions.
- Render bodies with relevant coloring/graphics.
- Have a large gui and graphic overhaul.
- ~Become sentient~

### This program *will not*:
- Bake an apple pie.
- Assist with baking an apple pie in any way.

# How To Use It
*A comprehensive PDF guide to use the app is underway.*

The app is seperated into three "boxes" of input and data, each pertaining to one element of the system:
- Star
- Planet
- Moon
In addition, there are two "display" boxes, one for stelar orbits and one for planetary orbits, and one additional input box for resonances.

## Stars
You must input a mass for your star, given in solar masses (the Sun has a mass of 1).

Every other piece of data is then calculated from that one number. All data, unless otherwise stated, is given in units proportional to the Sun. For example, a volume of 3.2 means that your star's volume is 3.2 times that of the Sun, or 4.48e+27 cubic meters.

The exception to this rule is the "HZ", or "Habitable Zone", which is given in AU.

There are two buttons located in the star box, "OrbitMan" and "OrbitGen".
- OrbitMan will bring up a dialogue box allowing the user to input, in no particular order, all the orbits they would like to be present in their solar system. Keep in mind these orbits are not yet checked for plausibilty, so improbable and infact impossible orbits are capable of being inputted.
- OrbitGen will randomly generate a new set of orbits, calculated using the star's frost line and distrubuted roughly logarithmically. The orbits generated with this algorithm are guaranteed* to be theoretically possible.

By default, the star in this box is made accurate to our Sun.

*\*This is not a "legal" guarantee. Please do not take me to court if an orbit generated isn't perfectly astrophysiologically sound.*

## Planet
You must input both a mass and radius in order to generate a planet. You must also input a semi-major axis (a) and eccentricity (e) in order to calculate orbital parameters for the planet.

The mass and radius, both proportional to Earth, are used to calculate the planet's gravity, in g's, and density, in Earth densities.
The apoapsis and periapsis (q and Q), semi-minor axis (b), orbital period and velocity (P and v), are all displayed relevant to Earth.

The Hill sphere and Roche limit of the planet are calculated and displayed in Earth radii.

The indicator labeled "Habitable" is green when the planet's orbit will remain entirely within the star's habitable zone. This is using the star calculated in the star box.

The calculated mean eccentricity of the system is displayed in this box, as well, in order to inform what you input for e.

By default, the planet in this box is made accurate to the Earth.

## Moon
The moon box is the most complicated. The box has two different modes: "Major" and "Minor".
By default, this box is made accurate to our moon.

### Major
In Major mode, you must input the partial percentages of different materials that make up the moon. You are given the most common materials for moons to be made out of to choose from, and a total percentage is listed to ensure that you get near to 100% composition. 
To the right of each box is the percent of our own moon, for reference.
These percentages are used to calculate the moon's density, which is given in two values. First it is given in Earth densities, and then in g/cm³.

You must also input the moon's radius in Earth radii. There are two other unused "radius" boxes in this mode.

From these the moon's mass and gravity is calculated. It's mass is given in Earth masses, and gravity is given in two values. First in m/s² and then in g's.

You can also input your moon's semi-major axis (a), in AU, and get the moon's orbital period in Earth days.

### Minor
In Minor mode, you must input the moon's density in g/cm³ and it's three radii, in km, as minor moons are elipsoid instead of spherical. The minor moon's mass will be calculated in kg.

You will also input the moon's semi-major axis (a), in AU, and get the moon's orbital period in Earth days.

## Orbits
The Orbits box, at the bottom of the screen, shows all the orbits around your star.

The transparent lines are guide-lines, to give extra information about the orbits.
 - The red lines are the Roche limit for the star and the outer bounds of it's gravitational field. Orbits closer than the closest red line, or farther than the farthest red line, would in fact not be orbits at all.
 - The green lines are the bounds of the star's Goldilocks zone. A planet must orbit within these two lines in order to be habitable.
 - The blue line is the star's frost line. Past this line, liquid water will freeze. It is also past this line that gas planets are most likely to form.

The solid lines are the orbits in the system. They are different colors to showcase different information.
 - The white lines are the orbital radii of the star. They are either generated by OrbitGen or entered manually. Each could potentially be either a planet, an asteroid belt, or any other major star-orbiting body.
 - The orange line is the planet's "GG" line. This orbit is generated by OrbitGen. This is where the largest gas giant of the system is likely to orbit.
 - The red or green line is the current planet's orbit. It is red if it does not match up to any of the entered or generated orbits currently stored in the system, and green if it does. This is to help you ensure that your planet is, in fact, orbiting at a plausible distance from your star.
 
To the right is the semi-major axis (a) of every orbit shown, measured in AU.
 
The Orbits box also shows your star (at an exaggerated size). It's color is determined by the temperature of your star, and is the most likely "true color" of your star. (Seen from any planet, the star would appear white.)

The display can be enlarged by a hidden slider located at the top of the box.

By default, this box contains all the orbits in our solar system.

## "Moonbits"
The "Moonbits" box, as I refer to it, it to the right of the screen and displays the orbits around your planet.

There are two transparent green lines, representing the Roche limit and Hill sphere of your planet. Any body orbiting your planet must be within these two lines. The black line is the orbit of your moon.

Both the planet and the moon are displayed in real size on this display, but can be enlarged using a hidden slider to the bottom of the box. They are colored appropriately based on the planet's distance from the star, and the moon's size.

## Resonances
The Resonances box is used to calculate orbital resonances for planets and moons. This box uses the data already entered in the other boxes.

Enter what ratio you want to relate your new orbit to the existing one. Which orbit is used, planet or moon, is determined by a selector at the top of the box. Hit Resonate to calculate the appropriate new semi-major axis (a).

A planet or moon will orbit it's relevant body at the appropriate ratio. For instance, at a ratio of "1:3": for every one orbit of your existing planet, a planet at the calculated semi-major axis (a) will orbit three times.

___

# Acknowledgement
This app would not be possible without the following persons:

- The Mozilla Foundation, owners of the javascript programming language.
- Lauren McCarth, the creator of p5.js, and the Processing community. http://p5js.org/
- LarryBattle, a GitHub user and creator of the javascript library Ratio.js. http://larrybattle.github.com/Ratio.js/
- Edgar Grunewald, whose YouTube channel Artifexian introduced me to many of the equations implemented in this program. http://www.youtube.com/user/Artifexian
- Electron, the cross-platform javascript desktop app builder. https://github.com/electron
- My many associates in real life who have contributed ideas towards this project.
