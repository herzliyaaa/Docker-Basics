
#`` DOCKER BASICS``

#### Commands
``docker ps`` -	List all running containers.

``docker ps -a`` -	List all container instances, with their ID and status.

``docker images``	- Lists all images on the local machine.

``docker history user/image``	- Lists the history of an image.

``docker logs [container name or ID]``	- Displays the logs from a running container.

``docker port [container name or ID]``	- Displays the exposed port of a running container.

``docker diff [container name or ID]``	- Lists the changes made to a container.

``docker run -d -p $HOSTPORT:$CONTAINERPORT  user/image`` - Run an image in detached mode with port forwarding.

``docker build -t image_name .`` - Builds a Docker image from a Dockerfile in the current directory.

``docker stop [container ID]`` - Stop the specified container

``docker rm [container name or ID]`` - Remove a specified container from the machine

---

``Docker Compose `` lets you define and run multi-container applications with Docker. 



