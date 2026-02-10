"use client";
import { motion } from "framer-motion";
import {
	Github,
	Twitter,
	Linkedin,
	Mail,
	Instagram,
	Facebook,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative border-t border-border/50 bg-card/20">
			<div className="container-main py-16 px-6">
				<div className="grid md:grid-cols-4 gap-12">
					{/* Brand */}
					<div className="md:col-span-2">
						<a href="#" className="flex items-center gap-1 mb-6">
							<Image src={logo} alt="TSAR Logo" width={60} height={60} />
							<div>
								<span className="font-display font-bold text-2xl tracking-tight block">
									TSAR
								</span>
								<span className="text-xs text-muted-foreground">
									Technology & Scientific Advanced Research
								</span>
							</div>
						</a>
						<p className="text-muted-foreground max-w-md leading-relaxed">
							Empowering the visually impaired with cutting-edge radar
							technology in a sleek, stigma-free eyewear design. See the world
							differently.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-display font-semibold mb-6">Quick Links</h4>
						<ul className="space-y-3">
							{["Features", "Specs", "Contact"].map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h4 className="font-display font-semibold mb-6">Connect</h4>
						<div className="flex gap-4">
							{[
								{
									icon: Facebook,
									href: "https://www.facebook.com/share/1833avWpQm/",
								},

								{
									icon: Instagram,
									href: "https://www.instagram.com/tsar_labs?igsh=ZDM3aW5uenpmbzNq",
								},
							].map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									className="w-10 h-10 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
								>
									<social.icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-muted-foreground text-sm">
						© {currentYear} TSAR. All rights reserved.
					</p>
					<div className="flex gap-6 text-sm">
						<a
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
