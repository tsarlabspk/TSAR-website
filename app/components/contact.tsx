"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Send, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
	name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
	email: z
		.string()
		.trim()
		.email("Invalid email address")
		.max(255, "Email too long"),
	subject: z
		.string()
		.trim()
		.min(1, "Subject is required")
		.max(200, "Subject too long"),
	message: z
		.string()
		.trim()
		.min(1, "Message is required")
		.max(1000, "Message too long"),
});

const faqs = [
	{
		question: "How does TSAR detect obstacles?",
		answer:
			"TSAR uses advanced mmWave radar technology (HLK-LD2410B sensor) that emits radio waves to detect objects and people in your path. The sensor can accurately measure distance and presence up to 5 meters away.",
	},
	{
		question: "Is TSAR comfortable to wear all day?",
		answer:
			"Yes! TSAR weighs only 60-80 grams, making it lighter than many regular eyeglasses. The 3D-printed frame is custom-designed for comfort and can accommodate prescription lenses.",
	},
	{
		question: "How long does the battery last?",
		answer:
			"The built-in Li-Po battery (500-800mAh) provides all-day use on a single charge. Charging is quick and convenient via USB-C.",
	},
	{
		question: "Do I need a smartphone to use TSAR?",
		answer:
			"No! TSAR is designed to work completely independently. There are no apps to install or settings to configure. Just put on the glasses and start navigating.",
	},
	{
		question: "What makes TSAR different from other assistive devices?",
		answer:
			"TSAR is 70% cheaper than competing devices through local manufacturing, features a stigma-free design that looks like regular eyewear, and provides real-time haptic alerts rather than passive data logging.",
	},
	{
		question: "When will TSAR be available?",
		answer:
			"We are currently in the prototyping phase. Pre-orders will open soon. Join our waitlist to be notified when TSAR becomes available.",
	},
];

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const formRef = useRef<HTMLFormElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});

		const result = contactSchema.safeParse(formData);

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};

			result.error.issues.forEach((err) => {
				const fieldName = err.path[0];
				if (fieldName) {
					fieldErrors[fieldName as string] = err.message;
				}
			});

			setErrors(fieldErrors);
			return;
		}

		setIsSubmitting(true);

		try {
			if (formRef.current) {
				const response = await emailjs.sendForm(
					"service_1bpa2yf",
					"template_uqmopxk",
					formRef.current,
					"XmCvWE5a8-e2SOh0Z",
				);

				console.log("EmailJS response:", response);

				if (response.status === 200) {
					toast.success(
						"Message sent successfully! We'll get back to you soon.",
					);
					setFormData({ name: "", email: "", subject: "", message: "" });
				}
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="section-padding relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

			<div className="container-main relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-medium text-sm uppercase tracking-widest">
						Contact
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
						Get in <span className="gradient-text">Touch</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Have questions about TSAR? We'd love to hear from you. Send us a
						message or check out our FAQs.
					</p>
				</motion.div>

				{/* Contact Form & FAQs Grid */}
				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="glass-card p-8 md:p-10">
							<div className="flex items-center gap-3 mb-8">
								<div className="feature-icon">
									<Mail className="w-5 h-5 text-primary" />
								</div>
								<h3 className="font-display text-2xl font-bold">
									Send a Message
								</h3>
							</div>

							<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
								<div>
									<Input
										name="name"
										placeholder="Your Name"
										value={formData.name}
										onChange={handleChange}
										className="input-styled h-12"
									/>
									{errors.name && (
										<p className="text-destructive text-sm mt-1">
											{errors.name}
										</p>
									)}
								</div>

								<div>
									<Input
										name="email"
										type="email"
										placeholder="Your Email"
										value={formData.email}
										onChange={handleChange}
										className="input-styled h-12"
									/>
									{errors.email && (
										<p className="text-destructive text-sm mt-1">
											{errors.email}
										</p>
									)}
								</div>

								<div>
									<Input
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
										className="input-styled h-12"
									/>
									{errors.subject && (
										<p className="text-destructive text-sm mt-1">
											{errors.subject}
										</p>
									)}
								</div>

								<div>
									<Textarea
										name="message"
										placeholder="Your Message"
										value={formData.message}
										onChange={handleChange}
										className="input-styled min-h-37.5 resize-none"
									/>
									{errors.message && (
										<p className="text-destructive text-sm mt-1">
											{errors.message}
										</p>
									)}
								</div>

								<Button
									type="submit"
									variant="default"
									size="lg"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										"Sending..."
									) : (
										<>
											Send Message
											<Send className="w-4 h-4" />
										</>
									)}
								</Button>
							</form>
						</div>
					</motion.div>

					{/* FAQs */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="glass-card p-8 md:p-10">
							<div className="flex items-center gap-3 mb-8">
								<div className="feature-icon">
									<MessageSquare className="w-5 h-5 text-primary" />
								</div>
								<h3 className="font-display text-2xl font-bold">FAQs</h3>
							</div>

							<Accordion type="single" collapsible className="space-y-4">
								{faqs.map((faq, index) => (
									<AccordionItem
										key={index}
										value={`item-${index}`}
										className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-secondary/30"
									>
										<AccordionTrigger className="text-left font-display font-medium hover:no-underline py-5">
											{faq.question}
										</AccordionTrigger>
										<AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
											{faq.answer}
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
