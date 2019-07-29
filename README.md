# README
# Installing and Running the Software

This readme assumes the user has already installed node.js to a suitable place on their computer and have downloaded the sourcecode files to a suitable directory. This also assumes the user has added necessary environment variables to their System 'path', if required.

# Setup
Step 1. Open the command prompt to the directory containing the server.js file.

Step 2. Use the "npm install" command to install the following modules:  
        • npm install express  
        • npm install sqlite3  
        • npm install jquery  
        • npm install body-parser  
        • npm install express-session

Step 3. Use the command "node server" to run the program on the localhost port 3000.

Step 4. In your browser (preferably Google Chrome) enter in the address bar "localhost:3000/index"
        This will take you to the home page of the program.

Step 5. Navigate through the program as you desire using the navigation bar at the top of the web page.

Step 6. Once you are done with the program and wish to stop it hosting on localhost, press ctrl+c with the command prompt window active.
        (You may have to press ctrl+c twice in order to stop hosting).

# Test Data
Currently the database contains:  
• Username: TestUser - Password: TestPass  
• Username: Hellow - Password: World  
       
Additional usernames and passwords can be directly added to the database using the registration page of the website.

(Currently entering an incorrect username and/or password will cause the page to wait for a response from the server that does not exist. Unfortunately, I'm not sure as to what the problem is and was not able to fix it without compromising the signin validation.)
