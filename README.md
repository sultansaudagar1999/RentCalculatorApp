1. Build the Docker Image
In the terminal, navigate to your project directory (where the Dockerfile is located) and build the Docker image:
docker build -t rent-calculator-app .
This command tells Docker to build an image with the tag rent-calculator-app using the current directory (.) as the build context.

2. Run the Docker Container
After the build is complete, you can run the Docker container using the following command:
docker run -p 5000:5000 rent-calculator-app
The -p 5000:5000 option maps port 5000 of the container to port 5000 on your host machine.
After running this command, you can access the Flask app by opening http://localhost:5000 in your web browser.


2.Optional: Using Docker Compose
If you have a more complex application (with databases or other services), you can also use Docker Compose. Here's a basic docker-compose.yml for this single Flask service:


docker-compose up
