import HeroSection from "@/components/blocks/HeroSection";
import { getHomePageDataAsync } from "@/data/getData";
import { notFound } from "next/navigation";

const GetData = async () => {
    const data = await getHomePageDataAsync();
    if (!data) notFound();

    console.log(data);

    const blocks = data.blocks || [];

    return (
        <div>
            <HeroSection {...blocks[0]} />
        </div>
    );
};

export default GetData;
