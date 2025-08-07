import { MdOutlineEdit } from "react-icons/md";

import { useAuthStore } from "../store/useAuthStore.js";

import { useState } from "react";

export default function ProfilePage() {
  const { authUser, isUpdating, updatePic } = useAuthStore();
  

  const [pic, setPic] = useState(null);
  function handleUpdate(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const image64base = reader.result;
      console.log(image64base);
      setPic(image64base);
      await updatePic({ userPic: image64base });
    };
  }
  return (
    <div className="container mx-auto p-6 flex flex-col items-center gap-6">
      <div className="bg-base-300 grow w-full flex flex-col p-6 items-center gap-3 rounded-xl">
        <h1 className="text-3xl font-bold text-center text-primary">Profile</h1>
        <div className="avatar size-40 relative">
          <img
            src={
              pic ||
              authUser.pic ||
              "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            }
            className="size-40 rounded-full"
          />
          <label
            className="absolute right-2 bottom-4 bg-secondary size-7 rounded-full z-100 flex items-center justify-between"
            htmlFor="img"
          >
            <MdOutlineEdit className="text-white text-2xl mx-auto" />
          </label>
          <input
            type="file"
            className="hidden"
            id="img"
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
        </div>
        <span className="text-slate-400">
          Click the edit icon to update your photo
        </span>
        <div className="w-full flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              disabled={true}
              className="input input-bordered w-full"
              value={authUser.name}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              disabled={true}
              className="input input-bordered w-full"
              value={authUser.email}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-base-300 rounded-xl p-6">
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-4">
            <span className="text-primary">Account Information</span>
            <div className="flex justify-between items-center border-b-2 pb-3 border-primary">
              <span className="text-primary">Member Since:</span>
              <span>{authUser.createdAt}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-primary">Account Status:</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
