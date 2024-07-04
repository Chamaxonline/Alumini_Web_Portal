import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// Dummy data for faculties (replace this with your actual data source)
const faculties = [
  { id: 1, name: 'Faculty of Science' },
  { id: 2, name: 'Faculty of Arts' },
  { id: 3, name: 'Faculty of Engineering' }
];

const Department = () => {
  const [name, setName] = useState('');
  const [facultyId, setFacultyId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Department Name:', name);
    console.log('Faculty ID:', facultyId);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Department
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            fullWidth
            label="Department Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            variant="outlined"
            required
          />
          <FormControl fullWidth margin="normal" variant="outlined" required>
            <InputLabel id="faculty-label">Faculty</InputLabel>
            <Select
              labelId="faculty-label"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
              label="Faculty"
            >
              {faculties.map((faculty) => (
                <MenuItem key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Department;
