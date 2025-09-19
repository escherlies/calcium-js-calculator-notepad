dev:
  miniserve --index index.html .

deploy-preview:
  hcloud context use dev
  rsync -rvP index.html root@$(hcloud server ip nixe):/var/www/calcium/


