import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import EmblaCarousel from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServicesSection />
      <OurPublications />
      <FAQSection />
      <TestimonialsSection />
    </main>
  );
}

// TODO : Make the section title into a  component

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='container mb-6 rounded-md bg-[#f7f5fd] px-9 pb-20 pt-16 md:mt-4'
    >
      <div className='flex flex-col items-center justify-between gap-5 md:flex-row md:gap-8'>
        <div>
          <h3 className='mb-4 max-w-[450px] text-2xl font-bold md:text-3xl lg:text-4xl'>
            Find Your Perfect Match with
            <span className='text-primary'> Malayogam</span>
          </h3>
          <p className='mb-4 max-w-lg text-sm text-black/60 md:text-base'>
            Malayogam is a trusted Hindu matrimony website dedicated to helping
            you find your perfect life partner. Our traditional values and
            modern approach make us the top choice for matchmaking services.
          </p>
          <Button className='mt-8 rounded-full px-7 text-xs md:text-base'>
            Register
          </Button>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/assets/images/hero-image.jpg'
            alt='hero-image'
            role='presentation'
            className='aspect-[1428/952] rounded-lg  sm:max-w-[290px] md:max-w-md lg:max-w-lg'
          />
        </div>
      </div>
    </motion.section>
  );
}

function OurServicesSection() {
  const isSmall = useMediaQuery("(min-width: 768px)");
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='container mb-6  bg-white px-9 pb-20 pt-16'
    >
      <div>
        <h4 className='mb-8 text-xl font-semibold text-black md:text-3xl'>
          Our Services
        </h4>
      </div>
      {isSmall && (
        <div className='grid gap-5 md:grid-cols-3 '>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              image={service.image}
            />
          ))}
        </div>
      )}
      {!isSmall && (
        <div className='grid grid-cols-1  gap-5 sm:grid-cols-2 '>
          {services.map((service) => (
            <div key={service.name}>
              <Card className='w-fit'>
                <CardHeader className='p-5'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* <img
                    src={service.image}
                    alt={service.name}
                    className=' rounded-xl'
                  /> */}
                  <Image
                    src={service.image}
                    alt={service.name}
                    height={412}
                    width={412}
                    className='rounded-lg bg-contain '
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className='text-center text-xl font-semibold'>
                    {service.name}
                  </CardTitle>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}

function OurPublications() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='mb-6 rounded-md bg-[#f7f5fd] '
    >
      <div className='container px-9 pb-20 pt-16'>
        <div>
          <h4 className='mb-8 text-xl font-semibold text-black md:text-3xl'>
            Our Publications
          </h4>
        </div>
        <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </div>
      </div>
    </motion.section>
  );
}

function PublicationCard() {
  return (
    <Card className='w-fit'>
      <CardHeader className='p-2'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          src='/assets/images/publications.png'
          alt='publication'
          className=''
        /> */}
        <Image
          src='/assets/images/publications.png'
          alt='publication'
          height={412}
          width={412}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className='text-center text-xl font-semibold'>
          MALAYOGAM
        </CardTitle>
      </CardContent>
      <CardFooter className='flex items-center justify-center'>
        <Button className='w-full rounded-full bg-primary text-xs' size='sm'>
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
}

interface ServiceCardProps {
  image: string;
  name: string;
}

// TODO : Reduce the padding of the card and find ideal img size

function ServiceCard(props: ServiceCardProps) {
  return (
    <Card className='group relative w-fit rounded-md'>
      <Image
        src={props.image}
        alt={props.name}
        height={412}
        width={412}
        className='rounded-md bg-contain '
      />
      <div className='absolute inset-0 flex h-full w-full items-center justify-center rounded-md bg-black/50 text-lg  font-semibold text-white opacity-0 duration-300 group-hover:opacity-100 md:text-xl'>
        {props.name}
      </div>
    </Card>
  );
}

const services = [
  {
    image: "/assets/images/match-making-service.webp",
    name: "Matchmaking Service",
  },
  {
    image: "/assets/images/horoscope.webp",
    name: "Horoscope Matching",
  },
  {
    image: "/assets/images/partner-search.webp",
    name: "Partner Searching",
  },
];

function FAQSection() {
  return (
    <section className='container mb-6 px-9 pb-20 pt-16'>
      <h4 className='text-xl font-semibold text-black md:text-3xl'>
        Frequently Asked Questions
      </h4>
      <div className='my-10 grid grid-cols-1 place-items-center gap-5 md:grid-cols-2'>
        <div className='w-full'>
          <Accordion type='single' collapsible className='w-full max-w-lg'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                What about your privacy policy
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, rerum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                How does horoscope matching work?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, distinctio?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='w-full'>
          <Accordion type='single' collapsible className='w-full max-w-lg'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                Are profiles screened before they are listed?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis, et!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                Do you offer assistance for wedding planning?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                quis?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const TestimonialsSection = () => {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    containScroll: "trimSnaps",
  };
  return (
    <section className='container px-1'>
      <div className='container px-9 pb-10'>
        {/* <div> */}
        <h4 className='mb-8 text-xl font-semibold text-black md:text-3xl'>
          Testimonials
        </h4>
        <EmblaCarousel data={data} options={OPTIONS} />
        {/* </div> */}
      </div>
    </section>
  );
};
const data = [
  {
    id: "1",
    name: "person1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
  {
    id: "2",
    name: "person2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
  {
    id: "3",
    name: "person3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
  {
    id: "4",
    name: "person4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
  {
    id: "5",
    name: "person5",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
  {
    id: "6",
    name: "person6",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Trouble",
  },
];
