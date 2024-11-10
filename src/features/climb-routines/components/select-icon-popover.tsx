import { useVirtualizer } from "@tanstack/react-virtual";
import { ChevronsUpDownIcon } from "lucide-react";
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconWithLabel from "@/components/icon-with-label";

import { type CreateClimbRoutine } from "@/features/climb-routines/types";
import { cn } from "@/lib/utils";

export default function SelectIconPopover({
  icons,
  isInvalid,
  selectedIcon,
  setSelectedIcon,
}: {
  icons: CreateClimbRoutine["iconName"][];
  isInvalid: boolean;
  selectedIcon: string | undefined;
  setSelectedIcon: Dispatch<SetStateAction<string | undefined>>;
}) {
  const [open, setOpen] = useState(false);
  const [filteredIcons, setFilteredIcons] = useState(icons);
  const [parentNode, setParentNode] = useState<HTMLDivElement | null>(null);
  const refCallback = useCallback((node: HTMLDivElement) => {
    if (node) {
      setParentNode(node);
    }
  }, []);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        setFilteredIcons(icons);
      }
      setOpen(open);
    },
    [icons],
  );

  const count = filteredIcons.length;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentNode,
    estimateSize: () => 35,
    overscan: 10,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          id="iconName"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between transition-colors",
            isInvalid && "border-destructive text-destructive",
          )}
        >
          {selectedIcon === "" ? (
            "Select an icon..."
          ) : (
            <IconWithLabel iconName={selectedIcon ?? ""} size="md" />
          )}
          <ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="top">
        <Command shouldFilter={false}>
          <CommandInput
            onValueChange={(search) =>
              setFilteredIcons(
                icons.filter((icon) =>
                  icon.replaceAll("-", " ").includes(search.toLowerCase()),
                ),
              )
            }
          />
          <CommandList ref={refCallback} className="max-w-md">
            <CommandEmpty>No icon found.</CommandEmpty>
            <CommandGroup
              className="relative w-full"
              style={{
                height: virtualizer.getTotalSize(),
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualItems[0]?.start}px)`,
                }}
              >
                {virtualItems.map((virtualRow) => {
                  const iconName = filteredIcons[virtualRow.index];

                  if (!iconName) return null;

                  return (
                    <CommandItem
                      key={virtualRow.index}
                      data-index={virtualRow.index}
                      ref={virtualizer.measureElement}
                      value={iconName}
                      onSelect={(currentValue) => {
                        setOpen(false);
                        setSelectedIcon(
                          currentValue === selectedIcon ? "" : currentValue,
                        );
                        setFilteredIcons(icons);
                      }}
                      className={
                        selectedIcon === iconName
                          ? "bg-primary text-primary-foreground data-[selected=true]:bg-primary/90 data-[selected=true]:text-primary-foreground"
                          : ""
                      }
                    >
                      <IconWithLabel iconName={iconName} size="sm" />
                    </CommandItem>
                  );
                })}
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
