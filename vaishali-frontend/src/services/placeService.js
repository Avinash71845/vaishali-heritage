import api from './api'

export const getAllPlaces = (params) => api.get('/places', { params })

export const getPlaceById = (id) => api.get(`/places/${id}`)

export const getNearbyServices = (placeId, type) =>
  api.get(`/places/${placeId}/services`, { params: { type } })

export const getPlaceReviews = (placeId) => api.get(`/places/${placeId}/reviews`)

export const submitReview = (placeId, payload) => api.post(`/places/${placeId}/reviews`, payload)
