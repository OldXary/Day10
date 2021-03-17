function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            realese_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            "gold": true
          },
        002: {
            artist: "Darko Lazic",
            title: "Neki",
            realese_year: 2005,
            formats: {
                1: "CD",
                2: "LP",
                3: "Cassete"
            }
            "gold": true

        }
    };
}

console.log(myFunction()[2]);
module.exports = myFunction;