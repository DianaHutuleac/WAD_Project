export default function Button({buttonColor, labelColor, buttonLabel, buttonBorder, buttonPadding, buttonRadius, labelSize, buttonHref}) {
    return(
        <a href = {buttonHref}>
        <button
        className={`font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all ${buttonColor} ${labelColor} ${buttonBorder} ${buttonPadding} ${buttonRadius} ${labelSize}`}
        >
            {buttonLabel}
        </button>
        </a>
    )

}