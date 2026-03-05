# Stage 1: Build the static site with Quartz v4
FROM node:22-alpine AS builder

WORKDIR /build

# Clone Quartz v4
RUN apk add --no-cache git && \
    git clone --depth 1 https://github.com/jackyzha0/quartz.git .

# Install Quartz dependencies
RUN npm ci

# Copy project config files (override Quartz defaults)
COPY quartz.config.ts quartz.config.ts
COPY quartz.layout.ts quartz.layout.ts

# Copy vault content into Quartz content directory
COPY playbook/ content/

# Build static site
# Use node directly instead of npx to avoid BusyBox incompatibility
# with #!/usr/bin/env -S shebang in Quartz CLI
RUN node --no-deprecation quartz/bootstrap-cli.mjs build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /build/public /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1
