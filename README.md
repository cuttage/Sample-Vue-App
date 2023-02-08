# Sample Animated Full Stack App - Custom request example ADVANCED

A fully functional Animated Full Stack one-page web app in Vue. The app has its own server. Design and fonts are curated by the author and for showcasing purpose only. This is a custom request example of an advanced web app.

## Available online at

✅ Production: https://sample-vue-app.vercel.app

## Project setup

```
cd client
yarn
cd -
cd server
yarn
```

### Compiles and hot-reloads for development

```
cd client
yarn serve

cd server
yarn start
```

## Project description

### Development choices

#### I created a small Vue app with a Node.js-based, Express backend. Since the commissioned project mentioned JSON in the requirements, I coded a minimal reproduction of a potentially larger use case in which I retrieve data stored in a JSON from an API call with Axios. I use Vuex store as a single point of truth in our statistical data, which is reactive. In Vuex, I use persistence as a technique to minimize API calls from the same device on page creation. I use GSAP's TweenMax to implement targeted State Transitions on layout change. I use Jest for testing purposes.
