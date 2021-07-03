Don't judge this too harshly. I had an hour this morning while my 10 month old was taking a nap.

### Why make this?

I've recently been using nordvpn on my linux home server, but the port whitelisting has been very shaky- or pretty much not working at all.
I was tired of SSHing into my server to turn on or off the VPN so I made a very quick/dirty web UI so I can do it from my phone.

It can only connect/disconnect from a P2P server and show basic into/settings, I just needed the connect/disconnect button...

### Why node etc?

Node cos I love it. Fastify cos I recently seen a Traversy Media video about it and it makes pretty much zero difference what framework I use for something this small.
I used the first templating language I seen in the Fastify docs page, could've been anything/nothing.

### Why is this crap even public?

Ah, why not. Might help someone or inspire them to make something better.

### How I have it running.

- Ubuntu server + Apache webserver, didn't set up nginx at all on this server. Probably won't until I upgrade anyway.
- nodejs 14.16.1 PM2 for managing the process.
- I have Pi-Hole as a DHCP server on a raspberry pi 3 which allows me to create a custom local domain, which I did for this thing.
- I also have the nordvpn linux CLI installed... This is as required as anything can possibly be.

1. Clone the repo. Obvz.
2. Run `npm i` to install.
3. Install pm2 with `npm i -g pm2` and run `pm2 start server.js --name 'nordvpn-webui'`
4. Create a .conf file in /etc/apache2/sites-available and symlink it to sites-enabled.
   - I used my local domain name but the ports should work fine, I didn't test it so it probably doesn't work fine.

### Notes

There are no tests or anything at all useful here, I'm sorry if you came here expecting a kick-ass selfhosted solution. It took me longer to write this readme than it did to get the rest of the app built and working.
