export default function PageTitle({ children, as: Tag = 'h1', className = 'mb-8' }) {
  return (
    <>
      <Tag className={`text-5xl font-bold text-heading ${className}`}>{children}</Tag>
    </>
  );
}