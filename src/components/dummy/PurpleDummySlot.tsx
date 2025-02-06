export default function PurpleDummySlot() {
  return (
    <div className="bg-primary flex h-52 w-54 flex-col justify-center gap-1 rounded-3xl p-3 text-xs">
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
      <div className="flex w-full items-center gap-2 rounded-2xl bg-black p-2 text-gray-300">
        <div className="bg-secondary flex flex-col items-center rounded-xl px-4 py-1 text-black">
          <span>Wed</span>
          <span className="text-xl font-bold">26</span>
        </div>
        <div className="text-secondary flex flex-col">
          <span className="text-[15px] font-semibold">Design Sync</span>
          <span>13:00 - 14:00</span>
        </div>
      </div>
      <div className="text-primary flex w-full items-center gap-2 rounded-2xl bg-black p-2">
        <div className="bg-primary flex flex-col items-center rounded-xl px-4 py-1 text-black">
          <span>Wed</span>
          <span className="text-xl font-bold">26</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[15px] font-semibold">Board Meeting</span>
          <span>17:00 - 20:00</span>
        </div>
      </div>
    </div>
  );
}
