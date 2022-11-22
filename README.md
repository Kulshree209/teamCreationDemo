# Appium project with Cucumber and javaScript
This project demonstrates usage of Cucumber and Appium for Mobile Automation using JavaScript as Programming language.
Project is associated with the Blog  # Cucumber and Appium Example - <>

This example will cover:

Basic Test for Mobile Automation using Cucumber and Appium with JavaScript as programming language and Visual Studio Code as IDE

Prerequisites - 

VS code
Cucumber plugin
Appium server
Android Studio
Set Android_HOME
Set Java_Home


### Steps to run the project

1. Clone git repository

2. Start Appium Server using VS code command (appium) or using Appium desktop application
   The project expects the Appium Server to run on localhost:4723. 
   If you run the server to different host and port. Please change the code with the same

3. Download the Eribank application using URL : https://experitest.s3.amazonaws.com/eribank.apk and give the path in js file

4. Modify following variables in the code if necessary
   Open Login.js and modify the code if necessary,

      Appium Server listening host and port.

       driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();

      Device name (After executing adb devices. See "Initializing the driver" in the blog)

      deviceName: "R9WT31625TD"


5. To Execute the test, use below commands -
With  Scenario:
node_modules/.bin/cucumber-js ./Features/Login/Login.feature -r ./Steps/Login.js       

With  Scenario Outline:
node_modules/.bin/cucumber-js ./Features/Login/LoginSc.feature -r ./Steps/LoginSC.js


Note -
2 Feature files present in the project 
Login and LoginSC
In Login we have single scenario and in LoginSC we have scenario outline with background and global step

Use command 'adb devices' to get list of connected devices - 

List of devices attached
R9WT31625TD	device
emulator-5554	device

For Physical device in desired capabilities of js file, give info as device name and version and open dubbing mode
For virtual device user AVD manager to create virtual device using Android Studio
