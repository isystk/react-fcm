import Env from '../env/'

/**
 * BFF（バックエンドフォーフロントエンド）用の URL を作成する
 * @param path
 */
const getBffUrl = (path: string): string =>
{
  const url = [Env.externalEndpointUrl, path].join('')
  return url
}

/** API のエンドポイント */
export const API_ENDPOINT = {
  /** ログイン状態チェック */
  LOGIN_CHECK: getBffUrl('/loginCheck'),
  /** ログイン */
  LOGIN: getBffUrl('/authenticate'),
  /** ログアウト */
  LOGOUT: getBffUrl('/logout'),
  /** 共通定数 */
  CONSTS: getBffUrl('/consts'),

}
