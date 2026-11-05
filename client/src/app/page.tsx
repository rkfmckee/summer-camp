import { Suspense } from "react";
import GetData from "./GetData";

const HomePage = async () => {
    return (
        <Suspense>
            <GetData />
        </Suspense>
    );
};

export default HomePage;
