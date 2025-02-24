import dynamic from "next/dynamic";

const MegaMenuFalseSSRComp = dynamic(() => import("./MegaMenu"), {
  ssr: false,
});

export default function MegaMenuFalseSSR({
  show,
  menuItems,
  setShow,
  screenWidth,
}: {
  menuItems?: any;
  show?: boolean;
  setShow?: any;
  screenWidth?: number;
}) {
  return (
    <MegaMenuFalseSSRComp
      menuItems={menuItems}
      show={show}
      setShow={setShow}
      screenWidth={screenWidth}
    />
  );
}
