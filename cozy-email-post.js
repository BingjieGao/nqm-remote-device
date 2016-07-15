module.exports = (function(){
    "use strict";
    var http = require('http');
    var log = require("debug")("nqm:cozy-email");

    var options = {
        hostname:"127.0.0.1",
        port:'9125',
        path:'/account',
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        }

    }

    var bodyString = JSON.stringify(

        {   id: null,
            label: 'gmail',
            name: 'bingjie',
            login: 'bingjie@nquiringminds.com',
            password: 'bingjiegao10',
            imapServer: 'imap.gmail.com',
            imapPort: '993',
            imapSSL: true,
            imapTLS: false,
            imapLogin: '',
            smtpServer: 'smtp.gmail.com',
            smtpPort: '465',
            smtpSSL: true,
            smtpTLS: false,
            smtpLogin: '',
            smtpPassword: '',
            smtpMethod: 'PLAIN',
            accountType: 'IMAP',
            mailboxes: '',
            favoriteMailboxes: null,
            draftMailbox: '',
            sentMailbox: '',
            trashMailbox: '' }
    );

    function cozy() {

    };
    cozy.prototype.post_account = function(account){
        log(account);
        var req = http.request(options,function(res){
            log('res on');
            res.on('error',function(err){
                log('an error occour');
                log(err);
            })
        });

        req.write(bodyString);
        req.end();
    }
    return cozy;
}());