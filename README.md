# Flower War
A board game for up to four players 

![IMG_0931](https://user-images.githubusercontent.com/6363445/149651962-98810edd-fc5d-4831-907b-47f51f54f39e.jpg)

## Game Assets

(1) D6

(4) Player Tokens

Representing the compass directions, East, North, West, and South

(1) Game board

Circular game board divided into 20 sections and four quadrants with a blue section in the middle to represent Lake Toxcoco. Inkjet printed in four pieces, diameter up to 16”

(1) Templo Mayor

3D printed pyramid with two slots for sacrifices to Huitzilopochtli and Tlaloc. A raspberry pi or arduino powered counter keeps track of the sacrifices that the players make. (For early manual tracking, use a stack of post it strips to tally sacrifices.)

(360) Skull Beads. Players can use skull beads, 3D printed skulls, pony beads, red beans, or other counters. 

(20) Tzompantli - Token containers that can hold up to 12 tokens each. One for each space on the board. 

(20) Week Tokens

Twenty tokens representing each day (space) on the board. Collecting these tokens (by landing on a space 13 times, an Aztec week, or as gifts from the Gods) provide bonuses to the player by embodying the spirit of the day. If a player holds the token for a day, anyone who lands on that space must pay them a tribute of one skull bead to occupy it. This tribute is paid even if a battle occurs on the space. 

The three winning cards can also be collected as week tokens. 

[Week Card Descriptions](https://github.com/adunderwood/Flower-War/blob/main/WEEKS.md)

(n) War cards

Acquired by sacrificing tokens to Huitzilopochtli, these cards provide bonuses to player combat. 

(n) Rain Cards

Acquired by sacrificing tokens to Tlaloc and provide bonuses when a player lands on a space.

## List of Effects from Cards

[Day Card Descriptions](https://github.com/adunderwood/Flower-War/blob/main/DAYS.md)

## Objective

Players represent nomadic Aztec tribes searching East, North, West, and South for the sign to settle given to them by the God Huitzilopochtli: an eagle eating a snake on a nopales cactus. 

Players must circle the game board until they collect three cards: an eagle, a serpent, and a nopal cactus flower. The player who collects all three cards settles Tenotichitlan and wins the game. 

## Mechanics 

Along the way resources are collected and sacrificed to one of three Aztec deities: Huitzilopochtli (war), Tlaloc (rain), or Tonanzin (Mary of Guadalupe). 

In play, this is represented by a 3D printed Templo Mayor that sits in the center of a circular game board surrounded by a “lake” of blue representing Lake Texcoco. 

At the top of the templo mayor are two slots one for Huitzilopochtli and one for Tlaloc. When a player makes a “sacrifice” they place a token that they have collected and put it into the slot for the God they wish to sacrifice it to. The token rolls down the slot and into the “lake” which gradually fills with tokens. The lake is partitioned so that sacrifices given to each God fill a different half of the lake. 

The Templo Mayor will include a Raspberry Pi counter which keeps track of the number of tokens that have been put into each slot. 

### The Game Board

The circular game board surrounding Lake Toxcoco and the Templo Mayor represents the Aztec ritual calendar. It is divided into twenty spaces and split into four quadrants representing the compass directions. 

<img width="1024" alt="Untitled 22" src="https://user-images.githubusercontent.com/6363445/142915773-0096eee6-d919-4611-8967-d92e9459ab3c.PNG">

### Movement

Players move around the board by rolling 1d6 and moving counter clockwise from their starting position, from east to west. 

### Turn Order:

1. Collect Tokens
2. Calculate bonuses
3. Do battle 
4. Make sacrifices 
5. Card actions 

### Collecting Tokens 

Each space on the board is given 13 tokens. One token is placed on the space itself. 12 tokens are placed in a storage compartment attached to the space on the board. 

When a player lands on the space they collect a token. Collecting the token increases the “day count” of the space. The day count can be read as [Space Name] [# of Tokens Removed] such as Crocodile 2 or Jaguar 5.

If a player takes the last token from a day count, they receive a card that represents the spirit of that space. That card allows the player holding it to receive tribute from any other player who lands on that space. 

When the last token is taken from a space and the card has been issued the count resets and the space is again given 13 tokens. 

If another player takes the final token from that space again, the player who holds the card must give it to the other player.

### Player Combat

When two players land on the same space they must do battle against each other. Battle is held by rolling 1d6 by each player. The player with the higher number takes the lower number of tokens from the losing player. If the losing player has less than the required amount they pay all the tokens they have.  If they have no tokens, they may pay a card instead. If they have no cards and no tokens, they must draw a Day card and give it to the winning player. 

### Collecting Cards

Instead of sacrificing tokens to the Gods of the Templo Mayor, the player may sacrifice 7 tokens to Mary for the opportunity to draw a Day card from the deck. To do this they trade 7 tokens for a card. Sacrificing to Mary removes the tokens from play (they’re put away, rather than into the lake). 

Within both the day and the week cards are events that can affect game play or bonuses for the player as well as cards for cactus (flower), eagle, and serpent. The ONLY way to win the game is by collecting those three cards. 

## Ending the Game 

Victory is difficult. If a player has not won before all 20 day cards have been issued, the Gods will intervene and end the game in an apocalypse. 

Based on the sacrifices that the players have made, the God with the most tokens intervenes to end the game. 

If the players have made the most sacrifices to Tlaloc, the game ends in a flood. If they have made more sacrifices to Huitzilopochtli the game ends with a war — the invasion of Cortez. If the tokens are exactly even the apocalypse is forestalled until the balance is broken and one God has more tokens than the other, at which point the count resumes. 

A player may still win during the apocalypse but it is unlikely. 

### Apocalypse

The apocalypse is triggered after 260 total tokens have been sacrificed. 

Once triggered the apocalypse will always happen in one of two ways: a flood, or a war. The apocalypse happens 13 turns after it has been triggered. A player may still win during these turns. 

The apocalypse may be forestalled if the sacrifices to the two Templo Mayor gods are exactly even. At that point the countdown resumes when the number of tokens is uneven in favor of either God. The game ends when the countdown reaches zero. 

The game can end with no players having won. 

#### Flood:

No more tokens can be collected from tiles due to flooding. Bonuses and tributes still apply. 

#### War:

Tokens are still collected from tiles but one token is lost per tile due to infighting among the tribes. Bonuses and tributes still apply. 

#### Legal Notice 

This game is open source. It is licensed under the GPL license which means that it is freely available for use and modification. However any modified versions must also be released under the GPL license.  
