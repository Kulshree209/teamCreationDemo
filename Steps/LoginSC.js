"use strict";

var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

const { Before, Given, When, Then , After } = require('cucumber')
var assert = require('assert');


let driver;

// Setting Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "R9WT31625TD",
    //deviceName: "emulator-5554",
    app: "./apkFile/eribank.apk",
    appPackage: "com.experitest.ExperiBank",
    appActivity: ".LoginActivity",
    browserName: '',
       
};

// Before function for driver initialization
Before( {timeout: 6000 * 10000}, async function () {
    console.log('Before: Connecting to Device.....');  
    driver = await new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
    console.log('');  
    
})

Given(/^I'm on the login screen$/, async() => {
    try {
        
        console.log('Then: Provide application credentials... Start');   
        
        var okElements = await driver.findElements(By.xpath("//*[@text='OK']"));

        if ( okElements.length > 0) {
            var okElement = await driver.findElement(By.xpath("//*[@text='OK']"));   
            await okElement.click();
        } 
    } catch (error) {    
    }  

});

// Given Function of Cucumber , with Creds
Given(
    /^I try to log in with credentials; username: '(.+)' and password: '(.+)'$/,
    async(username, password) => {
        
        const userElement = await driver.findElement(By.xpath("//*[@text='Username']"));
        // Automation command.
        await userElement.sendKeys(username);
        const passwordElement = await driver.findElement(By.xpath("//*[@text='Password']"));
        await passwordElement.sendKeys(password);
        console.log('Then: Provide application credentials...  End');    
        console.log(' ');  
            
      
    },
);


// When function for Action implementation      
When(/^Click the login button$/, async () => {  
    console.log('When: Click the login button ... Start');      
    const loginElement = await driver.findElement(By.xpath("//*[@text='Login']"));
    await loginElement.click();    
    console.log('When: Click the login button... End');    
    console.log('');  
}); 

// Check the Result in Then function
Then(/^Check Login$/, async () => {
    console.log('Then: Checking if login suceeds... Start');    

    // Check for the logout button
   await driver.wait(until.elementLocated(By.xpath("//*[@text='Logout']"), 1000));
    var logoutElements = await driver.findElements(By.xpath("//*[@text='Logout']"));
    assert.notEqual(logoutElements.length, 0);
    console.log('Then: Checking if login suceeds... End');
    
});

// After function to release the Driver
After(async function() {
    
    console.log('Disconnecting.....');  
    console.log('');  
    await driver.quit();
  })




