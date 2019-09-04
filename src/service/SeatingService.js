export default class SearchFormService {
  seats = [
    "A1",
    "A2",
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
  ];
  seatingArrangement = {
    1: {
      availableSeats: this.seats,
      reservedSeats: []
    },
    2: {
      availableSeats: [
        "A1",
        "A2",
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
        "B9"
      ],
      reservedSeats: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"]
    },
    3: {
      availableSeats: this.seats,
      reservedSeats: []
    }
  };
  getAvailableSeats(movieId) {
    return {
      availableSeats: this.seatingArrangement[movieId].availableSeats,
      reservedSeats: this.seatingArrangement[movieId].reservedSeats
    };
  }
  bookSeats(selectedSeats, movieId) {
    const movieData = { ...this.seatingArrangement[movieId] };
    movieData.reservedSeats = movieData.reservedSeats.concat(selectedSeats);
    movieData.availableSeats = [
      ...movieData.availableSeats.filter(x => selectedSeats.indexOf(x) === -1),
      ...selectedSeats.filter(x => movieData.availableSeats.indexOf(x) === -1)
    ];
    this.seatingArrangement[movieId] = movieData;
    return Promise.resolve(this.seatingArrangement[movieId]);
  }
}
