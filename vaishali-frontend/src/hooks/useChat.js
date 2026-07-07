import { useState } from 'react'
import { sendChatMessage } from '../services/aiService'

const fallbackReplies = [
  'Vaishali is one of the oldest republics in the world, dating back to the 6th century BCE.',
  'Lord Mahavira, the founder of Jainism, was born in Vaishali around 599 BCE.',
  'Lord Buddha visited Vaishali several times and gave his last sermon here before traveling to Kushinagar.',
  'The Ashokan Pillar stands as a symbol of peace, built during Emperor Ashoka\'s reign in the 3rd century BCE.'
]

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'ai',
      text: 'Namaste! I am your AI Tour Guide for Vaishali. Ask me anything about the history, places, or culture of this ancient city.',
      time: '10:30 AM'
    }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (text) => {
    if (!text.trim()) return
    const userMessage = {
      id: Date.now(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const response = await sendChatMessage({ message: text })
      const aiText = response?.data?.data?.reply ||fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)]
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'ai',
          text: aiText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'ai',
          text: fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return { messages, sendMessage, loading }
}
