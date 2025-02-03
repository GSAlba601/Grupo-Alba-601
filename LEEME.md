# Web del Grupo Scout Alba 601

Sitio estático: HTML + una hoja de estilos + un script pequeño. No necesita
WordPress, ni base de datos, ni conexión a servicios externos.

## Estructura

```
index.html                  Portada
manada de seonee/           Página de la Manada Alba de Seonee
tropa amazonas/             Página de la Tropa Amazonas
Esculta Mabuloa/            Página de la Esculta Mabuloa
scouters/                   Página de los scouters
comite/                     Página del comité
assets/estilo.css           Todos los estilos del sitio
assets/guion.js             Menú móvil, animaciones y aviso de datos
assets/fuentes/             Tipografías (Bricolage Grotesque + Instrument Sans)
images/                     Logos, insignias y fotos comunes
googlee4f73865e927d533.html Verificación de Google Search Console (no borrar)
```

## Cosas que se cambian a menudo

- **Enlace de preinscripción**: busca `forms.gle` en los seis `index.html`.
- **Correo y dirección**: están en el pie de cada página.
- **Año del copyright**: busca `© 2026` en los seis `index.html`.
- **Textos de las secciones**: cada uno en su propio `index.html`.
- **Equipo de coordinación**: en `index.html`, último hito del bloque
  `id="historia"`.
- **Scouters y comité**: funcionan igual que las tres secciones. La tarjeta de
  la portada (bloque `id="secciones"`) enlaza a `scouters/index.html` y
  `comite/index.html`, donde está el texto completo y la foto en grande.
- **Fotos de scouters y comité**: `images/foto-scouters.jpg` y
  `images/comite.jpg`. Si las cambias, ajusta el `width`/`height` de esa `<img>`
  con las medidas reales de la nueva foto.

## Fotos

Antes de subir una foto nueva, redúcela a 1800 px de ancho como máximo y
guárdala en JPG con calidad 80. Una foto de móvil sin comprimir pesa 3 MB y
hace que la web tarde en cargar; comprimida pesa unos 600 KB y se ve igual.

En el HTML, cada `<img>` lleva `width` y `height` con las medidas reales de la
foto. Si cambias una imagen por otra de distintas proporciones, actualiza esos
dos números o bórralos: si no coinciden, la foto se ve deformada.
