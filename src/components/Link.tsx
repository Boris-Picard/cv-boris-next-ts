import Link from "next/link";
import * as Icon from "lucide-react";

export default function IconLink(props) {
  const IconInc = Icon[props.icon];

  return (
    <Link href={props.href} passHref>
      <div className="hover:underline flex flex-row cursor-pointer">
        <IconInc className="mr-2" />
        <div className="z-50">{props.children}</div>
      </div>
    </Link>
  );
}
