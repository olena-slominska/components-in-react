import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'px-3', 'py-1.5', 'border-transparent',
        'hover:cursor-pointer', 'mt-1.5 ml-5 flex item-center', {
        'bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md': primary,
        'bg-gray-400 text-black': secondary,
        'bg-green-500 text-white': success,
        'bg-yellow-500 text-black': warning,
        'bg-red-500 text-white rounded-md': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'border-blue-500 border-2': outline && primary,
        'text-yellow-500 border-yellow-500 border-2': outline && warning,
        'text-green-500 border-green-500 border-2': outline && success
    });

    return <button type="button" {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    validateVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger
    }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);
        if (count > 1) {
            return new Error('Only one of variations can be true');
        }
    }
}

export default Button;