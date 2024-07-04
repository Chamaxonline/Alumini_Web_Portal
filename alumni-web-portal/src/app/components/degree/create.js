import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// Dummy data for faculties and departments (replace this with your actual data source)
const faculties = [
  { id: 1, name: 'Faculty of Science' },
  { id: 2, name: 'Faculty of Arts' },
  { id: 3, name: 'Faculty of Engineering' }
];

const departments = {
  1: [
    { id: 1, name: 'Department of Physics' },
    { id: 2, name: 'Department of Chemistry' }
  ],
  2: [
    { id: 3, name: 'Department of History' },
    { id: 4, name: 'Department of Languages' }
  ],
  3: [
    { id: 5, name: 'Department of Civil Engineering' },
    { id: 6, name: 'Department of Mechanical Engineering' }
  ]
};

const DegreeProgram = () => {
  const [facultyId, setFacultyId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [degreeProgramName, setDegreeProgramName] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  useEffect(() => {
    if (facultyId) {
      setFilteredDepartments(departments[facultyId] || []);
    } else {
      setFilteredDepartments([]);
    }
  }, [facultyId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Degree Program Name:', degreeProgramName);
    console.log('Faculty ID:', facultyId);
    console.log('Department ID:', departmentId);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Degree Program
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          <FormControl fullWidth margin="normal" variant="outlined" required disabled={!facultyId}>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              label="Department"
            >
              {filteredDepartments.map((department) => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Degree Program Name"
            value={degreeProgramName}
            onChange={(e) => setDegreeProgramName(e.target.value)}
            margin="normal"
            variant="outlined"
            required
          />
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

export default DegreeProgram;
