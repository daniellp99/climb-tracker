"use client";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";

import FormErrors from "@/components/form-errors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SelectIconPopover from "@/features/climb-routines/components/select-icon-popover";

import { createClimbRoutine } from "@/features/climb-routines/actions/create-routine";
import {
  type CreateClimbRoutine,
  type insertClimbRoutineSchema,
} from "@/features/climb-routines/types";
import { cn, type ActionState } from "@/lib/utils";

export default function RoutineForm({
  icons,
}: {
  icons: CreateClimbRoutine["iconName"][];
}) {
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>(
    undefined,
  );
  const [state, createRoutineAction, isPending] = useActionState(
    createClimbRoutine,
    {
      status: "initial",
    } as ActionState<typeof insertClimbRoutineSchema>,
  );
  return (
    <form
      action={createRoutineAction}
      className="flex w-full max-w-md flex-col gap-2 p-2"
    >
      <h2 className="text-center text-lg font-semibold uppercase leading-none tracking-tight">
        New Routine
      </h2>
      <fieldset disabled={isPending} aria-invalid={!!state.errors?.name}>
        <Label
          htmlFor="name"
          className={cn(
            "transition-colors",
            state.errors?.name && "text-destructive",
          )}
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          defaultValue={state.payload?.name}
          className={cn(
            "transition-colors",
            state.errors?.name && "border-destructive",
          )}
        />
        <FormErrors errors={state.errors?.name} fieldName="name" />
      </fieldset>
      <fieldset disabled={isPending} aria-invalid={!!state.errors?.description}>
        <Label
          htmlFor="description"
          className={cn(
            "transition-colors",
            state.errors?.description && "text-destructive",
          )}
        >
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={state.payload?.description}
          className={cn(
            "transition-colors",
            state.errors?.description && "border-destructive",
          )}
        />
        <FormErrors
          errors={state.errors?.description}
          fieldName="description"
        />
      </fieldset>
      <fieldset disabled={isPending} aria-invalid={!!state.errors?.iconName}>
        <input type="hidden" name="iconName" defaultValue={selectedIcon} />
        <Label
          htmlFor="iconName"
          className={cn(
            "transition-colors",
            state.errors?.iconName && "text-destructive",
          )}
        >
          Icon
        </Label>
        <SelectIconPopover
          icons={icons}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
          isInvalid={!!state.errors?.iconName}
        />
        <FormErrors errors={state.errors?.iconName} fieldName="iconName" />
      </fieldset>
      <div className="grid w-full grid-cols-1 gap-2 pt-6 sm:grid-cols-2">
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.back()}
          disabled={isPending}
          className="block group-data-[state=open]:hidden"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="order-first sm:order-last sm:col-start-2"
          disabled={isPending}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
