"use client";
import { motion } from "framer-motion";
import glassesSpecs from "@/public/assets/glasses-specs.jpg";
import glassesFront from "@/public/assets/glasses-front.jpg";
import Image from "next/image";

const specifications = [
	{ label: "Sensor", value: "Sharp GP2Y0A02YK0F IR distance sensor" },
	{ label: "Processor", value: "ESP32 (12-bit ADC, 3.3V)" },
	{ label: "Sampling", value: "10 Hz (100 ms) with 5-sample median" },
	{ label: "Filtering", value: "EMA smoothing (alpha 0.30)" },
	{ label: "Distance Model", value: "Power-law fit, 5V nominal scaled to Vcc" },
	{ label: "Valid Voltage", value: "0.4-2.5 V window (scaled to Vcc)" },
	{ label: "Alert Thresholds", value: "Beep on <=80 cm, off >=90 cm" },
	{ label: "Buzzer Pattern", value: "40 ms on; 80-450 ms interval by distance" },
];

const Specs = () => {
	return (
		<section
			id="specs"
			className="section-padding relative overflow-hidden bg-card/30"
		>
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
						Specifications
					</span>
					<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
						Built for <span className="gradient-text">Performance</span>
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Every component has been carefully selected to deliver maximum
						performance in a lightweight, comfortable form factor.
					</p>
				</motion.div>

				{/* Product Showcase */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
						<Image
							src={glassesSpecs}
							alt="TSAR Technical Diagram"
							className="relative w-full rounded-2xl"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<Image
							src={glassesFront}
							alt="TSAR Front View"
							className="w-full rounded-2xl glass-card p-4"
						/>
					</motion.div>
				</div>

				{/* Specs Grid */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="glass-card p-8 md:p-12"
				>
					<h3 className="font-display text-2xl font-bold mb-8 text-center">
						Technical Specifications
					</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{specifications.map((spec, index) => (
							<motion.div
								key={spec.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								className="spec-item text-center"
							>
								<div className="text-sm text-muted-foreground mb-2">
									{spec.label}
								</div>
								<div className="font-display font-semibold text-foreground">
									{spec.value}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Market Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-16 text-center"
				>
					<h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
						Addressing a <span className="gradient-text">Global Need</span>
					</h3>
					<div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
						{[
							{ value: "1.1B", label: "Visually Impaired Worldwide" },
							{ value: "61M", label: "Fully Blind by 2050" },
							{ value: "$70-90", label: "Target Price Point" },
						].map((stat) => (
							<div key={stat.label} className="glass-card p-6">
								<div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
									{stat.value}
								</div>
								<div className="text-muted-foreground text-sm">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Specs;
