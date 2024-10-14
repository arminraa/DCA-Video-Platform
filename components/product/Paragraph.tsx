"use client";
import { CSSProperties, useEffect, useRef, useState } from "react";

export default function Paragraph({ productInfo }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);

  const ref = useRef<null | HTMLParagraphElement>(null);
  const paragraphStyles: CSSProperties = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreBtn(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, [ref.current]);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: productInfo?.video.body,
        }}
        className="leading-9 text-justify"
        style={isOpen ? undefined : paragraphStyles}
        ref={ref}
      />
      {showReadMoreBtn && (
        <a
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-400 py-1 px-6 bg-transparent mb-4 cursor-pointer"
        >
          {isOpen ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </a>
      )}
    </>
  );
}
