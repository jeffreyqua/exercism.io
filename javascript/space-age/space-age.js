var SpaceAge = function(secs) {
	var age = secs;
	
	function onEarth() {
		return parseFloat((age / 31557600).toFixed(2));
	}
	function onMercury() {
		return parseFloat((age / 31557600 / 0.2408467).toFixed(2));
	}
	function onVenus() {
		return parseFloat((age / 31557600 / 0.61519726).toFixed(2));
	}
	function onMars() {
		return parseFloat((age / 31557600 / 1.8808158).toFixed(2));
	}
	function onJupiter() {
		return parseFloat((age / 31557600 / 11.862615).toFixed(2));
	}
	function onSaturn() {
		return parseFloat((age / 31557600 / 29.447498).toFixed(2));
	}
	function onUranus() {
		return parseFloat((age / 31557600 / 84.016846).toFixed(2));
	}
	function onNeptune() {
		return parseFloat((age / 31557600 / 164.79132).toFixed(2));
	}
	return {
		seconds: age,
		onEarth: onEarth,
		onMercury: onMercury,
		onVenus: onVenus,
		onMars: onMars,
		onJupiter: onJupiter,
		onSaturn: onSaturn,
		onUranus: onUranus,
		onNeptune: onNeptune
	}
};
module.exports = SpaceAge;