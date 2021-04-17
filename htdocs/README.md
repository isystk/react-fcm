
https://andus.heteml.jp/firebase_cloud_messaging/


https://qiita.com/ryo_hisano/items/1171beca22d5a04ed802


Chromeはオレオレ証明書では動作しないので、以下のオプションを付けて起動する
open -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args \
--unsafely-treat-insecure-origin-as-secure=https://localhost \
--allow-insecure-localhost \
--ignore-certificate-errors
