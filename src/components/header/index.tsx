import { CgSwiss } from 'react-icons/cg'
import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";


export const Header = () => {
  return (
    <header className="container mx-auto px-2 h-12 md:h-20 flex justify-between items-center">
      <div className="flex items-center">
        <CgSwiss className="w-8 h-8 md:w-10 md:h-10 text-red-700 mr-2"/>
        <h1 className="text-zinc-800 text-xl md:text-3xl font-bold">free hikers</h1>
      </div>
      <div className="flex gap-2 items-center justify-end text-zinc-800">
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
    </header>
  )
}
