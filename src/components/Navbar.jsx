import { MdChatBubbleOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

import { useAuthStore } from "../store/useAuthStore.js";

export default function Navbar() {
  const { authUser, logout } = useAuthStore();
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <div className="bg-primary p-2 rounded-md">
          <MdChatBubbleOutline />
        </div>
        <h2 className="text-primary">Chatty</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-1 items-center">
          <IoSettingsOutline />
          <span>Settings</span>
        </div>
        {authUser && (
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center">
              <IoPersonOutline />
              <span>Profile</span>
            </div>
            <div
              className="flex gap-1 items-center"
              onClick={() => {
                logout();
              }}
            >
              <IoLogOutOutline />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
