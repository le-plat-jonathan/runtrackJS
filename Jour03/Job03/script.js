$(document).ready(function() {
    var tiles = $('.tile');
    var emptyTile = $('#empty');
    var restartBtn = $('#restart-btn');

    var imageNames = [  "/Jour03/Job03/images/logo1.PNG",
                        "/Jour03/Job03/images/logo2.PNG",
                        "/Jour03/Job03/images/logo3.PNG",
                        "/Jour03/Job03/images/logo4.PNG",
                        "/Jour03/Job03/images/logo5.PNG",
                        "/Jour03/Job03/images/logo6.PNG",
                        "/Jour03/Job03/images/logo7.PNG",
                        "/Jour03/Job03/images/logo8.PNG"
                        ];

    function shuffleTiles() {
        var currentIndex = tiles.length;
        var temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = tiles[currentIndex].style.backgroundImage;
            tiles[currentIndex].style.backgroundImage = tiles[randomIndex].style.backgroundImage;
            tiles[randomIndex].style.backgroundImage = temporaryValue;
        }
    }

    function checkWin() {
        for (var i = 0; i < tiles.length; i++) {
            var tileIndex = parseInt(tiles[i].id.slice(-1));
            if (tileIndex !== i + 1) {
                return false;
            }
        }
        return true;
    }

    function handleClick() {
        if (this.id === 'empty') {
            return;
        }

        var emptyTileIndex = parseInt(emptyTile.index());
        var clickedTileIndex = parseInt($(this).index());

        if (clickedTileIndex === emptyTileIndex - 1 ||
            clickedTileIndex === emptyTileIndex + 1 ||
            clickedTileIndex === emptyTileIndex - 3 ||
            clickedTileIndex === emptyTileIndex + 3) {
            $(this).insertAfter(emptyTile);
            emptyTile.insertAfter(this);

            if (checkWin()) {
                alert("Vous avez gagné!");
                restartBtn.show();
            }
        }
    }

    function restartGame() {
        restartBtn.hide();
        shuffleTiles();
    }

    tiles.on('click', handleClick);
    restartBtn.on('click', restartGame);

    restartGame();
});
