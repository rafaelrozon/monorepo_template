import {
    background,
    border,
    color,
    compose,
    flexbox,
    layout,
    position,
    shadow,
    space,
    styleFn,
    typography
} from 'styled-system';

export default (): styleFn =>
    compose(
        background,
        border,
        color,
        flexbox,
        layout,
        position,
        shadow,
        space,
        typography
    );
