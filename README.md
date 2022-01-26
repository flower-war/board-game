# Flower War

An Aztec-inspired strategy board game for up to 2-6 players 

![IMG_1748](https://user-images.githubusercontent.com/6363445/151081070-679cf915-f6fc-4717-a492-1aef5cdab979.jpg)

## Game Assets

- (1) D6
- (5) Player Tokens - Representing the compass directions, East, North, South, and West
- (1) Game board - Circular game board divided into 20 sections and four quadrants with a blue section in the middle to represent Lake Toxcoco. Printed in four pieces, diameter up to 21.5”
- (1) Templo Mayor - 3D printed pyramid with two slots for sacrifices to Huitzilopochtli and Tlaloc. A raspberry pi or arduino powered counter keeps track of the sacrifices that the players make. (For early manual tracking, use a stack of post it strips to tally sacrifices.)
- (360) Skull Beads - Players can use skull beads, 3D printed skulls, pony beads, flower beads, red beans, or other counters. 
- (20) Tzompantli - Token containers that can hold up to 12 tokens each. One for each day (space) on the board. 
- (20) Calendar Discs - Tokens representing each day (space) on the board.

### Cards 

#### Huitzilopochtli (War) Cards

Acquired by sacrificing skulls to Huitzilopochtli, the god of war. These cards provide bonuses to player combat. 

#### Tlaloc (Rain) Cards

Acquired by sacrificing skulls to Tlaloc, the god of rain. These cards provide defense-oriented and resource building bonuses.

[Card descriptions are listed as Issues](https://github.com/adunderwood/Flower-War/issues)

## Objective

Players represent nomadic Aztec tribes searching East, North, West, and South for the sign to settle given to them by the God Huitzilopochtli: an eagle eating a snake on a nopales cactus. The tribes engage in "Flower Wars" against each other to gather skulls to sacrifice to their gods. 

Players must circle the game board until they collect three cards: an eagle, a serpent, and a nopal cactus flower. The player who collects all three cards settles Tenotichitlan and wins the game. 

## Mechanics 

Along the way, skulls are collected and sacrificed to one of three Aztec deities: 

  Huitzilopochtli (war)
  Tlaloc (rain)
  Tonanzin (Mary of Guadalupe)

In play, this is represented by a 3D printed Templo Mayor that sits in the center of a circular game board surrounded by a “lake” of blue representing Lake Texcoco. At the top of the templo mayor are two slots one for Huitzilopochtli and one for Tlaloc. When a player makes a “sacrifice” they place a token that they have collected and put it into the slot for the God they wish to sacrifice it to. The token rolls down the slot and into the “lake” which gradually fills with tokens. The lake is partitioned so that sacrifices given to each God fill a different half of the lake. 

The Templo Mayor will include a counter which keeps track of the number of tokens that have been put into each slot. 

### The Game Board

The circular game board surrounding Lake Toxcoco and the Templo Mayor represents the Aztec ritual calendar. It is divided into twenty spaces and split into four quadrants representing the compass directions. 


![IMG_1735](https://user-images.githubusercontent.com/6363445/151081049-0e8dfbd2-2ce4-446d-9642-b6277bbab91c.jpg)

<img width="1024" alt="Untitled 22" src="https://user-images.githubusercontent.com/6363445/142915773-0096eee6-d919-4611-8967-d92e9459ab3c.PNG">

### Movement

Players move around the board by rolling 1d6 and moving counter clockwise from their starting position, from east to west, following the path of the sun. 

### Turn Order:

1. Battle
2. Collect Skull from tzompantli
3. Perform card Actions  
4. Make Sacrifices  

### Collecting Tokens 

Each space on the board is given a tzompantli containing 12 skulls. One token is placed on the space itself, brining the total to 13. 

When a player lands on the space they collect a skull. Collecting the skull increases the “day count” of the space. The day count can be read as [Space Name] [# of Tokens Removed] such as Crocodile 2 or Jaguar 5.

If a player takes the last skull from a day count, they receive a disc that represents the spirit of that space. When the last skull is taken from a space and the disc has been issuedm the day count resets and the space is again given 13 tokens. 

If another player takes the final token from that space again, the players battle for possession of the disc.

### Player Combat

When two players land on the same space they must do battle against each other. 

Battle is held by rolling 1D by each player. The player with the higher number wins. The winner takes one skull (plus any applicable bonuses) from the losing player. Applicable cards may be played during battle. If the losing player has zero skulls, the winner may draw a card from the god of their choice instead.

### Collecting Cards

Instead of sacrificing tokens to the Gods of the Templo Mayor, the player may sacrifice tokens to Mary. Sacrificing to Mary removes the tokens from play (they’re put away, rather than into the lake). 

## Apocalypse

The apocalypse happens 13 rounds after it has been triggered. A player may still win during these turns. 

To count the rounds of the apocalypse, the player who triggered it takes a tzompantli and fills it with 12 skulls.Each round after the apocalypse has been triggered, when the player with the tzompantli's turn comes up, they remove one skull to count down the number of rounds until the end of the game. 

The apocalypse may be forestalled if the sacrifices to the two Templo Mayor gods are exactly even. While the apocalypse is forestalled, no skulls are removed from the tzompantli counter. The countdown resumes when the number of skulls is uneven in favor of either God. The game ends when the countdown reaches zero. 

Once it has been triggered, the apocalypse will always happen in one of two ways: a flood, or a war, depending on which god has been given the least sacrifices. 

## Tlaloc's Flood:

All players take two skulls from the current space. Remove the rest of the skulls from the tzompantli. No more skulls can be collected from tiles due to flooding. Skulls can only be obtained through battle. Cards and bonuses still apply. 

## Cortez' Invasion:

No skulls can be collected except in battle. Each player battles against Cortez' invasion force every turn throughout the apocalypse by rolling 1D against Cortez. Due to thier superior weaponry, Cortez' army always rolls a 5. Skulls lost to Cortez in battle are removed from play and cannot be sacrificed. Skulls won in battle are picked up from the current tzompantli. Cards and bonuses still apply. 

### Triggering the apocalpyse 

#### Quick Mode - Macehualtin, One Who is Deserved into Being

The apocalypse is triggered when the first calendar disc has been picked up from the board. The disc that was picked up determines the flavor of the apocalypse. Based on the calendar disc that was been picked up, the rules of the game will change in one of twenty unique ways. 

#### Long Mode - Tlamacazqui, The Giver of Things

The apocalypse is triggered when any two calendar discs have been picked up. The discs combine together and create two apocalypse rule-change effects instead of just one. The rounds of the apocalypse are counted by the player who picked up the second token. The rules of the game will change in one of 380 unique ways.

#### Epic Mode - Tonalpohualli, The Counting of Days

History is written by the victors. The original Mexcica people were told by their god, Huitzilopochtli to look for the sign of an Eagle sitting on a nopal cactus eating a snake. You will tell your own story by saying that your god (Tlaloc or Huitzilopochtli) told you to find the three signs that you have already found.  

The apocalypse is triggered when any three calendar discs have been picked up. All three effects are combined when the apocalypse is triggered, creating 6,840 possible endings. 

### Legal Notice 

This game is open source. It is licensed under the GPL license which means that it is freely available for use and modification. However any modified versions must also be released under the GPL license.  
