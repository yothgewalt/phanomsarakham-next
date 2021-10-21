import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Footerlinks: React.FunctionComponent<{ label: string | undefined, href: string | undefined }> = (props) => {
    return (
        <li className={classNames(
            "mb-1 inline-flex items-center transition duration-150 ease-in-out font-ibm-plex-sans-thai text-white hover:text-opacity-80",
            "text-sm md:text-base"
        )}>
            <ChevronRightIcon className="w-4" />
            <Link href={{ pathname: props.href }}>
                <a>{props.label}</a>
            </Link>
        </li>
    );
};

export default Footerlinks;
