package pacGui;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartGUI {
	private final static int servicePort = 8181;
	public static void main(String[]args) {
		Logger logger = Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	    logger.setLevel(Level.ALL);
		SpringApplication app = new SpringApplication(StartGUI.class);
	    app.setLogStartupInfo(false);
	    app.setRegisterShutdownHook(false);
	    Map<String, Object> conf =  new HashMap<String,Object>();
	    conf.put("logging.level.root", "ERROR");
	    conf.put("server.port", servicePort);	 
	    app.setDefaultProperties(conf);
	    app.run(args);
    }
}
