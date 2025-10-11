// Before I started the "Server Components" section of the course, this file had
// "use client"; at the top. However, after completing that section, I realized
// that this component does not need to be a client component, as it does not
// use any client-side hooks or state. Therefore, I have commented it out.
// If you find that you need to use client-side features in this component in
// the future, you can simply uncomment this line.
// "use client";

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
