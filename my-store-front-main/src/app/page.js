import Hero from "../components/UI/Hero";
import bannerImg from "../assets/images/banner.jpeg";

export default function Home() {
    return (
        <Hero
            img={bannerImg.src}
            title="A Focus on OG Fits"
            description="Silhouettes inspired by the archives"
            link="/shop"
            link_text="Shop Now"
        />
    )
}

