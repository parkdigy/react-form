/// <reference types="react" />
export declare const StyledTitleContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledYear: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledYearError: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledTitleGap: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledActionContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledActionButton: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonClasses> | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    disabled?: boolean | undefined;
    disableElevation?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    endIcon?: import("react").ReactNode;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    size?: "small" | "medium" | "large" | undefined;
    startIcon?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: "text" | "outlined" | "contained" | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "color" | keyof import("@mui/material/OverridableComponent").CommonProps | "tabIndex" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "href" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
