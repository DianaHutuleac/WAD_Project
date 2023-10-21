export default function Button({buttonColor, labelColor, buttonLabel, buttonBorder, buttonPadding, buttonRadius, labelSize}) {
    return(
        <button
        className={`font-titilium font-semibold ${buttonColor} ${labelColor} ${buttonBorder} ${buttonPadding} ${buttonRadius} ${labelSize}`}
        >
            {buttonLabel}
        </button>
    )

}