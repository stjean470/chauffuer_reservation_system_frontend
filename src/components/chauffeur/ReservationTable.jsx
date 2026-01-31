import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableHeadCell, TableBody, Button, TableRow, TableCell } from 'flowbite-react';
import { getAllReservations, deleteReservation, getReservationById } from '../../services/ReservationServices';
import { useNavigate } from 'react-router-dom';
const ReservationTable = () => {

    const [reservations, setReservations] = useState([])
    const navigator = useNavigate()

    const getReservations = async () => {
        // Call to ReservationServices to get all reservations
        getAllReservations().then(response => {
            console.log("Reservations data:", response.data);
            setReservations(response.data);
        }).catch(error => {
            console.error("Error fetching reservations:", error);
        })
    }

    const removeReservation = async (reservationId) => {
        // Call to ReservationServices to delete a reservation
        deleteReservation(reservationId).then(() => {
            console.log("Reservation deleted:", reservationId);
            getReservations(); // Refresh the list of reservations
        }).catch(error => {
            console.error("Error deleting reservation:", error);
        });
    }
    const viewEmployee = (reservationId) => {
        // Navigate to the view reservation page with the reservation ID
        getReservationById(reservationId).then(response => {
            console.log("View Reservation data:", response.data);
            navigator(`/viewReservation/${reservationId}`);
        }).catch(error => {
            console.error("Error fetching reservation:", error);
        });
    }

    useEffect(() => {
        getReservations();
    }, []);
  return (
    <div className='w-full p-4'>
        <h1 className='text-2xl font-bold mb-4'>Reservations</h1>
        <Table striped>

            <TableHead>
                <TableRow>
                    <TableHeadCell>Reservation ID</TableHeadCell>
                    <TableHeadCell>Customer Name</TableHeadCell>
                    <TableHeadCell>Pickup Location</TableHeadCell>
                    <TableHeadCell>Drop-off Location</TableHeadCell>
                    <TableHeadCell>Date</TableHeadCell>
                    <TableHeadCell>Time</TableHeadCell>
                    <TableHeadCell>Actions</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {reservations.map((reservation) => {
                    return (
                        <TableRow key={reservation.id}>
                            <TableCell>{reservation.id}</TableCell>
                            <TableCell>{reservation.customer?.firstName}</TableCell>
                            <TableCell>{reservation.pickupAddress}</TableCell>
                            <TableCell>{reservation.destination}</TableCell>
                            <TableCell>{reservation.date}</TableCell>
                            <TableCell>{reservation.time}</TableCell>
                            <TableCell>
                                <div className='flex justify-between'>
                                    <Button color="failure" size="sm" onClick={() => removeReservation(reservation.id)}>
                                        Delete
                                    </Button>
                                    <Button color="success" size="sm" className='ml-2' onClick={() => navigator(`/updateReservation/${reservation.id}`)}>
                                        Edit
                                    </Button>
                                    <Button color="info" size="sm" className='ml-2' onClick={() => viewEmployee(reservation.id)}>
                                        View
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                }

                )}
            </TableBody>
        </Table>
    </div>
  )
}

export default ReservationTable