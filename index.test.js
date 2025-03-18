const convertToNepaliDate = require("./index");

test("should convert an English date to a Nepali date", () => {
  const date = new Date("2025-03-18");
  const formattedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const result = convertToNepaliDate.ad2bs(formattedDate);
  // expect(result).toBe("Converted Nepali Date for 2025-03-18");
  console.log(result);
});
