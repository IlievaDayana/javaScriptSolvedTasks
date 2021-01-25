function ticGame(a) {
    // *Tic-Tac-Toe
    // Make a tic-tac-toe console application.
    // You will receive an array of arrays. As you know there are two players in this game, so the first element of 
    // the input will be first player's chosen coordinates, the second element will be the second player's turn coordinates and so on.
    // The initial state of the dashboard is
    // [[false, false, false],
    // [false, false, false],
    // [false, false, false]]
    // The first player's mark is X and the second player's mark is O.
    // Input
    // One parameter:
    // •	An array - the moves in row that players make
    // Output
    // •	There are two players - X and O
    // •	If  a player tries to make his turn on already taken place, he should make his turn again and you should print the following message:
    // "This place is already taken. Please choose another!"
    // •	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
    // "The game ended! Nobody wins :("
    // •	If someone wins you should print the following message and  the current state of the dashboard:
    // "Player {X/0} wins"
    // Note: When printing the state of the dashboard the elements of each row the dashboard should be separated by 
    //"\t" and each row should be on new line.

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    function horizontalSearch(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== false) {
                return true;
            } else {
                return false;
            };
        };
    };

    function verticalSearch(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i] && matrix[0][i] !== false) {
                return true;
            } else {
                return false;
            };
        };
    };

    function diagonalSearch(matrix) {
        if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== false && matrix[1][1] !== false && matrix[2][2] !== false) {
            return true;
        } else if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== false && matrix[1][1] !== false && matrix[2][0] !== false) {
            return true;
        } else {
            return false;
        };
    };

    function printDashboard(matrix) {
        let stringInfo = []
        for (let i = 0; i < matrix.length; i++) {
            stringInfo.push(matrix[i].join("\t"));
        }
        return stringInfo.join("\n")
    }
    let playerSymbol = "X"
    let nobodyWins = true;
    let movesCounter = 0
    for (let i = 0; i < a.length; i++) {
        let position = a[i].split(" ");
        let row = Number(position[0]);
        let column = Number(position[1]);

        if (dashboard[row][column] === "X" || dashboard[row][column] === "O") {
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {
            dashboard[row][column] = playerSymbol
            movesCounter += 1;
            if (movesCounter === 9) {
                break;
            };
            if (diagonalSearch(dashboard) === true || horizontalSearch(dashboard) === true || verticalSearch(dashboard) === true) {
                console.log("Player " + playerSymbol + " wins!\n" + printDashboard(dashboard));
                nobodyWins = false;
                break;
            };
            if (playerSymbol === "X") {
                playerSymbol = "O";
            } else {
                playerSymbol = "X";
            };

        };

    }
    if (nobodyWins === true) {
        console.log("The game ended! Nobody wins :(\n" + printDashboard(dashboard))
    };

}

ticGame(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
])



ticGame(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
])

ticGame(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
])