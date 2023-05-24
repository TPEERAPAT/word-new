#!/bin/bash

# check if port 3000 is already in use
PORT_PID=$(lsof -ti tcp:3000)
if [ -n "$PORT_PID" ]; then
  echo "Killing process on port 3000: $PORT_PID"
  kill $PORT_PID
fi

# start the development server and run tests
yarn lint &&
yarn check-types &&
yarn build &&
yarn test 
yarn dev &
sleep 10
yarn cy:all &&
echo "All tests passed!"

# kill the development server after running tests
PORT_PID=$(lsof -ti tcp:3000)
if [ -n "$PORT_PID" ]; then
  echo "Killing process on port 3000: $PORT_PID"
  kill $PORT_PID
fi
