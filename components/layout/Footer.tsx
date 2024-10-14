import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-blue to-blue-400 text-white py-16 mt-36 text-center lg:text-">
      <div className="container mx-auto max-w-7xl w-[95vw] lg:flex lg:flex-row lg:justify-between lg:items-start flex-col items-center justify-between">
        <ul className="lg:flex lg:flex-col lg:gap-4 lg:justify-center hidden">
          <li className="font-bold">دسته بندی ها</li>
          <li>آیفون تصویری</li>
          <li>موضوعات</li>
          <li>دزدگیر</li>
          <li>حضور غیاب</li>
          <li>قفل برقی</li>
          <li>خانه هوشمند</li>
          <li>ریموت و رسیور</li>
        </ul>
        <ul className="lg:flex lg:flex-col lg:gap-4 lg:justify-center hidden">
          <li>آرامبند</li>
          <li>چشمی دیجیتال</li>
          <li>یو پي اس</li>
          <li>ارتباط داخلي و آيفون صوتي</li>
          <li>لوازم خانگي</li>
          <li>سايبان برقي</li>
          <li>جک در پارکينگ</li>
          <li>کرکره برقي</li>
        </ul>
        <div className="flex flex-col justify-center gap-4 items-center">
          <h3>اگر سوالي داريد با ما تماس بگيريد</h3>
          <span>12345678-1234567891234-22</span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <ul className="flex items-center gap-6 mt-4">
            <li>
              <FaLinkedinIn className="text-3xl" />
            </li>
            <li>
              <FaFacebookF className="text-3xl" />
            </li>
            <li>
              <FaTwitter className="text-3xl" />
            </li>
            <li>
              <AiFillYoutube className="text-3xl" />
            </li>
            <li>
              <RiInstagramFill className="text-3xl" />
            </li>
          </ul>
          <div className="flex flex-col justify-center gap-4">
            <span>آدرس ما : تهران نارمک ضلع غربي ميدان 47 پلاک 8</span>
            <span>
              ساعت کاري ما : شنبه تا چهارشنبه 9 الي 18 - پنجشنبه 9 الي 14{" "}
            </span>
            <span>مديريت سايت : مسلم زماني</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
