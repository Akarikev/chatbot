
"use client"
import { FC } from 'react'
import { Accordion, AccordionContent, AccordionTrigger } from './ui/accordion'
import { AccordionItem } from '@radix-ui/react-accordion'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

interface ChatProps {

}

const Chat: FC<ChatProps> = ({}) => {
  return <div className='font-[inter]'>
    <Accordion type='single' collapsible className='relative bg-white z-40 shadow'>
        <AccordionItem value='item-1'>
            <div className='fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden '>
                <div className='w-full h-full flex flex-col'>
                    <AccordionTrigger className='px-6 border-b border-zinc-300 '>
                            <ChatHeader />
                  
                    </AccordionTrigger>

               <AccordionContent>
                <div className='flex flex-col h-80'>
                  messages

                  <ChatInput className='px-4 ' />
                </div>
               </AccordionContent>
                </div>
            </div>
        </AccordionItem>
    </Accordion>
  </div>
}

export default Chat