export default function Skeleton({ title, desc }) {
  return (
    <div className="hidden md:flex w-1/2 bg-base-300 p-6 h-full flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-2 ">
        {Array.from({ length: 9 }).map((_,index) => {
          return (
            <div className="skeleton h-32 w-32 bg-primary" key={index}></div>
          );
        })}
      </div>
      <div>
        <h1 className="text-2xl text-center mt-10 mb-5 text-primary">
          {title}
        </h1>
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
}
