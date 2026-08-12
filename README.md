# Argencore Solutions — Landing

Landing page de Argencore Solutions, empresa argentina de soluciones de IA. Presenta ArgencoreAI, el chatbot de inteligencia artificial para atención por WhatsApp Business.

Construida con [Next.js](https://nextjs.org) + Tailwind CSS, pensada para desplegarse en [Vercel](https://vercel.com).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Importar este repositorio en [vercel.com/new](https://vercel.com/new).
2. Vercel detecta Next.js automáticamente, no requiere configuración adicional.
3. Una vez desplegado, agregar el dominio `argencoresolutions.com.ar` en **Project Settings → Domains** y apuntar el DNS del dominio (comprado en NIC Argentina) según las instrucciones que da Vercel.

## Contenido a actualizar

- Número de WhatsApp: `WHATSAPP_NUMBER` en [`src/app/page.tsx`](src/app/page.tsx).
- Logo: [`public/logo.jpeg`](public/logo.jpeg).
