import Link from "next/link";
import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";

const NavlinksResponsived: React.FunctionComponent<{ href: string, label: string, hasDropdown?: boolean }> = (props) => {
    return (
        <Fragment>
            <Menu.Item>
                {({ active }) => (
                    <div className="w-full py-3 border-b text-gray-500 outline-none">
                        <Link href={props.href}>
                            <a className={`${active && "transition duration-150 ease-in-out text-black"}`}>
                                {props.label}
                            </a>
                        </Link>
                    </div>
                )}
            </Menu.Item>
        </Fragment>
    );
};

export default NavlinksResponsived;
