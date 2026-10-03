import React, { useEffect, useMemo, useState } from 'react'
import './Attendance.css'

const classStudents = {
  0: ['Aarav', 'Isha', 'Rohan', 'Mira'],
  1: ['Vikram', 'Tanya', 'Sahil', 'Neha'],
  2: ['Karan', 'Meera', 'Ritika', 'Dev'],
  3: ['Yash', 'Pooja', 'Arjun', 'Sneha'],
  4: ['Rajat', 'Kavya', 'Ritika', 'Nikhil'],
  5: ['Riya', 'Aditya', 'Shreya', 'Akash'],
  6: ['Pavan', 'Diya', 'Maya', 'Ravi'],
}

function Attendance() {
  const classOptions = [0, 1, 2, 3, 4, 5, 6]
  const [selectedClass, setSelectedClass] = useState('0')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10))
  const [attendance, setAttendance] = useState({})

  const students = useMemo(() => classStudents[selectedClass] || [], [selectedClass])

  useEffect(() => {
    const initial = (classStudents[selectedClass] || []).reduce((acc, student) => {
      acc[student] = false
      return acc
    }, {})
    setAttendance(initial)
  }, [selectedClass])

  const toggleStudent = (student) => {
    setAttendance((prev) => ({ ...prev, [student]: !prev[student] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = {
      class: selectedClass,
      date: selectedDate,
      attendance,
      presentCount: Object.values(attendance).filter(Boolean).length,
      totalStudents: students.length,
    }
    console.log('Attendance submitted:', result)
    alert(`Saved attendance for class ${selectedClass} on ${selectedDate} (Present: ${result.presentCount}/${result.totalStudents})`)
  }

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>

      <form onSubmit={handleSubmit} className="attendance-form">
        <div className="form-row">
          <label htmlFor="class-select">Select Class</label>
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="attend-date">Date</label>
          <input
            id="attend-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="form-row student-list-wrapper">
          <h3>Students (Class {selectedClass})</h3>
          {students.length === 0 ? (
            <p>No students for class {selectedClass}</p>
          ) : (
            <ul className="student-list">
              {students.map((student) => (
                <li key={student} className="student-row">
                  <label>
                    <input
                      type="checkbox"
                      checked={attendance[student] || false}
                      onChange={() => toggleStudent(student)}
                    />
                    {student}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-row">
          <button type="submit" className="save-btn">
            Save Attendance
          </button>
        </div>
      </form>

      <div className="summary">
        <p>
          Present: {Object.values(attendance).filter(Boolean).length} / {students.length}
        </p>
      </div>
    </div>
  )
}

export default Attendance
