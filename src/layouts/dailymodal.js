import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import moment from 'moment';
import helpers from '../helpers/helpers';

const DailyModal = ({ showModal, handleClose, user, updateMoodChart }) => {
    const [selectedMood, setSelectedMood] = useState('');
    const [userNotes, setUserNotes] = useState('');
    const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

    useEffect(() => {
        setCurrentDayOfWeek(moment().format('dddd'));
    }, [showModal]);
  
    const handleMoodChange = (event) => {
      setSelectedMood(event.target.value);
    };
  
    const handleNotesChange = (event) => {
      setUserNotes(event.target.value);
    };
  
    const handleSubmit = async () => {
      const submit = document.getElementById("dailymodalsubmit");
      submit.classList.add('disabled');
      const submitDetails = await helpers.addMood(selectedMood, userNotes, user.username, moment().format());
      if(submitDetails.statusCode === 200){
        updateMoodChart();
        handleClose();
      } else {
        console.log(submitDetails);
      }
    };

return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className="purple-bg white-text">
      <Modal.Title>Just checking up on you this {currentDayOfWeek}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>How are you feeling today?</Form.Label>
            <Form.Check
              type="radio"
              label="Happy"
              value="happy"
              checked={selectedMood === 'happy'}
              onChange={handleMoodChange}
            />
            <Form.Check
              type="radio"
              label="Sad"
              value="sad"
              checked={selectedMood === 'sad'}
              onChange={handleMoodChange}
            />
            <Form.Check
              type="radio"
              label="Angry"
              value="angry"
              checked={selectedMood === 'angry'}
              onChange={handleMoodChange}
            />
            <Form.Check
              type="radio"
              label="Neutral"
              value="neutral"
              checked={selectedMood === 'neutral'}
              onChange={handleMoodChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Any particular things you want to take note of?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={userNotes}
              onChange={handleNotesChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button id="dailymodalsubmit" className="purple-bg white-text" variant="purple-bg" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DailyModal;