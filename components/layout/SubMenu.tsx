export default function SubMenu({ subMenuShow, category }: any) {
  return (
    <ul
      className={`${
        subMenuShow === category.id
          ? "pointer-events-auto h-[120px] overflow-auto"
          : "pointer-events-none h-0 overflow-hidden"
      } transition-all bg-gray-300 flex flex-col items-start gap-2 pr-2`}
    >
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
      <li>{category.name}</li>
    </ul>
  );
}
