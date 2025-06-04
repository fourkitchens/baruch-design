export default {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
};

const Template = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Font Families</h2>
      <div className="space-y-4">
        <p className="font-sans text-2xl">Fort Sans (font-sans)</p>
        <p className="font-sans-condensed text-2xl">Fort Condensed (font-sans-condensed)</p>
        <p className="font-sans-xcondensed text-2xl">Fort XCondensed (font-sans-xcondensed)</p>
        <p className="font-field-gothic text-2xl">Field Gothic XXXCondensed (font-field-gothic)</p>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Text Sizes</h2>
      <div className="space-y-4">
        <p className="text-xs">Text Extra Small (text-xs)</p>
        <p className="text-sm">Text Small (text-sm)</p>
        <p className="text-base">Text Base (text-base)</p>
        <p className="text-lg">Text Large (text-lg)</p>
        <p className="text-xl">Text Extra Large (text-xl)</p>
        <p className="text-2xl">Text 2XL (text-2xl)</p>
        <p className="text-3xl">Text 3XL (text-3xl)</p>
        <p className="text-4xl">Text 4XL (text-4xl)</p>
        <p className="text-5xl">Text 5XL (text-5xl)</p>
        <p className="text-6xl">Text 6XL (text-6xl)</p>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Font Weights</h2>
      <div className="space-y-4">
        <p className="font-thin">Font Thin (font-thin)</p>
        <p className="font-extralight">Font Extra Light (font-extralight)</p>
        <p className="font-light">Font Light (font-light)</p>
        <p className="font-normal">Font Normal (font-normal)</p>
        <p className="font-medium">Font Medium (font-medium)</p>
        <p className="font-semibold">Font Semibold (font-semibold)</p>
        <p className="font-bold">Font Bold (font-bold)</p>
        <p className="font-extrabold">Font Extra Bold (font-extrabold)</p>
        <p className="font-black">Font Black (font-black)</p>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Text Styles</h2>
      <div className="space-y-4">
        <p className="italic">Italic Text (italic)</p>
        <p className="underline">Underlined Text (underline)</p>
        <p className="line-through">Strikethrough Text (line-through)</p>
        <p className="uppercase">Uppercase Text (uppercase)</p>
        <p className="lowercase">LOWERCASE TEXT (lowercase)</p>
        <p className="capitalize">capitalized text (capitalize)</p>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-4">Line Heights</h2>
      <div className="space-y-4">
        <p className="leading-none">Leading None - This is a single line of text with no extra line height. It's useful for tight, compact text layouts.</p>
        <p className="leading-tight">Leading Tight - This is a single line of text with tight line height. It's good for headings and short text blocks.</p>
        <p className="leading-normal">Leading Normal - This is a single line of text with normal line height. It's the default line height for most text.</p>
        <p className="leading-loose">Leading Loose - This is a single line of text with loose line height. It's good for readability in longer text blocks.</p>
      </div>
    </div>
  </div>
);

export const Default = {
  name: 'Typography',
  args: {},
  render: Template,
}; 