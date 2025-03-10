public class IF_ELSEIF_ELSE_2 {
  public static void main(String[] args) {
    int num = 5;

    //위에서부터 조건이 맞으면 나머지를 해석하지 않고 하나만 해석함(if,elseif,else 한쌍)
    //if와 if는 개별
    if(num >= 5){
      System.out.println(1);
    }
    else if(num == 5){
      System.out.println(2);
    }
    else{
      System.out.println(3);
    }


  }
}
