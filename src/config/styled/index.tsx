import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { Theme } from './models';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
    withTheme
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, withTheme };
export default styled;