// api/save.js
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { userId, semesters } = req.body;
    
    // In a real app, you'd save to a database
    // For demo, we'll just return success
    res.status(200).json({ 
      success: true,
      message: 'Data saved successfully'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};