import { RxTriangleRight } from "react-icons/rx";

export default function PhoneDummySlot() {
  return (
    <div
      className="bg-base-300 flex h-80 w-54 flex-col justify-between rounded-3xl bg-cover bg-center p-2"
      style={{
        backgroundImage: "url(images/landing-page/study.jpg)",
        filter: "grayscale(50%)",
      }}
    >
      <span className="p-2 text-2xl font-semibold text-white">
        Instantly know if someone is available
      </span>
      <div
        className="bg-opacity-50 flex w-full items-center gap-2 rounded-2xl p-2 text-white"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black color with 50% opacity
        }}
      >
        <div className="w-fit rounded-full bg-white p-2">
          <RxTriangleRight size={25} color="gray" />
        </div>
        <span>Swipe left to read</span>
      </div>
    </div>
  );
}
