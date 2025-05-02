"use client";

import { logo } from "@/assets";
import InputForm from "@/components/templates/InputForm";
import SelectForm from "@/components/templates/SelectForm ";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LucideEye,
  LucideLock,
  LucideMail,
  LucideVoicemail,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(6, { message: "Password min 6 character" }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-[400px] p-5 border border-primary h-fit rounded-md shadow-lg bg-[#1A1919]">
        <Image
          width={150}
          height={100}
          src={logo}
          alt="logo"
          className="flex justify-self-center my-5"
        />
        <Form {...form}>
          <div className="flex flex-col gap-2">
            <InputForm
              label="Email"
              control={form.control}
              name="email"
              leftIcon={<LucideMail size={16} className="text-gray-400" />}
              inputClassName="text-white"
            />
            <InputForm
              label="Password"
              control={form.control}
              name="password"
              leftIcon={<LucideLock size={16} className="text-gray-400" />}
              rightIcon={
                <LucideEye size={16} className="text-primary cursor-pointer" />
              }
              inputProps={{ type: "password" }}
              inputClassName="text-white"
            />
          </div>

          <Button
            className="w-full mt-5"
            onClick={() => form.handleSubmit(onSubmit)()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
