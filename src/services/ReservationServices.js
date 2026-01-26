import axios from 'axios';
const BASE_URL = 'http://localhost:8080/reservations';

export const createReservation = async (reservation) => axios.post(`${BASE_URL}/add-reservation`, reservation);
export const getReservationById = async (reservationId) => axios.get(`${BASE_URL}/${reservationId}`);
export const getAllReservations = async () => axios.get(`${BASE_URL}`);
export const updateReservation = async (reservationId, updatedReservation) => axios.put(`${BASE_URL}/update/${reservationId}`, updatedReservation);
export const deleteReservation = async (reservationId) => axios.delete(`${BASE_URL}/delete/${reservationId}`);

