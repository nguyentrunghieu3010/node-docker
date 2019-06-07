# Docker Started
```
    https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

    https://tutorialedge.net/docker/working-with-docker-nodejs/
```
> docker build -t node-docker .

> docker run -d -p 9000:8080 node-docker

> docker build -t node-docker-nodemon .

> docker run -it -p 9001:3000 -v $(pwd):/app node-docker-nodemon

> docker ps

> docker tag 1f415928e473 docker.io/hieunt1/node-docker

# Push Docker Public
```

https://stackoverflow.com/questions/29956500/docker-public-registry-push-fails-repository-does-not-exist/37036348

```
> Syntax: docker tag ${image_id} docker.io/${login_name}/${image_name} 

> docker tag 1f415928e473 docker.io/hieunt1/node-docker

> Syntax: docker push docker.io/${login_name}/${image_name} is OK

> docker push docker.io/hieunt1/node-docker

