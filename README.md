# Focus Lab — Marketing Digital

Sitio web corporativo de **Focus Lab**, agencia de marketing digital con sede en **Parana, Entre Rios, Argentina**.

[www.focuslab.com.ar](https://www.focuslab.com.ar)

---

## Sobre el proyecto

Landing page profesional construida con **Astro** y **Tailwind CSS v4**. Muestra los servicios de la agencia, el portafolio de clientes, el equipo y la informacion de contacto. Optimizada para SEO, rendimiento y experiencia de navegacion fluida con transiciones de vista.

### Secciones principales

- **Inicio** — Hero con CTA, servicios destacados, portafolio, clientes, testimonios y contacto.
- **Servicios** — Paginas detalle para cada servicio: Meta Ads, Diseno Grafico, Estrategia, Gestion de Redes y Reels + Ads.
- **Portafolio** — Grilla completa con 11 proyectos y paginas individuales con video/imagen.
- **Nosotros** — Historia, valores y perfil del fundador.

### Stack tecnologico

| Tecnologia   | Version  | Uso                          |
| :----------- | :------- | :--------------------------- |
| Astro        | ^6.3.1   | Framework de sitio estatico  |
| Tailwind     | ^4.2.4   | Estilos utilitarios          |
| TypeScript   | —        | Tipado estricto              |
| Node.js      | >=22.12  | Entorno de ejecucion         |

---

## Comandos

Todos los comandos se ejecutan desde la raiz del proyecto:

| Comando                   | Accion                                    |
| :------------------------ | :---------------------------------------- |
| `npm install`             | Instala las dependencias                  |
| `npm run dev`             | Inicia servidor local en `localhost:4321` |
| `npm run build`           | Compila el sitio en `./dist/`             |
| `npm run preview`         | Previsualiza el build localmente          |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro             |

---

## Estructura del proyecto

```
src/
  assets/               # Imagenes, iconos y logos
  components/           # Componentes reutilizables (Hero, Navbar, Footer, etc.)
  data/                 # Datos de servicios y portafolio
  layouts/              # Layout base HTML
  pages/                # Rutas del sitio
    index.astro         # Inicio
    nosotros.astro      # Sobre la agencia
    portafolio/         # Listado y detalle de proyectos
    servicios/          # Detalle de servicios
  styles/               # Estilos globales con Tailwind
```

---

## Caracteristicas

- Diseno responsive y moderno
- Transiciones de vista nativas de Astro
- SEO con Open Graph, JSON-LD y URLs canonicas
- Galeria de video/imagen con reproduccion automatica
- Carrusel infinito de logos de clientes
- Integracion con WhatsApp
- 100% estatico, listo para cualquier hosting
