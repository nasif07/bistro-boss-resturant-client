
import { children } from "react";
import { Helmet } from "react-helmet-async";

const HelmetTitle = ({children}) => {
    return (
        <Helmet>
            <title>Bestro Boss | {`${children}`}</title>
        </Helmet>
    );
};

export default HelmetTitle;