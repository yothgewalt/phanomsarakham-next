import Link from "next/link";
import * as Datasets from "./../resources/datasets";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid"

const Navlinks: React.FunctionComponent<{ href: string, label: string, hasDropdown?: boolean }> = (props) => {
    return (
        <Fragment>
            {!props.hasDropdown ? (
                <Link href={props.href}>
                    <a className="mx-3 outline-none transition duration-150 ease-in-out font-medium text-base text-gray-500 hover:text-black">
                        {props.label}
                    </a>
                </Link>
            ) : (
                <Popover className="relative outline-none">
                    {({ open }) => (
                        <>
                            <Popover.Button className={`${open ? "mx-3 outline-none inline-flex items-center transition duration-150 ease-in-out font-medium text-base text-gray-500 hover:text-black" : "mx-3 outline-none inline-flex items-center transition duration-150 ease-in-out font-medium text-base text-gray-500 hover:text-black"}`}>
                                <span>{props.label}</span>
                                <ChevronDownIcon className="w-4" aria-hidden="true" />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-5 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                            {Datasets.PopoverLinks.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={{ pathname: item.href }}
                                                >
                                                    <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg">
                                                            <item.icon className="w-7 text-white" aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="font-ibm-plex-sans-thai text-sm font-medium text-gray-900">
                                                                {item.label}
                                                            </p>
                                                            <p className="font-ibm-plex-sans-thai text-sm text-gray-500">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-gray-50">
                                            <a
                                                href="##"
                                                className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                <span className="flex items-center">
                                                    <span className="font-ibm-plex-sans-thai text-sm font-medium text-gray-900">
                                                        รวมหมวดหมู่รูปภาพ
                                                    </span>
                                                </span>
                                                <span className="block font-ibm-plex-sans-thai text-sm text-gray-500">
                                                    รวบรวมหมวดหมู่รูปภาพทั้งสามหมวดไว้ในหน้าเดียว
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            )}
        </Fragment>
    );
};

export default Navlinks;
