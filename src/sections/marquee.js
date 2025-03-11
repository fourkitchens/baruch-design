export default function Marquee() {
  return (
    <div className="bg-secondary-tangerine py-24">
      <div className="overflow-clip"> 
        <div className="flex flex-row gap-10 w-max animate-marquee-infinite font-field-gothic text-[200px] leading-[160px] font-bold uppercase text-white/70">
          {Array.from({ length: 4 }).map((_, index) => (
            <p key={index} className="">
              Start something <strong className="text-white">unstoppable</strong>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}