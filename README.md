# clerk-vercel-ready

> Porque usar Clerk + Next.js + Vercel + locales **no debería sentirse como resolver un cubo Rubik con los ojos vendados**.

Este repo existe por una razón muy concreta:  
hacer que **Clerk funcione bien con Next.js App Router, Vercel y rutas con `[locale]` (EN / ES)**, sin hacks raros ni magia oscura.

Si llegaste acá frustrado: estás en el lugar correcto.

---

## Qué es este repo

- Un **starter mínimo** para:
  - Next.js (App Router)
  - Clerk (auth)
  - Vercel (deploy real)
  - Soporte desde el día 1 para `/en` y `/es`
- Separación clara entre:
  - UI con locale
  - API sin locale
  - Auth que no rompe nada

Nada más. Nada menos.

---

## Qué NO es

- ❌ No es el template oficial de Clerk (aunque empezó ahí… y luego se fue de control)
- ❌ No es una demo bonita
- ❌ No es un curso
- ❌ No intenta enseñarte auth desde cero

Es un repo **operativo**, no educativo.

---

## Estructura mental del proyecto

Regla de oro:

> **Todo lo visible vive bajo `/[locale]`.  
La lógica vive fuera.**

app/
├── [locale]/ ← páginas, layout, navegación
├── api/ ← routes (sin locale)
├── components/ ← UI reusable (sin copy)
├── layout.tsx ← providers (Clerk, etc.)
proxy.ts ← locale + Clerk + Vercel en paz


Si rompes esta regla, el caos vuelve.

---

## Requisitos

- Node 18+
- Cuenta en Clerk
- Paciencia moderada
- Cero ganas de pelear con middleware deprecated

---

## Setup rápido

```bash
git clone https://github.com/TU-USUARIO/clerk-vercel-ready

cd clerk-vercel-ready

npm install

Crea una app en Clerk

Copia las variables a .env.local (ver .env.example)

Corre: npm run dev

Abre: http://localhost:3000/en