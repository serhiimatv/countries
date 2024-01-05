import Controllers from '@/components/controllers/Controllers';
import Countries from '@/components/pagination/Countries';
import Image from 'next/image';

const Home = async () => {
  return (
    <>
      <main className="mx-auto max-w-[1312px] px-4">
        <Controllers />
        <Countries />
      </main>
    </>
  );
};

export default Home;
