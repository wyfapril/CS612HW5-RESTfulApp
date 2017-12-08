# CS612HW5-RESTfulApp

Our "Emoji Hub" web app runs in Docker container, using Node.js to feed json data to html file.

  -> run "sudo docker build -t restfulapp" in terminal to build docker image for this app;
  
  -> run "sudo docker run -p 8081:8081 restfulapp" to fire the app;
  
  (Dockerfile contains "RUN npm install", so npm modules are automatically installed when user runs the command above. server.js is the enter point for this app.)
