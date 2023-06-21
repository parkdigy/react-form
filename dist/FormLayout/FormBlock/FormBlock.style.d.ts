/// <reference types="react" />
export declare const StyledWrapGrid: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").GridClasses> | undefined;
    columns?: import("@mui/system").ResponsiveStyleValue<number> | undefined;
    columnSpacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    container?: boolean | undefined;
    direction?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridDirection> | undefined;
    item?: boolean | undefined;
    rowSpacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    spacing?: import("@mui/system").ResponsiveStyleValue<import("@mui/material").GridSpacing> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    wrap?: import("@mui/material").GridWrap | undefined;
    zeroMinWidth?: boolean | undefined;
} & import("@mui/material").RegularBreakpoints & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "direction" | "columns" | "container" | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "wrap" | "children" | "columnSpacing" | "item" | "rowSpacing" | "spacing" | "sx" | "zeroMinWidth" | keyof import("@mui/material").RegularBreakpoints> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
