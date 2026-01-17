import { Carousel } from "./carousel"
import { Headline } from "./headline"

export const Review = () => {
  return (
    <div className="bg-white text-black h-screen">
        <div className="py-8 container mx-auto ">
            <Headline />
            <Carousel />
        </div>
    </div>
  )
}
