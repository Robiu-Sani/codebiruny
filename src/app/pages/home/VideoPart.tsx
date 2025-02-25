export default function VideoPart() {
  return (
    <div className="w-full flex justify-center items-center px-3 py-8">
      <div
        className={`container grid grid-cols-1 sm:grid-cols-2 gap-4  rounded-md mx-auto `}
      >
        <div className="z-10 w-full flex justify-center items-center">
          <video className="rounded-md w-full" muted playsInline autoPlay loop>
            <source src="/video/v1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full flex justify-center items-center p-5"></div>
      </div>
    </div>
  );
}
