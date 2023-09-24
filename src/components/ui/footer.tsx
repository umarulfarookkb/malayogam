import Link from "next/link";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Navigation,
} from "lucide-react";
import type { PropsWithChildren } from "react";

/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <footer className='bg-[#f7f5fd] text-black'>
      <div className='container h-full p-7 md:p-20 lg:p-24'>
        <div className='grid w-full grid-cols-2 gap-10 pb-10 md:grid-cols-3 md:pb-12 lg:grid-cols-4 lg:pb-16'>
          <div>
            <h3 className='text-lg font-semibold md:text-2xl lg:text-3xl'>
              MALAYOGAM
              <span className='block text-[10px] font-normal leading-4 lg:text-[12px]'>
                Serving more than 30 years
              </span>
            </h3>
            <div className='mt-2 flex items-center gap-2'>
              <img
                src='/assets/images/app-store.svg'
                alt='Available in play store'
                className='aspect-[800/800] max-w-[20px] md:max-w-[35px]'
              />
              <img
                src='/assets/images/google-playstore.svg'
                alt='Available in play store'
                className='aspect-[800/800] max-w-[20px] md:max-w-[35px]'
              />
            </div>
          </div>
          <FooterLinkSection name='General Links'>
            <FooterLink name='Register' redirectTo='/register' />
            <FooterLink name='About Us' redirectTo='/about' />
            <FooterLink name='Contact Us' redirectTo='/contact' />
          </FooterLinkSection>
          <FooterLinkSection name='Legal'>
            <FooterLink name='Privacy Policy' redirectTo='/privacy' />
            <FooterLink
              name='Terms and Conditions'
              redirectTo='/terms-and-conditions'
            />
            <FooterLink name='Refund Policy' redirectTo='/' />
          </FooterLinkSection>
          <FooterLinkSection name='Follow Us'>
            <div className='flex items-center gap-2'>
              <Phone className='h-3 w-3 md:h-4 md:w-4' />
              <p className='text-[0.7rem] font-normal text-black/70 md:text-sm'>
                +91 12345677865
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Mail className='h-3 w-3 md:h-4 md:w-4' />
              <p className='text-[0.7rem] font-normal text-black/70 md:text-sm'>
                admin@gmail.com
              </p>
            </div>
            <div className='flex  items-center gap-2'>
              <Navigation className='h-3 w-3 md:h-4 md:w-4' />
              <p className='max-w-[180px] text-[0.7rem] font-normal text-black/70 md:text-sm'>
                Lorem ipsum dolor sit.
              </p>
            </div>
          </FooterLinkSection>
        </div>
        <div className='mt-4 flex w-full flex-col-reverse items-center justify-center gap-4 text-black md:flex-row md:items-center md:justify-between'>
          <p className='text-xs font-[500]  md:text-sm'>
            Copyright &copy; {new Date().getFullYear()} malayogam.com
          </p>
          <div className='flex gap-2'>
            <Facebook className='h-4 w-4 md:h-5 md:w-5' />
            <Instagram className='h-4 w-4 md:h-5 md:w-5' />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinksHeader(props: { name: string }) {
  return (
    <h3 className='mb-4 text-sm font-semibold text-black md:text-lg'>
      {props.name}
    </h3>
  );
}

interface FooterLinksSectionProps extends PropsWithChildren {
  name: string;
}

function FooterLinkSection(props: FooterLinksSectionProps) {
  return (
    <div>
      <FooterLinksHeader name={props.name} />
      <ul className='flex flex-col space-y-3'>{props.children}</ul>
    </div>
  );
}

function FooterLink(props: { name: string; redirectTo: string }) {
  return (
    <li>
      <Link
        href={props.redirectTo}
        className='text-xs font-normal text-black/70 sm:text-sm '
      >
        {props.name}
      </Link>
    </li>
  );
}
export default Footer;
