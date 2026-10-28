# Residencia Valle de Bravo — sitio de presentación

Sitio estático (HTML, CSS y JS, sin dependencias) con enfoque de inmobiliaria de lujo, armado con el material del video «Residencia de lujo en Valle de Bravo de $40,000,000».

**Secciones:**
- portada con el reel aéreo y el precio;
- ficha de datos;
- la propiedad;
- tres loops: lago, estancia y alberca;
- espacios;
- galería con visor;
- ubicación, con un mapa general;
- contacto.

> **No oficial.** Las imágenes son del video de recorrido. El precio (USD 1,950,000) es el que aparece en el video, y el título del video dice $40,000,000 MXN. Hay que confirmarlo antes de usarlo comercialmente. Solo se muestran datos visibles en el video: no hay m², recámaras ni amenidades inventadas.

## Antes de usarlo

Los datos de contacto (`WHATSAPP` y `CORREO`) están en `main.js`. Sin número de WhatsApp, el botón no se muestra.

## Verlo local

```bash
python -m http.server 8096
```

## Publicarlo

- **GitHub Pages:** Settings > Pages > Deploy from a branch > `main` / root.
- **VPS con nginx:** copiar la carpeta y apuntar un `server` a esa ruta.
