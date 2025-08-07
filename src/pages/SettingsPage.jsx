import { useThemeStore } from "../store/useThemeStore";

import { themes } from "../constants/index.js";

const dummyData = [
  {
    id: 1,
    content: "Hey! How's it going?",
    isSend: false,
  },
  {
    id: 2,
    content: "i'm doing great, just working on some new features",
    isSend: true,
  },
];

export default function SettingsPage() {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="p-6 container mx-auto">
      <div>
        <h1 className="text-primary">Theme</h1>
        <p>Choose A Theme For Your Chat Interface</p>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 border-none">
        {themes.map((t) => {
          return (
            <button
              className="btn btn-outline rounded-md p-0 overflow-hidden"
              onClick={() => setTheme(t)}
            >
              <div
                className="flex w-full h-full border-base-100 border-2 gap-1"
                data-theme={t}
              >
                <div className="bg-primary grow rounded-sm"></div>
                <div className="bg-secondary grow rounded-sm"></div>
                <div className="bg-accent grow rounded-sm"></div>
                <div className="bg-base-300 grow rounded-sm"></div>
              </div>
            </button>
          );
        })}
      </div>
      <div>
        <div className="mt-10 bg-base-300 p-4">
                  <h1 className="text-primary text-2xl">Preview</h1>
          <div className="w-140 mx-auto bg-base-200 p-4">
            <div className="w-full flex items-center justify-start gap-2">
              <span className="bg-primary p-3 rounded-full size-10 flex justify-center items-center">
                J
              </span>
              <div>
                <p className="text-primary">John Doe</p>
                <span>Online</span>
              </div>
            </div>
            <div className="p-4 relative flex flex-col gap-5">
            	<div className="bg-base-300 rounded-md w-fit text-primary p-2">
                <p>{dummyData[0].content}</p>
                <span>12:00am</span>
              </div>
            
            <div className="bg-primary ml-auto text-base-100 rounded-md w-fit p-2">
                <p>{dummyData[1].content}</p>
                <span>12:00am</span>
              </div>
            </div>
            <div className="mt-10 flex gap-2">
              <input type="text" disabled={true} placeholder="This is a preview" className="border-3 border-base-100 grow p-2 rounded-md"/>
              <button className="bg-primary p-3 rounded-md">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
