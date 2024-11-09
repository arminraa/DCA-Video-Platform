export default function SubMenu({ subMenuShow, category }: any) {
  return (
    <ul
      className={`${
        subMenuShow === category.id
          ? "pointer-events-auto h-[120px] overflow-auto opacity-1"
          : "pointer-events-none h-0 overflow-hidden opacity-0"
      } transition-all bg-gray-300 flex flex-col md:h-auto md:overflow-auto md:grid md:grid-cols-3 md:gap-6 md:bg-transparent items-start gap-2 pr-2 md:left-[10%] md:right-[40%] md:top-20 md:absolute`}
    >
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
    </ul>
  );
}
