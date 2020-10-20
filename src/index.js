
import "regenerator-runtime/runtime.js";
import "./menu";
import "./chat"
import "./friends";
import "./addFriends"
import { menuBtnsEvent, closeBtnEvent, showMenuEvent } from "./menu";
import { closeChat } from "./chat";
import { closeFriends } from "./friends";
import { closeAddFriends, addFriends } from "./addFriends"

menuBtnsEvent();
closeBtnEvent();
showMenuEvent();
closeChat();
closeFriends();
closeAddFriends();
addFriends();

