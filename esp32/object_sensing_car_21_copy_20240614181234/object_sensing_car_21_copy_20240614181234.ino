#include <WiFi.h>
#include <WebServer.h>

// Replace with your network credentials
const char* ssid = "Shubham";
const char* password = "matapitaji";

// Set web server port number to 80
WebServer server(80);

// Assign output variables to GPIO pins
const int led1 = 2;
const int led2 = 4;
const int led3 = 5;

// Blink intervals for each LED
unsigned long interval1 = 1000;
unsigned long interval2 = 1000;
unsigned long interval3 = 1000;

// Previous millis for each LED
unsigned long previousMillis1 = 0;
unsigned long previousMillis2 = 0;
unsigned long previousMillis3 = 0;

// Current state of each LED
bool ledState1 = LOW;
bool ledState2 = LOW;
bool ledState3 = LOW;

void setup() {
  Serial.begin(115200);
  // Initialize the output variables as outputs
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  
  // Set initial LED states to LOW
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);

  // Connect to Wi-Fi network
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Define routes
  server.on("/", handleRoot);
  server.on("/blink", handleBlink);
  server.onNotFound(handleNotFound);

  // Start the server
  server.begin();
}

void loop() {
  // Handle client requests
  server.handleClient();

  // Handle LED blinking
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis1 >= interval1) {
    previousMillis1 = currentMillis;
    ledState1 = !ledState1;
    digitalWrite(led1, ledState1);
  }

  if (currentMillis - previousMillis2 >= interval2) {
    previousMillis2 = currentMillis;
    ledState2 = !ledState2;
    digitalWrite(led2, ledState2);
  }

  if (currentMillis - previousMillis3 >= interval3) {
    previousMillis3 = currentMillis;
    ledState3 = !ledState3;
    digitalWrite(led3, ledState3);
  }
}

// Handle root URL (/)
void handleRoot() {
  String html = "<!DOCTYPE html><html>";
  html += "<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  html += "<link rel=\"icon\" href=\"data:,\">";
  html += "<style>body { text-align: center; font-family: Arial, Helvetica, sans-serif; }";
  html += "button { width: 100px; height: 100px; font-size: 30px; margin: 5px; }";
  html += ".blink { background-color: #FFC107; color: white; }";
  html += "input { font-size: 20px; }</style></head>";
  html += "<body><h1>ESP32 Web Server</h1>";
  html += "<form action=\"/blink\" method=\"get\">";
  html += "<label for=\"interval1\">Blink Interval for LED 1 (ms):</label>";
  html += "<input type=\"number\" id=\"interval1\" name=\"interval1\" min=\"100\" max=\"10000\" step=\"100\">";
  html += "<br><br>";
  html += "<label for=\"interval2\">Blink Interval for LED 2 (ms):</label>";
  html += "<input type=\"number\" id=\"interval2\" name=\"interval2\" min=\"100\" max=\"10000\" step=\"100\">";
  html += "<br><br>";
  html += "<label for=\"interval3\">Blink Interval for LED 3 (ms):</label>";
  html += "<input type=\"number\" id=\"interval3\" name=\"interval3\" min=\"100\" max=\"10000\" step=\"100\">";
  html += "<br><br>";
  html += "<input type=\"submit\" value=\"Set Blink Intervals\">";
  html += "</form></body></html>";
  
  server.send(200, "text/html", html);
}

// Handle /blink URL
void handleBlink() {
  if (server.hasArg("interval1")) {
    interval1 = server.arg("interval1").toInt();
  }
  if (server.hasArg("interval2")) {
    interval2 = server.arg("interval2").toInt();
  }
  if (server.hasArg("interval3")) {
    interval3 = server.arg("interval3").toInt();
  }
  
  String html = "<!DOCTYPE html><html>";
  html += "<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  html += "<link rel=\"icon\" href=\"data:,\">";
  html += "<style>body { text-align: center; font-family: Arial, Helvetica, sans-serif; }</style></head>";
  html += "<body><h1>ESP32 Web Server</h1>";
  html += "<p>Blink intervals set to:</p>";
  html += "<p>LED 1: " + String(interval1) + " ms</p>";
  html += "<p>LED 2: " + String(interval2) + " ms</p>";
  html += "<p>LED 3: " + String(interval3) + " ms</p>";
  html += "<a href=\"/\">Go Back</a></body></html>";
  
  server.send(200, "text/html", html);
}

// Handle Not Found
void handleNotFound() {
  server.send(404, "text/plain", "404: Not found");
}
