const SectionBanner = ({organizationalDescriptor, title}) => {
  return (
    <div className="bg-white text-body pt-3 pb-2 lg:pt-6 lg:pb-5 border-b border-neutral-dove">
      <div className="max-width-wrapper ">
        <p className="text-3xl lg:text-5xl uppercase font-bold font-sans-xcondensed leading-none">
          <span className="text-body font-medium">{organizationalDescriptor}</span>{' '}
          <span className="text-heading">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default SectionBanner;