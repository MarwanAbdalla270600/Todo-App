export default function BlackDummySlot() {
  return (
    <div className="bg-neutral flex h-80 w-54 flex-col justify-center rounded-3xl p-4 text-xs text-neutral-400">
      <span className="text-xs">Select slot</span>
      <span className="text-xl text-neutral-50">January 25, 2022</span>
      <div className="my-4 flex w-full justify-center gap-2 rounded-2xl bg-neutral-900 text-xs">
        <div className="flex flex-col items-center rounded-xl px-4 py-1">
          <span>Mon</span>
          <span className="text-xl text-neutral-100">24</span>
        </div>
        <div className="flex flex-col items-center rounded-xl bg-neutral-700 px-4 py-1">
          <span>Tue</span>
          <span className="text-xl text-neutral-50">25</span>
        </div>
        <div className="flex flex-col items-center rounded-xl px-4 py-1">
          <span>Wed</span>
          <span className="text-xl text-neutral-100">26</span>
        </div>
      </div>
      <div className="mb-3 flex w-full items-center gap-2">
        <span>10:00</span>
        <div className="bg-secondary flex flex-1 items-center gap-2 rounded-xl p-2 text-neutral-800">
          <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
          <span>10:00 - 11:00</span>
        </div>
      </div>
      <div className="mb-3 flex w-full items-center gap-2">
        <span>11:00</span>
        <div className="bg-secondary flex flex-1 items-center gap-2 rounded-xl p-2 text-neutral-800">
          <input type="checkbox" className="checkbox h-5 w-5" />
          <span>11:00 - 12:00</span>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <span>12:00</span>
        <div className="bg-secondary flex flex-1 items-center gap-2 rounded-xl p-2 text-neutral-800">
          <input type="checkbox" className="checkbox h-5 w-5" />
          <span>12:00 - 13:00</span>
        </div>
      </div>
    </div>
  );
}
