import { Label } from "@/components/ui/Label";

type TextFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  id: string;
  label?: string;
  className?: string;
  type?: "text" | "email" | "password";
};

const formClasses =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm";

export function TextField({
  id,
  label,
  type = "text",
  className,
  ...props
}: TextFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}
