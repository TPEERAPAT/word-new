import Image from 'next/image';

export default function province(props: any) {
  const { name, src } = props;
  return (
    <button className="flex h-10 w-full cursor-pointer items-center justify-between rounded-lg border-[1px] border-solid border-greyLightOcare bg-white px-4 font-sans text-black transition hover:border-blueOcare">
      {name}
      <Image src={src} alt="" />
    </button>
  );
}
