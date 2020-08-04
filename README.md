# Shop-cart App

## Configuration

Add your own `MONGOURI` from your MongoDB database in `config/keys.dev.js`.

```javascript
module.exports = {
  MONGODB_URI: "YOUR_MONGO_URI_HERE",
};
```

## Running locally

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

#### These are the APIs we provide:

| Methods | Urls                  | Actions                         |
| ------- | --------------------- | ------------------------------- |
| POST    | `orderRoute/shipping` | saves the order to the database |

#

### Screenshots:
