# Meow Button

This simple app is built in order to run a couple tests to practice setting up CircleCI and Heroku.

The CircleCI [pipeline](https://app.circleci.com/pipelines/github/joebumbulis/button_react_2).
Deployed [App](https://meow-button.herokuapp.com/).

### Docker
This `create-react-app` was containerized using [this](https://mherman.org/blog/dockerizing-a-react-app/) tutorial.

#### To run docker container:
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
1. `-it` interactive mode
2. `--rm` removes container and volumes after container exits
3. `-v ${PWD}:/app` mounts the code into the container at "/app"
4. `-v /app/node_modules` in order to use the container version of the node_modules folder, we configured another volume: -v /app/node_modules. Thus, you should be able to remove the local "node_modules" folder.
5. `-p 3000:3000` exposes port 3000

### Kubernetes
View application at external IP: `35.199.47.162:3000`

- This application is [deployed to GKE](https://circleci.com/blog/simplifying-your-ci-cd-build-pipeline-to-gke-with-circleci-orbs/) and the image is stored on GCP. 
- Commands for gcloud:
    - `gcloud projects list` - to get list of gcloud of projects
    - `gcloud container clusters list` - get list of clusters along with info
    - `kubectl config current-context` - to get current cluster context
    - `kubectl get services` - access the application, get IP's for services

    ### Slack Integration
    - [Orb - Slack](https://circleci.com/developer/orbs/orb/circleci/slack)
    - Slack Integration [Blog](https://circleci.com/blog/circleci-slack-integration/)
    - Slack Setup on [Github](https://github.com/CircleCI-Public/slack-orb/wiki/Setup)
    - Slack Orb [Wiki](https://github.com/CircleCI-Public/slack-orb/wiki) & [Wiki Setup](https://github.com/CircleCI-Public/slack-orb/wiki/Setup)
    
    - Currently [waiting](https://api.slack.com/apps/A024G8QG1NJ/oauth?) on step 3 of install instructions: `Install and Receive Token`. (Awaiting request approval)
    - Once approved, need to also install app in channel, `#joeb-demo` in slack. 
    - Created ticket in `CircleCI Service Desk` asking for someone to approve my app. 
