CommonCritic Client

https://imgur.com/a/DaloGLs

Link to deployed client: https://myerscm.github.io/CommonCritic-Client
Link to deployed api: https://commoncritic-rails.herokuapp.com/
Link to CommonCritic api repository: https://github.com/myerscm/CommonCritic-API

Tech Stack:
-Ember.js
-JavaScript
-Ruby
-ROR
-Bootstrap
-SCSS
-Handlebars.js
-HTML
-NPM

Unsolved Problems/Future Steps:

As the app stands currently, the only truly nagging issue I want to address with this v1 build is the fact that the homepage is lacking any eye-catching landing page content. Before I move on to building v2, my first goal is going to be adding timestamp attributes to reviews, displayed publicly, and having posts display on the landing page in order of most recently posted.
For v2, the biggest goal is to implement commenting functionality on reviews
For v3, I aim to add the ability for users to add a single image to their review, displaying under title, as well as adding the ability for users to 'star' posts and comments they like, with a public display of how many stars that content has accumulated.
For v4, I aim to give users their own 'pages' that can be publicly viewed to look at a specific user's posts, comment and total stars accumulated over all formats.

Planning retrospective:

Since building this application was my first foray into ember.js and I was going into it with only 3 days of prior research, I knew I needed to envision my app growing version by version: starting small and meticulously building it up piece by piece and gradually working towards the final product I had in mind. I wanted to really deeply understand the ember framework while I was working on every piece of this project instead of trying to blow through feature construction quickly to race to implementing later version goals. I knew I should start with just one other api resource aside from user and ultimately work towards a total of 4 resources and 2 join tables within the api to work with for v4. Taking this project slowly has really helped me learn how to effectively troubleshoot with Ember and has been instrumental in my problem solving process. Upon finishing each feature, I wouldn't move on to the next feature until I could trace back every action from the file invoking it to the file it was being processed and sent back within and comprehend exactly how the code was moving each action along the chain. This helped me come to solutions to concerning issues later on much quicker than if I was simply crowdsourcing or googling solutions. I feel like going about it in this way has truly developed a lasting understanding of the framework for me and I am incredibly excited to utilize ember.js in future projects.

v1 Wireframe: https://imgur.com/a/ZrCfKmh
v1-v4 ERDs:https://imgur.com/a/N4lE5h0

User Stories:
-As a user, I want to be able to sign up, sign in, change my password and sign out
-As a user, I want to be able to browse reviews without being signed in
-As a user, I want to be able to sign in and create a review, find a specific review and be able to update/delete my own reviews
-As a user, I do not want cross site scripting/the ability for other users to modify my reviews
-As a user, I want to be able to click on a review and read the actual review content in another view state
-As a v2 user, I want to be able to post comments on reviews
-As a v3 user, I want to be able to upload a header image for my review
-As a v3 user, I want to be able to 'star' other people's reviews and comments to designate them as popular
-As a v4 user, I want to be able to click on a user's username and be taken to a page where I can see all of the reviews/comments they've posted as well as the total number of stars their reviews/comments have accumulated
-As a v4 user, I want to be able to view all of the reviews/comments that I have personally starred.
