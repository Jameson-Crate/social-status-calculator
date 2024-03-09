"use client";

import { useRouter } from "next/navigation";
import legoat from "../assets/legoat.gif";
import wah from "../assets/wah_wah.jpeg";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { push } = useRouter();

  const form = useForm();
  var [status, setStatus] = useState("");
  var [statusImage, setStatusImage] = useState(0);
  const options = ["", legoat, wah];

  return (
    <div className="container justify-center text-center">
      <div className="container pt-5 pb-5 flex justify-center text-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              if (data.name.toLowerCase().includes("jameson")) {
                setStatus("QUIT PLAYIN W/ ME");
                setStatusImage(1);
                push("https://sketchywebsite.net/");
              } else if (
                data.boolage < 10000000 ||
                (data.name.toLowerCase().includes("rohan") &&
                  data.name.toLowerCase().includes("p"))
              ) {
                setStatus(`${data.name} you are broke 😢`);
                setStatusImage(2);
              } else {
                setStatus(`${data.name} you are rich 🤑`);
                setStatusImage(1);
              }
            })}
            className="space-y-8"
          >
            <FormLabel className="text-4xl">Social Status Calculator</FormLabel>
            <FormField
              control={form.control}
              name="name"
              defaultValue={""}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="(Gov Name)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="boolage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="(Amount $)" {...field} />
                  </FormControl>
                  <FormDescription>How much money you got?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <text className="text-3xl">{status}</text>
      <div className="container pt-5 flex justify-center text-center">
        {statusImage == 0 ? null : (
          <Image src={options[statusImage]} alt="" width={500} height={500} />
        )}
      </div>
    </div>
  );
}
