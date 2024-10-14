export default function Picture({
  styles,
  alt,
  src,
  setVideoTime = true,
  rootStyle
}: Readonly<{
  styles?: string;
  alt?: string;
  src: string;
  setVideoTime?: boolean;
  rootStyle ?: string;
}>) {
  return (
    <picture className={`relative ${rootStyle}`}>
      {/* media="type/jpg" */}
      {/* media="type/webp" */}
      <source srcSet={src} />
      {/* <source srcSet={src} /> */}
      <img className={styles} src="/images/image-1.jpg" alt={alt} />
      <div
        className={`${setVideoTime ? "" : "hidden"} lg:hidden absolute w-12 h-6 bottom-2 left-4 rounded-sm bg-gray-400 text-white text-sm flex justify-center items-center`}
      >
        02:23
      </div>
    </picture>
  );
}
