const stringManipulator = {
    word: '',
    setValue: function (string) {
        this.word = string
        return this;
    },
    toUpperCase: function () {
        this.word = this.word.toUpperCase();
        return this;

    },

    toLowerCase: function () {
        this.word = this.word.toLowerCase();
        return this;
    },

    print: function () {
        console.log(this.word);
        return this;
    }
}

stringManipulator.setValue('Hello')
    .toUpperCase()
    .print()
    .toLowerCase()
    .print();


