import { FiUsers } from "react-icons/fi";
import { useChatStore } from "../store/useChatStore.js";
import { useAuthStore } from "../store/useAuthStore.js";

export default function Sidebar() {
  const { users, isUserLoading, setSelectedUser, selectedUser } =
    useChatStore();
  const { authUser } = useAuthStore();

  return (
    <div>
      <div className="flex items-center gap-2">
        <FiUsers className="text-primary" />
        <span className="text-primary">Contacts</span>
      </div>

      <div className="mt-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Show Online Only</span>
        </label>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {authUser &&
          users.map((user) => {
            if (isUserLoading) {
              return (
                <div
                  key={"loading-" + user._id}
                  className="flex w-52 flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-20"></div>
                      <div className="skeleton h-4 w-28"></div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={user._id}
                type="button"
                className={
                  selectedUser?._id === user._id
                    ? "flex items-center gap-3 bg-base-300 relative z-[1000]"
                    : "flex items-center gap-3 bg-red-500 relative z-[1000]"
                }
                onClick={() => {
                  console.log("Selected:", user.name);
                  setSelectedUser(user);
                }}
              >
                <div>
                  <img
                    src={
                      user.pic ||
                      "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                    }
                    alt="picture"
                    className="size-12"
                  />
                </div>
                <div>
                  <p className="text-primary text-xl">{user.name}</p>
                  <span>Online</span>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
}
