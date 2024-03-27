$(document).ready(function() {

    const initialOrder = ["1","2","3","4","5","6"];
    let actualOrder = [];

    $("#shuffle").click(function() {
        var images = $("#arc img")
        images.sort(function() {
            return Math.random() - 0.5
        }).appendTo("#arc")
    });


    $("img").click(function() {
        const altImg = $(this).attr('alt');
        actualOrder.push(altImg);
        $(this).appendTo("#container");
        console.log(actualOrder);

        if (actualOrder.length === initialOrder.length) {
            let isCorrect = true;
            for (let i = 0; i < initialOrder.length; i++) {
                if (actualOrder[i] !== initialOrder[i]) {
                    isCorrect = false;
                    break;
                }
            }
            if (isCorrect) {
                $("#message").text("Vous avez gagné !").css("color", "green");
            } else {
                $("#message").text("Vous avez perdu !").css("color", "red");
            }
        }
    });

});
