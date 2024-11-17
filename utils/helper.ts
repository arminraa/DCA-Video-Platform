import * as shamsi from "shamsi-date-converter";
import * as persianTools from "@persian-tools/persian-tools";

function convertEnToFaDate(date: string) {
  return persianTools
    .digitsEnToFa(
      shamsi
        .gregorianToJalali(
          Number(date.split(" ")[0].split("-")[0]),
          Number(`0${date.split(" ")[0].split("-")[1]}`) as any,
          Number(`0${date.split(" ")[0].split("-")[2]}`) as any
        )
        .toString()
    )
    .replace(",", "/")
    .replace(",", "/");
}
function convertEnToFaTime(time: string) {
  return persianTools.digitsEnToFa(time.split(" ")[1]);
}

export { convertEnToFaDate, convertEnToFaTime };
