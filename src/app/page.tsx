import Marquee from "@/components/common/marquee/marquee";
import MainBanner from "@/components/main/main-banner";
import WhyChooseUs from "@/components/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <Marquee className="bg-green-light font-tektur-bolder py-4 text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia velit facere beatae doloremque nihil est assumenda nemo
        culpa ipsam debitis voluptatibus, amet possimus quod nobis officiis quo? Cum, quidem neque.
      </Marquee>
      <WhyChooseUs />
    </div>
  );
}
