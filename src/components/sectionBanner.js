const SectionBanner = ({organizationalDescriptor, title}) => {
  return (
    <div className="bg-white text-body py-3 border-b border-neutral-dove">
      <div className="max-width-wrapper ">
        <p className="text-[100px] leading-[100px] uppercase font-bold font-field-gothic flex flex-row gap-2">
          <span className="text-body font-normal">{organizationalDescriptor}</span>
          <span className="text-heading">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default SectionBanner;