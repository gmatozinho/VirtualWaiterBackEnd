#!/bin/sh
cd /home/ec2-user/VirtualWaiterBackEnd
npm run transcribe
#pm2 start npm --name VirtualWaiter -- start --watch