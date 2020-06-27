# FarmHaC - Farm Hours and Cards Steam
### Ru: 
###### Установка: 
```bash
git clone https://github.com/FunnyRain/farmhac
cd farmhac
npm i
```
###### Настройка: (config.js)
```js
module.exports = {
    /** логин */
    login: `admin`,
    /** пароль */
    password: `admin`,
    /** game-id
    * Пример: https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/
    * после app/... идёт game-id - 730
    * Также , можно поставить на фарм сразу несколько игр: 
    * gameid: [730, 570],
    */
    gameid: 730,
    /** SteamGuard - если на аккаунте он стоит - пишем true
    * Если нет - false
    */
    twoFA: false
}
```
###### Запуск 
```bash
node index.js
```
### Eng: 
###### Installing: 
```bash
git clone https://github.com/FunnyRain/farmhac
cd farmhac
npm i
```
###### Setting: (config.js)
```js
module.exports = {
    /** login */
    login: `admin`,
    /** password */
    password: `admin`,
    /** game-id
    * Example: https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/
    * after the app/... there is a game-id - 730
    * You can also put several games on the farm at once:
    * gameid: [730, 570],
    */
    gameid: 730,
    /** SteamGuard - if it is on the account - write true
    * If not - false
    */
    twoFA: false
}
```
###### Launch 
```bash
node index.js
```