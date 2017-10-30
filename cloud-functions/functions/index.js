const functions = require('firebase-functions');
const admin = require('firebase-admin');
const _cors = require('cors');
var firebase=require('firebase');
var serviceAccount = require("./second-5bcbc-firebase-adminsdk-bv1p6-05d7027cd3.json");

var passwordHash = require('password-hash');

// import * as _cors from 'cors';

var cors = _cors({ origin: true });// set these options appropriately According to your case,

var config = {
    apiKey: "AIzaSyDyh8w1OT14UkQztCO4-c-TKDQTbM_hJ2w",
    authDomain: "second-5bcbc.firebaseapp.com",
    databaseURL: "https://second-5bcbc.firebaseio.com",
    storageBucket: "second-5bcbc.appspot.com",
  };
  firebase.initializeApp(config);


admin.initializeApp(functions.config().firebase);


// api.ai web hook
exports.myApp=functions.https.onRequest((req,res)=>{

        var speech=req.body.result.resolvedQuery;

        const getClientDeviceId = admin.database().ref(`/First/name`).once('value').then((data)=>{
            console.log(data);
            speech = data;
            return res.json({

                speech: speech,
                displayText: speech,
                source:'webhook-echo-sample'
            });
        });

    });




//for access token
exports.sendToken = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        res.setHeader("Content-Type", "text/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        //    res.send(req.body.userEmail);

        // admin.auth().getUserByEmail(req.body.userEmail)
        //     .then(function (userRecord) {
        //         var record = userRecord.toJSON();
        //         // See the UserRecord reference doc for the contents of userRecord.
        //         console.log("Successfully fetched user data:", userRecord.toJSON());
        //         console.log(userRecord.toJSON().uid);
        //         //  console.log("this time"+record.uid+" "+record.metaData,lastSignInTime)
        //         //  res.send(userRecord.toJSON().uid);


        //         var hashedPassword = userRecord.toJSON().passwordHash;
        //         console.log("has" + hashedPassword);
        //         console.log(req.body.userPassword);
            
               
              
        //         res.send("0")
        //     })
        //     .catch(function (error) {
        //         console.log("Error fetching user data:", error);
        //         res.send("0");
        //     });


        const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(req.body.userEmail, req.body.userPassword);
            promise
                .then(user => {
                    console.log(user)
                    res.send("abcsd")
                })
                .catch(e => {
                    console.log(e.message)
                
                    res.send("0");
                });


    })
});




