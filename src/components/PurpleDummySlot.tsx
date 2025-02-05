export default function PurpleDummySlot() {
  return (
    <div className="flex h-52 w-54 flex-col justify-center gap-1 rounded-3xl bg-purple-300 p-3 text-xs">
      <div className="flex items-center gap-2">
        <div className="w-fit rounded-full bg-white p-1">
          <img
            src="images/landing-page/girl.jpg"
            className="h-8 w-8 rounded-2xl"
          ></img>
        </div>
        <span>
          <b className="text-lg">Sophia</b> 5m ago
        </span>
      </div>
      <div className="flex w-full rounded-2xl bg-black p-2 gap-2 text-gray-300 items-center">
        <div className="flex flex-col items-center rounded-xl px-4 py-1 bg-teal-100 text-black">
          <span>Wed</span>
          <span className="text-xl font-bold">26</span>
        </div>
        <div className="flex flex-col text-teal-100">
            <span className="font-semibold text-[15px]">Design Sync</span>
            <span>13:00 - 14:00</span>
        </div>
      </div>
      <div className="flex w-full rounded-2xl bg-black p-2 gap-2 text-purple-300 items-center">
        <div className="flex flex-col items-center rounded-xl px-4 py-1 bg-purple-300 text-black">
          <span>Wed</span>
          <span className="text-xl font-bold">26</span>
        </div>
        <div className="flex flex-col">
            <span className="font-semibold text-[15px]">Board Meeting</span>
            <span>17:00 - 20:00</span>
        </div>
      </div>
     
    </div>
  );
}
