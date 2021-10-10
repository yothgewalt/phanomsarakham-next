import { CollectionIcon, FingerPrintIcon, FlagIcon } from "@heroicons/react/outline";

export const Navlinks: { label: string, href: string, hasDropdown: boolean }[] = [
    { label: "Why We", href: "/", hasDropdown: false },
    { label: "Events", href: "/", hasDropdown: true },
    { label: "Rewards", href: "/", hasDropdown: false },
    { label: "Resources", href: "/", hasDropdown: false },
    { label: "Developers", href: "/", hasDropdown: false }
];

export const WhyWeLinks: { label: string, href: string }[] = [
    { label: "ทําไมสาขาอาชีพเราถึงสําคัญ", href: "/" },
    { label: "ทําไมการเรียนสิ่งนี้สําคัญ", href: "/" },
    { label: "ทําไมพวกเราถึงต้องเรียน", href: "/" },
    { label: "ทําไมสิ่งนี้ถึงนิยม", href: "/" }
];

export const EventsLinks: { label: string, href: string }[] = [
    { label: "กิจกรรมของวิทยาลัย", href: "/" },
    { label: "กิจกรรมของสาขาวิชา", href: "/" },
    { label: "การแข่งขันของสาขาวิชา", href: "/" }
]

let LabelForPopover: string[] = [];
EventsLinks.map((item) => (LabelForPopover.push(item.label)));

export const PopoverLinks: { label: string, icon: any, href: string, description: string }[] = [
    {
        label: LabelForPopover[0],
        icon: CollectionIcon,
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        label: LabelForPopover[1],
        icon: FingerPrintIcon,
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        label: LabelForPopover[2],
        icon: FlagIcon,
        href: "/",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

export const ResourcesLinks: { label: string, href: string }[] = [
    { label: "วงจรอิเล็กทรอนิกส์เบื้องต้น", href: "/" },
    { label: "การเขียนโปรแกรมเบื้องต้น", href: "/" },
    { label: "ระบบเครือข่ายเบื้องต้น", href: "/" },
    { label: "การออกแบบเบื้องต้น", href: "/" },
];
