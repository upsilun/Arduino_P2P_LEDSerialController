const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);     // Set pin 8 as an output
  Serial.begin(9600);          // Initialize serial communication at 9600 bps
}

void loop() {
  if (Serial.available()) {    // Check if data is available on the serial port
    char command = Serial.read();  // Read the incoming serial data

    if (command == '1') {
      digitalWrite(ledPin, HIGH);  // Turn on the LED if '1' is received
      Serial.println("LED is ON"); // Send message to serial monitor
    } else if (command == '0') {
      digitalWrite(ledPin, LOW);   // Turn off the LED if '0' is received
      Serial.println("LED is OFF"); // Send message to serial monitor
    }
  }
}
