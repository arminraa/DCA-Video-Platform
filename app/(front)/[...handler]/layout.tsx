export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div
      className={
        "container mx-auto max-w-8xl w-[100vw] flex justify-between items-start"
      }
    >
      {children}
    </div>
  );
}
