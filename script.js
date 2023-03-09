
let sCount = 0;
let shooters = [];
let round = 'initial';
let rollCount =0;
let point = 0;
let dice1 = [];
let dice2 = [];
let diceSum = 0;
let currentRoll =0;
let comeout = 0;
let hardways = [2, 4, 6, 8, 10, 12];
let hardway = [];
let session = 0;


// SHOOTER COUNT/NAME SECTION ---------------------------------------------------
// Grab the total amount of Shooters *****************************************

function getShooterCount() {
    //Get Total
    sCount = Number(prompt('Please eneter # of Shooters 1-5'));
    let infoText;
    if (isNaN(sCount) || sCount < 1 || sCount > 5){
        infoText = "Must enter a number between 1-5"
    } else if ( sCount == 1){
        infoText = "Right on, we got " + sCount + " Shooter"
    } else {
        infoText = "Right on we got " + sCount + " Shooters"
    }
        // outputs
        document.getElementById("infoText").innerHTML = infoText;
        document.getElementById("displayShooterCount").innerHTML = sCount;
        console.log(sCount);
    return sCount;
}
// *************************************************************************

// Grabs Shooters Names from a prompt and makes an array ********************
function getShooterNames() {
    
    for ( let i = 0; i < sCount; i++) {
        let name = prompt('Please Shooter(s) enter name');
        shooters.push(name);
    }
    console.log(shooters[0]);
    console.log(shooters[1]);
    console.log(shooters);
    //HTML Outputs 
    
    return shooters;
}
// ************************************************************************


// Test Function to verify Array output. -- To Be Deleted -- *************

function chkShooters() {
    let sNamesText = "";
    for (let i = 0; i < shooters.length; i++) {
        sNamesText += shooters[i] + "<br>";
    }
    console.log(shooters[0]);
    console.log(shooters);

    document.getElementById("sNames").innerHTML = sNamesText;
}
// ************************************************************************
// ------------------------------------------------------------------------------


// ----------------------- TRACKER BACKEND SECTION --------------------

// Setting up initial tracker params




function diceInput() {

}function trackerInit() {
    currentShooter();
    newTrackerSetup();
    
}

function comeOutRoll() {

}


// --------- CURRENT SHOOTER -----------------
function currentShooter() {
    let length = shooters.length;
    let curShooter = shooters[0];   
    let curShooterCount = 0;
        

    console.log(curShooter);
}
// -----------------------------------------

// ---------------- NEW TRACKER -----------
function newTrackerSetup() {

  
}
// ------------------------------------------

// --------- DICE ROLL FUNCTION -----------------------------------
function diceRoll() {
    for (let i = 0; i < 2; i++) {
        if (i == 0) {
            let die1 = prompt('Please enter dice 1');
            let die2 = prompt('Please enter dice 2');
            let infoText;
                    if (isNaN(die1) || die1 < 1 || die1 > 6) {
                        infoText = "Must enter a number from 1-6 for Dice 1";
                        // outputs
                        document.getElementById("dieInfoText").innerHTML = infoText;
                        break;
                    } else if (isNaN(die2) || die2 < 1 || die2 > 6) {
                        infoText = "Must enter a number from 1-6 for Dice 2";
                        // outputs
                        document.getElementById("dieInfoText").innerHTML = infoText;
                        break;

                    } else {
                        dice1.push(Number(die1));
                        dice2.push(Number(die2));
                        rollCount++;
                        console.log(dice1);
                        console.log(dice2);
                        console.log(rollCount);
                        return dice1, dice2, rollCount;
                    }
        }
    }  
}
// ------------------------------------------------------------------------

// ---------- Is it a HARDWAY ----------------------------------------
function isHardway() {
    let i = rollCount;
    if (dice1[i] === dice2[i]) {
        hardway.push(rollCount);
        console.log(hardway);
    }
}
// ------------------------------------------------------------------------