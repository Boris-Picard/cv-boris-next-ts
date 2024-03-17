import { Separator } from "@/components/ui/separator";
import { AnimatedTooltipPreview } from "./Tooltip";

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
      <div className="flex flex-wrap justify-center gap-5">
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
}
