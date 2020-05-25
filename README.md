# VirtualWaiterBackEnd
Repository for virtual waiter back end in node.js

## Docker
docker build -t virtualwaiterapi .
docker tag virtualwaiterapi registry.heroku.com/virtualwaiter/api   

## Up docker compose
docker-compose up

## Heroku 
heroku container:login
heroku create virtualwaiterapi
heroku git:remote -a virtualwaiterapi
heroku container:push web -a virtualwaiterapi
heroku container:release web -a virtualwaiterapi
heroku ps:scale web=1