const express = require('express');

const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('chatMessages.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }

        const existingMessages = data.split('\n').filter(message => message.trim() !== '');

        let messageList = '';
        if(existingMessages.length === 0){
            messageList = `<p>No messages found.</p>`;
        }else {
            messageList = existingMessages.map(message => `<p>${message}</p>`).join("")
        }
        console.log(messageList)
        res.send(`
            ${messageList}
            <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input id="message" type="text" name="message"/>
                <input type="hidden" id="username" name="username"/>
                <button type="submit">Send</button>
            </form>
        `);
    })

});

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);

    const username = req.body.username;
    const message = req.body.message;

    fs.appendFile('chatMessages.txt', `${username}: ${message}\n`, 'utf-8', (err) => {
        if(err) {
            console.log(err);
            return;
        }else {
            res.redirect('/');
        }
    })

    // res.send('Message sent successfully!');
});

module.exports = router;
