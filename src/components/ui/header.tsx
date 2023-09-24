import { Menu } from "lucide-react";
import { Button } from "./button";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetFooter,
} from "./sheet";
import Link from "next/link";

function Header() {
  return (
    <nav className='container flex items-center justify-center rounded-xl bg-white px-4 pb-3 pt-5'>
      <div className='mr-auto'>
        <div>
          <h1 className='inline-flex flex-col  text-lg font-semibold md:text-3xl'>
            MALAYOGAM
            <span className='text-[10px] font-normal leading-3 md:text-[12px]'>
              Serving more than 30 years
            </span>
          </h1>
        </div>
      </div>
      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger className='focus-within:outline-none focus:outline-none'>
            <Menu />
          </SheetTrigger>
          <SheetContent className='flex w-[260px] flex-col justify-between rounded-bl-md rounded-tl-md p-5'>
            <SheetHeader className='mt-4 text-left'>
              <h2 className='inline-flex flex-col text-lg font-semibold md:text-3xl'>
                MALAYOGAM
                <span className='text-[10px] font-normal leading-3 md:text-[12px]'>
                  Serving more than 30 years
                </span>
              </h2>
            </SheetHeader>
            <div className='flex flex-col space-y-3'>
              <Button
                className='w-full rounded-lg px-2 text-xs'
                size='sm'
                variant='outline'
                asChild
              >
                <Link href='/register'>Register</Link>
              </Button>
              <Button
                className='w-full rounded-lg px-2 text-xs'
                size='sm'
                variant='outline'
                asChild
              >
                <Link href='/login'>Login</Link>
              </Button>
            </div>
            <SheetFooter>
              <p className='text-center text-[10px] font-[500] leading-3'>
                Copyright &copy; {new Date().getFullYear()} malayogam.com
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className='hidden items-center gap-3 md:flex'>
        <Button variant='link'>Register</Button>
        <Button className='rounded-lg bg-[#f7f5fd] px-6 py-0 text-sm text-black hover:text-white md:text-xs'>
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Header;
