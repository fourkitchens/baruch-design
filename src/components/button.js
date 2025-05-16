export default function Button({ children, className, type = '', size = '', href = '' }) {

  const defaultStyle = 'inline-block font-bold rounded-sm transition-all px-6 py-2';

  const buttonStyle = type === 'sky' ? 'bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo' 
    : type === 'ghost' ? 'bg-transparent ring-1 ring-neutral-dove/70 hover:bg-white hover:ring-white hover:text-primary-indigo text-white'
    : type === 'cuny-blue' ? 'bg-primary-cuny-blue ring-1 ring-primary-cuny-blue hover:bg-primary-cuny-blue-dark hover:ring-primary-cuny-blue-dark hover:text-white text-white'
    : type === 'tangerine' ? 'bg-secondary-tangerine ring-1 ring-secondary-tangerine hover:bg-secondary-tangerine-dark hover:ring-secondary-tangerine-dark text-white'
    : 'bg-primary-sky ring-1 ring-primary-sky hover:bg-white hover:ring-white text-primary-indigo ';
  
  const buttonSize = size === 'lg' ? 'text-2xl' : 'text-base';
  
  return (
    <a href={href} className={`${buttonStyle} ${buttonSize} ${defaultStyle} ${className}`}>
      {children}
    </a>
  );
}