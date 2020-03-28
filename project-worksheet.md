# Project Overview

## Project Links

- [Link to project](https://github.com/UsagiKazma/Project-2-React-Application/blob/master/project-worksheet.md)
- [add your deployment link]()

## Project Description

My project is A Monster Hunter Hunter. Monster Data fetcher that Displays a monsters weakness weakspot and location.

## API

```
    useEffect(() => {
    console.log("App - useEffect - [skillset]", skillset);
    const skillsetURL = "https://mhw-db.com/monsters";
    const makeAPICall = async () => {
      const res = await fetch(skillsetURL);
      const json = await res.json();
      setSkillset(json);
    };
    makeAPICall();
  }, []);
```


```
 {
        "id": 23,
        "type": "large",
        "species": "brute wyvern",
        "elements": [
            "fire"
        ],
        "name": "Anjanath",
        "description": "The Anjanath patrols the Ancient Forest, looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without hesitation.",
        "ailments": [
            {
                "id": 5,
                "name": "Fireblight",
                "description": "Fireblight causes damage over time, and negates regular health recovery.",
                "recovery": {
                    "actions": [
                        "dodge"
                    ],
                    "items": [
                        {
                            "id": 7,
                            "rarity": 2,
                            "value": 120,
                            "carryLimit": 10,
                            "name": "Nulberry",
                            "description": "A mysterious berry that cures various blights."
                        }
                    ]
                },

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe](https://www.figma.com/file/J4Azftb3oJdtbvwnaM6GYu/Monster-Hunter-Armor-App?node-id=7%3A3)



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- User's Get the Weakness and effective spot on monster
- User's can search for whatever large monster they want
- User's can search up the location Areas of the Monster.
#### PostMVP EXAMPLE

-Add Responsive Styling to the weakness
-Highlight Monster parts on hover



## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This Will Work Render all the info?| 
| Monster Gallery| Will create the Ui for the monster handle the change state | 
| Monster| will handle passing down the props  | 
| MonsterElemental Weakness| Decide what Weakspots the monster will handle |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Create Mobile Design | H | 4hrs|  Est  | Est |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
[Monster Hunter Api](https://mhw-db.com/monsters)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

## React Architecture.

[React Diagram](https://app.diagrams.net/#G1YmpgIYgGsW0efqIobi8RdogASCgMedyC)

