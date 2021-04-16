/**
 * Sliceを利用して Moduleを作ることで、action(action creator), reducer, constants を１つのファイルにまとめて作成することが出来ます。
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Likes } from '../store/StoreTypes'
import { API_ENDPOINT } from '../common/constants/api'
import { API } from '../utilities'

const initialState: Likes = {
  data: [],
}

const LikesReducer = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    readLikes(
      state: Likes,
      action: PayloadAction<{
        result: boolean
        likes: Likes
      }>,
    ) {
      state.data = action.payload.likes.data
    },
    addLike(
      state: Likes,
      action: PayloadAction<{
        id: number
      }>,
    ) {
      const newData: string = action.payload.id + ''
      // state = { ...state, data: state.data }
      state.data = [newData, ...state.data]
    },
    removeLike(
      state: Likes,
      action: PayloadAction<{
        id: number
      }>,
    ) {
      state.data = state.data.filter(n => n !== action.payload.id + '')
    },
  },
})

export const { readLikes, addLike, removeLike } = LikesReducer.actions

export const readLikesAsync = () => async dispatch => {
  const response = await API.get(API_ENDPOINT.LIKES)
  dispatch(readLikes(response))
}

export const addLikeAsync = (id: number) => async dispatch => {
  const response = await API.post(API_ENDPOINT.LIKES_STORE, { id: id })
  if (response.result) {
    window.alert('お気に入りに追加しました')
    dispatch(addLike({ id: id }))
  }
}

export const removeLikeAsync = (id: number) => async dispatch => {
  const response = await API.post(API_ENDPOINT.LIKES_DESTROY + '/' + id)
  if (response.result) {
    dispatch(removeLike({ id: id }))
  }
}

export default LikesReducer
