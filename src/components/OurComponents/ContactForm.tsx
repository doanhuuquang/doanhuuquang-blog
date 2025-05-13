"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên ít nhất có 2 ký tự.",
  }),
  email: z.string().min(11, {
    message: "Email không hợp lệ",
  }),
  phone: z.string().min(11, {
    message: "Số điện thoại không hợp lệ",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex lg:flex-row gap-10 flex-col  w-full items-center justify-between bg-gradient-to-r from-blue-800 to-blue-500 shadow-blue-400 rounded-2xl lg:p-5 px-3 py-6">
      <div className="flex flex-col gap-15 justify-between w-full text-white">
        <div className="flex flex-col gap-5">
          {/* Title */}
          <p className="text-3xl font-bold">Yêu cầu báo giá</p>
          {/* Subtitle */}
          <p>
            Liên hệ ngay với Vinh Web để nhận được tư vấn miễn phí, tư vấn giải
            pháp công nghệ cho bạn.
          </p>
        </div>
        {/* Infor */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold">Thông tin</p>
          <div className="flex flex-col gap2">
            {/* Phone number */}
            <p>0336314376</p>
            {/* Email */}
            <p>doanhuuquang.dev@gmail.com</p>
            {/* Address */}
            <p>Cửu Việt, Trâu Quỳ, Gia Lâm, Hà Nội</p>
          </div>
        </div>
        {/* Social link */}
        <div className="flex flex-wrap gap-5">
          <Button className="bg-[#0866FF]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </Button>
          <Button>Tele</Button>
          <Button>Youtube</Button>
        </div>
      </div>
      <div className="w-full lg:p-10 p-5 bg-blue-200 text-black rounded-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
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
                        className="bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="bg-white"
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
                      <FormLabel>Tên</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Số điện thoại"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 lg:w-fit md:w-fit w-full text-white shadow-blue-2000"
            >
              Gửi yêu cầu
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
