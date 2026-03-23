# Stage 1: Build the static site with Astro + Starlight
FROM node:22-alpine AS builder

# Build arguments for multi-instance support
# BASE_PATH: '/' for root deployment, '/ai/' for subpath deployment
# SITE_URL: canonical site URL for SEO/sitemap
ARG BASE_PATH=/
ARG SITE_URL=https://playbook.informationgeek.org

WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY astro.config.mjs tsconfig.json ./
COPY src/ src/
COPY public/ public/

# Pass build args as env vars for Astro config
ENV BASE_PATH=${BASE_PATH}
ENV SITE_URL=${SITE_URL}

# Build static site
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ || exit 1
