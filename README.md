# CONFIG

No config needed.

# LOCAL INSTALL

For a local install just:
```bash
yarn install
```
and then just:
```
yarn dev
```

This will execute the Node.js backend server in the port `8080` and will run the Webpack development server in the port `8000`.

# EXECUTION

First run:
```bash
yarn build
```
and once completed, just run:
```
yarn prod
```

This will run the Node.js backend server and an HTTP server to serve the frontend bundle injected in the HTML page.
