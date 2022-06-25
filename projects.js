function secondsTodHms(uptime) {
    uptime = Number(uptime);
    var d = Math.floor(uptime / 86400);
    var h = Math.floor(uptime % 86400 / 3600);
    var m = Math.floor(uptime % 3600 / 60);
    var s = Math.floor(uptime % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay; 
}

setInterval(async () => {
    try {
      const resp = await fetch("http://kuuke.xyz:8080");
      console.log(resp);
      const uptime = await resp.text();
      // Optionally transform into minutes for extra points
      document.getElementById("status").textContent = "Bot has been online for: " + secondsTodHms(uptime);
    } catch (error) {
      document.getElementById("status").textContent = "Bot is currently offline :(";
    }
    
  }, 1000);

