import api from './api'

export const generateItinerary = (payload) => api.post('/trips/generate', payload)

export const getItineraryById = (id) => api.get(`/trips/${id}`)

export const optimizeRoute = (payload) => api.post('/trips/route/optimize', payload)

export const saveItinerary = (payload) => api.post('/trips', payload)
