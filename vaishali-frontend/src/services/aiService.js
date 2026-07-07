import api from './api'

export const sendChatMessage = (payload) => api.post('/ai/chat', payload)

export const getPlaceAiSummary = (placeId) => api.get(`/ai/places/${placeId}/summary`)
