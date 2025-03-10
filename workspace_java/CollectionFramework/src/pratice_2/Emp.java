package pratice_2;

public class Emp {
  private int num;
  private String name;
  private String department;
  private String tel;
  private int pay;

  public Emp(int num, String name, String department, String tel, int pay) {
    this.num = num;
    this.name = name;
    this.department = department;
    this.tel = tel;
    this.pay = pay;
  }

  public int getNum() {
    return num;
  }

  public void setNum(int num) {
    this.num = num;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public String getTel() {
    return tel;
  }

  public void setTel(String tel) {
    this.tel = tel;
  }

  public int getPay() {
    return pay;
  }

  public void setPay(int pay) {
    this.pay = pay;
  }
}
