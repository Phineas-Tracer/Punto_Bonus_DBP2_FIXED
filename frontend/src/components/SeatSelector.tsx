interface SeatSelectorProps {
  selectedSeats: string[];
  setSelectedSeats: (seats: string[]) => void;
}

const seats = [
  "A1","A2","A3","A4",
  "B1","B2","B3","B4",
  "C1","C2","C3","C4",
];

export default function SeatSelector({
  selectedSeats,
  setSelectedSeats,
}: SeatSelectorProps) {

  const toggleSeat = (seat: string) => {

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter(s => s !== seat)
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3">

      {seats.map((seat) => (

        <button
          key={seat}
          onClick={() => toggleSeat(seat)}
          className={`p-3 rounded border
            ${
              selectedSeats.includes(seat)
                ? "bg-green-500 text-white"
                : "bg-white"
            }`}
        >
          {seat}
        </button>

      ))}

    </div>
  );
}