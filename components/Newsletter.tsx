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

// 1. Definer validering (Zod schema)
const formSchema = z.object({
  email: z.string().email({
    message: "Indtast venligst en gyldig e-mailadresse.",
  }),
})

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // 2. Initialiser formen
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // 3. Submit funktion
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("loading")
    
    const { error } = await supabase
      .from('newsletter') // Retter til dit rigtige tabelnavn
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
    <section className="bg-primary-blue p-10 text-center rounded-none">
      <div className="mb-6">
        <h2 className="text-navy text-3xl font-bold mb-1">Інформаційний бюлетень</h2>
        <p className="text-navy text-lg italic opacity-80">Nyhedsbrev</p><p className="text-navy text-lg italic opacity-80"> Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.</p>

      </div>

      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto items-start"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full space-y-0">
                <FormControl>
                  <Input 
                    placeholder="імейл" 
                    {...field} 
                    className="h-14 bg-white border-none rounded-none text-navy focus-visible:ring-1 focus-visible:ring-secondary-purple"
                  />
                </FormControl>
                {/* Fejlbesked vises her hvis mailen er ugyldig */}
                <FormMessage className="text-left text-red-600 mt-1 absolute" />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            disabled={status === "loading"}
            className="h-14 bg-secondary-purple text-white px-8 font-bold rounded-none hover:bg-secondary-light hover:text-navy transition-colors w-full sm:w-auto mt-6 sm:mt-0"
          >
            {status === "loading" ? "Sender..." : "відправити"}
          </Button>
        </form>
      </Form>

      {/* Status besked til brugeren */}
      <div className="h-8 mt-4"> 
        {status === "success" && (
          <p className="text-green-700 font-bold animate-in fade-in slide-in-from-top-1">
            Tak! Du er nu tilmeldt nyhedsbrevet.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-bold">
            Der skete en fejl. Prøv venligst igen.
          </p>
        )}
      </div>
    </section>
  )
}