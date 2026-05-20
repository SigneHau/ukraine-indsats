"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useLanguage } from "@/context/LanguageContext" // Importer din sprog-context

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const { language } = useLanguage() // Hent det aktive sprog
  // Tilføjet "duplicate" som en mulig status
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle")

  // Dynamisk formSchema så Zod-fejlbeskeden retter sig efter sproget
  const formSchema = z.object({
    email: z.string().email({
      message: language === "ua" 
        ? "Будь ласка, введіть коректну адресу електронної пошти."
        : "Indtast venligst en gyldig e-mailadresse.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("loading")
    
    {/* category: B2B */}
    const { error } = await supabase
      .from('newsletter')
      .insert([{ email: values.email }])

    if (error) {
      console.error("Supabase fejl:", error.code, error.message)
      
      // Kode "23505" er Supabases standardfejl for brud på UNIQUE (e-mailen findes allerede)
      if (error.code === "23505") {
        setStatus("duplicate")
      } else {
        setStatus("error")
      }
    } else {
      setStatus("success")
      form.reset()
    }
  }

  // Ordbog til de resterende tekster i formularen
  const t = {
    subText: language === "ua" 
      ? "Підпишіться на наші новини, щоб бути в курсі останніх подій."
      : "Tilmeld dig vores nyhedsbrev for at holde dig opdateret med de seneste begivenheder.",
    placeholder: language === "ua" ? "імейл..." : "E-mail...",
    submitBtn: language === "ua" ? "відправити" : "Send",
    successMsg: language === "ua"
      ? "Дякуємо! Ви успішно підписалися на розсилку."
      : "Tak! Du er nu tilmeldt nyhedsbrevet.",
    duplicateMsg: language === "ua"
      ? "Ви вже підписані на нашу розсилку новин."
      : "Du er allerede tilmeldt nyhedsbrevet.",
    errorMsg: language === "ua"
      ? "Сталася помилка. Будь ласка, спробуйте ще раз."
      : "Der skete en fejl. Prøv venligst igen.",
  }

  return (
    <section className="w-full bg-primary-blue py-6">
      <div className="mt-10 px-8 md:px-6 flex flex-col items-center text-center">
        
        {/* OVERSKRIFT: ALTID BILINGVAL (UX-Dogme) */}
        <div className="w-full">
          <h2 className="text-navy text-3xl font-bold mb-1">Інформаційний бюлетень</h2>
          <p className="text-navy text-lg opacity-80">Nyhedsbrev</p>
          
          {/* Brødtekst skifter efter sprog */}
          <p className="text-navy italic opacity-80 max-w-sm mt-2 mb-8 mx-auto text-center">
            {t.subText}
          </p>
        </div>

        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="flex flex-col md:flex-row gap-4 w-full max-w-2xl items-stretch md:items-start"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 space-y-0 text-left w-full">
                  <FormControl>
                    <Input 
                      placeholder={t.placeholder} 
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
              variant="purple" 
              size="xl" 
              className="w-full md:w-fit md:min-w-50 flex-shrink-0 cursor-pointer"
            >
              {status === "loading" ? "..." : t.submitBtn}
            </Button>
          
          </form>
        </Form>

        {/* STATUSBESKEDER (Success / Duplicate / Error) */}
        <div className="h-8 mt-4 w-full"> 
          {status === "success" && (
            <p className="text-green-700 font-bold animate-in fade-in slide-in-from-top-1 text-sm">
              {t.successMsg}
            </p>
          )}
          {status === "duplicate" && (
            <p className="text-secondary-purple font-bold animate-in fade-in slide-in-from-top-1 text-sm">
              {t.duplicateMsg}
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-bold text-sm">
              {t.errorMsg}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}