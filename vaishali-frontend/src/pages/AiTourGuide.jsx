import { useState, useRef, useEffect } from 'react'
import { Bot, Send, RotateCcw } from 'lucide-react'
import { useChat } from '../hooks/useChat'

const suggestions = ['Tell me about Ashokan Pillar', 'Why is Vaishali important?', 'Best time to visit', 'Local food to try']

const AiTourGuide = () => {
  const { messages, sendMessage, loading } = useChat()
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    sendMessage(input)
    setInput('')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex flex-col h-[calc(100vh-64px)]">
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-sm">AI Tour Guide</h1>
            <p className="text-xs text-emerald-500">Online</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-700">
          <RotateCcw size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className="flex items-end gap-2 max-w-[85%]">
              {msg.role === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-violet-700 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
              )}
              <div>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user' ? 'bg-violet-700 text-white rounded-br-sm' : 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[11px] text-gray-400 mt-1 ${msg.role === 'user' ? 'text-right' : ''}`}>{msg.time}</p>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-violet-700 flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl px-4 py-2.5 text-sm text-gray-400">Typing...</div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => sendMessage(s)}
            className="text-xs whitespace-nowrap bg-violet-50 text-violet-700 px-3 py-1.5 rounded-full font-medium hover:bg-violet-100"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-3 py-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask anything about Vaishali..."
          className="flex-1 text-sm outline-none placeholder-gray-400 bg-transparent"
        />
        <button onClick={handleSend} className="bg-violet-700 hover:bg-violet-800 text-white p-2 rounded-full">
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}

export default AiTourGuide
