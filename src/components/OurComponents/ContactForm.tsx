"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

import { Phone, Mail, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronsUpDown } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên ít nhất có 2 ký tự.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại không hợp lệ",
  }),
  budget: z.string().optional(),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ComboBoxBudget({
  field,
}: {
  field: ControllerRenderProps<FormValues, "budget">;
}) {
  const [open, setOpen] = React.useState(false);

  const budgets = [
    { value: "Chưa biết", label: "Chưa biết" },
    { value: "5-10 triệu", label: "5-10 triệu" },
    { value: "10-20 triệu", label: "10-20 triệu" },
    { value: "20-50 triệu", label: "20-50 triệu" },
    { value: "Trên 50 triệu", label: "Trên 50 triệu" },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full p-5 justify-between bg-transparent border border-gray-300 dark:border-gray-300 hover:bg-transparent shadow-none"
        >
          {field.value
            ? budgets.find((budget) => budget.value === field.value)?.label
            : "Chi phí bạn dự định dành cho dự án"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Tìm kiếm..." className="h-9" />
          <CommandList>
            <CommandEmpty>Không tìm thấy</CommandEmpty>
            <CommandGroup>
              {budgets.map((budget) => (
                <CommandItem
                  key={budget.value}
                  value={budget.value}
                  onSelect={(currentValue) => {
                    field.onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {budget.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      field.value === budget.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      description: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className="flex lg:flex-row gap-10 flex-col w-full items-center justify-between bg-gradient-to-br from-blue-800 to-blue-500 shadow-blue-200 dark:shadow-blue-950 shadow-lg rounded-2xl lg:px-5 px-3 py-10">
      <div className="flex flex-col gap-15 justify-between w-full text-white">
        <div className="flex flex-col gap-5">
          {/* Title */}
          <p className="text-4xl font-bold">Yêu cầu báo giá</p>
          {/* Subtitle */}
          <p>
            Liên hệ ngay với chúng tôi để nhận được tư vấn miễn phí, tư vấn giải
            pháp công nghệ cho bạn.
          </p>
        </div>
        {/* Infor */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold">Thông tin</p>
          <div className="flex flex-col gap-2">
            {/* Phone number */}
            <div className="flex gap-2 items-center">
              <span>
                <Phone className="size-4 text-amber-300" />
              </span>
              0336314376
            </div>
            {/* Email */}
            <div className="flex gap-2 items-center">
              <span>
                <Mail className="size-4 text-amber-300" />
              </span>
              doanhuuquang.dev@gmail.com
            </div>
            {/* Address */}
            <div className="flex gap-2 items-center">
              <span>
                <MapPin className="size-4 text-amber-300" />
              </span>
              Cửu Việt, Trâu Quỳ, Gia Lâm, Hà Nội
            </div>
          </div>
        </div>
        {/* Social link */}
        <div className="flex flex-wrap gap-5">
          <Button className="bg-[#0866FF] hover:bg-[#0866FF] w-[40px] h-[40px] rounded-full opacity-70 hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-white"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </Button>
          <Button className="bg-[#7289da] hover:bg-[#7289da] w-[40px] h-[40px] rounded-full opacity-70 hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="fill-white"
            >
              <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
            </svg>
          </Button>
          <Button className="bg-[#FF0033] hover:bg-[#FF0033] w-[40px] h-[40px] rounded-full opacity-70 hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="fill-white"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="w-full lg:p-10 p-5 bg-blue-50 text-black rounded-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Họ tên"
                      {...field}
                      className="border border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex lg:flex-row flex-col gap-8 w-full">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="border border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Số điện thoại"
                          {...field}
                          className="border border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngân sách</FormLabel>
                  <FormControl>
                    <ComboBoxBudget field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Mô tả một chút về dự án của bạn"
                      {...field}
                      className="border border-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-amber-200 hover:bg-amber-300 lg:w-fit py-5 px-10 rounded-lg md:w-fit w-full text-black shadow-none"
            >
              Gửi yêu cầu
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
