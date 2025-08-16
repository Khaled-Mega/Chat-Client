import { useChatStore } from "../store/useChatStore.js";
import { useState } from "react";
export default function ChatContainer() {
  const { selectedUser, getMessages, sendMessage } = useChatStore();

  const [message, setMessage] = useState({
    text: "",
    image: "",
  });

  function handleSendMessage() {
    sendMessage(selectedUser._id, message);
    setMessage({ text: "", image: "" });
  }
  return (
    <div className="h-full flex flex-col justify-start items-start">
      <div className="w-full p-4 flex justify-start items-center gap-3 border-b-1 border-primary">
        <div className="size-12">
          <img
            src={
              selectedUser.pic ||
              "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            }
            className="size-12"
          />
        </div>
        <div>
          <p className="text-primary text-xl">{selectedUser.name}</p>
          <span>Online</span>
        </div>
      </div>
      <div className="grow w-full"></div>
      <div className="w-full p-4 flex justify-start items-center gap-3 border-t-1 border-primary">
        <input
          type="text"
          placeholder="Type a message"
          className="input input-bordered input-primary w-full"
          value={message.text}
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <label className="bg-primary">
          attach
          <input type="file" className="hidden" />
        </label>
        <button className="btn btn-primary" onClick={() => handleSendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}
