const getLanguage = require('./index');

test("Return Hello for english code", () => {
    expect(getLanguage("en-UK").toBe("Hello"));
});

