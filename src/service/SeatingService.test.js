import SeatingService from "./SeatingService";

describe("SeatingService", () => {
  const seatingServiceObj = new SeatingService();

  describe("Test bookSeats", () => {
    it("Should return available and reserved seats per show number when booked", () => {
      seatingServiceObj.bookSeats(["A2"], 1).then(data => {
        expect(data).toEqual({
          availableSeats: [
            "A1",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
            "B9",
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "C7",
            "C8",
            "C9"
          ],
          reservedSeats: ["A2"]
        });
      });
    });
  });

  describe("Test getAvailableSeats", () => {
    it("Should return available and reserved seats per show number", () => {
      expect(seatingServiceObj.getAvailableSeats(1)).toEqual({
        availableSeats: [
          "A1",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "A9",
          "B1",
          "B2",
          "B3",
          "B4",
          "B5",
          "B6",
          "B7",
          "B8",
          "B9",
          "C1",
          "C2",
          "C3",
          "C4",
          "C5",
          "C6",
          "C7",
          "C8",
          "C9"
        ],
        reservedSeats: ["A2"]
      });
    });
  });
});
