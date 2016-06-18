## Install the dependencies
  - In server folder use the commands:
  ```
    npm install
  ```
  ```
    npm start
  ```
  - In cli folder use the command:
  ```
    bower install
  ```
  - The task runner in parent folder _my_solutions_
  ```
  npm install grunt -g grunt-cli
  ```
  ```
  npm install --dev
  ```
  ```
  grunt
  ```


## Starting the service
  - Use the command for start the service:
  ```
    nodejs app.js
  ```
  - After the server has started, is listen the port 595 in address **http://localhost:595**


## Using the client
  - Install the http-server
  ```
  npm install http-server -g
  ```
  - Enter in folder _cli_ and run the command
  ```
  http-server
  ```
  - Frontend using the http://localhost:8080/


## Using the server
  - The API using URL **http://localhost:595/api/v1/people**

## DATABASE
  - Config user and pass in folder _my_solutions/server/config/db.js_


## Observations
  - I'm prefering controling the packages in different folders
  - **VERY IMPORTANT** I'am use **ECMA6** in project, because this doesn't work the tasks **uglify** in **grunt**

>
  - nodejs
    - express
    - cheerio
    - request
  - angularjs
  - angular material
  - sass
  - bower
  - npm
  - grunt
    - htmlmin
    - cssmin
    - jshint
    - concat
    - uglify
