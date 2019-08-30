# [ro]Bot Manager

### Installation

To install all packages, use `cd client && npm install`, and `cd server && npm install`.

### Running

This repository uses a Node.js server powering a React.js front end. To run both,
use the command `npm start` while in the top most directory.

NOTE: To use `npm start`, the Node package `concurrently` is required. Install with `npm install -g concurrently`.

The front end page of this application is hosted on `localhost:3000`, while the server runs on `localhost:5000`.
All requests made to the React application are proxied to the main server.