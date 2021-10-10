import Link from "next/link";
import Navlinks from "./contexts/navlinks_universal";
import Container from "./container_universal";
import NavlinksResponsived from "./contexts/navlinks_responsived_universal";
import * as Datasets from "./resources/datasets";
import { Menu } from "@headlessui/react";
import { LightningBoltIcon, MenuIcon, GlobeIcon } from "@heroicons/react/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Header: React.FunctionComponent<{ publisher: string }> = (props) => {
    const navlinksElements = Datasets.Navlinks.map((item, index) => {
        return <Navlinks key={index} href={item.href} label={item.label} hasDropdown={item.hasDropdown} />
    });

    const navlinksResponsivedElements = Datasets.Navlinks.map((item, index) => {
        return <NavlinksResponsived key={index} href={item.href} label={item.label} />
    });

    return (
        <header className="w-full mb-10 h-16 border-b bg-transparent">
            <Container>
                <div className="h-full hidden flex-row flex-nowrap justify-between items-center outline-none lg:flex">
                    <Link href={{ pathname: "/"}}>
                        <a className="inline-flex items-center font-bold text-lg text-black">
                            <span>{props.publisher}</span>
                            <LightningBoltIcon className="w-6 text-yellow-300" aria-hidden="true" />
                        </a>
                    </Link>
                    <nav className="flex flex-row flex-nowrap justify-center items-center">
                        {navlinksElements}
                    </nav>
                    <div className="flex flex-row flex-nowrap justify-between items-center">
                        <a href="/" className="mr-3 text-gray-500 hover:text-black">Github?</a>
                        <a href="https://www.facebook.com/PhanomsarakhamIT/" className={classNames(
                            "inline-flex items-center py-1 px-4 rounded-xl font-medium outline-none",
                            "transition duration-150 ease-in-out text-white bg-[#0099ff] hover:bg-opacity-60"
                        )} role="button">
                            <GlobeIcon className="w-4" aria-hidden="true" />&nbsp;
                            <span>Visit</span>
                        </a>
                    </div>
                </div>
                <div className="h-full flex flex-row flex-nowrap justify-between items-center lg:hidden">
                    <Menu>
                        <Menu.Button className={classNames(
                            "rounded-full h-6 sm:h-8 w-6 sm:w-8 flex items-center justify-center",
                            "transition duration-150 ease-in-out",
                            "outline-none bg-gray-200"
                        )} aria-label="Menu">
                            <MenuIcon className="w-4 sm:w-5 text-gray-900" aria-hidden="true" />
                        </Menu.Button>
                        <Menu.Items className="block w-full h-screen fixed top-16 left-0 border-t outline-none bg-gray-50">
                            <Container>
                                <div className="w-full h-full flex flex-col justify-start items-center font-medium text-sm">
                                    {navlinksResponsivedElements}
                                    <Menu.Item>
                                        <a
                                            className={classNames(
                                                "w-full mt-4 py-2 inline-flex justify-center items-center rounded-xl",
                                                "font-medium outline-none transition duration-150 ease-in-out",
                                                "text-white bg-[#0099ff] hover:bg-opacity-60"
                                            )}
                                            href="#"
                                        >
                                            <GlobeIcon className="w-4" aria-hidden="true" />&nbsp;
                                            <span>Visit to faculty fanpage</span>
                                        </a>
                                    </Menu.Item>
                                </div>
                            </Container>
                        </Menu.Items>
                    </Menu>
                    <Link href={{ pathname: "/"}}>
                        <a className="inline-flex items-center font-bold text-lg text-black">
                            <span className="text-sm sm:text-base">{props.publisher}</span>
                            <LightningBoltIcon className="w-4 sm:w-5 text-yellow-300" aria-hidden="true" />
                        </a>
                    </Link>
                    <div className="flex flex-row flex-nowrap justify-between items-center">
                        <a href="https://www.facebook.com/PhanomsarakhamIT/" className={classNames(
                            "py-0.5 px-2.5 inline-flex items-center rounded-xl font-medium",
                            "transition duration-150 ease-in-out text-white bg-[#0099ff] hover:bg-opacity-60"
                        )} role="button">
                            <GlobeIcon className="w-3 sm:w-4" aria-hidden="true" />&nbsp;
                            <span className="text-xs sm:text-base">Visit</span>
                        </a>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;