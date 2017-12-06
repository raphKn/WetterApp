/* eslint-disable no-bitwise */
export function useLightScheme(hexColorCode) {
    const colorCode = hexColorCode.substring(1);      // strip #
    const rgbCode = parseInt(colorCode, 16);   // convert rrggbb to decimal
    const red = (rgbCode >> 16) & 0xff;  // extract red
    const green = (rgbCode >> 8) & 0xff;  // extract green
    const blue = (rgbCode >> 0) & 0xff;  // extract blue

    const luma = (0.2126 * red) + (0.7152 * green) + (0.0722 * blue); // per ITU-R BT.709

    return luma < 120;
}
