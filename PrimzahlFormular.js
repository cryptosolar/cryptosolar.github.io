'use strict';
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("PrimZahlCheck")
		.addEventListener("click", rechne);

	function PrimzahlCheck(Zahl) {
		Zahl = parseInt(Zahl, 10);
		if (isNaN(Zahl)) {
			alert('Sie müssen eine Zahl eingeben!');
			return;
		}
		var Grenzzahl = Zahl / 2;
		var Check = 1;
		for (var i = 2; i <= Grenzzahl; i++)
			if (Zahl % i == 0) {
				text = Zahl + ' ist keine Primzahl, weil teilbar durch ' + i + '.';
				Check = 0;
			}
		if (Check == 1) {
			var text = Zahl + ' ist eine Primzahl!';
		}
		document.querySelector('output')
			.textContent = text;
	}

	function rechne() {
		var zahl = document.getElementById('Eingabezahl')
			.value;
		PrimzahlCheck(zahl);
		document.getElementById('Eingabezahl')
			.value = "";
	}
});