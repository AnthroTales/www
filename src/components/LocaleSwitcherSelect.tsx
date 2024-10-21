"use client"; // This marks the component as a client component

import { useRouter, usePathname } from "@/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useParams } from "next/navigation";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        //@ts-expect-error I don't know
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        "relative text-white-300 border-2 rounded-2xl border-green-500 p-1 bg-green-500",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className={"sr-only"}>{label}</p>
      <select
        className={"inline-flex flex-nowrap bg-transparent pl-2 pr-6"}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className={"pointer-events-none absolute right-2"}>{""}</span>
    </label>
  );
}
