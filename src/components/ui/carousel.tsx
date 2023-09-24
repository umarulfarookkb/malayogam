import React, { useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PropType = {
  data: Array<any>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { data, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Add autoplay functionality
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [emblaApi, options]);

  return (
    <div className='embla'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='embla__container w-[40rem] md:w-full'>
          {data.map((item, i) => (
            <div className='embla__slide' key={i}>
              <div className='h-52 rounded-lg bg-[#f7f5fd] p-3 md:w-fit'>
                <div className='flex items-center gap-2'>
                  <Avatar className='h-16 w-16'>
                    <AvatarImage src={item?.avatar} />
                  </Avatar>
                  <h3 className='text-lg capitalize'>{item?.name}</h3>
                </div>
                <p className='line-clamp-4 overflow-hidden px-9'>
                  {item?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
