# garden-productivity
desktop app

using tauri + react + javascript
- made a switch from electron to tauri because I found that it takes up less
- space and has better performance than electron, which is typically used for
- web-based environments and I wanted to try something new with a desktop

commands to run:
npm run build  -> build the front end React component
cargo tauri build  -> handles the backend & system that makes it a desktop app

sources:
YouTube: 
https://www.youtube.com/watch?v=BbZmLXBDGnU&t=52s
Google: 
https://v1.tauri.app/v1/guides/getting-started/prerequisites

process:
5/12/2025 - 5/14/2025:
    After I developed the project idea based off of functionalities I really
    wanted my personal desktop app to have, I used Paint to make my assets and
    designed my user interface and app prototype on and off. 
5/16/2025:
    I set up the project by making a GitHub repository, updated my Node.js
    package, and installed necessary Electron and React packages. I followed
    this tutorial: https://www.youtube.com/watch?v=oAaS9ix8pes&t=86s
5/17/2025:
    At this point the files were very disorganized and the repository was just
    composed of a bunch of random files I did not understand. I knew they were
    part of the Electron and React installments, but not about what they did. I
    did more research, and while unrelated, I found out about Tauri.
5/18/2025:
    I decided to take a step back and restart on the set up with Tauri this
    time. After cleaning out the repository, I installed the Tauri packages and
    reinstalled React. I also had to install the C++ development tool for my
    VS Code IDE. I ran all of the commands in Git Bash.
