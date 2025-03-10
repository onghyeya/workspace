package com.green.First;

public class Board {
  private int no;
  private String subject;
  private String name;
  private int cnt;
  private String info;

  public Board(int no, String subject, String name, int cnt, String info) {
    this.no = no;
    this.subject = subject;
    this.name = name;
    this.cnt = cnt;
    this.info = info;
  }

  public int getNo() {
    return no;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getCnt() {
    return cnt;
  }

  public void setCnt(int cnt) {
    this.cnt = cnt;
  }

  public String getInfo() {
    return info;
  }

  public void setInfo(String info) {
    this.info = info;
  }


}
