const categorizeSimilarTransactions = (transactions) => {
  // add your code here

  class Transaction {
    constructor(transaction) {
      this.transaction = transaction;
      this.comparee = null;
      this.mostFittingToBeInSameCategory = null;
    }

    setComparee(comparee) {
      this.comparee = comparee;
    }
    hasCategoryProperty() {
      return "category" in this.transaction;
    }
    hasNotCategoryProperty() {
      return !this.hasCategoryProperty();
    }

    areSame() {
      return this.transaction === this.comparee;
    }
    areNotSame() {
      return !this.areSame();
    }
    haveSameTargetAccount() {
      return this.transaction.targetAccount === this.comparee.targetAccount;
    }
    bothPositive() {
      return this.transaction.amount > 0 && this.comparee.amount > 0;
    }
    bothNegative() {
      return this.transaction.amount < 0 && this.comparee.amount < 0;
    }
    bothHaveSameSign() {
      return this.bothPositive() || this.bothNegative();
    }

    absoluteAmountDifference() {
      return Math.abs(this.transaction.amount - this.comparee.amount);
    }

    absoluteAmountDifferenceLessThanOrEqualTo(input) {
      return this.absoluteAmountDifference() <= input;
    }

    setMostFittingToBeInSameCategory(transaction) {
      this.mostFittingToBeInSameCategory = transaction;
    }
    hasMostFittingToBeInSameCategory() {
      return this.mostFittingToBeInSameCategory instanceof Object;
    }

    minimumAbsoluteAmount() {
      return Math.abs(
        this.transaction.amount - this.mostFittingToBeInSameCategory.amount
      );
    }

    getCategoryOfMostFittingToBeInSameCategory() {
      return this.mostFittingToBeInSameCategory.category;
    }

    setCategory(category) {
      this.transaction["category"] = category;
    }
  }

  const convertedToObjectTransactions = transactions.map(
    (transaction) => new Transaction(transaction)
  );

  for (let targetTransaction of convertedToObjectTransactions) {
    if (targetTransaction.hasNotCategoryProperty()) {
      for (let compareeTransaction of convertedToObjectTransactions) {
        targetTransaction.setComparee(compareeTransaction.transaction);

        if (compareeTransaction.hasCategoryProperty()) {
          if (targetTransaction.haveSameTargetAccount()) {
            if (targetTransaction.bothHaveSameSign()) {
              if (
                targetTransaction.absoluteAmountDifferenceLessThanOrEqualTo(
                  1000
                )
              ) {
                if (targetTransaction.hasMostFittingToBeInSameCategory()) {
                  if (
                    targetTransaction.absoluteAmountDifference() <
                    targetTransaction.minimumAbsoluteAmount()
                  ) {
                    targetTransaction.setMostFittingToBeInSameCategory(
                      compareeTransaction.transaction
                    );
                  }
                } else {
                  targetTransaction.setMostFittingToBeInSameCategory(
                    compareeTransaction.transaction
                  );
                }
              }
            }
          }
        }
      }

      if (targetTransaction.hasMostFittingToBeInSameCategory()) {
        targetTransaction.setCategory(
          targetTransaction.getCategoryOfMostFittingToBeInSameCategory()
        );
      }
    }
  }

  return transactions;
};

const results = categorizeSimilarTransactions([
  {
    id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: 350,
    time: "2021-04-10T10:30:00Z",
  },
  {
    id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -150,
    category: "eating_out",
    time: "2021-03-12T12:34:00Z",
  },
  {
    id: "6359091e-1187-471f-a2aa-81bd2647210f",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: 100,
    category: "entertainment",
    time: "2021-01-12T08:23:00Z",
  },
  {
    id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
    sourceAccount: "my_account",
    targetAccount: "coffee_shop",
    amount: -1690,
    time: "2021-04-12T08:20:00Z",
  },
]);

console.log("results", results);
