# task-manager-app
A task management app using the Dummy JSON API, built with React, React Context API, and React Router. The app includes PWA support and responsive design.

## Features

- Fetch tasks from the Dummy JSON API
- Create, edit, and delete tasks
- Drag and drop tasks between "To-Do", "In Progress", and "Completed" statuses
- Uses React Context API for state management
- Lazy loading of routes and task details for performance optimization
- PWA-enabled: Offline support and "Add to Home Screen"
- Mobile responsive design

## Tech Stack

- React
- React Context API
- React Router
- Bootstrap for UI styling
- Service Workers (PWA)
- Dummy JSON API

## Installation and Setup Instructions

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12.x or later)
- [npm](https://www.npmjs.com/get-npm)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git

2. Navigate to the project directory
      ``` bash
    cd task-manager-app
   
3. Install dependencies
Run the following command to install all the necessary dependencies:
   ``` bash
    npm install

4. Running the app locally
Start the development server with: 
   ``` bash
   npm start

This will launch the app in your default browser at http://localhost:3000.
Running as a Progressive Web App (PWA)
Build the application:

## Running as a Progressive Web App (PWA)
1. Build the application:
npm run build
Serve the app (You can use serve for this):

2. Serve the app
npm install -g serve
serve -s build
The app will now be served as a PWA, and you'll see a prompt for "Add to Home Screen" when you open it in a mobile browser.

## Code Structure
- src/: Contains the source code of the project
- components/: Reusable UI components such as TaskCard, TaskBoard, and TaskNavbar
- context/: Context API logic for state management
- pages/: Pages for routing
- serviceWorker.js: Service worker file for enabling offline support

## Design Decisions
- React Context API: Used for state management instead of Redux due to the lightweight nature of the app.
-  Routing: Implemented using React Router for navigation and lazy loading of routes.
- PWA Support: The app works offline by caching API data and assets using a service worker.
- Responsiveness: The app is designed to be mobile-first with responsive layouts for different screen sizes.

   
 
