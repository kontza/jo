joCache.set("lists", function() {
    var expandoArray = [],
        card = null,
        prefixedString = function(number) {
            if(number<10) {
                return "0"+ number;
            } else {
                return number.toString();
            }
        },
        generateContent = function(level) {
            var labelArray = [];
            for(var runner=0;runner<30;runner++) {
                labelArray.push(new joLabel("Item "+prefixedString(level)+"-"+prefixedString(runner)));
            }
            return labelArray;
        };

    for(var runner=0;runner<30;runner++) {
        expandoArray.push(new joExpando([
            new joExpandoTitle("Level "+prefixedString(runner)),
            new joExpandoContent(generateContent(runner))
        ]));
    }

    card = new joCard(expandoArray).setTitle("Lots of expandos.");

    return card;
});
