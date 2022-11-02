Feature: The header page testing

    Background:
         Given A user open main page
         
    Scenario: ID-2 Move mouse to Product, Solution, Resources,Company,Pricing links in the heder menu
         When A user close cookies modal window
         Then A user move to Products menu link on the header and sees the dropdown menu in the all links

    Scenario: ID-3 Check that all item from Products dropdown menu on header to be able click
         When A user close cookies modal window
         Then A user move to Products menu link on the header and sees the all links are clickable