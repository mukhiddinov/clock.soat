let icon = document.getElementById('icon');
let sekund = 0;
let minut = 0;
let soat = 0;

const oclock = () => {
  let interval = setInterval(function () {
    sekund++;
    let secondG = (360 / 60) * sekund; //secondG bu htmldagi sekundni gradusi
    document.getElementById('sekund').style.transform = "rotate(" + secondG + "deg)";
    if (sekund >= 60) {
      minut++;
      let minutG = (360 / 60) * minut;
      document.getElementById('minut').style.transform = "rotate(" + minutG + "deg)";
      sekund = 0;
    }
    if (minut >= 60) {
      soat++;
      let soatG = (360 / 12) * soat;
      document.getElementById('soat').style.transform = "rotate(" + soatG + "deg)";
      minut = 0;
    }
  },1000)
}

icon.onclick = function() {
	document.body.classList.toggle('dark-theme');
	if (document.body.classList.contains('dark-theme')) {
		icon.src = 'images/sun.png';
	}
	else {
		icon.src = 'images/moon.png'
	}

}
