import Image from "next/image";
export default function Skills() {
  const logos = [
    {
      id: 1,
      name: "Html",
      src: "assets/html-1.svg",
      alt: "html logo",
      width: 60,
      height: 60,
    },
    {
      id: 2,
      name: "Css",
      src: "assets/css-3.svg",
      alt: "css logo",
      width: 60,
      height: 60,
    },
    {
      id: 3,
      name: "Javascript",
      src: "assets/logo-javascript.svg",
      alt: "JS logo",
      width: 60,
      height: 60,
    },
    {
      id: 4,
      name: "Typescript",
      src: "assets/typescript.svg",
      alt: "Typescript logo",
      width: 60,
      height: 60,
    },
    {
      id: 5,
      name: "PHP",
      src: "assets/php-1.svg",
      alt: "PHP logo",
      width: 60,
      height: 60,
    },
    {
      id: 6,
      name: "React",
      src: "assets/react-2.svg",
      alt: "React logo",
      width: 60,
      height: 60,
    },
    {
      id: 7,
      name: "Nextjs",
      src: "assets/next-js.svg",
      alt: "Nextjs logo",
      width: 60,
      height: 60,
      class: "dark:invert",
    },
    {
      id: 8,
      name: "MySql",
      src: "assets/mysql-logo.svg",
      alt: "MySql logo",
      width: 60,
      height: 60,
    },
    {
      id: 9,
      name: "MongoDB",
      src: "assets/mongodb-icon-1.svg",
      alt: "MongoDB logo",
      width: 60,
      height: 60,
    },
    {
      id: 10,
      name: "NodeJs",
      src: "assets/nodejs-icon.svg",
      alt: "NodeJs logo",
      width: 60,
      height: 60,
    },
    {
      id: 11,
      name: "Docker",
      src: "assets/docker.svg",
      alt: "Docker logo",
      width: 60,
      height: 60,
    },
    {
      id: 12,
      name: "Git & Github",
      src: "assets/git-icon.svg",
      alt: "Git & Github logo",
      width: 60,
      height: 60,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap lg:md:justify-between gap-5 justify-center">
        {logos.map((logo, index) => {
          return (
            <div key={index}>
              <Image
                className={logo.class}
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                quality={75}
              />
              <span className="font-bold">{logo.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
