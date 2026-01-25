"use client";
import { motion } from "framer-motion";
import { Radar, Vibrate, Zap, Wifi, Shield, Battery } from "lucide-react";
import glassesSide from "@/public/assets/glasses-side.jpg";
import Image from "next/image";

const features = [
	{
		icon: Radar,
		title: "mmWave Radar Technology",
		description:
			"Advanced HLK-LD2410B sensor provides precise presence and distance detection up to 5 meters.",
	},
	{
		icon: Vibrate,
		title: "Haptic Feedback",
		description:
			"Real-time vibration alerts notify users of obstacles on their left, right, or front path.",
	},
	{
		icon: Zap,
		title: "Zero Setup Required",
		description:
			"No apps, no complicated setup. Just wear and go with instant, intuitive navigation.",
	},
	{
		icon: Wifi,
		title: "BLE Connectivity",
		description:
			"ESP32 microcontroller with Bluetooth Low Energy for seamless device integration.",
	},
	{
		icon: Shield,
		title: "Stigma-Free Design",
		description:
			"Sleek, modern eyewear design that looks like regular glasses, not medical equipment.",
	},
	{
		icon: Battery,
		title: "All-Day Battery",
		description:
			"500-800mAh Li-Po battery with USB-C charging for extended daily use.",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Features = () => {
	return (
		<section id="features" className="section-padding relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

			<div className="container-main relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<span className="text-primary font-medium text-sm uppercase tracking-widest">
						Features
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
						Technology That <span className="gradient-text">Empowers</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Combining cutting-edge radar sensing with elegant design to
						transform how visually impaired individuals navigate their world.
					</p>
				</motion.div>

				{/* Content Grid */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Product Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative order-2 lg:order-1"
					>
						<div className="relative">
							<div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
							<Image
								src={glassesSide}
								alt="TSAR Glasses Side View"
								className="relative w-full rounded-2xl glass-card p-4"
							/>
						</div>
					</motion.div>

					{/* Features Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2"
					>
						{features.map((feature) => (
							<motion.div
								key={feature.title}
								variants={itemVariants}
								className="glass-card p-6 glow-effect"
							>
								<div className="feature-icon mb-4">
									<feature.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="font-display font-semibold text-lg mb-2">
									{feature.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{feature.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Features;
