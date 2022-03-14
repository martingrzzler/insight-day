# JavaScript Challenges

The following tasks aim to assess you JavaScript knowledge. This tasks are again
presented as [Codepens](https://codepen.io/). In order to complete the challenges you have to
[fork](https://blog.codepen.io/documentation/forks/) the respective codepen, follow the instructions to complete the task,
save it, and paste the link into the given spaces. In the end you can commit and push the changes to your Github repository.

### True length

In this challenge you have to create a function which returns the number of true values there are in an array.

Examples:

```js
countTrue([true, false, true, false])
-> 2

countTrue([false])
-> 0
```

[Codepen](https://codepen.io/readonlyadditive/pen/gOmgLQY?editors=1112)

`Insert the link of your completed codepen here.`

### jQuery Hell

In this challenge you have refactor code by replacing jQuery with vanilla JavaScript and possibly some CSS.

[Codepen](https://codepen.io/readonlyadditive/pen/wvJgoNK)

`Insert the link of your completed codepen here.`

### Price in Euro

In this challenge you have given a function that takes an array of objects as parameter. Each object
contains a property `priceInCent`. Your task is to add a property `priceInEuro` to each of the objects,
which contains the formatted price in euro (e.g. 15,00 €).

Example:

```js
appendFormattedPrice([{title: 'Offer 1', priceInCent: 15000}, {title: 'Offer 2', priceInCent: 17050}])
-> [{title: 'Offer 1', priceInCent: 15000, priceInEuro: '150.00 €'}, {title: 'Offer 2', priceInCent: 17050, priceInEuro: '170.50 €'}]
```

[Codepen](https://codepen.io/readonlyadditive/pen/OJpWWPM?editors=0011)

`Insert the link of your completed codepen here.`

### Date Validation

In this challenge you have to fix the validation of two datepickers. The start and end date should be validated using the
following rules:

- Start date should be in the future, today included.
- The end date must be after the start date.
- The end date must be before the end of the current year.
- Error messages must be displayed.

[Codepen](https://codepen.io/readonlyadditive/pen/JjWEEdw)

`Insert the link of your completed codepen here.`
