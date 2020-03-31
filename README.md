# README


## Title: Valentine's Day Activities

## Description: 
Webpage allowing user to find activities that can be fun for the Valentine's Day holiday. The user can find activities based on the category the activities are associated with, and can create and delete an activity, as well as update the location of an activity. 

![](Project2.gif)

## Installation: 
This application uses: 
    - Rails version 6.0.2.1 
    - Ruby  2.6.1 
Fork & Clone down repository, run Bundle Install, run rails DB:create, run rails DB:seed. Confirm that rails server is running on the 3000 port, and front-end server runs on 3001. 

    Note: 
        -Assure that gem 'rack-cors' is uncommented, and the method in the cors.rb file is uncommented with origin accounting for all possible origins. 
        -Controllers are dependent on method overide, therefore unccomment the following code in the application.rb file: 
            config.api_only = true
            config.middleware.use Rack::MethodOverride 

## Dependencies: 
- gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
- gem 'sqlite3', '~> 1.4'
- gem 'puma', '~> 4.1'
- gem 'bootsnap', '>= 1.4.2', require: false
- gem 'rack-cors' 
- gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
- gem 'listen', '>= 3.0.5', '< 3.2'
- gem 'spring'
- gem 'spring-watcher-listen', '~> 2.0.0'
- gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby] 


## About Application: 
This application was made by Rachel Emmer and Lillian Bitner as part of the Module 2 project in the Flatiron School Software Engineering Bootcamp program. It incorporates full CRUD functionality as well as a 1:M relationship between models in the Rails API. 

Link to backend repository: https://github.com/rachelemmer/Valentine-Project



