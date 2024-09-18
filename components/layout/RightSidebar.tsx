"use client";
import DataContext from "@/context/data/context";
import { ContextValue } from "@/types/data/contextTypes";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useContext } from "react";
import { RxCaretDown } from "react-icons/rx";
export default function Sidebar() {
  const { data } = useContext<ContextValue>(DataContext);
  return (
    <aside className="hidden xl:block h-auto bg-gray mt-28 w-[20%] rounded-2xl sticky top-1">
      <div className="container mx-auto max-w-lg w-[100%] px-6 py-1 pl-2">
        {data ? (
          data.categories.map((category) => (
            <Accordion
              sx={{
                backgroundColor: "#F5F4F9",
                boxShadow: "none",
                padding: "1rem 0",
              }}
              key={category.id}
            >
              <AccordionSummary
                expandIcon={<RxCaretDown className="text-blue text-3xl" />}
                id="panel-header"
                aria-controls="panel-content"
                sx={{ position: "relative" }}
              >
                <div className="absolute right-0 w-[3px] h-6 rounded-sm bg-blue"></div>
                <strong className="pr-4">{category.name}</strong>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="flex flex-col justify-center pr-4 text-gray-400">
                  <li className="py-2">سیماران</li>
                  <li className="py-2">تابا</li>
                  <li className="py-2">الکترو پيک</li>
                  <li className="py-2">تکنما</li>
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
