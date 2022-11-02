Feature: The solution page testing

    Background:
         Given A user open main page
         
    Scenario: ID-4 Open the Talk to an expert from Customer Engagement Platforms page
         When A user close cookies modal window
         Then A user move to solution link in header menu
         Then A user click the customer-engagement-platforms link in dropdown menu
         Then A user click the Schedule a call with our experts button 
         Then A user sees the contact us page on the url <contactUrl> 
         Then A user sees the Talk to an expert title <title>

         Examples:
        | contactUrl                     | title            |
        | https://telnyx.com/contact-us  | Talk to an expert|


