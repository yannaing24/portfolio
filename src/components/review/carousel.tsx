import { useState, useEffect, useEffectEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { data } from "./data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Carousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const update = useEffectEvent((api: CarouselApi) => {
    if (api === undefined) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  });

  useEffect(() => {
    if (!api) {
      return;
    }
    update(api);
  }, [api]);

  const handlePrevious = () => {
    if (api === undefined) return;
    api.scrollPrev();
  };

  const handleNext = () => {
    if (api === undefined) return;
    api.scrollNext();
  };

  return (
    <div className="py-16">
      <SCarousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img src={data[index].img} className="object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </SCarousel>
      <div className="py-8 flex justify-between items-start">
        <div>
          <h3 className="text-[28px] mb-2">{data[current - 1]?.content}</h3>
          <p className="text-[20px]">{data[current - 1]?.name}</p>
        </div>
        <div className="flex gap-2">
          <div
            className="p-4 bg-yellow-300 rounded-xl"
            onClick={handlePrevious}
          >
            <ArrowLeft size={24} />
          </div>
          <div className="p-4 bg-yellow-300 rounded-xl" onClick={handleNext}>
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
