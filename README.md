# Qlik Blends

## Usage


installation steps:
1. Create a new file within the ./src/services directory called blendr.js with the following info:

```js
export default {
  accountId: "your-blendr-accountId",
  appId: your-app-id,
  apiKey: "your-blendr-api-key",
  baseUrl: "https://api.blendr.io/v1"
}
```
2. Then run the following commands
- npm i
- npm run build
- npm run sense

3. Then zip the contents in the folder qlik-blends-ext and then upload as an extension

