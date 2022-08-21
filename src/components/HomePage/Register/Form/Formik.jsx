import { Formik as Fm, FormikConfig } from "formik";

/**
 * @param {FormikConfig} props 
 */

function Formik(props) {
    const { children, ...config } = props;
    return <Fm {...config}>{() => children}</Fm>;
}

export default Formik;