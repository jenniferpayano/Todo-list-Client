import apiUrl from '../apiConfig'
import axios from 'axios'

export const todoShow = (id, user) => {
  return axios({
    url: apiUrl + '/todos/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const todoIndex = (user) => {
  return axios({
    url: apiUrl + '/todos',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const todoDelete = (id, user) => {
  return axios({
    url: apiUrl + '/todos/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const todoUpdate = (id, todo, user) => {
  return axios({
    url: apiUrl + '/todos/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { todo }
  })
}

export const todoCreate = (todo, user) => {
  return axios({
    url: apiUrl + '/todos',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { todo }
  })
}
