package javaapplication46;


public class TicTacToePosition extends Position {
    int[] board=new int[9];
    int BLANK;
    int HUMAN;
    int PROGRAM;

    public TicTacToePosition() {
        BLANK=0;
        HUMAN=1;
        PROGRAM=-1;
    }
    
    public int[] getBoard() {
        return board;
    }

    @Override
    public String toString() {
        String str="";
        for (int i=0; i<9; i++) {
            if (board[i]==-1) {
               str+="O" + "|"; 
            }
            else if (board[i]==1) {
               str+="X" + "|"; 
            }
            else {
               str+=" " + "|"; 
            }
            
            if (i==2 || i==5) {
                str+="\n";
            }
        }
        str+="\n";
        return str;
    }
    
}
