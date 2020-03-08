# Mental Health Space

👋 If you would like to skip the developer set up, check out the [project overview](https://github.com/AYYYang/cmd-f-2020#Project-Overview). 

Check out our user flow [here](https://marvelapp.com/87ga79h). 

Peep the demo [here](http://mentalhealthmap.online/)!

## Developer Setup 

Install `node 12.xx` or higher. 

`git clone` this repository. 

`npm install` in the root directory of the newly cloned repo. 

`npm run build` to build the project. 

#### dev deploy

To both build and run the project `npm run dev`

#### test deploy for GDP platform

`npm test`

## Technical Implementation Details 

* Node, express, and html / ejs for simplicity. 
* MongoDB Atlas. 
* Google maps JavaScript API. 
* GCP compute engine and pm2 for web server hosting. 
* Domain.com for domain host. 
* Marvelapp for high fidelity mockups. 

# Project Overview

###### Mental Health Map: connecting users to specialized mental health resources. 

Everyone has a point in their life where they have a need for mental health resources - whether it be counselling services, psychiatrist specialists, or finding support groups for difficult periods in your life. When you're feeling lost, it can be especially difficult to focus your efforts on finding help. We're trying to simplify search for mental health resources. 

The idea is that after answering a few simple questions about your demographics, we filter our database of mental health resources to recommend a selection of specialized resources where you can find help in a timely manner. 

Our web app will first ask you to take a short quiz: these questions have been researched by us to find the factors that can most affect your match to resources. For example, the first question on the quiz is whether or not you are suicidal. In this case, if you answer yes, we will recommend you seek mental health resources immediately and offer several choices that can give you a prompt response. The next questions are related to age, gender, sexual orientation, etc. 

![alt text](/public/landing.png "Landing Page")

Based on your answers to the quiz, we try to match you with resources that cater to your demographic. For example, there are specialized mental health resources for youth or seniors. There are mental health resources dedicated to only those in the LGBTQ+ committee, who have a much higher mental health risk compared to the general population. 

After the quiz, you will be shown a map with points for our recommendation for where you can seek help. These recommendations are based on your quiz and current location. For future work, we intend to use machine learning models to better predict recommendations based on the resources that similarly assessed people have browsed the most. 

![alt text](/public/map.png "Specialized Resources on Map")
