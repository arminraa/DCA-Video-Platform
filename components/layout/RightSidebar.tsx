"use client";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
export default function Sidebar({ menuItems }: any) {
  return (
    <aside className="hidden xl:block h-auto bg-gray mt-28 w-[20%] rounded-2xl">
      <div className="container mx-auto max-w-lg w-[100%] px-6 py-1 pl-2">
        {menuItems ? (
          menuItems.data.map((item: any) => (
            <Accordion
              key={item.name}
              sx={{
                backgroundColor: "#F5F4F9",
                boxShadow: "none",
                padding: "1rem 0",
              }}
            >
              <AccordionSummary
                expandIcon={
                  JSON.stringify(item.children) !== "[]" ? (
                    <RxCaretDown className="text-blue text-3xl" />
                  ) : null
                }
                id="panel-header"
                aria-controls="panel-content"
                sx={{ position: "relative" }}
              >
                <div className="absolute right-0 w-[3px] h-6 rounded-sm bg-blue"></div>
                <Link href={`/${item.slug}`}>
                  <strong className="pr-4">{item.name}</strong>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="flex gap-4 flex-col justify-center pr-4 text-gray-400">
                  {item.children &&
                    item?.children.map((child: any) => (
                      <li key={child.slug}>
                        <Link href={`/${child.slug}`}>{child.name}</Link>
                      </li>
                    ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <div className="h-[200px] flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </aside>
  );
}
