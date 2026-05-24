"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Code, Globe, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useLanguage } from "@/providers/LanguageProvider";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // EmailJS integration placeholder
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-padding !pt-8 md:!pt-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <div>
            <SectionLabel text={t.contact.label} />
            <SectionHeading
              title={t.contact.title}
              subtitle={t.contact.subtitle}
            />

            <ScrollReveal delay={0.3}>
              <div className="mt-10 space-y-6">
                <a
                  href="mailto:manvithkumar@email.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center group-hover:bg-portfolio-accent/10 dark:group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={18} className="text-portfolio-primary dark:text-white group-hover:text-portfolio-accent dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-secondary dark:text-neutral-400">{t.contact.email}</p>
                    <p className="font-medium">medipellymanvith@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center">
                    <MapPin size={18} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-secondary dark:text-neutral-400">{t.contact.location}</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  {[
                    { icon: Code, href: "https://github.com/manvithkumar12", label: "GitHub" },
                    { icon: Globe, href: "https://www.linkedin.com/in/manvith-kumar/", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:medipellymanvith@gmail.com", label: "Email" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-portfolio-light-gray dark:bg-neutral-800 flex items-center justify-center hover:bg-portfolio-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-portfolio-muted dark:border-neutral-800">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={48} className="text-portfolio-success mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{t.contact.form.sent}</h3>
                  <p className="text-sm text-portfolio-secondary dark:text-neutral-400">
                    {t.contact.form.sentDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      {...register("name", { required: t.contact.form.errors.nameReq })}
                      className="w-full px-4 py-3 rounded-xl bg-portfolio-bg dark:bg-neutral-800 border border-portfolio-muted dark:border-neutral-700 text-sm focus:outline-none focus:border-portfolio-accent dark:focus:border-blue-500 transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: t.contact.form.errors.emailReq,
                        pattern: { value: /^\S+@\S+$/, message: t.contact.form.errors.emailInv },
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-portfolio-bg dark:bg-neutral-800 border border-portfolio-muted dark:border-neutral-700 text-sm focus:outline-none focus:border-portfolio-accent dark:focus:border-blue-500 transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
                      {t.contact.form.subject}
                    </label>
                    <input
                      id="subject"
                      {...register("subject", { required: t.contact.form.errors.subReq })}
                      className="w-full px-4 py-3 rounded-xl bg-portfolio-bg dark:bg-neutral-800 border border-portfolio-muted dark:border-neutral-700 text-sm focus:outline-none focus:border-portfolio-accent dark:focus:border-blue-500 transition-colors"
                      placeholder={t.contact.form.subjectPlaceholder}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", { required: t.contact.form.errors.msgReq })}
                      className="w-full px-4 py-3 rounded-xl bg-portfolio-bg dark:bg-neutral-800 border border-portfolio-muted dark:border-neutral-700 text-sm focus:outline-none focus:border-portfolio-accent dark:focus:border-blue-500 transition-colors resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-portfolio-primary dark:bg-white text-white dark:text-black font-medium rounded-xl hover:opacity-90 transition-opacity"
                  >
                    {t.contact.form.send}
                    <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
