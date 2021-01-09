import "./scss/style.scss";
import {getMenuElements, addMenuActions, getGames} from './scripts/menu.js';
import {getPlayRockButton} from './scripts/rock.js';
import {getPlayTicTacToeButtons} from './scripts/tictactoe.js';

getMenuElements();
getGames();
addMenuActions();
getPlayRockButton();
getPlayTicTacToeButtons();