# VirtualWaiterBackEnd

Repository for VirtualWaiter back end in node.js  

## Up docker compose to local test

docker-compose up  
localhost:3000  

## Publish

### Docker

docker build -t virtualwaiterapi .  
docker tag virtualwaiterapi registry.heroku.com/virtualwaiter/api

### Heroku

heroku container:login  
heroku create virtualwaiterapi  
heroku git:remote -a virtualwaiterapi  
heroku container:push web -a virtualwaiterapi  
heroku container:release web -a virtualwaiterapi  
heroku ps:scale web=1  
