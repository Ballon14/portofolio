# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage with Apache
FROM httpd:2.4-alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Enable mod_rewrite for SPA routing
RUN sed -i 's/#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf

# Enable AllowOverride for .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/' /usr/local/apache2/conf/httpd.conf

# Expose port
EXPOSE 80

# Start Apache
CMD ["httpd-foreground"]