class TicTacToe {
    constructor() {
        this.player1 = {
            name: 'Mike',
            symbol: 'x'
        };
        this.player2 = {
            name: 'Lien',
            symbol: 'o'
        };
        this.currentPlayer = this.player1;
        this.currentMove = 0;
        this.matrix = [];

        for (let i = 0; i < 3; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                this.matrix[i][j] = undefined;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer.symbol;        
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.getFieldValue(rowIndex, columnIndex)) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

            if (this.currentPlayer == this.player2) {
                this.currentPlayer = this.player1;
            } else {
                this.currentPlayer = this.player2;
            }
        }
    }
    
    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] ? this.matrix[rowIndex][colIndex] : null;
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
          if (this.matrix[0][0] && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0]  == this.matrix[0][2]) {
            return this.matrix[0][0] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[1][0] && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2]) {
            return this.matrix[1][0] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[2][0] && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2]) {
            return this.matrix[2][0] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[0][0] && this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0]) {
            return this.matrix[0][0] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[0][1] && this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1]) {
            return this.matrix[0][1] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[0][2] && this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2]) {
            return this.matrix[0][2] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[0][0] && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) {
            return this.matrix[0][0] == 'x' ? this.player1.symbol : this.player2.symbol;
        } else if (this.matrix[2][0] && this.matrix[2][0] == this.matrix[1][1] && this.matrix[2][0] == this.matrix[0][2]) {
            return this.matrix[2][0] == 'x' ? this.player1.symbol : this.player2.symbol; 
        } else {
            return null;
        }
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] !== 'x' && this.matrix[i][j] !== 'o') {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false;
    }

    
}

module.exports = TicTacToe;
