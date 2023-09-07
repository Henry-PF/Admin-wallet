import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import swal from "sweetalert";
import { getAllPlans } from '../../redux/actions';

const FormPlans = (props) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({
        nombre: '',
        costo: '',
        duracion: '',
        contenido: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { nombre, costo, duracion, contenido } = values;

        try {
            const { data } = await axios.post('https://backend-6du3.onrender.com/plans', {
                nombre,
                costo,
                duracion,
                contenido,
            });
            swal({
                title: "Plan Creado Exitosamente",
                icon: "success",
            });
            handleClose()
            dispatch(getAllPlans());
            setValues({
                nombre: '',
                costo: '',
                duracion: '',
                contenido: ''
            })
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Crear un Plan
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tipo de Plan</Form.Label>
                            <Form.Control
                                type="text"
                                name='nombre'
                                placeholder="Ejemplo: Gratis, Premium..."
                                value={values.nombre}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Valor del Plan $</Form.Label>
                            <Form.Control
                                type="number"
                                name='costo'
                                placeholder="Ingrese el monto..."
                                value={values.costo}
                                onChange={handleChange}
                                min={0}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Duración (Días)</Form.Label>
                            <Form.Control
                                type="number"
                                name='duracion'
                                placeholder="Ingrese la cantidad de días."
                                value={values.duracion}
                                onChange={handleChange}
                                min={0}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name='contenido'
                                placeholder="Ingrese la descripción del plan..."
                                value={values.contenido}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleSubmit}>
                        Crear Plan
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default FormPlans