// reference: https://awik.io/determine-color-bright-dark-using-javascript/

/**
 * Determines if a color is light
 * @param color - an RGB color string
 * @returns boolean - true if light
 */
export const colorLight = (color: string): boolean => {
	const all: string[] = color.split(",");
	const r: number = parseInt(all[0].replace(/\D/g, ""));
	const g = parseInt(all[1].replace(/\D/g, ""));
	const b = parseInt(all[2].replace(/\D/g, ""));
	const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
	if (hsp > 127.5) {
		return true;
	} else {
		return false;
	}
};
