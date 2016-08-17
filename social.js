var cyclist = {
    name:"Anthony",
    age: 29,
    bikes: [
            {
            model:"ReignX",
            brand:"Giant",
            uses: ["downhill", 
                   "free ride", 
                   "park"], 
            isFavorite: false
        }, 
            {
            model:"Trance",
            brand:"Giant", 
            uses: ["all mountain", 
                   "resort",
                  "trail"], 
            isFavorite:false
        }, 
            {
            model: "SV650",
            brand: "Suzuki", 
            uses: ["road", 
                   "canyons", 
                   "speed"],
            isFavorite:false
        }, 
            {
            model:"GS850",
            brand: "Suzuki", 
            uses: ["looks", 
                   "commuting", 
                   "project"], 
            isFavorite:true
        }],
    favoriteTrails:["Procupine Rim",
                    "Rush", 
                    "Sap Tree",
                    "911",
                    "Jack Rabbit",
                    "Cave Trail"],
    gear:["gloves",
          "helmet",
          "jersey",
          "shorts",
          "goggles"],
    readyToRide: function(){
        if (cyclist.bikes != false){
            console.log(cyclist.name+" is Ready to Ride");
        }
    }
}

    