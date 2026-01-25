import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Features from "@/app/components/features";
import Specs from "@/app/components/specs";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

const Home = () => {
	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<Navbar />
			<main>
				<Hero />
				<Features />
				<Specs />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
