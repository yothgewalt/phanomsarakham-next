import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Footerlinks: React.FunctionComponent<{ label: string | undefined, href: string | undefined }> = (props) => {
    return (
        <li className="mb-1 inline-flex items-center transition duration-150 ease-in-out font-ibm-plex-sans-thai text-white hover:text-opacity-80">
            <ChevronRightIcon className="w-4" />
            <Link href={{ pathname: props.href }}>
                <a>{props.label}</a>
            </Link>
        </li>
    );
};

export default Footerlinks;
