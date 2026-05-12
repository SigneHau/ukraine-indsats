"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().email({
    message: "Будь ласка, введіть коректну адресу електронної пошти.",
  }),
})

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("loading")
    
    const { error } = await supabase
      .from('newsletter')
      .insert([{ email: values.email }])

    if (error) {
      console.error("Supabase fejl:", error.message)
      setStatus("error")
    } else {
      setStatus("success")
      form.reset()
    }
  }

  return (
    <section className="w-full bg-primary-blue py-6">
      <div className="mt-10 px-8 md:px-6 flex flex-col items-center text-center">
        
        <div className=" w-full">
          <h2 className="text-navy  text-3xl font-bold mb-1">Інформаційний бюлетень</h2>
          <p className="text-navy text-lg italic opacity-80">Nyhedsbrev</p>
          <p className="text-navy italic opacity-80 max-w-sm mt-2 mb-8 mx-auto text-center">
            Підпишіться на наші новини, щоб бути в курсі останніх подій.
          </p>
        </div>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl items-stretch sm:items-start"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow: 1; space-y-0 text-left w-full">
                  <FormControl>
                    <Input 
                      placeholder="імейл" 
                      {...field} 
                      className="h-12 bg-white border-none rounded-none text-navy focus-visible:ring-secondary-purple text-lg w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600 mt-1 absolute text-xs font-bold" />
                </FormItem>
              )}
            />
            
           <Button 
            type="submit" 
            disabled={status === "loading"}
            className="h-12 bg-secondary-purple text-white px-8 text-[20px] font-bold rounded-none hover:bg-secondary-light hover:text-black transition-colors whitespace-nowrap border-none"
              >
            {status === "loading" ? "..." : "відправити"}
          </Button>
          </form>
        </Form>

        <div className="h-8 mt-4 w-full"> 
          {status === "success" && (
            <p className="text-green-700 font-bold animate-in fade-in slide-in-from-top-1 text-sm">
              Дякуємо! Ви успішно підписалися на розсилку.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-bold text-sm">
              Сталася помилка. Будь ласка, спробуйте ще раз.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}