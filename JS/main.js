var currActiveCellId;
function identifyActiveCell() {
    for (i = 11; i <= 35; i++) {
        var cellId = i;
        if ("active" == document.getElementById(cellId).getAttribute("class")) {
            currActiveCellId = cellId;
            return;
        }
    }
}

function findIdClick(cellClicked) {
    identifyActiveCell();
    document.getElementById(currActiveCellId).className = 'inActive';
    document.getElementById(cellClicked).className = 'active';
};

document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            identifyActiveCell();
            moveOneStep(currActiveCellId, -1, 'Left Arrow');
            break;
        case 38:
            identifyActiveCell();
            moveOneStep(currActiveCellId, -5, 'Up Arrow');
            break;
        case 39:
            identifyActiveCell();
            moveOneStep(currActiveCellId, +1, 'Right Arrow');
            break;
        case 40:
            identifyActiveCell();
            moveOneStep(currActiveCellId, +5, 'Down Arrow');
            break;
        default:
            console.log("wrong key pressed.");
    }
}

function moveOneStep(current, moveTo, msg) {
    var currPos = Number(current);
    var moveTo = Number(moveTo);
    var nextPos = currPos + moveTo;

    if (nextPos < 11 || nextPos > 35) {

        var div = document.getElementById('eventMsg');
        div.innerText += '-Invalid.';
    } else {

        document.getElementById(current).className = 'inActive';
        document.getElementById(nextPos).className = 'active';
        var div = document.getElementById('eventMsg');
        div.innerText += "-" + msg;
    }

}
