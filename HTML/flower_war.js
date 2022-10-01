let board = 
[
    {
        "boardID": 0,
        "Quad":1,
        "Space":1,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":1,
        "People":1
    },
    {
        "boardID": 1,
        "Quad":1,
        "Space":2,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":2,
        "People":0
    },
    {
        "boardID": 2,
        "Quad":1,
        "Space":3,
        "playersPresent": [0],
        "blocker": false,
        "Az":4,
        "Cath":0,
        "People":-2
    },
    {
        "boardID": 3,
        "Quad":1,
        "Space":4,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":1,
        "People":0
    },
    {
        "boardID": 4,
        "Quad":1,
        "Space":5,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":3,
        "People":-1
    },
    {
        "boardID": 5,
        "Quad":2,
        "Space":1,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":2,
        "People":0
    },
    {
        "boardID": 6,
        "Quad":2,
        "Space":2,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":0,
        "People":1
    },
    {
        "boardID": 7,
        "Quad":2,
        "Space":3,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":0,
        "People":2
    },
    {
        "boardID": 8,
        "Quad":2,
        "Space":4,
        "playersPresent": [0],
        "blocker": false,
        "Az":3,
        "Cath":0,
        "People":-1
    },
    {
        "boardID": 9,
        "Quad":2,
        "Space":5,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":1,
        "People":0
    },
    {
        "boardID": 10,
        "Quad":3,
        "Space":1,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":1,
        "People":0
    },
    {
        "boardID": 11,
        "Quad":3,
        "Space":2,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":3,
        "People":-1
    },
    {
        "boardID": 12,
        "Quad":3,
        "Space":3,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":0,
        "People":2
    },
    {
        "boardID": 13,
        "Quad":3,
        "Space":4,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":1,
        "People":1
    },
    {
        "boardID": 14,
        "Quad":3,
        "Space":5,
        "playersPresent": [0],
        "blocker": false,
        "Az":2,
        "Cath":0,
        "People":0
    },
    {
        "boardID": 15,
        "Quad":4,
        "Space":1,
        "playersPresent": [0],
        "blocker": false,
        "Az":3,
        "Cath":0,
        "People":-2
    },
    {
        "boardID": 16,
        "Quad":4,
        "Space":2,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":1,
        "People":0
    },
    {
        "boardID": 17,
        "Quad":4,
        "Space":3,
        "playersPresent": [0],
        "blocker": false,
        "Az":0,
        "Cath":4,
        "People":-2
    },
    {
        "boardID": 18,
        "Quad":4,
        "Space":4,
        "playersPresent": [0],
        "blocker": false,
        "Az":2,
        "Cath":0,
        "People":0
    },
    {
        "boardID": 19,
        "Quad":4,
        "Space":5,
        "playersPresent": [0],
        "blocker": false,
        "Az":1,
        "Cath":0,
        "People":1
    }
];

let player =
[
    {
        "playerID": 1,
        "time": 1,
        "spaceID": 0,
        "quadID": 0,
        "Az":0,
        "Cath":0,
        "People":0,
        "Cards": [0],
        "Lost":0,
        "Strategy": 1
    },
    {
        "playerID": 2,
        "time": 1,
        "spaceID": 0,
        "quadID": 0,
        "Az":0,
        "Cath":0,
        "People":0,
        "Cards": [0],
        "Lost":0,
        "Strategy": 2
    },
    {
        "playerID": 3,
        "time": 1,
        "spaceID": 0,
        "quadID": 0,
        "Az":0,
        "Cath":0,
        "People":0,
        "Cards": [0],
        "Lost":0,
        "Strategy": 3
    },
    {
        "playerID": 4,
        "time": 1,
        "spaceID": 0,
        "quadID": 0,
        "Az":0,
        "Cath":0,
        "People":0,
        "Cards": [0],
        "Lost":0,
        "Strategy": 4
    }
];

let cards = [
    {
        "cardID": 0,
        "copies": [0,0],
        "cardTest": "aPenalty", 
        "text": "Penalty to Aztec Faith"
    },
    {
        "cardID": 1,
        "copies": [0,0],
        "cardTest": "cPenalty", 
        "text": "Penalty to Aztec Faith"
    },
    {
        "cardID": 2,
        "copies": [0,0],  
        "cardTest": "gPenalty",
        "text": "Penalty to Highest Faith"
    },
    {
        "cardID": 3,
        "copies": [0,0],  
        "cardTest": "pPenalty", 
        "text": "Penalty to People"
    },
    {
        "cardID": 4,
        "copies": [0,0],  
        "cardTest": "aCheck",
        "text": "Penalty to Aztec Faith if it is lower than Faith Threshold"
    },
    {
        "cardID": 5,
        "copies": [0,0],  
        "cardTest": "cCheck",
        "text": "Penalty to Catholic Faith if it is lower than Faith Threshold"
    },
    {
        "cardID": 6,
        "copies": [0,0],  
        "cardTest": "gCheck",
        "text": "Penalty to highest Faith if any Faith isn't higher than threshold"
    },
    {
        "cardID": 7,
        "copies": [0,0],  
        "cardTest": "pCheck",
        "text": "Penalty to People if People isn't higher than threshold"
    },
    {
        "cardID": 8,
        "copies": [0,0],  
        "cardTest": "aConvert",
        "text": "Convert Aztec Faith to twice the amount of Catholic Faith"
    },
    {
        "cardID": 9,
        "copies": [0,0],  
        "cardTest": "cConvert",
        "text": "Convert Catholic Faith to twice the amount of Aztec Faith"
    },
    {
        "cardID": 10,
        "copies": [0,0],  
        "cardTest": "aCull",
        "text": "Convert People to Aztec Faith"
    },
    {
        "cardID": 11,
        "copies": [0,0],  
        "cardTest": "cCull",
        "text": "Convert People to Catholic Faith"
    },
    {
        "cardID": 12,
        "copies": [0,0],  
        "cardTest": "catchUp",
        "text": "Gain Bonus to People if People < X or Bonus to lowest Faith"
    },
    {
        "cardID": 13,
        "copies": [0,0],  
        "cardTest": "aBonus",
        "text": "Bonus to Aztec Faith"
    },
    {
        "cardID": 14,
        "copies": [0,0],  
        "cardTest": "cBonus",
        "text": "Bonus to Catholic Faith"
    },
    {
        "cardID": 15,
        "copies": [0,0],  
        "cardTest": "gBonus",
        "text": "Bonus to Lowest Faith"
    },
    {
        "cardID": 16,
        "copies": [0,0],  
        "cardTest": "pBonus",
        "text": "Bonus to People"
    },
    {
        "cardID": 17,
        "copies": [0,0],  
        "cardTest": "uFigure",
        "text": "Move Either Figure Up One Step"
    },
    {
        "cardID": 18,
        "copies": [0,0],  
        "cardTest": "dFigure",
        "text": "Move Either Figure Down One Step"
    },
    {
        "cardID": 19,
        "copies": [0,0],  
        "cardTest": "iBlock",
        "text": "Ignore Blocker Once (Hold in hand and play when needed)"
    },
    {
        "cardID": 20,
        "copies": [0,0],  
        "cardTest": "rBlock",
        "text": "Reroll Blocker (Hold in hand and play when needed)"
    },
    {
        "cardID": 21,
        "copies": [0,0],  
        "cardTest": "nQuad",
        "text": "Move Any Player to next Quadrant"
    },
    {
        "cardID": 22,
        "copies": [0,0],  
        "cardTest": "aSpace",
        "text": "Move to Any Space"
    }
]

let playerTurn = 0;             // Which player's turn is it
let azTemple = 0;               // Where is the Aztec figure
let cathTemple = 0;             // Where is the Aztec figure
let apocFlag = 0;               // Is the Apoc happening (0 for no, 1 for Az, 2 for Cath)
let currentCard = 0;            // Which card has been drawn
let actualMove = 0;             // Which space are we moving to
let hasWon = 0;                 // Has someone won?
let numPlayers = 0              // Number of players
let turnOrder = [];             // Turn order
let players = [];               // Who is playing
let possibleMoves = [];         // what spaces can we move to?
let blockedMoves = [];          // What spaces are blocked?
let startSpace = 0;             // Declare Start
let startQuad = 0;              // Declare Start Quad
let playerID = 1;               // Declare Player ID
let PlayerIndex = (playerID-1); // Player Index
let primaryF = '';
let secondaryF = '';    
let cardsLeft = 46;             // Number of cards dealt
let cardsInHand = 0;            // Number of cards in hand
let cardFigMove = "";           // Which figure is the card moving
let readyToMove = false;        // is the player ready to move?
let hasMoved = false;           // Has current player moved?
let hasDrawn = false;           // Has current player drawn a card?
let hasCardResolved = false;    // Has current player resolved the card;
let resourceLoopDone = false;   // Has current player converted faith?
let hasFinished = false;        // Has current player finished their turn;

// Game Variables
let maxLevel = 6;               // How high is the temple?
let startFaith = 2;             // Starting Faith
let startPeople = 8;            // Starting People
let bFBon = 2;                  // Basic Faith Bonus
let bPBon = 1;                  // Basic People Bonus
let bFpen = 2                   // Basic Faith Penalty
let bPPen = 1;                  // Basic People Penalty
let fThresh = 6;                // Faith Threshold
let pThresh = 4;                // People Threshold
let fCon = 2;                   // Faith Conversion Rate
let pCon = 3;                   // People Conversion Rate

function gameStart() {          // Starting game stuff
    startSpace = 0;             // declare start space
    startQuad = 0;              // declare start quad
    
    //numPlayers = prompt("How many players?");       // get # players
    numPlayers = 4;
    for (i = 1; i <= numPlayers; i++) {             // cycle through players
        turnOrder.push(i);
    };

    for (i = 0; i < numPlayers; i++) { //How many people are playing
        if(player.length > numPlayers) { // Are there more than 4
            let extraPlayers = player.length-numPlayers; // Find the difference
            for (extraPlayers;extraPlayers>0;extraPlayers--) {
                player.splice(player.length-1,1); // Remove the extra players
            }
        } 
    }

    for (i = 0; i < numPlayers; i++) {  //Set up the players
        startSpace = (i*5);             // Calculate the start spaces
        startQuad = i+1;                // Calculate the start quad
        gameLogging("setting up player " +(i+1));
        let obj = player.at(i);
        obj.spaceID = startSpace;
        obj.quadID = startQuad;
        obj.Az = startFaith;
        obj.Cath = startFaith;
        obj.People = startPeople;
        }

    gameLogging("Starting the game with " + numPlayers + " players"); // Log
    
    turnStart();                // Start the first turn
}

function turnStart() {          // Turn start stuff
    playerTurn=turnOrder[0];
    playerIndex=(playerTurn-1);
    hasFinished = false;
    gameLogging('Starting Player ' + playerTurn + 's turn'); // Log
}

function boardQuery() {  
    let currentTime = player.at(playerIndex).time; // set current player's Time
    let playerCurrentPos = player.at(playerIndex).Sp; // Set current player's space
    let playerQuad = player.at(playerIndex).quadID; // Set current player's Quad
    let lastSpace = ((playerQuad*5)-1); 
    let testSpace = (playerCurrentPos) // set test space as current space
    let blockerTest = false; 
    possibleMoves = [];
    blockedMoves = [];
    actualMove = -1;
    
    if(currentTime < 4) {
        testSpace++; // Don't count yourself.
        for (testSpace;testSpace<=lastSpace;testSpace++) {
            blockerTest = board.at(testSpace).blocker;
            if (blockerTest == false) { // test to see if there's a blocker
                possibleMoves.push(testSpace);    // if not, push to possibleMoves
            }
            if (blockerTest == true) {
                blockedMoves.push (testSpace);
            }
        }
        readyToMove = true;
    }

    if (currentTime == 4) { // Time to move on
        if (playerQuad < 4) { // Not in the last quadrant
            playerQuad++; // increment quad
            testSpace = ((playerQuad-1)*5);
            lastSpace = ((playerQuad*5)-1);
            for (testSpace;testSpace<=lastSpace;testSpace++) { // Test every space left in the quad
                blockerTest = board.at(testSpace).blocker;
                if (blockerTest == false) { // test to see if there's a blocker
                    possibleMoves.push(testSpace)    // if not, push to possibleMoves
                }
                if (blockerTest == true) {
                    blockedMoves.push (testSpace);
                }
            }
        }
        readyToMove = true;
    }
    if (currentTime == 4) { 
        if (playerQuad == 4) { // we are in the last quadrant
            playerQuad = 1; // set Quad to 1
            testSpace = ((playerQuad-1)*5);
            lastSpace = ((playerQuad*5)-1);
            for (testSpace;testSpace<=lastSpace;testSpace++) {
                blockerTest = board.at(testSpace).blocker;
                if (blockerTest == false) { // test to see if there's a blocker
                    possibleMoves.push(testSpace)    // if not, push to possibleMoves
                }
                if (blockerTest == true) {
                    blockedMoves.push (testSpace);
                }
            }
        }
        readyToMove = true;
    }
    gameLogging('Player ' + playerTurn + ' has these moves available: ' + possibleMoves); // Log possible moves
    gameLogging('Player ' + playerTurn + ' is blocked in these spaces: ' + blockedMoves); // Log possible moves
}

function boardUpdate(move) { 
    let playerID = playerTurn;  // set current player 
	let playerIndex = (playerTurn-1);
    let playerCurrentPos = player.at(playerIndex).spaceID; // Set current player's space
    let newMove = board.at(move);               // player's actual move
    let boardLoc = board.at(playerCurrentPos);
    
    if (move == -2) {
        readyToMove = false;
    } else {
        for (i=0;i<boardLoc.playersPresent.length;i++) {
            if (boardLoc.playersPresent.at(i) == playerID) { // check if playerID is in this position
                boardLoc.playersPresent.splice(i,1); // remove player from board
            }
            if (newMove.playersPresent.length == 1) { // If length is = 1
                if (newMove.playersPresent.at(i) == 0) { // check if 0 is in this position
                    newMove.playersPresent.splice(0,1); // remove -1
                }
            } 
        }
        
        newMove.playersPresent.push(playerID); // update player's position on board
        player.at(playerIndex).spaceID = move;
        hasMoved = true;
        gameLogging('Board update finished! Player '+ (playerID) + ' has moved to '+move+' successfully');    
        player.at(playerIndex).Az += board.at(move).Az;
        player.at(playerIndex).Cath += board.at(move).Cath;
        player.at(playerIndex).People += board.at(move).People;
        gameLogging('Updated '+ (playerID) + 's resources successfully');
        
        readyToMove = false;
    }
}

function blocker(testNumber) {
    let blockerDie = getRandomNuber(1, 6); // Roll the die
    if (testNumber != null) {
        blockerDie = testNumber;
    }
    for (i;i<20;i++) {  // Iterate through every space
        if (board.at(i).Space == blockerDie) { // if the space and blocker die match
            board.at(i).blocker = true; // set Blocker to True
        }
        else {
            board.at(i).blocker = false; 
        }
    }
    gameLogging('player '+playerTurn + ' set blocker to ' + blockerDie); 
}

function convertFaith(fromWhich) { // A to convert from C to A, C to convert to C from A;
    let playerIndex=(currentPlayer-1)
    let testCF = 0;
    let testAzF = 0;
    let playerAz = player.at(playerIndex).Az;
    let playerCath = player.at(playerIndex).Cath;
    let tempAz = 0;
    let tempCath = 0;

    if(apocFlag == 0) {
        switch(fromWhich) {
            case 'C': // Convert from Cath
                testAzF = playerAz;
                if (((testAzF %2) != 0) || (testAzF < 2)) { // Test to see if we can
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 2); // total amount we are converting
                    player.at(playerIndex).Az -= tempAz; // subtract from the total
                    player.at(playerIndex).Cath ++; // Add to the total
                }
            break;
            case 'A': // From Aztec
                testCF = playerCath;
                if (((testCF %2) != 0) || (testCF < 2)) {
                    return console.error("invalid amount");
                }
                else {
                    tempCath = (testCF - 2);
                    player.at(playerIndex).Cath -= tempCath;
                    player.at(playerIndex).Az ++;
                }
            break;
        }
    }
    if(apocFlag == 1) { // Aztec Apocalypse
        switch(toWhich) {
            case 'A': // Convert from Aztec
                testAzF = playerAz;
                if (((testAzF %3) != 0) || (testAzF < 3)) { // Test to see if we can
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 3); // costs more to convert to from Cath
                    player.at(playerIndex).Az -= tempAz;
                    player.at(playerIndex).Cath ++;
                }
            break;
            case 'C': // From Cath
                    player.at(playerIndex).Cath--
                    player.at(playerIndex).Az ++;
                
            break;
        }
    }
    if(apocFlag == 2) {  // Catholic Apocalypse
        switch(toWhich) {
            case 'C': // Convert from Cath
                testAzF = playerAz;
                if (((testCF %3) != 0) || (testCF < 3)) { // Test to see if we can
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 3); // costs more to convert to from Cath
                    player.at(playerIndex).Cath -= tempAz;
                    player.at(playerIndex).Az ++;
                }
            break;
            case 'A': // From Az
                    player.at(playerIndex).Az--
                    player.at(playerIndex).Cath ++;
        }
    }
}

function convertPeople(fromWhich) { // This is the same thing, but with different numberss
    let playerIndex=(currentPlayer-1)
    let testCF = 0;
    let testAzF = 0;
    let playerAz = player.at(playerIndex).Az;
    let playerCath = player.at(playerIndex).Cath;
    let tempAz = 0;
    let tempCath = 0;

    if(apocFlag == 0) {
        switch(fromWhich) {
            case 'A': // Convert from AZ
                testAzF = playerAz;
                if (((testAzF %3) != 0) || (testAzF < 3)) { // Test to see if we can
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 3); // total amount we are converting
                    player.at(playerIndex).Az -= tempAz; // subtract from the total
                    player.at(playerIndex).People++;

                }
            break;
            case 'C': // From Cath
                testCF = playerCath;
                if (((testCF %3) != 0) || (testCF < 3)) {
                    return console.error("invalid amount");
                }
                else {
                    tempCath = (testCF - 3);
                    player.at(playerIndex).Cath -= tempCath;
                    player.at(playerIndex).People++;
                }
            break;
        }
    }
    if(apocFlag == 1) { // Catholic Apocalypse
        switch(fromWhich) {
            case 'A': // From Aztec
                testAzF = playerAz;
                if (((howMuchP %4) != 0) || (testAzF < 4)) { // Test to see if we can
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 4); // costs more to convert to from Cath
                    player.at(playerIndex).Az -= tempAz;
                    player.at(playerIndex).People++;
                }
            break;
            case 'C': // From Cath
                testCF = playerCath;
                if (((howMuchP %3) != 0) || (testCF < 3)) {
                    return console.error("invalid amount");
                }
                else {
                    tempCath = (testCF - 3); // We get more converting TO Cath
                    player.at(playerIndex).Cath -= tempCath;
                    player.at(playerIndex).People++;
                }
            break;
        }
    }
    if(apocFlag == 2) {  // Aztec Apocalypse
        switch(fromWhich) {
            case 'C': // Convert from Cath
                testCF = playerCath;
                if (((howMuchP %4) != 0) || (testCF < 4)) {
                    return console.error("invalid amount");
                }
                else {
                    tempCath = (testCath - 4);
                    player.at(playerIndex).Cath -= tempAz;
                    player.at(playerIndex).People++;
                }
            break;
            case 'A':// From Aztec
                testAz = playerAz;
                if (((howMuchP %3) != 0) || (testCF < 3)) {
                    return console.error("invalid amount");
                }
                else {
                    tempAz = (testAzF - 3);
                    player.at(playerIndex).Az -= tempAz;
                    player.at(playerIndex).People++;
                }
        }
    }
}

function templeHandler(moveWhich) {
    let playerIndex=(currentPlayer-1)
    let testPeo = 0;
    let testFaith = 0;
        
    switch (moveWhich) {
        case A: // move Aztec
            if (apocFlag == 0) {
                testFaith = player.at(playerIndex).Az;
                if (testFaith >= (azTemple+1)) {
                    azTemple++;
                    player.at(playerIndex).Az -=azTemple;
                }
                checkTemple(A);
            }
            if (apocFlag != 0) {
                testPeo = player.at(playerIndex).People;
                if (testPeople > (templeMax-azTemple)) {
                    azTemple--;
                    player.at(playerIndex).People -=azTemple;
                }
                checkTemple(A);
            }
        break;
        case C: // move Cath
            if (apocFlag == 0) {
                if (apocFlag == 0) {
                    testFaith = player.at(playerIndex).Cath;
                    if (testFaith >= (cathTemple+1)) {
                        cathTemple++;
                        player.at(playerIndex).Az -=cathTemple;
                    }
                    checkTemple(C);
                }
                if (apocFlag != 0) {
                    testPeo = player.at(playerIndex).People;
                    if (testPeople > (templeMax-cathTemple)) {
                        cathTemple--;
                        player.at(playerIndex).People -=cathTemple;
                    }
                    checkTemple(C);
                }
            break;
        }
    }
}

function checkTemple(WhichTemple) {
    switch(WhichTemple) {
        case A: 
            if (apocFlag == 1) {
                if (azTemple == 0) {
                    hasWon == 1;
                    gameWon();
                }
            }
            if (azTemple == maxLevel) {
                apocFlag = 1;
            }
        break;
        case C:
            if (apocFlag == 2) {
                if (cathTemple == 0) {
                    hasWon == 1;
                    gameWon();
                }
            }
            if (cathTemple == maxLevel) {
                apocFlag = 2;
            }
    }
}

function drawCard() {
    if (cardsLeft == 0) {       // Check if all cards are drawn
        for (i=0;i<19;i++) {    // If yes, cycle through all non-held cards
            for(j=0;j<2;j++) {  // Cycle through both copies of each card
                cards.at(i).copies[j] = 0; // Set each copy as in deck
                cardsLeft++;    // Increment cardsLeft
            }
        }
        for (i=19;i<21;i++) {   // Cycle through all held cards
            for(j=0;j<2;j++) {  // Cycle through each copy of held cards
                if(cards.at(i).copies[j] == 1) {    // If it is discarded
                    cards.at(i).copies[j] = 0   // Set it as in the deck 
                    cardsLeft++;    // Increment cardsLeft
                }
            }
        }
    }
    
    let possibleCard = getRandomNuber(0,20); // Get a random card

    if (cards.at(possibleCard).copies.includes(0) == true) { // If the card has an unplayed copy
        currentCard = possibleCard; // Set current card as playable
    }
    else {   
        while (cards.at(possibleCard).copies.includes(0) == false) { // if it doesn't then loop
        possibleCard = getRandomNuber(0,22);
        }
    currentCard = possibleCard;
    }
    hasDrawn = true;
}

function cardHandler(currentCard) {
    playerIndex = (playerTurn-1);
    let tFaithB = 0;        // Temp Faith Bonus
    let tFaithP = 0;        // Temp Faith Penalty
    let tFaithTotal = 0;    
    let tPeopleB = 0;       // Temp People Bonus
    let tPeopleP = 0;       // Temp People Penalty
    let tPeopleTotal = 0;
    let tConvert = 0;
        
    let card_test = cards.at(currentCard).cardTest;
    let cardDrawn = 0;

    switch (card_test) {
        case "aBonus":
            while (cardDrawn == false) {             // Check to see if a card has been drawn
                for (i=0;i<cards.at(currentCard).copies.length;i++) { // Loop through all copies
                    if (cards.at(currentCard).copies[i] == 0) { // Check if this copy is available
                        cards.at(currentCard).copies[i] = 1; // If yes, set it as discarded
                        cardsLeft--;            // remove it from # of cards left
                        hasCardResolved = true;       // We've drawn a card.  
                        break;          
                    }
                }
            }

            tFaithTotal = player.at(playerIndex).Az;
            tFaithB = bFBon;
            tFaithTotal += tFaithB;
            player.at(playerIndex).Az = tFaithTotal;

            break;

        case "aPenalty":  // Straight penalty to Az
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
            tFaithTotal = player.at(playerIndex).Az; // Set temp faith to player's AZ
            tPeopleTotal = player.at(playerIndex).People;
            tFaithP = bFpen;
            if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
               cardPeopleConvert("A");
            }
            else {
                tFaithTotal -= tFaithP;
                player.at(playerIndex).Az = tFaithTotal;
            }
            break;  

        case "cPenalty":  // Straight penalty to Cath
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
            tFaithTotal = player.at(playerIndex).Cath; // Set temp faith to player's Cath
            tPeopleTotal = player.at(playerIndex).People;
            tFaithP = bFpen;

            if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
               cardPeopleConvert("C");
            }
            else {

                tFaithTotal -= tFaithP;
                player.at(playerIndex).Cath = tFaithTotal;
            }
            break;  

        case "cBonus":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
            
            tFaithTotal = player.at(playerIndex).Cath;
            tFaithB = bFBon;
            tFaithTotal += tFaithB;
            player.at(playerIndex).Cath = tFaithTotal;
            break;            

        case "gBonus":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            if (player.at(playerIndex).Cath < player.at(playerIndex).Az) {
                tFaithTotal = player.at(playerIndex).Cath;
                tFaithB = bFBon;
                tFaithTotal += tFaithB;
                player.at(playerIndex).Cath = tFaithTotal;
            } else {
                tFaithTotal = player.at(playerIndex).Az;
                tFaithB = bFBon;
                tFaithTotal += tFaithB;
                player.at(playerIndex).Az = tFaithTotal;
            }
            break;
            
        case "gPenalty":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            if (player.at(playerIndex).Cath > player.at(playerIndex).Az) {
                tFaithTotal = player.at(playerIndex).Az; // Set temp faith to player's AZ
                tPeopleTotal = player.at(playerIndex).People;
                tFaithP = bFpen;

                if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                    cardPeopleConvert("A");
                }
                else {
                    tFaithTotal -= tFaithP;
                    player.at(playerIndex).Az = tFaithTotal;
                }
            }
            else {
                tFaithTotal = player.at(playerIndex).Cath; 
                tPeopleTotal = player.at(playerIndex).People;
                tFaithP = bFpen;
    
                if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                   cardPeopleConvert("C");
                }
                else {
                    tFaithTotal -= tFaithP;
                    player.at(playerIndex).Cath = tFaithTotal;
                }
            }
            break;

        case "aCheck":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tFaithTotal = player.at(playerIndex).Az;

            if(tFaithTotal < fThresh) {
                tPeopleTotal = player.at(playerIndex).People;
                tFaithP = bFpen;

                if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                    cardPeopleConvert("A");
                }
                else {
                    tFaithTotal -= tFaithP;
                    player.at(playerIndex).Az = tFaithTotal;
                }
            }

            break;

        case "cCheck":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tFaithTotal = player.at(playerIndex).Cath;

            if(tFaithTotal < fThresh) {
                tPeopleTotal = player.at(playerIndex).People;
                tFaithP = bFpen;

                if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                    cardPeopleConvert("C");
                }
                else {
                    tFaithTotal -= tFaithP;
                    player.at(playerIndex).Cath = tFaithTotal;
                }
            }

            break;

        case "gCheck":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            if ((player.at(playerIndex).Cath || player.at(playerIndex).Az) < fThresh) {
                if (player.at(playerIndex).Cath > player.at(playerIndex).Az) {
                    
                    tFaithTotal = player.at(playerIndex).Az; 
                    tPeopleTotal = player.at(playerIndex).People;
                    tFaithP = bFpen;
    
                    if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                        cardPeopleConvert("A");
                    }
                    else {
                        tFaithTotal -= tFaithP;
                        player.at(playerIndex).Az = tFaithTotal;
                    }
                }
                else {
                    tFaithTotal = player.at(playerIndex).Cath; 
                    tPeopleTotal = player.at(playerIndex).People;
                    tFaithP = bFpen;
        
                    if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
                       cardPeopleConvert("C");
                    }
                    else {
                        tFaithTotal -= tFaithP;
                        player.at(playerIndex).Cath = tFaithTotal;
                    }
                }
            }
            
            break;

        case "pBonus":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tPeopleTotal =  player.at(playerIndex).People;
            tPeopleB = bPBon;

            tPeopleTotal += tPeopleB;
            player.at(playerIndex).People = tPeopleTotal;
            
            break;

        case "pPenalty":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tPeopleTotal = player.at(playerIndex).People;
            tPeopleP = bPPen;
            tPeopleTotal -= tPeopleP;
            if (tPeopleTotal <= 0) {
                player.at(playerIndex).Lost = 1;
            }
            player.at(playerIndex).People = tPeopleTotal;

            break;

        case "pCheck":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tPeopleTotal = player.at(playerIndex).People; 

            if (tPeopleTotal < pThresh) {
                tPeopleTotal = player.at(playerIndex).People;
                tPeopleP = bPPen;
                tPeopleTotal -= tPeopleP;
                if (tPeopleTotal <= 0) {
                    player.at(playerIndex).Lost = 1;
                }
                player.at(playerIndex).People = tPeopleTotal;
            }
            
            break;

        case "aConvert":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
            
            tFaithP = bFpen;
            tConvert = (tFaithP *2);
            tFaithTotal = player.at(playerIndex).Az; // Set temp faith to player's Cath
            tPeopleTotal = player.at(playerIndex).People;

            if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
               cardPeopleConvert("C");
            }
            else {

                tFaithTotal -= tFaithP;
                player.at(playerIndex).Az = tFaithTotal;
            }
            player.at(playerIndex).Cath += tConvert;

            
            break;

        case "cConvert":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }            
            
            tFaithP = bFpen;
            tConvert = (tFaithP *2);
            tFaithTotal = player.at(playerIndex).Cath; // Set temp faith to player's Cath
            tPeopleTotal = player.at(playerIndex).People;

            if (tFaithTotal < tFaithP) { // if Penalty is higher than Faith
               cardPeopleConvert("C");
            }
            else {
                tFaithTotal -= tFaithP;
                player.at(playerIndex).Cath = tFaithTotal;
            }
            player.at(playerIndex).Az += tConvert;

            break;

        case "aCull":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            tFaithTotal = player.at(playerIndex).Az;
            tPeopleTotal = player.at(playerIndex).People;
            tPeopleP = bPPen;
            tFaithB = (bPPen * 2);

            if (tPeopleTotal <= tPeopleP) {
                player.at(playerIndex).Lose = 1;
            }
            
            tFaithTotal += tFaithB;
            tPeopleTotal -= tPeopleP;
            player.at(playerIndex).Az = tFaithTotal;
            player.at(playerIndex).People = tPeopleTotal;
            
            break;

        case "cCull":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
                
            tFaithTotal = player.at(playerIndex).Cath;
            tPeopleTotal = player.at(playerIndex).People;
            tPeopleP = bPPen;
            tFaithB = (bPPen * 2);

            if (tPeopleTotal <= tPeopleP) {
                player.at(playerIndex).Lose = 1;
            }
            
            tFaithTotal += tFaithB;
            tPeopleTotal -= tPeopleP;
            player.at(playerIndex).Cath = tFaithTotal;
            player.at(playerIndex).People = tPeopleTotal;
            
            break;

        case "catchUp":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        cardDrawn++;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
                
            if (player.at(playerIndex).People < pThresh) {
                player.at(playerIndex).People += bPBon;
            } else {
                if (player.at(playerIndex).Cath < player.at(playerIndex).Az) {
                    player.at(playerIndex).Cath += bFBon;
                } else {
                    player.at(playerIndex).Az += bFBon;
                }
            }
            
            break;
        
        case "uFigure":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }

            let figMovedU = false;
            let whichFigU = cardFigMove;
                
            switch (whichFigU) {
                case "A":
                    if (azTemple < maxLevel) {
                        azTemple++;
                        figMovedU = true;
                        cardFigMove = "";
                    }
                    if (azTemple >= maxLevel) {
                        cathTemple++;
                        figMovedU = true;
                        cardFigMove = "";
                    }
                    break;
                case "C":
                    if (cathTemple < maxLevel) {
                        cathTemple++;
                        figMovedU = true;
                        cardFigMove = "";
                    }
                    if (cathTemple >= maxLevel) {
                        azTemple++;
                        figMovedU = true;
                        cardFigMove = "";
                    }
                    break;
                }
            break;

        case "dFigure":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }
                
            let figMovedD = false;
            let whichFigD = "";
            while (figMovedD == false) {
                whichFigD = cardFigMove;
                
                switch (whichFigD) {
                    case "A":
                        if (azTemple > 0) {
                            azTemple--;
                            figMovedD = true;
                            cardFigMove;
                            if (azTemple == 0) {
                                gameWon();
                            }
                        }
                        if (azTemple <= 0) {
                            cathTemple--;
                            figMovedD = true;
                            cardFigMove;
                            if (cathTemple == 0) {
                                gameWon();
                            }
                        }
                        break;
                    case "C":
                        if (cathTemple > 0) {
                            cathTemple--;
                            figMovedD = true;
                            cardFigMove;
                            if (cathTemple == 0) {
                                gameWon();
                            }
                        }
                        if (cathTemple <= 0) {
                            azTemple--;
                            figMovedD = true;
                            cardFigMove;
                            if (azTemple == 0) {
                                gameWon();
                            }
                        }
                        break;
                }
            }

            break;

        case "iBlock":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        cardsInHand++;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }                
            
            if (players.at(playerIndex).Cards.length == 1) {
                if (players.Cards.at(0) == 0) {
                    players.Cards.at(0) = currentCard;
                }
            } else {
                players.Cards.push(currentCard);
            }

            break;

        case "rBlock":
            while (cardDrawn == false) {
                for (i=0;i<cards.at(currentCard).copies.length;i++) {
                    if (cards.at(currentCard).copies[i] == 0) {
                        cards.at(currentCard).copies[i] = 1;
                        cardsLeft--;
                        cardsInHand++;
                        hasCardResolved = true;         
                        break;
                    }
                }
            }      

            if (players.at(playerIndex).Cards.length == 1) {
                if (players.Cards.at(0) == 0) {
                    players.Cards.at(0) = currentCard;
                }
            } else {
                players.Cards.push(currentCard);
            }

            break;

        /*case "nQuad":
            //nQuad
            break;
        case "aSpace":
            //aSpace
            break;*/
    }
}

function cardPeopleConvert(whichFaith) {
    tFaithB = 0;
    tFaithP = 0;
    tPeopleP = 0;
    let tempOverflow = 0;

    switch (whichFaith) {
        case "A":
            tFaithTotal = player.at(playerIndex).Az;
            tPeopleTotal = player.at(playerIndex).People; // set Player people to temp value
            if (apocFlag != 2) {
                tempOverflow = tFaithP - tFaithTotal; // How much extra
                if (tempOverflow > pCon) { // if the overflow is higher than the conversion rate
                    tPeopleP = Math.ceil((tempOverflow/pCon)); // Set the people penalty
                    tFaithB = (tempOverflow % pCon); // set the remainder
                } else {
                    tFaithB = (tempOverflow % pCon);
                    tPeopleP = 1;
                }                    
            } else 
            if (apocFlag == 2) {
                tempCon = (pCon +1);
                tempOverflow = tFaithP - tFaithTotal;
                if (tempOverflow > tempCon) {
                    tPeopleP = (tempOverflow/tempCon);
                    tempOverflow -= TempCon;
                    tFaithB = (tempOverflow % tempCon);
                } else {
                    tFaithB = (tempOverflow % tempCon);
                    tPeopleP = 1;
                } 
            }
            tFaithTotal += tFaithB; // subtract penalty from temp faith
            tPeopleTotal -= tPeopleP;
            if (tPeopleTotal <= 0) {
                player.at(playerIndex).Lost = 1;
            }
            player.at(playerIndex).Az = tFaithTotal; //subtract total from Player
            player.at(playerIndex).People = tPeopleTotal;
            break;

        case "C":
            tFaithTotal = player.at(playerIndex).Cath;
            tPeopleTotal = player.at(playerIndex).People; // set Player people to temp value
            if (apocFlag != 1) {
                tempOverflow = tFaithP - tFaithTotal; // How much extra
                if (tempOverflow > pCon) { // if the overflow is higher than the conversion rate
                    tPeopleP = Math.ceil((tempOverflow/pCon)); // Set the people penalty
                    tFaithB = (tempOverflow % pCon); // set the remainder
                } else {
                    tFaithB = (tempOverflow % pCon);
                    tPeopleP = 1;
                }                    
            } else 
            if (apocFlag == 2) {
                tempCon = (pCon +1);
                tempOverflow = tFaithP - tFaithTotal;
                if (tempOverflow > tempCon) {
                    tPeopleP = (tempOverflow/tempCon);
                    tempOverflow -= TempCon;
                    tFaithB = (tempOverflow % tempCon);
                } else {
                    tFaithB = (tempOverflow % tempCon);
                    tPeopleP = 1;
                } 
            }
            tFaithTotal += tFaithB; // subtract penalty from temp faith
            tPeopleTotal -= tPeopleP;
            if (tPeopleTotal <= 0) {
                player.at(playerIndex).Lost = 1;
            }
            player.at(playerIndex).Cath = tFaithTotal; //subtract total from Player
            player.at(playerIndex).People = tPeopleTotal;
            break;
    }
}


function gameLogging(stuffToLog) { 
    let tempString = 'Writing to log: ' + stuffToLog;
    console.log(tempString);

}

function gameWon() {
    if (hasWon == 1) { // If the game has been won
        gameLogging("Player " + playerTurn + " has won!");
    }
}

function endTurn() {
    for(i=0;i<turnOrder.length;i++) {       // Check turnOrder Array
        if (turnOrder[i] == playerTurn) {
            if (hasFinished== true) {
                gameLogging('Removing ' +playerTurn + ' from turnOrder'); // Log
                turnOrder.splice(i,playerTurn);         // Remove current player from turnOrder
                hasMoved = false;                
                hasDrawn = false;
                hasCardResolved = false;
                hasConverted = false;
                hasMovedFig = false;
            }
        }
    }

    if (turnOrder.length < 1) { // if turnOrder is empty
        gameLogging('Turn Order 0'); 
        for (i = 1; i <= numPlayers; i++) { // get # of players in the game
            turnOrder.push(i); // Push all of them back to the turnOrder array
        }
        playerTurn = 1; // Set player turn back to 1
    }
    else { // if playerTurn array isn't empty,
        playerTurn++; // increment playerTurn
    }
}

function getRandomNuber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function strategySetup() {
    for(i=0;i<=playerTurn.length;i++) {
        switch (player.Strategy) {
            case 1:
                if(playerIndex <3){
                    primaryF = "Az";
                    secondaryF = "Cath";
                } else {
                    primaryF = "Cath";
                    secondaryF = "Az";
                }
        }
    }

}

function moveStrategy(whichPlayer) {
    let fTotal = 0;
    let pTotal = 0;
    let azTotal = 0;
    let cathTotal = 0;
    let fTotalSpace = 0;
    let aTotalSpace = 0;
    let cTotalSpace = 0;
    let pTotalSpace = 0;
    let highestTemple = "";
    

	switch (whichPlayer) {
		
        case 1:
            if (possibleMoves.length == 0) { // if there are no possible moves
                actualMove = -2; // set pass number
                return actualMove;
            } else if (possibleMoves.length == 1) { // If there is only one move
                actualMove = possibleMoves[0]; // take it
                return actualMove;
            } else if (player.at(playerIndex).People <pThresh) { // If we are below pThresh
                
                actualMove = strategyCheckMoves(possibleMoves, People);
               
                return actualMove; // return the final actualMove
            } else if (player.at(playerIndex).primaryF < (Math.ceil(fThresh * 1.5))) { // if primaryF <less> than 1.5*fThresh
                
                actualMove = strategyCheckMoves(possibleMoves, primaryF);
                
				return actualMove;
			} else if (player.at(playerIndex).secondaryF < fThresh) { // If secondaryF < fThresh
				
                actualMove = strategyCheckMoves(possibleMoves, secondaryF);
               
				return actualMove;
			} else { // if all of these are met
                for(i=0;i<possibleMoves.length;i++) {
                    if (fTotal < board.at(possibleMoves[i]).primaryF) { // find space with the highest primaryF
                        fTotal = board.at(possibleMoves[i]).primaryF;
                        fTotalSpace = possibleMoves[i];
                    }
                }
                for(i=0;i<possibleMoves.length;i++) { // Find the space with the highest People
                    if (pTotal < board.at(possibleMoves[i]).People) {
                        pTotal = board.at(possibleMoves[i]).People;
                        pTotalSpace = possibleMoves[i];
                    }
                }
                if (pTotal>Math.floor(fTotal/2) ) { // if highest People > Highest faith
                    actualMove = pTotalSpace; // get people
                    return actualMove;
                }else { // else get Faith
                    actualMove = fTotalSpace;
                    return actualMove;
                }
			}

		case 2:
            if (possibleMoves.length == 0) {
                actualMove = -2;
                return actualMove;
            } else if (possibleMoves.length == 1) {
                actualMove = possibleMoves[0];
                return actualMove;
            } else if (player.at(playerIndex).People <pThresh) { // If People > pThresh, get People
                
                actualMove = strategyCheckMoves(possibleMoves, People);
                
                return actualMove;
            } else if ((player.at(playerIndex).Az < fThresh) || (player.at(playerIndex).Cath < fThresh)) { //if either faith is below fThresh, go here second
                if ((player.at(playerIndex).Az < player.at(playerIndex).Cath) && (player.at(playerIndex).Az < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Az);
                    
                    return actualMove;
                } else if ((player.at(playerIndex).Cath < player.at(playerIndex).Az) && (player.at(playerIndex).Cath < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Cath);
                    
                    return actualMove;
                } else {
                    for(i=0;i<possibleMoves.length;i++) {
                        if (azTotal < board.at(possibleMoves[i]).Az) {
                            azTotal = board.at(possibleMoves[i]).Az;
                            aTotalSpace = possibleMoves[i];
                        }
                    }
                    for(i=0;i<possibleMoves.length;i++) {
                        if (cathTotal < board.at(possibleMoves[i]).Cath) {
                            cathTotal = board.at(possibleMoves[i]).Cath;
                            cTotalSpace = possibleMoves[i];
                        }
                    }
                    for(i=0;i<possibleMoves.length;i++) {
                        if (pTotal < board.at(possibleMoves[i]).People) {
                            pTotal = board.at(possibleMoves[i]).People;
                            pTotalSpace = possibleMoves[i];
                        }
                    }
                    if (azTotal > cathTotal) {
                        fTotal = azTotal;
                        fTotalSpace = aTotalSpace;
                    } else if (azTotal < cathTotal) {
                        fTotal = cathTotal;
                        fTotalSpace = cTotalSpace;
                    } else {
                        if (cTotalSpace < aTotalTotal) {
                            fTotalSpace = cTotalSpace;
                        } else {
                            fTotalSpace = aTotalSpace;
                        }
                    }
                    if (pTotal > Math.floor(fTotal/2)) {
                        actualMove = pTotalSpace;
                        return actualMove;
                    } else {
                        actualMove = fTotalSpace;
                        return actualMove;
                    }
                }
            }
            
        break;

        case 3:
            if (possibleMoves.length == 0) {
                actualMove = -2;
                return actualMove;
            } else if (possibleMoves.length == 1) {
                actualMove = possibleMoves[0];
                return actualMove;
            } else if (player.at(playerIndex).People <(Math.ceil((pThresh*1.5)))) { // If People > pThresh, get People
                
                actualMove = strategyCheckMoves(possibleMoves, People);
                
                return actualMove;
            } else if ((player.at(playerIndex).Az < fThresh) || (player.at(playerIndex).Cath < fThresh)) { //if either faith is below fThresh, go here second
                if ((player.at(playerIndex).Az < player.at(playerIndex).Cath) && (player.at(playerIndex).Az < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Az);
                    
                    return actualMove;
                } else if ((player.at(playerIndex).Cath < player.at(playerIndex).Az) && (player.at(playerIndex).Cath < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Cath);
                    
                    return actualMove;
                } else {

                    actualMove = strategyCheckMoves(possibleMoves, People);
                    
                    
                    return actualMove;
                }
            }
            
        break;

        case 4:
            if(apocFlag == 0){
                if(azTemple > cathTemple)
                {
                    highestTemple = "A";
                } else{
                    highestTemple = "C";
                }
            }
        

            if (possibleMoves.length == 0) {
                actualMove = -2;
                return actualMove;
            } else if (possibleMoves.length == 1) {
                actualMove = possibleMoves[0];
                return actualMove;
            } else if (player.at(playerIndex).People < pThresh) { // If People > pThresh, get People
                
                actualMove = strategyCheckMoves(possibleMoves, People);
                
                return actualMove;
            } else if ((player.at(playerIndex).Az < fThresh) || (player.at(playerIndex).Cath < fThresh)) { //if either faith is below fThresh, go here second
                if ((player.at(playerIndex).Az < player.at(playerIndex).Cath) && (player.at(playerIndex).Az < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Az);
                    
                    return actualMove;
                } else if ((player.at(playerIndex).Cath < player.at(playerIndex).Az) && (player.at(playerIndex).Cath < pThresh)) {
                    
                    actualMove = strategyCheckMoves(possibleMoves, Cath);
                    
                    return actualMove;
                } else if (apocFlag == 0) {
                    if(highestTemple == "A") {
                        if(player.at(playerIndex).Az < (azTemple + 1)) {
                            
                            actualMove = strategyCheckMoves(possibleMoves, Az);
                            
                            return actualMove;
                        }
                    } else {
                        if(player.at(playerIndex).Cath < (cathTemple + 1)) {

                            actualMove = strategyCheckMoves(possibleMoves, Cath);
                            
                            return actualMove;
                        }
                    }
                } else {
                    actualMove = strategyCheckMoves(possibleMoves, People);
                   
                    return actualMove;
                }
            }
        }
}
        
function strategyCheckMoves(pMoves, resource) {
    let pMoves = possibleMoves;
    let pMove = 0;
    let checkMove = 0;
    let toCheck = '';
    let aMove = 0;
    
    toCheck = resource;

    pMove = board.at(possibleMoves[0]).toCheck;
    for (i=1;i<=possibleMoves.length;i++) {
        checkMove = board.at(pMoves[i]).toCheck;
        if (checkMove > pMove) {
            pMove = checkMove;
            aMove = pMoves[i];
        }	
    }
    return aMove;

}


function strategyResourceLoop(whichPlayer) {
	let highestTemple = '';
    let a1Faith = 0;
    let a2Faith = 0;
    let a3Faith = 0;
    let a4Faith = 0;
    let c1Faith = 0;
    let c2Faith = 0;
    let c3Faith = 0;
    let c4Faith = 0;
    let p1People = 0;
    let p2People = 0;
    let p3People = 0;
    let p4People = 0;
    let aFlag = apocFlag;
    
    switch (whichPlayer) {
		case 1:
			a1Faith = player.at(playerIndex).Az;
			c1Faith = player.at(playerIndex).Cath;
			p1People = player.at(playerIndex).People;

			if (azTemple > cathTemple) {
				highestTemple = 'A';
			} else if (azTemple < cathTemple) {
				highestTemple = 'C';
			} else if (primaryF == "Az") {
				highestTemple = 'A';
			} else {
				highestTemple = 'C';
			}

			if (primaryF == 'Az') {
				if (highestTemple = 'A') {
					aFlag = apocFlag;
					while (aFlag == 0) {
						while (c1Faith > fThresh) {
							convertFaith(C);
							c1Faith = player.at(playerIndex).Cath;
						}
						a1Faith = player.at(playerIndex).Az;
						while (a1Faith > fThresh) {
							if (azTemple > maxTemple) {
								if (a1Faith > azTemple) {
									templeHandler(A)
									aFlag = apocFlag;
								}
								a1Faith = player.at(playerIndex).Az;
							}
						}
					}
					while (aFlag != 0) {
						if (azTemple == 1) {
							if (p1People > 6) {
								templeHandler (A);
							}
						} else {
							while (c1Faith > fThresh) {
								convertPeople(C);
								c1Faith = player.at(playerIndex).Cath;
							}
							while (a1Faith > fThresh) {
								convertPeople(A);
								a1Faith = player.at(playerIndex).Az;
							}
							p1People = player.at(playerIndex).People;				
							while (p1People > pThresh) {
								if ((p1People - (templeMax-cathTemple)) > (pThresh/2)) {
									templeHandler (A);
									p1People = player.at(playerIndex).People;	
									if (azTemple == 1) {
										if (p1People > 6) {
											templeHandler (A);
										}
									}
								}
							}
						}
					}
					resourceLoopDone = true;
				} else if (highestTemple = 'C') {
					aFlag = apocFlag;
					while (aFlag == 0) {
						while (a1Faith > fThresh) {
							convertFaith(A);
							a1Faith = player.at(playerIndex).Az;
						}
						c1Faith = player.at(playerIndex).Cath;
						while (c1Faith > fThresh) {
							if (cathTemple > maxTemple) {
								if (c1Faith > azTemple) {
									templeHandler(C)
									aFlag = apocFlag;
								}
								c1Faith = player.at(playerIndex).Cath;
							}
						}
					}
					while (aFlag != 0) {
						if (cathTemple == 1) {
							if (p1People > 6) {
								templeHandler (C);
							}
						} else {
							while (c1Faith > fThresh) {
								convertPeople(C);
								c1Faith = player.at(playerIndex).Cath;
							}
							while (a1Faith > fThresh) {
								convertPeople(A);
								a1Faith = player.at(playerIndex).Az;
							}
							p1People = player.at(playerIndex).People;				
							while (p1People > pThresh) {
								if ((p1People - (templeMax-cathTemple)) > Math.ceil(pThresh/2)) {
									templeHandler (C);
									p1People = player.at(playerIndex).People;	
									if (azTemple == 1) {
										if (p1People > 6) {
											templeHandler (C);
										}
									}
								}
							}
						}
					}
				}
				resourceLoopDone = true;
			} 
        break;
            
        case 2:
            a2Faith = player.at(playerIndex).Az;
			c2Faith = player.at(playerIndex).Cath;
			p2People = player.at(playerIndex).People;

            if (azTemple > cathTemple) {
				highestTemple = 'A';
			} else if (azTemple < cathTemple) {
				highestTemple = 'C';
            } else if (a2Faith > c2Faith) {
                highestTemple = 'A';
            } else {
				highestTemple = 'C';
			}

            aFlag = apocFlag;

            if (highestTemple = 'A') { // if Aztec figure is highest
                aFlag = apocFlag;  
                while (aFlag == 0) {  // and there's no apocalypse
                    while (c2Faith > fThresh) { // While Cath faith is higher than fThresh
                        convertFaith(C); // Convert to Aztec Faith
                        c2Faith = player.at(playerIndex).Cath; // Refresh Cath Faith
                    }
                    a2Faith = player.at(playerIndex).Az; 
                    while (a2Faith > fThresh) { // While Aztec Faith is higher than fThresh
                        if (azTemple > maxTemple) { // and Aztec figure is lower than temple Max
                            if (a2Faith > azTemple) { //if we have enough faith to move the figure 
                                templeHandler(A) // Move the figure.
                                aFlag = apocFlag; // Check to see if the apocalypse flag has changed.
                            }
                            a2Faith = player.at(playerIndex).Az; // Update Aztec Faith
                        }
                    }
                }
                while (aFlag != 0) { // If there IS an apocalypse 
                    if (azTemple == 1) { // and Az temple is at the lowest level
                        if (p1People > 6) { // And we have more than 6 people
                            templeHandler (A); // Win the game
                        }
                    } else { 
                        while (c2Faith > fThresh) { // while Cath faith is above fThresh
                            convertPeople(C); // Convert Cath to People
                            c2Faith = player.at(playerIndex).Cath; // Update Cath
                        }
                        while (a2Faith > fThresh) { // Do the same to Aztec Faith
                            convertPeople(A);
                            a2Faith = player.at(playerIndex).Az;
                        }
                        p1People = player.at(playerIndex).People;				
                        while (p2People > pThresh) { // if people is above pThresh
                            if ((p2People - (templeMax-azTemple)) > (pThresh/2)) { // and after we pay we will be above .5 pThres
                                templeHandler (A); // Move figure
                                p2People = player.at(playerIndex).People;	// Update people
                                if (azTemple == 1) { // if we can win, do it.
                                    if (p2People > 6) {
                                        templeHandler (A);
                                    }
                                }
                            }
                        }
                    }
                }
                resourceLoopDone = true;
            } else { // Do the same in reverse for the Cath temple
                aFlag = apocFlag;  
                while (aFlag == 0) {  
                    while (a2Faith > fThresh) { 
                        convertFaith(A); 
                        a2Faith = player.at(playerIndex).Az; 
                    }
                    c2Faith = player.at(playerIndex).Cath; 
                    while (c2Faith > fThresh) { 
                        if (cathTemple > maxTemple) { 
                            if (a2Faith > azTemple) { 
                                templeHandler(C) 
                                aFlag = apocFlag; 
                            }
                            c2Faith = player.at(playerIndex).Cath; 
                        }
                    }
                }
                while (aFlag != 0) { 
                    if (cathTemple == 1) { 
                        if (p2People > 6) { 
                            templeHandler (C); 
                        }
                    } else { 
                        while (c2Faith > fThresh) { 
                            convertPeople(C); 
                            c2Faith = player.at(playerIndex).Cath; 
                        }
                        while (a2Faith > fThresh) { 
                            convertPeople(A);
                            a2Faith = player.at(playerIndex).Az;
                        }
                        p2People = player.at(playerIndex).People;				
                        while (p2People > pThresh) { 
                            if ((p2People - (templeMax-azTemple)) > Math.floor(pThresh/2)) { 
                                templeHandler (C); 
                                p2People = player.at(playerIndex).People;	
                                if (azTemple == 1) { 
                                    if (p2People > 6) {
                                        templeHandler (C);
                                    }
                                }
                            }
                        }
                    }
                }
                resourceLoopDone = true;
            }
        break;

        case 3: // values people

            a3Faith = player.at(playerIndex).Az;
			c3Faith = player.at(playerIndex).Cath;
			p3People = player.at(playerIndex).People;

            if (azTemple > cathTemple) {
				highestTemple = 'A';
			} else if (azTemple < cathTemple) {
				highestTemple = 'C';
            } else if (a3Faith >= c3Faith) {
                highestTemple = 'A';
            } else {
				highestTemple = 'C';
			}

            aFlag = apocFlag;
            if(highestTemple == 'A'){
                while (aFlag ==0 ) {
                    while((p3People < (Math.ceil(pThresh*1.5))) && (c3Faith > fThresh)){
                            convertPeople(C);
                            p3People = player.at(playerIndex).People;
                            c3Faith = player.at(playerIndex).Cath;
                        }
                    while((p3People < (Math.ceil(pThresh*1.5))) && (a3Faith > fThresh)){
                        convertPeople(A);
                        p3People = player.at(playerIndex).People;
                        a3Faith = player.at(playerIndex).Az;
                    }
                    while (c3Faith > fThresh) {
                        convertFaith(C);
                        c3Faith = player.at(playerIndex).Cath;
                    }
                    while (a3Faith > fThresh) { 
                        if (azTemple > maxTemple) { 
                            if (a3Faith > azTemple) { 
                                templeHandler(A) 
                                aFlag = apocFlag; 
                            }
                            a3Faith = player.at(playerIndex).Az; 
                        }
                    }
                }
                while (aFlag !=0 ) {
                    if (azTemple == 1) { 
                        if (p3People > 6) { 
                            templeHandler (A); 
                        }
                    } else {
                        while((p3People < (Math.ceil(pThresh*1.5))) && (c3Faith > fThresh)){
                                convertPeople(C);
                                p3People = player.at(playerIndex).People;
                                c3Faith = player.at(playerIndex).Cath;
                            }
                        while((p3People < (Math.ceil(pThresh*1.5))) && (a3Faith > fThresh)){
                            convertPeople(A);
                            p3People = player.at(playerIndex).People;
                            a3Faith = player.at(playerIndex).Az;
                        }
                        while(p3People < (fThresh + (templeMax - azTemple))) {
                            templeHandler(A);
                            p3People = player.at(playerIndex).People;
                            if (azTemple == 1) { 
                                if (p3People > 6) { 
                                    templeHandler (A); 
                                }
                            }
                        }
                    }
                }
                resourceLoopDone = true;
            } else {
                while (aFlag ==0 ) {
                    while((p3People < (Math.ceil(pThresh*1.5))) && (a3Faith > fThresh)){
                            convertPeople(A);
                            p3People = player.at(playerIndex).People;
                            a3Faith = player.at(playerIndex).Az;
                        }
                    while((p3People < (Math.ceil(pThresh*1.5))) && (c3Faith > fThresh)){
                        convertPeople(C);
                        p3People = player.at(playerIndex).People;
                        c3Faith = player.at(playerIndex).Cath;
                    }
                    while (a3Faith > fThresh) {
                        convertFaith(A);
                        a3Faith = player.at(playerIndex).Az;
                    }
                    while (c3Faith > fThresh) { 
                        if (cathTemple > maxTemple) { 
                            if (c3Faith > cathTemple) { 
                                templeHandler(C) 
                                aFlag = apocFlag; 
                            }
                            c3Faith = player.at(playerIndex).Cath;
                        }
                    }
                }
                while (aFlag !=0 ) {
                    if (cathTemple == 1) { 
                        if (p3People > 6) { 
                            templeHandler (C); 
                        }
                    } else {
                        while((p3People < (Math.ceil(pThresh*1.5))) && (a3Faith > fThresh)){
                                convertPeople(A);
                                p3People = player.at(playerIndex).People;
                                a3Faith = player.at(playerIndex).Az;
                            }
                        while((p3People < (Math.ceil(pThresh*1.5))) && (c3Faith > fThresh)){
                            convertPeople(C);
                            p3People = player.at(playerIndex).People;
                            c3Faith = player.at(playerIndex).Cath;
                        }
                        while(p3People < (fThresh + (templeMax - cathTemple))) {
                            templeHandler(C);
                            p3People = player.at(playerIndex).People;
                            if (azTemple == 1) { 
                                if (p3People > 6) { 
                                    templeHandler (C); 
                                }
                            }
                        }
                    }
                }
            }
            resourceLoopDone = true;
        break;
        
        case 4:
            a4Faith = player.at(playerIndex).Az;
			c4Faith = player.at(playerIndex).Cath;
			p4People = player.at(playerIndex).People;

            if (azTemple > cathTemple) {
				highestTemple = 'A';
			} else if (azTemple < cathTemple) {
				highestTemple = 'C';
            } else if (a4Faith >= c4Faith) {
                highestTemple = 'A';
            } else {
				highestTemple = 'C';
			}

            aFlag = apocFlag;
            if(highestTemple == 'A'){
                while (aFlag ==0 ) {
                    while(p4People < pThresh) {
                        convertPeople(C);
                        c4Faith = player.at(playerIndex).Cath;
                    }
                    while (c4Faith > fThresh) {
                        convertFaith(C);
                        c4Faith = player.at(playerIndex).Cath;
                    }
                    while (a4Faith > fThresh) { 
                        if (azTemple > maxTemple) { 
                            if (a4Faith > azTemple) { 
                                templeHandler(A) 
                                aFlag = apocFlag; 
                            }
                            a4Faith = player.at(playerIndex).Az; 
                        }
                    }
                }
                while (aFlag !=0 ) {
                    if (azTemple == 1) { 
                        if (p4People > 6) { 
                            templeHandler (A); 
                        }
                    } else {
                        while((p4People < pThresh) || ((p4People < (templeMax - azTemple)) && (c4Faith > fThresh))) {
                                convertPeople(C);
                                p4People = player.at(playerIndex).People;
                                c4Faith = player.at(playerIndex).Cath;
                            }
                            while((p4People < pThresh) || ((p4People < (templeMax - azTemple)) && (a4Faith > fThresh))) {
                            convertPeople(A);
                            p4People = player.at(playerIndex).People;
                            a4Faith = player.at(playerIndex).Az;
                        }
                        while(p4People < ((fThresh*.5) + (templeMax - azTemple))) {
                            templeHandler(A);
                            p4People = player.at(playerIndex).People;
                            if (azTemple == 1) { 
                                if (p4People > 6) { 
                                    templeHandler (A); 
                                }
                            }
                        }
                    }
                }
                resourceLoopDone = true;
            } else {
                while (aFlag == 0) {
                    while(p4People < pThresh) {
                        convertPeople(A);
                        a4Faith = player.at(playerIndex).Az;
                    }
                    while (a4Faith > fThresh) {
                        convertFaith(A);
                        a4Faith = player.at(playerIndex).Az;
                    }
                    while (c4Faith > fThresh) { 
                        if (cathTemple > maxTemple) { 
                            if (c4Faith > cathTemple) { 
                                templeHandler(C) 
                                aFlag = apocFlag; 
                            }
                            c4Faith = player.at(playerIndex).Cath; 
                        }
                    }
                }
                while (aFlag !=0 ) {
                    if (azTemple == 1) { 
                        if (p4People > 6) { 
                            templeHandler (C); 
                        }
                    } else {
                        while((p4People < pThresh) || ((p4People < (templeMax - cathTemple)) && (c4Faith > fThresh))) {
                                convertPeople(C);
                                p4People = player.at(playerIndex).People;
                                c4Faith = player.at(playerIndex).Cath;
                            }
                            while((p4People < pThresh) || ((p4People < (templeMax - cathTemple)) && (a4Faith > fThresh))) {
                            convertPeople(A);
                            p4People = player.at(playerIndex).People;
                            a4Faith = player.at(playerIndex).Az;
                        }
                        while(p4People < ((fThresh*.5) + (templeMax - cathTemple))) {
                            templeHandler(C);
                            p4People = player.at(playerIndex).People;
                            if (cathTemple == 1) { 
                                if (p4People > 6) { 
                                    templeHandler (C); 
                                }
                            }
                        }
                    }
                }
            }
            resourceLoopDone = true;
    }	
}


function cardTest() {
    let endTest = false;
    cardDrawn = false;
    cardsLeft = 42;
    playerTurn = 1;
    player.at(playerIndex).Az = 30;
    player.at(playerIndex).Cath = 30;
    player.at(playerIndex).People = 30;
    cardFigMove = "A";
    while (endTest == false) {
        testWhichCard = prompt('Test which card?');
        if (testWhichCard == -1) {
            endTest = true;
        } else {
            console.log('Player Az before: '+player.at(playerIndex).Az);
            console.log('Player Cath before: '+player.at(playerIndex).Cath);
            console.log('Player People before: '+player.at(playerIndex).People);
            console.log('Az Temple = '+ azTemple);
            console.log('Cath Temple = '+ cathTemple);
            console.log('-----')
            console.log('testing card: '+testWhichCard);
            console.log('card: '+cards.at(testWhichCard).text);
            
            cardDrawn = false;
            cardHandler(testWhichCard);
            console.log('Player Az after: '+player.at(playerIndex).Az);
            console.log('Player Cath after: '+player.at(playerIndex).Cath);
            console.log('Player People after: '+player.at(playerIndex).People);
            console.log('-----')

        }   
    }
}

function boardTest() {
    endTest = false;
    testSpaceID = 0;
    let boardSpace = 0;
    playerQuad = 0;
    lastSpace = 0;
    blockerTest = false;
    possibleMoves = [];
    while (endTest == false) {
        testSpaceID = prompt('test which space');
        if (testSpaceID == -1) {
            endTest = true;
            break;
        }
        playerQuad = board.at(testSpaceID).Quad; // Set current player's Quad
        boardSpace = board.at(testSpaceID).Space;
        lastSpace = board.at(((playerQuad*5)-1)).Space; 
        
        for (boardSpace;boardSpace<=lastSpace;boardSpace++) {
            blockerTest = board.at(testSpaceID).blocker;
            if (blockerTest == false) { // test to see if there's a blocker
                possibleMoves.push(testSpaceID);    // if not, push to possibleMoves
                testSpaceID++;       
            }
            if (blockerTest == true) {
                blockedMoves.push (testSpaceID);
            }
        }
    }        
}


//gameStart();
//cardTest();
//boardTest();


/* while (hasWon == false) {
    boardQuery();
    playerStrategy(playerIndex);
    boardUpdate(actualMove);
    drawCard();
    cardHandler();
    playerStrategy(playerIndex);
    blocker();
    endTurn();
    turnStart();
} */
