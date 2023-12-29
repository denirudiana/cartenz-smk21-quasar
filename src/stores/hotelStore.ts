import { defineStore } from 'pinia';

export const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    hotels: [] as { no: number; nama: string; daerah: string[]; bintang: number }[],
  }),
  actions: {
    addHotel(hotel: any) {
      this.hotels.push(hotel);
    },
    editHotel(updatedHotel: any) {
      const index = this.hotels.findIndex((hotel) => hotel.no === updatedHotel.no);
      if (index !== -1) {
        this.hotels[index] = updatedHotel;
      }
    },
    deleteHotel(hotelNo: number) {
      const index = this.hotels.findIndex((hotel) => hotel.no === hotelNo);
      if (index !== -1) {
        this.hotels.splice(index, 1);
      }
    },
    initializeHotels(savedHotels: any[]) {
      this.hotels = savedHotels;
    },
  },
});
