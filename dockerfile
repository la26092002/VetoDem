# Étape 1: build
FROM node:20-alpine AS builder

# Crée le dossier de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package.json package-lock.json ./
COPY tsconfig*.json ./
COPY vite.config.ts .
COPY postcss.config.js .
COPY tailwind.config.ts .
COPY . .

# Installation des dépendances
RUN npm ci

# Build du projet
RUN npm run build

# Étape 2: serveur statique pour le build
FROM nginx:alpine

# Copie le build dans le répertoire de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copie le fichier de config nginx si tu veux en ajouter
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposition du port
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]
