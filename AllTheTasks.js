//1. Feladat

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}

console.log(isLeapYear(1250))
console.log(isLeapYear(2004))
console.log(isLeapYear(12215))

//2. Feladat

function threeRuls() {
    const result = [];
    let count = 0; 

    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0) {
            count++; 
            if (count > 3) {
                count = 1; 
            }
            if (count === 1) {
                continue; 
            }
        }
        result.push(i); 
    }
    
    return result;
}

console.log(threeRuls());

//3. Feladat

function gradeCalculator(score, maximum) {
    if (maximum <= 0) {
        return "A maximális pontszám nem lehet nulla vagy negatív.";
    }

    const percentage = (score / maximum) * 100;

    if (percentage >= 90) {
        return 'A'; 
    } else if (percentage >= 80) {
        return 'B'; 
    } else if (percentage >= 70) {
        return 'C'; 
    } else if (percentage >= 60) {
        return 'D'; 
    } else if (percentage >= 50) {
        return 'E'; 
    } else {
        return 'F';
    }
}


console.log(gradeCalculator(85, 100)); 
console.log(gradeCalculator(45, 60));  
console.log(gradeCalculator(30, 50));  
console.log(gradeCalculator(50, 100)); 
console.log(gradeCalculator(140, 150))

//4. Feladat

function stonePaperScissorsWinner(player1, player2) {
    
    if (![0, 1, 2].includes(player1) || ![0, 1, 2].includes(player2)) {
        return "Invalid input. Please use 0 for paper, 1 for rock, and 2 for scissors.";
    }


    if (player1 === player2) {
        return 'The game is a tie.'; 
    } else if (
        (player1 === 0 && player2 === 1) || 
        (player1 === 1 && player2 === 2) || 
        (player1 === 2 && player2 === 0)   
    ) {
        return 'The first player wins.'; 
    } else {
        return 'The second player wins.'; 
    }
}


console.log(stonePaperScissorsWinner(0, 1)); 
console.log(stonePaperScissorsWinner(1, 2)); 
console.log(stonePaperScissorsWinner(2, 0)); 
console.log(stonePaperScissorsWinner(0, 0)); 
