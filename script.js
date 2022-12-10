let fields = [];
let gameOver = false;
let currentShape = 'cross';

/* Weil die id als Funktionsparameter immer eine ZAHL als Variable zugewiesen bekommt, 
*  weiss das fields[id] wenn ich beim feld mit der id 5 drauf klicke das da noch 4 andere
*  elemente davor sein müssten, deswegen zeigt er dann immer z.B (leer x4).
*  Und so weiss er das Array dann auch das da 9 Elemente drin sind.
*/


function fillShape(id) {                                                             // id hat im wechsel immer den Wert von 0 bis 8 (so hat fileds[id] am ende eine länge von 8)

    if (!fields[id] && !gameOver) {                                                               // hier wird gefragt ob Fields an der Stelle id existiert oder nicht (fields[id] = existiert) (!fields[id] = existiert nicht).. Beim 2ten mal drauf klicken führt er nichts  aus weil er weil das bei fields[id] = zb fields[0] schon was existiert
        if (currentShape == 'cross') {                                               // wenn currentShape den Wert 'cross' hat 
            currentShape = 'circle';                                                 // dann wird der Wert zu 'Cirle' geändert 
            document.getElementById('player1').classList.add('player-inactive');
            document.getElementById('player2').classList.remove('player-inactive');
        } else {                                                                     // wenn currentShape nicht den Wert 'cross' hat sondern 'circle' 
            document.getElementById('player1').classList.remove('player-inactive');
            document.getElementById('player2').classList.add('player-inactive');
            currentShape = 'cross';                                                  //dann wird der Wert zu 'cross' geändert
        }

        fields[id] = currentShape;     // fields[id] ist immer der jeweilige Feld in der Tabelle wo wir drauf klicken und hier nimmt dieser Feld den Wert currentShape

        // console.log('Fields an der Stele id :', [id], fields[id]);
        // console.log('Fields als ganzes Array :', fields);
        // console.log('Fields Länge :', fields.length);
        // console.log('');

        draw();
        checkWinner();
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


function checkWinner() {
    let winner;

    // Horizontal matches
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        document.getElementById('line1').style.transform = 'scaleX(1)';
        winner = fields[0];
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        document.getElementById('line2').style.transform = 'scaleX(1)';
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        document.getElementById('line3').style.transform = 'scaleX(1)';
        winner = fields[6];
    }

    // Veritcal matches
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

    // across matches
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)';
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1)';
        winner = fields[2];
    }

    if (winner) {   // wenn winner existiert 
        gameOver = true;
    }
}

