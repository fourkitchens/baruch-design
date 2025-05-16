export default function PageTitle({ children, as: Tag = 'h1', className = 'mb-4 md:mb-8' }) {
  return (
    <>
      <Tag className={`text-4xl md:text-5xl font-bold text-heading text-balance ${className}`}>{children}</Tag>
    </>
  );
}