package pratice;

// 혼자 한거
public class Calculator {
  int num;
  int num1;
  String operator;


  public void setNum(int num){
    this.num = num;
  }
  public void setNum1(int num1){
    this.num1 = num1;
  }
  public void setOperator(String operator){
    this.operator = operator;
  }

  public void setOper(){
    // 일치하는 부분은 변수 선언 가능
    if (operator.equals("+")){
      System.out.println(num+" "+operator+" "+num1+" = "+(num+num1));
    }
    else if (operator.equals("-")) {
      System.out.println(num+" "+operator+" "+num1+" = "+(num-num1));
    }
    else if (operator.equals("*")) {
      System.out.println(num+" "+operator+" "+num1+" = "+(num*num1));
    }
    else if (operator.equals("/")) {
      System.out.println(num+" "+operator+" "+num1+" = "+(num/num1));
    }
    else {
      System.out.println("나가세요");
    }

  }
}

