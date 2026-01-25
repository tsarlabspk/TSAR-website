"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroGlasses from "@/public/assets/hero-glasses.jpg";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl" />

			<div className="container-main relative z-10 pt-32 pb-20 px-6">
				<div className="flex flex-col items-center text-center">
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mb-8"
					>
						<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary">
							<span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
							Revolutionary Assistive Technology
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl"
					>
						See the World <span className="gradient-text">Differently</span>
					</motion.h1>

					{/* Subheadline */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
					>
						TSAR smart glasses combine cutting-edge mmWave radar technology with
						elegant design to provide real-time obstacle detection for the
						visually impaired.
					</motion.p>

					{/* Product Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.8 }}
						className="mt-16 md:mt-24 relative"
					>
						<div className="relative">
							{/* Glow Effect */}
							<div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

							<Image
								src={heroGlasses}
								alt="TSAR Smart Glasses"
								className="relative w-full max-w-4xl mx-auto rounded-2xl animate-float"
							/>
						</div>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
					>
						{[
							{ value: "1M+", label: "Range Detection" },
							{ value: "60g", label: "Lightweight" },
							{ value: "70%", label: "Cost Reduction" },
						].map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="font-display text-3xl md:text-4xl font-bold gradient-text">
									{stat.value}
								</div>
								<div className="text-sm md:text-base text-muted-foreground mt-1">
									{stat.label}
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.2 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-1.5 h-1.5 rounded-full bg-primary"
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
