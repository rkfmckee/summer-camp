import React, { Suspense } from "react";
import { Header } from "./Header";
import { getGlobalSettings } from "@/data/getData";

const HeaderData = async () => {
    const globalData = await getGlobalSettings();
    return <Header data={globalData?.data.header} />;
};

export default HeaderData;
