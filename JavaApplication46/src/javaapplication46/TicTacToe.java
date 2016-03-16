package javaapplication46;

public class TicTacToe extends GameSearch {

    public boolean tiedPosition(Position p) {
        int[] pos=((TicTacToePosition)p).getBoard();
        boolean b=true;
        for (int i=0 ; i<9; i++) {
            if (pos[i]==0) {
                b=false;
            }
        }
        return b;
    }
    
    public boolean wonPosition(Position p, boolean player) {
        int[] pos=((TicTacToePosition)p).getBoard();
        int comp;
        boolean win=false;
        if (player==true) {
            comp=1;
        }
        else {
            comp=-1;
        }
        for (int i=0; i<3; i++) {
            if ((pos[i]==comp && pos[i+3]==comp && pos[i+6]==comp)) {
                win=true;
            }
            else if((pos[3*i] == comp && pos[3*i + 1] == comp && pos[3*i + 2] == comp)) {
                win = true;
            }
        }
        if ((pos[0] == comp && pos[4] == comp && pos[8] == comp)) {
            win=true;
        }
        else if ((pos[2] == comp && pos[4] == comp && pos[6] == comp)) {
            win=true;
        }
        
        return win;
    }

    public float positionEvaluation(Position p, boolean player) {
        float eval=0;
        if (wonPosition(p, player)) {
            eval+=10;
        }
        else {
            eval-=10;
        }
        return eval; 
    }
    
    public void printPosition(Position p) {
        System.out.println(((TicTacToePosition)p).toString());
    }
    
    public boolean reachedMaxDepth(Position p, int depth) {
        boolean b=false;
        if (wonPosition(p,true) || wonPosition(p,false) || tiedPosition(p)){
            b= true;
        }
        return b;
    }
        
    public Position [] possibleMoves(Position p, boolean player) {
        TicTacToePosition pos = (TicTacToePosition)p;
        int count = 0;
        for (int i=0; i<9; i++) if (pos.board[i] == 0) count++;
        if (count == 0) return null;
        Position [] ret = new Position[count];
        count = 0;
        for (int i=0; i<9; i++) {
            if (pos.board[i] == 0) {
                TicTacToePosition pos2 = new  TicTacToePosition();
                for (int j=0; j<9; j++) pos2.board[j] = pos.board[j];
                if (player) pos2.board[i] = 1; else pos2.board[i] = -1;
                ret[count++] = pos2;
            }
        }
        return ret;
    }
    
    public Position makeMove(Position p, boolean player) {
        int i = 0;
        try {
            int ch = System.in.read();
            i = ch - 48;
            System.in.read();
        } catch (Exception e) { }
        TicTacToeMove m = new TicTacToeMove();
        m.moveIndex = i;
        TicTacToePosition pos = (TicTacToePosition)p;
        TicTacToePosition pos2 = new  TicTacToePosition();
        for (int j=0; j<9; j++) pos2.board[j] = pos.board[j];
        int pp;
        if (player) pp =  1;
        else        pp = -1;
        pos2.board[m.moveIndex] = pp;
        return pos2;
    }
    
    static public void main(String [] args) {
        TicTacToePosition p = new TicTacToePosition();
        TicTacToe ttt = new TicTacToe();
        ttt.playGame(p);
    }
}
