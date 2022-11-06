import { CgSwiss } from 'react-icons/cg'
import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";

export const Footer = () => {
  return (
    <footer className=" bg-zinc-800">
      <div className='container mx-auto h-auto md:h-[100px] flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between py-4 md:py-0 px-2 text-zinc-200'>
        <div className="flex items-center order-1">
          <CgSwiss className="w-8 h-8 md:w-10 md:h-10 text-red-700 mr-2"/>
          <h1 className="text-xl md:text-3xl font-bold">free hikers</h1>
        </div>
        <div className='text-md order-3 md:order-2'>
          &#169; Free hikers, 2022
        </div>
        <div className="flex gap-2 items-center justify-end order-2 md:order-3">
          <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
            <SlSocialTwitter className="w-5 h-5 md:w-6 md:h-6"/>
          </a>
          <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
            <SlSocialFacebook className="w-5 h-5 md:w-6 md:h-6"/>
          </a>
          <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
            <SlSocialInstagram className="w-5 h-5 md:w-6 md:h-6"/>
          </a>
          <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
            <SlSocialGoogle className="w-5 h-5 md:w-6 md:h-6"/>
          </a>
        </div>
      </div>
    </footer>
  )
}
