const chalk = require("chalk");

let palettes = [
	["#3626A7", "#657ED4", "#FF331F", "#B185A7", "#ffffff"],
	["#F2994A", "#F2C94C", "#4AC29A", "#0ED2F7", "#ffffff"],
	["#8A716A", "#C2B8B2", "#197BBD", "#125E8A", "#ffffff"],
	["#05A8AA", "#40E0D0", "#FF8C00", "#ffffff", "#ffffff"],
	["#1dd23c", "#259241", "#F68E5F", "#30b1c3", "#ffffff"],
	["#F2BB05", "#D74E09", "#6E0E0A", "#ffffff", "#ffffff"],
	["#514d5b", "#c1442e", "#83a0a6", "#124E78", "#ffffff"],
	["#F76C5E", "#ff6700", "#ffa700", "#005AA7", "#ffffff"],
	["#d5d505", "#41cd38", "#1f787c", "#2d4a5a", "#ffffff"],
	["#30b1c3", "#9a4e00", "#ff6700", "#ffa700", "#ffffff"],
	["#ef2d2d", "#f1a130", "#e2ed78", "#a5cc72", "#ffffff"],
	["#b7f2b8", "#b4ffed", "#b6cdff", "#ccb4ff", "#ffffff"],
	["#7f5579", "#7b95c1", "#57aa12", "#ffb3f2", "#ffffff"]
];

DisplayColor = array => {
	for (c = 0; c < palettes.length; c++) {
		var row = palettes[c];
		let palette = "";
		for (let color of row) {
			palette += chalk.bgHex(color)(color) + " ";
		}
		console.log(palette);
	}
	return this;
};

DisplayColor(palettes);
