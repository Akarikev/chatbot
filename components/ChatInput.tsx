'use client'

import { cn } from '@/lib/utils'
import { Message } from '@/lib/validators/message'
import { useMutation } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { FC, HTMLAttributes, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { send } from 'vite'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {

  
}

const ChatInput: FC<ChatInputProps> = ({className, ...props}) => {

  const [input, setInput] = useState<string>('')

  const {mutate: sendMessage, isLoading} = useMutation({
    mutationFn: async (message: Message) => {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify({
        messages: 'Hello'
        })
      })
      return res.body
    },
    onSuccess: () => {
      console.log('Success')
    }
  })
  return <div {...props} className= {cn('border-t border-zinc-300', className)}>
  <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
    <ReactTextareaAutosize

    onKeyDown={(e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          const message : Message = {
            id: nanoid(),//=> 
            isUserMessage: true,
            text: input
          }
          sendMessage(message)
        }
    }}  
       rows={2}
       maxRows={4}
       autoFocus
       placeholder='write prompt!'
       value={input}
       onChange={(e) => setInput(e.target.value)}
        className='peer disabled:opacity-50 resize-none pr-14 border-0 block w-full bg-zinc-100 text-gray-900 py-1.5 focus:ring-0 text-sm sm:leading-6 placeholder:pl-2'
    />

     
   
     
  </div>
  </div>
}

export default ChatInput