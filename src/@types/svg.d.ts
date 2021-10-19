declare module "*.svg" {
    import Rect from 'react';
    import { SvgProps } from 'react-native-svg'
    const content: Rect.FC<SvgProps>;
    export default content;
}