{
    var friend = "Debbie";

    switch (friend) {
        case "Fred":
            console.log("Hey Fred, let's go golfing.");
            break;
        case "Karl":
            console.log("Let's hang.");
            break;
        case "John":
            console.log("Sorry, I'm busy right now.");
            break;
        default:
            console.log("Hey, " + friend + ". Can I call you back in a minute?");
    }
}

{
    const temp = -90;

    switch (true) {
        case temp <= 0:
            console.log("You need to wear a hat, gloves, scarf, and warm winter coat.");
            break;

        case temp <= 32:
            console.log("You should wear a hat, gloves, and coat.");
            break;

        case temp <= 50:
            console.log("You should wear a jacket.");
            break;

        case temp <= 70:
            console.log("You should wear pants.");
            break;

        case temp <= 90:
            console.log("Time to break out the shorts!");
            break;

        case temp <= 120:
            console.log("Shorts, tank top, and lots of sunscreen!");
            break;

        default:
            console.log("Check the weather app on your phone for the current temperature.");
            break;
    }

}