import java.awt.AWTException;
import java.awt.Robot;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    private static final int TIME_LONG = 500;
    private static final int Time_MID = 300;
    private static final int Time_SHORT = 50;
    //两个音符的间隔时长
    public static void main(String[] args) {
        File file = new File("C:\\Users\\43939\\IdeaProjects\\Auto_sc\\src\\小星星.txt");
        BufferedReader reader = null;
        StringBuffer stringBuffer = new StringBuffer();
        try {
            reader = new BufferedReader(new FileReader(file));
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuffer.append(line);
                stringBuffer.append("\n");
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();

        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                    e1.printStackTrace();
                }
            }
        }


        System.out.println(stringBuffer.toString());
        System.out.println("-------------start------------");

        playMusic(stringBuffer.toString());

    }

    static void playMusic(String str) {

        char[] chars = str.toCharArray();
        Robot robot = null;
        try {
            robot = new Robot();
            robot.delay(TIME_LONG);
            for (int i = 0; i < chars.length; i++) {
                if (chars[i] == ' ' || chars[i] == '\n') {
                    robot.delay(TIME_LONG);
                } else {
                    robot.delay(Time_MID);
                }
                robot.keyPress(chars[i]);
                robot.delay(Time_SHORT);
                robot.keyRelease(chars[i]);
                System.out.print(chars[i]);
            }



        } catch (AWTException e) {
            e.printStackTrace();
        }


    }


}
