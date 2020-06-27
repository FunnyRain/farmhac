/**
 * @author FunnyRain
 * @link https://github.com/FunnyRain
 * @link https://vk.com/vyxel
 */

const steam_user = require('steam-user')
const steam_totp = require('steam-totp')

const config = require('./config.js')

const User = new steam_user()

if (!config.twoFA) {
    User.logOn({
        accountName: config.login,
        password: config.password
    })
} else {
    User.logOn({
        accountName: config.login,
        password: config.password,
        twoFactorCode: steam_totp.generateAuthCode('ydb4q')
    })
}

User.on('loggedOn', () => {
    User.setPersona(steam_user.EPersonaState.LookingToTrade)
    User.gamesPlayed(config.gameid)
    console.log(`\x1b[34m(\x1b[33mFarmHaC\x1b[34m) \x1b[32mLoggined!`)
});
