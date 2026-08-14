import type { Metadata } from "next";
import LegalPage from "../components/legal-page";
import {
  EMAIL,
  EMAIL_URL,
  LEGAL_ADDRESS,
  LEGAL_CUIT,
  LEGAL_NAME,
  WHATSAPP_DISPLAY,
} from "../lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | Argencore Solutions",
  description:
    "Cómo Argencore Solutions recopila, usa y protege los datos personales de quienes visitan el sitio o se contactan con la empresa.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="En Argencore Solutions tratamos los datos personales con cuidado y transparencia. Acá explicamos qué información recopilamos, para qué la usamos y qué derechos tenés sobre ella."
    >
      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>Argencore Solutions</strong> es el nombre comercial bajo el cual
        opera <strong>{LEGAL_NAME}</strong>, CUIT {LEGAL_CUIT}, con domicilio
        legal en {LEGAL_ADDRESS}, en carácter de responsable del tratamiento de
        los datos personales recopilados a través de este sitio.
      </p>
      <p>
        Para cualquier consulta vinculada a esta política podés escribirnos a{" "}
        <a href={EMAIL_URL}>{EMAIL}</a> o por WhatsApp al {WHATSAPP_DISPLAY}.
      </p>

      <h2>2. Qué datos recopilamos</h2>
      <p>
        Solo tratamos los datos que resultan necesarios para responder consultas
        y prestar nuestros servicios:
      </p>
      <ul>
        <li>
          <strong>Datos que nos brindás voluntariamente:</strong> nombre, número
          de teléfono, dirección de correo electrónico, nombre de tu empresa y
          cualquier información que decidas incluir en tu mensaje cuando nos
          contactás por WhatsApp o por mail.
        </li>
        <li>
          <strong>Datos técnicos de navegación:</strong> información básica y
          agregada sobre el uso del sitio, como tipo de dispositivo, navegador y
          páginas visitadas. Estos datos se recopilan de forma estadística y no
          se utilizan para identificarte de manera individual.
        </li>
      </ul>
      <p>
        No solicitamos ni recopilamos datos sensibles, datos bancarios ni
        información de tarjetas de crédito a través de este sitio.
      </p>

      <h2>3. Con qué finalidad usamos los datos</h2>
      <ul>
        <li>Responder las consultas y solicitudes de presupuesto que nos envíes.</li>
        <li>
          Prestar, mantener y mejorar los servicios contratados, incluida la
          implementación de nuestras soluciones de software e inteligencia
          artificial.
        </li>
        <li>Mantener contacto comercial vinculado a la consulta realizada.</li>
        <li>
          Analizar de forma agregada el uso del sitio para mejorar su contenido y
          rendimiento.
        </li>
      </ul>
      <p>
        No utilizamos tus datos para finalidades distintas de las aquí descriptas
        sin informarte previamente.
      </p>

      <h2>4. Base legal</h2>
      <p>
        El tratamiento se basa en tu consentimiento, que prestás al contactarnos
        de forma voluntaria, y en el interés legítimo de mantener la relación
        comercial derivada de esa consulta. Podés revocar tu consentimiento en
        cualquier momento, sin efecto retroactivo, escribiéndonos a{" "}
        <a href={EMAIL_URL}>{EMAIL}</a>.
      </p>

      <h2>5. Comunicación por WhatsApp</h2>
      <p>
        Nuestro canal principal de contacto es WhatsApp. Al escribirnos por esa
        vía, la conversación se rige además por las políticas de privacidad y los
        términos de WhatsApp y de Meta Platforms, sobre los que Argencore
        Solutions no tiene control. Te recomendamos revisarlas si querés conocer
        el detalle del tratamiento que realiza esa plataforma.
      </p>
      <p>
        Los mensajes que intercambiamos se conservan únicamente para dar
        seguimiento a tu consulta y a la relación comercial.
      </p>

      <h2>6. Cookies y tecnologías similares</h2>
      <p>
        Este sitio es de carácter institucional y no utiliza cookies de
        publicidad ni de seguimiento con fines comerciales. El proveedor de
        hosting puede emplear cookies estrictamente técnicas, necesarias para el
        funcionamiento y la seguridad del sitio. Podés configurar tu navegador
        para bloquear o eliminar cookies en cualquier momento.
      </p>

      <h2>7. Con quién compartimos los datos</h2>
      <p>
        No vendemos, alquilamos ni cedemos datos personales a terceros con fines
        comerciales. Solo compartimos información con proveedores que nos prestan
        servicios necesarios para operar, y siempre en la medida imprescindible:
      </p>
      <ul>
        <li>Proveedores de infraestructura y alojamiento del sitio.</li>
        <li>Proveedores de correo electrónico y mensajería.</li>
        <li>
          Autoridades públicas, cuando exista una obligación legal o un
          requerimiento judicial que así lo disponga.
        </li>
      </ul>

      <h2>8. Conservación de los datos</h2>
      <p>
        Conservamos los datos personales durante el tiempo necesario para cumplir
        con la finalidad para la que fueron recopilados y, luego, durante los
        plazos exigidos por la normativa aplicable. Cuando dejan de ser
        necesarios, los eliminamos o anonimizamos.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los
        datos personales frente a accesos no autorizados, pérdida o alteración.
        Aun así, ningún sistema es completamente infalible, por lo que no podemos
        garantizar una seguridad absoluta.
      </p>

      <h2>10. Tus derechos</h2>
      <p>
        De acuerdo con la Ley N.º 25.326 de Protección de los Datos Personales de
        la República Argentina, tenés derecho a acceder, rectificar, actualizar y
        suprimir tus datos personales, así como a solicitar que se limite su
        tratamiento. Para ejercer estos derechos escribinos a{" "}
        <a href={EMAIL_URL}>{EMAIL}</a>.
      </p>
      <p>
        El titular de los datos personales tiene la facultad de ejercer el
        derecho de acceso a los mismos en forma gratuita a intervalos no
        inferiores a seis meses, salvo que se acredite un interés legítimo al
        efecto, conforme lo establecido en el artículo 14, inciso 3 de la Ley
        N.º 25.326.
      </p>
      <p>
        La Agencia de Acceso a la Información Pública, en su carácter de órgano
        de control de la Ley N.º 25.326, tiene la atribución de atender las
        denuncias y reclamos que se interpongan con relación al incumplimiento de
        las normas sobre protección de datos personales.
      </p>

      <h2>11. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a empresas y a personas mayores de
        edad. No recopilamos de forma consciente datos de menores de 18 años. Si
        detectamos que recibimos datos de un menor sin la debida autorización,
        procederemos a eliminarlos.
      </p>

      <h2>12. Enlaces a sitios de terceros</h2>
      <p>
        Este sitio puede contener enlaces a plataformas externas, como redes
        sociales o WhatsApp. No somos responsables por las prácticas de
        privacidad de esos sitios, que se rigen por sus propias políticas.
      </p>

      <h2>13. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios en nuestros
        servicios o en la normativa aplicable. La versión vigente será siempre la
        publicada en esta página, con su fecha de última actualización.
      </p>

      <h2>14. Contacto</h2>
      <p>
        Ante cualquier duda sobre esta política o sobre el tratamiento de tus
        datos personales, escribinos a <a href={EMAIL_URL}>{EMAIL}</a> o por
        WhatsApp al {WHATSAPP_DISPLAY}.
      </p>
    </LegalPage>
  );
}
