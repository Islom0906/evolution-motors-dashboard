import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';


const Social = React.lazy(() => import('./Social-media'));
const SocialPostEdit = React.lazy(() => import('./Social-media/SocialPostEdit'));
const About = React.lazy(() => import('./About'));
const AboutPostEdit = React.lazy(() => import('./About/AboutPostEdit'));

const Contact = React.lazy(() => import('./Contact'));
const ContactPostEdit = React.lazy(() => import('./Contact/ContactPostEdit'));
const CreaditLeasing = React.lazy(() => import('./Creadit-Leasing'));
const CreaditLeasingPostEdit = React.lazy(() => import('./Creadit-Leasing/CreaditLeasingPostEdit'));
const Banner = React.lazy(() => import('./Banner'));
const BannerPostEdit = React.lazy(() => import('./Banner/BannerPostEdit'));
const Insurance = React.lazy(() => import('./Insurance'));
const InsurancePostEdit = React.lazy(() => import('./Insurance/InsurancePostEdit'));
// const Map = React.lazy(() => import('./Map'));
// const MapPostEdit = React.lazy(() => import('./Map/MapPostEdit'));
const News = React.lazy(() => import('./News'));
const NewsPostEdit = React.lazy(() => import('./News/NewsPostEdit'));
const Service = React.lazy(() => import('./Service'));
const ServicePostEdit = React.lazy(() => import('./Service/ServicePostEdit'));
const Types = React.lazy(() => import('./Types'));
const TypesPostEdit = React.lazy(() => import('./Types/TypesPostEdit'));
const Countries = React.lazy(() => import('./Countires'));
const CountriesPostEdit = React.lazy(() => import('./Countires/CountriesPostEdit'));
const Brand = React.lazy(() => import('./Brand'));
const BrandPostEdit = React.lazy(() => import('./Brand/BrandPostEdit'));
const Car = React.lazy(() => import('./Car'));
const CarPostEdit = React.lazy(() => import('./Car/CarPostEdit'));
const Region = React.lazy(() => import('./Region'));
const RegionPostEdit = React.lazy(() => import('./Region/RegionPostEdit'));

export const samplePagesConfigs = [

  {
    permittedRole: RoutePermittedRole.user,
    path: '/social',
    element: <Social/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/social/add',
    element: <SocialPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about',
    element: <About/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about/add',
    element: <AboutPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact',
    element: <Contact/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact/add',
    element: <ContactPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/creadit',
    element: <CreaditLeasing/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/creadit/add',
    element: <CreaditLeasingPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner',
    element: <Banner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner/add',
    element: <BannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/insurance',
    element: <Insurance/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/insurance/add',
    element: <InsurancePostEdit/>,
  },
  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/map',
  //   element: <Map/>,
  // },
  // {
  //   permittedRole: RoutePermittedRole.user,
  //   path: '/map/add',
  //   element: <MapPostEdit/>,
  // },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news',
    element: <News/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news/add',
    element: <NewsPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service',
    element: <Service/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service/add',
    element: <ServicePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/types',
    element: <Types/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/types/add',
    element: <TypesPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/countries',
    element: <Countries/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/countries/add',
    element: <CountriesPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/brands',
    element: <Brand/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/brands/add',
    element: <BrandPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/car',
    element: <Car/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/car/add',
    element: <CarPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/region',
    element: <Region/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/region/add',
    element: <RegionPostEdit/>,
  },
];
