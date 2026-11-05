import { Suspense } from "react";
import GetData from "./GetData";

const HomePage = async () => {
    return (
        <Suspense fallback="loading...">
            <GetData />
        </Suspense>
    );
};

export default HomePage;
