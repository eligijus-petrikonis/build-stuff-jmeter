# build-stuff-jmeter

### What is used?
* [NodeJs](https://nodejs.org/en) - Used for demo application
* [Express](https://expressjs.com/) - Used for demo application
* [JMeter](https://jmeter.apache.org/) - Performance test tool
* [GitHub Actions](https://github.com/features/actions) - Runner of tests
* [Java](https://www.oracle.com/se/java/) - Used for to run JMeter locally

### How to launch application?
#### GitHub page
**There is deployed static version which could be found [here](https://eligijus-petrikonis.github.io/build-stuff-jmeter/)**
* You can see established API endpoints under url: *https://eligijus-petrikonis.github.io/build-stuff-jmeter/apis.html*
#### Run locally
* Download NodeJs LTS
* Checkout this repo
* In root folder run `npm i`
* Run `npm start`
* Open browser and go to *http://localhost:3000/*
* You can see established API endpoints under path: *http://localhost:3000/**apis.html***

### How to setup JMeter for local usage?
* Download LTS Java JDK from [URL](https://www.oracle.com/se/java/technologies/downloads/)
* Setup Java for your PC, if you need more details, you can find help [here](https://www.java.com/en/download/help/index_installing.html)
* Most important to set JAVA_HOME and path to point to JDK installed place
* Download latest JMeter from [URL](https://jmeter.apache.org/download_jmeter.cgi) - if you need more detailed instructions I recommend to use: [URL](https://www.tutorialspoint.com/jmeter/jmeter_quick_guide.htm)
* Extract binaries in your preferred place
* Open extracted JMeter folder
* Navigate to `bin`
* Find and run `jmeter.bat`
* Should open JMeter application

