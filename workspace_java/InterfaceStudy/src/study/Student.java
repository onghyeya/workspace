package study;

import com.sun.source.tree.IfTree;

public class Student implements StudentUtil {
	private String name;
	private int korScore;
	private int mathScore;
	private int engScore;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getKorScore() {
		return korScore;
	}

	public void setKorScore(int korScore) {
		this.korScore = korScore;
	}

	public int getMathScore() {
		return mathScore;
	}

	public void setMathScore(int mathScore) {
		this.mathScore = mathScore;
	}

	public int getEngScore() {
		return engScore;
	}

	public void setEngScore(int engScore) {
		this.engScore = engScore;
	}


	@Override
	public int getTotalScore(Student student) {
		return getKorScore()+getEngScore()+getMathScore();
	}

	@Override
	public Student getHighScoreStudent(Student stu1, Student stu2) {
		return getTotalScore(stu1)>getTotalScore(stu2)?stu1:stu2;
	}

	@Override
	public String getGradeByStudentName(Student[] students, String name) {
		String grade = "학생 정보 없음";

		for (int i= 0; i<students.length; i++){
			if (students[i].getName().equals(name)){
				double avg = (double)getTotalScore(students[i])/3;
				grade = getGradeByAvg(avg);
				break;
			}
		}
		return grade;
	}

	// 평균 점수로 등급을 문자열로 리턴하는 메서드
	public String getGradeByAvg(double avg){
		String grade = "";
		if (avg >= 90 && avg <= 100){
			grade = "A";
		}
		else if (avg >= 80){
			grade = "B";
		}
		else if (avg >= 70){
			grade = "C";
		}
		else
			grade = "D";

		return grade;
	}

	@Override
	public int[] getTotalScoresToArray(Student[] students) {
		int[] totals = new int[students.length];
		for (int i = 0; i<students.length; i++){
			totals[i] = getTotalScore(students[i]);
		}
		return totals;
	}
}
