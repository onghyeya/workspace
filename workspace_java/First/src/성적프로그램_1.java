/*
* 키보드로 국어 영어 수학 점수를 입력받은후
* 입력받은 국어 영어 수학 점수 및 총점 평균을 출력
* 단, 국어 영어 수학 점수는 정수만 저장된다고 가정
* */

import java.util.Scanner;

public class 성적프로그램_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a; //국어 korScore
    int b; //영어 engScore
    int c; //수학 mathScore
    int total; //총점 totalScore
    double d; // 평균 avg


    System.out.print("국어점수입력 : ");
    a = sc.nextInt();

    System.out.print("영어점수입력 : ");
    b = sc.nextInt();

    System.out.print("수학점수입력 : ");
    c = sc.nextInt();

    total = a+b+c;

    // 정수끼리의 연산결과는 무조건 정수로 나옴 (실수가 포함 되어야 실수가 나옴)
    d = total/3.0;

    System.out.println("국어점수 : " + a);
    System.out.println("영어점수 : " + b);
    System.out.println("수학점수 : " + c);
    System.out.println("총점 : " + total);
    System.out.println("평균 : " + d);

  }
}
