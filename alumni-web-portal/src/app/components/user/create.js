import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, MenuItem, Select, InputLabel, FormControl,Grid } from '@mui/material';

// Dummy data for dropdowns (replace this with your actual data source)
const batches = [
  { id: 1, name: '2006/2007' },
  { id: 2, name: '2007/2008' }
];

const faculties = [
  { id: 1, name: 'Faculty of Science' },
  { id: 2, name: 'Faculty of Arts' },
  { id: 3, name: 'Faculty of Engineering' }
];

const departments = [
  { id: 1, name: 'Department of Physics', facultyId: 1 },
  { id: 2, name: 'Department of Chemistry', facultyId: 1 },
  { id: 3, name: 'Department of History', facultyId: 2 },
  { id: 4, name: 'Department of Languages', facultyId: 2 },
  { id: 5, name: 'Department of Civil Engineering', facultyId: 3 },
  { id: 6, name: 'Department of Mechanical Engineering', facultyId: 3 }
];

const degrees = [
  { id: 1, name: 'BSc Physics', departmentId: 1 },
  { id: 2, name: 'BSc Chemistry', departmentId: 2 },
  { id: 3, name: 'BA History', departmentId: 3 },
  { id: 4, name: 'BA Languages', departmentId: 4 },
  { id: 5, name: 'BEng Civil', departmentId: 5 },
  { id: 6, name: 'BEng Mechanical', departmentId: 6 }
];

const User = () => {
  const [formData, setFormData] = useState({
    nic: '',
    title: '',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    batchId: '',
    facultyId: '',
    departmentId: '',
    degreeId: '',
    address: '',
    city: '',
    postalCode: '',
    mobileNumber: '',
    organization: '',
    professionDesignation: '',
    officeAddress: '',
    lnProfile: '',
    twitterProfile: '',
    facebookProfile: '',
    password: ''
  });

  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredDegrees, setFilteredDegrees] = useState([]);

  useEffect(() => {
    if (formData.facultyId) {
      setFilteredDepartments(departments.filter(dep => dep.facultyId === formData.facultyId));
    } else {
      setFilteredDepartments([]);
    }
  }, [formData.facultyId]);

  useEffect(() => {
    if (formData.departmentId) {
      setFilteredDegrees(degrees.filter(deg => deg.departmentId === formData.departmentId));
    } else {
      setFilteredDegrees([]);
    }
  }, [formData.departmentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User Data:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add User
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="NIC"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          </Grid>
          </Grid>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <FormControl fullWidth margin="normal" variant="outlined" required>
            <InputLabel id="batch-label">Batch</InputLabel>
            <Select
              labelId="batch-label"
              name="batchId"
              value={formData.batchId}
              onChange={handleChange}
              label="Batch"
            >
              {batches.map((batch) => (
                <MenuItem key={batch.id} value={batch.id}>
                  {batch.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined" required>
            <InputLabel id="faculty-label">Faculty</InputLabel>
            <Select
              labelId="faculty-label"
              name="facultyId"
              value={formData.facultyId}
              onChange={handleChange}
              label="Faculty"
            >
              {faculties.map((faculty) => (
                <MenuItem key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined" required disabled={!formData.facultyId}>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
              labelId="department-label"
              name="departmentId"
              value={formData.departmentId}
              onChange={handleChange}
              label="Department"
            >
              {filteredDepartments.map((department) => (
                <MenuItem key={department.id} value={department.id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined" required disabled={!formData.departmentId}>
            <InputLabel id="degree-label">Degree Program</InputLabel>
            <Select
              labelId="degree-label"
              name="degreeId"
              value={formData.degreeId}
              onChange={handleChange}
              label="Degree Program"
            >
              {filteredDegrees.map((degree) => (
                <MenuItem key={degree.id} value={degree.id}>
                  {degree.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Professional Designation"
            name="professionDesignation"
            value={formData.professionDesignation}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Office Address"
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="LinkedIn Profile"
            name="lnProfile"
            value={formData.lnProfile}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Twitter Profile"
            name="twitterProfile"
            value={formData.twitterProfile}
            onChange={handleChange}
            margin="normal"
            variant="outlined"/>
          <TextField
            fullWidth
            label="Facebook Profile"
            name="facebookProfile"
            value={formData.facebookProfile}
            onChange={handleChange}
            margin="normal"
            variant="outlined" />
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
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

export default User;

            
