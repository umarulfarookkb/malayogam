import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <div className='flex h-screen flex-col items-center justify-center gap-10 p-28 debug'>
        <h3 className='text-4xl text-green-500 underline'>Malayogam Landing</h3>
        <Button className='rounded-lg hover:animate-pulse'>Get Started</Button>
      </div>
    </main>
  );
}
