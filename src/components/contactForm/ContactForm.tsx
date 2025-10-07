"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

import { ContactInput, contactSchema } from "@/lib/validators/ContactValidators";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      mobile: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result?.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out — I’ll get back to you soon.",
        duration: 3500,
      });

      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong!";
      toast.error("Failed to send message", {
        description: message,
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <CardContent className="space-y-2">
          {/* Name + Email */}
          <div className="flex  gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem  className="w-1/2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 " />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem  className="w-1/2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 " />
                </FormItem>
              )}
            />
          </div>

          {/* Mobile */}
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} value={field.value ?? ""}/>
                </FormControl>
                <FormMessage className="text-red-500 " />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="What’s this about?" {...field}  value={field.value ?? ""}/>
                </FormControl>
                <FormMessage className="text-red-500 " />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Tell me about your project..." {...field} />
                </FormControl>
                <FormMessage className="text-red-500 " />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full group flex items-center justify-center transition-all ${
              isSubmitting
                ? "bg-green-600 hover:bg-green-700"
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </>
            )}
          </Button>
        </CardContent>
      </form>
    </Form>
  );
}
