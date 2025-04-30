import React, { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// 💡 Gunakan generic <T extends FieldValues>
interface IInputFormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>; // agar name aman sesuai field yang ada
  inputProps?: React.ComponentProps<typeof Input>;
  label?: string | ReactNode;
  description?: string | ReactNode;
  options: { label: string; value: string }[]
  placeholder?:ReactNode
}

const SelectForm = <T extends FieldValues>({
  control,
  name,
  inputProps,
  label,
  description,
  options,
  placeholder
}: IInputFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-0">
          {label && <FormLabel className="mb-1">{label}</FormLabel>}
          <FormControl>
            <Select {...field}>
              <SelectTrigger className="w-full focus-visible:outline focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:shadow-none">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((val) => (
                  <SelectItem key={val.value} value={val.value}>
                    {val.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {description !== "" && (
            <FormDescription className="text-xs">{description}</FormDescription>
          )}
          <FormMessage className="text-xs italic mt-1" />
        </FormItem>
      )}
    />
  );
};

export default SelectForm;
