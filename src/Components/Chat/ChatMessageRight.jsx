import React from 'react'

const ChatMessageRight = () => {
    return (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex  flex-row-reverse items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    S
                </div>
                <div className="relative mr-3 text-sm bg-indigo-500 text-white py-2 px-4 shadow rounded-xl">
                    <div>I'm good, thanks! How about you?</div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessageRight