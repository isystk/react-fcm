import React, { FC } from 'react'

import firebase from 'firebase'

const Fcm: FC = () => {
  // useEffect(() => {
  //   // Service Worker explicit registration to explicitly define sw location at a path
  //   ;async () => {
  //     try {
  //       await navigator.serviceWorker.register('/firebase-messaging-sw.js')
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  // }, [])

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyB8iz9_m2x4aeb7fwp4hGJ1u0_0KrvENDg',
    authDomain: 'fcm-react-92bbf.firebaseapp.com',
    projectId: 'fcm-react-92bbf',
    storageBucket: 'fcm-react-92bbf.appspot.com',
    messagingSenderId: '530349365157',
    appId: '1:530349365157:web:45fade502a8c1a17117a4c',
    measurementId: 'G-HBZTPGXD30',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  // メッセージング オブジェクトの取得
  const messaging = firebase.messaging()

  const YOUR_PUBLIC_VAPID_KEY_HERE =
    'BDtbuB12fVdSgSE3T4U6a1vc2be2d0ahiB-ycZONrOZ2oVKe3q0dAV0rmbyJptmwqLIWfF1U14a07hVzLDCMkJE'

  // アプリにウェブ認証情報を設定する
  messaging.getToken({ vapidKey: YOUR_PUBLIC_VAPID_KEY_HERE })

  // プッシュ通知を受信した場合
  messaging.onMessage(payload => {
    console.log('Message received. ', payload)
  })

  const getToken = () =>
    messaging
      .getToken({ vapidKey: YOUR_PUBLIC_VAPID_KEY_HERE })
      .then(currentToken => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          console.log('Success!!', currentToken)
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.')
          // ...
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err)
        // ...
      })

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
                      <input type="button" value="通知を許可する" onClick={getToken} />
                    </p>
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
