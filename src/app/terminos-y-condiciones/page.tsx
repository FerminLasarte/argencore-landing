import type { Metadata } from "next";
import LegalPage from "../components/legal-page";
import {
  EMAIL,
  EMAIL_URL,
  LEGAL_ADDRESS,
  LEGAL_CUIT,
  LEGAL_NAME,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones | Argencore Solutions",
  description:
    "Condiciones de uso del sitio de Argencore Solutions y del vínculo con quienes consultan por nuestros servicios de software e inteligencia artificial.",
  alternates: { canonical: "/terminos-y-condiciones" },
};

export default function TerminosYCondicionesPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro="Estas condiciones regulan el uso del sitio de Argencore Solutions y el vínculo con quienes se contactan a través de él. Te pedimos que las leas antes de utilizarlo."
    >
      <h2>1. Aceptación de los términos</h2>
      <p>
        El acceso y la utilización de este sitio implican la aceptación plena de
        estos términos y condiciones. Si no estás de acuerdo con alguno de sus
        puntos, te pedimos que no utilices el sitio.
      </p>

      <h2>2. Titularidad</h2>
      <p>
        Este sitio, disponible en <a href={SITE_URL}>{SITE_URL}</a>, es
        titularidad de <strong>{LEGAL_NAME}</strong>, CUIT {LEGAL_CUIT}, con
        domicilio legal en {LEGAL_ADDRESS}, quien opera bajo el nombre comercial{" "}
        <strong>Argencore Solutions</strong>.
      </p>
      <p>
        La finalidad del sitio es institucional: presentar la actividad, los
        servicios y los proyectos, y facilitar el contacto con personas
        interesadas.
      </p>

      <h2>3. Uso del sitio</h2>
      <p>
        Te comprometés a utilizar el sitio de forma lícita y de buena fe. En
        particular, no está permitido:
      </p>
      <ul>
        <li>
          Utilizar el sitio con fines ilícitos o contrarios a la buena fe y al
          orden público.
        </li>
        <li>
          Intentar acceder sin autorización a sistemas, servidores o datos
          vinculados al sitio.
        </li>
        <li>
          Introducir o difundir software malicioso o realizar acciones que puedan
          dañar, sobrecargar o deteriorar el funcionamiento del sitio.
        </li>
        <li>
          Reproducir, copiar o distribuir los contenidos del sitio sin
          autorización previa por escrito.
        </li>
      </ul>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio —incluyendo textos, diseño, isotipo,
        marca, gráficos y código fuente— son propiedad de Argencore Solutions o
        se utilizan con la debida autorización, y están protegidos por la
        normativa vigente en materia de propiedad intelectual e industrial.
      </p>
      <p>
        El acceso al sitio no otorga ningún derecho de uso, reproducción o
        explotación sobre dichos contenidos. Las marcas de terceros mencionadas
        pertenecen a sus respectivos titulares.
      </p>

      <h2>5. Servicios, consultas y presupuestos</h2>
      <p>
        La información publicada sobre nuestros servicios y proyectos tiene
        carácter meramente informativo y no constituye una oferta contractual
        vinculante. El alcance, los plazos, las condiciones y el precio de cada
        trabajo se acuerdan de forma particular con cada cliente mediante una
        propuesta o contrato específico.
      </p>
      <p>
        Los presupuestos que enviemos tendrán la vigencia que en ellos se indique
        y podrán ser modificados si cambian las condiciones o el alcance del
        proyecto.
      </p>

      <h2>6. Canales de contacto</h2>
      <p>
        Los canales de contacto informados en este sitio —WhatsApp y correo
        electrónico— se ofrecen para consultas comerciales. Los tiempos de
        respuesta son estimativos y pueden variar. El envío de una consulta no
        genera por sí mismo relación contractual alguna.
      </p>

      <h2>7. Enlaces a sitios de terceros</h2>
      <p>
        El sitio puede incluir enlaces a plataformas externas, como redes
        sociales o servicios de mensajería. No controlamos ni respondemos por los
        contenidos, políticas o prácticas de esos sitios, cuyo uso se rige por
        sus propias condiciones.
      </p>

      <h2>8. Disponibilidad del sitio</h2>
      <p>
        Procuramos que el sitio esté disponible de forma continua, pero no
        garantizamos que el acceso sea ininterrumpido ni libre de errores.
        Podemos suspender, interrumpir o modificar total o parcialmente el sitio
        por razones técnicas, de mantenimiento o de fuerza mayor, sin necesidad
        de aviso previo.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        Argencore Solutions no será responsable por daños directos o indirectos
        derivados del uso o de la imposibilidad de uso del sitio, ni por
        decisiones tomadas sobre la base de la información general aquí
        publicada. La responsabilidad vinculada a los servicios efectivamente
        contratados se regirá por lo acordado en el contrato o propuesta
        correspondiente.
      </p>

      <h2>10. Protección de datos personales</h2>
      <p>
        El tratamiento de los datos personales recopilados a través del sitio se
        rige por nuestra{" "}
        <a href="/politica-de-privacidad">Política de privacidad</a>, que forma
        parte integrante de estos términos.
      </p>

      <h2>11. Modificaciones</h2>
      <p>
        Podemos modificar estos términos y condiciones en cualquier momento. La
        versión vigente será siempre la publicada en esta página, con su fecha de
        última actualización. El uso del sitio con posterioridad a una
        modificación implica la aceptación de la nueva versión.
      </p>

      <h2>12. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos y condiciones se rigen por las leyes de la República
        Argentina. Ante cualquier controversia derivada del uso del sitio, las
        partes se someten a la jurisdicción de los tribunales ordinarios
        correspondientes al domicilio del titular, en la Provincia de Buenos
        Aires, sin perjuicio de la jurisdicción que resulte aplicable de manera
        imperativa en las relaciones de consumo.
      </p>

      <h2>13. Contacto</h2>
      <p>
        Ante cualquier consulta sobre estos términos y condiciones, escribinos a{" "}
        <a href={EMAIL_URL}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
