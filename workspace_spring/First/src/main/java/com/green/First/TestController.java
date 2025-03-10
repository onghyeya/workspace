package com.green.First;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.FormatFlagsConversionMismatchException;
import java.util.List;
import java.util.Random;

// @ : anotaion 어노테이션
@RestController
public class TestController {

  // localhost:8080/t1
  @GetMapping("/t1")
  public String test1(){
    return "java";
  }

  @GetMapping("/t2")
  public int test2(){
    return 10;
  }

  @GetMapping("/t3")
  public Person test3(){
    //person 클래스에 대한 객체를 하나 생성!
    Person p = new Person("hong",27,"울산시");
    return p;
  }

  @GetMapping("/t4")
  public List<Person> test4(){
    //person 클래스에 대한 객체를 다수 저장할수 있는 리스트 작성
    List<Person> list = new ArrayList<>();

    Person p1 = new Person("Kim",20,"울산시");
    Person p2 = new Person("Lee",21,"부산시");
    Person p3 = new Person("Park",22,"대구시");

    list.add(p1);
    list.add(p2);
    list.add(p3);

    return list;
  }

  @GetMapping("/t5")
  public List<Student> test5(){
    List<Student> studentList = new ArrayList<>();

    studentList.add(new Student("김자바",50,60,70));
    studentList.add(new Student("이자바",60,70,80));
    studentList.add(new Student("박자바",70,80,90));
    studentList.add(new Student("최자바",40,50,60));
    studentList.add(new Student("홍자바",90,60,50));

    return studentList;
  }

  // react 에서 전달하는 데이터를 java 에서 받는 문법은 두가지 존재.
  // 1. 클래스 활용하는 방법 (쉬움~중간 데이터)
  // react 에서 전달하는 객체의 key 와
  // 자바에서 데이터를 받기 위해 매개변수에 선언한 클래스의 변수명이
  // 동일하면 데이터를 자동으로 받아옴
  // 2. Collection Framework 의 Map 을 활용하는 방법 (어려운 데이터)

  @PostMapping("/t6")
  public void test6(@RequestBody Student student){
    System.out.println(student.toString());
  }

  @PostMapping("/t7")
  public void test7(@RequestBody PhoneDTO phoneDTO){
    System.out.println(phoneDTO.toString());
  }

  @PostMapping("/t8")
  public int test8(@RequestBody Student student){
    System.out.println(student.toString());
    int sum
      = student.getKorScore()+student.getEngScore()+student.getMathScore();
    return sum;
  }

  @PostMapping("/t9")
  public void test9(@RequestBody OrderDTO orderDTO){
    System.out.println(orderDTO.toString());
    // react 에 데이터가 안뜨는 이유는 return 할게 없기 때문에
  }

  @ GetMapping("/getLottoNum")
  public int getLottoNum(){
    int num = (int)(Math.random()*45+1);
    return num;
  }

  // TestController클래스에 리액트와통신가능한메서드를구현
  @GetMapping("/getBoardList")
  public List<Board> sendBoardList(){
    //해당메서드에서는Borad클래스의객체5개를생성후List에저장하여리액트로전송하는기능을구현
    List<Board> boardList = new ArrayList<>();
    boardList.add(new Board(10,"제목입니다1","김자바",0,"크아악"));
    boardList.add(new Board(12,"제목입니다2","박자바",5,"크아악"));
    boardList.add(new Board(11,"제목입니다3","이자바",1,"크아악"));
    boardList.add(new Board(13,"제목입니다4","김자바",3,"크아악"));
    boardList.add(new Board(14,"제목입니다5","이자바",2,"크아악"));
    return boardList;
  }

  @GetMapping("/orderList")
  public List<Order> sendOrderList(){
    List<Order> orderList = new ArrayList<>();
    orderList.add(new Order(101,"데님 청바지",15000,2,"aaa"));
    orderList.add(new Order(102,"맨투맨 반팔 티셔츠",10000,3,"GoGi"));
    orderList.add(new Order(103,"오버핏 니트",25000,2,"ccc"));
    orderList.add(new Order(104,"롱 패딩",55000,1,"ng.kim"));
    orderList.add(new Order(105,"맨투맨 긴팔 티셔츠",12000,3,"ddd"));
    return orderList;
  }
}
