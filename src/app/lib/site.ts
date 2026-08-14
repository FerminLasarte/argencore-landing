export const SITE_URL = "https://argencoresolutions.com.ar";

export const WHATSAPP_NUMBER = "5491162799371";
export const WHATSAPP_DISPLAY = "+54 9 11 6279-9371";

export function whatsappUrl(
  message = "Hola, quiero saber más sobre Argencore Solutions."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const EMAIL = "argencoresolutions@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Consulta desde argencoresolutions.com.ar"
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/argencoresolutions/";
export const INSTAGRAM_HANDLE = "@argencoresolutions";

export const LOCATION = "HQ Capital Federal, Argentina";

/**
 * Datos del titular. Argencore Solutions es el nombre comercial bajo el que
 * opera una persona física, así que la identificación legal es la suya.
 * Se usan solo en las páginas legales.
 */
export const LEGAL_NAME = "Facundo Nazar Anchorena";
export const LEGAL_CUIT = "20-43909145-3";
export const LEGAL_ADDRESS =
  "Pedro Saint Miqueu 1402, B7000 Tandil, Provincia de Buenos Aires, Argentina";

/** Fecha de última revisión de los textos legales. */
export const LEGAL_UPDATED = "14 de agosto de 2026";
