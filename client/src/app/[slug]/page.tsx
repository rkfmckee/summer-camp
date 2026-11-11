import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { getPageBySlug } from "@/data/getData";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import DynamicPage from "./DynamicPage";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DynamicPageRoute({ params }: PageProps) {
    return (
        <Suspense>
            <DynamicPage params={params} />
        </Suspense>
    );
}
