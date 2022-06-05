function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

setInterval(async () => {
    try {
      const resp = await fetch("http://kuuke.xyz:8080");
      console.log(resp);
      const uptime = await resp.text();
      // Optionally transform into minutes for extra points
      document.getElementById("status").textContent = "Bot has been online for: " + secondsToHms(uptime);
    } catch (error) {
      document.getElementById("status").textContent = "Bot is currently offline :(";
    }
    
  }, 1000);

