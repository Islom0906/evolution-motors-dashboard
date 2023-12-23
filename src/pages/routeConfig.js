import {IoDocumentLock, IoShareSocialSharp} from "react-icons/io5";
import {FaCar, FaCity, FaImages} from "react-icons/fa";
import {IoMdInformationCircle} from "react-icons/io";
import {TiContacts, TiWorld} from "react-icons/ti";
import {BsReverseLayoutTextSidebarReverse} from "react-icons/bs";
import {BiNews} from "react-icons/bi";
import {PiCarSimpleBold} from "react-icons/pi";
import {RiCreativeCommonsNcFill} from "react-icons/ri";
import {MdOutlineMiscellaneousServices} from "react-icons/md";


const routesConfig = [
    {
        id: 'app',
        title: 'Sample',
        messageId: 'sidebar.sample',
        type: 'group',
        children: [
            {
                id: 'car',
                title: 'car',
                messageId: 'sidebar.car',
                icon: <FaCar/>,
                type: 'collapse',
                children: [
                    {
                        id: 'car-new',
                        title: 'car-new',
                        messageId: 'sidebar.sample.car',
                        icon: <FaCar/>,
                        path: '/car',
                    },
                    {
                        id: 'types',
                        title: 'types',
                        icon: <PiCarSimpleBold />,
                        messageId: 'sidebar.sample.types',
                        path: '/types',
                    },
                    {
                        id: 'countries',
                        title: 'countries',
                        icon:<TiWorld />,
                        messageId: 'sidebar.sample.countries',
                        path: '/countries',
                    },
                    {
                        id: 'brands',
                        title: 'brands',
                        icon: <FaCar/>,
                        messageId: 'sidebar.sample.brands',
                        path: '/brands',
                    },
                ]
            },
            {
                id: 'page',
                title: 'page',
                messageId: 'sidebar.page',
                icon: <BsReverseLayoutTextSidebarReverse/>,
                type: 'collapse',
                children: [
                    {
                        id: 'creadit',
                        title: 'creadit',
                        messageId: 'sidebar.sample.creadit',
                        path: '/creadit',
                        icon: <RiCreativeCommonsNcFill />
                    },
                    {
                        id: 'insurance',
                        title: 'insurance',
                        messageId: 'sidebar.sample.insurance',
                        path: '/insurance',
                        icon:<IoDocumentLock />
                    },
                    {
                        id: 'service',
                        title: 'service',
                        messageId: 'sidebar.sample.service',
                        path: '/service',
                        icon:<MdOutlineMiscellaneousServices/>
                    },

                ]
            },
            {
                id: 'region',
                title: 'region',
                messageId: 'sidebar.sample.region',
                type: 'item',
                icon: <FaCity/>,
                path: '/region',
            },
            {
                id: 'social',
                title: 'social',
                messageId: 'sidebar.sample.social',
                type: 'item',
                icon: <IoShareSocialSharp/>,
                path: '/social',
            },
            {
                id: 'about',
                title: 'about',
                messageId: 'sidebar.sample.about',
                type: 'item',
                icon: <IoMdInformationCircle/>,
                path: '/about',
            },
            {
                id: 'contact',
                title: 'contact',
                messageId: 'sidebar.sample.contact',
                type: 'item',
                icon: <TiContacts/>,
                path: '/contact',
            },

            {
                id: 'banner',
                title: 'banner',
                messageId: 'sidebar.sample.banner',
                type: 'item',
                icon: <FaImages />,
                path: '/banner',
            },
            // {
            //     id: 'map',
            //     title: 'map',
            //     messageId: 'sidebar.sample.map',
            //     type: 'item',
            //     icon: <FaMapMarkedAlt />,
            //     path: '/map',
            // },
            {
                id: 'news',
                title: 'news',
                messageId: 'sidebar.sample.news',
                type: 'item',
                icon: <BiNews />,
                path: '/news',
            },



        ],
    },
];
export default routesConfig;
