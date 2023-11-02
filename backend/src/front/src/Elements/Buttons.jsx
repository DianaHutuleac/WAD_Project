export default function Button({buttonColor, onClick, labelColor, buttonLabel, buttonBorder, buttonPadding, buttonRadius, labelSize, buttonHref}) {
    console.log(onClick)
    return(
        <a href = {buttonHref}>
        <button
        onClick = {onClick}
        className={`font-titilium font-semibold hover:-translate-y-0.5 hover:shadow-md duration-700 ease-out transition-all ${buttonColor} ${labelColor} ${buttonBorder} ${buttonPadding} ${buttonRadius} ${labelSize}`}
        >
            {buttonLabel}
        </button>
        </a>
    )

}