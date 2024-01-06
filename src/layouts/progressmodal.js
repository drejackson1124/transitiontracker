import moment from 'moment';
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import helpers from '../helpers/helpers';

const ProgressModal = ({ showProgressModal, handleProgressModalClose, user }) => {
  const [voiceDepth, setVoiceDepth] = useState(1);
  const [facialHair, setFacialHair] = useState(1);
  const [bodyStrength, setBodyStrength] = useState(1);
  const [emotionalWellbeing, setEmotionalWellbeing] = useState(1);
  const [socialChanges, setSocialChanges] = useState(1);

  const handleSave = async () => {
    // Handle saving the progress data (e.g., send to backend)
    // You can access the values of the sliders: voiceDepth, facialHair, bodyStrength, emotionalWellbeing, socialChanges
    let progressObj = {
        voice: voiceDepth,
        hair: facialHair,
        strength: bodyStrength,
        emotions: emotionalWellbeing,
        social: socialChanges,
        date: moment().format(),
        username: user.username
    }

    const saveBtn = document.getElementById('save-progress');
    saveBtn.classList.add('disabled');
    const saveProgress = await helpers.updateProgress(progressObj.username, progressObj.date, progressObj.voice, progressObj.hair, progressObj.strength, progressObj.social, progressObj.emotions);
    
    // console.log(saveProgress.statusCode);

    // Close the modal
    handleProgressModalClose();
  };

  const voiceDescriptions = [
    'Not deep at all',
    'Slightly deep',
    'Moderately deep',
    'Fairly deep',
    'Average depth',
    'Slightly deep',
    'Quite deep',
    'Very deep',
    'Extremely deep',
    'Deepest possible',
  ];

  const facialHairDescriptions = [
    'No facial hair at all',
    'Minimal or very sparse facial hair',
    'Light and patchy facial hair',
    'Developing light facial hair',
    'Average or medium facial hair growth',
    'Developing thicker facial hair',
    'Noticeably thick facial hair',
    'Dense and well-defined facial hair',
    'Very dense and full facial hair',
    'Full and robust beard',
  ];

  const bodyStrengthDescriptions = [
    'Very weak',
    'Weak',
    'Below average',
    'Average',
    'Above average',
    'Strong',
    'Very strong',
    'Exceptionally strong',
    'Elite strength',
    'Maximum strength',
  ];

  const emotionalWellbeingDescriptions = [
    'Very low',
    'Low',
    'Below average',
    'Average',
    'Above average',
    'Good',
    'Very good',
    'Excellent',
    'Exceptional',
    'Peak emotional wellbeing',
  ];

  const socialChangesDescriptions = [
    'Isolated, no social engagement',
    'Minimal social interaction',
    'Limited social engagement',
    'Average social engagement',
    'Active social life',
    'Engages in various social activities',
    'Highly social and well-connected',
    'Extremely social, always surrounded by friends',
    'Social butterfly, deeply connected with others',
    'Exceptional social life and influence',
  ];

  return (
    <Modal show={showProgressModal} onHide={handleProgressModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Progress</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Voice Depth
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="range"
                min={1}
                max={10}
                value={voiceDepth}
                className='custom-slider'
                onChange={(e) => setVoiceDepth(parseInt(e.target.value))}
              />
              <p>{voiceDescriptions[voiceDepth - 1]}</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Facial Hair
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="range"
                min={1}
                max={10}
                value={facialHair}
                variant='success'
                className='custom-slider'
                onChange={(e) => setFacialHair(parseInt(e.target.value))}
              />
              <p>{facialHairDescriptions[facialHair - 1]}</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Body Strength
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="range"
                min={1}
                max={10}
                value={bodyStrength}
                variant='success'
                className='custom-slider'
                onChange={(e) => setBodyStrength(parseInt(e.target.value))}
              />
              <p>{bodyStrengthDescriptions[bodyStrength - 1]}</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Emotional Well Being
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="range"
                min={1}
                max={10}
                value={emotionalWellbeing}
                variant='success'
                className='custom-slider'
                onChange={(e) => setEmotionalWellbeing(parseInt(e.target.value))}
              />
              <p>{emotionalWellbeingDescriptions[emotionalWellbeing - 1]}</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              Social Integration
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="range"
                min={1}
                max={10}
                value={socialChanges}
                variant='success'
                className='custom-slider'
                onChange={(e) => setSocialChanges(parseInt(e.target.value))}
              />
              <p>{socialChangesDescriptions[socialChanges - 1]}</p>
            </Col>
          </Form.Group>
          <Button className="me-3" variant="secondary" onClick={handleProgressModalClose}>
          Close
        </Button>
          <Button className="purple-bg white-text" variant="primary" id="save-progress" onClick={handleSave}>
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProgressModal;
