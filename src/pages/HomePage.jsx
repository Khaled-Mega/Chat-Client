import { useChatStore } from "../store/useChatStore.js";

import { useEffect } from "react";

import { FiUsers } from "react-icons/fi";

export default function HomePage() {
  const { users, getUsers, isUserLoading } = useChatStore();

  useEffect(() => {
    getUsers();
    console.log(users);
  }, [getUsers]);
  return (
    <div className="grow bg-base-200 relative">
      <div className="h-full p-5">
        <div className="bg-base-100 p-5 h-full">
          <div>
            <div className="flex items-center gap-2">
              <FiUsers className="text-primary" />
              <span className="text-primary">Contacts</span>
            </div>
          </div>
          <div className="mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Show Online Only</span>
            </label>
          </div>
          <div className="overflow-scroll mt-10 flex flex-col gap-4">
            {users.map((user) => {
              if (isUserLoading) {
                return (
                  <div className="flex w-52 flex-col gap-4">
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
                <div className="flex items-center gap-3">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
