import axios from 'axios'
import curtApi from '../../api'

// Actions
const SET_ADMIN = 'auth/SET_ADMIN'
const SET_TOKEN = 'auth/SET_TOKEN'
const REMOVE_TOKEN = 'auth/REMOVE_TOKEN'
const OPEN_MODAL = 'auth/OPEN_MODAL'
const CLOSE_MODAL = 'auth/CLOSE_MODAL'

// Initial State
const initialState = {
  isAdmin: false,
  token: undefined,
  isModalOpen: false,
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ADMIN:
      localStorage.setItem('isAdmin', action.payload)
      return { ...state, isAdmin: action.payload }
    case SET_TOKEN:
      localStorage.setItem('token', action.payload)
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        action.payload
      }`
      return { ...state, token: action.payload }
    case REMOVE_TOKEN:
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      return { ...initialState }
    case OPEN_MODAL:
      return { ...state, isModalOpen: true }
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false }
    default:
      return state
  }
}

// Action Creators
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
})

export const setAdmin = isAdmin => ({
  type: SET_ADMIN,
  payload: isAdmin,
})

export const login = ({ username, password }) => async dispatch => {
  const { isAdmin, token } = await curtApi.auth.login({ username, password })
  dispatch(setToken(token))
  dispatch(setAdmin(isAdmin))
  window.location.reload()
}

export const logout = () => dispatch => {
  dispatch({ type: REMOVE_TOKEN })
  dispatch(setAdmin(false))
  localStorage.setItem('isAdmin', false)
  window.location.reload()
}

export const openModal = () => ({ type: OPEN_MODAL })
export const closeModal = () => ({ type: CLOSE_MODAL })
