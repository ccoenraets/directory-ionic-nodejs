# Employee Directory with Ionic and Node.js

Employee directory is a sample application that allows you to look up employees by name, view the details of an employee,
call, text, or email an employee, and navigate up and down the org chart.

This version of Employee Directory is built with [Ionic]() and [Node.js]().

## Hosted Version

Click [here] to run the hosted version in your browser.


## Deploy your Own Version

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running in Cordova

### Step 1: Install Ionic

1. Make sure you have an up-to-date version of Node.js installed on your system. If you don't have Node.js installed, you can install it from [here](http://nodejs.org/).

1. Open a terminal window (Mac) or a command window (Windows), and install Cordova and Ionic:

  ```
  npm install -g cordova ionic
  ```

  On a Mac, you may have to use **sudo** depending on your system configuration:

  ```
  sudo npm install -g cordova ionic
  ```

1. If you already have Cordova and Ionic installed on your computer, make sure you update to the latest version:

  ```
  npm update -g cordova ionic
  ```

  or

  ```
  sudo npm update -g cordova ionic
  ```

### Step 2: Create the application

1. Using the Ionic CLI, create an application named **employee-directory**:

  ```
  ionic start employee-directory
  ```

1. Delete the default ***www*** folder in the ***employee-directory*** folder that was just created

1. Copy the ***www*** folder from this repository into the ***employee-directory*** folder

1. Modify ***www/js/services.js*** and specify the URL where your Node.js server is running. For example:

 ```
 angular.module('directory.services', ['ngResource'])
     .factory('Employees', function ($resource) {
         return $resource('http://myserver.com/employees/:employeeId/:data');
     });
 ```


### Step 3: Building for iOS

> You need the iOS SDK installed on your computer to build an iOS version of your application
using the steps below.

1. On the command line, make sure you are in the **employee-directory** folder

1. Add support for the iOS platform:

    ```
    ionic platform add ios
    ```

1. Build the project:

    ```
    ionic build ios
    ```

1. Open **employee-directory.xcodeproj** in the **employee-directory/platforms/ios** folder

1. In Xcode, run the application on a device connected to your computer or in the iOS emulator


### Step 4: Building for Android

> You need the Android SDK installed on your computer to build an Android version of your
application using the steps below.

1. Make sure the Android SDK and the ant build tool are available on your system. The Android SDK is available [here](http://developer.android.com/sdk/index.html). **Both the android and ant tools must be available in your path**. To test your configuration, you should be able to execute both **android** and **ant** from the command line.

1. On the command line, make sure you are in the **employee-directory** folder

1. Add support for the Android platform:

    ```
    ionic platform add android
    ```

1. Build the project:

    ```
    ionic build android
    ```

    The project is built in the **employee-directory/platforms/android** folder


1. To build and run the application on an Android device connected to your computer using a USB cable:

    ```
    ionic run android
    ```

1. To build and run the application in the Android emulator:

    ```
    ionic emulate android
    ```
