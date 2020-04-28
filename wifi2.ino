#include <FS.h>

#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>


const String ssid = "TurboKombi";
const String password = "Jakuboslaw";
const String REQ_STRING_KEY = "req";

ESP8266WebServer webServer(80);

String contentType(String filename) {
  if (filename.endsWith(".html")) {
    return "text/html";
  } else if (filename.endsWith(".css")) {
    return "text/css";
  } else if (filename.endsWith(".js")) {
    return "application/javascript";
  } else {
    return "text/plain";
  }
}

void handleRequest() {
 
    String argumentValue = webServer.arg(REQ_STRING_KEY);
   Serial.println(argumentValue);
  }
    
bool processRequest(String path) {
  Serial.println("Requested path: " + path);
  boolean isFolder = path.endsWith("/");
  if (isFolder) {
    path = path + "index.html";
  };
  if (SPIFFS.exists(path)) {
    Serial.println("Serving file from SPIFFS!");
    String mime = contentType(path);
    File file = SPIFFS.open(path, "r");
    size_t sent = webServer.streamFile(file, mime);
    file.close();
    return true;
  }
  Serial.println("File not found, returning false");
  return false;
}
void setup() {
  // put your setup code here, to run once:
Serial.begin(115200);
 // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
    WiFi.mode(WIFI_STA);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Print local IP address and start web server
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());



 if (SPIFFS.begin()) {
    Serial.println("SPIFFS initialized");
    FSInfo fs_info;
    boolean infoOk = SPIFFS.info(fs_info);
    if (infoOk) {
      Serial.printf("total kbytes:    %6d\n", fs_info.totalBytes / 1024);
      Serial.printf("used kbytes:     %6d\n", fs_info.usedBytes / 1024);
      Serial.printf("max open files:  %6d\n", fs_info.maxOpenFiles);
      Serial.printf("max path length: %6d\n", fs_info.maxPathLength);
      Serial.print("\n");
      Serial.println("Content of root folder:");
      Dir dir = SPIFFS.openDir("/");
      while (dir.next()) {
        File file = dir.openFile("r");
        Serial.printf("%7d bytes: ", file.size());
        Serial.println(dir.fileName());
        file.close();
      }
      Serial.print("\n");
    } else {
      Serial.println("Errors while getting SPIFFS info");
    }
  } else {
    Serial.println("Errors while initializing SPIFFS");
  }
  webServer.on("/test", HTTP_GET, handleRequest);
  webServer.onNotFound([]() {
    String path = webServer.uri();
    boolean ok = processRequest(path);
    if (!ok) {
      String userAgent = webServer.header("User-Agent");
      String referer = webServer.header("Referer");
      Serial.println("Redirecting to home for User-Agent:\n\t" + userAgent + "\nand Referer:\n\t" + referer);
      boolean showHomePage = processRequest("/");
      if (!showHomePage) {
        webServer.send(404, "text/plain", "404: Page Not Found");
      }
    }
  });
  webServer.begin();
  Serial.println("HTTP server started");
}

void loop() {
  // put your main code here, to run repeatedly:
  webServer.handleClient();
}
