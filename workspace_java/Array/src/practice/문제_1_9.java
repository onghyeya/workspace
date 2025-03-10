package practice;

import java.util.Scanner;

public class 문제_1_9 {
  public static void main(String[] args) {
    int[] arr = new int[5];
    Scanner sc = new Scanner(System.in);

    for (int i = 0; i<arr.length; i++){
      System.out.print(i+"번째");
      arr[i] = sc.nextInt();
    }

    for (int i = 0; i<arr.length; i++){
      System.out.print(arr[i]);
    }

  }

  public static class 문제_1_11 {
    public static void main(String[] args) {
      int[] score = new int[3];
      Scanner sc = new Scanner(System.in);
      int x = 0;

      for(int i =0; i<score.length; i++){
        score[i]=sc.nextInt();
        x= x + score[i];
        if (score[i] > 0 && score[i]<100){

        }
      }
    }
  }
}
