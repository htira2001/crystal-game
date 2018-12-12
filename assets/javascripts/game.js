// Variables //

let targetNumber;

let losses = 0; 

let wins = 0; 

let images = ["assets/images/pink.jpg", "assets/images/teal.jpg", "assets/images/gold.jpg","assets/images/purple.png"];

previousNumber = 0; 

// Making the random Number display area.  //

let resetAndStartGame = function () {

    $(".crystals").empty(); 

    targetNumber = Math.floor(Math.random() * 100) + 19; 

    $("#targetNumber").html('Target Number: ' + targetNumber);

    // Dynamically creating the crystals. //

        //for (let i = 0; i < images.length; i++) { 

        for (let i = 0; i < 4; i++) {
            let crystalNumber = Math.floor(Math.random() * 12) + 1; 
            
            let crystal = $("<img>");
                crystal.attr({
                    "class":'crystalImage',
                    "data-crystalValue": crystalNumber,
                    "src": images[i]
                });

            $(".crystals").append(crystal);

        }

        $("previousNumber").html(previousNumber);
    }

    resetAndStartGame();
    // When we click the crystal, it will generate a hidden value. //
    
    $(document).on('click', ".crystalImage", function () {

    var num = parseInt($(this).attr('data-crystalValue')); // <--- 'this' refers to any of the crystals I click on.
    
    previousNumber += num; 

    console.log(previousNumber);
    

    $("#previousNumber").html(previousNumber);


    if(previousNumber > targetNumber) {
        
        losses++;
        
        alert("You lose!");
         
        $("#losses").html(losses);

        previousNumber = 0;

        resetAndStartGame();
        
    } 
    else if (previousNumber === targetNumber) {
        
        alert("Congratulations! You win!");
        
        wins++;

        $("#wins").html(wins);

        previousNumber = 0;

        resetAndStartGame();  

    }

}); 