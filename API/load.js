// api/load.js
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const { userId } = req.query;
    
    // In a real app, you'd load from a database
    // For demo, return empty data
    res.status(200).json({ 
      success: true,
      semesters: [] // Return empty array for new users
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};