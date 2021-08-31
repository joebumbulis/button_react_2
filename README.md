# Meow Button

This simple app is built in order to run a couple tests to practice setting up CircleCI and Heroku.

The CircleCI [pipeline](https://app.circleci.com/pipelines/github/joebumbulis/button_react_2).
Deployed [App](https://meow-button.herokuapp.com/).


### To run docker container:
```
docker run -it --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3000:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  joe-cci:v2
```
1. `-it` interactive mode
2. `--rm` removes container and volumes after container exits
3. `-v ${PWD}:/app` mounts the code into the container at "/app"
4. `-v /app/node_modules` in order to use the container version of the node_modules folder, we configured another volume: -v /app/node_modules. Thus, you should be able to remove the local "node_modules" folder.
5. `-p 3000:3000` exposes port 3000