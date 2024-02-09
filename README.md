# Exercise A: Creating an offer

I selected this exercise to create a comprehensive system that allows hiring managers to create and manage employment offers, and for prospective employees to view and inquire about these offers. This project was chosen for its relevance to real-world applications in HR tech, providing a practical solution for streamlining the offer process. 

## The project functionalities:

- **For Hiring Managers**: Create new offers, specify detailed compensation packages, view a list of created offers, and share offers via unique URLs.
- **For Prospective Employees**: View received offers, understand detailed compensation including non-monetary benefits, and interact with the offers through questions.

# How to Run


```
git clone https://github.com/waleed677/zolomart-exercises
cd zolomart-exercises
npm install
```

## To Run the Demo

```
just use vite command in cli
```

## To Build

```
vite build
```

## To Run the Tests

```
npm test
```


## Encountered Issues

### Unique URL Generation for Sharing Offers
- **Issue**: Generating and managing unique URLs for each offer to enable sharing posed a challenge, requiring a method to associate URLs with specific database entries securely.
- **Solution**: Used Firebase functions to generate unique identifiers for each offer and mapped these to Firestore entries, ensuring secure and straightforward sharing.

### Unit Testing
   Writing unit tests proved to be time-consuming for me. I managed to write tests for only two components, as I aimed to spend a maximum of 3 hours on this exercise.


## Feedback and Notes

This was my first encounter with a unique and interactive exercise for a home assessment, which I found quite engaging


## Screenshots + Video Link of Demo

Video Link:
```
https://www.loom.com/share/535a98a973b849c88d139310ed21ff50
```

<img src="https://github.com/waleed677/zolomart-exercises/blob/master/public/demo/1.png" width="500"/>
<img src="https://github.com/waleed677/zolomart-exercises/blob/master/public/demo/2.png" width="500"/>
<img src="https://github.com/waleed677/zolomart-exercises/blob/master/public/demo/3.png" width="500"/>

