## Server side rendering
   
For this website, I need to generate as many webpages as possible for server side rendering
for SEO. I've chosen to use prerender and puppeteer.
I previously had success in the following repo: 
/home/xuchen/seasalt.ai/seameet-agent-minimax/seameet-independent-website/

you should look at the following scripts:

/home/xuchen/seasalt.ai/seameet-agent-minimax/seameet-independent-website/scripts/prerender-simple.mjs
/home/xuchen/seasalt.ai/seameet-agent-minimax/seameet-independent-website/scripts/generate-static-routes.mjs

then build something similar for this code repo to generate static files during `npm run build`