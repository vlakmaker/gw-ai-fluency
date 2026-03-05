# CX32 Server Setup

One-time manual setup for the Hetzner CX32 server to host the AI Fluency Playbook.

---

## Prerequisites

- SSH access to CX32
- Domain DNS pointing to the CX32 IP address

## 1. Install Docker

```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh

# Install Docker Compose plugin
apt install -y docker-compose-plugin

# Verify
docker --version
docker compose version
```

## 2. Set up Traefik

Create the Traefik network and configuration:

```bash
# Create external network for Traefik
docker network create traefik

# Create Traefik data directory
mkdir -p /opt/traefik
```

Create `/opt/traefik/docker-compose.yml`:

```yaml
services:
  traefik:
    image: traefik:v3
    container_name: traefik
    restart: unless-stopped
    command:
      - "--api.dashboard=false"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=your-email@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /opt/traefik/letsencrypt:/letsencrypt
    networks:
      - traefik

networks:
  traefik:
    external: true
```

Start Traefik:

```bash
cd /opt/traefik && docker compose up -d
```

## 3. Clone the project

```bash
mkdir -p /opt/apps
cd /opt/apps
git clone <repo-url> gw-ai-fluency
```

## 4. Configure domain

Edit `/opt/apps/gw-ai-fluency/docker-compose.yml` and replace `playbook.example.com` with your actual domain.

Also update `quartz.config.ts` — set `baseUrl` to your domain.

## 5. Start the service

```bash
cd /opt/apps/gw-ai-fluency
docker compose up -d --build
```

## 6. Verify

```bash
# Check container is running
docker compose ps

# Check logs
docker compose logs -f playbook

# Test locally
curl -I http://localhost
```

Visit `https://your-domain.com` to verify HTTPS is working.

---

## SSH Deploy Key

For GitHub Actions to deploy via SSH:

```bash
# On CX32: create a deploy user (or use existing)
# Generate a key pair for CI
ssh-keygen -t ed25519 -C "github-actions-deploy" -f /tmp/deploy_key -N ""

# Add public key to authorized_keys
cat /tmp/deploy_key.pub >> ~/.ssh/authorized_keys

# Copy private key — add as GitHub secret CX32_SSH_KEY
cat /tmp/deploy_key

# Clean up
rm /tmp/deploy_key /tmp/deploy_key.pub
```

Add these GitHub repository secrets:
- `CX32_HOST` — Server IP or hostname
- `CX32_SSH_KEY` — The private key from above
- `CX32_USER` — SSH username (e.g., `root` or deploy user)
