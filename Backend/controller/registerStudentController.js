import db from "../db.js"

export const registerStudent = (req, res) => {
  const { name, age, contact, gurName, gurContact, gurAddress } = req.body;
  console.log(req.body);
  
  const query = `INSERT INTO students (name, age, contact, gur_name, gur_contact, gur_address)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [name, age, contact, gurName, gurContact, gurAddress], (err, result) => {
    if (err) {
      console.error('Error inserting student:', err);
      return res.status(500).json({ message: 'Error registering student' });
    }
    res.status(201).json({ message: 'Student registered successfully', result });
  });
};

export const getAllStudents = async (req,  res)=> {
  const query = `SELECT * FROM students`;
  try {
    const [results] = await db.query(query);
    console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    console.error('Error getting students:', error);
    return res.status(500).json({ error: 'Error getting students' });
  }
}

export const deleteStudent = async (req, res)=> {
  const {id} = req.params;
  console.log(id);
  
  const query = `DELETE FROM students WHERE student_id = ?`;
  try{
    await db.query(query, [id]);
    return res.status(200).json({message: 'deleted successfully'});
  } catch(error){
    console.error("error deleting", error);
    return res.status(500).json({message: 'error deleting student'});
  }
}

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age, contact, gur_name, gur_contact, gur_address } = req.body;

  const query = `UPDATE students SET name = ?, age = ?, contact = ?, gur_name = ?, gur_contact = ?, gur_address = ? WHERE student_id = ?`;

  try {
    await db.query(query, [name, age, contact, gur_name, gur_contact, gur_address, id]);
    return res.status(200).json({ message: 'Updated successfully' });
  } catch (error) {
    console.error("Error updating student", error);
    return res.status(500).json({ message: 'Error updating student' });
  }
};

