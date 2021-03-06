ð react-fcm
====

![GitHub issues](https://img.shields.io/github/issues/isystk/react-fcm)
![GitHub forks](https://img.shields.io/github/forks/isystk/react-fcm)
![GitHub stars](https://img.shields.io/github/stars/isystk/react-fcm)
![GitHub license](https://img.shields.io/github/license/isystk/react-fcm)

## ð ãã­ã¸ã§ã¯ãã®æ¦è¦

Firebase Cloud Messaging ãå©ç¨ããããã·ã¥éç¥ã®ãµã³ãã«ã¢ããªã±ã¼ã·ã§ã³ã§ãã

### å¯¾è±¡ã¨ãã¦ããæ¹
- FCMï¼Firebase Cloud Messagingï¼ãå©ç¨ãã¦ã¿ããæ¹

### å©ç¨ãã¦ããæè¡

#### â  ã¤ã³ãã©
- Apache 2.4.46ãã»ã»ã»ãWebãµã¼ãã¼ã¨ãã¦Apacheãæ¡ç¨ãã¾ãããèªå·±è¨¼ææ¸ãè¨­å®æ¸ã¿ãªã®ã§éçºç°å¢ã§SSLã¨ãã¦åä½å¯è½ã§ãã

#### â  ã¢ããªã±ã¼ã·ã§ã³
- React 16.2.0
- React-Redux 7.2.2
- typescript 4.2.3
- Bootstrap 4.0.0
- Admin-LTE 3.1.0

## ð Demo

![ãµã³ãã«ç»é¢](./front.png "ãµã³ãã«ç»é¢")
![ããã·ã¥éç¥ãåä¿¡ããæ](./front2.png "ããã·ã¥éç¥ãåä¿¡ããæ")

## ð¦ ãã£ã¬ã¯ããªæ§é 

```
.
âââ docker ï¼åç¨®Daemonï¼
â   â
â   âââ apache ï¼Webãµã¼ãã¼ï¼
â       âââ conf.d (apacheã®è¨­å®ãã¡ã¤ã«)
â       âââ logs ï¼apacheã®ã­ã°ï¼
â
âââ htdocs ï¼Apacheå¬éãã£ã¬ã¯ããªï¼
â   â
â   âââ public
â   âââ src
â   â   âââ sass
â   â   âââ ts
â   âââ package.json
â   âââ tsconfig.json
â   âââ webpack.mix.js
âââ dc.sh ï¼Dockerã®èµ·åç¨ã¹ã¯ãªããï¼
```

## ðï¸ Docker æä½ç¨ã·ã§ã«ã¹ã¯ãªããã®ä½¿ãæ¹

```
Usage:
  dc.sh [command] [<options>]

Options:
  stats|st                 Dockerã³ã³ããã®ç¶æãè¡¨ç¤ºãã¾ãã
  init                     Dockerã³ã³ããã»ã¤ã¡ã¼ã¸ã»çæãã¡ã¤ã«ã®ç¶æãåæåãã¾ãã
  start                    ãã¹ã¦ã®Daemonãèµ·åãã¾ãã
  stop                     ãã¹ã¦ã®Daemonãåæ­¢ãã¾ãã
  apache restart           Apacheãåèµ·åãã¾ãã
  --version, -v     ãã¼ã¸ã§ã³ãè¡¨ç¤ºãã¾ãã
  --help, -h        ãã«ããè¡¨ç¤ºãã¾ãã
```

## ð¬ ä½¿ãæ¹

```
# ä¸æºå
$ ./dc.sh init

# ãµã¼ãã¼ãèµ·åãã
$ ./dc.sh start

# ãã­ã³ãã¨ã³ãããã«ãããã
$ cd htdocs
$ yarn && yarn run dev

# ãã©ã¦ã¶ã§ã¢ã¯ã»ã¹ï¼Chromeã¯ServiceWorkerããªã¬ãªã¬è¨¼ææ¸ã§ã¯åä½ããªãã®ã§ããªãã·ã§ã³ãä»ãã§èµ·åãã¦ãã¾ãï¼
$ open -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args \
--unsafely-treat-insecure-origin-as-secure=https://localhost \
--allow-insecure-localhost \
--ignore-certificate-errors

# Curlã§ãããã·ã¥éç¥ãéä¿¡ãã¾ãã
curl -X POST \
--header "Authorization: key={ãµã¼ãã¼ã­ã¼}" \
--header "project_id: key={éä¿¡èID}" \
--header Content-Type:"application/json" \
https://fcm.googleapis.com/fcm/send \
-d @- << EOF
{
    "to": "ãããã¯ or registration_token",
    "notification": {
        "body": ""
    },
}
EOF

# ãµã¼ãã¼ãåæ­¢ããå ´å
$ ./dc.sh stop
```

## ð¨ åè

| ãã­ã¸ã§ã¯ã| æ¦è¦|
| :---------------------------------------| :-------------------------------|
| [Firebase Cloud Messagingã§å§ããWebããã·ã¥éç¥](https://qiita.com/ryo_hisano/items/1171beca22d5a04ed802)| Firebase Cloud Messagingã§å§ããWebããã·ã¥éç¥ |


## ð« Licence

[MIT](https://github.com/isystk/react-fcm/blob/master/LICENSE)

## ð Author

[isystk](https://github.com/isystk)

