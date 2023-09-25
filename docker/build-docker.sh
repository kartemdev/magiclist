sudo docker rmi $(sudo docker images -f dangling=true -q)
docker-compose -p ml up -d --build
