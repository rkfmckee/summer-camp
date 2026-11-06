import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import HeroSection from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { getHomePageDataAsync } from "@/data/getData";
import { notFound } from "next/navigation";

const GetData = async () => {
    const data = await getHomePageDataAsync();
    if (!data) notFound();

    console.log(data);

    const blocks = data.blocks || [];

    return <BlockRenderer blocks={blocks} />;
};

export default GetData;
