import "./menu";
import "./chat"
import "./friends";
import "./addFriends"
import { menuBtnsEvent, closeBtnEvent, showMenuEvent } from "./menu";
import { closeChat } from "./chat";
import { closeFriends } from "./friends";
import { closeAddFriends, addedFriendPopupFunc } from "./addFriends"


menuBtnsEvent();
closeBtnEvent();
showMenuEvent();
closeChat();
closeFriends();
closeAddFriends();
addedFriendPopupFunc();

