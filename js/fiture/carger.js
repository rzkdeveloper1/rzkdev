navigator.getBattery().then(function(battery) {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', function(){
    updateChargeInfo();
  });
  function updateChargeInfo(){
    (battery.charging ? alert(`Selamat mengisi baterai<br>yang tersisa ${battery.level * 100}%`) : "")
    console.log('charging: '+battery.charging)
  }

  battery.addEventListener('levelchange', function(){
    updateLevelInfo();
  });
  function updateLevelInfo(){
  	sisabatre = battery.level * 100 + "%"
    console.log("Battery level: "
                + battery.level * 100 + "%");
  }
});