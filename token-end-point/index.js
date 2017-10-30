var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;
var app = express();



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// client_id = GOOGLE_CLIENT_ID & client_secret=GOOGLE_CLIENT_SECRET & grant_type=authorization_code & code=AUTHORIZATION_CODE
// client_id = GOOGLE_CLIENT_ID & client_secret=GOOGLE_CLIENT_SECRET & grant_type=refresh_token & refresh_token=REFRESH_TOKEN

app.post("/token", function (req, res, next) {
    console.log("req.query: ", req.query);
    var client_id = req.body.client_id
    var client_secret = req.body.client_secret
    var grant_type = req.body.grant_type
    var ACCESS_TOKEN = "bbcc"
    var REFRESH_TOKEN = "refresh"
    var SECONDS_TO_EXPIRATION = 30;
    var code;
    var refresh_token;

    console.log('req.query',req.body)
    console.log("reached")
    console.log('client_id',client_id)
    console.log('grant_type',grant_type)
    console.log('ACCESS_TOKEN',client_id)
    console.log('client_secret',client_secret)
    if (grant_type == 'authorization_code') {
        code = req.body.code
        console.log('code',code)

        return res.json({
            token_type: "bearer",
            access_token: ACCESS_TOKEN,
            refresh_token: REFRESH_TOKEN,
            expires_in: SECONDS_TO_EXPIRATION
        });
    }
    else {
        refresh_token = req.body.refresh_token;
            console.log("refresh ",ACCESS_TOKEN+SECONDS_TO_EXPIRATION)
        return res.json({

            token_type: "bearer",
            access_token: ACCESS_TOKEN,
            expires_in: SECONDS_TO_EXPIRATION

        })
    }

    var YOUR_PROJECT_ID = 'agentproject-be016';
    var ACCESS_TOKEN = 'abcd';


});





app.listen(port, function () {
    console.log("listening on " + port);
})