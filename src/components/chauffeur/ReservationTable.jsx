import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableHeadCell, TableBody, Button, TableRow, TableCell } from 'flowbite-react';
import { getAllReservations } from '../../services/ReservationServices';
const ReservationTable = () => {

    const [reservations, setReservations] = useState([])

    const getReservations = async () => {
        // Call to ReservationServices to get all reservations
        getAllReservations().then(response => {
            setReservations(response.data);
        }).catch(error => {
            console.error("Error fetching reservations:", error);
        })
    }

    useEffect(() => {
        getReservations();

    }, []);
  return (
    <div className='w-full p-4'>
        <h1 className='text-2xl font-bold mb-4'>Reservations</h1>
        <Table striped>
            <TableHead>
                <TableHeadCell>Reservation ID</TableHeadCell>
                <TableHeadCell>Customer Name</TableHeadCell>
                <TableHeadCell>Pickup Location</TableHeadCell>
                <TableHeadCell>Drop-off Location</TableHeadCell>
                <TableHeadCell>Date</TableHeadCell>
                <TableHeadCell>Time</TableHeadCell>
                <TableHeadCell>Actions</TableHeadCell>
            </TableHead>
            <TableBody>
                {reservations.map((reservation) => {
                    return (
                        <TableRow key={reservation.id}>
                            <TableCell>{reservation.id}</TableCell>
                            <TableCell>{reservation.customer.firstName}</TableCell>
                            <TableCell>{reservation.pickupAddress}</TableCell>
                            <TableCell>{reservation.destination}</TableCell>
                            <TableCell>{reservation.date}</TableCell>
                            <TableCell>{reservation.time}</TableCell>
                            <TableCell>
                                <Button color="failure" size="sm">
                                    Delete
                                </Button>
                                <Button color="success" size="sm" className='ml-2'>
                                    Edit
                                </Button>
                                <Button color="info" size="sm" className='ml-2'>
                                    View
                                </Button>
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