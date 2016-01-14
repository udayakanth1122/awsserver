var express = require('express');
var AWS = require('aws-sdk');
 
var app = express();

AWS.config.update({
"accessKeyId": "",
  "secretAccessKey": "",
  "region": "us-west-2"
});
// Create an S3 client
var s3 = new AWS.S3();
 
app.get('/listObject', function(req, res) {
    s3.listBuckets(function(err, data) {
	    if (err)
	      console.log(err)
	    else
	      res.end(JSON.stringify(data.Buckets));
	      
	});
});

 
app.listen(3000);
console.log('Listening on port 3000...');
