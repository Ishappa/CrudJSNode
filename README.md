# CrudJSNode
This application used technologies are NodeJs, MongoDb and ExpressJS

Setup and installation of Project------------------

reference: https://www.youtube.com/watch?v=eYVGoXPq2RA
commonds----------------

1. npm init --> for getting package.json
	--> optional : entry poiny we can set app.js instead of index.js
	--> we can set author name ex:ish@854

2. npm install express --> for installing express

3. npm install mongodb	
4. npm install mongoose
5. npm install -g nodemon --save-dev    -->jus save code instead of when we updated/ chnges done in code we need to restart the server
6. Remove this from package.json "test": "echo \"Error: no test specified\" && exit 1" and add "start": "nodemon app.js"  in script.

7. nodemon run start --> to run the script.

to stop the server: 
================
--> sudo lsof -i :9000
--> sudo kill -9 12345  [replace pid number to yours ]
--> sudo kill -9 12345


Note: we can see all installed dependemcies in package.json


Ubuntu cmd:------------------------------
================================
Note : if we have Mysql server it will be running we need to stop --> sudo systemctl stop mysql.service
1. sudo systemctl start mongod   --> to start the mongodb server .
2. sudo systemctl status mongod	--> checking the status.
3. sudo systemctl stop mongod


