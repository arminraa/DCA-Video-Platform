export default function HeadDropdown({
  display,
}: Readonly<{
  display: "hidden" | "block";
}>) {
  return (
    <div className={`${display} absolute md:max-w-[676px] lg:max-w-[1000px] w-full h-[300px] md:h-[400px] shadow-2xl z-30 bg-gray-400 top-[120px] sm:top-[90px] md:right-2 xl:right-40 right-0 rounded-lg`}></div>
  );
}
