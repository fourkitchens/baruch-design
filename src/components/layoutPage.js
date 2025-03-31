import clsx from "clsx";
export default function LayoutPage({ children, sidebar = false }) {
  return (
    <div className="bg-neutral-pearl text-neutral-charcoal">
      <div className="max-width-wrapper py-16">
        <div className={clsx(sidebar && "grid grid-cols-1 lg:grid-cols-9 gap-8", !sidebar && "mx-auto max-w-2xl")}>
          
          <main className={clsx(sidebar && "lg:col-span-7")}>
            {children}
          </main>
          
          {sidebar && (
            <aside className={clsx("order-first lg:col-span-2")}>
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}