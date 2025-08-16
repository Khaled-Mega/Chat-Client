import { MdChatBubbleOutline } from "react-icons/md";

export default function ChatPlaceholder(){
    return (
        <div className="flex justify-center items-center flex-col h-full">
            <div className="animate-bounce bg-base-100 p-3 rounded-md">
            	<MdChatBubbleOutline className="size-5 text-primary"/>
            </div>
            <h1 className="text-xl text-primary mt-5">Welcome To Chatty</h1>
            <p className="text-sm mt-3  text-slate-300">Select a conversation from the sidebar to start chatting</p>
        </div>
    )
}