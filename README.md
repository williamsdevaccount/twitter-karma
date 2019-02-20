# twitter-karma

[![Greenkeeper badge](https://badges.greenkeeper.io/williamsdevaccount/twitter-karma.svg)](https://greenkeeper.io/)


Use this service to determine how negative you or a friend are on twitter.This function uses webtask and the algroithma service. to use simply clone this repository,create a twitter app,make a algorithma account, and then upload to webtask.io

`wt create tweets.js \
       --name twitter-karma \
    --parse-body \
    --secret APP_KEY=YOUR_TWITTER_APP_KEY \
    --secret APP_SECRET=YOUR_TWITTER_SECRET_KEY \
    --secret AUTH_TOKEN=YOUR_TWITTER_APP_AUTH_TOKEN \
    --secret AUTH_SECRET= YOUR_TWITTER_APP_AUTH_SECRET\  --secret API_KEY=YOUR_ALGORITHMA_KEY`
    
   