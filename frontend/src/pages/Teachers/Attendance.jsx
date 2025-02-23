// CheckAttendanceSection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { AttendanceContainer, Content, AttendanceContent, AttendanceHeader, AttendanceList, AttendanceItem, StudentName, 
  CheckboxLabel, Divider, SubmitButton } from '../../styles/AttendanceStyles'; 

const CheckAttendanceSection = () => {
  

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            
              <React.Fragment>
                <AttendanceItem>
                  <StudentName>student name</StudentName>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                     
                    />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                    
                    />
                    Absent with apology
                  </CheckboxLabel>
                </AttendanceItem>
               
              </React.Fragment>
            
          </AttendanceList>
          <SubmitButton >Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;