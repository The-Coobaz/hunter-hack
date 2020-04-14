#include "hunter.h"

/////////////////////////////////////////////////////////////////////////////
// Setup initialize routine
/////////////////////////////////////////////////////////////////////////////

void setup(void)
{
pinMode(HUNTER_PIN, OUTPUT); // Bus Port
//pinMode(ENABLE_PIN, OUTPUT); // Enable Port
//pinMode(LED_PIN, OUTPUT); // LED Port

Serial.begin( 9600);

Serial.println("====== SERIAL STARTED ======");

//digitalWrite( ENABLE_PIN, HIGH);

delay(5000);

Serial.println();
Serial.println( "====== START ======");

delay (2000);

HunterStart(2,10); delay(60000); HunterStop(2); // Start zone 2 for 10 minutes, wait 1 min and stop

delay(15000);

Serial.println("Start program C");
HunterProgram(3);

Serial.println("====== END ======");
}

/////////////////////////////////////////////////////////////////////////////
// Processing loop
/////////////////////////////////////////////////////////////////////////////
void loop(void)
{
delay(5000);
}
