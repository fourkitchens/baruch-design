import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Accordion = ({data, className}) => {
  return (
    <Disclosure key={data.question} as="div" className={className}>
      <dt className="!mt-0">
        <DisclosureButton className={clsx(
          "group flex w-full items-start justify-between py-6 px-2 transition-all",
          "text-left text-body",
          "hover:bg-neutral-pearl-dark"
        )}>
          <span className="text-xl/7 font-semibold">{data.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
            <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" className="mt-2 px-2 pb-4 prose lg:prose-lg">
        {data.content}
      </DisclosurePanel>
    </Disclosure>
  )
}

export default function AccordionGroup({data}) {
  return (
    <dl className="mt-16 divide-y divide-neutral-pewter/30 !space-y-0">
      {data.map((item) => (
        <Accordion key={item.question} data={item} className="-mx-2" />
      ))}
    </dl>
  )
}