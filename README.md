# CS612HW5-RESTfulApp

Our "Emoji Hub" web app runs in Docker container, using Node.js to feed json data to html file.

  -> run "sudo docker build -t restfulapp" in terminal to build docker image for this app;
  
  -> run "sudo docker run -p 8081:8081 restfulapp" to fire the app;
  
  -> open browser and type "localhost:8081" in address to show index.html (have fun!);
  
  -> change route to "localhost:8081/allemojis" to view all json data;
  
  -> edit route to "localhost:8081/emoji/" + any number from 1-306 to view a large emoji picture by id.
  
  (Dockerfile contains "RUN npm install", so npm modules are automatically installed when user runs the command above. server.js is the enter point for this app.)
