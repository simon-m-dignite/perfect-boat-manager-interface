import { GrHomeRounded } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { TbSailboat } from "react-icons/tb";
import { IoIosGitPullRequest } from "react-icons/io";
import { LuUserMinus } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";

export const sidebarArr = [
  {
    title: "Home",
    url: "/home",
    icon: <GoHome />,
  },
  {
    title: "All Tasks",
    url: "/tasks",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    title: "Assign Tasks",
    url: "/add-task",
    icon: <HiOutlineDocumentPlus />,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: <FiUsers />,
  },
  {
    title: "Boat",
    url: "/boats",
    icon: <TbSailboat />,
  },
  {
    title: "New Task Request",
    url: "/new-tasks-request",
    icon: <IoIosGitPullRequest />,
  },
  {
    title: "Inactive Users",
    url: "/inactive-employees",
    icon: <LuUserMinus />,
  },
  {
    title: "Tides, Tales & Guides",
    url: "/blogs",
    icon: <TiDocumentText />,
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
    icon: <MdOutlinePrivacyTip />,
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
    icon: <IoIosCheckmarkCircleOutline />,
  },
];
