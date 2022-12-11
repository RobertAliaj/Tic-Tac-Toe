let fields = [];
let currentShape = 'cross';
let winner;

/* Weil die id als Funktionsparameter immer eine ZAHL als Variable zugewiesen bekommt, 
*  weiss das fields[id] wenn ich beim feld mit der id 5 drauf klicke das da noch 4 andere
*  elemente davor sein müssten, deswegen zeigt er dann immer z.B (leer x4).
*  Und so weiss er das Array dann auch das da 9 Elemente drin sind.
*/

function fillShape(id) {                                                             // id hat im wechsel immer den Wert von 0 bis 8 (so hat fileds[id] am ende eine länge von 8)
    checkFieldShapes(id);
    draw();
    showHorizontalMatches();
    showVerticalMatches();
    showAcrossMatches();
    circleIsWinner();
    crossIsWinner();
    undecided();
}


function checkFieldShapes(id) {
    if (!fields[id]) {                                                               // hier wird gefragt ob Fields an der Stelle id existiert oder nicht (fields[id] = existiert) (!fields[id] = existiert nicht).. Beim 2ten mal drauf klicken führt er nichts  aus weil er weil das bei fields[id] = zb fields[0] schon was existiert
        if (currentShape == 'cross') {                                               // wenn currentShape den Wert 'cross' hat 
            currentShape = 'circle';                                                 // dann wird der Wert zu 'Cirle' geändert 
            makeCircleInvisible();
        } else {                                                                     // wenn currentShape nicht den Wert 'cross' hat sondern 'circle' 
            makeCrossInvisible();
            currentShape = 'cross';                                                  //dann wird der Wert zu 'cross' geändert
        }
        fields[id] = currentShape;                                                      // fields[id] ist immer der jeweilige Feld in der Tabelle wo wir drauf klicken und hier nimmt dieser Feld den Wert currentShape
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {                                              // wenn fields[i] den Wert circle hat 
            document.getElementById(`circle-${i}`).classList.remove('d-none');    // zeige den Kreis auf dem Feld an
        }

        if (fields[i] == 'cross') {                                               // wenn fields[i] den Wert cross hat
            document.getElementById(`cross-${i}`).classList.remove('d-none');     // zeige den Kreuz auf dem Feld an
        }
    }
}


function showHorizontalMatches() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {  // wenn 0 = 1 und 1 = 2 UND fields[0] existiert(true)
        document.getElementById('line1').classList.add('horizontal-line-res'); //responsive
        document.getElementById('line1').style.transform = 'scaleX(1)';
        winner = fields[0];                                                // dann winner, falls fields[0] undefined/false wäre, wird der code nicht ausgeführt
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        document.getElementById('line2').classList.add('horizontal-line-res'); //responsive
        document.getElementById('line2').style.transform = 'scaleX(1)';
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        document.getElementById('line3').classList.add('horizontal-line-res'); //responsive
        document.getElementById('line3').style.transform = 'scaleX(1)';
        winner = fields[6];
    }
}


function showVerticalMatches() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleX(1)';
        winner = fields[2];
    }
}


function showAcrossMatches() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        document.getElementById('line7').classList.add('across-left');                   //responsive
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)';
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        document.getElementById('line8').classList.add('across-right');                   //responsive
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1)';
        winner = fields[2];
    }
}


function undecided() {
    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8] && !winner) {
        setTimeout(function () {
            document.getElementById('content').style.display = 'none';
            document.getElementById('restart').classList.remove('d-none');
            document.getElementById('showResult').classList.remove('d-none');
            document.getElementById('credits').classList.add('d-none');
        }, 1000)
    }
}


function crossIsWinner() {
    if (winner == 'cross') {
        setTimeout(function () {
            document.getElementById('content').style.display = 'none';
            document.getElementById('restart').classList.remove('d-none');
            document.getElementById('showResult').innerHTML = `Kreuz hat gewonnen`;
            document.getElementById('showResult').classList.remove('d-none');
            document.getElementById('credits').classList.add('d-none');
        }, 1000)
    }
}


function circleIsWinner() {
    if (winner == 'circle') {
        setTimeout(function () {
            document.getElementById('restart').classList.remove('d-none');
            document.getElementById('content').style.display = 'none';
            document.getElementById('showResult').innerHTML = `Kreis hat Gewonnen`;
            document.getElementById('showResult').classList.remove('d-none');
            document.getElementById('credits').classList.add('d-none');
        }, 1000)

    }
}


function makeCircleInvisible() {
    document.getElementById('player1').classList.add('player-inactive');
    document.getElementById('player2').classList.remove('player-inactive');
}


function makeCrossInvisible() {
    document.getElementById('player1').classList.remove('player-inactive');
    document.getElementById('player2').classList.add('player-inactive');
}


function restart() {
    location.reload();
}