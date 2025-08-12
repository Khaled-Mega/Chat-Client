import { useChatStore } from "../store/useChatStore.js";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore.js";

import Sidebar from "../components/Sidebar.jsx";
import ChatPlaceholder from "../components/ChatPlaceholder.jsx";
export default function HomePage() {
  const { users, getUsers, isUserLoading, selectedUser, setSelectedUser } =
    useChatStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="grow relative">
      <div className="h-full p-5">
        <div className="bg-base-200 p-5 h-full">
          <div className="flex items-center">
            <Sidebar />
            <div className="grow">{!selectedUser && <ChatPlaceholder />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
