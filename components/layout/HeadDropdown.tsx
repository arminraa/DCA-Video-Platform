export default function HeadDropdown({
  display,
}: Readonly<{
  display: "hidden" | "block";
}>) {
  return (
    <div
    style={{background : "#ccc"}}
      className={`${display} absolute sm:right-2 rounded-lg w-[100%] max-w-[676px] h-[300px] top-[120px]  shadow-2xl`}
    >
        <ul className="flex flex-col items-center gap-2">
            <li>
                <input type="checkbox" name="" id="" />
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
  );
}
