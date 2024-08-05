let icon = document.getElementById('icon');

const oclock = () => {
    setInterval(function () {
        let now = new Date();

        let sekund = now.getSeconds();
        let minut = now.getMinutes();
        let soat = now.getHours();

        let secondG = (360 / 60) * sekund;
        let minutG = (360 / 60) * minut;
        let soatG = (360 / 12) * soat + (30 / 60) * minut; // Adds minute offset to hour hand

        document.getElementById('sekund').style.transform = "rotate(" + secondG + "deg)";
        document.getElementById('minut').style.transform = "rotate(" + minutG + "deg)";
        document.getElementById('soat').style.transform = "rotate(" + soatG + "deg)";
    }, 1000);
}

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'images/sun.png';
    } else {
        icon.src = 'images/moon.png';
    }
}
