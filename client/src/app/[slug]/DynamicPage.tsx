import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getPageBySlug } from "@/data/getData";
import { notFound } from "next/navigation";

interface DynamicPageProps {
    params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
    const { data } = await getPageBySlug(slug);
    console.log(data);

    if (!data || data.length === 0) notFound();
    else return { blocks: data[0]?.blocks };
}

const DynamicPage = async ({ params }: DynamicPageProps) => {
    const slug = (await params).slug;
    const { blocks } = await loader(slug);
    return <BlockRenderer blocks={blocks} />;
};

export default DynamicPage;
