package pratice;

public class SongTest {
  public static void main(String[] args) {
    Song song = new Song();
    String[] composer = {"감자바 ","고구마바 ","말랭이바 "}; // or new String[]{내요오엉}; 사용가능!
    song.initSong("배고프다송","김자반","미니1집",2007,composer);
    song.printSong();
  }
}
