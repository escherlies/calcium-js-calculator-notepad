dev:
  miniserve --index index.html .

deploy-preview:
  hcloud context use dev
  rsync -rvP src/ root@$(hcloud server ip nixe):/var/www/calcium/


