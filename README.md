To start the project, will need to do

```
yarn install
yarn start
```

Or 


```
npm install
npm start
```


# Inter Tab/Window/iFrame communication on Front end.

We can achieve inter tab communication using following methods on front-end. Two of them are implemented in this example.

- Local Storage
- Channel Messaging API
- Broadcast Channel


|Category|Local Storage|Channel Messaging API|Broadcast Channel|
|--|--|--|--|
|Works with| - Tabs| - Tabs <br /> - Popup Window <br /> - iFrame| - Tabs <br /> - Popup Window <br /> - iFrame|
|Cross Origin|:negative_squared_cross_mark:|:white_check_mark:|:negative_squared_cross_mark:|
|Pros|- Simple to use. <br/> - Common shared state. <br /> - By default works in case of accidental refresh| - Works with iFrame/Tabs/Windows <br /> - Cross Origin <br />|- Works with iFrame/Tabs/Windows <br />|
|Cons|- For a large chunk of data, this approach has adverse effects since LocalStorage is synchronous. And hence can block the main UI thread. <br /> - It is possible that we may leave sensitive information in localStorage.| - Partial Support in Safari/IE. <br /> - You need the reference/browser context of child element. | - No support in Safari <br /> - Doesn't support cross origin communication|