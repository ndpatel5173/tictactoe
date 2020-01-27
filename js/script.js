let track_of_player = "x";
let num_of_turns = 0;
let game_status = false;

function changing_players(){
    num_of_turns = num_of_turns + 1;
    if(track_of_player === "x"){
        track_of_player = "o";
    } 
    else if(track_of_player === "o"){
        track_of_player = "x";
    }
}
function end_game_tie(){
    if(num_of_turns > 8 && game_status === false){
        $("h1").html("It's a draw!");
        game_status = true;

    }  
}
function player_win(tileId1,tileId2,tileId3){
    if ($(tileId1).html()=== track_of_player && $(tileId2).html()=== track_of_player && $(tileId3).html()===track_of_player){
        $("h1").text(track_of_player + " wins!");
        game_status = true;
    }
}
function checkVerticalWins(){
    player_win("#tile1", "#tile4", "#tile7");
    player_win("#tile2", "#tile5", "#tile8");
    player_win("#tile3", "#tile6", "#tile9");
}
function checkHorizontalWins(){
    player_win("#tile1", "#tile2", "#tile3");
    player_win("#tile4", "#tile5", "#tile6");
    player_win("#tile7", "#tile8", "#tile9");
}
function checkDiagonalWins(){
    player_win("#tile1", "#tile5", "#tile9");
    player_win("#tile3", "#tile5", "#tile7");
}

function performLogic(button,tile){
    if(game_status === false){
        $(button).hide();
        $(tile).html(track_of_player);
        checkDiagonalWins();
        checkHorizontalWins();
        checkVerticalWins();
        changing_players();
        end_game_tie();
    }
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

