/*
* 자료형(data type)
* 자바의 자료형은 크게 기본 자료형, 참조 자료형으로 구분.
* 기본 자료형(primivite type) 8개 존재, 8개 모두 소문자.(외워야함!!)
* - 변수의 기본 타입 -

* 참과 거짓
 : boolean (1바이트) true, false

* 정수
 : byte  (1바이트)
 : short  (2바이트)
 : int  (4바이트)
 : long  (8바이트) : 은행에서 많이씀
 >>  자료형은 " int " 가 기본
 >> 컴퓨터가 해석하기를 기본(int)으로 해석함

* 실수
 : float  (4바이트)
 : double  (8바이트)
 >> 실수(정확도) 자료형은 " double " 가 기본
 >> 컴퓨터가 해석하기를 기본(double)으로 해석함

* 문자 ,정수
 : char (2바이트)
 * 문자열(문자 나열) vs 문자
 * 문자 : 한 글자 + 홀 따옴표로 감싸짐
 * 문자 열 : 여러 글자, !!쌍따옴표에 싸여진 글자
 * ex) 'a' : 문자, "java" : 문자열, "A" : 문자열, "" : 문자열
 * >> 자바의 기본자료형에는 문자열을 저장할 '기본'자료형을 제공하지 않는다.
 * 문자열 참조 자료형 : String

비트 1 or 0 /2가지 표현
8비트 = 1바이트 (2의8승 > 256가지를 표현할수있음.)


* 참조 자료형 무한대.
* */
public class 자료형_1 {
  public static void main(String[] args){
    //참과 거짓
    boolean a = true;
    boolean b = false;
    //boolean c = "true"; 주의
    System.out.println(a);

    int d = 1;
    byte e = 1;
    short f = 1;
    long g = 1L;

    double h = 1.5;
    float i = 1.5F;

    //문자열
    String s = "hello";
    System.out.println(s);
  }
}
