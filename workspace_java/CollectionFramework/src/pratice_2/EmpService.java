package pratice_2;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EmpService {
  Scanner sc = new Scanner(System.in);

  // 전 사원 객체를 다수 저장할 수 있는 List객체를 만들고,
  List<Emp> emps = new ArrayList<>() ;

  public EmpService(){
    emps.add(new Emp(1001,"홍길동","개발부","010-1234-5678",100000));
    emps.add(new Emp(1002,"이길동","개발부","010-1234-1234",100000));
    emps.add(new Emp(1003,"박길동","개발부","010-1234-1010",100000));
    emps.add(new Emp(1004,"조길동","회계부","010-1234-2020",100000));
    emps.add(new Emp(1005,"김길동","인사부","010-1234-3030",100000));
  }

  public void login(){
    boolean isRunning = true;
    while (isRunning) {
      System.out.print("사번 : ");
      int num = sc.nextInt();
      System.out.print("비밀번호(연락처의 마지막 4자리) : ");
      String password = sc.next();
      for (Emp e : emps){
        if (num == e.getNum() && password.equals(e.getTel().substring(e.getTel().length()-4,e.getTel().length()))){
          System.out.println("로그인 되었습니다");
          System.out.println("'"+e.getName()+"'님 로그인 되었습니다");
          isRunning = false;
          break;
        }
        else {
          System.out.println("사번 또는 비밀번호가 잘못 입력 되었습니다");
          break;
        }
      }

    }
  }

  public void dept(){
    String department;
    System.out.print("부서명 : ");
    department = sc.next();
    System.out.println("==== "+department+" 월급 현황 ====");
    for (int i = 0; i < emps.size(); i++){
      if (emps.get(i).getDepartment().equals(department)){
        System.out.print("이름 : " + emps.get(i).getName());
        System.out.println(" 월급 : " + emps.get(i).getPay());
      }
    }
    int sum = 0;
    double div =0.0;
    for (int i = 0; i<emps.size(); i++){
      if (emps.get(i).getDepartment().equals(department)){
        sum = sum + emps.get(i).getPay();
      }
    }
    div = (double)sum/emps.size();
    System.out.println(department+"서의 월급 총액은 "+sum+"원이며, 평균 급여는 "+div+"원 입니다.");
  }

  public void payUp(){
    System.out.print("부서명 : ");
    String department = sc.next();
    System.out.print("인상 급여 : ");
    int payUp = sc.nextInt();
    System.out.println(department+" 각 사원의 급여가 각각 "+payUp+"원씩 인상됩니다.");
    System.out.println("==== 월급 인상 후 "+department+" 월급 현황 ====");
    for (int i = 0; i<emps.size(); i++){
      if (emps.get(i).getDepartment().equals(department)){
        System.out.print(" 이름 : "+emps.get(i).getName());
        System.out.print(" 월급 : "+(emps.get(i).getPay()+payUp));
        System.out.println();
      }
    }
  }


}
