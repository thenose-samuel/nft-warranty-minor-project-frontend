export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center w-screen h-screen items-center">
        <div className="w-96  h-96 rounded-lg p-5 border-indigo-200 border-2 border-dashed">
          <input
            placeholder="Enter customer's wallet address"
            className="placeholder:text-neutral-400 max-w-full rounded-md w-full h-10 border-2 focus:ring-indigo-400 focus:ring-2 focus:outline-none text-neutral-600 font-regular text-sm p-2"
          ></input>
          <input
            placeholder="Enter customer's wallet address"
            className="placeholder:text-neutral-400 max-w-full rounded-md w-full h-10 border-2 focus:ring-indigo-400 focus:ring-2 focus:outline-none text-neutral-600 font-regular text-sm p-2"
          ></input>
        </div>
      </div>
    </div>
  );
}
