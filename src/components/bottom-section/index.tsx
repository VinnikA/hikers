import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";

export const BottomSection = () => {
  return (
    <section className="container mb-4 md:mb-8 md:pb-0 px-3 md:px-2 mx-auto w-full">

      <h2 className="text-3xl md:text-4xl text-center mb-2 ">
        Join us
      </h2>
      
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-10">

        <div className="w-full md:w-1/2 h-auto py-1 md:py-4">
          <h2 className="text-xl md:text-2xl mb-2">
            - via social media
            </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam in commodi quo quam velit consequatur quaerat rerum facilis minima, autem magni tenetur corporis harum maiores suscipit minus, maxime quidem, repudiandae est cumque eius ipsam.
          </p>
          <div className="flex gap-2 md:gap-8 py-2 md:py-4 items-center justify-center md:justify-start text-zinc-800">
            <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
              <SlSocialTwitter className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
              <SlSocialFacebook className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
              <SlSocialInstagram className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
            <a href="#" className='hover:bg-zinc-200 hover:bg-opacity-20 p-2'>
              <SlSocialGoogle className="w-8 h-8 md:w-10 md:h-10"/>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto py-1 md:py-4">
          <form action="#" className="flex flex-col gap-2 md:gap-6">
            <h2 className="text-xl md:text-2xl mb-2">- via message</h2>
            <label className="flex flex-col md:flex-row md:px-0 gap-2 md:gap-4 text-lg">
              Name:
              <input type="text" className="border-b border-zinc-800 flex-grow focus:outline-4 outline-zinc-400 outline-offset-4" />
            </label>
            <label className="flex flex-col md:flex-row md:px-0 gap-2 md:gap-4 text-lg">
              Email:
              <input type="email" className="border-b border-zinc-800 flex-grow focus:outline-4 outline-zinc-400 outline-offset-4" />
            </label>
            <label className="flex flex-col md:flex-row md:px-0 gap-2 md:gap-4 text-lg">
              Phone:
              <input type="phone" className="border-b border-zinc-800 flex-grow focus:outline-4 outline-zinc-400 outline-offset-4" />
            </label>
            <label className="flex flex-col md:flex-row md:px-0 gap-2 md:gap-4 text-lg">
              Message:
              <textarea className="border-b border-zinc-800 flex-grow focus:outline-4 outline-zinc-400 outline-offset-4" />
            </label>
            <button className="border border-zinc-800 text-lg p-2 hover:bg-zinc-200">Submit</button>
          </form>
        </div>

      </div>

  </section>
  )
}
