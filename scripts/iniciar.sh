
#!/bin/sh
set -e

echo "Preparando o banco de dados..."

mkdir -p /app/data

echo "Aplicando migracoes pendentes..."
npx prisma migrate deploy

echo "Iniciando a API e os WebSockets..."
exec npm start
