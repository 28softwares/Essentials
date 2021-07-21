package Essentials.java;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * FileReader class provides method for reading files in modern Java.
 */
public class FileReader {
    public void printLineByLine(String pathToFile) throws IOException {
        Files.lines(Path.of(pathToFile)).forEach(System.out::println);
    }
}

/** Usage of FileReader */
class Main {
    public static void main(String[] args) throws IOException {
        new FileReader().printLineByLine("Essentials/javascript/essentials.js");
    }
}