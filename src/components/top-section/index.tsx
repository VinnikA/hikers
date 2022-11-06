import { Header } from "../header"
import { Quote } from "../quote"

export const TopSection = () => {
  return (
    <div className="bg-[url('./assets/top.jpg')] bg-cover bg-center w-full h-screen flex flex-col" >
      <Header />
      <Quote />
    </div>
  )
}
