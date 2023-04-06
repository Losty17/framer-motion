import { Picture } from "./components";

const imgs = [
  {
    width: 640,
    height: 640,
  },
  {
    width: 480,
    height: 380,
  },
  {
    width: 268,
    height: 640,
  },
  {
    width: 140,
    height: 180,
  },
  {
    width: 280,
    height: 360,
  },
];

export default () => {
  return (
    <div className="dark">
      <div className="flex h-screen w-screen flex-col bg-creamy-white text-center dark:bg-gray-800">
        <span className="my-6 text-4xl font-bold tracking-wide text-black dark:text-creamy-white">
          Lorem Ipsum
        </span>
        <div className="flex gap-4 px-6">
          {imgs.map(({ height, width }, i) => (
            <Picture
              key={i}
              height={`${height}px`}
              width={`${width}px`}
              src={`/images/cover${i + 1}.png`}
              className="bg-gray-800 dark:bg-creamy-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
