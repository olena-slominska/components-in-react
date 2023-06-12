import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    let classes = classNames(
        'text-blue-500 ml-5',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (ev) => {
        if (ev.metaKey || ev.ctrlKey) {
            return;
        }
        ev.preventDefault();

        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;