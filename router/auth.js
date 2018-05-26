const express = require('express')
const router = express();
const ApiRequest = require('../api/serverConfig')
const ApiConfig = require('../api/config')

router.post("/", (req, res) => {
    const data = {
        client_id: req.body.client_id,
        client_secret: req.body.client_secret,
        grant_type: req.body.grant_type,
        code: req.body.code,
        redirect_uri: req.body.redirect_uri,
    }
    ApiRequest(
        ApiConfig.HOST_CONCIG.host,
        ApiConfig.API_ROUTER_CONFIG.oauth_post,
        'POST',
        data,
        (response, code) => {
            res.status(code).send(response)
        },
        (err) => {
            res.status(500).send(err)
        }
    )

})

module.exports = router;
