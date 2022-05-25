# MicroFrontend Basic Demo

## Get started
This repo contains 3 projects: `Host`, `Remote`, `Remote2`  
We need to use all three simultaneously, open all three projects in separate terminals and do the following:

```
$ npm install
$ npm start
```

The host project will run on [http://localhost:3001](http://localhost:3001)  
The remote project will run on [http://localhost:3002](http://localhost:3002)  
The remote2 project will run on [http://localhost:3003](http://localhost:3003)  
Example: run remote2 within the host: [http://localhost:3001/?mfName=http://localhost:3003/remoteEntry.js](http://localhost:3001/?mfName=http://localhost:3003/remoteEntry.js)  


## Summary:
Open `http://localhost:3001` in your browser and the default microfrontend `remote` is displayed.
To load an other microfrontend under this namespace you can use a query parameter: `http://localhost:3001/?mfName=http://localhost:3003/remoteEntry.js`.
The magic takes place in the host's `webpack.config.js`