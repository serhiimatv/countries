import Controllers from '@/components/controllers/Controllers';
import Image from 'next/image';

const Home = async () => {
  return (
    <>
      <main className="mx-auto max-w-[1312px] px-4">
        <Controllers />
      </main>
    </>
  );
};

export default Home;
