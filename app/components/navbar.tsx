"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "Features", href: "#features" },
	{ name: "Specs", href: "#specs" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled
					? "bg-background/80 backdrop-blur-xl border-b border-border/50"
					: "bg-transparent"
			}`}
		>
			<div className="container-main">
				<div className="flex items-center justify-between h-20 px-6">
					{/* Logo */}
					<a href="#" className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-glow-secondary flex items-center justify-center">
							<span className="font-display font-bold text-primary-foreground text-lg">
								T
							</span>
						</div>
						<span className="font-display font-bold text-xl tracking-tight">
							TSAR
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="nav-link font-medium"
							>
								{link.name}
							</a>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden md:block">
						<a href="#contact">
							<Button variant="hero" size="lg">
								Pre-Order Now
							</Button>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="md:hidden p-2 text-foreground"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
					>
						<div className="container-main px-6 py-6 flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
								>
									{link.name}
								</a>
							))}
							<Button variant="hero" size="lg" className="mt-4">
								Pre-Order Now
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
