# Stocks and bonds dashboard demo

Stocks and bonds dashboard interface demo using Vue.

## Requirements
- Node 17.4.0

## Setup
Install npm dependencies
```
npm install
```

Set the .env file or the required environment variables. If the server will be running using http protocol (instead of https in local environment) it's important to set NODE_ENV=development to disable secure cookies or session might not persist.

## Build assets
```
npm run build
```

## Start the server
```
npm run start
```

-------------------

## Dev environment
Webpack listener:
```
npm run watch
```

Server in dev mode:
```
npm run dev
```

------------------

## External api endpoints
POST POST to /api/update body { itemId: 'asd98hasdh0', value: 6000 } OR { name: 'Aluar', value: 6000 }

To run a fast demo I created a terminal tool that updates two different items. Might be run from terminal, with the server running in localhost:3000 or edit the file update-value-demo.js with the right url.
```
node update-value-demo
```
