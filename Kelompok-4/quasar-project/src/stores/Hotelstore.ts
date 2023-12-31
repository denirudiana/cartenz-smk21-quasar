import { defineStore } from 'pinia';

export const useHotelStore = defineStore({
  id: 'hotel',
  state: () => ({
    hotels: [] as { no: string; hotel: string; reg: string[] }[],
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
    deleteHotel(hotelNo: string) {
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