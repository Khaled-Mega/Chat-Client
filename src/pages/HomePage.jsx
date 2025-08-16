import { useChatStore } from "../store/useChatStore.js";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore.js";

import Sidebar from "../components/Sidebar.jsx";
import ChatPlaceholder from "../components/ChatPlaceholder.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
export default function HomePage() {
  const { getUsers, selectedUser } = useChatStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="grow relative">
      <div className="h-full p-5">
        <div className="bg-base-200 p-5 h-full">
          <div className="flex gap-5 h-full">
            <Sidebar />
            <div className="grow h-full">
              {!selectedUser ? <ChatPlaceholder /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
