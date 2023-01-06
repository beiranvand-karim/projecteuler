const getBalanceByCategoryInPeriod = (transactions, categories, start, end) => {
  if (!(categories && categories.length > 0)) {
    return undefined;
  }

  if (!(start instanceof Date && end instanceof Date)) {
    return undefined;
  }

  const accumulativeCategoryPriceAmounts = {};
  for (const categoryName of categories) {
    accumulativeCategoryPriceAmounts[categoryName] = 0;
  }

  /**
   * IRL transactions list will always be bigger than categories list
   * so for better performance we loop over transactions instead of categories
   *
   * To optimize condition checks: if first condition is met then we check the second condition
   */
  for (const transaction of transactions) {
    if (categories.includes(transaction.category)) {
      const transactionDateTime = new Date(transaction.time);
      if (start <= transactionDateTime && transactionDateTime < end) {
        accumulativeCategoryPriceAmounts[transaction.category] +=
          transaction.amount;
      }
    }
  }
  return accumulativeCategoryPriceAmounts;
};

getBalanceByCategoryInPeriod(
  [
    {
      id: "11ff73b5-e771-441c-886a-498d93b5093d",
      sourceAccount: "my_account",
      targetAccount: "restaurant",
      amount: -9600,
      currency: "EUR",
      category: "eating_out",
      time: "2021-04-08T05:15:56.905Z",
    },
    {
      id: "8c3ec38d-1821-4d49-aef1-2385cb3c2b1b",
      sourceAccount: "my_account",
      targetAccount: "cinema",
      amount: -5700,
      currency: "EUR",
      category: "entertainment",
      time: "2021-04-07T21:16:57.819Z",
    },
    {
      id: "d1c77d7c-ccda-453c-ac01-444e9d5abca3",
      sourceAccount: "my_account",
      targetAccount: "book_store",
      amount: -7400,
      currency: "EUR",
      category: "entertainment",
      time: "2021-04-07T22:46:44.071Z",
    },
    {
      id: "837127ab-f523-4b11-bed3-ae488be4545d",
      sourceAccount: "my_account",
      targetAccount: "fitness_club",
      amount: -9200,
      currency: "EUR",
      category: "sports",
      time: "2021-04-05T01:55:16.646Z",
    },
  ],
  ["sports", "entertainment"],
  new Date("2021-04-01"),
  new Date("2021-04-30")
);

module.exports = getBalanceByCategoryInPeriod;
