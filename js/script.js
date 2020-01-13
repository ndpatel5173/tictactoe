let track_of_player = "x";
let num_of_turns = 0;
let game_status = false;

function performLogic(buttonId,tileId){
    $(buttonId).html(track_of_player);
    if(track_of_player === "x"){
        track_of_player = "o";
    } 
    else if(track_of_player === "o"){
        track_of_player = "x";
    }
}
function end_game(){
    if(num_of_turns > 8 && game_status === false){
        $("h1").html("It's a draw!");
        game_status = true;

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

