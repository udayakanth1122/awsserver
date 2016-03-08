# awsserver
launching nodeJS server

This file is a tutorial to connect to AWS using nodejs.

# Requirements
1. Express
2. aws-sdk
3. nodejs

# Configuring AWS in nodejs app.

```
var AWS = require('aws-sdk');
AWS.config.update({
"accessKeyId": "access_id",
  "secretAccessKey": "secret_key",
  "region": "us-west-2"
});
```
