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

We can achieve inter tab communication using following methods on front-end. All of them are implemented in this example.

- Local Storage
- Channel Messaging API
- Broadcast Channel


|Category|Local Storage|Channel Messaging API|Broadcast Channel|
|--|--|--|--|
|Works with| - Tabs| - Tabs <br /> - Popup Window <br /> - iFrame| - Tabs <br /> - Popup Window <br /> - iFrame|
|Cross Origin|:negative_squared_cross_mark:|:white_check_mark:|:negative_squared_cross_mark:|
|Browser Support|All|All(Partial Support in Safari, IE)|Other than Safari, IE|
|Other Pros|- Simple to use. <br/> - Common shared state. <br /> - By default works in case of accidental refresh| - | - |
|Other Cons|- For a large chunk of data, this approach has adverse effects since LocalStorage is synchronous. And hence can block the main UI thread. <br /> - It is possible that we may leave sensitive information in localStorage.|- You need the reference/browser context of child element. | - |