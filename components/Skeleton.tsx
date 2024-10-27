export default function Skeleton({
  styles,
}: Readonly<{
  styles: string;
}>) {
  return <div className={styles} />;
}
