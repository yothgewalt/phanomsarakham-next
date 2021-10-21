import Container from "./container_universal";
import * as Datasets from "./resources/datasets";
import { FacebookShareButton, FacebookIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon } from "react-share";
import { CodeIcon, FingerPrintIcon, GlobeIcon } from "@heroicons/react/solid";
import Footerlinks from "./contexts/footerlinks_universal";

const Footer: React.FunctionComponent<{}> = () => {
    const WhyWeLinksElements = Datasets.WhyWeLinks.map((item, index) => {
        return <Footerlinks key={index} label={item.label} href={item.href} />
    });

    const EventsLinksElements = Datasets.EventsLinks.map((item, index) => {
        return <Footerlinks key={index} label={item.label} href={item.href} />
    });

    const ResourcesLinksElements = Datasets.ResourcesLinks.map((item, index) => {
        return <Footerlinks key={index} label={item.label} href={item.href} /> 
    });

    return (
        <footer className="w-full pt-8 h-[812px] xs:h-[542px] lg:h-[428px] bg-black text-white">
            <Container>
                <div className="h-full relative">
                    <div className="absolute inset-x-0 top-0 grid grid-rows-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-start xs:justify-items-center">
                        <div className="mb-4">
                            <span className="font-bold">Why We</span>
                            <ul className="mt-4 flex flex-col items-start justify-center">
                                {WhyWeLinksElements}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold">Events</span>
                            <ul className="mt-4 flex flex-col items-start justify-center">
                                {EventsLinksElements}
                            </ul>
                        </div>
                        <div className="mb-4">
                        <span className="font-bold">Resoucres</span>
                        <ul className="mt-4 flex flex-col items-start justify-center">
                            {ResourcesLinksElements}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <span className="text-xl font-bold">Connect with us <p className="text-[#0099ff]">keep connection</p></span>
                        <div className="mt-8 grid grid-cols-4 gap-2 justify-items-center">
                            <FacebookShareButton url="" quote="" hashtag="">
                                <FacebookIcon size={36} round={true} />
                            </FacebookShareButton>
                            <FacebookMessengerShareButton url="" redirectUri="" appId="">
                                <FacebookMessengerIcon size={36} round={true} />
                            </FacebookMessengerShareButton>
                            <TwitterShareButton url="" title="" via="">
                                <TwitterIcon size={36} round={true} />
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
                    <div className="w-full mb-3 absolute inset-x bottom-0 flex flex-col justify-center items-center lg:justify-between lg:flex-row">
                        <span className="font-medium text-center text-xs sm:text-sm lg:text-base">&copy; Phanomsarakham Technical College, Faculty of Technology. All rights reserved.</span>
                        <div className="mt-1 grid grid-flow-col auto-cols-max gap-4 font-medium text-xs sm:text-sm lg:text-base">
                            <a href="#" target="_blank" className="inline-flex items-center">
                                <CodeIcon className="w-5" />
                                &nbsp;
                                <span>Github</span>
                            </a>
                            <a href="#"  target="_blank" className="inline-flex items-center">
                                <FingerPrintIcon className="w-5" />
                                &nbsp;
                                <span>Creator</span>
                            </a>
                            <a href="#"  target="_blank" className="inline-flex items-center">
                                <GlobeIcon className="w-5" />
                                &nbsp;
                                <span>Host Provider</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>    
        </footer>
    );
};

export default Footer;
