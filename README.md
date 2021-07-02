# light-dark: an app with a server and a client side

## Project setup
```
cd client
npm install
cd -
cd server
npm install
```

### Compiles and hot-reloads for development
```
cd client
npm run serve

cd server
npm start
```

### Lints and fixes files
```
cd client
npm run lint
```

### Testing
```
cd client
npm run test:unit
```

## Project description

### Development choices

#### I created a small Vue app with a Node.js-based, Express backend. Since the commissioned project mentioned JSON in the requirements, I coded a minimal reproduction of a potentially larger use case in which we retrieve data stored in a JSON from an API call with Axios. We use Vuex store as a single point of truth of our statistics data, which is reactive. In Vuex, we use persistence as a technique to minimize API calls from the same device on page creation. We use GSAP's TweenMax to implement targeted State Transitions on layout change. We use Jest for testing purposes.
