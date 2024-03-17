import { Separator } from "@/components/ui/separator";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <Separator className="my-4" />
        <h3 className=" font-medium leading-none text-lg ">My Skills</h3>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="grid-cols-3 grid">
        <div className="grid-cols-2 grid">
          <div className="col-span-2 text-center font-medium leading-none text-lg">
            Front-end
          </div>
          <div className="col-span-1 justify-self-center my-4">
            <IconBrandHtml5 size={50} strokeWidth={1.5} />
            <IconBrandJavascript size={50} strokeWidth={1.5} />
            <IconBrandNextjs size={50} strokeWidth={1.5} />
          </div>
          {/* <Separator orientation="vertical" /> */}
          <div className="col-span-1 justify-self-center my-4">
            <Button
              className="hover:shadow-[0] cursor-auto"
              size={"sm"}
              variant={"link"}
            >
              <IconBrandCss3 size={50} strokeWidth={1.5} />
            </Button>
            <Button className="hover:shadow-[0]" size={"sm"} variant={"link"}>
              <IconBrandReact size={50} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
        <div className="grid-cols-2 grid">
          <div className="col-span-2 text-center font-medium leading-none text-lg">
            Back-End
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-2 text-center font-medium leading-none text-lg">
            Utils
          </div>
        </div>
      </div>
    </div>
  );
}
