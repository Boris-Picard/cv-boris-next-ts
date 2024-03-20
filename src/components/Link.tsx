import Link from "next/link";
import * as Icon from "lucide-react";

export default function IconLink(props) {
  const IconInc = Icon[props.icon];

  return (
    <Link href={props.href} passHref>
      <div className="hover:underline flex flex-row cursor-pointer">
        <IconInc
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "10px",
          }}
        />
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          {props.children}
        </div>
      </div>
    </Link>
  );
}
