
// const 🌭🌭🌭🌭 = `yummm ~`

// ascii art hotdog -> create a hotdog w/ ingredients
// find the hotdog game -> click not hover onclick
// maze through a hotdog game
// trace the hotdog game

// const numRows = 8;
// const numCols = 8;
// const numMines = 10;

// const gameBoard =
//     document.getElementById( //is a reference to the HTML element where the game board will be rendered.
//         "gameBoard"
//     );
// let board = []; // is an empty array where the game data (e.g., whether a cell is a mine, how many adjacent mines there are, and whether it's revealed) will be stored.

// // Creating our board
// function initializeBoard() {
//     for (let i = 0; i < numRows; i++) { // our rows 
//         board[i] = [];
//         for (let j = 0; j < numCols; j++) { // our columns
//             board[i][j] = {
//                 isMine: false,
//                 revealed: false,
//                 count: 0,
//             };
//         }
//     }

//     // Place mines randomly
//     let minesPlaced = 0;
//     while (minesPlaced < numMines) {
//         const row = Math.floor(Math.random() * numRows);
//         const col = Math.floor(Math.random() * numCols);
//         if (!board[row][col].isMine) {
//             board[row][col].isMine = true;
//             minesPlaced++;
//         }
//     }

//     // Calculate counts
//     for (let i = 0; i < numRows; i++) { //Loop thorough each row
//         for (let j = 0; j < numCols; j++) { //loop through each column
//             if (!board[i][j].isMine) { //check if current cell is not a mine
//                 let count = 0;// initialize the count of adjacent mines for this cell
//                 for (let dx = -1; dx <= 1; dx++) { //loop through -1,0,1 for row offest
//                     for (let dy = -1; dy <= 1; dy++) { //loop through -1,0,1 for column offset
//                         const ni = i + dx; //calculate the new row index
//                         const nj = j + dy; //calculate the new column index
//                         if (ni >= 0 && ni < numRows && nj >= 0 && nj < numCols && board[ni][nj].isMine) { //check if the new row and column are within the bounds and if it is a mine
//                             count++; //if there is a mine in the neighboring cell, increase the count
//                         }
//                     }
//                 }
//                 board[i][j].count = count; //set the count for the current cell
//             }
//         }
//     }
// }

// function revealCell(row, col) { // Step 1: Check if the clicked cell is valid
//     if (row < 0 || row >= numRows || col < 0 || col >= numCols || board[row][col].revealed) {
//         return; // If the cell is out of bounds or already revealed, do nothing and return
//     }

//     board[row][col].revealed = true;  // Step 2: Mark the current cell as revealed

//     if (board[row][col].isMine) { // Step 3: Check if the current cell is a mine (the target cell in your case)
//         // Handle game over
//         // If it's a mine, show a success message
//         alert("Congratulations you've found the hotdog!");
//     } else if ( // Step 4: If the current cell is not a mine, check if it has any adjacent mines //4. if the current cell is not a mine we just want it to turn yellow
//         board[row][col].count === 0
//     ) {
//         // If cell has no mines nearby,
//         // Reveal adjacent cells
//         for (let dx = -1; dx <= 1; dx++) {
//             for (let dy = -1; dy <= 1; dy++) {
//                 revealCell(row + dx,col + dy);  // Recursively reveal neighboring cells (adjacent cells)
//             }
//         }
//     }

//     renderBoard(); // Step 5: Re-render the board to update the view
// }

// function renderBoard() {
//     gameBoard.innerHTML = "";

//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             const cell = document.createElement("div");
//             cell.className = "cell";
//             if (board[i][j].revealed) {
//                 cell.classList.add("revealed"); // i think we need our guess listener / function here -> this is adding the revealed class in our css
//                 if (board[i][j].isMine) {
//                     cell.classList.add("mine");
//                     cell.textContent = "🌭";
//                 } 
//                 else if (board[i][j].count > 0) {
//                     cell.textContent = board[i][j].count;
//                 }
//             }
//             cell.addEventListener("click",() => revealCell(i, j));
//             gameBoard.appendChild(cell);
//         }
//         gameBoard.appendChild(document.createElement("br"));
//     }
// }

// initializeBoard();
// renderBoard();

// const numRows = 2;  // Number of rows in the grid
// const numCols = 2;  // Number of columns in the grid
// const targetSymbol = "🌭";  // The symbol for the target (hotdog)

// const gameBoard = document.getElementById("gameBoard");
// let board = [];
// let clickCount = 0;

// // Initialize the board with empty cells
// function initializeBoard() {
//     for (let i = 0; i < numRows; i++) {
//         board[i] = [];
//         for (let j = 0; j < numCols; j++) {
//             board[i][j] = {
//                 isHotDog: false,
//                 revealed: false,
//                 count: 0,
//             };
//         }
//     }

//     // Place the hotdog randomly in the grid
//     const targetRow = Math.floor(Math.random() * numRows);
//     const targetCol = Math.floor(Math.random() * numCols);
//     board[targetRow][targetCol].isHotDog = true; // Set the target to be a "🌭"

//     // No need to calculate adjacent 🌭 counts, since we're only placing 1 target object.
// }

// // Reveal a cell when clicked
// function revealCell(row, col) {
//   if (row < 0 || row >= numRows || col < 0 || col >= numCols || board[row][col].revealed) {
//       return; // If out of bounds or already revealed, return early
//   }

//   clickCount++; // Increment click counter each time a cell is clicked
//   board[row][col].revealed = true; // Mark the current cell as revealed

//   if (board[row][col].isHotDog) {
//       // First, render the board so that the 🌭 is visible
//       renderBoard();
      
//       // After rendering, show the success message and log the number of clicks
//       setTimeout(() => {
//           alert(`Congratulations you've found the hotdog! It took you ${clickCount} clicks to find the hotdog.`);
//       }, 10); // Add a small delay to allow the board to update first
//   } else {
//       renderBoard(); // Re-render the board after revealing the cell
//   }
// }

// // Render the board to the page
// function renderBoard() {
//     gameBoard.innerHTML = ""; // Clear any existing cells

//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < numCols; j++) {
//             const cell = document.createElement("div");
//             cell.className = "cell"; // Apply the "cell" class to all cells

//             if (board[i][j].revealed) {
//                 cell.classList.add("revealed"); // Style revealed cells
//                 if (board[i][j].isMine) {
//                     cell.classList.add("target"); // Style the target (hotdog) differently
//                     cell.textContent = targetSymbol; // Show the hotdog
//                 }
//             }

//             // Add an event listener to handle clicks
//             cell.addEventListener("click", () => revealCell(i, j));

//             // Append the cell to the game board
//             gameBoard.appendChild(cell);
//         }
//     }
// }

// // Initialize and render the board
// initializeBoard();
// renderBoard();

const inputs = prompt(`Hello fellow unboiled hotdog! What's your name?`);
const directions = `Welcome to the Boil that Hotdog Hunt, ${inputs}. Your goal is to find the hotdog in as few clicks as possible. The card colors show how close you are to the hotdog.
\nBlue means you're in cold water. Yellow means you're warmer. Orange means you're simmering, and red means you're boiling hot \u{1F525}! Are you ready? Click OK to continue.`;
const popups = setTimeout(function () {alert(directions)}, 1000);

const numRows = 20;  // Number of rows in the grid
const numCols = 20;  // Number of columns in the grid
const targetSymbol = "🌭";  // The symbol for the target (hotdog)

const gameBoard = document.getElementById("gameBoard"); // A reference to our div html element
let board = []; // Array that stores the state of EACH cell(whether it is revealed or it is the target)
let clickCount = 0;  // Counter to track number of clicks to the grid - built in function of javascript
let targetRow, targetCol;  // Coordinates of the hotdog

// Initialize the board with empty cells
function initializeBoard() {
    for (let i = 0; i < numRows; i++) { //loops each row
        board[i] = []; // creates an empty array for each row
        for (let j = 0; j < numCols; j++) { // loops each column
            board[i][j] = {
                isHotDog: false, // cell is not a hotdog initially
                revealed: false, // cell is not revealed initially
                count: 0, // no nearby dotdog cells
            };
        }
    }
    // Place the hotdog randomly in the grid
    targetRow = Math.floor(Math.random() * numRows); // random row
    targetCol = Math.floor(Math.random() * numCols); // random column
    board[targetRow][targetCol].isHotDog = true; // Set the target to be a "🌭"
}

// Reveal a cell when clicked
function revealCell(row, col) {
    if (row < 0 || row >= numRows || col < 0 || col >= numCols || board[row][col].revealed) {
        return; // If out of bounds or already revealed, return early
    }

    clickCount++; // Increment click counter each time a cell is clicked
    board[row][col].revealed = true; // Mark the current cell as revealed

    if (board[row][col].isHotDog) {
        // First, render the board so that the hotdog is visible
        renderBoard();
        
        // After rendering, show the success message and log the number of clicks
        setTimeout(() => {
            alert(`Congratulations you've found the hotdog! It took you ${clickCount} clicks to find the hotdog.`);
        }, 100); // Add a small delay to allow the board to update first
    } else {
        renderBoard(); // Re-render the board after revealing the cell
    }
}

// Calculate the "distance" from the hotdog for each revealed cell
function calculateDistance(row, col) {
    const dx = Math.abs(targetRow - row);
    const dy = Math.abs(targetCol - col);
    return Math.max(dx, dy);  // Use the maximum difference in rows or columns for distance
}

// Apply colors based on the distance to the hotdog
function getCellColor(distance) {
    if (distance === 0) return "green";  // Exact match (hotdog)
    if (distance >= 1 && distance <= 3) return "red"; // Close
    if (distance >= 4 && distance <= 7) return "orange"; // Medium distance
    if (distance >= 8 && distance <= 11) return "yellow"; // somewhat far distance
    return "blue"; // Farther away
}

// Render the board to the page
function renderBoard() {
    gameBoard.innerHTML = ""; // Clear any existing cells

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("div");
            cell.className = "cell"; // Apply the "cell" class to all cells

            if (board[i][j].revealed) {
                cell.classList.add("revealed"); // Style revealed cells

                if (board[i][j].isHotDog) {
                    cell.classList.add("target"); // Style the target (hotdog) differently
                    cell.textContent = targetSymbol; // Show the target symbol
                    cell.style.backgroundColor = "green";  // Hotdog cell is green
                } else {
                    // Calculate the distance to the hotdog
                    const distance = calculateDistance(i, j);
                    const cellColor = getCellColor(distance);
                    cell.style.backgroundColor = cellColor; // Apply color based on distance

                    // Optionally, display the distance as a number
                    if (distance > 0) {
                        cell.textContent = distance; // Display distance from hotdog (optional)
                    }
                }
            }

            // Add an event listener to handle clicks
            cell.addEventListener("click", () => revealCell(i, j));

            // Append the cell to the game board
            gameBoard.appendChild(cell);
        }
    }
}

// Initialize and render the board
initializeBoard();
renderBoard();