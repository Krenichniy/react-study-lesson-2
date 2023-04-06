import clsx from "clsx";
import css from './Alert.module.css';

// import "./Alert.css";

// const alertStyles = {
//         margin: 8,
//         padding: "12px 16px",
//         borderRadius: 4,
//         backgroundColor: "gray",
//         color: "white"
// }
// const getBgColor = (variant) => {
//     switch (variant){
//         case "info":
//             return "blue";
//         case "success":
//             return "green";
//         case "warning":
//             return "orange";
//         case "error":
//             return "red";
//         default:
//         throw new Error(`Unsupported variant prop value -${variant}`);
//     }
// };
export const Alert = ({ variant, outlined, elevated, children }) => {
    // const classNames = ["alert", variant]
    // return <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }} className="alert">{children}</p>
    // if (outlined) classNames.push("is-outlined");
    // if(elevated) classNames.push("is-elevated");
    // return <p className={classNames.join(" ")}>{children}</p>;
    // return <p className={clsx(
    //             "alert",
    //             variant,
    //             outlined && "is-outlined",
    //     elevated && "is-elevated"
    //             )}>{children}</p>
    return <p
            className={clsx(css[variant], {
                [css.isOutlined]: outlined,
                [css.isElevated]:elevated
                })}
            >
                {children}
            </p>
}