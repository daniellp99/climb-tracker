import { memo, useMemo } from "react";

import Icon from "@/components/icon";

import { type CreateClimbRoutine } from "@/features/climb-routines/types";
import { cn, kebabCaseToCapitalized } from "@/lib/utils";

interface Props {
  iconName: string;
  size: "sm" | "md";
}

const IconWithLabel: React.FC<Props> = memo(({ iconName, size }) => {
  const result = useMemo(() => {
    if (iconName === "") return "Select an icon...";

    return (
      <>
        <Icon
          key={iconName}
          name={iconName as CreateClimbRoutine["iconName"]}
          size={size}
          className={cn(
            size === "sm" && "first-of-type-[svg]:size-4",
            size === "md" && "first-of-type-[svg]:size-6",
          )}
        />
        <span className="shrink">{kebabCaseToCapitalized(iconName)}</span>
      </>
    );
  }, [iconName, size]);

  return result;
});
IconWithLabel.displayName = "IconWithLabel";

export default IconWithLabel;
