import React, { FC } from 'react'

import firebase from 'firebase'

const Fcm: FC = () => {
  const btnSubscribe = document.getElementById('btnSubscribe')
  const btnUnSubscribe = document.getElementById('btnUnSubscribe')
  const textInstanceIdToken = document.getElementById('textInstanceIdToken')
  const sendWebPushArea = document.getElementById('sendWebPushArea')
  const sendWebPush = document.getElementById('sendWebPush')

  // メッセージング オブジェクトの取得
  const messaging = firebase.messaging()

  // アプリにウェブ認証情報を設定する
  messaging.usePublicVapidKey('<YOUR-PUBLIC-VAPID-KEY')

  // 権限要求
  function requestPermission() {
    // 通知を受信する権限を要求する
    messaging
      .requestPermission()
      .then(function() {
        // 現在の登録トークンの取得
        messaging
          .getToken()
          .then(function(token) {
            if (textInstanceIdToken) {
              ;(textInstanceIdToken as HTMLInputElement).value = token
            }
            if (btnSubscribe) {
              btnSubscribe.style.display = 'none'
            }
            if (btnUnSubscribe) {
              btnUnSubscribe.style.display = 'block'
            }
            if (sendWebPushArea) {
              sendWebPushArea.style.display = 'block'
            }
            if (sendWebPush) {
              ;(sendWebPush as HTMLInputElement).value =
                'https://andus.heteml.jp/firebase_cloud_messaging/send.php?id=' + token
            }
          })
          .catch(function(err) {
            if (textInstanceIdToken) {
              ;(textInstanceIdToken as HTMLInputElement).value = 'トークンの取得に失敗しました（' + err + '）。'
            }
          })
      })
      .catch(function(err) {
        if (textInstanceIdToken) {
          ;(textInstanceIdToken as HTMLInputElement).value = '通知の許可が得られませんでした（' + err + '）。'
        }
      })
  }

  // トークン削除
  function deleteToken() {
    // トークン取得
    messaging
      .getToken()
      .then(function(currentToken) {
        // トークン削除
        messaging
          .deleteToken(currentToken)
          .then(function() {
            if (textInstanceIdToken) {
              ;(textInstanceIdToken as HTMLInputElement).value = 'トークンが削除されました'
            }
            if (btnSubscribe) {
              btnSubscribe.style.display = 'block'
            }
            if (btnUnSubscribe) {
              btnUnSubscribe.style.display = 'none'
            }
            if (sendWebPushArea) {
              sendWebPushArea.style.display = 'none'
            }
            if (sendWebPush) {
              ;(sendWebPush as HTMLInputElement).value = ''
            }
          })
          .catch(function(err) {
            if (textInstanceIdToken) {
              ;(textInstanceIdToken as HTMLInputElement).value = 'トークンの削除に失敗しました（' + err + '）。'
            }
          })
      })
      .catch(function(err) {
        if (textInstanceIdToken) {
          ;(textInstanceIdToken as HTMLInputElement).value = 'トークンの取得に失敗しました（' + err + '）。'
        }
      })
  }

  // 初期化
  window.onload = function() {
    // イベント登録
    if (btnSubscribe) {
      btnSubscribe.onclick = requestPermission
    }
    if (btnUnSubscribe) {
      btnUnSubscribe.onclick = deleteToken
    }
    // トークン取得
    messaging
      .getToken()
      .then(function(currentToken) {
        if (currentToken) {
          // 本来ここでサーバにトークン送る処理
          //sendTokenToServer(currentToken);
          if (textInstanceIdToken) {
            ;(textInstanceIdToken as HTMLInputElement).value = currentToken
          }
          if (btnSubscribe) {
            btnSubscribe.style.display = 'none'
          }
          if (btnUnSubscribe) {
            btnUnSubscribe.style.display = 'block'
          }
          if (sendWebPushArea) {
            sendWebPushArea.style.display = 'block'
          }
          if (sendWebPush) {
            ;(sendWebPush as HTMLInputElement).value =
              'https://andus.heteml.jp/firebase_cloud_messaging/send.php?id=' + currentToken
          }
        } else {
          // トークン無い場合
          if (textInstanceIdToken) {
            ;(textInstanceIdToken as HTMLInputElement).value =
              '通知の許可をしていません。「通知を許可する」を押してください。'
          }
        }
      })
      .catch(function(err) {
        if (textInstanceIdToken) {
          ;(textInstanceIdToken as HTMLInputElement).value = 'トークンの取得に失敗しました（' + err + '）。'
        }
      })
  }

  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>FCM</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">FCM</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body text-center">
                  <div className="contentsArea">
                    <p>
                      <input type="button" id="btnSubscribe" value="通知を許可する" />
                      <input type="button" id="btnUnSubscribe" value="トークン削除" style={{ display: 'none' }} />
                    </p>
                    <p>
                      <input
                        type="text"
                        value="YOUR-INCETANCE-ID-TOKEN"
                        id="textInstanceIdToken"
                        style={{ width: '100%', boxSizing: 'border-box' }}
                      />
                    </p>
                    <div id="sendWebPushArea">
                      <p>下記をコピーしてこのタブを閉じ、別ブラウザで見てください</p>
                      <input type="text" value="" id="sendWebPush" style={{ width: '100%', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fcm
