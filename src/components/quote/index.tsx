import './styles.css'

export const Quote = () => {
  return (
    <div className='container mx-auto h-full flex justify-center items-center'>
      <div className='w-4/5 md:w-[736px] p-2 md:p-4 mx-auto my- bg-white bg-opacity-70'>
        <div className="border-4 border-zinc-600 h-full p-2 md:p-4 flex flex-col justify-center items-center">
          <p className="text-4xl md:text-6xl text-center text-zinc-800 mb-4 md:mb-8 handwriting">
          "A journey of a thousand miles begins with a single step"
          </p>
          <p className="text-3xl md:text-5xl text-zinc-800 handwriting text-right">
            Laozi
          </p>
        </div>
      </div>
    </div>
  )
}
