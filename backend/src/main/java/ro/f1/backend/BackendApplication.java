package ro.f1.backend;

import jakarta.annotation.Resource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ro.f1.backend.Services.FilesStorageService;
import org.springframework.boot.CommandLineRunner;
@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

    @Resource
    FilesStorageService storageService;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
        //storageService.init();
    }

    @Override
    public void run(String... arg) throws Exception {
//    storageService.deleteAll();
        System.out.println("test");
        storageService.init();
    }

}
