# 10/0 Max Mille

![Max Mille](./docs/img/MaxMille.gif)

---

10/0 Max Mille is a Browser / Webpage source for Open Broadcaster Software (OBS) and XSplit that displays rotating advertisements during a live stream. It communicates with an Amazon Web Services (AWS) backend to record statistics while the advertisements are live in the active scene.

📚 [Documentation](./docs/README.md) 📋 Trello Board (Coming soon)

## Features

- **Currently only supports Twitch** with plans to support YouTube Live and Facebook Gaming in the future
- **Statistics**
  - Records when the rotating advertisements are live in the current active scene and when the advertisements leave the current active scene
  - Records the viewer count in a fixed configurable interval when the stream is live and when the advertisements are live in the current active scene

## Motivation

This project was developed in collaboration with 10/0 Media as a way to automatically gather data around the usage of embeded stream advertisements and to communicate to clients the potential and success of ad campaigns.

From a personal standpoint, this project was a way for me to brush up on my JavaScript and React as well as a way for me to learn and gain hands-on experience using the Serverless Framework.
