# Test report
This test report documents the results of manual testing performed on The Color Game.

## Test result

 Test Case ID |  Short description                                   | Status |
|--------------|-----------------------------------------------|--------|
| Testcase 1.1 | See that the Change Color button appear       | Passed |
| Testcase 1.2 | Successful change of color theme              | Passed |
| Testcase 2.1 | Select "Classic Mode"                         | Passed |
| Testcase 2.2 | Correct color guess in classic mode.                           | Passed |
| Testcase 2.3 | Incorrect color guess in classic mode.                     | Passed |
| Testcase 3.1 | Restart a classic game                        | Passed |
| Testcase 3.2 | Restart a timed game                          | Passed |
| Testcase 4.1 | Navigate back to the start page               | Passed |
| Testcase 5.1 | Select "Timed Mode"                           | Passed |
| Testcase 5.2 | Correct color guess within the time limit           | Passed |
| Testcase 5.3 | Incorrect color guess within the time limit         | Passed |
| Testcase 5.4 | Failing to guess before time runs out         | Passed |

## Use cases

### Use case 1: Change color theme
Primary scenario:

1. The user wants to change the color theme of the application.
2. The user navigates to the application and clicks on the "Change Color" button.
3. The application updates the color theme, affecting the navigation bar, gamemode & restart buttons and the RGB value presented in the gamemodes.

### Use case 2: Start classic gamemode
Primary scenario:

1. The user wants to play the classic gamemode.
2. The user navigates to the startpage and clicks the "Classic Mode" button.
3. The application starts the classic gamemode displaying an RGB value, three color options to guess from, a current score, the user's best score, and a "Back to Start" button.

### Use case 3: Restart game
Primary scenario:

1. After an incorrect guess or after the time has run out, the user wants to restart the game.
2. The user clicks the "Restart" button.
3. The application restarts the game, presenting a new RGB value to guess from, and resets the score to zero.

### Use case 4: Back to start
Primary scenario:

1. While playing a game (in a gamemode), the user wants to goback to the start page.
2. The user clicks the "Back to Start" button.
3. The application ends the active game session and navigates back to the start page.

### Use case 5: Start timed gamemode
Primary scenario:

1. The user wants to play the timed gamemode.
2. The user navigates to the start page and clicks the "Timed Mode" button.
3. The application starts the timed game mode by displaying an RGB value, a countdown timer, three color options to guess from, a current score, the user's best score, and a "Back to Start" button.

## Test cases

### Testcase for UC1: Change color theme
#### Testcase 1.1 See that the Change Color button appear
Input: 
- Navigate to webapplication.

Output: 
- Change color button should appear in the top right corner.

#### Testcase 1.2 Successful change of colortheme.
Input: 
- Press the "Change Color" button.

Output: 
- The color of the navigation bar and the gamemode buttons should change to the same color. 
- If you are in a game and press the button, the color of the rgb string presented should also change, as well as the restart button when a game is lost.

### Testcase for UC2: Start classic gamemode.
#### Testcase 2.1 Select "Classic Mode"
Input: 
- Click the "Classic Mode" button.

Output:
- A new game in classic mode is presented.
- A rgb value is presented.
- Three answer options is presented.
- The answer options are clickable.
- A score text is presented that displays your current score.
- A best score text is presented that displays the users best score for this gamemode.
- A "Back to start" button should be displayed in the top right corner next to the "Change Color".

#### Testcase 2.2 Correct color guess.

Prerequisite: Testcase 2.1 

Input: 
- Click the color that matches the displayed rgb value.

Output: 
- A message that says: "Correct!" displays below the answer options.
- One point is added to your score.
- If the users current score is higher than the users best score, the bestscore also gets one point added to it.
- A new round starts.

#### Testcase 2.3 Incorrect color guess.
Prerequisite: Testcase 2.1

Input: 
- Click a color that does not match the displayed rgb value.

Output:
- A message that says: "Wrong! Try again" is displayed below the answer options.
- A restart button is displayed below the users score.
- The answer options should not be clickable anymore.
- The users score for this game session/round is presented.

### Testcase for UC3: Restart game.
#### Testcase 3.1 Restart a classic game.
Prerequisite: Testcase 2.3

Input: 
- Click the restart button.

Ouput:
- The game is reset to its initial state.
- A new rgb value is diplayed to the user.
- Different answer options are displayed. (Since it's random there can be one that is similar/same in some cases.)
- The score of the user should now be 0 again.
- The best score should not have changed unless the user broke his best score in the round that he played before having to restart.

#### Testcase 3.2 Restart a timed game.
Prerequisite: Testcase 5.3

Input: 
- Click the restart button.

Ouput:
- The game is reset to its initial state.
- A new timer is displayed and starts counting down.
- A new rgb value is diplayed to the user.
- Different answer options are displayed. (Since it's random there can be one that is similar/same in some cases.)
- The score of the user should now be 0 again.
- The best score should not have changed unless the user broke his best score in the round that he played before having to restart.

### Testcase for UC4: Back to start
#### Testcase 4.1 Navigate back to the start page.

Prerequisite: Testcase 2.1 or testcase 5.1

Input:
- Click the "Back to Start" button.

Ouput: 
- The user is taken back to the start page.
- The active game session ends. If the user enters the classic gamemode again it should be a new session with a different rgb value and the users score should be 0.
- If the user enters the timed gamemode again there should be a new timer and it should be a new session with a different rgb value. The users score should be 0.

### Testcase for UC5: Start timed gamemode.
#### Testcase 5.1 Select "Timed Mode".

Input: 
- Click the "Timed Mode" button on the start page.

Output:
- A new game in timed mode is presented.
- A rgb value is presented.
- A timer is displayed above the rgb value.
- The timer is counting down from a number between 5 and 10. One second at the time.
- Three answer options is presented.
- The answer options are clickable.
- A score text is presented that displays your current score.
- A best score text is presented that displays the users best score for this gamemode.
- A "Back to start" button should be displayed in the top right corner next to the "Change Color".

#### Testcase 5.2 Correct guess within the time limit.
Prerequisite: 5.1

Input: 
- Click the color that matches the displayed rgb value.

Output: 
- A message that says: "Correct!" displays below the answer options.
- One point is added to your score.
- If the users current score is higher than the users best score, the bestscore also gets one point added to it.
- A new round starts.
- The timer is restarted and starts counting down from a random number beteen 5 and 10. The time limit is randomized for each round.

#### Testcase 5.3 Incorrect guess within the time limit.
Prerequisite: Testcase 5.1

Input: 
- Click a color that does not match the displayed rgb value.

Output:
- The timer is stopped.
- A message that says: "Wrong! Try again" is displayed below the answer options.
- A restart button is displayed below the users score.
- The answer options should not be clickable anymore.
- The users score for this game session/round is presented.

#### Testcase 5.4 Failing to guess before time runs out.
Prerequisite: 5.1

Input: 
- Don't click anything and let the timer run out.

Output:
- The timer is stopped at 0.
- A message that says: "The time went out! Try again" is displayed below the answer options.
- A restart button is displayed below the users score.
- The answer options should not be clickable anymore.
- The users score for this game session/round is presented.