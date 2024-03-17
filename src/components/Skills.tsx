import Image from "next/image";
export default function Skills() {
  const logos = [
    {
      src: "assets/html-1.svg",
      alt: "html",
      width: 75,
      height: 75,
    },
  ];
  return (
    <>
      {logos.map((logo, index) => {
        return (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        );
      })}
    </>
  );
}
