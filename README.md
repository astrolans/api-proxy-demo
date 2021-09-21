## Demo: Setup API Proxy with Angular
A simple Angular app consuming cross-origin API with CORS Proxy.

## Description
To setup proxy for calling API in another origin or backend server, create `proxy.conf.json` file in `./src` in your workspace and add nessecary settings. See [angular docs](https://angular.io/guide/build#proxying-to-a-backend-server).

Next step, in `angular.json` add in "serve" property, add `"proxyConfig": "src/proxy.conf.json"`, in "production" and/or "development" or both.

Lastly, in components, make API call to proxy (eg. `http.get<..>('http://localhost:4200/api')`).

### Todo
1. Download or clone repo.
2. In `./src/app/app.component.ts` on line 6, add API Key.
3. In workspace, run `npm install` to get all dependencies.
4. Run `npm start` to run app.
