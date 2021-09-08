# Meow Button

This simple app is built in order to run a couple tests to practice setting up CircleCI and Heroku.

The CircleCI [pipeline](https://app.circleci.com/pipelines/github/joebumbulis/button_react_2).
Deployed [App](https://meow-button.herokuapp.com/).

#### Docker
This `create-react-app` was containerized using [this](https://mherman.org/blog/dockerizing-a-react-app/) tutorial.

*Docker commands*:
```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    joebumbulis/cci-react-demo-app
```
