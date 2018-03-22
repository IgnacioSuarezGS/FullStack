const fs = require('fs');

var users = require('../users/users.controller').users;
var tweets = JSON.parse(fs.readFileSync('data/tweets.json'));

module.exports = {
    seeAllTweets : getAllTweets,
    seeTweetsById : seeTweetsById,
    newTweet: newTweet,
    delTweet: deleteTweet
}

function rightNow() {
    let d = new Date();
    return (d.getTime());
    // Date.now();
}

function validateTweet(tweet) {
    let charsInTweet = 255;
    let errors = [];
    tweet.owner = tweet.owner.toLowerCase();
    if (tweet.id) {
        errors.push('No puede especificar una ID');
    } else {
        if (tweet.text) {
            if (tweet.text.length > charsInTweet) {
                errors.push(`Tu tweet no puede tener más de ${charsInTweet}`);
            }
        } else {
            errors.push(`Tu tweet no tiene contenido`);
        }
        if (tweet.owner) {
            let result = false;
            users.forEach(user => {
                if (user.username == tweet.owner) {
                    result = true;
                }
            })
            if (result === false) {
                errors.push(`El usuario ${tweet.owner} no existe`);
            }
        } else {
            errors.push('Tu tweet no pertenece a nadie')
        }
    }
    if (errors.length > 0) {
        return errors;
    } else {
        return true;
    }
}

function getAllTweets(req, res) {
    res.json(tweets);
}

function seeTweetsById(req, res) {
    let id = req.params.id;
    res.json(tweets.find(tweet => tweet.id == id));
}

function newTweet(req, res) {
    let newTweet = req.body;
    let tweet = {
        id: "",
        text: "",
        owner: "",
        createdAt: 0
    }
    let isValid = validateTweet(newTweet);
    if (isValid === true) {
        tweet.id = Math.random().toString(36).substring(7);
        tweet.text = newTweet.text;
        tweet.owner = newTweet.owner;
        tweet.createdAt = rightNow();
        tweets.push(tweet);
        let tweetOwner = users.find(user => user.username == newTweet.owner);
        tweetOwner.tweets.push(tweet);
        fs.writeFileSync('users.json', JSON.stringify(users));
        fs.writeFileSync('tweets.json', JSON.stringify(tweets));
        res.json(tweets);
    } else {
        res.json(isValid);
    }
}

function deleteTweet(res, req) {
    let id = req.params.id;
    let whereIsInTweets = tweets.findIndex(tweet => tweet.id == id);
    console.log(whereIsInTweets);
    if (whereIsInTweets != -1) {
        tweets.splice(whereIsInTweets, 1);
        users.forEach(user => {
            if (user.tweets.findIndex(tweet => tweet.id === id) != -1) {
                user.tweets.splice(user.tweets.findIndex(tweet => tweet.id === id), 1);
            }
        });
        fs.writeFileSync('tweets.json', JSON.stringify(tweets));
        fs.writeFileSync('users.json', JSON.stringify(users));
        res.send(`El tweet ha sido borrado`);
    } else {
        res.send(`El tweet no existe`)
    }
}