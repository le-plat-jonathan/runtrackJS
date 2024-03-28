$(document).ready(function() {
    let tiles = $('.tile');
    let emptyTile = $('#empty');
    let restartBtn = $('#restart-btn');

    let imgAlts = ["1","2","3","4","5","6","7","8"];

    function shuffleTiles() {
      
    }

    function restart() {
        restartBtn.hide();
        shuffleTiles();
    }

    tiles.on('click', handleClick);
    restartBtn.on('click', restart);

    restart();
});
