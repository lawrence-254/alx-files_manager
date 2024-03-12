/*
 * A module that has controllers to redirect
 *
 */
const { checkRedisStatus, checkDBStatus, countUsers, countFiles } = require('../utils');

const AppController = {
  /*
   * class app controller
   */
  getStatus: async (req, res) => {
    try {
      // Check Redis and DB status
      const redisStatus = await checkRedisStatus();
      const dbStatus = await checkDBStatus();

      // Respond with status
      res.status(200).json({ redis: redisStatus, db: dbStatus });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  getStats: async (req, res) => {
    try {
      // Count users and files
      const userCount = await countUsers();
      const fileCount = await countFiles();

      // Respond with statistics
      res.status(200).json({ users: userCount, files: fileCount });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = AppController;
